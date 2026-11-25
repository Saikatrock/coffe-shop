
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import TestimonialMarqueeDemo from '../layout/marque-demo';



export default function Testimonials() {
  return (
    <>
    
      <Section className="bg-[#E4CDB0">
        <SectionHeading eyebrow="Testimonials" title="What our guests say" />
        {/* <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.id} className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="text-amber-500" aria-label={`${t.rating} out of 5 stars`}>
                {'★'.repeat(t.rating)}
                <span className="text-stone-300">{'★'.repeat(5 - t.rating)}</span>
              </div>
              <blockquote className="mt-4 text-stone-700">“{t.quote}”</blockquote>
              <figcaption className="mt-6 text-sm">
                <span className="font-semibold text-stone-900">{t.name}</span>
                <span className="text-stone-500"> · {t.role}</span>
              </figcaption>
            </figure>
          ))} */}
        {/* </div> */}

        <TestimonialMarqueeDemo />
</Section>
    </>
  );
}
