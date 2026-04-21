# Redirect Chain & 404 Check Guide

## Tools

### 1. Redirect Path (Chrome Extension)

1. Install [Redirect Path](https://chrome.google.com/webstore/detail/redirect-path/y敦煌...) extension
2. Visit each page
3. Check for 301/302/404/500 status

### 2. Screaming Frog (Recommended - Free for 500 URLs)

1. Download [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/)
2. Enter: `https://www.ecomotosolutions.com`
3. Click **Start**
4. Review results:
   - **Redirect chains** (multiple 301s)
   - **4XX errors** (broken links)
   - **5XX errors** (server issues)

### 3. Dr. Link Check (Online)

1. Go to [drlinkcheck.com](https://drlinkcheck.com)
2. Enter URL and scan
3. Free for basic scans

---

## Fix 404s in Next.js

### Option 1: notFound()

In dynamic routes like `app/products/[slug]/page.tsx`:

```tsx
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  // Return valid slugs
  return [
    { slug: 'city-feeder' },
    { slug: 'urban-hauler' },
    { slug: 'heavy-hauler' },
    { slug: 'commando-3000' },
    { slug: 'passenger-cruiser' },
    { slug: 'lfp-power' },
  ]
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug)
  
  if (!product) {
    notFound() // Returns 404 page
  }
  
  return <ProductDetail product={product} />
}
```

### Option 2: Custom 404 Page

Create `app/not-found.tsx`:

```tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">Page not found</p>
      <Link href="/" className="text-teal-600 mt-4">
        Go to Homepage
      </Link>
    </div>
  )
}
```

---

## Fix Redirect Chains

### Old URLs → New URLs Mapping

If you changed URL structure:

| Old URL | New URL | Status |
|--------|--------|--------|
| /product/city-feeder | /products/city-feeder | 301 |
| /p/city-feeder | /products/city-feeder | 301 |

### Redirect in middleware.ts

In `app/middleware.ts`:

```ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const redirects: { [key: string]: string } = {
  '/old-product': '/products/new-product',
  '/about-us': '/about',
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  if (redirects[pathname]) {
    return NextResponse.redirect(
      new URL(redirects[pathname], request.url),
      301
    )
  }
}

export const config = {
  matcher: '/:path*',
}
```

---

## Regular Audit Schedule

- **Weekly**: Check GSC Coverage report for 404s
- **Monthly**: Run Screaming Frog scan
- **After any URL change**: Verify redirects work

---

## GSC Coverage Report

1. Go to [Search Console](https://search.google.com/search-console)
2. Select property
3. Click **Pages** under **Index**
4. Look for **Not indexed (404)** errors
5. Click each error and request indexing after fix