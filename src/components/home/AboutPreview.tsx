import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function AboutPreview() {
  return (
   
<Section>
  <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">

    {/* Cafe Image */}
    <div className="w-full h-64 sm:h-80 md:h-[450px] overflow-hidden rounded-2xl shadow-lg">
      <img
        src="/images/testimonial.png"
        alt="Our cafe story"
        className="w-full h-full object-cover object-center"
      />
    </div>

    {/* Content */}
    <div className="text-center md:text-left">
      <div className="md:block hidden">
      <SectionHeading
        align="left"
        eyebrow="Our story"
        title="A little cafe with a big love for coffee  "
      />
      </div>
      <div className="md:hidden block">
      <SectionHeading
        align="center"
        eyebrow="Our story"
        title="A little cafe with a big love for coffee  "
      />
      </div>

      <p className="mt-4 text-stone-600 leading-relaxed">
        We started with one small espresso machine and a simple idea:
        make every cup feel special. Today we are a neighbourhood
        favourite for slow mornings, long chats and good food.
      </p>

      <div className="mt-6">
        <Button to="/about" variant="outline">
          Read more
        </Button>
      </div>
    </div>

  </div>
</Section>

  );
}
