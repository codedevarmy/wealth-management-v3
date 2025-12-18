import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { IconStar, IconStarHalf } from '@tabler/icons-react';
import { Marquee } from './marque';

// Unique reviews data
export const testimonials = [
  {
    id: crypto.randomUUID(),
    message: `A truly professional mutual funds distributor is defined by knowledge and a genuine interest in achieving the best results for clients." Ascent Wealth's commitment to clients, and integrity sets them&nbsp;apart, and I would definitely suggest to anybody seeking improved financial results.`,
    name: 'Mr Vijay Kalyanasundaram',
    designation: 'Commercial head in an MNC.',
    image:
      'https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/867a1.jpg',
    rating: 4.5,
  },
  {
    id: crypto.randomUUID(),
    message: `Building a strong mutual fund portfolio has been made possible in large part by Ascent Wealth. They developed investment choices and tailored recommendations after carefully considering my risk tolerance and investment objectives. I highly recommend their personal financial services as I have complete faith in Ascent Wealth's knowledge and desire for a lasting relationship.`,
    name: 'Mr N Hariprasad',
    designation: 'Managing Director - Synergy Maritime Pvt Ltd. Chennai.',
    image:
      'https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/625Hariprasad.png',
    rating: 4.5,
  },
  {
    id: crypto.randomUUID(),
    message: `I've been a client of Mr. Kannan of Ascent Wealth for about 5+ years, and I'm quite pleased with his individualized services. I find that their guidance and attitude of always willing to assist is quite beneficial when making investment decisions. My family's investment requirements and our risk profile have all been considered while crafting the investing suggestions. Our best wishes to him and Ascent Wealth.`,
    name: 'Mr S S Krishnakumar',
    designation:
      'General Manager - Sales &amp; Service, TVS Motor Company Ltd, Hosur',
    image:
      'https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/641ss.png',
    rating: 4.5,
  },
  {
    id: crypto.randomUUID(),
    message: `Mr. Kannan of Ascent Wealth is keenly focused on minimizing risks and generating returns that are much better than the conventional options. They regularly update us with appropriate investment options and stay current with emerging industry trends. He has handled our financial matters with unmatched professionalism and attention to detail. I would for sure recommend their services to my acquaintances.`,
    name: 'Mr Milton Stanley Balkar',
    designation: 'General Manager - Sales - Carrier Midea India Pvt. Ltd',
    image:
      'https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/219MiltonStanley.png',
    rating: 4.5,
  },
  {
    id: crypto.randomUUID(),
    message: `We are more than satisfied with the personalized attention and direction we received from Mr Kannan of Ascent Wealth. We appreciate your professional skills because you always explain things thoroughly. We have complete confidence in recommending your services to anyone in need of professional assistance. I look forward to continuing to work with you.`,
    name: 'Dr Marudhupandian MD',
    designation: 'Int. Medicine - Ponmalligai Hospital, chennai',
    image:
      'https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/387DrMarudhupandian.jpg',
    rating: 4.5,
  },
  {
    id: crypto.randomUUID(),
    message: `Financial goal identification and investment plan preparation are made easier with Ascent Wealth's guidance. Their individualized attention and always-ready attitude have been incredibly beneficial to me as I make financial decisions. He has extensive knowledge of the always changing markets, and I have found his advice to be very helpful most of the time. My best wishes to Mr Kannan and Ascent Wealth.`,
    name: 'K Ovi Siddharthan',
    designation: 'N/A, New Delhi',
    image:
      'https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/512KOVISIDDHARTHAN.jpg',
    rating: 4.5,
  },
  {
    id: crypto.randomUUID(),
    message: `For the work they have done for me over the past few years, I would like to convey my gratitude. I am ecstatic with the service you provided. Whenever feasible, I will gladly refer to their services. I rely on Mr. Kannan of Ascent Wealth for all of my financial requirements because of his dependability and quick service.`,
    name: 'A Srinivasan',
    designation: 'Retd. Sr. VP - Mercantile Credit Corporation',
    image:
      'https://www.ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/590ASrinivasan.jpg',
    rating: 4.5,
  },
];

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
