import { VacationCalculatorValues } from '@/lib/zod.schemas';
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

export const VacationCalculationEmail = (props: VacationCalculatorValues) => {
  const {
    name,
    // childName,
    inflationRate,
    // existingInvestmentRate,
    // newInvestmentRate,
    currentCost,
    // currentInvestment,
    afterHowManyYears,
  } = props;

  // Delightful Calculation: Estimating the future cost of the trip
  // Future Value = Present Value * (1 + inflation)^years
  const futureCost =
    Number(currentCost) *
    Math.pow(1 + Number(inflationRate) / 100, Number(afterHowManyYears));

  return (
    <Html>
      <Head />
      <Tailwind config={tailwindConfig}>
        <Body className='bg-foreground font-sans py-10'>
          <Preview>
            Your dream vacation plan is taking shape with Ascent Wealth.
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
                  Ascent Wealth Vacation Planner
                </strong>
                . We believe your hard work deserves a world-class reward, and
                we&apos;re here to help you fund it without compromising your
                other life goals.
              </Text>

              <Section className='bg-accent p-6 mb-8 border border-solid border-accent-foreground/50'>
                <Text className='m-0 text-primary font-semibold mb-3 text-sm uppercase tracking-wide'>
                  Vacation Goal Snapshot
                </Text>
                <div className=''>
                  <Text className='mb-px text-muted-background text-sm'>
                    • Planned Departure:{' '}
                    <strong className={'text-background'}>
                      {afterHowManyYears} Years from now
                    </strong>
                  </Text>
                  <Text className='mb-px text-muted-background text-sm'>
                    • Today&apos;s Estimated Cost:{' '}
                    <strong className={'text-background'}>
                      ₹{Number(currentCost).toLocaleString('en-IN')}
                    </strong>
                  </Text>
                  <Text className='mb-px text-muted-background text-sm'>
                    • Future Estimated Cost (at {inflationRate}% inflation):{' '}
                    <strong className={'text-background'}>
                      ₹{Math.round(futureCost).toLocaleString('en-IN')}
                    </strong>
                  </Text>
                </div>
              </Section>

              <Text className='text-muted-foreground text-base leading-7 mb-8'>
                Our wealth advisors are currently designing a high-yield
                investment strategy to help you reach this target efficiently.
                We will reach out within 24-48 business hours to discuss how to
                make this trip a reality.
              </Text>

              <Section className='text-center mb-8'>
                <Button
                  className='bg-primary text-white text-sm font-semibold text-center inline-block px-8 py-3 mr-2 mb-2'
                  href='https://res.cloudinary.com/dxgckfhti/image/upload/v1768296504/Ascent_Wealth_Brochure_qphbv7.pdf'>
                  Download Wealth Brochure
                </Button>
                <Button
                  className='bg-transparent border border-solid border-primary text-[#525f7f] text-sm font-semibold text-center inline-block px-8 py-3 mb-2'
                  href='https://res.cloudinary.com/dxgckfhti/image/upload/v1768549237/business-location_x7pl9i.avif'>
                  Our Office Location
                </Button>
              </Section>

              <Hr className='border-accent my-8' />

              <Text className='text-muted-foreground text-sm leading-6'>
                While you wait, feel free to browse our{' '}
                <Link className='text-[#556cd6]' href='https://ascentwealth.in'>
                  Lifestyle Planning Blog
                </Link>{' '}
                for tips on balancing luxury with long-term security.
              </Text>

              <Text className='text-background font-semibold text-base mt-8'>
                To your next great adventure,
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
                This email was sent following your request on the Ascent Wealth
                Vacation Calculator.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

VacationCalculationEmail.PreviewProps = {
  name: 'John Doe',
  childName: 'Jane',
  inflationRate: 5,
  existingInvestmentRate: 7,
  newInvestmentRate: 8,
  currentCost: '20000',
  currentInvestment: '5000',
  afterHowManyYears: 10,
} as VacationCalculatorValues;

export default VacationCalculationEmail;
