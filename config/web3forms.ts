// Web3Forms Configuration
// Note: This key is safe to expose client-side (similar to Google reCAPTCHA site keys)
// Web3Forms validates requests server-side and has rate limiting built-in

export const WEB3FORMS_CONFIG = {
  accessKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '6ee20b60-9eee-40c6-bd14-b90720d4536b',
  endpoint: 'https://api.web3forms.com/submit',
} as const;
