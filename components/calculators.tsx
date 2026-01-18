import { calculators } from '@/constants';

import { ShineBorder } from './extends/shine-border';
import { LazyCaclculatorDrawerDialog } from './forms/lazy-components';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

export default function Calculators() {
  return (
    <section
      id='calaculators'
      className='container max-w-(--breakpoint-xl) mx-auto w-full px-4 py-24'>
      <div>
        <h2 className='text-4xl sm:text-5xl font-semibold tracking-tight text-center'>
          Unleash Your Creativity
        </h2>
        <div className='mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {calculators.map((calculator) => (
            <Card key={calculator.title} className='relative overflow-hidden'>
              <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
              <CardHeader className={'text-center'}>
                <div className='mb-4 size-12 mx-auto flex items-center justify-center bg-accent rounded-full'>
                  <calculator.icon className='size-6' />
                </div>
                <CardTitle>
                  <h4 className='text-lg font-semibold'>{calculator.title}</h4>
                </CardTitle>
                <CardDescription>
                  <p className='mt-1 text-foreground/80 text-[15px]'>
                    {calculator.description}
                  </p>
                </CardDescription>
              </CardHeader>

              <CardFooter className='mt-auto'>
                <LazyCaclculatorDrawerDialog
                  title={calculator.title}
                  desc={calculator.description}
                />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
