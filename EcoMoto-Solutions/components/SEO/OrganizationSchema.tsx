export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'EcoMoto Solutions',
    url: 'https://www.ecomotosolutions.com',
    logo: 'https://www.ecomotosolutions.com/logo.png',
    description: 'B2B supplier of electric cargo tricycles, passenger motorcycles, and LFP batteries.',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'sales@ecomotosolutions.com',
      contactType: 'sales',
      availableLanguage: ['English', 'Chinese'],
      telephone: '+86-188-2027-2255',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
