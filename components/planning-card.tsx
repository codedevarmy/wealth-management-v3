'use client';

import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

import { plannings } from '@/constants';
import { LazyPixelImage } from './extends/pixel-image';
import { Button } from './ui/button';

export default function PlanningCard({
  plan,
}: {
  plan: (typeof plannings)[0];
}) {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: '20px',
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <div
      key={plan.category}
      className='flex flex-col md:flex-row items-center gap-x-12 gap-y-6 md:even:flex-row-reverse'>
      <div className='w-full h-full aspect-4/3 bg-mutedd rounded-xl border border-border/50 basis-1/2'>
        <LazyPixelImage
          ref={ref}
          src={plan.image}
          customGrid={{ rows: 8, cols: 8 }}
          grayscaleAnimation
          inView={inView}
        />
      </div>
      <div className='basis-1/2 shrink-0'>
        <span className='uppercase font-medium text-sm text-muted-foreground'>
          {plan.category}
        </span>
        <h4 className='my-3 text-3xl font-semibold tracking-[-0.02em]'>
          {plan.title}
        </h4>
        <p className='text-muted-foreground'>{plan.details}</p>
        <Button asChild size='lg' className='mt-6 rounded-full gap-3'>
          <Link scroll={true} href={plan.tutorialLink}>
            Learn More <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </div>
  );
}
