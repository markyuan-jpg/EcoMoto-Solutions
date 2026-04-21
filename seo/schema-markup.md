# Schema Markup Guide

## Test Tools

1. [Google Rich Results Test](https://search.google.com/test/rich-results)
2. [Schema.org Validator](https://validator.schema.org/)

---

## Organization Schema (Homepage)

Add to `app/page.tsx`:

```tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://www.ecomotosolutions.com'),
}

// No JSX changes needed - use next-schema-org package or JSON-LD in HTML
```

Create `app/components/OrganizationSchema.tsx`:

```tsx
export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EcoMoto Solutions',
    url: 'https://www.ecomotosolutions.com',
    logo: 'https://www.ecomotosolutions.com/logo.png',
    sameAs: [
      'https://www.linkedin.com/company/ecomoto',
      // Add social media links when available
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'sales@ecomotosolutions.com',
      contactType: 'sales',
      availableLanguage: ['English', 'Chinese'],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

Then add to `app/layout.tsx`:

```tsx
import OrganizationSchema from './components/OrganizationSchema'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <OrganizationSchema />
      </body>
    </html>
  )
}
```

---

## Product Schema (6 Product Pages)

Create `app/components/ProductSchema.tsx`:

```tsx
interface ProductSchemaProps {
  name: string
  description: string
  slug: string
  image: string
  price?: string
  availability?: boolean
}

export default function ProductSchema({
  name,
  description,
  slug,
  image,
  availability = true,
}: ProductSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    brand: {
      '@type': 'Brand',
      name: 'EcoMoto Solutions',
    },
    image: `https://www.ecomotosolutions.com${image}`,
    url: `https://www.ecomotosolutions.com/products/${slug}`,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      price: '', // Add price if available
      availability: availability
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

Usage in product page:

```tsx
// app/products/[slug]/page.tsx
import ProductSchema from '@/components/ProductSchema'

export default function ProductPage({ params }) {
  const product = await getProduct(params.slug)
  
  return (
    <>
      <ProductDetail product={product} />
      <ProductSchema
        name={product.name}
        description={product.description}
        slug={params.slug}
        image={product.image}
      />
    </>
  )
}
```

---

## FAQ Schema (FAQ Page)

Create `app/components/FaqSchema.tsx`:

```tsx
const faqs = [
  {
    question: 'How long does the battery last?',
    answer: '5-10 years with proper care, typically 2000+ charge cycles.',
  },
  {
    question: 'What is the charging time?',
    answer: '6-12 hours for a full charge using the standard charger.',
  },
  {
    question: 'What warranty do you offer?',
    answer: '12-month warranty on electrical components, 2 years on frame.',
  },
  {
    question: 'What is the MOQ?',
    answer: 'MOQ varies by product. Contact us for specific requirements.',
  },
  {
    question: 'Do you provide spare parts?',
    answer: 'Yes, spare parts available with 12 months availability guarantee.',
  },
  {
    question: 'Can I customize the vehicle?',
    answer: 'OEM customization available for orders above 10 units.',
  },
]

export default function FaqSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

---

## Breadcrumb Schema

```tsx
interface BreadcrumbProps {
  items: { name: string; url: string }[]
}

export default function BreadcrumbSchema({ items }: BreadcrumbProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://www.ecomotosolutions.com${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

Usage in product page:

```tsx
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export default function ProductPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: 'City Feeder', url: '/products/city-feeder' },
        ]}
      />
      <ProductDetail />
    </>
  )
}
```

---

## Maintenance Notes

When updating content:

1. **Product changes** → Update Product Schema
2. **FAQ changes** → Update FAQ Schema
3. **Contact info** → Update Organization Schema
4. **New products** → Add to sitemap.xml + Product Schema

Test after any changes at: [Rich Results Test](https://search.google.com/test/rich-results)