import type { NavLinkItem, OpeningHours } from '../types';

export const siteConfig = {
  name: 'Brew & Bloom',
  tagline: 'Freshly roasted coffee, baked with love.',
  description:
    'A cozy neighbourhood cafe serving specialty coffee, handcrafted teas and fresh bakes every day.',
  address: '123 Main Street, Your City, 000000',
  phone: '+91 98765 43210',
  email: 'hello@brewandbloom.com',
  currency: '₹',
  mapEmbedUrl: 'https://www.google.com/maps?q=cafe&output=embed',
  hours: [
    { days: 'Mon – Fri', time: '8:00 AM – 10:00 PM' },
    { days: 'Sat – Sun', time: '9:00 AM – 11:00 PM' },
  ] satisfies OpeningHours[],
  navLinks: [
    { label: 'Home', to: '/' },
    { label: 'Menu', to: '/menu' },
    { label: 'About', to: '/about' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Contact', to: '/contact' },
  ] satisfies NavLinkItem[],
  socials: [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Facebook', href: 'https://facebook.com' },
    { label: 'X', href: 'https://x.com' },
  ],
};
