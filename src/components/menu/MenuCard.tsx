import type { MenuItem } from '../../types';
import { formatPrice } from '../../utils/format';

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-amber-100 transition hover:-translate-y-1 hover:shadow-md">
      {/* Replace the emoji block with: <img src={item.image} alt={item.name} /> */}
      <div className="flex h-36 items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200 text-6xl">
        <img src={item.emoji} alt={item.name} className="h-full w-full cover" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-stone-900">{item.name}</h3>
          <span className="font-semibold text-amber-800">{formatPrice(item.price)}</span>
        </div>
        <p className="mt-2 flex-1 text-sm text-stone-600">{item.description}</p>
        <span className="mt-4 text-xs font-medium uppercase tracking-wider text-stone-400">
          {item.category}
        </span>
      </div>
    </article>
  );
}
