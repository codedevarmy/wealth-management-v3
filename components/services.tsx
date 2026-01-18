import { services } from '@/constants';
import ServiceCard from './service-card';

export default function Services() {
  return (
    <section
      id='services'
      className='max-w-(--breakpoint-xl) mx-auto w-full py-24 px-6'>
      <div className='text-center'>
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
    </section>
  );
}
