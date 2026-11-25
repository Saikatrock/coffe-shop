import { AnimatedFeatureCard } from "@/components/ui/featuresec";

// Data for the feature cards
const features = [
  {
  index: "",
  tag: "Ethically sourced",
  title: "Beans from small farms we know and trust, roasted fresh every week.",
  imageSrc: "/images/ethic.png",
  color: "orange" as const,
},
  {
    index: "",
    tag: "Baked daily",
    title: "Pastries, breads and desserts made in-house every single morning.",
    imageSrc: "/images/baked.png", // Replace with your image URL
    color: "purple" as const,
  },
  {
    index: "",
    tag: "Cozy atmosphere",
    title: "Comfortable seating, soft music and fast wifi for work or catch-ups.",  
    imageSrc: "/images/cozy.png", // Replace with your image URL
    color: "blue" as const,
  },
];

export default function FeatureCardDemo() {
  return (
    <div className="flex-col h-auto w-full   justify-center bg-background">
       <h3 className="text-2xl font-bold text-center">What our guests say</h3>
      <div className="container mx-auto   grid max-w-5xl grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
       
        {features.map((feature) => (
          <AnimatedFeatureCard
            key={feature.index}
            index={feature.index}
            tag={feature.tag}
            title={feature.title}
            imageSrc={feature.imageSrc}
            color={feature.color}
          />
        ))}
        
      </div>
    </div>
  );
}