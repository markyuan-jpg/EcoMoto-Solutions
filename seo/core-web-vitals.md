# Core Web Vitals Optimization Guide

## Test Your Site

1. Go to [PageSpeed Insights](https://pagespeed.web.dev/)
2. Enter: `https://www.ecomotosolutions.com`
3. Review the scores

---

## LCP (Largest Contentful Paint) - Target: < 2.5s

### Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Slow server response | Use Vercel/Netlify edge caching |
| Large hero images | Use WebP, add `priority` attribute |
| render-blocking CSS | Inline critical CSS |
| Too many fonts | Use `next/font` with `display: swap` |

### Implementation

```tsx
// For hero images, add priority
<Image
  src="/images/hero.jpg"
  alt="Hero"
  priority // This adds preload
  sizes="100vw"
  quality={80}
/>
```

```tsx
// Optimize images with next/image
import Image from 'next/image'

<Image
  src="/images/product.jpg"
  alt="Product"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, 50vw"
  quality={75}
/>
```

---

## INP (Interaction to Next Paint) - Target: < 200ms

### Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Heavy JavaScript | Code-split routes with dynamic import |
| Long tasks | Use web workers |
| Event handlers | Debounce/throttle listeners |

### Implementation

```tsx
// Dynamic imports for heavy components
import dynamic from 'next/dynamic'

const HeavyMap = dynamic(() => import('./Map'), {
  loading: () => <p>Loading...</p>,
})

// Or for interactive elements, defer execution
useEffect(() => {
  // Only load heavy logic after hydration
  import('./heavy-logic').then(module => module.init())
}, [])
```

---

## CLS (Cumulative Layout Shift) - Target: < 0.1

### Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| No image dimensions | Always set width/height |
| Dynamic content | Reserve space with min-height |
| Ads/banners | Set fixed aspect containers |
| Web fonts | Use font-display: swap fallback |

### Implementation

```tsx
// Always specify dimensions
<Image
  src="/images/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  // Or use aspect-ratio
  style={{ aspectRatio: '16/9' }}
/>

// Reserve space for dynamic content
<div style={{ minHeight: '200px' }}>
  {loading ? <Skeleton /> : <Content />}
</div>
```

### CSS aspect-ratio for containers

```css
.ad-container {
  min-height: 250px;
  aspect-ratio: 3/1;
  background: #f0f0f0;
}
```

---

## Quick Wins Checklist

- [ ] Enable image optimization with `next/image`
- [ ] Convert images to WebP format
- [ ] Add `priority` to above-the-fold images
- [ ] Lazy-load below-fold images
- [ ] Remove unused JavaScript
- [ ] Use dynamic imports for heavy components
- [ ] Add width/height to all images
- [ ] Set explicit font-display fallback