export const metadata = {
  title: 'Terms of Service - EcoMoto Solutions',
  description: 'Terms of Service - Terms and conditions for using EcoMoto Solutions website and services.',
};

export default function TermsPage() {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Terms of Service</h1>
          <p className="mt-4 text-lg text-slate-600">
            Please read our terms and conditions carefully.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600">Last updated: {new Date().getFullYear()}</p>

          <h2 className="text-xl font-bold text-slate-900 mt-8">Acceptance of Terms</h2>
          <p className="text-slate-600">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8">Intellectual Property</h2>
          <p className="text-slate-600">
            This website contains material which is owned by or licensed to us. This material includes, but is not limited to, 
            the design, layout, look, appearance, and graphics. Reproduction is prohibited except in accordance with the copyright notice.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8">Product Information</h2>
          <p className="text-slate-600">
            We strive to provide accurate information about our products. However, we do not warrant that product descriptions 
            or other content on this site is accurate, complete, reliable, current, or error-free. 
            All products are subject to availability.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8">Pricing</h2>
          <p className="text-slate-600">
            Prices for our products are subject to change without notice. We reserve the right to modify or discontinue 
            any product at any time. Any product warranty is limited to the terms explicitly provided.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8">Limitation of Liability</h2>
          <p className="text-slate-600">
            We shall not be liable to you in contract, tort, or otherwise for any indirect, special, 
            or consequential loss or damage arising out of or in connection with the use of this website or our products.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8">Disclaimer</h2>
          <p className="text-slate-600">
            The information on this website is provided &quot;as is&quot; without warranty of any kind, either express or implied, 
            including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8">Governing Law</h2>
          <p className="text-slate-600">
            These terms and conditions are governed by the laws of the applicable jurisdiction. 
            Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8">Contact Information</h2>
          <p className="text-slate-600">
            If you have any questions about these terms, please contact us at:
            <br />
            Email: sales@ecomotosolutions.com
          </p>
        </div>
      </div>
    </div>
  );
}