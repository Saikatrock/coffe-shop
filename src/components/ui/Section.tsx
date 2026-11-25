interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/** Consistent vertical spacing and max width for every page section. */
export default function Section({ children, className = '', id }: Props) {
  return (
    <section id={id} className={`py-16 sm:py-10 ${className}`}>
      <div className="mx-auto max-w-6xl px-4">{children}</div>
    </section>
  );
}
