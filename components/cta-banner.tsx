import { cn } from '@/lib/utils';
import { LazyAnimatedGridPattern } from './extends/animated-grid-pattern';
import { LazyConsultationDialog } from './forms/lazy-components';

export default function CTABanner() {
  return (
    <section
      id='free-consultation'
      className='max-w-(--breakpoint-xl) mx-auto pt-8 xl:pt-12'>
      <div className='dark:border relative overflow-hidden my-20 dark bg-background text-foreground rounded-2xl py-10 md:py-16 px-6 md:px-14 w-full aspect-auto lg:aspect-video flex flex-col items-center justify-center'>
        <LazyAnimatedGridPattern
          numSquares={90}
          maxOpacity={0.1}
          duration={10}
          className={cn(
            'mask-[radial-gradient(400px_circle_at_right,white,rgba(255,255,255,0.6),transparent)]',
            'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12',
          )}
        />
        <LazyAnimatedGridPattern
          numSquares={90}
          maxOpacity={0.1}
          duration={10}
          className={cn(
            'mask-[radial-gradient(400px_circle_at_top_left,white,rgba(255,255,255,0.6),transparent)]',
            'inset-x-0 inset-y-0 h-[200%] skew-y-12',
          )}
        />
        <div className='relative z-0 flex flex-col gap-3 text-center'>
          <h3 className='text-3xl md:text-4xl font-semibold'>
            Are You Ready to Transform Your Financial Journey?
          </h3>
          <p className='mt-4 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
            Let&apos;s transform your financial future together. Get a
            personalized investment strategy tailored to your goals and risk
            comfort in just one conversation.
          </p>
        </div>
        <div className='relative z-0 mt-14 flex flex-col sm:flex-row items-center justify-center gap-4'>
          <LazyConsultationDialog />
        </div>
      </div>
    </section>
  );
}
