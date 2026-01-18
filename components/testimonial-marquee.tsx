import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { googleReviews, testimonials } from '@/constants';
import { IconStar, IconStarHalf } from '@tabler/icons-react';
import Image from 'next/image';
import { Blockquote, BlockquoteAuthor } from './extends/blockquote';
import { Marquee } from './marque';

export function TestimonialCard({
  image,
  name,
  designation,
  message,
  createdAt,
}: (typeof testimonials)[number]) {
  return (
    <Card className='max-w-md w-full h-fit items-center justify-center mx-auto'>
      <CardContent className={'space-y-2'}>
        <figure className='flex items-center gap-2.5'>
          <Avatar className='size-9'>
            <Image src={image} alt={name} width={50} height={50} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className='flex flex-col gap-1'>
            <figcaption className='text-sm font-medium text-foreground flex items-center gap-1'>
              {name}
            </figcaption>
            <div className={'w-full flex items-center gap-2'}>
              <div className='inline-flex items-center gap-0.5'>
                <IconStar className={'size-4 stroke-primary fill-primary'} />
                <IconStar className={'size-4 stroke-primary fill-primary'} />
                <IconStar className={'size-4 stroke-primary fill-primary'} />
                <IconStar className={'size-4 stroke-primary fill-primary'} />
                <IconStarHalf
                  className={'size-4 stroke-primary fill-primary'}
                />
              </div>
              <time dateTime={createdAt} className={'text-xs font-medium'}>
                {createdAt}
              </time>
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
  const filteredGoogleReviews = googleReviews.filter(
    (review) => review.message && review.name,
  );

  const reviewCount = googleReviews.length + testimonials.length;

  return (
    <div className='w-full max-w-(--breakpoint-xl) mx-auto text-center pt-24'>
      <div className={'relative space-y-4'}>
        <h2 className='text-4xl md:text-5xl leading-[1.15]! font-semibold tracking-[-0.035em]'>
          What Our Clients Say About Us
        </h2>

        <p className='mt-3 text-center text-muted-foreground text-xl'>
          Real stories from people who use and love our product every day
        </p>

        <div
          className={
            'size-36 mx-auto relative lg:absolute lg:top-0 lg:right-2'
          }>
          <Image
            src='/google-reviews.png'
            alt='Google Reviews'
            width={200}
            height={24}
            className='w-full h-full object-contain lg:object-top'
          />
          <span
            className={
              'ring-1 rounded-full p-1 py-0.5 font-bold absolute top-0 right-0'
            }>
            {reviewCount}
          </span>
        </div>

        <Blockquote>
          Learn from the past, set vivid, detailed goals for the future, and
          live in the only moment of time over which you have any control: now
          <BlockquoteAuthor>Denis Waitley</BlockquoteAuthor>
        </Blockquote>
      </div>

      <div className='relative flex w-full flex-col items-center justify-center gap-10 overflow-hidden py-8'>
        {/* Marquee moving left to right (default) */}
        <Marquee pauseOnHover repeat={3} className='[--duration:120s]'>
          {testimonials.map((review) => (
            <TestimonialCard key={review.id} {...review} />
          ))}
        </Marquee>
        {/* Marquee moving right to left (reverse) */}
        <Marquee pauseOnHover reverse repeat={3} className='[--duration:120s]'>
          {filteredGoogleReviews.map((review) => (
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
