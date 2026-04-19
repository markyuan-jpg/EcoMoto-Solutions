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
  const href = `/${product.slug}`;
  const hasRange = product.specifications?.find((s: any) => s.label === 'Range');
  
  const getSpec = () => {
    if (product.type === 'passenger') return product.specifications?.find((s: any) => s.label === 'Passengers')?.value;
    if (product.type === 'cargo') return product.specifications?.find((s: any) => s.label === 'Load')?.value;
    if (product.type === 'specialty') {
      const cycles = product.specifications?.find((s: any) => s.label === 'Cycles');
      const speed = product.specifications?.find((s: any) => s.label === 'Top Speed');
      return cycles?.value || speed?.value;
    }
    return '-';
  };

  return (
    <Link href={href}>
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer">
        <div className="aspect-[4/3] bg-slate-100">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
          <p className="mt-1 text-sm text-slate-500">{product.shortDescription}</p>
          <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-slate-400">Range</p>
              <p className="text-sm font-medium">{hasRange?.value || '-'}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">{product.type === 'passenger' ? 'Capacity' : 'Load'}</p>
              <p className="text-sm font-medium">{getSpec()}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}