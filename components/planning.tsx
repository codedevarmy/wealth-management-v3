import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { LazyPixelImage } from './extends/pixel-image';
// import Link from "next/link";

const features = [
  {
    category: 'Dream Planning',
    title: "It's Time To Begin Your Ascent!",
    details:
      "Ready to take control of your financial future? We help you transform dreams into actionable plans—whether it's buying a home, funding education, or retiring comfortably. Let's design a personalized strategy that works for your life.",
    tutorialLink: '#free-consultation',
  },
  {
    category: 'Smart Investing',
    title: 'Goal-Based Investments Planning',
    details:
      "Every rupee you invest should have a purpose. We guide you to set clear financial goals, understand your risk appetite, and choose investments that align with your timeline and needs. Because smart investing starts with knowing what you're working towards.",
    tutorialLink: '#free-consultation',
  },
  {
    category: 'Peace of Mind',
    title: 'Why Risk Profiling Matters for Your Peace of Mind',
    details:
      "Feeling uncertain about the right investment moves? Our personalized risk profiling takes the guesswork out of the equation. We help you find that sweet spot between your goals, your comfort level, and what's realistic for your situation. No jargon, just clarity.",
    tutorialLink: '#free-consultation',
  },
];

export default function Planning() {
  return (
    <div id='planning' className='flex items-center justify-center'>
      <div className='max-w-(--breakpoint-xl) w-full py-10 px-6'>
        <h2 className='text-4xl md:text-[2.75rem] md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty sm:mx-auto sm:text-center'>
          Strengthen Your Strategy
        </h2>
        <p className='mt-2 text-muted-foreground text-lg sm:text-xl sm:text-center'>
          Enhance your strategy with intelligent tools designed for success.
        </p>
        <div className='mt-8 md:mt-16 w-full mx-auto space-y-20'>
          {features.map((feature) => (
            <div
              key={feature.category}
              className='flex flex-col md:flex-row items-center gap-x-12 gap-y-6 md:even:flex-row-reverse'>
              <div className='w-full h-full aspect-4/3 bg-mutedd rounded-xl border border-border/50 basis-1/2'>
                <LazyPixelImage
                  src='https://magicui.design/pixel-image-demo.jpg'
                  customGrid={{ rows: 8, cols: 8 }}
                  grayscaleAnimation
                />
              </div>
              <div className='basis-1/2 shrink-0'>
                <span className='uppercase font-medium text-sm text-muted-foreground'>
                  {feature.category}
                </span>
                <h4 className='my-3 text-3xl font-semibold tracking-[-0.02em]'>
                  {feature.title}
                </h4>
                <p className='text-muted-foreground'>{feature.details}</p>
                <Button asChild size='lg' className='mt-6 rounded-full gap-3'>
                  <a href={feature.tutorialLink}>
                    Learn More <ArrowRight />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
