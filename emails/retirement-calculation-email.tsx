import { RetirementCalculatorValues } from '@/lib/zod.schemas';
import tailwindConfig from '@/tailwind.config';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

export const RetirementCalculationEmail = (
  props: RetirementCalculatorValues,
) => {
  const {
    name,
    // inflationRate,
    currentMonthlyExpenses,
    // existingInvestment,
    currentAge,
    retirementAge,
    lifeExpectancy,
    // postRetirementInflationRate,
    // postRetirementRiskFreeRate,
    // returnOnExistingInvestment,
    // returnOnNewInvestment,
  } = props;

  // Simple calculations to delight the user
  const yearsToRetirement = retirementAge - currentAge;
  const retirementDuration = lifeExpectancy - retirementAge;

  return (
    <Html>
      <Head />
      <Tailwind config={tailwindConfig}>
        <Body className='bg-foreground font-sans py-10'>
          <Preview>
            Your personalized retirement roadmap from Ascent Wealth is ready.
          </Preview>
          <Container className='bg-white mx-auto border border-solid border-accent-foreground/50'>
            <Section className='px-8 py-10'>
              <div className={'w-48 mx-auto text-center'}>
                <Img
                  src={`https://res.cloudinary.com/dxgckfhti/image/upload/w_100/v1769003149/Logo-dark_uuxzvx.svg`}
                  width='100%'
                  height='100%'
                  alt='Ascent Wealth Logo'
                  className='mb-8'
                />
              </div>

              <Heading className='text-2xl font-bold text-backgroud leading-tight mb-4'>
                Hello {name},
              </Heading>

              <Text className='text-muted-foreground text-base leading-7 mb-6'>
                Thank you for using the{' '}
                <strong className={'text-primary'}>
                  Ascent Wealth Retirement Calculator
                </strong>
                . Planning for your golden years is the most significant
                financial gift you can give your future self.
              </Text>

              <Section className='bg-accent p-6 mb-8 border border-solid border-accent-foreground/50'>
                <Text className='m-0 text-primary font-semibold mb-3 text-sm uppercase tracking-wide'>
                  Quick Retirement Snapshot
                </Text>
                <div className=''>
                  <Text className='mb-px text-muted-background text-sm'>
                    • Years remaining to build your corpus:{' '}
                    <strong className={'text-background'}>
                      {yearsToRetirement} years
                    </strong>
                  </Text>
                  <Text className='mb-px text-muted-background text-sm'>
                    • Planned retirement duration:{' '}
                    <strong className={'text-background'}>
                      {retirementDuration} years
                    </strong>
                  </Text>
                  <Text className='mb-px text-muted-background text-sm'>
                    • Current monthly lifestyle cost:{' '}
                    <strong className={'text-background'}>
                      ₹{Number(currentMonthlyExpenses).toLocaleString('en-IN')}
                    </strong>
                  </Text>
                </div>
              </Section>

              <Text className='text-muted-foreground text-base leading-7 mb-8'>
                Our expert advisors are currently analyzing your
                inflation-adjusted requirements and expected returns to
                determine your ideal &quot;Retirement Corpus.&quot; We will
                contact you within 24-48 business hours to present a detailed
                strategy.
              </Text>

              <Section className='text-center mb-8'>
                <Button
                  className='bg-primary text-white text-sm font-semibold text-center inline-block px-8 py-3 mr-2 mb-2'
                  href='https://res.cloudinary.com/dxgckfhti/image/upload/v1768296504/Ascent_Wealth_Brochure_qphbv7.pdf'>
                  Download Wealth Brochure
                </Button>
                <Button
                  className='bg-transparent border border-solid border-primary text-muted-foreground text-sm font-semibold text-center inline-block px-8 py-3 mb-2'
                  href='https://res.cloudinary.com/dxgckfhti/image/upload/v1768549237/business-location_x7pl9i.avif'>
                  Our Office Location
                </Button>
              </Section>

              <Hr className='border-accent my-8' />

              <Text className='text-muted-foreground text-sm leading-6'>
                Did you know? Even a 1% difference in inflation can
                significantly impact your retirement corpus. Explore our{' '}
                <Link className='text-[#556cd6]' href='https://ascentwealth.in'>
                  Retirement Planning Guide
                </Link>{' '}
                to learn more.
              </Text>

              <Text className='text-background font-semibold text-base mt-8'>
                To your peaceful retirement,
                <br />
                The Ascent Wealth Team
              </Text>
            </Section>

            <Section className='bg-muted px-8 py-6 border-t border-solid border-primary'>
              <Text className='text-muted-foreground text-[12px] leading-5 m-0'>
                <strong>Our Office:</strong> Appasamy City Square, Rajiv Gandhi
                Salai, OMR Service Rd, Kandhanchavadi, Chennai, Tamil Nadu
                600097
              </Text>
              <Text className='text-muted-foreground text-[11px] mt-2'>
                This email was generated based on your inputs to the Ascent
                Wealth Retirement Calculator.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

RetirementCalculationEmail.PreviewProps = {
  name: 'John Doe',
  inflationRate: 5,
  currentMonthlyExpenses: '2000',
  existingInvestment: '50000',
  currentAge: 30,
  retirementAge: 60,
  lifeExpectancy: 85,
  postRetirementInflationRate: 6,
  postRetirementRiskFreeRate: 5,
  returnOnExistingInvestment: 7,
  returnOnNewInvestment: 8,
} as RetirementCalculatorValues;

export default RetirementCalculationEmail;
