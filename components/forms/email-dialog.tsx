import { zodResolver } from '@hookform/resolvers/zod';
import { Dispatch, SetStateAction } from 'react';
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { toast } from 'sonner';

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { useGetSessionStorage } from '@/hooks/use-session-storage';
import { emailFormSchema, EmailFormValues } from '@/lib/zod.schemas';

type EmailDialogProps = {
  emailDialog: boolean;
  onCloseEmailDialog: Dispatch<SetStateAction<boolean>>;
  sessionStorageKey: string;
};

const wait = () => new Promise((resolve) => setTimeout(resolve, 1000));

export default function EmailDialog(props: EmailDialogProps) {
  const form = useForm<EmailFormValues>({
    resolver: zodResolver(emailFormSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  const storageKey =
    props.sessionStorageKey.length > 0
      ? `react-hook-form-persist:${props.sessionStorageKey}`
      : 'default-email-form';

  const storedValues = useGetSessionStorage(storageKey);

  const onError: SubmitErrorHandler<EmailFormValues> = (errors) => {
    // console.log('Form errors:', errors);
    Object.keys(errors).forEach((fieldName) => {
      const fieldError = errors[fieldName as keyof EmailFormValues];
      toast.error(fieldError?.message, {
        description: ' Please check the ' + fieldName + ' field.',
      });
    });
  };

  const onSubmit: SubmitHandler<EmailFormValues> = (data) => {
    // console.log('Form data:', data);
    toast.success(<pre>{`${JSON.stringify(data, null, 2)}`}</pre>, {
      description: 'Email submitted successfully!',
      position: 'bottom-right',
    });

    wait().then(() => props.onCloseEmailDialog(false));
  };

  return (
    <AlertDialog
      open={props.emailDialog}
      onOpenChange={props.onCloseEmailDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Provide your email to get the calculation
          </AlertDialogTitle>
          <AlertDialogDescription>
            We will send the detailed calculation to your email address.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form
          className={'space-y-4'}
          onSubmit={form.handleSubmit(onSubmit, onError)}>
          <div className='grid gap-4'>
            {JSON.stringify(storedValues) !== '{}' && storedValues ? (
              <pre className='p-4 mb-4 overflow-x-auto text-sm bg-gray-100 rounded-md'>
                {JSON.stringify(storedValues, null, 2)}
              </pre>
            ) : null}
            <Controller
              name='email'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field
                  data-invalid={fieldState.invalid}
                  aria-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='email'>Email</FieldLabel>
                  <Input
                    id='email'
                    placeholder='someone@example.com'
                    {...field}
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState?.error ? (
                    <FieldError role='alert' errors={[fieldState.error]} />
                  ) : (
                    <FieldDescription>Enter your email</FieldDescription>
                  )}
                </Field>
              )}
            />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button variant={'outline'} size={'sm'} type='button'>
                Cancel
              </Button>
            </AlertDialogCancel>

            <Button type='submit'>Continue</Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
