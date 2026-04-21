export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  type: 'cargo' | 'passenger' | 'specialty';
  image: string;
  thumbnails: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  features: string[];
  applications: string[];
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'city-feeder',
    name: 'City Feeder Series',
    shortDescription: 'Light-duty electric cargo tricycle for quick city deliveries.',
    fullDescription: 'City Feeder Series light-duty electric cargo tricycle for quick city deliveries. Compact design perfect for urban last-mile logistics.',
    type: 'cargo',
    image: '/images/city-feeder.webp',
    thumbnails: ['/images/city-feeder-thumb1.webp', '/images/city-feeder-thumb2.webp'],
    specifications: [
      { label: 'Overall Vehicle Dimensions', value: '1300 x 1000mm' },
      { label: 'Motor Power', value: '800W+ Motor' },
      { label: 'Battery', value: '72V 45Ah LiFePO4' },
      { label: 'Range', value: '60-80km' },
      { label: 'Load Capacity', value: '150kg' },
      { label: 'Top Speed', value: '40km/h' },
      { label: 'Tires', value: '300-12 / 300-12 Steel-belted' },
      { label: 'Brakes', value: 'Front drum brake / Rear drum brake' },
      { label: 'Charging Time', value: '5-6 hours' },
    ],
    features: [
      'Compact design for easy parking',
      'Quick charging capability',
      'Low operating costs',
      'Zero emissions',
    ],
    applications: ['Food delivery', 'Package delivery', 'Small business logistics'],
  },
  {
    id: '2',
    slug: 'urban-hauler',
    name: 'Urban Hauler Series',
    shortDescription: 'Electric cargo tricycle for urban last-mile delivery.',
    fullDescription: 'Urban Hauler Series electric cargo tricycle for urban last-mile delivery. Medium-duty capacity for commercial operations.',
    type: 'cargo',
    image: '/images/urban-hauler.webp',
    thumbnails: ['/images/urban-hauler-thumb1.webp', '/images/urban-hauler-thumb2.webp'],
    specifications: [
      { label: 'Overall Vehicle Dimensions', value: '1600 x 1100mm' },
      { label: 'Motor Power', value: '1200W+ Permanent Magnet Motor' },
      { label: 'Battery', value: '72V 60Ah LiFePO4' },
      { label: 'Range', value: '60-80km' },
      { label: 'Load Capacity', value: '>150kg' },
      { label: 'Top Speed', value: '40-45km/h' },
      { label: 'Tires', value: '375/400-12 Steel-belted' },
      { label: 'Brakes', value: 'One-pedal triple brake' },
      { label: 'Charging Time', value: '5-6 hours' },
    ],
    features: [
      'Medium payload capacity',
      'Extended range',
      'Durable construction',
      'Easy maintenance',
    ],
    applications: ['Wholesale delivery', 'Retail restocking', 'Light construction materials'],
  },
  {
    id: '3',
    slug: 'heavy-hauler',
    name: 'Heavy-Duty Hauler',
    shortDescription: 'Heavy-duty cargo tricycle for maximum load capacity.',
    fullDescription: 'Heavy-Duty Hauler electric cargo tricycle for maximum load capacity, reinforced frame for industrial use.',
    type: 'cargo',
    image: '/images/heavy-hauler.webp',
    thumbnails: ['/images/heavy-hauler-thumb1.webp', '/images/heavy-hauler-thumb2.webp'],
    specifications: [
      { label: 'Overall Vehicle Dimensions', value: '1800 x 1300mm' },
      { label: 'Motor Power', value: '1800W+ Permanent Magnet Motor' },
      { label: 'Battery', value: 'High Capacity LiFePO4 (72V 60Ah)' },
      { label: 'Range', value: '80km+' },
      { label: 'Load Capacity', value: '>500kg (Heavy-duty / Customizable)' },
      { label: 'Top Speed', value: '40-45km/h' },
      { label: 'Tires', value: '450/500-12 Steel-belted Heavy-duty' },
      { label: 'Brakes', value: 'Front/Rear drum disc' },
      { label: 'Charging Time', value: '5-6 hours' },
    ],
    features: [
      'Maximum payload',
      'Long range',
      'Heavy-duty frame',
      'Advanced braking system',
    ],
    applications: ['Warehouse logistics', 'Industrial supply', 'Bulk cargo transport'],
  },
  {
    id: '4',
    slug: 'commando-3000',
    name: 'Commando 3000',
    shortDescription: 'High-performance electric motorcycle for delivery fleets.',
    fullDescription: 'Commando 3000 high-performance electric motorcycle for delivery fleets and urban commuters. Powerful 3000W motor.',
    type: 'specialty',
    image: '/images/commando-3000.webp',
    thumbnails: ['/images/commando-thumb1.webp', '/images/commando-thumb2.webp'],
    specifications: [
      { label: 'Motor Power', value: '3000W Hub Motor' },
      { label: 'Battery', value: '72V LiFePO4 (Swappable option available)' },
      { label: 'Range', value: '>80km' },
      { label: 'Top Speed', value: '>80km/h' },
      { label: 'Tires', value: 'FR 2.75-18/RR 3.5-17' },
      { label: 'Brakes', value: 'Hydraulic Disc Brakes' },
      { label: 'Charging Time', value: '4-5 hours' },
      { label: 'Passenger Capacity', value: '2-3 persons (including driver)' },
      { label: 'Max Load', value: '250kg' },
      { label: 'Torque', value: '190N.m' },
    ],
    features: [
      'High performance',
      'Swappable battery option',
      'Silent operation',
      'All-terrain capability',
    ],
    applications: ['Delivery fleets', 'Urban commuting', 'Security patrol'],
  },
  {
    id: '5',
    slug: 'passenger-cruiser',
    name: 'Passenger Cruiser',
    shortDescription: 'Electric passenger shuttle for tourist sites and campuses.',
    fullDescription: 'Passenger Cruiser electric passenger shuttle for tourist sites operations, campuses, and community transit. 2000W motor, 120km+ range.',
    type: 'passenger',
    image: '/images/passenger-cruiser.webp',
    thumbnails: [],
    specifications: [
      { label: 'Motor Power', value: '2000W Motor' },
      { label: 'Battery', value: '72V 120Ah LiFePO4' },
      { label: 'Range', value: '120+km' },
      { label: 'Passenger Capacity', value: '4-8 passengers' },
      { label: 'Top Speed', value: '55km/h' },
      { label: 'Tires', value: '400-12 Steel-belted' },
      { label: 'Brakes', value: 'Front/rear drum Brakes' },
      { label: 'Charging Time', value: '6-7 hours' },
    ],
    features: [
      'Comfortable seating',
      'Climate control option',
      'Low floor design',
      'Easy entry/exit',
    ],
    applications: ['Corporate shuttle', 'Tourist transport', 'Community bus'],
  },
  {
    id: '6',
    slug: 'lfp-power',
    name: 'LFP Power Series',
    shortDescription: 'Lithium Iron Phosphate battery packs for EV fleets.',
    fullDescription: 'LFP Power Series lithium iron phosphate battery packs. 48-72V, 45-100Ah, smart BMS, 2000+ cycles. Customizable capacity for EV fleets.',
    type: 'specialty',
    image: '/images/battery1.webp',
    thumbnails: ['/images/battery2.webp', '/images/battery3.webp'],
    specifications: [
      { label: 'Cell Type', value: 'LiFePO4 (Lithium Iron Phosphate)' },
      { label: 'Voltage Options', value: '48V / 60V / 72V' },
      { label: 'Capacity Options', value: '45Ah / 60Ah / 80Ah / 100Ah' },
      { label: 'Cycle Life', value: '2000+ cycles at 80% DOD' },
      { label: 'BMS', value: 'Smart BMS with overcharge, over-discharge, over-current, short circuit, temperature protection' },
      { label: 'Communication', value: 'RS485 / CAN (optional)' },
      { label: 'Operating Temperature', value: 'Charge: 0~45C / Discharge: -20~60C' },
      { label: 'Certifications', value: 'CE, UN38.3, MSDS' },
      { label: 'Warranty', value: '12 months (extended available)' },
    ],
    features: [
      'LFP battery technology',
      'Smart BMS',
      'Long cycle life',
      'Enhanced safety',
    ],
    applications: ['EV fleet conversion', 'Backup power', 'Temperature-sensitive environments'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductsByType(type: string): Product[] {
  if (type === 'all') return products;
  return products.filter(product => product.type === type);
}