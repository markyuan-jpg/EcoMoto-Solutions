import Link from 'next/link';

const footerLinks = {
  products: [
    { href: '/products', label: 'All Products' },
    { href: '/products?type=cargo', label: 'Cargo Vehicles' },
    { href: '/products?type=passenger', label: 'Passenger Vehicles' },
    { href: '/products?type=specialty', label: 'Specialty Vehicles' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-teal-400">EcoMoto</span>
              <span className="text-xl font-bold text-white">Solutions</span>
            </Link>
            <p className="mt-4 text-slate-400 text-sm">
              Your trusted B2B partner for electric vehicles and battery solutions.
            </p>
            <div className="mt-4">
              <p className="text-slate-400 text-sm">Email: sales@ecomotosolutions.com</p>
              <p className="text-slate-400 text-sm">WhatsApp: +86 188 2027 2255</p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <p className="text-center text-slate-400 text-sm">
            © {new Date().getFullYear()} EcoMoto Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}