import { EducationCalculatorValues } from '@/lib/zod.schemas';
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

export const EducationCalculationEmail = (props: EducationCalculatorValues) => {
  const {
    name,
    childName,
    childAge,
    // inflationRate,
    // existingInvestmentRate,
    // newInvestmentRate,
    // currentCost,
    // currentInvestment,
    higherEducationAge,
  } = props;

  const yearsToSave = higherEducationAge - childAge;

  return (
    <Html>
      <Head />
      <Tailwind config={tailwindConfig}>
        <Body className='bg-foreground font-sans py-10'>
          <Preview>
            Your Education Planning Results for {childName} are here.
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
                  Ascent Wealth Education Calculator
                </strong>
                . Planning for{' '}
                <strong className={'text-primary'}>{childName}&apos;s</strong>{' '}
                higher education is one of the most important financial
                milestones you will achieve.
              </Text>

              <Section className='bg-accent p-6 mb-8 border border-solid border-accent-foreground/50'>
                <Text className='m-0 text-primary font-semibold mb-2'>
                  Planning Summary
                </Text>
                <Text className='m-0 text-muted-foreground text-sm leading-6'>
                  Based on your inputs, you have{' '}
                  <strong className={'text-primary'}>
                    {yearsToSave} years
                  </strong>{' '}
                  to build the ideal corpus before {childName} reaches age{' '}
                  {higherEducationAge}. Our team is now generating a detailed
                  inflation-adjusted report for you.
                </Text>
              </Section>

              <Text className='text-muted-foreground text-base leading-7 mb-6'>
                An expert wealth manager will reach out shortly to share your
                customized education funding strategy and help you bridge any
                investment gaps.
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
                Curious about other investment avenues? Browse our{' '}
                <Link className='text-[#556cd6]' href='https://ascentwealth.in'>
                  Financial Planning Guides
                </Link>{' '}
                to learn more about securing your family&apos;s future.
              </Text>

              <Text className='text-background font-semibold text-base mt-8'>
                To your child&apos;s bright future,
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
                This email was sent following your request on our Education
                Planning Calculator.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

EducationCalculationEmail.PreviewProps = {
  name: `John Doe`,
  childName: `Jane Doe`,
  childAge: 2,
  inflationRate: 4,
  existingInvestmentRate: 5,
  newInvestmentRate: 6,
  currentCost: '100000',
  currentInvestment: '20000',
  higherEducationAge: 18,
} as EducationCalculatorValues;

export default EducationCalculationEmail;
