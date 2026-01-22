import { SIPCalculatorValues } from '@/lib/zod.schemas';
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

export const SIPCalculationEmail = (props: SIPCalculatorValues) => {
  const { name, noOfYears, expectedReturn, sipAmount } = props;

  return (
    <Html>
      <Head />
      <Tailwind config={tailwindConfig}>
        <Body className='bg-foreground font-sans py-10'>
          <Preview>
            Your SIP Investment roadmap from Ascent Wealth is ready.
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
                  Ascent Wealth SIP Calculator
                </strong>
                . Taking the first step toward disciplined investing is the best
                way to secure your financial future.
              </Text>

              <Section className='bg-accent p-6 mb-8 border border-solid border-accent-foreground/50'>
                <Text className='m-0 text-primary font-semibold mb-3 text-sm uppercase tracking-wide'>
                  Your Investment Snapshot
                </Text>
                <div className=''>
                  <Text className='mb-px text-muted-background text-sm'>
                    • Monthly SIP:{' '}
                    <strong className={'text-background'}>
                      ₹{Number(sipAmount).toLocaleString('en-IN')}
                    </strong>
                  </Text>
                  <Text className='mb-px text-muted-background text-sm'>
                    • Investment Period:{' '}
                    <strong className={'text-background'}>
                      {noOfYears} Years
                    </strong>
                  </Text>
                  <Text className='mb-px text-muted-background text-sm'>
                    • Targeted Return:{' '}
                    <strong className={'text-background'}>
                      {expectedReturn}% p.a.
                    </strong>
                  </Text>
                </div>
              </Section>

              <Text className='text-muted-foreground text-base leading-7 mb-8'>
                The power of compounding is most effective when started early.
                One of our senior wealth advisors will reach out to you within
                24-48 business hours to help you select the right funds that
                align with this strategy.
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
                Want to learn more about market volatility and SIPs? Check out
                our latest{' '}
                <Link className='text-[#556cd6]' href='https://ascentwealth.in'>
                  Investment Insights
                </Link>{' '}
                or simply reply to this email to get started.
              </Text>

              <Text className='text-background font-semibold text-base mt-8'>
                To your future prosperity,
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
                This is an automated response to your SIP calculation on the
                Ascent Wealth website.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

SIPCalculationEmail.PreviewProps = {
  name: 'John Doe',
  sipAmount: '5000',
  noOfYears: 10,
  expectedReturn: 12,
} as SIPCalculatorValues;

export default SIPCalculationEmail;
