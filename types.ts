export interface Module {
  id: string;
  title: string;
  duration: string;
  lessons: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}
