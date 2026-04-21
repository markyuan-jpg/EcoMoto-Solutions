interface ProductSchemaProps {
  name: string
  description: string
  slug: string
  image: string
}

export default function ProductSchema({ name, description, slug, image }: ProductSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    brand: {
      '@type': 'Brand',
      name: 'EcoMoto Solutions',
    },
    image: `https://www.ecomotosolutions.com${image}`,
    url: `https://www.ecomotosolutions.com/products/${slug}`,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}