import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import FeatureCardDemo from '../layout/featuredemo';



export default function Features() {
  return (
    <div className="top-20">
    
      <Section className="bg-[#E4CDB0]  mt-10">
        <SectionHeading
          eyebrow="Why choose us"
          title="Made with care, served with a smile"
          subtitle="Everything we do is about quality ingredients and a welcoming space."
        />


        
        <div className="mt-12">

          {/* {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-amber-100">
              <div className="text-4xl">{f.emoji}</div>
              <h3 className="mt-4 text-xl font-semibold text-stone-900">{f.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{f.text}</p>
            </div>
          ))} */}

          
                <FeatureCardDemo/>
          
        </div>
        
      </Section>
    </div>
    
  );
}
