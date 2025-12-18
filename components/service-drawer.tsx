'use client';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { services } from '@/constants';
import { useInView } from 'react-intersection-observer';
import { Highlighter } from './extends/highlighter';

export default function ServiceDrawer(props: (typeof services)[number]) {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
    triggerOnce: true,
    trackVisibility: true,
    delay: 100,
  });

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={'link'} size={'sm'}>
          Know more
        </Button>
      </DrawerTrigger>
      <DrawerContent ref={ref}>
        <div className='mx-auto w-full max-w-(--breakpoint-sm) flex flex-col h-full p-6'>
          <DrawerHeader>
            <DrawerTitle className={'text-lg'}>
              <Highlighter
                action='underline'
                color='#a18e39'
                isView={inView}
                multiline>
                {props.title}
              </Highlighter>
            </DrawerTitle>
          </DrawerHeader>

          {props.description.map((para, index) => (
            <p key={index} className='mb-4 text-sm text-muted-foreground'>
              {para}
            </p>
          ))}

          <DrawerFooter className='mt-auto p-0'>
            {/* <Button>Submit</Button> */}
            <DrawerClose asChild>
              <Button variant='outline'>Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
