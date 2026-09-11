/**
 * Best-effort lead capture into a Google Sheet via a linked Google Form.
 *
 * The Form itself is never shown to visitors, submitting here just posts to
 * its response endpoint in the background. Its Responses tab is linked to
 * the ChefsConnect BBB Google Form's Sheet, so every submission appears
 * there as a new row automatically. Entry IDs pulled from the form's own
 * FB_PUBLIC_LOAD_DATA_ metadata, not guessed.
 *
 * Google's formResponse endpoint does not send CORS headers, so this fetch
 * runs in no-cors mode: the response is opaque and we cannot read
 * success/failure from it. This is intentionally best-effort and
 * non-blocking. The form's primary, verifiable channel is FormSubmit (see
 * lib/form-submit.ts), which emails info@chefs-connect.nl either way, so a
 * lead is never silently lost even if this endpoint is unreachable.
 */

const FORM_ACTION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSe67hgBqshhgbm__W8kEi2l9ir6jngoNmoEQ7ZKlb7gG1TLEA/formResponse';

const ENTRY_IDS: Record<string, string> = {
  naam: 'entry.350816614',
  restaurant: 'entry.1564217640',
  telefoon: 'entry.199143743',
  email: 'entry.1580026385',
  interesse: 'entry.412160827',
};

export function submitToSheet(data: Record<string, string>): void {
  try {
    const body = new URLSearchParams();
    Object.entries(data).forEach(([key, value]) => {
      const entryId = ENTRY_IDS[key];
      if (entryId) body.append(entryId, value);
    });

    void fetch(FORM_ACTION_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body,
    });
  } catch {
    // Best-effort only, the email via FormSubmit is the reliable channel.
  }
}
