const faqs = [
  {
    question: 'How long does the battery last?',
    answer: '5-10 years with proper care, typically 2000+ charge cycles for LFP batteries.',
  },
  {
    question: 'What is the charging time?',
    answer: '6-12 hours for a full charge using the standard charger. Fast charging options available.',
  },
  {
    question: 'What warranty do you offer?',
    answer: '12-month warranty on electrical components, 2 years on frame and structural parts.',
  },
  {
    question: 'What is the minimum order quantity (MOQ)?',
    answer: 'MOQ varies by product. Contact us for specific requirements. OEM orders typically require 10+ units.',
  },
  {
    question: 'Do you provide spare parts?',
    answer: 'Yes, spare parts available with 12-month availability guarantee. We maintain inventory for all common parts.',
  },
  {
    question: 'Can I customize the vehicle?',
    answer: 'OEM customization available for orders above 10 units. We offer branding, spec modifications, and custom configurations.',
  },
]

export default function FAQSchema() {
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