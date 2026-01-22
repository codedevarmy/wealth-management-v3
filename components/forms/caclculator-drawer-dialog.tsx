'use client';

import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import { SparklesIcon } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../ui/drawer';
import EducationForm from './education-form';
import EmailDialog from './email-dialog';
import LumpsumForm from './lumpsum-form';
import RetirementForm from './retirement-form';
import SIPForm from './sip-form';
import VacationForm from './vacation-form';
import WeddingForm from './wedding-form';

type CaclculatorDrawerDialogProps = {
  title: string;
  desc: string;
};

export default function CaclculatorDrawerDialog(
  props: CaclculatorDrawerDialogProps,
) {
  const { title, desc } = props;
  const [open, setOpen] = useState(false);
  const [isEmailDialogOpen, setIsEmailDialogOpen] = useState(false);
  const [sessionStorageKey, setSessionStorageKey] = useState<SessionKey>();
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const animation = {
    top: 'data-[state=open]:zoom-in-100! data-[state=open]:slide-in-from-bottom-20 data-[state=open]:duration-600',
    bottom:
      'data-[state=open]:zoom-in-100! data-[state=open]:slide-in-from-top-20 data-[state=open]:duration-600',
    left: 'data-[state=open]:zoom-in-100! data-[state=open]:slide-in-from-right-20 data-[state=open]:duration-600',
    right:
      'data-[state=open]:zoom-in-100! data-[state=open]:slide-in-from-left-20 data-[state=open]:duration-600',
    zoom: 'data-[state=open]:zoom-in-0! data-[state=open]:duration-600',
  };

  if (isDesktop) {
    return (
      <>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant={'secondary'} className={'w-full'}>
              Get free calculation <SparklesIcon className={'size-4'} />
            </Button>
          </DialogTrigger>
          <DialogContent className={cn('sm:max-w-5xl', animation.zoom)}>
            <DialogHeader className={'sr-only'}>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{desc}</DialogDescription>
            </DialogHeader>

            {title === 'Education Calculator' && (
              <EducationForm
                onParentClose={setOpen}
                onOpenEmail={setIsEmailDialogOpen}
                onUpdateSessionKey={setSessionStorageKey}
                {...props}
              />
            )}
            {title === 'Lumpsum Calculator' && (
              <LumpsumForm
                onParentClose={setOpen}
                onOpenEmail={setIsEmailDialogOpen}
                onUpdateSessionKey={setSessionStorageKey}
                {...props}
              />
            )}
            {title === 'SIP Calculator' && (
              <SIPForm
                onParentClose={setOpen}
                onOpenEmail={setIsEmailDialogOpen}
                onUpdateSessionKey={setSessionStorageKey}
                {...props}
              />
            )}
            {title === 'Retirement Planning' && (
              <RetirementForm
                onParentClose={setOpen}
                onOpenEmail={setIsEmailDialogOpen}
                onUpdateSessionKey={setSessionStorageKey}
                {...props}
              />
            )}
            {title === 'Wedding Calculator' && (
              <WeddingForm
                onParentClose={setOpen}
                onOpenEmail={setIsEmailDialogOpen}
                onUpdateSessionKey={setSessionStorageKey}
                {...props}
              />
            )}
            {title === 'Vacation Calculator' && (
              <VacationForm
                onParentClose={setOpen}
                onOpenEmail={setIsEmailDialogOpen}
                onUpdateSessionKey={setSessionStorageKey}
                {...props}
              />
            )}
          </DialogContent>
        </Dialog>
        <EmailDialog
          isEmailDialogOpen={isEmailDialogOpen}
          onCloseEmailDialog={setIsEmailDialogOpen}
          sessionStorageKey={sessionStorageKey}
        />
      </>
    );
  }

  return (
    <>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant={'secondary'} className={'w-full'}>
            Get free calculation <SparklesIcon className={'size-4'} />
          </Button>
        </DrawerTrigger>
        <DrawerContent className='p-6 min-h-fit'>
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{desc}</DrawerDescription>
          </DrawerHeader>

          {title === 'Education Calculator' && (
            <EducationForm
              onParentClose={setOpen}
              onOpenEmail={setIsEmailDialogOpen}
              onUpdateSessionKey={setSessionStorageKey}
              {...props}
            />
          )}
          {title === 'Lumpsum Calculator' && (
            <LumpsumForm
              onParentClose={setOpen}
              onOpenEmail={setIsEmailDialogOpen}
              onUpdateSessionKey={setSessionStorageKey}
              {...props}
            />
          )}
          {title === 'SIP Calculator' && (
            <SIPForm
              onParentClose={setOpen}
              onOpenEmail={setIsEmailDialogOpen}
              onUpdateSessionKey={setSessionStorageKey}
              {...props}
            />
          )}
          {title === 'Retirement Planning' && (
            <RetirementForm
              onParentClose={setOpen}
              onOpenEmail={setIsEmailDialogOpen}
              onUpdateSessionKey={setSessionStorageKey}
              {...props}
            />
          )}
          {title === 'Wedding Calculator' && (
            <WeddingForm
              onParentClose={setOpen}
              onOpenEmail={setIsEmailDialogOpen}
              onUpdateSessionKey={setSessionStorageKey}
              {...props}
            />
          )}
          {title === 'Vacation Calculator' && (
            <VacationForm
              onParentClose={setOpen}
              onOpenEmail={setIsEmailDialogOpen}
              onUpdateSessionKey={setSessionStorageKey}
              {...props}
            />
          )}
        </DrawerContent>
      </Drawer>
      <EmailDialog
        isEmailDialogOpen={isEmailDialogOpen}
        onCloseEmailDialog={setIsEmailDialogOpen}
        sessionStorageKey={sessionStorageKey}
      />
    </>
  );
}
