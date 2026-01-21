// 'use client';

import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
// import { useInView } from 'react-intersection-observer';

import { plannings } from '@/constants';
import Image from 'next/image';
import { LazyPixelTransition } from './extends/lazy-components';
import { LazyRiskProfileDialog } from './forms/lazy-components';
import { Button } from './ui/button';

export default function PlanningCard({
  plan,
  idx,
}: {
  plan: (typeof plannings)[0];
  idx: number;
}) {
  // const { ref, inView } = useInView({
  //   root: null,
  //   rootMargin: '20px',
  //   threshold: 0.5,
  //   triggerOnce: false,
  // });

  // find the last index
  const isLast = idx === plannings.length - 1;

  return (
    <div
      key={plan.category}
      className='flex flex-col md:flex-row items-center gap-x-12 gap-y-6 md:even:flex-row-reverse'>
      <div className='w-full h-full rounded-xl border border-primary/50'>
        {/* <LazyPixelImage
          ref={ref}
          src={plan.image}
          customGrid={{ rows: 8, cols: 8 }}
          grayscaleAnimation
          inView={inView}
        /> */}
        <LazyPixelTransition
          firstContent={
            // <img
            //   src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg'
            //   alt='default pixel transition content, a cat!'
            //   style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            // />
            <Image
              src={plan.image}
              alt='default pixel transition content, a cat!'
              width={500}
              height={500}
              className='w-full h-full object-cover'
            />
          }
          secondContent={
            <div
              // style={{
              //   width: '100%',
              //   height: '100%',
              //   display: 'grid',
              //   placeItems: 'center',
              //   backgroundColor: '#111',
              // }}
              className={'bg-background w-full h-full grid place-items-center'}>
              <p
                className='text-xl font-extrabold text-muted-foreground'
                // style={{ fontWeight: 900, fontSize: '3rem', color: '#ffffff' }}
              >
                {plan.title}
              </p>
            </div>
          }
          gridSize={50}
          pixelColor='#dcd5b5'
          once={false}
          animationStepDuration={0.4}
          className='custom-pixel-card'
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
        {!isLast ? (
          <Button asChild size='lg' className='mt-6 rounded-full gap-3'>
            <Link scroll={true} href={plan.tutorialLink}>
              Learn More <ArrowRightIcon />
            </Link>
          </Button>
        ) : (
          <LazyRiskProfileDialog />
        )}
      </div>
    </div>
  );
}
