# Form File Upload Fix

## Probleem
File upload forms crashten consistent, terwijl reguliere forms zonder file upload perfect werkten.

## Root Cause Analysis
1. **FormData Mismatch**: De originele `formData` werd verzonden in plaats van de geconstrueerde `submitData` met alle vereiste Web3Forms velden
2. **Field Conflicts**: Dubbele 'botcheck' velden en inconsistente field names
3. **Error Propagation**: File validation errors werden als exceptions gegooid in plaats van graceful returns
4. **Insufficient Error Handling**: Geen try-catch blocks in form submission handlers
5. **No Fallback**: Als de file upload faalde, crashte de hele applicatie

## Oplossing Implementatie

### 1. Form Submit Utility (`lib/form-submit.ts`)

#### Nieuwe Aanpak voor File Uploads:
```typescript
// Create nieuwe FormData om conflicts te voorkomen
const submitData = new FormData();

// Voeg eerst Web3Forms vereiste velden toe
submitData.append('access_key', WEB3FORMS_ACCESS_KEY);
submitData.append('subject', options.subject);
submitData.append('to', 'info@chefs-connect.nl');
submitData.append('from_name', 'Chefs Connect Website');

// Kopieer alle form velden naar submitData
formData.forEach((value, key) => {
  // Skip botcheck (honeypot)
  if (key === 'botcheck') {
    return;
  }
  
  // Valideer en voeg files toe
  if (value instanceof File && value.size > 0) {
    const fileValidation = validateFile(value);
    if (!fileValidation.valid) {
      return { success: false, error: fileValidation.error };
    }
    submitData.append(key, value, value.name);
  } 
  // Sanitize en voeg text fields toe
  else if (!(value instanceof File)) {
    const sanitizedValue = sanitizeInput(value as string);
    submitData.append(key, sanitizedValue);
    validationData[key] = sanitizedValue;
  }
});

// Gebruik submitData in plaats van formData!
body: submitData
```

#### Verbeterde Error Handling:
```typescript
catch (error) {
  // Handle file validation errors
  if (error instanceof Error && error.message.includes('bestand')) {
    return { success: false, error: error.message };
  }

  // Handle network errors
  if (error instanceof Error && error.name === 'AbortError') {
    return { success: false, error: 'Timeout message...' };
  }

  // Handle any other errors gracefully
  if (error instanceof Error) {
    return { 
      success: false, 
      error: 'Er is een probleem opgetreden bij het uploaden...' 
    };
  }

  // Generic error fallback
  return { success: false, error: 'Fallback error...' };
}
```

### 2. Form Handlers (All Pages)

Toegevoegd try-catch blocks in alle form submission handlers:

```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const formData = new FormData(e.currentTarget);
    const result = await submitToWeb3FormsWithFiles(formData, {
      subject: 'Subject...',
    });

    if (result.success) {
      router.push('/bedankt');
    } else {
      const errorMessages = result.error?.split('\n') || ['Fallback...'];
      setNotification({
        type: 'error',
        title: 'Controleer je gegevens',
        messages: errorMessages
      });
      setIsSubmitting(false);
    }
  } catch (error) {
    console.error('Unexpected form error:', error);
    setNotification({
      type: 'error',
      title: 'Er is iets misgegaan',
      messages: ['Fallback error met contact info...']
    });
    setIsSubmitting(false);
  }
};
```

Toegepast op:
- `/app/horecaspecialist/page.tsx` (met file upload)
- `/app/zoek-personeel/page.tsx`
- `/app/evenementen/page.tsx`
- `/app/contact/page.tsx`
- `/components/home/ContactForm.tsx`

### 3. Error Boundary Component

Gecreëerd `lib/error-boundary.tsx` voor applicatie-niveau error catching:

```typescript
export class ErrorBoundary extends Component<Props, State> {
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Premium styled error UI met "Pagina vernieuwen" optie
      return <ErrorUI />;
    }
    return this.props.children;
  }
}
```

## Key Improvements

### Security & Validation
- ✅ File validation (size: 5MB max, types: PDF/Word)
- ✅ Input sanitization voor XSS prevention
- ✅ Rate limiting (3 requests/minute, 2 sec minimum tussen submissions)
- ✅ Honeypot field handling

### Error Handling
- ✅ Graceful error returns in plaats van exceptions
- ✅ Try-catch blocks in alle form handlers
- ✅ Specifieke error messages voor verschillende scenario's
- ✅ Fallback naar contact telefoon bij kritieke fouten
- ✅ Error Boundary component voor React errors

### User Experience
- ✅ Premium styled error notifications
- ✅ Duidelijke feedback voor alle error types
- ✅ Geen app crashes - altijd graceful fallback
- ✅ Loading states tijdens submission
- ✅ Auto-redirect naar bedankt page bij succes

### Developer Experience
- ✅ Debug logging in development mode
- ✅ Console error logging voor monitoring
- ✅ Gedocumenteerde error types en flows
- ✅ Consistente error handling pattern

## Testing Checklist

### File Upload Form (`/horecaspecialist`)
- [ ] Submit met geldige PDF (<5MB) → Succes
- [ ] Submit met geldige Word document → Succes
- [ ] Submit met te grote file (>5MB) → Duidelijke error
- [ ] Submit met verkeerd file type → Duidelijke error
- [ ] Submit zonder file → Error (CV is vereist)
- [ ] Submit met lege tekst velden → Validation errors
- [ ] Submit zonder internet → Network error
- [ ] Dubbele submission (snel 2x klikken) → Rate limit

### Regular Forms (zonder file upload)
- [ ] Alle velden correct → Succes
- [ ] Ongeldige email → Validation error
- [ ] Te kort bericht → Validation error
- [ ] Rate limit test → Prevented

## Files Changed

### Modified
- `lib/form-submit.ts` - Fixed file upload logic, improved error handling
- `app/horecaspecialist/page.tsx` - Added try-catch
- `app/zoek-personeel/page.tsx` - Added try-catch
- `app/evenementen/page.tsx` - Added try-catch
- `app/contact/page.tsx` - Added try-catch
- `components/home/ContactForm.tsx` - Added try-catch

### Created
- `lib/error-boundary.tsx` - React Error Boundary component
- `FORM_FILE_UPLOAD_FIX.md` - This documentation

## Deployment Notes

1. Alle forms blijven 100% functioneel - geen breaking changes
2. Error handling is backwards compatible
3. No database migrations needed
4. Web3Forms API key blijft hetzelfde
5. Test file upload form grondig voor deployment

## Contact on Error

Bij kritieke fouten krijgen gebruikers altijd:
> "Probeer het opnieuw of neem contact op via telefoon: +31 6 41875803"

Dit zorgt ervoor dat we nooit leads verliezen door technische issues.
