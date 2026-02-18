/**
 * Formgrid Form Submission Utility
 * Enhanced with security, validation, and error handling
 * Supports file uploads on free tier
 */

const FORMGRID_ENDPOINT = 'https://formgrid.dev/api/f/mcn7ywrb';
const FORM_TIMEOUT = 30000; // 30 seconds
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB (Formgrid free tier limit)
const ALLOWED_FILE_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

export interface FormSubmissionData {
  [key: string]: string | File | null;
}

export interface FormSubmissionOptions {
  successMessage?: string;
  redirectTo?: string;
}

export interface FormSubmissionResult {
  success: boolean;
  message?: string;
  error?: string;
}

/**
 * Custom error types for better error handling
 */
export class FormValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FormValidationError';
  }
}

export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NetworkError';
  }
}

export class RateLimitError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'RateLimitError';
  }
}

/**
 * Sanitize input to prevent XSS attacks
 */
function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove < and > to prevent script tags
    .substring(0, 10000); // Limit length
}

/**
 * Validate email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number (optional field)
 */
function isValidPhone(phone: string): boolean {
  if (!phone) return true; // Phone is optional
  const phoneRegex = /^[+]?[\d\s\-()]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

/**
 * Validate form data before submission
 * Supports both Dutch (naam, bericht) and English (name, message) field names
 */
function validateFormData(data: Record<string, any>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Check name field (supports both 'naam' and 'name')
  const nameValue = data.naam || data.name || '';
  if (!nameValue || nameValue.trim().length < 2) {
    errors.push('Naam moet minimaal 2 karakters bevatten');
  }

  // Check email field
  const emailValue = data.email || '';
  if (!emailValue || !isValidEmail(emailValue)) {
    errors.push('Voer een geldig e-mailadres in');
  }

  // Check phone field (optional, supports both 'telefoon' and 'phone')
  const phoneValue = data.telefoon || data.phone || '';
  if (phoneValue && !isValidPhone(phoneValue)) {
    errors.push('Voer een geldig telefoonnummer in');
  }

  // Check message field (supports both 'bericht' and 'message')
  const messageValue = data.bericht || data.message || '';
  if (!messageValue || messageValue.trim().length < 10) {
    errors.push('Bericht moet minimaal 10 karakters bevatten');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

/**
 * Validate file uploads
 */
function validateFile(file: File): { valid: boolean; error?: string } {
  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: `Bestand is te groot. Maximale grootte is ${MAX_FILE_SIZE / 1024 / 1024}MB`
    };
  }

  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return {
      valid: false,
      error: 'Alleen PDF en Word documenten zijn toegestaan'
    };
  }

  return { valid: true };
}

/**
 * Simple rate limiting check (client-side)
 */
const submissionTracker = {
  lastSubmission: 0,
  count: 0
};

function checkRateLimit(): boolean {
  const now = Date.now();
  const timeSinceLastSubmission = now - submissionTracker.lastSubmission;
  
  // Reset counter after 1 minute
  if (timeSinceLastSubmission > 60000) {
    submissionTracker.count = 0;
  }
  
  // Allow max 3 submissions per minute
  if (submissionTracker.count >= 3 && timeSinceLastSubmission < 60000) {
    return false;
  }
  
  // Prevent double submissions (minimum 2 seconds between submissions)
  if (timeSinceLastSubmission < 2000) {
    return false;
  }
  
  submissionTracker.lastSubmission = now;
  submissionTracker.count++;
  return true;
}

/**
 * Fetch with timeout - returns error info instead of throwing
 */
async function fetchWithTimeout(
  url: string, 
  options: RequestInit, 
  timeout: number
): Promise<{ response?: Response; error?: string }> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    return { response };
  } catch (error) {
    clearTimeout(timeoutId);
    
    // Handle timeout
    if (error instanceof Error && error.name === 'AbortError') {
      return { error: 'De aanvraag duurde te lang. Controleer je internetverbinding en probeer het opnieuw.' };
    }
    
    // Handle network errors
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      return { error: 'Kan geen verbinding maken met de server. Controleer je internetverbinding en probeer het opnieuw.' };
    }
    
    // Generic network error
    return { error: 'Netwerkfout. Controleer je internetverbinding en probeer het opnieuw.' };
  }
}

/**
 * Submit form data to Formgrid (without files)
 */
