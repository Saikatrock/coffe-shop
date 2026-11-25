import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { galleryItems } from '../data/content';
import PageHeader from '../components/ui/PageHeader';
import Section from '../components/ui/Section';
import GalleryGrid from '../components/gallery/GalleryGrid';

export default function GalleryPage() {
  useDocumentTitle('Gallery');

  return (
    <>
      <PageHeader title="Gallery" subtitle="A peek at life inside the cafe." />
      <Section className="!pt-4">
        <GalleryGrid items={galleryItems} />
      </Section>
    </>
  );
}
