# Mobile Adaptation Checklist

## Test Your Site

### Chrome DevTools Testing

1. Open Chrome → Press `F12` → Click **Toggle device toolbar** (or `Ctrl+Shift+M`)
2. Select device: iPhone 14, Pixel 7, or Custom (375px width)
3. Reload page and test:
   - [ ] Text is readable without zooming
   - [ ] Buttons are tappable (min 48x48px touch target)
   - [ ] No horizontal scroll
   - [ ] Forms are usable

---

## Checklist

### 1. Viewport Meta Tag

Already configured in Next.js by default (`app/layout.tsx`):

```tsx
// This is automatically set by Next.js
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

### 2. Font Sizes

| Element | Minimum |
|---------|--------|
| Body text | 16px |
| Headings | 24px+ |
| Links/buttons | 16px+ |

Check in `globals.css`:

```css
body {
  font-size: 16px; /* Minimum */
  line-height: 1.5;
}

h1 { font-size: 2rem; }
h2 { font-size: 1.5rem; }
h3 { font-size: 1.25rem; }
```

### 3. Touch Target Spacing

```css
/* Buttons and links need min 48x48px touch target */
button,
a.button,
[role="button"] {
  min-height: 48px;
  min-width: 48px;
  padding: 12px 24px;
}

/* Links in navigation */
nav a {
  padding: 12px;
}
```

### 4. Navigation (Hamburger Menu)

The site already uses a responsive navbar. Verify in `components/Navbar.tsx`:

```tsx
// Mobile menu should collapse to hamburger
<button
  className="md:hidden"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle menu"
>
  {menuOpen ? <X /> : <Menu />}
</button>
```

### 5. Response Images (srcset)

Using `next/image` automatically handles responsive images:

```tsx
import Image from 'next/image'

<Image
  src="/images/product.jpg"
  alt="Product"
  sizes="(max-width: 768px) 100vw, 50vw"
  // Automatically generates srcset for different devices
/>
```

---

## Common Mobile Issues

| Issue | Check |
|-------|-------|
| Text too small | `font-size: 16px` minimum |
| Taps too close | Add `gap: 8px` between buttons |
| Forms broken | Use large inputs (`height: 48px`) |
| Side-scrolling | Check for `overflow-x: hidden` |
| Zoom on input | Add `max-width: 100%` to forms |