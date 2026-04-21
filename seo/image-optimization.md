# Image Optimization Guide

## Why WebP?

| Format | Typical Size | Savings |
|--------|-------------|---------|
| JPG | 500 KB | - |
| WebP | 325 KB | 25-35% |

---

## Convert to WebP

### Tool 1: Squoosh (Online - Recommended)

1. Go to [squoosh.app](https://squoosh.app)
2. Drag/drop image
3. Select **WebP**
4. Adjust quality: 75-85%
5. Download

### Tool 2: ImageMagick (Command Line)

```bash
# Install
# macOS: brew install imagemagick
# Windows: Download from imagemagick.org

# Convert single image
magick convert input.jpg -quality 80 output.webp

# Batch convert
mogrify -format webp *.jpg
```

### Tool 3: Sharp (Node.js)

```bash
npm install sharp
```

```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/images/original/';
const outputDir = './public/images/';

fs.readdirSync(inputDir).forEach(file => {
  if (file.match(/\.(jpg|png)$/i)) {
    const input = path.join(inputDir, file);
    const output = path.join(outputDir, file.replace(/\.\w+$/, '.webp'));
    
    sharp(input)
      .resize(1200, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(output);
  }
});
```

---

## Next.js Image Configuration

In `next.config.mjs`:

```javascript
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.ecomotosolutions.com',
      },
    ],
  },
}
```

---

## Lazy Loading

Next.js does this automatically, but verify:

```tsx
import Image from 'next/image'

// ✅ Above-the-fold (eager)
<Image src="/images/hero.jpg" priority alt="Hero" />

// ✅ Below-the-fold (lazy - default)
<Image src="/images/product.jpg" alt="Product" />
```

---

## Image Sizes Reference

| Image Type | Max Width | Quality | Format |
|------------|-----------|---------|--------|
| Hero | 1920px | 80% | WebP |
| Product card | 600px | 75% | WebP |
| Thumbnail | 200px | 70% | WebP |
| Icon | SVG preferred | - | SVG |

---

## Checklist

- [ ] Convert all JPG/PNG to WebP
- [ ] Enable AVIF for modern browsers
- [ ] Add width/height to all images
- [ ] Set priority for hero images
- [ ] Lazy-load below-fold images
- [ ] Configure image sizes in next.config