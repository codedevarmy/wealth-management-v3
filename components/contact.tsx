import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from 'lucide-react';
import Link from 'next/link';
import ContactForm from './forms/contact-form';

export default function Contact() {
  return (
    <div
      id='contact-us'
      className='min-h-screen flex items-center justify-center py-16'>
      <div className='w-full max-w-(--breakpoint-xl) mx-auto px-6 xl:px-0'>
        <b className='text-muted-foreground uppercase font-semibold text-sm'>
          Contact Us
        </b>
        <h2 className='mt-3 text-3xl md:text-4xl font-semibold tracking-tight'>
          Chat with our friendly team!
        </h2>
        <p className='mt-3 text-base sm:text-lg text-muted-foreground'>
          We&apos;d love to hear from you. Please fill out this form or shoot us
          an email.
        </p>
        <div className='mt-16 flex flex-col lg:flex-row gap-16 md:gap-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:col-span-2 *:border *:p-6 *:bg-background gap-1 border p-1 bg-muted max-w-3xl mx-auto w-full'>
            <div>
              <div className='h-12 w-12 flex items-center justify-center bg-foreground/5 dark:bg-foreground/10 text-foreground border border-foreground/3 rounded-xl'>
                <MailIcon />
              </div>
              <h3 className='mt-6 font-semibold text-xl'>Email</h3>
              <p className='my-2.5 text-muted-foreground'>
                Our friendly team is here to help.
              </p>
              <Link
                className='font-medium text-primary'
                href='mailto:info@ascentwealth.in'>
                info@ascentwealth.in
              </Link>
            </div>
            <div>
              <div className='h-12 w-12 flex items-center justify-center bg-foreground/5 dark:bg-foreground/10 text-foreground border border-foreground/3 rounded-xl'>
                <MessageCircle />
              </div>
              <h3 className='mt-6 font-semibold text-xl'>Live chat</h3>
              <p className='my-2.5 text-muted-foreground'>
                Our friendly team is here to help.
              </p>
              <Link
                target='_blank'
                className='font-medium text-primary'
                href='https://api.whatsapp.com/send/?phone=919841013668&text&type=phone_number&app_absent=0'>
                Start new chat
              </Link>
            </div>
            <div>
              <div className='h-12 w-12 flex items-center justify-center bg-foreground/5 dark:bg-foreground/10 text-foreground border border-foreground/3 rounded-xl'>
                <MapPinIcon />
              </div>
              <h3 className='mt-6 font-semibold text-xl'>Office</h3>
              <p className='my-2.5 text-muted-foreground'>
                Come say hello at our office HQ.
              </p>
              <Link
                className='font-medium text-primary'
                href='https://www.google.com/maps/place/Thoraipakkam,+Tamil+Nadu+600097/@13.5126456,79.7806643,103588m/data=!3m1!1e3!4m6!3m5!1s0x3a525cfbde1d0251:0xcafd9a078a3c9270!8m2!3d12.9416037!4d80.2362096!16s%2Fm%2F0287fjs?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D'
                target='_blank'>
                Thoraipakkam, Chennai, Tamilnadu <br /> 600097, India
              </Link>
            </div>
            <div>
              <div className='h-12 w-12 flex items-center justify-center bg-foreground/5 dark:bg-foreground/10 text-foreground border border-foreground/3 rounded-xl'>
                <PhoneIcon />
              </div>
              <h3 className='mt-6 font-semibold text-xl'>Phone</h3>
              <p className='my-2.5 text-muted-foreground'>
                Mon-Fri from 8am to 5pm.
              </p>
              <Link
                className='font-medium text-primary'
                href='tel:+917305953668'>
                +91 7305953668
              </Link>
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
