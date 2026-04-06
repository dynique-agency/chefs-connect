/**
 * FormSubmit.co Form Submission Utility
 * https://formsubmit.co/
 * 
 * AJAX endpoint for regular forms (JSON, no files)
 * Standard form action for file uploads (multipart/form-data)
 */

const FORMSUBMIT_EMAIL = 'info@chefs-connect.nl';
const FORMSUBMIT_AJAX_URL = `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`;
const FORM_TIMEOUT = 30000;
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB (FormSubmit limit)
const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
];

export interface FormSubmissionOptions {
  subject: string;
}

export interface FormSubmissionResult {
  success: boolean;
  message?: string;
  error?: string;
}

function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  return input.trim().replace(/[<>]/g, '').substring(0, 10000);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  if (!phone) return true;
  return /^[+]?[\d\s\-()]+$/.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

function validateFormData(data: Record<string, string>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  const name = data.naam || data.name || '';
  if (!name || name.trim().length < 2) {
    errors.push('Naam moet minimaal 2 karakters bevatten');
  }

  const email = data.email || '';
  if (!email || !isValidEmail(email)) {
    errors.push('Voer een geldig e-mailadres in');
  }

  const phone = data.telefoon || data.phone || '';
  if (phone && !isValidPhone(phone)) {
    errors.push('Voer een geldig telefoonnummer in');
  }

  const message = data.bericht || data.message || '';
  if (!message || message.trim().length < 2) {
    errors.push('Vul een bericht in');
  }

  return { valid: errors.length === 0, errors };
}

export function validateFile(file: File): { valid: boolean; error?: string } {
  if (file.size > MAX_FILE_SIZE) {
    return { valid: false, error: `Bestand is te groot. Maximale grootte is ${MAX_FILE_SIZE / 1024 / 1024}MB` };
  }
  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return { valid: false, error: 'Alleen PDF en Word documenten zijn toegestaan' };
  }
  return { valid: true };
}

const submissionTracker = { lastSubmission: 0, count: 0 };

function checkRateLimit(): boolean {
  const now = Date.now();
  const elapsed = now - submissionTracker.lastSubmission;
  if (elapsed > 60000) submissionTracker.count = 0;
  if (submissionTracker.count >= 3 && elapsed < 60000) return false;
  if (elapsed < 2000) return false;
  submissionTracker.lastSubmission = now;
  submissionTracker.count++;
  return true;
}

/**
 * Submit form via FormSubmit.co AJAX endpoint (JSON, no file uploads)
 * Works for: contact, zoek-personeel, evenementen, homepage contact
 */
export async function submitToFormSubmit(
  formData: FormData,
  options: FormSubmissionOptions
): Promise<FormSubmissionResult> {
  try {
    if (!checkRateLimit()) {
      return { success: false, error: 'Te veel aanvragen. Wacht even en probeer het opnieuw.' };
    }

    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      if (value instanceof File) return;
      if (key === 'botcheck') return;
      data[key] = sanitizeInput(value as string);
    });

    const validation = validateFormData(data);
    if (!validation.valid) {
      return { success: false, error: validation.errors.join('\n') };
    }

    // FormSubmit.co special fields
    data._subject = options.subject;
    data._captcha = 'false';
    data._template = 'table';

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), FORM_TIMEOUT);

    const response = await fetch(FORMSUBMIT_AJAX_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      let errorDetail = '';
      try {
        const errBody = await response.json();
        errorDetail = errBody.message || errBody.error || '';
      } catch { /* ignore */ }

      if (response.status === 429) {
        return { success: false, error: 'Te veel aanvragen. Probeer het later opnieuw.' };
      }
      return {
        success: false,
        error: errorDetail || `Er is een fout opgetreden (${response.status}). Probeer het later opnieuw.`
      };
    }

    const result = await response.json();

    if (result.success === 'true' || result.success === true) {
      return { success: true, message: 'Bedankt! We nemen zo snel mogelijk contact met je op.' };
    }

    return {
      success: false,
      error: result.message || 'Formulier kon niet worden verzonden. Probeer het later opnieuw.'
    };
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return { success: false, error: 'De verbinding duurde te lang. Controleer je internetverbinding en probeer het opnieuw.' };
    }
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      return { success: false, error: 'Kan geen verbinding maken met de server. Controleer je internetverbinding.' };
    }
    return {
      success: false,
      error: 'Er is een onverwachte fout opgetreden. Probeer het later opnieuw of neem contact op via telefoon: +31 6 41875803'
    };
  }
}

/**
 * FormSubmit.co standard action URL for file upload forms
 * File uploads do NOT work via AJAX, only via standard form action with multipart/form-data
 */
export const FORMSUBMIT_ACTION_URL = `https://formsubmit.co/${FORMSUBMIT_EMAIL}`;
