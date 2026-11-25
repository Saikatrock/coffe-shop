import type { GalleryItem, TeamMember, Testimonial } from '../types';

// export const testimonials: Testimonial[] = [
//   { id: 1, name: 'Aarav S.', role: 'Regular guest', quote: 'The best latte in town and the nicest corner to work from. I am here almost every morning.', rating: 5 },
//   { id: 2, name: 'Meera K.', role: 'Food blogger', quote: 'Warm service, great music and a croissant that is honestly worth the trip on its own.', rating: 5 },
//   { id: 3, name: 'Rohan D.', role: 'Freelancer', quote: 'Fast wifi, comfy seats and the iced caramel macchiato is perfect. Highly recommended.', rating: 4 },
// ];

export const teamMembers: TeamMember[] = [
  { id: 1, name: 'Ananya Rao', role: 'Founder & Head Barista', emoji:  '/images/ani.jpg' },
  { id: 2, name: 'Vikram Shah', role: 'Pastry Chef', emoji: "/images/ad.jpg" },
  { id: 3, name: 'Sara Khan', role: 'Cafe Manager', emoji: "/images/sara.jpg" },
];

export const galleryItems: GalleryItem[] = [
  { id: 1, label: 'Morning pour-over', emoji: '☕', tone: 'from-amber-200 to-amber-400' },
  { id: 2, label: 'Fresh croissants', emoji: '🥐', tone: 'from-orange-200 to-amber-300' },
  { id: 3, label: 'Cozy corner', emoji: '🛋️', tone: 'from-stone-200 to-stone-400' },
  { id: 4, label: 'Latte art', emoji: '🎨', tone: 'from-yellow-100 to-amber-300' },
  { id: 5, label: 'Chocolate brownie', emoji: '🍫', tone: 'from-amber-700 to-stone-600' },
  { id: 6, label: 'Iced drinks', emoji: '🧊', tone: 'from-sky-100 to-amber-200' },
  { id: 7, label: 'Weekend brunch', emoji: '🥞', tone: 'from-orange-100 to-orange-300' },
  { id: 8, label: 'Evening glow', emoji: '🌇', tone: 'from-rose-200 to-amber-300' },
];
