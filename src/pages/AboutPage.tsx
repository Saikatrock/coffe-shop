import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { teamMembers } from '../data/content';
import PageHeader from '../components/ui/PageHeader';
import Section from '../components/ui/Section';
import SectionHeading from '../components/ui/SectionHeading';

const values = [
  { emoji: ( <img
              src="/images/quality.jpg"
              alt="Our cafe story"
              className="h-full w-full rounded-3xl object-cover object-center"
            />), title: 'Quality first', text: 'We taste, test and tweak until every cup is just right.' },
  
  { emoji: ( <img
              src="/images/community.jpg"
              alt="Our cafe story"
              className="h-full w-full rounded-3xl object-cover object-center"
            />), title: 'Community', text: 'Our doors are open to everyone, from first-timers to regulars.' },
  { emoji: ( <img
              src="/images/susten.jpg"
              alt="Our cafe story"
              className="h-full w-full rounded-3xl object-cover object-center"
            />), title: 'Sustainability', text: 'Compostable packaging and a zero-waste mindset in the kitchen.' },
];

export default function AboutPage() {
  useDocumentTitle('About');

  return (
    <>
      <PageHeader title="About Us" subtitle="The story behind the cups." />

      <Section className="!pt-4">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-gradient-to-br from-amber-200 to-stone-300 text-8xl shadow-lg">
            <img
              src="/images/about.jpg"
              alt="Our cafe story"
              className="h-full w-full rounded-3xl object-cover object-center"
            />
          </div>
          <div className="space-y-4 text-stone-600">
            <h2 className="text-3xl font-bold text-stone-900">How it all began</h2>
            <p>
              Write your cafe's story here: when you opened, what inspired you and what makes your
              place different.
            </p>
            <p>
              Mention your sourcing, your recipes and the people behind the counter. Guests love
              knowing who is making their coffee.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading eyebrow="What we believe" title="Our values" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl bg-amber-50 p-8 text-center ring-1 ring-amber-100">
              <div className="text-4xl">{v.emoji}</div>
              <h3 className="mt-4 text-xl font-semibold text-stone-900">{v.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="The team" title="Meet the people behind the counter" />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {teamMembers.map((m) => (
            <div key={m.id} className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-amber-100">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-amber-100 text-5xl">
                <img
                  src={m.emoji}
                  alt={m.name}
                  className="h-full w-full rounded-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-stone-900">{m.name}</h3>
              <p className="text-sm text-stone-500">{m.role}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
