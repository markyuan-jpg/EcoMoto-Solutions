'use client';

import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { useState, useEffect } from 'react';

const heroImages = [
  '/images/hero-carousel-2-crop.webp',
  '/images/hero-carousel-3-crop.webp',
  '/images/hero-carousel-4-crop.webp',
];

const featuredProducts = [
  {
    id: '1',
    slug: 'city-feeder',
    name: 'City Feeder Series',
    shortDescription: 'Light-duty electric cargo tricycle for quick city deliveries.',
    type: 'cargo',
    image: '/images/city-feeder.jpg',
    specifications: [
      { label: 'Range', value: '60-80km' },
      { label: 'Load', value: '150kg' },
    ],
  },
  {
    id: '4',
    slug: 'commando-3000',
    name: 'Commando 3000',
    shortDescription: 'High-performance electric motorcycle.',
    type: 'specialty',
    image: '/images/commando-3000.jpg',
    specifications: [
      { label: 'Range', value: '>80km' },
      { label: 'Top Speed', value: '>80km/h' },
    ],
  },
  {
    id: '5',
    slug: 'passenger-cruiser',
    name: 'Passenger Cruiser',
    shortDescription: 'Electric passenger shuttle.',
    type: 'passenger',
    image: '/images/passenger-cruiser.jpg',
    specifications: [
      { label: 'Range', value: '120+km' },
      { label: 'Passengers', value: '4-8 passengers' },
    ],
  },
];

const benefits = [
  { title: 'Lower Operating Costs', description: 'Reduce fuel and maintenance costs.' },
  { title: 'Zero Emissions', description: 'Meet sustainability goals.' },
  { title: 'High Reliability', description: 'Less downtime and reduced maintenance.' },
  { title: 'Silent Operation', description: 'Perfect for night deliveries.' },
];

const faqs = [
  { question: 'How long does the battery last?', answer: '5-10 years with proper care.' },
  { question: 'What is the charging time?', answer: '6-12 hours for full charge.' },
  { question: 'What warranty do you offer?', answer: '12-month warranty on electrical components.' },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-b from-slate-900 to-slate-800 text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImages.map((img, idx) => (
            <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ${idx === currentSlide ? 'opacity-40' : 'opacity-0'}`}>
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Electric Fleet Solutions</h1>
            <div className="mt-6 text-xl text-slate-300 space-y-2">
              <p>Power your fleet. Reduce operating costs.</p>
              <p className="text-base text-slate-400">Your sourcing partner for electric commercial vehicles.</p>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="px-6 py-3 bg-teal-600 hover:bg-teal-700 rounded-lg">View Products</Link>
              <Link href="/contact" className="px-6 py-3 border border-slate-600 hover:bg-slate-800 rounded-lg">Contact Sales</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, idx) => (
            <button key={idx} onClick={() => setCurrentSlide(idx)} className={`w-3 h-3 rounded-full ${idx === currentSlide ? 'bg-white' : 'bg-white/50'}`} />
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Products</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product as any} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="text-teal-600 font-medium">View All Products →</Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Why Choose EcoMoto</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-xl shadow-sm border">
                <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
                <p className="mt-2 text-slate-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Application Scenarios</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/solutions" className="bg-white p-6 rounded-xl shadow-sm border text-center hover:border-teal-500">
              <h3 className="text-lg font-semibold text-slate-900">Urban Logistics</h3>
              <p className="mt-2 text-slate-600">Last-mile delivery</p>
            </Link>
            <Link href="/solutions" className="bg-white p-6 rounded-xl shadow-sm border text-center hover:border-teal-500">
              <h3 className="text-lg font-semibold text-slate-900">Passenger Transport</h3>
              <p className="mt-2 text-slate-600">Carry 2-3 passengers</p>
            </Link>
            <Link href="/solutions" className="bg-white p-6 rounded-xl shadow-sm border text-center hover:border-teal-500">
              <h3 className="text-lg font-semibold text-slate-900">Scenic Shuttle</h3>
              <p className="mt-2 text-slate-600">Tourist sites, campuses</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">FAQ</h2>
          </div>
          <div className="space-y-0 divide-y divide-slate-200">
            {faqs.map((faq) => (
              <div key={faq.question} className="py-6">
                <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-2 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-teal-600 font-medium">View All FAQ →</Link>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-teal-600 text-white text-center">
        <h2 className="text-3xl font-bold">Ready to Transform Your Business?</h2>
        <p className="mt-4 text-teal-100">Contact us today to find the perfect solution.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="px-6 py-3 bg-white text-teal-600 rounded-lg">Contact Us</Link>
          <a href="https://wa.me/8618820222555" className="px-6 py-3 border border-white rounded-lg">WhatsApp</a>
        </div>
      </section>
    </div>
  );
}