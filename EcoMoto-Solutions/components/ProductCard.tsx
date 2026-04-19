import Link from 'next/link';

interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  type: string;
  image: string;
  specifications: { label: string; value: string }[];
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const getSpec = (product: Product) => {
    if (product.type === 'passenger') return { label: 'Passengers', value: product.specifications.find((s: any) => s.label === 'Passenger Capacity')?.value };
    if (product.type === 'cargo') return { label: 'Load', value: product.specifications.find((s: any) => s.label === 'Load Capacity')?.value };
    if (product.type === 'specialty' && product.name.includes('LFP')) return { label: 'Cycles', value: '2000+ cycles' };
    if (product.type === 'specialty') return { label: 'Top Speed', value: product.specifications.find((s: any) => s.label === 'Top Speed')?.value || '-' };
    return { label: 'Load', value: '-' };
  };

  const hasRange = product.specifications.find((s: any) => s.label === 'Range');
  const spec1 = hasRange ? { label: 'Range', value: hasRange.value } : { label: 'Voltage', value: product.specifications.find((s: any) => s.label === 'Voltage Options')?.value || '-' };
  const spec2 = getSpec(product);

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-200 hover:shadow-md hover:-translate-y-1 cursor-pointer">
        <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-teal-600 transition-colors">
                {product.name}
              </h3>
              <p className="mt-1 text-sm text-slate-500 line-clamp-2">
                {product.shortDescription}
              </p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide">{spec1.label}</p>
                <p className="text-sm font-medium text-slate-700">{spec1.value || '-'}</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide">{spec2.label}</p>
                <p className="text-sm font-medium text-slate-700">{spec2.value || '-'}</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <span className="inline-flex items-center text-teal-600 font-medium text-sm group-hover:text-teal-700">
              Learn more
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}