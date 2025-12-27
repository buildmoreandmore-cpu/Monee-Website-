
import { Service, Testimonial, NavItem, FaqItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', path: '/' },
  { label: 'SERVICES', path: '/services' },
  { label: 'GALLERY', path: '/gallery' },
  { label: 'ABOUT', path: '/about' },
  { label: 'CONTACT', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'kids-braids',
    title: "Kids' Braids",
    price: "Starting at $45",
    description: "Specialized, gentle braiding for children ages 4+. We take our time to ensure a pain-free experience.",
    features: ['Knotless', 'Feed-ins', 'Ponytails', 'Freestyle'],
    image: 'https://picsum.photos/seed/braids1/800/1000'
  },
  {
    id: 'lash-extensions',
    title: "Lash Extensions",
    price: "Starting at $85",
    description: "Enhance your natural beauty with precision-applied lashes that feel as light as air.",
    features: ['Classic Sets', 'Hybrid', 'Volume', 'Lash Fills'],
    image: 'https://picsum.photos/seed/lashes1/800/1000'
  },
  {
    id: 'makeup-artistry',
    title: "Makeup Artistry",
    price: "Starting at $75",
    description: "Professional makeup for your most precious moments, from photoshoots to weddings.",
    features: ['Special Occasions', 'Photoshoots', 'Bridal', 'Soft Glam'],
    image: 'https://picsum.photos/seed/makeup1/800/1000'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "Finally found someone my daughter actually looks forward to visiting. No more braid day meltdowns!",
    author: "Keisha",
    role: "Mom of 6-year-old"
  },
  {
    id: '2',
    quote: "The patience Amariel has is unmatched. My daughter is very tender-headed, but she left with a smile and beautiful braids.",
    author: "Sarah",
    role: "Mom of 4-year-old"
  },
  {
    id: '3',
    quote: "Professional, clean, and so warm. The environment is perfect for kids and moms alike.",
    author: "Jessica",
    role: "Mom of 8-year-old"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "At what age can my daughter start getting braids?",
    answer: "We recommend starting at age 4. This is when most children can sit comfortably for the duration of a gentle braiding session."
  },
  {
    question: "Do you require a deposit?",
    answer: "Yes, a non-refundable $25 deposit is required to secure your appointment. This amount is applied toward your final service total."
  },
  {
    question: "How long do the sessions usually take?",
    answer: "Kids' braiding sessions typically last between 2 to 4 hours depending on the complexity of the style and the child's comfort."
  },
  {
    question: "Can I bring my own hair extensions?",
    answer: "We prefer to provide the high-quality, pre-stretched hair ourselves to ensure the best and most gentle results, but we can discuss specific requests during booking."
  }
];
