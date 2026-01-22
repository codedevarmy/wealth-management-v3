import { Checkbox } from '@/components/ui/checkbox';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from '@/components/ui/field';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { consultationTypes } from '@/constants';
import { type ConsultationFormValues } from '@/lib/zod.schemas';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Input } from '../ui/input';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { ScrollArea } from '../ui/scroll-area';

export default function ConsultationForm() {
  const [isVisible, setIsVisible] = useState(false);

  const form = useFormContext<ConsultationFormValues>();

  return (
    <FieldGroup className='w-full'>
      <FieldSet className={'gap-4'}>
        <FieldLegend>
          Consultation Form - Goal Based Financial Planning
        </FieldLegend>
        <FieldDescription>
          A well thought out financial plan alone can pave way for achieving
          financial independence.
        </FieldDescription>
        <FieldSeparator />

        <ScrollArea className='h-96 w-full'>
          <div className={'space-y-4 px-4'}>
            <FieldGroup className={'grid grid-cols-1 lg:grid-cols-2 gap-4'}>
              <Controller
                name='fullName'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    aria-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='fullName'>FullName</FieldLabel>
                    <Input
                      id='fullName'
                      placeholder='ex. Evil Rabbit'
                      {...field}
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.error ? (
                      <FieldError errors={[fieldState.error]} />
                    ) : (
                      <FieldDescription>
                        Enter your full name as per official documents
                      </FieldDescription>
                    )}
                  </Field>
                )}
              />

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
                      type='email'
                      placeholder='ex. someone@example.com'
                      {...field}
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.error ? (
                      <FieldError errors={[fieldState.error]} />
                    ) : (
                      <FieldDescription>
                        We&apos;ll never share your email with anyone else.
                      </FieldDescription>
                    )}
                  </Field>
                )}
              />
            </FieldGroup>

            <FieldGroup className={'grid grid-cols-1 lg:grid-cols-2 gap-4'}>
              <Controller
                name='phone'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    aria-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='phone'>Phone Number</FieldLabel>
                    <Input
                      id='phone'
                      type='tel'
                      placeholder='ex. 99999 99999'
                      {...field}
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.error ? (
                      <FieldError errors={[fieldState.error]} />
                    ) : (
                      <FieldDescription>
                        Enter your 10-digit phone number
                      </FieldDescription>
                    )}
                  </Field>
                )}
              />
              <Controller
                name='householdExpenses'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    aria-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='household-expenses'>
                      Household Average Monthly Expenses:
                    </FieldLabel>
                    <Input
                      id='household-expenses'
                      placeholder='ex. 1200'
                      {...field}
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.error ? (
                      <FieldError errors={[fieldState.error]} />
                    ) : (
                      <FieldDescription>
                        (Indicate NA if not applicable)
                      </FieldDescription>
                    )}
                  </Field>
                )}
              />
            </FieldGroup>

            <FieldGroup>
              <Controller
                name='consultationType'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    aria-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='consultant-type'>
                      I need to Consult for
                    </FieldLabel>
                    <Select
                      onValueChange={(e) => {
                        // setSelectedType(e as ConsultationType);
                        field.onChange(e);
                        if (e === 'other') {
                          setIsVisible(true);
                        } else {
                          setIsVisible(false);
                          form.setValue('specifyReason', undefined);
                        }
                      }}
                      value={field.value}>
                      <SelectTrigger
                        id='consultant-type'
                        aria-invalid={fieldState.invalid}>
                        <SelectValue placeholder='Select a type' />
                      </SelectTrigger>
                      <SelectContent>
                        {consultationTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type
                              .split('-')
                              .map(
                                (word) =>
                                  word.charAt(0).toUpperCase() + word.slice(1),
                              )
                              .join(' ')}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                )}
              />
              {isVisible && (
                <Controller
                  name='specifyReason'
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field
                      data-invalid={fieldState.invalid}
                      aria-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor='reason'>Specify Reason</FieldLabel>
                      <Input
                        id='reason'
                        placeholder='Specify reason...'
                        {...field}
                        aria-invalid={fieldState.invalid}
                      />
                      {fieldState.error ? (
                        <FieldError errors={[fieldState.error]} />
                      ) : (
                        <FieldDescription>
                          Please specify your reason for consultation
                        </FieldDescription>
                      )}
                    </Field>
                  )}
                />
              )}
            </FieldGroup>

            <FieldGroup className={'grid grid-cols-1 lg:grid-cols-2 gap-4'}>
              <Controller
                name='age'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    aria-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='age'>Your age</FieldLabel>
                    <Input
                      id='age'
                      type='text'
                      placeholder='ex. 25'
                      {...field}
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.error ? (
                      <FieldError errors={[fieldState.error]} />
                    ) : (
                      <FieldDescription>
                        Enter your age in years
                      </FieldDescription>
                    )}
                  </Field>
                )}
              />
              <Controller
                name='spouseAge'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    aria-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='spouse-age'>
                      Your Spouse age
                    </FieldLabel>
                    <Input
                      id='spouse-age'
                      type='text'
                      placeholder='ex. 25'
                      {...field}
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.error ? (
                      <FieldError errors={[fieldState.error]} />
                    ) : (
                      <FieldDescription>
                        (Indicate NA if not applicable)
                      </FieldDescription>
                    )}
                  </Field>
                )}
              />
            </FieldGroup>

            <FieldGroup className={'grid grid-cols-1 lg:grid-cols-2 gap-4'}>
              <Controller
                name='firstChildAge'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    aria-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='first-child-age'>
                      Your 1st Child Age
                    </FieldLabel>
                    <Input
                      id='first-child-age'
                      placeholder='ex. 23'
                      {...field}
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.error ? (
                      <FieldError errors={[fieldState.error]} />
                    ) : (
                      <FieldDescription>
                        (Indicate NA if not applicable)
                      </FieldDescription>
                    )}
                  </Field>
                )}
              />
              <Controller
                name='secondChildAge'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    aria-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='second-child-age'>
                      Your 2nd Child Age:
                    </FieldLabel>
                    <Input
                      id='second-child-age'
                      placeholder='ex. 19'
                      {...field}
                      aria-invalid={fieldState.invalid}
                    />

                    {fieldState.error ? (
                      <FieldError errors={[fieldState.error]} />
                    ) : (
                      <FieldDescription>
                        (Indicate NA if not applicable)
                      </FieldDescription>
                    )}
                  </Field>
                )}
              />
            </FieldGroup>

            <FieldSeparator className={'my-2'} />

            <Controller
              name='isTermInsurance'
              control={form.control}
              render={({ field, fieldState }) => (
                <FieldSet
                  data-invalid={fieldState.invalid}
                  aria-invalid={fieldState.invalid}>
                  <FieldLabel
                    data-invalid={fieldState.invalid}
                    aria-invalid={fieldState.invalid}>
                    Are you protected with a Term Insurance Cover (Life):
                  </FieldLabel>
                  {fieldState.error ? (
                    <FieldError errors={[fieldState.error]} />
                  ) : (
                    <FieldDescription>
                      Select the appropriate option below.
                    </FieldDescription>
                  )}
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}>
                    <Field
                      orientation='horizontal'
                      data-invalid={fieldState.invalid}
                      aria-invalid={fieldState.invalid}>
                      <RadioGroupItem
                        value='yes-term-insurence'
                        id='yes-term-insurence'
                      />
                      <FieldLabel
                        htmlFor='yes-term-insurence'
                        className='font-normal'>
                        Yes
                      </FieldLabel>
                    </Field>
                    <Field
                      orientation='horizontal'
                      data-invalid={fieldState.invalid}
                      aria-invalid={fieldState.invalid}>
                      <RadioGroupItem
                        value='no-term-insurence'
                        id='no-term-insurence'
                      />
                      <FieldLabel
                        htmlFor='no-term-insurence'
                        className='font-normal'>
                        No
                      </FieldLabel>
                    </Field>
                  </RadioGroup>
                </FieldSet>
              )}
            />

            <Controller
              name='isHealthInsurance'
              control={form.control}
              render={({ field, fieldState }) => (
                <FieldSet
                  data-invalid={fieldState.invalid}
                  aria-invalid={fieldState.invalid}>
                  <FieldLabel
                    data-invalid={fieldState.invalid}
                    aria-invalid={fieldState.invalid}>
                    Do you have adequate Health Insurance Cover apart from
                    Corporate Group Insurance Cover:
                  </FieldLabel>
                  {fieldState.error ? (
                    <FieldError errors={[fieldState.error]} />
                  ) : (
                    <FieldDescription>
                      Select the appropriate option below.
                    </FieldDescription>
                  )}
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}>
                    <Field
                      orientation='horizontal'
                      data-invalid={fieldState.invalid}
                      aria-invalid={fieldState.invalid}>
                      <RadioGroupItem
                        value='yes-health-insurence'
                        id='yes-health-insurence'
                      />
                      <FieldLabel
                        htmlFor='yes-health-insurence'
                        className='font-normal'>
                        Yes
                      </FieldLabel>
                    </Field>
                    <Field
                      orientation='horizontal'
                      data-invalid={fieldState.invalid}
                      aria-invalid={fieldState.invalid}>
                      <RadioGroupItem
                        value='no-health-insurence'
                        id='no-health-insurence'
                      />
                      <FieldLabel
                        htmlFor='no-health-insurence'
                        className='font-normal'>
                        No
                      </FieldLabel>
                    </Field>
                  </RadioGroup>
                </FieldSet>
              )}
            />
          </div>
        </ScrollArea>

        <FieldSeparator />

        <FieldGroup>
          <Controller
            name='consent'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                orientation='horizontal'
                data-invalid={fieldState.invalid}
                aria-invalid={fieldState.invalid}>
                <Checkbox
                  id='consent'
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />

                {fieldState.error ? (
                  <FieldError errors={[fieldState.error]} />
                ) : (
                  <FieldLabel htmlFor='consent' className='font-normal'>
                    I am providing the above information to Ascent Wealth and
                    agree to receive their insights and investment data in
                    support of my financial goals.
                  </FieldLabel>
                )}
              </Field>
            )}
          />
        </FieldGroup>
      </FieldSet>
    </FieldGroup>
  );
}
