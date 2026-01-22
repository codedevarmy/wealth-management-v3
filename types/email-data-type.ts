import {
  ConsultationFormValues,
  EducationCalculatorValues,
  LumpSumCalculatorValues,
  RetirementCalculatorValues,
  RiskProfileFormValues,
  SIPCalculatorValues,
  VacationCalculatorValues,
  WeddingCalculatorValues,
} from '@/lib/zod.schemas';

export type EmailData =
  | RiskProfileFormValues
  | EducationCalculatorValues
  | LumpSumCalculatorValues
  | SIPCalculatorValues
  | RetirementCalculatorValues
  | WeddingCalculatorValues
  | VacationCalculatorValues
  | ConsultationFormValues;
