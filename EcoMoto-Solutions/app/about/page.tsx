import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'About EcoMoto Solutions - B2B Electric Vehicle Sourcing Partner',
  description: 'EcoMoto Solutions is a professional sourcing partner for electric commercial vehicles. ISO-certified factories, CE/EEC/UL certified.',
};

const whyUs = [
  {
    title: 'ISO Certified',
    description: 'ISO9001 certified manufacturers with annual audits',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.959 11.959 0 0112 2c5.523 0 10 4.477 10 10s-4.477 10-10 10 10-4.477 10-10.382A11.959 11.959 0 013.382 12" />
      </svg>
    ),
  },
  {
    title: '3-Step QC',
    description: 'Pre-production, in-production, pre-shipment inspection',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: '20+ Countries',
    description: 'Experienced in logistics and after-sales support',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.295M3.055 11h15a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.295M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'About Us' }]} />

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">About Us</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Your trusted B2B partner for electric vehicles and battery solutions.
          </p>
        </div>

        {/* Our Story & Mission - with background */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-slate-900">Our Story</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              With deep experience in the electric vehicle industry, EcoMoto Solutions has established itself as a reliable partner for businesses seeking high-quality electric vehicles and battery solutions. We work with ISO-certified factories and maintain rigorous quality control standards.
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              To accelerate the global transition to sustainable electric mobility by providing businesses with reliable, compliant, and cost-effective electric vehicles and energy solutions.
            </p>
          </div>
        </div>

        {/* Why Us */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Why Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center hover:shadow-lg hover:-translate-y-1 hover:border-teal-500 transition-all duration-300">
                <div className="text-teal-600 flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Factory - with images */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Partner Factory</h2>
            <p className="mt-2 text-slate-600">Professional manufacturing with global export capabilities</p>
            <div className="flex justify-center gap-3 mt-4">
              <span className="px-4 py-1 bg-teal-600 text-white text-sm font-medium rounded-full">ISO9001 Certified</span>
              <span className="px-4 py-1 bg-teal-600 text-white text-sm font-medium rounded-full">Exported to 20+ Countries</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden">
              <img src="/images/bafang-1.webp" alt="Factory" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden">
              <img src="/images/bafang-2.webp" alt="Production" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-video bg-slate-100 rounded-xl overflow-hidden">
              <img src="/images/bafang-3.webp" alt="Quality" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="mt-4 text-lg text-slate-300">
            Have questions? We are here to help you find the perfect solution.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-6 py-3 text-teal-600 bg-white rounded-lg hover:bg-slate-100 transition-colors">Contact Us</Link>
            <a href="https://wa.me/8618820222555" className="px-6 py-3 text-white border border-white rounded-lg hover:bg-white/10 transition-colors">WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  );
}