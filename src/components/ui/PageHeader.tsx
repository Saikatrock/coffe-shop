interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-b from-amber-100 to-amber-50/0 pt-28 pb-12 sm:pt-32 sm:pb-16 md:pt-27 md:pb-16">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h1 className="text-3xl font-bold text-stone-900 sm:text-5xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-sm text-stone-600 sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}