export async function submitToFormgrid(
  formData: FormData,
  options: FormSubmissionOptions = {}
): Promise<FormSubmissionResult> {
  try {
    // Rate limiting check
    if (!checkRateLimit()) {
      return {
        success: false,
        error: 'Te veel aanvragen. Wacht even en probeer het opnieuw.'
      };
    }

    // Create new FormData with sanitized values
    const submitData = new FormData();
    const validationData: Record<string, any> = {};

    // Copy and sanitize all form fields
    formData.forEach((value, key) => {
      // Skip botcheck (honeypot)
      if (key === 'botcheck') {
        return;
      }
      
      if (value instanceof File) {
        return; // Skip files in this function
      }
      
      const sanitizedValue = sanitizeInput(value as string);
      submitData.append(key, sanitizedValue);
      validationData[key] = sanitizedValue;
    });

    // Validate form data
    const validation = validateFormData(validationData);
    if (!validation.valid) {
      return {
        success: false,
        error: validation.errors.join('\n')
      };
    }

    // Debug logging (only in development)
    if (process.env.NODE_ENV === 'development') {
      console.log('Submitting to Formgrid...');
      console.log('Fields:', Array.from(submitData.keys()));
    }

    // Submit to Formgrid with timeout
    const fetchResult = await fetchWithTimeout(
      FORMGRID_ENDPOINT,
      {
        method: 'POST',
        body: submitData,
      },
      FORM_TIMEOUT
    );

    // Check for fetch error
    if (fetchResult.error) {
      return {
        success: false,
        error: fetchResult.error
      };
    }

    const response = fetchResult.response!;

    // Check response status
    if (!response.ok) {
      if (response.status === 429) {
        return {
          success: false,
          error: 'Te veel aanvragen. Probeer het later opnieuw.'
        };
      }
      if (response.status === 413) {
        return {
          success: false,
          error: 'De aanvraag is te groot. Probeer het opnieuw met minder gegevens.'
        };
      }
      if (response.status === 400) {
        return {
          success: false,
          error: 'Er is een probleem met de formuliergegevens. Controleer of alle velden correct zijn ingevuld.'
        };
      }
      return {
        success: false,
        error: `Er is een fout opgetreden (${response.status}). Probeer het later opnieuw.`
      };
    }

    // Formgrid returns various response types, handle gracefully
    const successMessage = options.successMessage || 'Bedankt! We nemen zo snel mogelijk contact met je op.';
    
    return { 
      success: true, 
      message: successMessage
    };
  } catch (error) {
    console.error('Form submission error:', error);

    // Handle network errors
    if (error instanceof Error && error.name === 'AbortError') {
      return {
        success: false,
        error: 'De verbinding duurde te lang. Controleer je internetverbinding en probeer het opnieuw.'
      };
    }

    // Handle any other errors gracefully
    if (error instanceof Error) {
      return {
        success: false,
        error: 'Er is een probleem opgetreden. Probeer het opnieuw of neem contact op via telefoon: +31 6 41875803'
      };
    }

    // Generic error
    return {
      success: false,
      error: 'Er is een onverwachte fout opgetreden. Probeer het later opnieuw of neem contact op via telefoon: +31 6 41875803'
    };
  }
}

/**
 * Submit form with file attachments (using FormData directly)
 */
export async function submitToFormgridWithFiles(
  formData: FormData,
  options: FormSubmissionOptions = {}
): Promise<FormSubmissionResult> {
  try {
    // Rate limiting check
    if (!checkRateLimit()) {
      return {
        success: false,
        error: 'Te veel aanvragen. Wacht even en probeer het opnieuw.'
      };
    }

    // Create new FormData for submission
    const submitData = new FormData();
    const validationData: Record<string, any> = {};
    
    // Copy all form fields to submitData
    formData.forEach((value, key) => {
      // Skip botcheck (honeypot)
      if (key === 'botcheck') {
        return;
      }
      
      // Handle files
      if (value instanceof File && value.size > 0) {
        // Validate file
        const fileValidation = validateFile(value);
        if (!fileValidation.valid) {
          // Store validation error to return
          throw new FormValidationError(fileValidation.error || 'Ongeldig bestand');
        }
        submitData.append(key, value, value.name);
      } else if (!(value instanceof File)) {
        // Handle text fields
        const sanitizedValue = sanitizeInput(value as string);
        submitData.append(key, sanitizedValue);
        validationData[key] = sanitizedValue;
      }
    });

    // Validate text fields
    const validation = validateFormData(validationData);
    if (!validation.valid) {
      return {
        success: false,
        error: validation.errors.join('\n')
      };
    }

    // Debug logging (only in development)
    if (process.env.NODE_ENV === 'development') {
      console.log('Submitting to Formgrid with files...');
      console.log('Fields:', Array.from(submitData.keys()));
    }

    // Submit to Formgrid with timeout
    const fetchResult = await fetchWithTimeout(
      FORMGRID_ENDPOINT,
      {
        method: 'POST',
        body: submitData,
      },
      FORM_TIMEOUT
    );

    // Check for fetch error
    if (fetchResult.error) {
      return {
        success: false,
        error: fetchResult.error
      };
    }

    const response = fetchResult.response!;

    // Check response status
    if (!response.ok) {
      if (response.status === 429) {
        return {
          success: false,
          error: 'Te veel aanvragen. Probeer het later opnieuw.'
        };
      }
      if (response.status === 413) {
        return {
          success: false,
          error: 'Bestand is te groot. Maximale grootte is 10MB.'
        };
      }
      if (response.status === 400) {
        // Try to get more info from response
        try {
          const errorText = await response.text();
          console.error('Formgrid 400 error:', errorText);
          return {
            success: false,
            error: 'Er is een probleem met de formuliergegevens. Controleer of alle velden correct zijn ingevuld.'
          };
        } catch {
          return {
            success: false,
            error: 'Er is een probleem met de formuliergegevens. Controleer of alle velden correct zijn ingevuld.'
          };
        }
      }
      return {
        success: false,
        error: `Er is een fout opgetreden (${response.status}). Probeer het later opnieuw.`
      };
    }

    // Success!
    const successMessage = options.successMessage || 'Bedankt voor je aanmelding! We nemen zo snel mogelijk contact met je op.';
    
    return { 
      success: true, 
      message: successMessage
    };
  } catch (error) {
    console.error('Form submission with files error:', error);

    // Handle file validation errors
    if (error instanceof FormValidationError) {
      return {
        success: false,
        error: error.message
      };
    }

    // Handle network errors
    if (error instanceof Error && error.name === 'AbortError') {
      return {
        success: false,
        error: 'De verbinding duurde te lang. Controleer je internetverbinding en probeer het opnieuw.'
      };
    }

    // Handle any other errors gracefully
    if (error instanceof Error) {
      return {
        success: false,
        error: 'Er is een probleem opgetreden bij het uploaden. Probeer het opnieuw of neem contact op via telefoon: +31 6 41875803'
      };
    }

    // Generic error
    return {
      success: false,
      error: 'Er is een onverwachte fout opgetreden. Probeer het later opnieuw of neem contact op via telefoon: +31 6 41875803'
    };
  }
}
