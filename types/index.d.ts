declare type Calculators =
  | 'education-form'
  | 'lumpsum-form'
  | 'sip-form'
  | 'retirement-form'
  | 'wedding-form'
  | 'vacation-form';

declare type EmailType =
  | `calc-${Calculators}`
  | 'risk-profile-form'
  | 'consultation-form';

declare type SessionKey =
  | Calculators
  | 'risk-profile-form'
  | 'consultation-form';
