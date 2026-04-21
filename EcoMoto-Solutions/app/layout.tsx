import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrganizationSchema from "@/components/SEO/OrganizationSchema";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ecomotosolutions.com'),
  title: {
    default: "EcoMoto Solutions - Electric Cargo Tricycle Manufacturer",
    template: "%s | EcoMoto Solutions",
  },
  description: "EcoMoto Solutions is a leading manufacturer of electric cargo tricycles, passenger motorcycles, and LFP batteries. CE certified. Contact us for bulk pricing.",
  keywords: [
    "electric cargo tricycle",
    "electric motorcycle",
    "electric tricycle manufacturer",
    "LFP battery",
    "LiFePO4 battery",
    "commercial electric vehicle",
    "last-mile delivery vehicle",
    "OEM electric tricycle",
    "wholesale electric vehicle",
  ],
  authors: [{ name: "EcoMoto Solutions" }],
  creator: "EcoMoto Solutions",
  publisher: "EcoMoto Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ecomotosolutions.com",
    siteName: "EcoMoto Solutions",
    title: "EcoMoto Solutions - Electric Cargo Tricycle Manufacturer",
    description: "B2B manufacturer of electric cargo tricycles, passenger motorcycles, and LFP batteries. CE certified.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "EcoMoto Solutions - Electric Fleet Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoMoto Solutions - Electric Cargo Tricycle Manufacturer",
    description: "B2B manufacturer of electric cargo tricycles, passenger motorcycles, and LFP batteries.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE", // Replace with actual code from GSC
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <SpeedInsights />
        <Analytics />
        
        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-GDSRQTH7ZJ"
        />
        <Script id="ga4-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GDSRQTH7ZJ');
          `}
        </Script>
        
        <OrganizationSchema />
        <Navbar />
        <main className="flex-1 pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
