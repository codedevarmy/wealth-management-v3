import { WeddingCalculatorValues } from '@/lib/zod.schemas';
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

export const WeddingCalculationEmail = (props: WeddingCalculatorValues) => {
  const {
    name,
    childName,
    childAge,
    // inflationRate,
    // existingInvestmentRate,
    currentCost,
    // currentInvestment,
    marriageAge,
    // returnOnNewInvestment,
  } = props;

  // Delightful calculation: Years left to save
  const yearsToWedding = marriageAge - childAge;

  return (
    <Html>
      <Head />
      <Tailwind config={tailwindConfig}>
        <Body className='bg-foreground font-sans py-10'>
          <Preview>
            Planning {childName}&apos;s dream wedding with Ascent Wealth.
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
                  Ascent Wealth Wedding Calculator
                </strong>
                . Preparing for{' '}
                <strong className={'text-primary'}>{childName}&apos;s</strong>{' '}
                milestone celebration requires a blend of vision and disciplined
                financial planning.
              </Text>

              <Section className='bg-accent p-6 mb-8 border border-solid border-accent-foreground/50'>
                <Text className='m-0 text-primary font-semibold mb-3 text-sm uppercase tracking-wide'>
                  Planning Snapshot
                </Text>
                <div className=''>
                  <Text className='mb-px text-muted-background text-sm'>
                    • Years until the big day:{' '}
                    <strong className={'text-background'}>
                      {yearsToWedding} years
                    </strong>
                  </Text>
                  <Text className='mb-px text-muted-background text-sm'>
                    • Current estimated wedding cost:{' '}
                    <strong className={'text-background'}>
                      ₹{Number(currentCost).toLocaleString('en-IN')}
                    </strong>
                  </Text>
                  <Text className='mb-px text-muted-background text-sm italic'>
                    *We are currently calculating the inflation-adjusted future
                    value of this cost for you.
                  </Text>
                </div>
              </Section>

              <Text className='text-muted-foreground text-base leading-7 mb-8'>
                Our wealth managers are creating a customized investment roadmap
                to help you bridge the gap between your current savings and the
                future corpus required. We will reach out within 24-48 business
                hours to discuss your results.
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
                Interested in tax-efficient ways to save for {childName}? You
                can find resources on our{' '}
                <Link className='text-[#556cd6]' href='https://ascentwealth.in'>
                  Family Wealth Portal
                </Link>{' '}
                or reply to this email for immediate assistance.
              </Text>

              <Text className='text-background font-semibold text-base mt-8'>
                Wishing your family the very best,
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
                Wedding Planning Calculator.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

WeddingCalculationEmail.PreviewProps = {
  name: 'John Doe',
  childName: 'Jane',
  childAge: 5,
  inflationRate: 6,
  existingInvestmentRate: 8,
  currentCost: '20000',
  currentInvestment: '5000',
  marriageAge: 30,
  returnOnNewInvestment: 10,
} as WeddingCalculatorValues;

export default WeddingCalculationEmail;
