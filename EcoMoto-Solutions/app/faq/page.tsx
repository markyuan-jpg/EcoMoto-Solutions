import FAQItem from '@/components/FAQItem';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'FAQ - EcoMoto Solutions',
  description: 'Frequently asked questions about sourcing electric vehicles, MOQ, lead time, and warranty.',
};

const faqs = [
  {
    question: 'Are you a factory or a trading company?',
    answer: 'We are professional sourcing partners, working closely with ISO-certified factories nationwide.',
  },
  {
    question: 'How do you ensure product quality?',
    answer: 'We implement a three-step quality control process: pre-production sample confirmation, production process inspection, and third-party inspection before container loading.',
  },
  {
    question: 'What is the minimum order quantity (MOQ)?',
    answer: 'Standard models have a minimum order quantity of 10 units, sample orders are negotiable.',
  },
  {
    question: 'What is the delivery time?',
    answer: 'Typically production takes 30-45 days. Shipping time is calculated based on your actual delivery location.',
  },
  {
    question: 'What is the warranty policy?',
    answer: 'Electrical components come with 12-month warranty, providing spare parts supply and remote technical support.',
  },
  {
    question: 'How long does the battery last?',
    answer: 'Our batteries are designed to last 5-10 years with proper care and maintenance. LFP batteries can last even longer, more than 2000 charge cycles.',
  },
  {
    question: 'What is the charging time?',
    answer: 'Charging time varies by model, typically 6-12 hours for a full charge using standard charging. Fast charging options are available for compatible models.',
  },
  {
    question: 'How far can the vehicles travel on a single charge?',
    answer: 'Range varies by model and usage conditions. Our vehicles typically offer 60-120 km per charge, depending on the model and payload.',
  },
  {
    question: 'What maintenance is required?',
    answer: 'Electric vehicles require less maintenance than traditional vehicles. Regular maintenance includes tire rotation, brake inspection, and occasional battery checks.',
  },
];

export default function FAQPage() {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'FAQ' }]} />

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Frequently Asked Questions</h1>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know about sourcing from EcoMoto.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-0 divide-y divide-slate-200">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-slate-600">
            Still have questions? We are here to help.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors duration-200"
            >
              Contact Us
            </a>
            <a
              href="https://wa.me/8618820222555"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-teal-600 border border-teal-600 hover:bg-teal-50 rounded-lg transition-colors duration-200"
            >
              WhatsApp: +86 188 2027 2255
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}