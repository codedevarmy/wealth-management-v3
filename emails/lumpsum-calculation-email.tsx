import { LumpSumCalculatorValues } from '@/lib/zod.schemas';
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

export const LumpSumCalculationEmail = (props: LumpSumCalculatorValues) => {
  const { name, investmentAmount, noOfYears, expectedReturn } = props;

  return (
    <Html>
      <Head />
      <Tailwind config={tailwindConfig}>
        <Body className='bg-foreground font-sans py-10'>
          <Preview>
            Your Lumpsum Investment projection from Ascent Wealth is ready.
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
                  Ascent Wealth Lumpsum Calculator
                </strong>
                . We&apos;ve received your investment parameters and our team is
                ready to help you optimize your wealth growth.
              </Text>

              <Section className='bg-accent p-6 mb-8 border border-solid border-accent-foreground/50'>
                <Text className='m-0 text-primary font-semibold mb-2 text-sm uppercase tracking-wide'>
                  Calculation Input Summary
                </Text>
                <div className=''>
                  <Text className='mb-px text-muted-background text-sm'>
                    • Principal Amount:{' '}
                    <strong className={'text-background'}>
                      ₹{Number(investmentAmount).toLocaleString('en-IN')}
                    </strong>
                  </Text>
                  <Text className='mb-px text-muted-background text-sm'>
                    • Duration:{' '}
                    <strong className={'text-background'}>
                      {noOfYears} Years
                    </strong>
                  </Text>
                  <Text className='mb-px text-muted-background text-sm'>
                    • Expected Return:{' '}
                    <strong className={'text-background'}>
                      {expectedReturn}% p.a.
                    </strong>
                  </Text>
                </div>
              </Section>

              <Text className='text-muted-foreground text-base leading-7 mb-8'>
                Compounding works best with a disciplined strategy. One of our
                senior wealth managers will reach out within 24 hours to provide
                a comprehensive analysis of these projections and discuss
                tax-efficient investment avenues.
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
                Ready to take the next step? You can explore our{' '}
                <Link className='text-[#556cd6]' href='https://ascentwealth.in'>
                  Market Insights
                </Link>{' '}
                or prepare any questions for our upcoming call.
              </Text>

              <Text className='text-background font-semibold text-base mt-8'>
                To your growing wealth,
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
                You received this email because you performed a calculation on
                the Ascent Wealth portal.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

LumpSumCalculationEmail.PreviewProps = {
  name: 'Alice Smith',
  investmentAmount: '500000',
  noOfYears: 10,
  expectedReturn: 10,
} as LumpSumCalculatorValues;

export default LumpSumCalculationEmail;
