'use client';

import { ContactFormData, contactFormSchema } from '@/lib/zod.schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { IconReload } from '@tabler/icons-react';
import Link from 'next/link';
import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { Button } from '../ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '../ui/field';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

const isDev = process.env.NODE_ENV === 'development';

export default function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      acceptTerms: false,
    },
    mode: 'onChange',
  });

  const onError: SubmitErrorHandler<ContactFormData> = (errors) => {
    console.log('Form errors:', errors);
  };

  const onSubmit: SubmitHandler<ContactFormData> = (data) => {
    console.log('Form submitted successfully:', data);
  };

  return (
    <div className='border p-1 bg-muted w-full max-w-lg mx-auto'>
      <Card className='relative isolate bg-background/70 shadow-none lg:ms-auto rounded-none'>
        <CardHeader>
          <CardTitle>Contact Us</CardTitle>
          <CardDescription>
            We&apos;d love to hear from you. Please fill out this form.
          </CardDescription>

          <CardAction>
            <Button
              size={'icon-sm'}
              variant='destructive'
              type='button'
              onClick={() => form.reset()}
              aria-label='Reset form'
              disabled={!isDev}>
              <IconReload className={' size-4'} />
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className='mt-2'>
          <form onSubmit={form.handleSubmit(onSubmit, onError)}>
            <FieldSet className='grid gap-4'>
              <FieldGroup className=' gap-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <Controller
                    name='firstName'
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid}
                        aria-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor='firstName'>First Name</FieldLabel>
                        <Input
                          placeholder='First name'
                          id='firstName'
                          {...field}
                          aria-invalid={fieldState.invalid}
                        />
                        {fieldState.error && (
                          <FieldError
                            role='alert'
                            errors={[fieldState.error]}
                          />
                        )}
                      </Field>
                    )}
                  />
                  <Controller
                    name='lastName'
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field
                        data-invalid={fieldState.invalid}
                        aria-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor='lastName'>Last Name</FieldLabel>
                        <Input
                          placeholder='Last name'
                          id='lastName'
                          {...field}
                          aria-invalid={fieldState.invalid}
                        />
                        {fieldState.error && (
                          <FieldError
                            role='alert'
                            errors={[fieldState.error]}
                          />
                        )}
                      </Field>
                    )}
                  />
                </div>

                <Controller
                  name='email'
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field
                      data-invalid={fieldState.invalid}
                      aria-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor='email'>Email</FieldLabel>
                      <Input
                        type='email'
                        placeholder='Email'
                        id='email'
                        {...field}
                        aria-invalid={fieldState.invalid}
                      />
                      <FieldError role='alert' errors={[fieldState.error]} />
                    </Field>
                  )}
                />

                <Controller
                  name='message'
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field
                      data-invalid={fieldState.invalid}
                      aria-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor='message'>Message</FieldLabel>
                      <Textarea
                        id='message'
                        placeholder='Your feedback helps us improve...'
                        rows={6}
                        {...field}
                        aria-invalid={fieldState.invalid}
                      />
                      {fieldState.error ? (
                        <FieldError role='alert' errors={[fieldState.error]} />
                      ) : (
                        <FieldDescription>
                          Share your thoughts about our service.
                        </FieldDescription>
                      )}
                    </Field>
                  )}
                />

                <Controller
                  name='acceptTerms'
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field
                      data-invalid={fieldState.invalid}
                      aria-invalid={fieldState.invalid}
                      orientation='horizontal'
                      className='col-span-2 flex items-center gap-2'>
                      <Checkbox
                        id='acceptTerms'
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        aria-invalid={fieldState.invalid}
                      />

                      {fieldState.error ? (
                        <FieldError role='alert' errors={[fieldState.error]} />
                      ) : (
                        <FieldLabel
                          htmlFor='acceptTerms'
                          className='font-normal'>
                          You agree to our
                          <Link href='#' className='underline'>
                            terms and conditions
                          </Link>
                          <span>.</span>
                        </FieldLabel>
                      )}
                    </Field>
                  )}
                />

                {/* <div className='col-span-2 sm:col-span-1'>
                <Label htmlFor='firstName'>First Name</Label>
                <Input
                  placeholder='First name'
                  id='firstName'
                  className='mt-2 bg-white h-10 shadow-none'
                />
              </div>
              <div className='col-span-2 sm:col-span-1'>
                <Label htmlFor='lastName'>Last Name</Label>
                <Input
                  placeholder='Last name'
                  id='lastName'
                  className='mt-2 bg-white h-10 shadow-none'
                />
              </div> */}

                {/* <div className='col-span-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  type='email'
                  placeholder='Email'
                  id='email'
                  className='mt-2 bg-white h-10 shadow-none'
                />
              </div> */}
                {/* <div className='col-span-2'>
                <Label htmlFor='message'>Message</Label>
                <Textarea
                  id='message'
                  placeholder='Message'
                  className='mt-2 bg-white shadow-none'
                  rows={6}
                />
              </div> */}

                {/* <FieldGroup className='col-span-2'>
              </FieldGroup> */}

                {/* <FieldGroup className='col-span-2 flex items-center'>
              </FieldGroup> */}
                {/* <div className='col-span-2 flex items-center gap-2'>
                <Checkbox id='acceptTerms' className='bg-background' />
                <Label htmlFor='acceptTerms' className='gap-0'>
                  You agree to our
                  <Link href='#' className='underline ml-1'>
                    terms and conditions
                  </Link>
                  <span>.</span>
                </Label>
              </div> */}
              </FieldGroup>
            </FieldSet>
            <Button className='mt-6 w-full' size='lg'>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
