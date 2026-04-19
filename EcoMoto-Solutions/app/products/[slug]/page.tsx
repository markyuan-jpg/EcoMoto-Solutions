'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

interface ProductPageContentProps {
  product: any;
  products: any[];
  allProducts: any[];
}

function ProductPageContent({ product, products: relatedProducts, allProducts }: ProductPageContentProps) {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const allImages = [product.image, ...(product.thumbnails || [])].filter(Boolean);

  if (!product) {
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
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-teal-600 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-teal-600 transition-colors">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image with Thumbnails */}
          <div>
            {/* Main Image */}
            <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden mb-4">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            {product.thumbnails && product.thumbnails.length > 0 && (
              <div className="flex gap-3">
                {allImages.map((img: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === img ? 'border-teal-600' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{product.name}</h1>
            <p className="mt-4 text-lg text-slate-600">{product.fullDescription}</p>

            {/* Specifications */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Specifications</h2>
              <div className="space-y-3">
                {product.specifications.map((spec: any) => (
                  <div key={spec.label} className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-500">{spec.label}</span>
                    <span className="font-medium text-slate-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">Key Features</h2>
              <ul className="space-y-2">
                {product.features.map((feature: string) => (
                  <li key={feature} className="flex items-center">
                    <svg className="w-5 h-5 text-teal-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors duration-200"
              >
                Request Quote
              </Link>
              <a
                href="https://wa.me/8618820222555"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-teal-600 border border-teal-600 hover:bg-teal-50 rounded-lg transition-colors duration-200"
              >
                Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Ideal Applications</h2>
          <div className="flex flex-wrap gap-3">
            {product.applications.map((app: string) => (
              <span
                key={app}
                className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full"
              >
                {app}
              </span>
            ))}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts
              .slice(0, 3)
              .map((p: any) => (
                <ProductCard key={p.id} product={p} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductPage(props: { params: Promise<{ slug: string }> }) {
  const params = use(props.params);
  const slug = params.slug;
  
  // Get products from data directly
  const allProducts = [
    {
      id: '1',
      slug: 'city-feeder',
      name: 'City Feeder Series',
      shortDescription: 'Light-duty electric cargo tricycle for quick city deliveries.',
      fullDescription: 'City Feeder Series light-duty electric cargo tricycle for quick city deliveries. Compact design perfect for urban last-mile logistics.',
      type: 'cargo',
      image: '/images/city-feeder.jpg',
      thumbnails: ['/images/city-feeder-thumb1.png', '/images/city-feeder-thumb2.png'],
      specifications: [
        { label: 'Overall Vehicle Dimensions', value: '1300 x 1000mm' },
        { label: 'Motor Power', value: '800W+ Motor' },
        { label: 'Battery', value: '72V 45Ah LiFePO4' },
        { label: 'Range', value: '60-80km (Real on road data)' },
        { label: 'Load Capacity', value: '150kg' },
        { label: 'Top Speed', value: '40km/h' },
        { label: 'Tires', value: '300-12 / 300-12 Steel-belted' },
        { label: 'Brakes', value: 'Front drum brake / Rear drum brake' },
        { label: 'Charging Time', value: '5-6 hours' },
      ],
      features: ['Compact design for easy parking', 'Quick charging capability', 'Low operating costs', 'Zero emissions'],
      applications: ['Food delivery', 'Package delivery', 'Small business logistics'],
    },
    {
      id: '2',
      slug: 'urban-hauler',
      name: 'Urban Hauler Series',
      shortDescription: 'Electric cargo tricycle for urban last-mile delivery.',
      fullDescription: 'Urban Hauler Series electric cargo tricycle for urban last-mile delivery.',
      type: 'cargo',
      image: '/images/urban-hauler.jpg',
      thumbnails: ['/images/urban-hauler-thumb1.png', '/images/urban-hauler-thumb2.png'],
      specifications: [
        { label: 'Overall Vehicle Dimensions', value: '1600 x 1100mm' },
        { label: 'Motor Power', value: '1200W+ Permanent Magnet Motor' },
        { label: 'Battery', value: '72V 60Ah LiFePO4' },
        { label: 'Range', value: '60-80km (real on road data)' },
        { label: 'Load Capacity', value: '>150kg' },
        { label: 'Top Speed', value: '40-45km/h' },
        { label: 'Tires', value: '375/400-12 Steel-belted' },
        { label: 'Brakes', value: 'One-pedal triple brake' },
        { label: 'Charging Time', value: '5-6 hours' },
      ],
      features: ['Medium payload capacity', 'Extended range', 'Durable construction', 'Easy maintenance'],
      applications: ['Wholesale delivery', 'Retail restocking', 'Light construction materials'],
    },
    {
      id: '3',
      slug: 'heavy-hauler',
      name: 'Heavy-Duty Hauler',
      shortDescription: 'Heavy-duty cargo tricycle for maximum load capacity.',
      fullDescription: 'Heavy-Duty Hauler electric cargo tricycle for maximum load capacity.',
      type: 'cargo',
      image: '/images/heavy-hauler.jpg',
      thumbnails: ['/images/heavy-hauler-thumb1.png', '/images/heavy-hauler-thumb2.png'],
      specifications: [
        { label: 'Overall Vehicle Dimensions', value: '1800 x 1300mm' },
        { label: 'Motor Power', value: '1800W+ Permanent Magnet Motor' },
        { label: 'Battery', value: 'High Capacity LiFePO4 (72V 60Ah)' },
        { label: 'Range', value: '80km+ (Real on road data)' },
        { label: 'Load Capacity', value: '>500kg (Heavy-duty / Customizable)' },
        { label: 'Top Speed', value: '40-45km/h' },
        { label: 'Tires', value: '450/500-12 Steel-belted Heavy-duty' },
        { label: 'Brakes', value: 'Front/Rear drum disc' },
        { label: 'Charging Time', value: '5-6 hours' },
      ],
      features: ['Maximum payload', 'Long range', 'Heavy-duty frame', 'Advanced braking system'],
      applications: ['Warehouse logistics', 'Industrial supply', 'Bulk cargo transport'],
    },
    {
      id: '4',
      slug: 'commando-3000',
      name: 'Commando 3000',
      shortDescription: 'High-performance electric motorcycle for delivery fleets.',
      fullDescription: 'Commando 3000 high-performance electric motorcycle for delivery fleets.',
      type: 'specialty',
      image: '/images/commando-3000.jpg',
      thumbnails: ['/images/commando-3000-2.png', '/images/commando-3000-3.png'],
      specifications: [
        { label: 'Motor Power', value: '3000W Hub Motor' },
        { label: 'Battery', value: '72V LiFePO4 (Swappable option)' },
        { label: 'Range', value: '>80km (Real on road data)' },
        { label: 'Top Speed', value: '>80km/h' },
        { label: 'Tires', value: 'FR 2.75-18/RR 3.5-17' },
        { label: 'Brakes', value: 'Hydraulic Disc Brakes' },
        { label: 'Charging Time', value: '4-5 hours' },
        { label: 'Passenger Capacity', value: '2-3 persons' },
        { label: 'Max Load', value: '250kg' },
        { label: 'Torque', value: '190N.m' },
      ],
      features: ['High performance', 'Swappable battery option', 'Silent operation', 'All-terrain capability'],
      applications: ['Delivery fleets', 'Urban commuting', 'Security patrol'],
    },
    {
      id: '5',
      slug: 'passenger-cruiser',
      name: 'Passenger Cruiser',
      shortDescription: 'Electric passenger shuttle for tourist sites and campuses.',
      fullDescription: 'Passenger Cruiser electric passenger shuttle for tourist sites and campuses.',
      type: 'passenger',
      image: '/images/passenger-cruiser.jpg',
      thumbnails: [],
      specifications: [
        { label: 'Motor Power', value: '2000W Motor' },
        { label: 'Battery', value: '72V 120Ah LiFePO4' },
        { label: 'Range', value: '120km (Real on road data)' },
        { label: 'Passenger Capacity', value: '4-8 passengers' },
        { label: 'Top Speed', value: '55km/h' },
        { label: 'Tires', value: '400-12 Steel-belted' },
        { label: 'Brakes', value: 'Front/rear drum Brakes' },
        { label: 'Charging Time', value: '6-7 hours' },
      ],
      features: ['Comfortable seating', 'Climate control option', 'Low floor design', 'Easy entry/exit'],
      applications: ['Corporate shuttle', 'Tourist transport', 'Community bus'],
    },
    {
      id: '6',
      slug: 'lfp-power',
      name: 'LFP Power Series',
      shortDescription: 'Lithium Iron Phosphate battery packs for EV fleets.',
      fullDescription: 'LFP Power Series lithium iron phosphate battery packs.',
      type: 'specialty',
      image: '/images/battery1.png',
      thumbnails: ['/images/battery2.png', '/images/battery3.png'],
      specifications: [
        { label: 'Cell Type', value: 'LiFePO4 (Lithium Iron Phosphate)' },
        { label: 'Voltage Options', value: '48V / 60V / 72V' },
        { label: 'Capacity Options', value: '45Ah / 60Ah / 80Ah / 100Ah' },
        { label: 'Cycle Life', value: '3000+ cycles at 80% DOD' },
        { label: 'BMS', value: 'Smart BMS with protection' },
        { label: 'Communication', value: 'RS485 / CAN (optional)' },
        { label: 'Operating Temperature', value: 'Charge: 0~45C / Discharge: -20~60C' },
        { label: 'Certifications', value: 'CE, UN38.3, MSDS' },
        { label: 'Warranty', value: '12 months' },
      ],
      features: ['LFP battery technology', 'Smart BMS', 'Long cycle life', 'Enhanced safety'],
      applications: ['EV fleet conversion', 'Backup power', 'Temperature-sensitive environments'],
    },
  ];
  
  const product = allProducts.find(p => p.slug === slug);
  const relatedProducts = product 
    ? allProducts.filter(p => p.id !== product.id && p.type === product.type)
    : [];

  return <ProductPageContent product={product} products={relatedProducts} allProducts={allProducts} />;
}