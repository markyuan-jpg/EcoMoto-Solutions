# Google Search Console Verification Guide

## Method: HTML Tag (Recommended for Next.js)

### Step 1: Add HTML Tag to Layout

In `app/layout.tsx`, add the verification meta tag in the `<head>`:

```tsx
export const metadata: Metadata = {
  title: "EcoMoto Solutions - Electric Commercial Vehicles",
  description: "B2B electric commercial vehicles for your business. Sustainable, efficient, and cost-effective transportation solutions.",
  icons: {
    icon: "/favicon.ico",
  },
  // Add this line - replace with your actual verification string
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
}
```

### Alternative: Add directly in head

```tsx
<head>
  <meta name="google-site-verification" content="YOUR_VERIFICATION_STRING" />
  // ... other head elements
</head>
```

### Step 2: Verify in GSC

1. Go to [search.google.com](https://search.google.com/search-console)
2. Click **Add property** → Enter: `https://www.ecomotosolutions.com`
3. Select **HTML tag** method
4. Click **Verify**

### Step 3: Submit Sitemap

1. In GSC, go to **Sitemaps**
2. Enter: `sitemap.xml`
3. Click **Submit**

---

## If Using Next.js SEO Package

If you use `next-seo` or similar package, add to `next-seo.config.js`:

```javascript
export default {
  ...,
  additionalMetaTags: [
    {
      name: 'google-site-verification',
      content: 'YOUR_VERIFICATION_STRING',
    },
  ],
}
```