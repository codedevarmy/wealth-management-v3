import { companyLogos } from '@/constants';
import Image from 'next/image';
import { Blockquote, BlockquoteAuthor } from './extends/blockquote';
import { Marquee } from './marque';
import { Card } from './ui/card';

function LogoCard({ id, imgSrc }: (typeof companyLogos)[number]) {
  return (
    <Card className={'p-2 rounded-md'}>
      <div className='flex items-center justify-center rounded-sm overflow-hidden'>
        <Image
          src={imgSrc}
          alt={`Company Logo ${id}`}
          width={150}
          height={48}
          className='h-16 w-auto object-contain'
        />
      </div>
    </Card>
  );
}

export default function CompanyLogos() {
  return (
    <div className='w-full max-w-(--breakpoint-xl) mx-auto text-center space-y-8 pt-24'>
      <h2 className='text-4xl md:text-5xl leading-[1.15]! font-semibold tracking-[-0.035em]'>
        Our Trusted Partners
      </h2>
      <Blockquote>
        Don&apos;t save what is left after spending, but spend what is left
        after saving
        <BlockquoteAuthor>Warren Buffet</BlockquoteAuthor>
      </Blockquote>
      <div className='relative flex w-full flex-col items-center justify-center gap-1 space-y-4 overflow-hidden py-8'>
        {/* Marquee moving left to right (default) */}
        <Marquee pauseOnHover repeat={3} className='[--duration:120s]'>
          {companyLogos.map((logo) => (
            <LogoCard key={logo.id} {...logo} />
          ))}
        </Marquee>
        {/* Marquee moving right to left (reverse) */}
        <Marquee pauseOnHover reverse repeat={3} className='[--duration:120s]'>
          {companyLogos.map((logo) => (
            <LogoCard key={logo.id} {...logo} />
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
