'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqs } from '@/constants';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible';
import { Blockquote, BlockquoteAuthor } from './blockquote';

export function Accordion02() {
  const [value, setValue] = useState<string>();
  const [isShowMore, setIsShowMore] = useState<boolean>(false);

  const isMobile = useIsMobile();

  const faqToShow =
    (!isShowMore && !isMobile) || (isMobile && !isShowMore)
      ? faqs.slice(0, 4)
      : faqs;

  return (
    <section className='max-w-(--breakpoint-xl) mx-auto w-full px-6 xl:px-0 space-y-8 py-24'>
      <div className='text-center w-full'>
        <h2 className='text-4xl md:text-5xl leading-[1.15]! font-semibold tracking-[-0.035em]'>
          Frequently Asked Questions
        </h2>
      </div>

      <Blockquote>
        Learn from the past, set vivid, detailed goals for the future, and live
        in the only moment of time over which you have any control: now
        <BlockquoteAuthor>Denis Waitley</BlockquoteAuthor>
      </Blockquote>

      {isMobile && !isShowMore ? (
        <Accordion
          type='single'
          collapsible
          className='w-full border rounded-md'
          value={value}
          onValueChange={setValue}>
          {faqToShow.map((item) => (
            <AccordionItem value={item.id} key={item.id}>
              <AccordionTrigger className='text-left data-[state=open]:[&_svg]:rotate-180 data-[state=open]:[&_svg]:[#plus]:opacity-0 [&_svg]:[#plus]:[data-state=open]:opacity-0 duration-500 hover:no-underline cursor-pointer [data-slot=accordion-trigger] [&>svg]:hidden'>
                <div className='flex flex-1 items-center gap-4'>
                  <div className='relative ml-4'>
                    <Plus
                      id='plus'
                      className={cn(
                        'h-6 w-6 shrink-0 transition-all duration-500',
                        'data-[state=open]:opacity-0 data-[state=closed]:opacity-100',
                        'data-[state=open]:rotate-180',
                      )}
                    />
                    <Minus
                      id='minus'
                      className={cn(
                        'absolute inset-0 opacity-100 transition-all duration-500',
                        'hover:opacity-100 [data-state=close]:opacity-100',
                        'data-[state=open]:rotate-180',
                      )}
                    />
                  </div>
                  <h3 className='text-lg font-semibold'>{item.question}</h3>
                </div>
              </AccordionTrigger>

              <AccordionContent className='px-0 pb-6 ml-6 text-base'>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : null}

      {!isShowMore && !isMobile ? (
        <Accordion
          type='single'
          collapsible
          className='w-full border rounded-md'
          value={value}
          onValueChange={setValue}>
          {faqToShow.map((item) => (
            <AccordionItem value={item.id} key={item.id}>
              <AccordionTrigger className='text-left data-[state=open]:[&_svg]:rotate-180 data-[state=open]:[&_svg]:[#plus]:opacity-0 [&_svg]:[#plus]:[data-state=open]:opacity-0 duration-500 hover:no-underline cursor-pointer [data-slot=accordion-trigger] [&>svg]:hidden'>
                <div className='flex flex-1 items-center gap-4'>
                  <div className='relative ml-4'>
                    <Plus
                      id='plus'
                      className={cn(
                        'h-6 w-6 shrink-0 transition-all duration-500',
                        'data-[state=open]:opacity-0 data-[state=closed]:opacity-100',
                        'data-[state=open]:rotate-180',
                      )}
                    />
                    <Minus
                      id='minus'
                      className={cn(
                        'absolute inset-0 opacity-100 transition-all duration-500',
                        'hover:opacity-100 [data-state=close]:opacity-100',
                        'data-[state=open]:rotate-180',
                      )}
                    />
                  </div>
                  <h3 className='text-lg font-semibold'>{item.question}</h3>
                </div>
              </AccordionTrigger>

              <AccordionContent className='px-0 pb-6 ml-6 text-base'>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : null}

      <Collapsible open={isShowMore} onOpenChange={setIsShowMore}>
        <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down flex flex-col gap-2 overflow-hidden transition-all duration-300 px-2'>
          <div className='w-full'>
            <Accordion
              type='single'
              collapsible
              className='w-full border rounded-md'
              value={value}
              onValueChange={setValue}>
              {faqs.map((item) => (
                <AccordionItem value={item.id} key={item.id}>
                  <AccordionTrigger className='text-left data-[state=open]:[&_svg]:rotate-180 data-[state=open]:[&_svg]:[#plus]:opacity-0 [&_svg]:[#plus]:[data-state=open]:opacity-0 duration-500 hover:no-underline cursor-pointer [data-slot=accordion-trigger] [&>svg]:hidden'>
                    <div className='flex flex-1 items-center gap-4'>
                      <div className='relative ml-4'>
                        <Plus
                          id='plus'
                          className={cn(
                            'h-6 w-6 shrink-0 transition-all duration-500',
                            'data-[state=open]:opacity-0 data-[state=closed]:opacity-100',
                            'data-[state=open]:rotate-180',
                          )}
                        />
                        <Minus
                          id='minus'
                          className={cn(
                            'absolute inset-0 opacity-100 transition-all duration-500',
                            'hover:opacity-100 [data-state=close]:opacity-100',
                            'data-[state=open]:rotate-180',
                          )}
                        />
                      </div>
                      <h3 className='text-lg font-semibold'>{item.question}</h3>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className='px-0 pb-6 ml-6 text-base'>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </CollapsibleContent>
        <div className='flex items-center justify-center'>
          <CollapsibleTrigger
            asChild
            className='flex items-center justify-center data-[state=open]:my-6 data-[state=close]:mb-6'>
            <Button>{isShowMore ? 'Show Less' : 'Show More'}</Button>
          </CollapsibleTrigger>
        </div>
      </Collapsible>
    </section>
  );
}
