'use client';

import Link from 'next/link';
import { products } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { useState, useEffect } from 'react';

const heroImages = [
  '/images/hero-carousel-1-crop.jpg',
  '/images/hero-carousel-2-crop.jpg',
  '/images/hero-carousel-3-crop.jpg',
  '/images/hero-carousel-4-crop.jpg',
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredProducts = products.slice(0, 3);

  const benefits = [
    {
      title: 'Lower Operating Costs',
      description: 'Reduce fuel and maintenance costs compared to traditional vehicles.',
    },
    {
      title: 'Zero Emissions',
      description: 'Meet sustainability goals with zero-emission transportation.',
    },
    {
      title: 'High Reliability',
      description: 'Fewer moving parts means less downtime and reduced maintenance.',
    },
    {
      title: 'Silent Operation',
      description: 'Perfect for noise-sensitive areas and night deliveries.',
    },
  ];

  const faqs = [
    {
      question: 'How long does the battery last?',
      answer: 'Our batteries are designed to last 5-10 years with proper care and maintenance. We offer warranty coverage for peace of mind.',
    },
    {
      question: 'What is the charging time?',
      answer: 'Charging time varies by model, typically 6-12 hours for a full charge. Fast charging options are available for compatible models.',
    },
    {
      question: 'Do you offer financing options?',
      answer: 'Yes, we offer flexible financing solutions to help your business get the vehicles you need. Contact us to discuss your options.',
    },
  ];

  useEffect(() => {
  const timer = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, 4000);
  return () => clearInterval(timer);
}, []);

return (
    <div className="flex flex-col">
      {/* Hero Section with Carousel */}
      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-40' : 'opacity-0'}`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Electric Fleet Solutions
            </h1>
            <div className="mt-6 text-xl text-slate-300 space-y-2">
              <p>Power your fleet. Reduce operating costs.</p>
              <p className="text-base text-slate-400">Your sourcing partner for electric commercial vehicles. High-performance cargo tricycles, passenger motorcycles, and LFP battery packs — ISO-certified, globally compliant.</p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-colors duration-200"
              >
                View Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-slate-600 hover:bg-slate-800 rounded-lg transition-colors duration-200"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
        {/* Carousel Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-white scale-125' : 'bg-white/50'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Products</h2>
            <p className="mt-4 text-lg text-slate-600">
              Discover our range of electric commercial vehicles designed for your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors duration-200"
            >
              View All Products
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Choose EcoMoto</h2>
            <p className="mt-4 text-lg text-slate-600">
              Benefits that make a difference for your business and the environment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Scenarios - text only */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Application Scenarios</h2>
            <p className="mt-4 text-lg text-slate-600">
              Electric mobility solutions for your industry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/solutions" className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center hover:shadow-lg hover:-translate-y-1 hover:border-teal-500 transition-all duration-300">
              <h3 className="text-lg font-semibold text-slate-900">Urban Logistics</h3>
              <p className="mt-2 text-slate-600">Last-mile delivery, postal services</p>
            </Link>
            <Link href="/solutions" className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center hover:shadow-lg hover:-translate-y-1 hover:border-teal-500 transition-all duration-300">
              <h3 className="text-lg font-semibold text-slate-900">Passenger Transport</h3>
              <p className="mt-2 text-slate-600">Carrying 2-3 passengers</p>
            </Link>
            <Link href="/solutions" className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center hover:shadow-lg hover:-translate-y-1 hover:border-teal-500 transition-all duration-300">
              <h3 className="text-lg font-semibold text-slate-900">Scenic Shuttle</h3>
              <p className="mt-2 text-slate-600">Tourist sites, campuses</p>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link href="/solutions" className="text-teal-600 font-medium hover:text-teal-700">
              View all solutions
              <svg className="ml-2 w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-0 divide-y divide-slate-200">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-2 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700 transition-colors duration-200"
            >
              View All FAQ
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 text-lg text-teal-100">
            Contact us today to learn more about our electric commercial vehicles 
            and find the perfect solution for your business.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-teal-600 bg-white hover:bg-slate-100 rounded-lg transition-colors duration-200"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/8618820222555"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-white hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              WhatsApp: +86 188 2027 2255
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}