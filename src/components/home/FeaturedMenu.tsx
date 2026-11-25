import { menuItems } from '../../data/menu';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import MenuCard from '../menu/MenuCard';
import Coffee from '../home/coffe';


export default function FeaturedMenu() {
  const popular = menuItems.filter((item) => item.popular).slice(0, 4);

  return (
    <Section className="bg-[#E4CDB0]">       

      <Coffee />


      <SectionHeading
        eyebrow="Our favourites"
        title="Our Specialites"
        subtitle="The drinks our guests keep coming back for."
      />
      {/* <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {popular.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
 */}






      <div className="mt-10 text-center">
        <Button to="/menu" variant="outline">
          See full menu
        </Button>
      </div>
    </Section>
  );
}
