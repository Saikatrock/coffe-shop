interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-3xl font-bold text-stone-900 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-stone-600">{subtitle}</p>}
    </div>
  );
}
