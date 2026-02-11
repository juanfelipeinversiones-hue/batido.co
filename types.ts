
export interface JuiceFlavor {
  id: string;
  name: string;
  focus: string;
  description: string;
  ingredients: string[];
  color: string;
  bgColor: string;
  imageUrl: string;
}

export interface PricingPack {
  id: string;
  name: string;
  description: string;
  price: string;
  compareAt?: string;
  sizeMl: number;
  availabilityNote: string;
  isPopular?: boolean;
  cta: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  city: string;
  quote: string;
  rating: number;
  result?: string;
}
