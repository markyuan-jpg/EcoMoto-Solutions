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
    image: '/images/city-feeder.webp',
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
    image: '/images/commando-3000.webp',
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
    image: '/images/passenger-cruiser.webp',
    specifications: [
      { label: 'Range', value: '120+km' },
      { label: 'Passengers', value: '4-8 passengers' },
    ],
  },
];

const benefits = [
  { 
    title: 'Lower Operating Costs', 
    description: 'Reduce fuel and maintenance costs by up to 70% compared to traditional vehicles.',
    stat: '70%', statLabel: 'Cost Savings',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    title: 'Zero Emissions', 
    description: 'Meet sustainability goals with 100% electric vehicles producing zero direct emissions.',
    stat: '0', statLabel: 'Emissions',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.295M3.055 11h15a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.295M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  { 
    title: 'High Reliability', 
    description: 'Less downtime with proven quality and comprehensive warranty coverage.',
    stat: '99%', statLabel: 'Uptime',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.959 11.959 0 0112 2c5.523 0 10 4.477 10 10s-4.477 10-10 10 10-4.477 10-10.382A11.959 11.959 0 013.382 12" />
      </svg>
    )
  },
  { 
    title: 'Silent Operation', 
    description: 'Perfect for night deliveries without disturbing residents.',
    stat: '60dB', statLabel: 'Quiet',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
      </svg>
    )
  },
];

const scenarios = [
  { title: 'Urban Logistics', description: 'Last-mile delivery for cities', image: '/images/urban-logistics.webp', stat: '60-80km', statLabel: 'Range' },
  { title: 'Passenger Transport', description: 'Safe transport for 2-8 passengers', image: '/images/passenger-transport.webp', stat: '4-8', statLabel: 'Seats' },
  { title: 'Scenic Shuttle', description: 'Tourist sites, campuses & communities', image: '/images/scenic-shuttle.webp', stat: '120+km', statLabel: 'Range' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Choose EcoMoto</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Trusted by businesses worldwide for reliable, sustainable electric vehicle solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-4">
                  {benefit.icon}
                </div>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-teal-600">{benefit.stat}</span>
                  <span className="text-sm text-slate-500 ml-1">{benefit.statLabel}</span>
                </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Application Scenarios</h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Versatile solutions designed for every business need.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scenarios.map((scenario) => (
              <Link key={scenario.title} href="/solutions" className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer">
                <div className="aspect-[4/3] relative">
                  <img src={scenario.image} alt={scenario.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl font-bold text-white">{scenario.stat}</span>
                      <span className="text-sm text-white/80">{scenario.statLabel}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{scenario.title}</h3>
                    <p className="text-sm text-white/70">{scenario.description}</p>
                  </div>
                </div>
              </Link>
            ))}
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