import { zodResolver } from '@hookform/resolvers/zod';
import { useFormPersist } from '@liorpo/react-hook-form-persist';
import { ArrowRightIcon, ChevronLeftIcon } from 'lucide-react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { ScrollArea } from '@/components/ui/scroll-area';
import { RiskProfileFormValues, riskProfileSchema } from '@/lib/zod.schemas';
import RiskProfileForm from './risk-profile-form';

export default function RiskProfileDialog() {
  const form = useForm<RiskProfileFormValues>({
    resolver: zodResolver(riskProfileSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      // age: ageGroups[0],
      // employmentStatus: employmentStatuses[0],
      // householdIncome: householdIncomes[0],
      // incomeStatus: incomeStatues[0],
      // liquidNetWorth: liquidNetWorths[0],
      // loanStatus: loanStatuses[0],
      // knowledgeAboutInvestments: knowledegsAboutInvestments[0],
      // investmentObjective: investmentObjectives[0],
      // investmentDuration: investmentDurations[0],
      // investedInstrument: investedInstruments[0],
      // investmentPlansRange: investmentPlansRanges[0],
      // investmentRisk: investmentRisks[0],
      // marketMovement: marketMovements[0],
      // riskProfile: riskProfiles[0],
      agreeToTerms: false,
    },
    mode: 'onChange',
  });

  useFormPersist('risk-profile-form', {
    control: form.control,
    setValue: form.setValue,
    storage: sessionStorage, // Use sessionStorage instead of localStorage
    validate: true, // Trigger validation when data is restored
    dirty: true, // Mark form as dirty
    touch: true, // Mark fields as touched
    debounceDelay: 300, // Save after 300ms of inactivity
    onDataRestored: () => {
      toast.success('Restored your previous assess data!', {
        description: 'You can continue where you left off.',
        position: 'bottom-left',
      });
    },
    onTimeout: () => {
      toast.error('Previous assess was data expired!', {
        description: 'The saved data was older than 24 hours.',
        position: 'bottom-left',
      });
    },
    timeout: 1000 * 60 * 60 * 24, // 24 hours
  });

  const onError: SubmitErrorHandler<RiskProfileFormValues> = (errors) => {
    // console.log('Form errors:', errors);
    Object.values(errors).forEach((error) => {
      toast.error(error.message, {
        duration: 4000,
        description: 'Please fix the error and try again.',
        id: error.message,
      });
    });
  };

  const onSubmit: SubmitHandler<RiskProfileFormValues> = (values) => {
    // console.log('Form data:', values);
    toast.success(
      <pre className={'overflow-x-scroll p-2 bg-accent w-sm'}>
        {JSON.stringify(values, null, 2)}
      </pre>,
      {
        duration: 8000,
        description: 'Form submitted successfully!',
      },
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size='lg' className='mt-6 rounded-full gap-3'>
          Assess Your Risk Profile <ArrowRightIcon />
        </Button>
      </DialogTrigger>
      <Form {...form}>
        <DialogContent className='data-[state=open]:zoom-in-100! data-[state=open]:slide-in-from-left-20 data-[state=open]:duration-600 min-w-[calc(100vw-2rem)] gap-0 p-0'>
          <form
            onSubmit={form.handleSubmit(onSubmit, onError)}
            className={'flex h-[calc(100vh-2rem)] flex-col justify-between'}>
            <DialogHeader className='px-4 py-4 border-b border-border/50'>
              <DialogTitle className=''>
                Client Risk Profile Questionnaire
              </DialogTitle>
              <DialogDescription asChild>
                <blockquote className='border-l-2 pl-6 italic'>
                  The great long-term financial risk isn&apos;t losing your
                  money; its out-living your money -{' '}
                  <strong>Nick Murray</strong>
                </blockquote>
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className='flex flex-col justify-between overflow-hidden'>
              <div className='p-6'>
                <RiskProfileForm />
              </div>
            </ScrollArea>
            <DialogFooter className='p-4 sm:justify-end bg-accent/50 border-t border-border/50 mt-4'>
              <DialogClose asChild>
                <Button
                  size={'sm'}
                  type='reset'
                  variant='outline'
                  onClick={() => form.reset()}>
                  <ChevronLeftIcon />
                  Back
                </Button>
              </DialogClose>
              <Button type='submit' size={'sm'}>
                Start Assessment
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Form>
    </Dialog>
  );
}
