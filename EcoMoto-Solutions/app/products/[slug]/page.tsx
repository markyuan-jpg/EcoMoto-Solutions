import type { Metadata } from 'next';
import Link from 'next/link';
import ProductSchema from '@/components/SEO/ProductSchema';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products[params.slug as keyof typeof products];
  
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  const productMeta: Record<string, { title: string; description: string }> = {
    'city-feeder': {
      title: 'City Feeder Series - Light-Duty Electric Cargo Tricycle',
      description: 'City Feeder light-duty electric tricycle with 800W motor, 60-80km range, 150kg load. Ideal for fast urban delivery and small business transport.',
    },
    'urban-hauler': {
      title: 'Urban Hauler Series - 1200W Electric Cargo Tricycle for Logistics',
      description: 'Urban Hauler electric cargo tricycle with 1200W motor, 60-80km range, 150kg+ load capacity. Perfect for last-mile delivery and warehouse operations.',
    },
    'heavy-hauler': {
      title: 'Heavy-Duty Hauler - 1800W+ Electric Cargo Tricycle for Heavy Loads',
      description: 'Heavy-duty electric cargo tricycle with 1800W+ motor, 80km+ range, 500kg+ load capacity. Built for industrial logistics and construction sites.',
    },
    'commando-3000': {
      title: 'Commando 3000 - 3000W Electric Motorcycle for Passenger Transport',
      description: 'Commando 3000 electric motorcycle with 3000W motor, 190N·m torque, 80km+ range. Carries 2-3 passengers. Designed for passenger transport.',
    },
    'passenger-cruiser': {
      title: 'Passenger Cruiser - 4000W Electric Shuttle for Tourist Sites & Campuses',
      description: 'Passenger Cruiser electric shuttle with 4000W motor, 120-150km range, 4-8 passenger capacity. Ideal for scenic spots, universities, and community transit.',
    },
    'lfp-power': {
      title: 'LFP Power Series - 48-72V LiFePO4 Battery Packs for EVs',
      description: 'LFP Power Series lithium iron phosphate battery packs with smart BMS. 48-72V, 45-100Ah, 3000+ cycles. Customizable for EV fleets.',
    },
  };

  const meta = productMeta[params.slug] || { title: product.name, description: product.description };

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  };
}

