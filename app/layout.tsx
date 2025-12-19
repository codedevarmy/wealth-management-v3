import { HoverFooter } from '@/components/hover-footer';
import { DevtoolsBlocker } from '@/components/shared/devtools-blocker';
import Navbar from '@/components/shared/navbar';
import { Toaster } from '@/components/ui/sonner';
import { seo } from '@/constants';
import { ThemeProvider } from '@/providers/theme-provider';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  applicationName: 'Ascent Wealth App',
  authors: [{ name: 'Abhijit K.', url: 'https://abhijitdev.tech' }],
  generator: 'Next.js',
  referrer: 'origin',
  creator: 'Abhijit K.',
  publisher: 'Ascent Wealth',
  metadataBase: new URL('https://wealth-mgmt-next.netlify.app'),
  openGraph: {
    determiner: 'the',
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Ascent Wealth',
      },
    ],
    phoneNumbers: ['+917305953668'],
    emails: ['ascentwealth.invest@gmail.com'],
    siteName: 'Ascent Wealth',
    locale: 'en_US',
    alternateLocale: ['en-IN', 'hi-IN'],
    type: 'website',
    videos: ['https://www.youtube.com/embed/RKicpV2qvZU'],
    url: 'https://wealth-mgmt-next.netlify.app',
    countryName: 'India',
    ttl: 86400,
  },
  abstract:
    'Ascent Wealth - Your Trusted Partner in Financial Growth and Investment Solutions.',
  category: 'Finance',
  classification: 'Business',
};

const isDev = process.env.NODE_ENV === 'development';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' data-scroll-behavior='smooth' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          {!isDev ? <DevtoolsBlocker /> : null}
          <Navbar />
          {children}
          <HoverFooter />
          <Toaster richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
