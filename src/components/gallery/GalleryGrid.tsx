import { useEffect, useState } from 'react';
import type { GalleryItem } from '../../types';
import { DemoOne } from '../layout/galui';

interface GalleryGridProps {
  items: GalleryItem[];

}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  // Close the lightbox with the Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      {/* <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setSelected(item)}
            className={`group flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br ${item.tone} text-6xl shadow-sm transition hover:scale-[1.03] hover:shadow-md`}
            aria-label={`Open ${item.label}`}
          >
            <span className="transition group-hover:scale-110">{item.emoji}</span>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={selected.label}
          onClick={() => setSelected(null)}
        >
          <div
            className={`flex aspect-square w-full max-w-lg flex-col items-center justify-center rounded-3xl bg-gradient-to-br ${selected.tone} text-9xl`}
            onClick={(e) => e.stopPropagation()}
          >
            {selected.emoji}
            <p className="mt-4 font-sans text-base font-medium text-stone-800">{selected.label}</p>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="mt-6 rounded-full bg-white/80 px-5 py-2 text-sm font-semibold text-stone-800 hover:bg-white"
            >
              Close
            </button>
          </div>
        </div>
      )} */}


      <DemoOne />
    </>
  );
}
