import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - EcoMoto Solutions',
  description: 'Contact EcoMoto Solutions for inquiries about electric commercial vehicles. Get in touch via form, email, or WhatsApp.',
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
            <form className="space-y-6" action="https://formspree.io/f/your-form-id" method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
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
                <h3 className="font-semibold text-slate-900">WhatsApp</h3>
                <a
                  href="https://wa.me/8618820222555"
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
                href="https://wa.me/8618820222555"
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