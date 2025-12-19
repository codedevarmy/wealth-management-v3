'use client';

import { useCallback, useState } from 'react';

import { useDotButton } from '@/hooks/use-dot-button';
import type { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import { BlogCard } from './blog';
import { Card, CardContent } from './ui/card';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

const OPTIONS: EmblaOptionsType = {};

const isDev = process.env.NODE_ENV === 'development';

export function CarouselDemo() {
  const [api, setApi] = useState<EmblaCarouselType>();
  // const plugins = useMemo(
  //   () => (isDev ? undefined : [Autoplay({ playOnInit: true })]),
  //   []
  // );

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    api,
    onNavButtonClick
  );

  return (
    <Carousel
      setApi={setApi}
      opts={OPTIONS}
      plugins={isDev ? undefined : [Autoplay({ playOnInit: true })]}
      className='w-full'>
      <CarouselContent className='-ml-1'>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
            <div className='p-1'>
              <Card>
                <CardContent
                // className='flex aspect-square items-center justify-center p-6'
                >
                  <BlogCard i={index} />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}

      <div className='mt-4 flex justify-center gap-2 py-4'>
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            type='button'
            onClick={() => onDotButtonClick(index)}
            className={`h-3 w-3 rounded-full transition-colors ${
              index === selectedIndex
                ? 'bg-primary ring-1 ring-primary'
                : 'bg-secondary ring-1 ring-secondary/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  );
}
