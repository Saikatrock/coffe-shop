import { useDocumentTitle } from '../hooks/useDocumentTitle';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import FeaturedMenu from '../components/home/FeaturedMenu';
import AboutPreview from '../components/home/AboutPreview';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

export default function HomePage() {
  useDocumentTitle();

  return (
    <>
      <Hero />
      <Features />
      <FeaturedMenu />
      <AboutPreview />
      <Testimonials />
      <CallToAction />
    </>
  );
}
