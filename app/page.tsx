import Blog from '@/components/blog';
import Calculators from '@/components/calculators';
import CompanyLogos from '@/components/company-logos';
import Contact from '@/components/contact';
import CTABanner from '@/components/cta-banner';
import { ScrollProgress } from '@/components/extends/scroll-progress';
import FAQ from '@/components/faq';
import Hero from '@/components/hero';
// import LogoCloud from '@/components/logo-cloud';
import Planning from '@/components/planning';
// import { MarqueeDemo } from '@/components/reviews';
import Services from '@/components/services';
import Stats from '@/components/stats';
import TestimonialMarquee from '@/components/testimonial-marquee';
// import Testimonials from '@/components/testimonials';
import { MDXContent } from '@content-collections/mdx/react';
import { allPosts } from 'content-collections';
import Link from 'next/link';

export default function Home() {
  const posts = allPosts;
  console.log('Posts:', posts);
  return (
    <main>
      <Hero />
      <Stats />
      <Planning />
      <Services />
      <ul>
        {allPosts.map((post) => (
          <li key={post._meta.path}>
            <Link
              href={`/blogs/${post.title
                .toLocaleLowerCase()
                .replace(/\s+/g, '-')}`}>
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <MDXContent code={post.mdx} />
            </Link>
          </li>
        ))}
      </ul>
      <Blog />
      <Calculators />
      <CTABanner />
      <FAQ />
      <CompanyLogos />
      <TestimonialMarquee />
      {/* <Testimonials /> */}
      {/* <MarqueeDemo /> */}
      <Contact />
      {/* <LogoCloud /> */}
      <ScrollProgress />
    </main>
  );
}
