import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

const allProducts = [
  {
    id: '1',
    slug: 'city-feeder',
    name: 'City Feeder Series',
    shortDescription: 'Light-duty electric cargo tricycle for quick city deliveries.',
    fullDescription: 'City Feeder Series light-duty electric cargo tricycle. 800W motor, 60-80km range.',
    type: 'cargo',
    image: '/images/city-feeder.jpg',
    specifications: [
      { label: 'Motor Power', value: '800W+ Motor' },
      { label: 'Battery', value: '72V 45Ah LiFePO4' },
      { label: 'Range', value: '60-80km' },
      { label: 'Load Capacity', value: '150kg' },
    ],
    features: ['Compact design', 'Quick charging', 'Low costs'],
    applications: ['Food delivery', 'Package delivery'],
  },
  {
    id: '2',
    slug: 'urban-hauler',
    name: 'Urban Hauler Series',
    shortDescription: 'Electric cargo tricycle for urban delivery.',
    fullDescription: 'Urban Hauler Series. 1200W motor, 60-80km range.',
    type: 'cargo',
    image: '/images/urban-hauler.jpg',
    specifications: [
      { label: 'Motor Power', value: '1200W+ Motor' },
      { label: 'Battery', value: '72V 60Ah LiFePO4' },
      { label: 'Range', value: '60-80km' },
    ],
  },
  {
    id: '3',
    slug: 'heavy-hauler',
    name: 'Heavy-Duty Hauler',
    shortDescription: 'Heavy-duty cargo tricycle.',
    fullDescription: 'Heavy-Duty Hauler. 1800W motor, 80km+ range.',
    type: 'cargo',
    image: '/images/heavy-hauler.jpg',
    specifications: [
      { label: 'Motor Power', value: '1800W+ Motor' },
      { label: 'Range', value: '80km+' },
    ],
  },
  {
    id: '4',
    slug: 'commando-3000',
    name: 'Commando 3000',
    shortDescription: 'High-performance electric motorcycle.',
    fullDescription: 'Commando 3000. 3000W motor, >80km range.',
    type: 'specialty',
    image: '/images/commando-3000.jpg',
    specifications: [
      { label: 'Motor Power', value: '3000W Hub Motor' },
      { label: 'Range', value: '>80km' },
    ],
  },
  {
    id: '5',
    slug: 'passenger-cruiser',
    name: 'Passenger Cruiser',
    shortDescription: 'Electric passenger shuttle.',
    fullDescription: 'Passenger Cruiser. 2000W motor, 120km+ range.',
    type: 'passenger',
    image: '/images/passenger-cruiser.jpg',
    specifications: [
      { label: 'Motor Power', value: '2000W Motor' },
      { label: 'Range', value: '120+km' },
    ],
  },
  {
    id: '6',
    slug: 'lfp-power',
    name: 'LFP Power Series',
    shortDescription: 'Lithium Iron Phosphate battery packs.',
    fullDescription: 'LFP Power Series. 48-72V, 45-100Ah, 2000+ cycles.',
    type: 'specialty',
    image: '/images/battery1.png',
    specifications: [
      { label: 'Voltage', value: '48V / 60V / 72V' },
      { label: 'Capacity', value: '45-100Ah' },
    ],
  },
];

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = allProducts.find((p) => p.slug === params.slug);
  const relatedProducts = product
    ? allProducts.filter((p) => p.id !== product.id && p.type === product.type)
    : [];

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

  // For client component - no useState in server component
  const selectedImage = product.image;
  const allImages = [product.image, ...(product.thumbnails || [])];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-teal-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="hover:text-teal-600">Products</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden mb-4">
              <img src={selectedImage} alt={product.name} className="w-full h-full object-cover" />
            </div>
            {product.thumbnails && product.thumbnails.length > 0 && (
              <div className="flex gap-3">
                {allImages.map((img: string, index: number) => (
                  <div key={index} className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${selectedImage === img ? 'border-teal-600' : 'border-transparent'}`}>
                    <img src={img} alt={`${product.name} view ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{product.name}</h1>
            <p className="mt-4 text-lg text-slate-600">{product.fullDescription}</p>

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

            {product.features && (
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
            )}

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

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Ideal Applications</h2>
          <div className="flex flex-wrap gap-3">
            {product.applications?.map((app: string) => (
              <span key={app} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-full">
                {app}
              </span>
            ))}
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.slice(0, 3).map((p: any) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}