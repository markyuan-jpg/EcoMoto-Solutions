export const metadata = {
  title: 'Privacy Policy - EcoMoto Solutions',
  description: 'Privacy Policy - Learn how EcoMoto Solutions collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Privacy Policy</h1>
          <p className="mt-4 text-lg text-slate-600">
            Your privacy is important to us.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-600">Last updated: {new Date().getFullYear()}</p>

          <h2 className="text-xl font-bold text-slate-900 mt-8">Information We Collect</h2>
          <p className="text-slate-600">
            We collect information you provide directly to us, such as when you:
          </p>
          <ul className="list-disc pl-6 text-slate-600">
            <li>Fill out a contact form</li>
            <li>Send us an email</li>
            <li>Contact us via WhatsApp or other messaging platforms</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8">How We Use Your Information</h2>
          <p className="text-slate-600">We use the information we collect to:</p>
          <ul className="list-disc pl-6 text-slate-600">
            <li>Respond to your inquiries</li>
            <li>Provide customer support</li>
            <li>Send you information about our products and services</li>
            <li>Improve our website and services</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8">Information Sharing</h2>
          <p className="text-slate-600">
            We do not sell, trade, or otherwise transfer your personal information to outside parties. 
            We may share information with trusted third parties who assist us in operating our website, 
            conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8">Data Security</h2>
          <p className="text-slate-600">
            We implement appropriate security measures to protect your personal information. 
            However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8">Your Consent</h2>
          <p className="text-slate-600">
            By using our website, you consent to our privacy policy.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8">Changes to This Policy</h2>
          <p className="text-slate-600">
            We may update this privacy policy from time to time. We will notify you of any changes 
            by posting the new policy on this page.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8">Contact Us</h2>
          <p className="text-slate-600">
            If you have any questions about this privacy policy, please contact us at:
            <br />
            Email: sales@ecomotosolutions.com
          </p>
        </div>
      </div>
    </div>
  );
}