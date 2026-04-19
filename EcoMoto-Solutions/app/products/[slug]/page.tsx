import Link from 'next/link';

const products = {
  'city-feeder': {
    name: 'City Feeder Series',
    description: 'Light-duty electric cargo tricycle for quick city deliveries.',
    details: 'City Feeder Series light-duty electric cargo tricycle. 800W motor, 60-80km range. Compact design perfect for urban last-mile logistics.',
    image: '/images/city-feeder.jpg',
    specs: [
      { label: 'Motor Power', value: '800W+ Motor' },
      { label: 'Battery', value: '72V 45Ah LiFePO4' },
      { label: 'Range', value: '60-80km' },
      { label: 'Load Capacity', value: '150kg' },
    ],
  },
  'urban-hauler': {
    name: 'Urban Hauler Series',
    description: 'Electric cargo tricycle for urban delivery.',
    details: 'Urban Hauler Series. 1200W motor, 60-80km range. Medium payload capacity.',
    image: '/images/urban-hauler.jpg',
    specs: [
      { label: 'Motor Power', value: '1200W+ Motor' },
      { label: 'Battery', value: '72V 60Ah LiFePO4' },
      { label: 'Range', value: '60-80km' },
      { label: 'Load Capacity', value: '>150kg' },
    ],
  },
  'heavy-hauler': {
    name: 'Heavy-Duty Hauler',
    description: 'Heavy-duty cargo tricycle.',
    details: 'Heavy-Duty Hauler. 1800W motor, 80km+ range. Maximum payload capacity.',
    image: '/images/heavy-hauler.jpg',
    specs: [
      { label: 'Motor Power', value: '1800W+ Motor' },
      { label: 'Range', value: '80km+' },
      { label: 'Load Capacity', value: '>500kg' },
    ],
  },
  'commando-3000': {
    name: 'Commando 3000',
    description: 'High-performance electric motorcycle.',
    details: 'Commando 3000. 3000W motor, >80km range. High performance with swappable battery.',
    image: '/images/commando-3000.jpg',
    specs: [
      { label: 'Motor Power', value: '3000W Hub Motor' },
      { label: 'Range', value: '>80km' },
      { label: 'Top Speed', value: '>80km/h' },
    ],
  },
  'passenger-cruiser': {
    name: 'Passenger Cruiser',
    description: 'Electric passenger shuttle.',
    details: 'Passenger Cruiser. 2000W motor, 120km+ range. Comfortable seating for 4-8 passengers.',
    image: '/images/passenger-cruiser.jpg',
    specs: [
      { label: 'Motor Power', value: '2000W Motor' },
      { label: 'Range', value: '120+km' },
      { label: 'Passengers', value: '4-8' },
    ],
  },
  'lfp-power': {
    name: 'LFP Power Series',
    description: 'Lithium Iron Phosphate battery packs.',
    details: 'LFP Power Series. 48-72V, 45-100Ah, 2000+ cycles. Smart BMS included.',
    image: '/images/battery1.png',
    specs: [
      { label: 'Voltage', value: '48V / 60V / 72V' },
      { label: 'Capacity', value: '45-100Ah' },
      { label: 'Cycle Life', value: '2000+ cycles' },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({
    slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = products[params.slug as keyof typeof products];
  
  if (!p) {
    return (
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-2xl font-bold">Product Not Found</h1>
          <Link href="/products" className="text-teal-600 hover:underline mt-4 inline-block">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-teal-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-teal-600">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{p.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
            </div>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{p.name}</h1>
            <p className="mt-4 text-lg text-slate-600">{p.details}</p>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Specifications</h2>
              <div className="space-y-3">
                {p.specs.map((spec: any) => (
                  <div key={spec.label} className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-500">{spec.label}</span>
                    <span className="font-medium text-slate-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
                Request Quote
              </Link>
              <a href="https://wa.me/8618820222555" className="px-6 py-3 text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}