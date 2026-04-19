import Link from 'next/link';

const products = [
  {
    id: '1',
    slug: 'products-city-feeder',
    name: 'City Feeder Series',
    description: 'Light-duty electric cargo tricycle for quick city deliveries.',
    image: '/images/city-feeder.jpg',
    range: '60-80km',
    spec: '150kg',
  },
  {
    id: '2',
    slug: 'products-urban-hauler',
    name: 'Urban Hauler Series',
    description: 'Electric cargo tricycle for urban delivery.',
    image: '/images/urban-hauler.jpg',
    range: '60-80km',
    spec: '>150kg',
  },
  {
    id: '3',
    slug: 'products-heavy-hauler',
    name: 'Heavy-Duty Hauler',
    description: 'Heavy-duty cargo tricycle.',
    image: '/images/heavy-hauler.jpg',
    range: '80km+',
    spec: '>500kg',
  },
  {
    id: '4',
    slug: 'products-commando-3000',
    name: 'Commando 3000',
    description: 'High-performance electric motorcycle.',
    image: '/images/commando-3000.jpg',
    range: '>80km',
    spec: '>80km/h',
  },
  {
    id: '5',
    slug: 'products-passenger-cruiser',
    name: 'Passenger Cruiser',
    description: 'Electric passenger shuttle.',
    image: '/images/passenger-cruiser.jpg',
    range: '120+km',
    spec: '4-8 passengers',
  },
  {
    id: '6',
    slug: 'products-lfp-power',
    name: 'LFP Power Series',
    description: 'Lithium Iron Phosphate battery packs.',
    image: '/images/battery1.png',
    range: '2000+ cycles',
    spec: '45-100Ah',
  },
];

export default function ProductsPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center text-sm text-slate-500 mb-8">
          <Link href="/" className="hover:text-teal-600">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">Products</span>
        </nav>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Our Products</h1>
          <p className="mt-4 text-lg text-slate-600">Discover our range of electric commercial vehicles.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.slug}`}>
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
                <div className="aspect-[4/3] bg-slate-100">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{product.description}</p>
                  <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-slate-400">Range</p>
                      <p className="text-sm font-medium">{product.range}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">{product.id === '5' ? 'Capacity' : 'Load'}</p>
                      <p className="text-sm font-medium">{product.spec}</p>
                    </div>
                  </div>
                  <div className="mt-4 text-teal-600 text-sm font-medium">View Details →</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}