// import { useCycle } from '@/hooks/use-cycle';
// import { useRootClick } from '@/hooks/use-root-click';
import NumberFlow, { type Value } from '@number-flow/react';
// import { useCycle } from 'motion/react';

const values: Value[] = [543, 12000, -3200];
export default function Stats() {
  // const [value, cycleValue] = useCycle(values);

  // useRootClick(cycleValue);
  return (
    <div className='flex items-center justify-center'>
      <div className='max-w-(--breakpoint-xl) mx-auto py-12 text-center'>
        <h2 className='text-4xl md:text-5xl font-semibold tracking-tighter'>
          Why Should You Choose Us?
        </h2>
        <p className='mt-4 text-xl text-muted-foreground'>
          Because after switching to us...
        </p>

        <blockquote className='mt-10 border-l-4 pl-4 italic text-lg text-muted-foreground'>
          <p>
            “When a management with a reputation for brilliance, tackles a
            business with a reputation for bad economics, it is the reputation
            of the business that remains intact” — Warren Buffett
          </p>
        </blockquote>

        <div className='mt-16 sm:mt-24 grid sm:grid-cols-2 lg:grid-cols-5 gap-x-12 gap-y-16 justify-center'>
          <div className='max-w-3xs'>
            <NumberFlow
              className='text-5xl font-semibold'
              value={10}
              isolate={false}
              willChange={true}
              suffix='+'
            />
            <p className='mt-6 text-lg'>Years of Experience</p>
          </div>
          <div className='max-w-3xs'>
            <NumberFlow
              className='text-5xl font-semibold'
              value={100}
              isolate={false}
              willChange={true}
              suffix='+'
            />
            <p className='mt-6 text-lg'>Families Advised</p>
          </div>
          <div className='max-w-3xs'>
            <NumberFlow
              className='text-5xl font-semibold'
              value={15}
              isolate={false}
              willChange={true}
              suffix='+'
            />
            <p className='mt-6 text-lg'>Investment Solutions Offered</p>
          </div>
          <div className='max-w-3xs'>
            <NumberFlow
              className='text-5xl font-semibold'
              value={30}
              isolate={false}
              willChange={true}
              suffix='+ Cr'
            />
            <p className='mt-6 text-lg'>Assets Under Management</p>
          </div>
          <div className='max-w-3xs'>
            <NumberFlow
              className='text-5xl font-semibold'
              value={8}
              isolate={false}
              willChange={true}
              suffix='+'
            />
            <p className='mt-6 text-lg'>Countries Served</p>
          </div>

          {/* <div className='max-w-3xs'>
            <span className='text-5xl font-semibold'>96%</span>
            <p className='mt-6 text-lg'>
              of customers say they have a better brand experience
            </p>
          </div> */}
          {/* <div className='max-w-3xs'>
            <span className='text-5xl font-semibold'>95%</span>
            <p className='mt-6 text-lg'>
              of customers say they gather more data, more easily
            </p>
          </div> */}
          {/* <div className='max-w-3xs'>
            <span className='text-5xl font-semibold'>87%</span>
            <p className='mt-6 text-lg'>
              of customers say they reveal deeper insights from data
            </p>
          </div> */}
          {/* <div className='max-w-3xs'>
            <span className='text-5xl font-semibold'>87%</span>
            <p className='mt-6 text-lg'>
              of customers say they reveal deeper insights from data
            </p>
          </div> */}
          {/* <div className='max-w-3xs col-span-full sm:col-span-1 lg:col-span-1'>
            <span className='text-5xl font-semibold'>87%</span>
            <p className='mt-6 text-lg'>
              of customers say they reveal deeper insights from data
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
