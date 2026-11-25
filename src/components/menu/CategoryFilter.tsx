import type { MenuCategory } from '../../types';

export type CategoryFilterValue = MenuCategory | 'All';

interface CategoryFilterProps {
  categories: MenuCategory[];
  active: CategoryFilterValue;
  onChange: (value: CategoryFilterValue) => void;
}

export default function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  const options: CategoryFilterValue[] = ['All', ...categories];

  return (
    <div className="flex flex-wrap justify-center gap-3" role="tablist" aria-label="Menu categories">
      {options.map((option) => {
        const isActive = option === active;
        return (
          <button
            key={option}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              isActive
                ? 'bg-amber-800 text-white'
                : 'bg-white text-stone-700 ring-1 ring-amber-200 hover:bg-amber-100'
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
