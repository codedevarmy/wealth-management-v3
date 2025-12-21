import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { testimonials } from '@/constants';
import { IconStar, IconStarHalf } from '@tabler/icons-react';
import { Marquee } from './marque';

export function TestimonialCard({
  image,
  name,
  designation,
  message,
}: (typeof testimonials)[number]) {
  return (
    <Card className='max-w-md mx-auto'>
      <CardContent className={'space-y-2'}>
        <figure className='flex items-center gap-2.5'>
          <Avatar className='size-9'>
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className='flex flex-col gap-1'>
            <figcaption className='text-sm font-medium text-foreground flex items-center gap-1'>
              {name}
            </figcaption>
            <div className='inline-flex items-center gap-0.5'>
              <IconStar className={'size-4 stroke-primary fill-primary'} />
              <IconStar className={'size-4 stroke-primary fill-primary'} />
              <IconStar className={'size-4 stroke-primary fill-primary'} />
              <IconStar className={'size-4 stroke-primary fill-primary'} />
              <IconStarHalf className={'size-4 stroke-primary fill-primary'} />
            </div>
          </div>
        </figure>
        <blockquote className='text-sm text-secondary-foreground space-y-1'>
          <p>&ldquo;{message}&rdquo;</p>
          <footer>
            — <cite className={'font-medium'}>{designation}</cite>
          </footer>
        </blockquote>
      </CardContent>
    </Card>
  );
}

export default function TestimonialMarquee() {
  return (
    <div className='w-full max-w-(--breakpoint-xl) mx-auto text-center'>
      <h2 className='text-4xl md:text-5xl leading-[1.15]! font-semibold tracking-[-0.035em]'>
        What Our Clients Say About Us
      </h2>

      <p className='mt-3 text-center text-muted-foreground text-xl'>
        Real stories from people who use and love our product every day
      </p>

      <div className='relative flex w-full flex-col items-center justify-center gap-1 overflow-hidden py-8'>
        {/* Marquee moving left to right (default) */}
        <Marquee pauseOnHover repeat={3} className='[--duration:120s]'>
          {testimonials.map((review) => (
            <TestimonialCard key={review.id} {...review} />
          ))}
        </Marquee>
        {/* Marquee moving right to left (reverse) */}
        <Marquee pauseOnHover reverse repeat={3} className='[--duration:120s]'>
          {testimonials.map((review) => (
            <TestimonialCard key={review.id} {...review} />
          ))}
        </Marquee>
        {/* Stylish gradient overlays */}
        <div className='pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r from-background/95 to-transparent'></div>
        <div className='pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l from-background/95 to-transparent'></div>
        <div className='pointer-events-none absolute top-0 left-0 w-full h-12 bg-linear-to-b from-background/90 to-transparent'></div>
        <div className='pointer-events-none absolute bottom-0 left-0 w-full h-12 bg-linear-to-t from-background/90 to-transparent'></div>
      </div>
    </div>
  );
}
