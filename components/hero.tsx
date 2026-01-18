import { BackgroundPattern } from '@/components/extends/background-pattern';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { AuroraText } from './extends/aurora-text';
import RocketIcon from './extends/icons/rocket';
import { LazyBrochureDownload, LazyLocationDialog } from './lazy-components';

export default function Hero() {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center px-6'>
      <BackgroundPattern />

      <div className='relative z-10 text-center max-w-3xl'>
        <Badge
          variant='secondary'
          className='rounded-full py-1 border-border'
          asChild>
          <Link href='#home'>
            <RocketIcon
              className='stroke-primary size-4 stroke-2 inline-block'
              stroke='currentColor'
              strokeWidth={2}
            />{' '}
            Start Your Wealth Journey
            <ArrowUpRight className='ml-1 size-4' />
          </Link>
        </Badge>
        <h1 className='mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter'>
          Ascent Wealth <br />{' '}
          <AuroraText
            colors={['#7c6707', '#c5b984', '#968021', '#dcd5b5']}
            speed={2}>
            Welcomes You!
          </AuroraText>
        </h1>
        <p className='mt-6 md:text-lg text-foreground/80'>
          Build your wealth with expert guidance. We offer mutual funds, bonds,
          insurance, and personalized investment solutions tailored to help you
          achieve your financial goals.
        </p>
        <div className='mt-12 flex flex-wrap items-center justify-center gap-4'>
          <LazyLocationDialog />
          {/* <ShadCNShinyButton
            icon={<Sparkles className='h-5! w-5!' />}
            className={buttonVariants({
              size: 'lg',
              className: 'rounded-full',
            })}>
            Know More
          </ShadCNShinyButton> */}
          <LazyBrochureDownload />
          {/* <BrochureDialog /> */}
          {/* <InteractiveHoverButton
            className={''}
            icon={<CirclePlay className='h-5! w-5!' />}>
            Watch Demo
          </InteractiveHoverButton> */}
        </div>
      </div>
    </section>
  );
}
