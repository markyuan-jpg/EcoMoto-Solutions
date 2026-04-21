# Social Media Tags

## Where to Add

In Next.js, add to each page's metadata export:

```tsx
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
  // Add Open Graph and Twitter tags
  openGraph: {
    title: 'Page Title',
    description: 'Page description',
    url: 'https://www.ecomotosolutions.com/page-url',
    siteName: 'EcoMoto Solutions',
    images: [
      {
        url: 'https://www.ecomotosolutions.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EcoMoto Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Title',
    description: 'Page description',
    images: ['https://www.ecomotosolutions.com/images/og-image.jpg'],
  },
}
```

---

## Open Graph Tags (for layout.tsx)

```tsx
// In app/layout.tsx - base tags
export const metadata: Metadata = {
  metadataBase: new URL('https://www.ecomotosolutions.com'),
  openGraph: {
    type: 'website',
    siteName: 'EcoMoto Solutions',
    locale: 'en_US',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'EcoMoto Solutions - Electric Fleet Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@EcoMotoSol',
    creator: '@EcoMotoSol',
  },
}
```

---

## Page-Specific OG Tags

### Homepage (app/page.tsx)

```tsx
export const metadata: Metadata = {
  title: 'EcoMoto Solutions - Electric Commercial Vehicles',
  description: 'Your sourcing partner for electric cargo tricycles, motorcycles, and LFP batteries. CE certified. Contact us for bulk pricing.',
  openGraph: {
    title: 'EcoMoto Solutions - Electric Fleet Solutions',
    description: 'Power your fleet with electric commercial vehicles. Reduce costs, zero emissions.',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
}
```

### Product Pages

```tsx
// app/products/[slug]/page.tsx
export const metadata = {
  openGraph: {
    title: 'Product Name - EcoMoto Solutions',
    description: 'Product short description',
    images: [
      {
        url: '/images/product-og.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
}
```

---

## Image Requirements

| Platform | Min Size | Recommended | Ratio |
|----------|---------|-------------|-------|
| Facebook | 200x200 | 1200x630 | 1.91:1 |
| LinkedIn | 1200x627 | 1200x627 | 1.91:1 |
| Twitter | 300x157 | 1200x600 | 2:1 |

Create default OG image at `/public/images/og-default.jpg` (1200x630px)

---

## Test Your Tags

1. [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
3. [Twitter Card Validator](https://cards.twitter.com/validator/)

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| OG image not showing | Check URL is HTTPS and accessible |
| Wrong image | Clear cache in sharing debugger |
| Title too long | Keep under 60 characters |
| Description cut off | Keep under 110 characters |