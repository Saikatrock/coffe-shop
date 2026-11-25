export type MenuCategory = 'Coffee' | 'Tea' | 'Snacks' | 'Desserts';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  emoji: string;
  popular?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface NavLinkItem {
  label: string;
  to: string;
}

export interface OpeningHours {
  days: string;
  time: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  emoji: string;
}

export interface GalleryItem {
  id: number;
  label: string;
  emoji: string;
  tone: string;
}
