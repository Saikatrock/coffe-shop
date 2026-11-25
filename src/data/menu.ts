import type { MenuCategory, MenuItem } from '../types';

export const menuCategories: MenuCategory[] = ['Coffee', 'Tea', 'Snacks', 'Desserts'];

export const menuItems: MenuItem[] = [
  { id: 1, name: 'Classic Espresso', description: 'Rich, bold and perfectly pulled single origin shot.', price: 120, category: 'Coffee', emoji: 'https://i.pinimg.com/736x/4c/28/e2/4c28e2420bf38c50120dba0cbaf42e8d.jpg', popular: true },
  { id: 2, name: 'Caffe Latte', description: 'Smooth espresso with steamed milk and light foam.', price: 180, category: 'Coffee', emoji: 'https://i.pinimg.com/736x/8e/41/dd/8e41dd49821ad3f6cd98b330b954944a.jpg', popular: true },
  { id: 3, name: 'Cappuccino', description: 'Equal parts espresso, steamed milk and velvety foam.', price: 170, category: 'Coffee', emoji: 'https://i.pinimg.com/736x/f8/56/1e/f8561ea80e14bd1989b4fe87736e1468.jpg' },
  { id: 4, name: 'Iced Caramel Macchiato', description: 'Chilled espresso, vanilla milk and caramel drizzle.', price: 220, category: 'Coffee', emoji: 'https://i.pinimg.com/736x/31/6c/1c/316c1cbc879646d09246bdeeaa41363c.jpg', popular: true },
  { id: 5, name: 'Masala Chai', description: 'Slow-brewed tea with fresh ginger and whole spices.', price: 90, category: 'Tea', emoji: 'https://i.pinimg.com/736x/e8/0e/48/e80e48a01a281fb96178dd1f34fe6015.jpg' },
  { id: 6, name: 'Green Tea', description: 'Light, fresh and gently grassy. Served hot.', price: 100, category: 'Tea', emoji: 'https://i.pinimg.com/736x/a2/eb/50/a2eb50b76edcb5379d2b6c4899c692f1.jpg' },
  { id: 7, name: 'Lemon Iced Tea', description: 'Black tea, fresh lemon and a hint of honey over ice.', price: 130, category: 'Tea', emoji: 'https://i.pinimg.com/236x/fb/00/b2/fb00b2040bd65b8cc946f7994ae06f25.jpg' },
  { id: 8, name: 'Butter Croissant', description: 'Flaky, golden and baked fresh every morning.', price: 140, category: 'Snacks', emoji: 'https://i.pinimg.com/736x/17/02/79/170279cf3c2a4688ee6216da4d6a2b6b.jpg', popular: true },
  { id: 9, name: 'Grilled Cheese Sandwich', description: 'Three cheeses on toasted sourdough.', price: 210, category: 'Snacks', emoji: 'https://i.pinimg.com/736x/63/9d/57/639d5753392372c6fd7da319220183c3.jpg' },
  { id: 10, name: 'Veg Club Sandwich', description: 'Layers of fresh veggies, cheese and house spread.', price: 230, category: 'Snacks', emoji: 'https://i.pinimg.com/1200x/0d/c0/45/0dc04550524f35814cf5e3ba1e02ef5f.jpg' },
  { id: 11, name: 'Chocolate Brownie', description: 'Fudgy, warm and served with a scoop of vanilla.', price: 160, category: 'Desserts', emoji: 'https://i.pinimg.com/736x/27/64/d6/2764d61a28a4b90aa21139a471a10b6b.jpg', popular: true },
  { id: 12, name: 'Blueberry Cheesecake', description: 'Creamy baked cheesecake with blueberry compote.', price: 240, category: 'Desserts', emoji: 'https://i.pinimg.com/736x/94/47/b8/9447b855503ad01cf47819ab9ea2aac3.jpg' },
];
