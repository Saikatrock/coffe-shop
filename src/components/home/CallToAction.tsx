import Button from '../ui/Button';
import { siteConfig } from '../../data/siteConfig';

export default function CallToAction() {
  return (
    <section className="bg-[#E4CDB0] py-16 text-gray-950">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Come say hello</h2>
        <p className="mt-4 text-mauve-950">
          {siteConfig.hours.map((h) => `${h.days}: ${h.time}`).join('  •  ')}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="/contact" variant="light">
            Get directions
          </Button>
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center rounded-full border border-white px-6 py-3 text-sm font-semibold hover:bg-white hover:text-amber-900"
          >
            Call us
          </a>
        </div>
      </div>
    </section>
  );
}
