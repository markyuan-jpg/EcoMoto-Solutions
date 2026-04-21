# HTTPS Checklist

## 1. Verify SSL Certificate

### In Browser

1. Open `https://www.ecomotosolutions.com`
2. Look at the address bar:
   - ✅ Lock icon = SSL installed
   - ⚠️ Warning = Certificate issue

### Online Tool

1. Go to [SSL Checker](https://www.sslshopper.com/ssl-checker.html)
2. Enter: `www.ecomotosolutions.com`
3. Verify: Certificate valid, Chain complete

---

## 2. Force HTTPS Redirect

### Vercel (Recommended for Next.js)

In `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains; preload"
        }
      ]
    },
    {
      "source": "/:path*",
      "has": [
        {
          "type": "http",
          "key": "x-forwarded-proto",
          "value": "http"
        }
      ],
      "permanent": true,
      "statusCode": 308,
      "headers": [
        {
          "key": "Location",
          "value": "https://www.ecomotosolutions.com/:path*"
        }
      ]
    }
  ]
}
```

### Alternative: middleware.ts

In `app/middleware.ts`:

```ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.protocol === 'http:') {
    return NextResponse.redirect(
      new URL(request.url.replace('http://', 'https://')),
      308
    )
  }
}

export const config = {
  matcher: '/:path*',
}
```

---

## 3. Check Mixed Content

Mixed content = HTTP resources on HTTPS page → Browser warnings

### Find Mixed Content

1. Open browser console (F12) → Console tab
2. Look for: "Mixed Content" warnings
3. Or use [JitBit Mixed Content Checker](https://jitbit.com/mixedcontentchecker/)

### Fix Mixed Content

All resources must be HTTPS:

```html
<!-- ❌ Bad -->
<img src="http://example.com/image.jpg" />

<!-- ✅ Good -->
<img src="https://example.com/image.jpg" />
<!-- Or use relative path -->
<img src="/images/image.jpg" />
```

In Next.js, use relative paths:

```tsx
// Use relative paths (recommended)
<Image src="/images/hero.jpg" />

// Or use protocol-relative
<Image src="//cdn.example.com/image.jpg" />

// Never use http://
```

---

## 4. Security Headers

Add to `next.config.mjs`:

```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains; preload',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
      ],
    },
  ]
},
```

---

## 5. Update GSC URLs

After enabling HTTPS:

1. Go to [Search Console](https://search.google.com/search-console)
2. Add `https://www.ecomotosolutions.com` as new property
3. Submit sitemap again