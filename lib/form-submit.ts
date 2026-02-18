/**
 * Web3Forms Form Submission Utility
 * Handles all form submissions to Web3Forms API
 */

const WEB3FORMS_ACCESS_KEY = '6ee20b60-9eee-40c6-bd14-b90720d4536b';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export interface FormSubmissionData {
  [key: string]: string | File | null;
}

export interface FormSubmissionOptions {
  subject: string;
  redirectTo?: string;
}

/**
 * Submit form data to Web3Forms
 * IMPORTANT: Web3Forms requires the email address to be verified
 * Make sure to verify your email at https://web3forms.com after getting the access key
 */
export async function submitToWeb3Forms(
  formData: FormData,
  options: FormSubmissionOptions
): Promise<{ success: boolean; message?: string }> {
  try {
    // Convert FormData to object
    const data: Record<string, any> = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: options.subject,
      to: 'info@chefsconnect.nl', // All emails go to this address
      from_name: 'Chefs Connect Website', // Sender name
    };

    // Add all form fields
    formData.forEach((value, key) => {
      // Skip file inputs for now (handle separately if needed)
      if (value instanceof File) {
        // For file uploads, we'll need to handle differently
        // Web3Forms supports file uploads via FormData directly
        return;
      }
      data[key] = value;
    });

    // Submit to Web3Forms
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      return { success: true, message: result.message };
    } else {
      throw new Error(result.message || 'Form submission failed');
    }
  } catch (error) {
    console.error('Web3Forms submission error:', error);
    throw error;
  }
}

/**
 * Submit form with file attachments (using FormData directly)
 * Use this when the form contains file uploads
 */
export async function submitToWeb3FormsWithFiles(
  formData: FormData,
  options: FormSubmissionOptions
): Promise<{ success: boolean; message?: string }> {
  try {
    // Add Web3Forms required fields
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', options.subject);
    formData.append('to', 'info@chefsconnect.nl'); // All emails go to this address
    formData.append('from_name', 'Chefs Connect Website'); // Sender name

    // Submit to Web3Forms (with files) - use FormData directly
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      body: formData, // Send FormData directly for file support
    });

    const result = await response.json();

    if (result.success) {
      return { success: true, message: result.message };
    } else {
      throw new Error(result.message || 'Form submission failed');
    }
  } catch (error) {
    console.error('Web3Forms submission error:', error);
    throw error;
  }
}

