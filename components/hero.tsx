import { BackgroundPattern } from '@/components/extends/background-pattern';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { ArrowUpRight, CirclePlay } from 'lucide-react';
import Link from 'next/link';
// import Link from "next/link";

export default function Hero() {
  return (
    <div
      id='home'
      className='min-h-screen flex items-center justify-center px-6'>
      <BackgroundPattern />

      <div className='relative z-10 text-center max-w-3xl'>
        <Badge
          variant='secondary'
          className='rounded-full py-1 border-border'
          asChild>
          <a href='#'>
            Just released v1.0.0 <ArrowUpRight className='ml-1 size-4' />
          </a>
        </Badge>
        <h1 className='mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter'>
          Ascent Wealth <br /> Welcomes You!
        </h1>
        <p className='mt-6 md:text-lg text-foreground/80'>
          Build your wealth with expert guidance. We offer mutual funds, bonds,
          insurance, and personalized investment solutions tailored to help you
          achieve your financial goals.
        </p>
        <div className='mt-12 flex items-center justify-center gap-4'>
          <Link
            scroll={true}
            href='#planning'
            // size='lg'
            // className='rounded-full text-base'
            className={buttonVariants({
              size: 'lg',
              className: 'rounded-full! text-base!',
            })}>
            Get Started <ArrowUpRight className='h-5! w-5!' />
          </Link>
          {/* <ShinyButton>Shiny Button</ShinyButton> */}
          <Button
            variant='outline'
            size='lg'
            className='rounded-full text-base shadow-none'>
            <CirclePlay className='h-5! w-5!' /> Watch Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
