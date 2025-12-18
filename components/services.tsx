import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { services } from '@/constants';
import Image from 'next/image';
import ServiceDrawer from './service-drawer';

export default function Services() {
  return (
    <div id='services' className='flex items-center justify-center'>
      <div className='max-w-(--breakpoint-xl) mx-auto w-full py-10 px-6 text-center'>
        <h2 className='text-4xl md:text-[2.5rem] md:leading-[1.2] font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty sm:mx-auto'>
          Discover Our Exceptional Services
        </h2>
        <p className='mt-2 text-muted-foreground text-lg sm:text-xl'>
          Transform your approach with our user-friendly tools, designed to
          enhance your journey and make every step towards success feel seamless
          and rewarding.
        </p>
        <div className='mt-10 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8'>
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceCard(props: (typeof services)[number]) {
  const { title, description, cover } = props;
  return (
    <Card
      key={title}
      className='flex flex-col border rounded-xl overflow-hidden shadow-none pb-0'>
      <CardHeader>
        <CardTitle>
          <h4 className='text-xl font-semibold tracking-tight'>{title}</h4>
        </CardTitle>
        <CardDescription>
          <p className='text-muted-foreground text-base line-clamp-3'>
            {description[0]}
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent className='flex items-center'>
        <CardAction>
          <ServiceDrawer {...props} />
        </CardAction>
      </CardContent>
      <CardContent className='mt-auto px-0 pb-0'>
        <div className='bg-muted h-40 ml-6 rounded-tl-xl overhflow-hidden'>
          <Image
            src={cover}
            alt={title}
            width={400}
            height={160}
            className='h-full w-full object-cover rounded-tl-xl hover:scale-105 transition-transform duration-300'
          />
        </div>
      </CardContent>
    </Card>
  );
}
