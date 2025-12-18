import Image from 'next/image';
import { Marquee } from './marque';
import { Card } from './ui/card';

export const companyLogos = [
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/335bse.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/5782.png',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/9693.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/7975.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/3916.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/8447.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/2038.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/8609.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/92210.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/20311.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/14112.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/92213.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/11014.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/68815.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/500bandhan.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/703Pgim.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/239quant.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/754ppfas.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/239MAHINDRA.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/7234.png',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/926BANK.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/56725.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/5126.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/528.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/48924.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/97323.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/599Max.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/724Hdfclife.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/130EDELWEISSMUTUALFUND.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/638QUANTUMMUTUALFUND.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/661ICICIPrudentialLifeInsurance.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/208ICICILombardGeneralInsurance.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/458MotilalOswalMutualfund.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/302ShriramFinance.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/662NEXGEN.jpg',
  },
  {
    id: crypto.randomUUID(),
    imgSrc:
      'https://ascentwealth.in/Content/ascentwealth.in/UploadedImage/RealImage/6ADITYABIRLASUNLIFEMUTUALFUND.jpg',
  },
];

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
    <div className='w-full max-w-(--breakpoint-xl) mx-auto text-center'>
      <h2 className='text-4xl md:text-5xl leading-[1.15]! font-semibold tracking-[-0.035em]'>
        Our Trusted Partners
      </h2>
      <div className='relative flex w-full flex-col items-center justify-center gap-1 overflow-hidden py-8'>
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
