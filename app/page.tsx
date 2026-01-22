// import Blogs from '@/components/blogs';
import Calculators from '@/components/calculators';
// import CompanyLogos from '@/components/company-logos';
import Contact from '@/components/contact';
import CTABanner from '@/components/cta-banner';
// import { Accordion02 } from '@/components/extends/accordion-02';
import { ScrollProgress } from '@/components/extends/scroll-progress';
// import FAQ from '@/components/faq';
import Hero from '@/components/hero';
// import { ScrollBasedVelocityImagesDemo } from '@/components/logo-loop';
import Planning from '@/components/planning';
// import Services from '@/components/services';
import Stats from '@/components/stats';

// import { Button } from '@/components/ui/button';
// import {
//   checkAccessTokenStatus,
//   getGoogleAuthUrl,
//   handleGoogleCallback,
//   refreshAccessToken,
// } from '@/lib/google';
// import { sendEmail } from '@/lib/resend';
// import TestimonialMarquee from '@/components/testimonial-marquee';

// old
// import LogoCloud from '@/components/logo-cloud';
// import { MarqueeDemo } from '@/components/reviews';
// import Testimonials from '@/components/testimonials';

// type PageProps = {
//   searchParams: Promise<Record<string, string | string[] | undefined>>;
// };

export default function Home() {
  // const sParams = await searchParams;
  return (
    <main>
      <Hero />
      {/* <form
        action={async () => {
          'use server';
          // Simulate a server action
          await sendEmail({
            type: 'consultation',
            to: 'yitan59381@oremal.com',
            data: {
              fullName: 'John Doe',
              email: 'someone@example.com',
              phone: '1234567890',
              householdExpenses: '5000',
              consultationType: 'dream-vacation',
              specifyReason: `Planning for a dream vacation to Europe next summer.`,
              age: `30`,
              spouseAge: `28`,
              firstChildAge: `5`,
              secondChildAge: `3`,
              isTermInsurance: 'N/a',
              isHealthInsurance: 'N/a',
              consent: false,
            },
          });
        }}>
        <Button type='submit'>Send Email</Button>
      </form>
      <form
        action={async () => {
          'use server';
          await getGoogleAuthUrl();
        }}>
        <Button>Get Authorize</Button>
      </form>
      <form
        action={async () => {
          'use server';
          await handleGoogleCallback(sParams);
        }}>
        <Button>Get Token</Button>
      </form>
      <form
        action={async () => {
          'use server';
          await refreshAccessToken();
        }}>
        <Button>Refresh Token</Button>
      </form>
      <form
        action={async () => {
          'use server';
          await checkAccessTokenStatus('access-token-goes-here');
        }}>
        <Button>Check Token</Button>
      </form> */}
      <Stats />
      <Planning />
      {/* <Services /> */}
      {/* <Blogs /> */}
      <Calculators />
      <CTABanner />
      {/* <Accordion02 /> */}
      {/* <FAQ /> */}
      {/* <ScrollBasedVelocityImagesDemo /> */}
      {/* <CompanyLogos /> */}
      {/* <TestimonialMarquee /> */}
      <Contact />
      <ScrollProgress />

      {/* OLD */}
      {/* <MarqueeDemo /> */}
      {/* <Testimonials /> */}
      {/* <LogoCloud /> */}
    </main>
  );
}
