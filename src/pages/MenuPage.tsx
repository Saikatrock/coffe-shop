import { useState } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { menuCategories, menuItems } from '../data/menu';
import PageHeader from '../components/ui/PageHeader';
import Section from '../components/ui/Section';
import CategoryFilter from '../components/menu/CategoryFilter';
import type { CategoryFilterValue } from '../components/menu/CategoryFilter';
import MenuCard from '../components/menu/MenuCard';

export default function MenuPage() {
  useDocumentTitle('Menu');
  const [category, setCategory] = useState<CategoryFilterValue>('All');

  const visibleItems =
    category === 'All' ? menuItems : menuItems.filter((item) => item.category === category);

  return (
    <>
      <PageHeader title="Our Menu" subtitle="Handcrafted drinks and freshly baked treats, made to order." />
      <Section className="!pt-4">
        <CategoryFilter categories={menuCategories} active={category} onChange={setCategory} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </Section>
    </>
  );
}