const products = {
  'city-feeder': {
    name: 'City Feeder Series',
    description: 'Light-duty electric cargo tricycle for quick city deliveries.',
    details: 'City Feeder Series light-duty electric cargo tricycle. 800W motor, 60-80km range. Compact design perfect for urban last-mile logistics.',
    image: '/images/city-feeder.webp',
    thumbnails: ['/images/city-feeder-thumb1.webp', '/images/city-feeder-thumb2.webp'],
    specs: [
      { label: 'Overall Vehicle Dimensions', value: '1300 × 1000mm' },
      { label: 'Motor Power', value: '800W+ Motor' },
      { label: 'Battery', value: '72V 45Ah LiFePO4' },
      { label: 'Range', value: '60-80km' },
      { label: 'Load Capacity', value: '150kg' },
      { label: 'Top Speed', value: '40km/h' },
      { label: 'Tires', value: '300-12 / 300-12 Steel-belted' },
      { label: 'Brakes', value: 'Front drum brake / Rear drum brake' },
      { label: 'Charging Time', value: '5-6 hours' },
    ],
  },
  'urban-hauler': {
    name: 'Urban Hauler Series',
    description: 'Electric cargo tricycle for urban delivery.',
    details: 'Urban Hauler Series. 1200W motor, 60-80km range. Medium payload capacity.',
    image: '/images/urban-hauler.webp',
    thumbnails: ['/images/urban-hauler-thumb1.webp', '/images/urban-hauler-thumb2.webp'],
    specs: [
      { label: 'Overall Vehicle Dimensions', value: '1600×1100mm' },
      { label: 'Motor Power', value: '1200W+ Permanent Magnet Motor' },
      { label: 'Battery', value: '72V 60Ah LiFePO4' },
      { label: 'Range', value: '60-80km' },
      { label: 'Load Capacity', value: '>150kg' },
      { label: 'Top Speed', value: '40-45km/h' },
      { label: 'Tires', value: '375/400-12 Steel-belted' },
      { label: 'Brakes', value: 'One-pedal triple brake' },
      { label: 'Charging Time', value: '5-6 hours' },
    ],
  },
  'heavy-hauler': {
    name: 'Heavy-Duty Hauler',
    description: 'Heavy-duty cargo tricycle.',
    details: 'Heavy-Duty Hauler. 1800W motor, 80km+ range. Maximum payload capacity.',
    image: '/images/heavy-hauler.webp',
    thumbnails: ['/images/heavy-hauler-thumb1.webp', '/images/heavy-hauler-thumb2.webp'],
    specs: [
      { label: 'Overall Vehicle Dimensions', value: '1800×1300mm' },
      { label: 'Motor Power', value: '1800W+ Permanent Magnet Motor' },
      { label: 'Battery', value: 'High Capacity LiFePO4 (72V 60Ah)' },
      { label: 'Range', value: '80km+' },
      { label: 'Load Capacity', value: '>500kg (Heavy-duty / Customizable)' },
      { label: 'Top Speed', value: '40-45km/h' },
      { label: 'Tires', value: '450/500-12 Steel-belted Heavy-duty' },
      { label: 'Brakes', value: 'Front/Rear drum disc' },
      { label: 'Charging Time', value: '5-6 hours' },
    ],
  },
  'commando-3000': {
    name: 'Commando 3000',
    description: 'High-performance electric motorcycle.',
    details: 'Commando 3000. 3000W motor, >80km range. High performance with swappable battery.',
    image: '/images/commando-3000.webp',
    thumbnails: ['/images/commando-thumb1.webp', '/images/commando-thumb2.webp'],
    specs: [
      { label: 'Motor Power', value: '3000W Hub Motor' },
      { label: 'Battery', value: '72V LiFePO4 (Swappable option available)' },
      { label: 'Range', value: '>80km' },
      { label: 'Top Speed', value: '>80km/h' },
      { label: 'Tires', value: 'FR 2.75-18/RR 3.5-17' },
      { label: 'Brakes', value: 'Hydraulic Disc Brakes' },
      { label: 'Charging Time', value: '4-5 hours' },
      { label: 'Passenger Capacity', value: '2-3 persons (including driver)' },
      { label: 'Max Load', value: '250kg' },
      { label: 'Torque', value: '190N·m' },
    ],
  },
  'passenger-cruiser': {
    name: 'Passenger Cruiser',
    description: 'Electric passenger shuttle.',
    details: 'Passenger Cruiser. 4000W motor, 120-150km range. Comfortable seating for 4-8 passengers.',
    image: '/images/passenger-cruiser.webp',
    thumbnails: [],
    specs: [
      { label: 'Motor Power', value: '4000W Motor' },
      { label: 'Battery', value: '72V 120Ah LiFePO4' },
      { label: 'Range', value: '120-150km' },
      { label: 'Passenger Capacity', value: '4-8 passengers' },
      { label: 'Top Speed', value: '55km/h' },
      { label: 'Tires', value: '400-12 Steel-belted' },
      { label: 'Brakes', value: 'Front/rear drum Brakes' },
      { label: 'Charging Time', value: '6-7 hours' },
    ],
  },
  'lfp-power': {
    name: 'LFP Power Series',
    description: 'Lithium Iron Phosphate battery packs.',
    details: 'LFP Power Series. 48-72V, 45-100Ah, 3000+ cycles. Smart BMS included.',
    image: '/images/battery1.webp',
    thumbnails: ['/images/battery2.webp', '/images/battery3.webp'],
    specs: [
      { label: 'Cell Type', value: 'LiFePO4 (Lithium Iron Phosphate)' },
      { label: 'Voltage Options', value: '48V / 60V / 72V' },
      { label: 'Capacity Options', value: '45Ah / 60Ah / 80Ah / 100Ah' },
      { label: 'Cycle Life', value: '3000+ cycles at 80% DOD' },
      { label: 'BMS', value: 'Smart BMS with overcharge, over-discharge, over-current, short circuit, temperature protection' },
      { label: 'Communication', value: 'RS485 / CAN (optional)' },
      { label: 'Operating Temperature', value: 'Charge: 0~45℃ / Discharge: -20~60℃' },
      { label: 'Certifications', value: 'CE, UN38.3, MSDS' },
      { label: 'Warranty', value: '12 months (extended available)' },
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
            <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden mb-4">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
            </div>
            {p.thumbnails && p.thumbnails.length > 0 && (
              <div className="grid grid-cols-4 gap-2">
                <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
                  <img src={p.image} alt="Main view" className="w-full h-full object-cover" />
                </div>
                {p.thumbnails.map((thumb: string, idx: number) => (
                  <div key={idx} className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
                    <img src={thumb} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{p.name}</h1>
            <p className="mt-4 text-lg text-slate-600">{p.details}</p>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Technical Specifications</h2>
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
                Get Quote
              </Link>
              <a href="https://wa.me/8618820222555" className="px-6 py-3 text-teal-600 border border-teal-600 rounded-lg hover:bg-teal-50">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* SEO Schema */}
      <ProductSchema
        name={p.name}
        description={p.description}
        slug={params.slug}
        image={p.image}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: p.name, url: `/products/${params.slug}` },
        ]}
      />
    </div>
  );
}