import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'Electric Vehicle Solutions for Logistics, Passenger Transport & Shuttles',
  description: 'Tailored electric mobility solutions for urban logistics, passenger transport, and tourist shuttles. Contact us to discuss your fleet needs.',
};

const applicationScenarios = [
  {
    title: 'Urban Logistics',
    description: 'Last-mile delivery, postal services, warehouse operations',
    longDescription: 'Our electric cargo tricycles are designed for last-mile delivery, postal services, and warehouse operations. With 800-2000W motor and 60-80km range, they can complete a full day of deliveries on a single charge.',
    products: 'Urban Hauler, City Feeder',
    image: '/images/logistics.png',
  },
  {
    title: 'Passenger Transport',
    description: 'Carry 2-3 passengers daily',
    longDescription: 'Perfect for passenger transport, courier services, and rider fleets. The Commando 3000 electric motorcycle offers 3000W+ power, 190N.m torque, and high capacity battery options for 24/7 operation.',
    products: 'Commando 3000',
    image: '/images/transport.png',
  },
  {
    title: 'Scenic Shuttle',
    description: 'Tourist sites, campuses, community transit',
    longDescription: 'Designed for tourist sites, campuses, and community transit. Spacious seating, smooth electric drive. The Passenger Cruiser features 2000W motor, 120km range, and CAN bus system for fleet management.',
    products: 'Passenger Cruiser',
    image: '/images/shuttle.jpg',
  },
];

export default function SolutionsPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: 'Solutions' }]} />

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Applications & Solutions</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Tailored electric mobility solutions for your business needs.
          </p>
        </div>

        {/* Application Scenarios - zigzag with hover */}
        <div className="space-y-12">
          {applicationScenarios.map((scenario, idx) => (
            <div key={scenario.title} className={`bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col lg:flex-row ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 aspect-4/3 lg:aspect-auto lg:h-72 bg-slate-100">
                <img src={scenario.image} alt={scenario.title} className="w-full h-full object-cover" />
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-900">{scenario.title}</h3>
                <p className="mt-2 text-base text-slate-600">{scenario.description}</p>
                <p className="mt-4 text-slate-500 leading-relaxed">{scenario.longDescription}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-50 text-teal-700">
                    Recommended: {scenario.products}
                  </span>
                  <Link href="/products" className="text-sm font-medium text-teal-600 hover:text-teal-700 flex items-center gap-1">
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Solutions */}
        <div className="mt-16 bg-slate-900 rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold">Need a Custom Solution?</h2>
          <p className="mt-4 text-lg text-slate-300">
            We work with businesses to develop customized electric vehicle solutions 
            tailored to your specific requirements.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-teal-600 bg-white hover:bg-slate-100 rounded-lg transition-colors duration-200"
            >
              Discuss Your Needs
            </Link>
            <a
              href="https://wa.me/8618820222555"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-white hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              WhatsApp: +86 188 2027 2255
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}