import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Contact EcoMoto Solutions - Get a Quote for Electric Vehicles',
  description: 'Contact EcoMoto Solutions for B2B quotes on electric cargo tricycles, commercial motorcycles, and LFP battery packs. Fast response within 24 hours.',
};

export default function ContactPage() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Contact Us</h1>
          <p className="mt-4 text-lg text-slate-600">
            Have questions? We are here to help you find the perfect solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            <iframe 
              data-tally-src="https://tally.so/embed/GxByvL?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              loading="lazy" 
              width="100%" 
              height={550} 
              frameBorder={0} 
              marginHeight={0} 
              marginWidth={0} 
              title="Send us a Message"
            />
            <Script async src="https://tally.so/widgets/embed.js" />
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900">Email</h3>
                <p className="text-slate-600">sales@ecomotosolutions.com</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">WhatsApp Business</h3>
                <a
                  href="https://api.whatsapp.com/send?phone=8618820222555"
                  className="text-teal-600 hover:text-teal-700 transition-colors"
                >
                  +86 188 2027 2255
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Business Hours</h3>
                <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-slate-600">Saturday: 9:00 AM - 2:00 PM</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Response Time</h3>
                <p className="text-slate-600">
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="mt-12 bg-slate-100 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Quick Contact</h3>
              <a
                href="https://api.whatsapp.com/send?phone=8618820222555"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors duration-200"
              >
                Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}