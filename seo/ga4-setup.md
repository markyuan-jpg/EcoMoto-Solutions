# Google Analytics 4 Setup Guide

## Step 1: Create GA4 Property

1. Go to [analytics.google.com](https://analytics.google.com)
2. Click **Admin** → **Create Property**
3. Enter property name: "EcoMoto Solutions Website"
4. Set timezone and currency
5. Click **Next** → **Create**

## Step 2: Get Measurement ID

1. In GA4 property, go to **Data Streams**
2. Click **Add stream** → **Web**
3. Enter website URL: `https://www.ecomotosolutions.com`
4. Copy the Measurement ID (starts with G-XXXXXXXXXX)

## Step 3: Add GA4 Code to Next.js

Replace `{{G-XXXXXXXXXX}}` with your actual Measurement ID.

### Option A: Using next/script (Recommended)

In `app/layout.tsx`, add:

```tsx
import Script from 'next/script'

// Add inside <head> or before </body>:
<Script
  strategy="afterInteractive"
  src="https://www.googletagmanager.com/gtag/js?id={{G-XXXXXXXXXX}}"
/>
<Script id="ga4-config" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '{{G-XXXXXXXXXX}}');
  `}
</Script>
```

### Option B: Using gtag library

```bash
npm install @phntms/next-gtag
```

Then in `next.config.mjs`:

```javascript
import nextGtag from '@phntms/next-gtag'

export default nextGtag({
  id: '{{G-XXXXXXXXXX}}',
})
```

## Step 4: Configure conversions/events

### generate_lead event (Contact form submission)

Add to your contact form handler:

```javascript
// For existing contact form, add:
function handleSubmit(e) {
  e.preventDefault()
  // ... form submission logic ...

  // Fire GA4 conversion event
  if (typeof gtag !== 'undefined') {
    gtag('event', 'generate_lead', {
      event_category: 'form',
      event_label: 'contact-form',
    })
  }
}
```

## Step 5: Verify Installation

1. In GA4, go to **Realtime** report
2. Visit your website
3. Verify data appears in realtime view

---

## Troubleshooting

- **Not seeing data?** Check if ad blockers are preventing the request
- **Events not tracking?** Verify gtag function is defined before calling
- **GSC mismatch?** Ensure Measurement ID matches exactly