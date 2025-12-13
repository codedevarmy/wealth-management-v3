import Blog from '@/components/blog';
import Calculators from '@/components/calculators';
import Contact from '@/components/contact';
import CTABanner from '@/components/cta-banner';
import { ScrollProgress } from '@/components/extends/scroll-progress';
import FAQ from '@/components/faq';
import Hero from '@/components/hero';
import LogoCloud from '@/components/logo-cloud';
import Planning from '@/components/planning';
import { MarqueeDemo } from '@/components/reviews';
import Services from '@/components/services';
import Stats from '@/components/stats';
import Testimonials from '@/components/testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Planning />
      <Services />
      <Blog />
      <Calculators />
      <CTABanner />
      <FAQ />
      <Testimonials />
      <MarqueeDemo />
      <Contact />
      <LogoCloud />
      <ScrollProgress />
    </main>
  );
}
