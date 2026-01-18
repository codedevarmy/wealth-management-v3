'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion';
import { faqs } from '@/constants';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { PlusIcon } from 'lucide-react';
import { Accordion as AccordionPrimitive } from 'radix-ui';
import { useState } from 'react';
import { Button } from './ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible';

export default function FAQ() {
  const [value, setValue] = useState<string>();
  const [isShowMore, setIsShowMore] = useState(false);

  const isMobile = useIsMobile();

  const faqToShow = isMobile ? faqs.slice(0, 4) : faqs;

  return (
    <section
      id='faqs'
      className='max-w-(--breakpoint-xl) mx-auto w-full px-6 xl:px-0 space-y-8 py-24'>
      <div className='flex items-center justify-center w-full'>
        <div className='text-center w-full'>
          <h2 className='text-4xl md:text-5xl leading-[1.15]! font-semibold tracking-[-0.035em]'>
            Frequently Asked Questions
          </h2>

          {isMobile && !isShowMore ? (
            <div className='mt-6 w-full'>
              <Accordion
                type='single'
                collapsible
                className='w-full border rounded-md'
                value={value}
                onValueChange={setValue}>
                {faqToShow.map(({ question, answer }, index) => (
                  <AccordionItem
                    key={question}
                    value={`question-${index}`}
                    className={'w-full'}>
                    <AccordionPrimitive.Header className='flex'>
                      <AccordionPrimitive.Trigger
                        className={cn(
                          'flex flex-1 items-center justify-between py-4 font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-45',
                          'text-start text-base lg:text-lg px-4',
                        )}>
                        {index + 1}-{question}
                        <PlusIcon className='h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200' />
                      </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                    <AccordionContent className='text-sm lg:text-base text-muted-foreground text-start text-pretty px-4'>
                      {answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ) : null}

          {!isShowMore && !isMobile ? (
            <div className='mt-6 w-full'>
              <Accordion
                type='single'
                collapsible
                className='w-full grid md:grid-cols-2 gap-x-6'
                value={value}
                onValueChange={setValue}>
                {faqs.slice(0, 8).map(({ question, answer }, index) => (
                  <AccordionItem
                    key={question}
                    value={`question-${index}`}
                    className={'border rounded-md'}>
                    <AccordionPrimitive.Header className='flex'>
                      <AccordionPrimitive.Trigger
                        className={cn(
                          'flex flex-1 items-center justify-between py-4 font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-45',
                          'text-start text-base lg:text-lg px-4',
                        )}>
                        {index + 1}-{question}
                        <PlusIcon className='h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200' />
                      </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                    <AccordionContent className='text-sm lg:text-base text-muted-foreground text-start text-pretty px-4'>
                      {answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ) : null}
        </div>
      </div>

      <div className={'flex items-center justify-center px-4'}>
        <Collapsible open={isShowMore} onOpenChange={setIsShowMore}>
          <CollapsibleContent className='data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down flex flex-col gap-2 overflow-hidden transition-all duration-300 px-2'>
            <div className='w-full'>
              <Accordion
                type='single'
                collapsible
                className='w-full grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6'
                value={value}
                onValueChange={setValue}>
                {faqs.map(({ question, answer }, index) => (
                  <AccordionItem
                    key={question}
                    value={`question-${index}`}
                    className={cn(
                      'border rounded-md',
                      index === faqs.length - 1 ? 'col-span-full' : '',
                    )}>
                    <AccordionPrimitive.Header className='flex'>
                      <AccordionPrimitive.Trigger
                        className={cn(
                          'flex flex-1 items-center justify-between py-4 font-semibold transition-all hover:underline [&[data-state=open]>svg]:rotate-45',
                          'text-start text-base lg:text-lg px-4',
                        )}>
                        {index + 1}. {question}
                        <PlusIcon className='h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200' />
                      </AccordionPrimitive.Trigger>
                    </AccordionPrimitive.Header>
                    <AccordionContent className='text-sm lg:text-base text-muted-foreground text-start text-pretty px-4'>
                      {answer}
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
      </div>
    </section>
  );
}
