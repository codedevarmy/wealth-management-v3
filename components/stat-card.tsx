'use client';

import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

import { stats } from '@/constants';
import { cn } from '@/lib/utils';
import GradientText from './extends/gradient-text';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';

export default function StatCard() {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: '20px',
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4'}>
      {stats.map((stat) => {
        const title = stat.label.split(' ').slice(-1).join(' ');
        const content = stat.label.split(' ').slice(0, -1).join(' ');

        // last child have to take full colspan
        const isLast = stat.id === stats[stats.length - 1].id;

        return (
          <div
            className={cn(
              'border rounded-xl border-border/70 p-1',
              isLast ? 'sm:col-span-full lg:col-span-1' : '',
            )}
            key={stat.id}>
            <Card className='rounded-lg bg-muted/20 h-full'>
              <CardHeader>
                <CardTitle className={'font-normal'}>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <GradientText
                  colors={[
                    '#8a7208',
                    '#a18e39',
                    '#8a7208',
                    '#a18e39',
                    '#8a7208',
                  ]}
                  animationSpeed={3}
                  showBorder={false}
                  className='px-4'>
                  <CountUp
                    className='text-5xl font-medium'
                    delay={1}
                    enableScrollSpy={inView}
                    end={stat.value}
                    start={0}
                    suffix='+'
                    redraw={inView}
                    scrollSpyDelay={100}
                    scrollSpyOnce={true}
                    startOnMount={true}
                  />
                </GradientText>
              </CardContent>
              <CardContent>
                <CardDescription>
                  <p className={'font-semibold text-base'}>{content}</p>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
