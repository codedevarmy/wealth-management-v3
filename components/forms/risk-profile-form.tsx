'use client';

import { Controller, useFormContext } from 'react-hook-form';

import { Checkbox } from '@/components/ui/checkbox';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import {
  ageGroups,
  employmentStatuses,
  householdIncomes,
  incomeStatues,
  investedInstruments,
  investmentDurations,
  investmentObjectives,
  investmentPlansRanges,
  investmentRisks,
  knowledegsAboutInvestments,
  liquidNetWorths,
  loanStatuses,
  marketMovements,
  riskProfiles,
} from '@/constants';
import { RiskProfileFormValues } from '@/lib/zod.schemas';

export default function RiskProfileForm() {
  const form = useFormContext<RiskProfileFormValues>();

  return (
    <FieldSet>
      <FieldGroup>
        <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
          <Controller
            name='firstName'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                aria-invalid={fieldState.invalid}>
                <FieldLabel htmlFor='firstName'>First Name</FieldLabel>
                <Input
                  id='firstName'
                  placeholder='Evil'
                  {...field}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.error ? (
                  <FieldError
                    role='alert'
                    aria-live='assertive'
                    errors={[fieldState.error]}
                  />
                ) : (
                  <FieldDescription>Enter your first name</FieldDescription>
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
                  id='lastName'
                  placeholder='Rabbit'
                  {...field}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.error ? (
                  <FieldError
                    role='alert'
                    aria-live='assertive'
                    errors={[fieldState.error]}
                  />
                ) : (
                  <FieldDescription>Enter your last name</FieldDescription>
                )}
              </Field>
            )}
          />
        </div>
      </FieldGroup>

      <FieldGroup>
        <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
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
                  placeholder='someone@gmail.com'
                  {...field}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.error ? (
                  <FieldError
                    role='alert'
                    aria-live='assertive'
                    errors={[fieldState.error]}
                  />
                ) : (
                  <FieldDescription>Enter your email address</FieldDescription>
                )}
              </Field>
            )}
          />

          <Controller
            name='mobile'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                aria-invalid={fieldState.invalid}>
                <FieldLabel htmlFor='mobile'>Mobile</FieldLabel>
                <Input
                  id='mobile'
                  placeholder='+91 98765 43210'
                  {...field}
                  aria-invalid={fieldState.invalid}
                />
                {fieldState.error ? (
                  <FieldError
                    role='alert'
                    aria-live='assertive'
                    errors={[fieldState.error]}
                  />
                ) : (
                  <FieldDescription>Enter your mobile number</FieldDescription>
                )}
              </Field>
            )}
          />
        </div>
      </FieldGroup>

      <FieldGroup>
        <div className={'grid grid-cols-1 md:grid-cols-2 gap-4'}>
          <Controller
            name='age'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                aria-invalid={fieldState.invalid}>
                <FieldLabel htmlFor='age-group'>Age</FieldLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    id='age-group'
                    aria-invalid={fieldState.invalid}>
                    <SelectValue placeholder='Select your age group' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Age Group</SelectLabel>
                      {ageGroups.map((ageGroup) => (
                        <SelectItem key={ageGroup} value={ageGroup}>
                          {ageGroup}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                {fieldState.error ? (
                  <FieldError
                    role='alert'
                    aria-live='assertive'
                    errors={[fieldState.error]}
                  />
                ) : (
                  <FieldDescription>Select your age group</FieldDescription>
                )}
              </Field>
            )}
          />

          <Controller
            name='employmentStatus'
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                data-invalid={fieldState.invalid}
                aria-invalid={fieldState.invalid}>
                <FieldLabel htmlFor='employment-status'>
                  Employment Status
                </FieldLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    id='employment-status'
                    aria-invalid={fieldState.invalid}>
                    <SelectValue placeholder='Select your employment status' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Employment Status</SelectLabel>
                      {employmentStatuses.map((status) => (
                        <SelectItem key={status} value={status}>
                          {status}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {fieldState.error ? (
                  <FieldError
                    role='alert'
                    aria-live='assertive'
                    errors={[fieldState.error]}
                  />
                ) : (
                  <FieldDescription>
                    Select your employment status
                  </FieldDescription>
                )}
              </Field>
            )}
          />
        </div>
      </FieldGroup>

      <FieldSeparator />

      <FieldGroup className={'gap-3'}>
        <Controller
          name='householdIncome'
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <FieldDescription className={'font-semibold'}>
                What is your annual household income?
              </FieldDescription>
              {householdIncomes.map((income) => (
                <Field
                  data-invalid={fieldState.invalid}
                  aria-invalid={fieldState.invalid}
                  key={income}
                  orientation='horizontal'>
                  <Switch
                    id={income}
                    checked={field.value === income}
                    onCheckedChange={() => field.onChange(income)}
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldLabel htmlFor={income} className='font-normal'>
                    {income}
                  </FieldLabel>
                </Field>
              ))}
            </>
          )}
        />

        <Controller
          name='incomeStatus'
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <FieldDescription className={'font-semibold'}>
                How secure do you think is your current and future income?
              </FieldDescription>
              {incomeStatues.map((incomeStatus) => (
                <Field
                  data-invalid={fieldState.invalid}
                  aria-invalid={fieldState.invalid}
                  key={incomeStatus}
                  orientation='horizontal'>
                  <Switch
                    id={incomeStatus}
                    checked={field.value === incomeStatus}
                    onCheckedChange={() => field.onChange(incomeStatus)}
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldLabel htmlFor={incomeStatus} className='font-normal'>
                    {incomeStatus}
                  </FieldLabel>
                </Field>
              ))}
            </>
          )}
        />

        <Controller
          name='liquidNetWorth'
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <FieldDescription className={'font-semibold'}>
                What is your liquid net worth?
              </FieldDescription>
              {liquidNetWorths.map((netWorth) => (
                <Field
                  key={netWorth}
                  orientation='horizontal'
                  data-invalid={fieldState.invalid}
                  aria-invalid={fieldState.invalid}>
                  <Switch
                    id={netWorth}
                    checked={field.value === netWorth}
                    onCheckedChange={() => field.onChange(netWorth)}
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldLabel htmlFor={netWorth} className='font-normal'>
                    {netWorth}
                  </FieldLabel>
                </Field>
              ))}
            </>
          )}
        />

        <Controller
          name='loanStatus'
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <FieldDescription className={'font-semibold'}>
                Do you have any loans for which monthly EMI is being paid?
              </FieldDescription>
              {loanStatuses.map((loanStatus) => (
                <Field
                  key={loanStatus}
                  orientation='horizontal'
                  data-invalid={fieldState.invalid}
                  aria-invalid={fieldState.invalid}>
                  <Switch
                    id={loanStatus}
                    checked={field.value === loanStatus}
                    onCheckedChange={() => field.onChange(loanStatus)}
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldLabel htmlFor={loanStatus} className='font-normal'>
                    {loanStatus}
                  </FieldLabel>
                </Field>
              ))}
            </>
          )}
        />

        <Controller
          name='knowledgeAboutInvestments'
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <FieldDescription
                className={'font-semibold'}
                aria-invalid={fieldState.invalid}>
                "I consider myself to be knowledgeable about investments and
                financial matters"
              </FieldDescription>
              {knowledegsAboutInvestments.map((knowledge) => (
                <Field
                  key={knowledge}
                  orientation='horizontal'
                  data-invalid={fieldState.invalid}
                  aria-invalid={fieldState.invalid}>
                  <Switch
                    id={knowledge}
                    checked={field.value === knowledge}
                    onCheckedChange={() => field.onChange(knowledge)}
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldLabel htmlFor={knowledge} className='font-normal'>
                    {knowledge}
                  </FieldLabel>
                </Field>
              ))}
            </>
          )}
        />

        <Controller
          name='investmentObjective'
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <FieldDescription className={'font-semibold'}>
                Which of the following statements best describes your investment
                objective?
              </FieldDescription>
              {investmentObjectives.map((objective) => (
                <Field
                  key={objective}
                  orientation='horizontal'
                  data-invalid={fieldState.invalid}
                  aria-invalid={fieldState.invalid}>
                  <Switch
                    id={objective}
                    checked={field.value === objective}
                    onCheckedChange={() => field.onChange(objective)}
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldLabel htmlFor={objective} className='font-normal'>
                    {objective}
                  </FieldLabel>
                </Field>
              ))}
            </>
          )}
        />

        <Controller
          name='investmentDuration'
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <FieldDescription className={'font-semibold'}>
                What is the overall time horizon that you have in your mind for
                your investment?
              </FieldDescription>
              {investmentDurations.map((duration) => (
                <Field
                  key={duration}
                  orientation='horizontal'
                  data-invalid={fieldState.invalid}
                  aria-invalid={fieldState.invalid}>
                  <Switch
                    id={duration}
                    checked={field.value === duration}
                    onCheckedChange={() => field.onChange(duration)}
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldLabel htmlFor={duration} className='font-normal'>
                    {duration}
                  </FieldLabel>
                </Field>
              ))}
            </>
          )}
        />

        <Controller
          name='investedInstrument'
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <FieldDescription className={'font-semibold'}>
                What kind of instruments have you invested in before or
                currently invested in?
              </FieldDescription>
              {investedInstruments.map((instrument) => (
                <Field
                  key={instrument}
                  orientation='horizontal'
                  data-invalid={fieldState.invalid}
                  aria-invalid={fieldState.invalid}>
                  <Switch
                    id={instrument}
                    checked={field.value === instrument}
                    onCheckedChange={() => field.onChange(instrument)}
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldLabel htmlFor={instrument} className='font-normal'>
                    {instrument}
                  </FieldLabel>
                </Field>
              ))}
            </>
          )}
        />

        <Controller
          name='investmentPlansRange'
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <FieldDescription className={'font-semibold'}>
                We have outlined the most likely best-case and worst-case annual
                returns of four hypothetical investment plans. Which range of
                possible outcomes is most acceptable to you?
              </FieldDescription>
              {investmentPlansRanges.map((planRange) => (
                <Field
                  key={planRange}
                  orientation='horizontal'
                  data-invalid={fieldState.invalid}
                  aria-invalid={fieldState.invalid}>
                  <Switch
                    id={planRange}
                    checked={field.value === planRange}
                    onCheckedChange={() => field.onChange(planRange)}
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldLabel htmlFor={planRange} className='font-normal'>
                    {planRange}
                  </FieldLabel>
                </Field>
              ))}
            </>
          )}
        />

        <Controller
          name='investmentRisk'
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <FieldDescription className={'font-semibold'}>
                Which of the following best describes your attitude towards
                investment risk?
              </FieldDescription>
              {investmentRisks.map((risk) => {
                const parts = risk.split(':');

                return (
                  <Field
                    key={risk}
                    orientation='horizontal'
                    data-invalid={fieldState.invalid}
                    aria-invalid={fieldState.invalid}>
                    <Switch
                      id={risk}
                      checked={field.value === risk}
                      onCheckedChange={() => field.onChange(risk)}
                      aria-invalid={fieldState.invalid}
                    />
                    <FieldLabel
                      htmlFor={risk}
                      className='font-normal inline-flex flex-wrap gap-0.5 md:gap-2'>
                      <strong>{parts[0]}:</strong> {parts[1]}
                    </FieldLabel>
                  </Field>
                );
              })}
            </>
          )}
        />

        <Controller
          name='marketMovement'
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <FieldDescription className={'font-semibold'}>
                Which of the following statement best describes your attitude if
                there's an erosion of over 20% in capital invested due to
                unfavourable market movement?
              </FieldDescription>
              {marketMovements.map((movement) => (
                <Field
                  key={movement}
                  orientation='horizontal'
                  data-invalid={fieldState.invalid}
                  aria-invalid={fieldState.invalid}>
                  <Switch
                    id={movement}
                    checked={field.value === movement}
                    onCheckedChange={() => field.onChange(movement)}
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldLabel htmlFor={movement} className='font-normal'>
                    {movement}
                  </FieldLabel>
                </Field>
              ))}
            </>
          )}
        />
      </FieldGroup>

      <FieldGroup className={'gap-3'}>
        <Controller
          name='riskProfile'
          control={form.control}
          render={({ field, fieldState }) => (
            <>
              <Label className={'font-semibold'}>
                What would be the risk profile of other family members?
              </Label>
              {riskProfiles.map((riskProfile) => (
                <Field
                  key={riskProfile}
                  orientation='horizontal'
                  data-invalid={fieldState.invalid}
                  aria-invalid={fieldState.invalid}>
                  <Switch
                    id={riskProfile}
                    checked={field.value === riskProfile}
                    onCheckedChange={() => field.onChange(riskProfile)}
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldLabel htmlFor={riskProfile} className='font-normal'>
                    {riskProfile}
                  </FieldLabel>
                </Field>
              ))}
            </>
          )}
        />
      </FieldGroup>
      <FieldSeparator />
      <FieldGroup>
        <Controller
          name='agreeToTerms'
          control={form.control}
          render={({ field, fieldState }) => (
            <Field
              orientation='horizontal'
              data-invalid={fieldState.invalid}
              aria-invalid={fieldState.invalid}>
              <Checkbox
                id='agree-to-terms'
                checked={field.value}
                onCheckedChange={field.onChange}
                aria-invalid={fieldState.invalid}
              />

              {fieldState.error ? (
                <FieldError
                  role='alert'
                  aria-live='assertive'
                  errors={[fieldState.error]}
                />
              ) : (
                <FieldLabel htmlFor='agree-to-terms' className='font-normal'>
                  I agree to the terms and conditions
                </FieldLabel>
              )}
            </Field>
          )}
        />
      </FieldGroup>
    </FieldSet>
  );
}
