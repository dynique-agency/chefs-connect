# Video Background Optimization

## Overview
De website gebruikt een video achtergrond (BANNER.mp4) in de header en hero sectie. Deze implementatie is volledig geoptimaliseerd voor alle devices en zorgt voor optimale performance.

## Geïmplementeerde Optimalisaties

### 1. **Preloading & Loading Strategy**
- **HTML Preload**: Video wordt vooraf geladen via `<link rel="preload">` in de layout
- **Loading Screen Preload**: Video begint te laden tijdens de 3-seconde loading screen
- **Progressive Loading**: Video gebruikt `preload="auto"` voor priority content, `preload="metadata"` voor navbar

### 2. **Hardware Acceleration**
```css
video {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
  will-change: transform;
}
```
- Zorgt voor GPU-acceleratie op alle devices
- Voorkomt flickering en jank tijdens scroll
- Optimaliseert compositing layers

### 3. **Mobile Optimizations**
- **Device Detection**: Automatische detectie van mobiele devices
- **Reduced Quality**: Lagere beeldkwaliteit op mobiel voor snellere loading
- **Fallback Image**: Toont fallback image tijdens video loading
- **PlaysinLine**: Voorkomt fullscreen video op iOS

### 4. **Responsive Video Settings**
```typescript
{
  autoPlay: true,
  loop: true,
  muted: true,
  playsInline: true,
  disablePictureInPicture: true,
  controlsList: 'nodownload nofullscreen noremoteplayback'
}
```

### 5. **Error Handling & Fallbacks**
- Automatische fallback naar statische image bij video load failure
- Graceful degradation voor browsers zonder video support
- Console warnings voor debugging

### 6. **Performance Features**
- **Lazy State Management**: Video opacity transition voorkomt layout shift
- **Memory Management**: Proper cleanup van video elements
- **Blur Effect**: Navbar video gebruikt blur voor betere overlay effect
- **Scale Optimization**: Navbar video is licht geschaald voor blur edge handling

## Component Structure

### `VideoBackground.tsx`
Herbruikbare component met alle optimalisaties:
- Device detection
- Loading state management
- Error handling
- Automatic fallback
- Performance optimizations

### `HeroSection.tsx`
Gebruikt VideoBackground met:
- Parallax scroll effect
- Gradient overlay
- Priority loading

### `Navbar.tsx`
Gebruikt inline video met:
- Conditional rendering (alleen bij scroll)
- Blur effect voor premium look
- Lagere priority loading

## Browser Support
✅ Chrome/Edge (Chromium)
✅ Safari (iOS & macOS)
✅ Firefox
✅ Opera
✅ Mobiele browsers (iOS Safari, Chrome Mobile, Samsung Internet)

## File Location
- Source: `/public/BANNER.mp4`
- Fallback: `/public/hero-banner.png`

## Performance Metrics
- **First Load**: Video preloads tijdens loading screen (3s)
- **Subsequent Loads**: Browser cache gebruikt
- **Mobile Data**: Automatisch lagere kwaliteit
- **LCP**: Fallback image voorkomt layout shift

## Future Optimizations (Optional)
1. **Multiple Video Formats**: WebM voor kleinere bestandsgrootte
2. **Adaptive Bitrate**: Verschillende video kwaliteiten per device
3. **Intersection Observer**: Pause video wanneer niet in viewport
4. **Service Worker**: Aggressive caching van video

## Maintenance
- Video bestand moet in `/public/` directory blijven
- Fallback image moet altijd aanwezig zijn
- Test op mobiele devices na video updates
- Houd bestandsgrootte onder 10MB voor optimale loading
