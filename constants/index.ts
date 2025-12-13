import {
  IconBeach,
  IconChartInfographic,
  IconConfetti,
  IconMathSymbols,
  IconTimeDuration45,
  IconTimeline,
} from '@tabler/icons-react';

export const navlinks = [
  {
    id: crypto.randomUUID(),
    label: 'Home',
    href: '#home',
  },
  {
    id: crypto.randomUUID(),
    label: 'Planning',
    href: '#planning',
  },
  {
    id: crypto.randomUUID(),
    label: 'Services',
    href: '#services',
  },
  {
    id: crypto.randomUUID(),
    label: 'Blogs',
    href: '#blogs',
  },
  {
    id: crypto.randomUUID(),
    label: 'Calaculators',
    href: '#calaculators',
  },
  {
    id: crypto.randomUUID(),
    label: 'Free Consultation',
    href: '#free-consultation',
  },
  {
    id: crypto.randomUUID(),
    label: 'Faqs',
    href: '#faqs',
  },
  {
    id: crypto.randomUUID(),
    label: 'Contact Us',
    href: '#contact-us',
  },
];

export const footerLinks = {
  products: [
    {
      id: crypto.randomUUID(),
      label: 'Mutual Funds',
      href: '#',
    },
    {
      id: crypto.randomUUID(),
      label: 'Life and Health Insurance',
      href: '#',
    },
    {
      id: crypto.randomUUID(),
      label: 'Corporate FDs, Bonds and NCDs',
      href: '#',
    },
    {
      id: crypto.randomUUID(),
      label: 'Estate Planning',
      href: '#',
    },
    {
      id: crypto.randomUUID(),
      label: 'Equity - De-mat Accounts',
      href: '#',
    },
    {
      id: crypto.randomUUID(),
      label: 'Goal Based Financial Planning',
      href: '#',
    },
  ],
  contactUs: [
    {
      id: crypto.randomUUID(),
      label: '+91 7305953668',
      href: '+91 7305953668',
    },
    {
      id: crypto.randomUUID(),
      label: 'ascentwealth.invest@gmail.com',
      href: 'ascentwealth.invest@gmail.com',
    },
    {
      id: crypto.randomUUID(),
      label: 'Thoraipakkam, Chennai,Tamilnadu - 600097, India',
      href: '#',
    },
  ],
  followUs: [
    {
      id: crypto.randomUUID(),
      label: 'bi bi-facebook',
      href: 'https://www.facebook.com/ascentwealth.mf',
    },
    // {
    //   id: crypto.randomUUID(),
    //   label: 'bi bi-twitter-x"',
    //   href: '#',
    // },
    {
      id: crypto.randomUUID(),
      label: 'bi bi-instagram',
      href: 'https://www.instagram.com/ascent.wealth',
    },
    {
      id: crypto.randomUUID(),
      label: 'bi bi-youtube',
      href: 'https://www.youtube.com/channel/UC1KDPVsTcCbihC9xDcP-ZWQ/featured',
    },
    {
      id: crypto.randomUUID(),
      label: 'bi bi-whatsapp',
      href: 'https://api.whatsapp.com/send/?phone=919841013668&text&type=phone_number&app_absent=0',
    },
    {
      id: crypto.randomUUID(),
      label: 'bi bi-linkedin',
      href: 'https://www.linkedin.com/in/kannanrangaswamy-39761b8b/',
    },
  ],
  gallery: [
    {
      id: crypto.randomUUID(),
      label: '',
      href: '#',
    },
    {
      id: crypto.randomUUID(),
      label: '',
      href: '#',
    },
    {
      id: crypto.randomUUID(),
      label: '',
      href: '#',
    },
    {
      id: crypto.randomUUID(),
      label: '',
      href: '#',
    },
    {
      id: crypto.randomUUID(),
      label: '',
      href: '#',
    },
    {
      id: crypto.randomUUID(),
      label: '',
      href: '#',
    },
  ],
  useFullLinks: [
    {
      id: crypto.randomUUID(),
      label: 'Important Links',
      href: '#',
    },
    {
      id: crypto.randomUUID(),
      label: 'Disclaimer',
      href: '#',
    },
    {
      id: crypto.randomUUID(),
      label: 'Disclosure',
      href: '#',
    },
    {
      id: crypto.randomUUID(),
      label: 'Privacy Policy',
      href: '#',
    },
    {
      id: crypto.randomUUID(),
      label: 'SID/SAI/KIM',
      href: '#',
    },
    {
      id: crypto.randomUUID(),
      label: 'Code of Conduct',
      href: '#',
    },
    {
      id: crypto.randomUUID(),
      label: 'SEBI Circulars',
      href: '#',
    },
    {
      id: crypto.randomUUID(),
      label: 'AMFI Risk Factors',
      href: '#',
    },
  ],
};

export const calculators = [
  {
    icon: IconMathSymbols,
    title: 'Education Calculator',
    description:
      'Calculate education costs, plan for future learning expenses, and compare financial aid options with ease.',
  },
  {
    icon: IconChartInfographic,
    title: 'Lumpsum Calculator',
    description:
      'Calculate your total investment returns, assess risks, and optimize your portfolio for maximum gains.',
  },
  {
    icon: IconTimeline,
    title: 'SIP Calculator',
    description:
      'Plan your investments with our SIP Calculator, allowing you to estimate future returns and make informed financial decisions effortlessly.',
  },
  {
    icon: IconTimeDuration45,
    title: 'Retirement Planning',
    description:
      'Plan your retirement with our comprehensive tools, ensuring you have the resources needed for a fulfilling future.',
  },
  {
    icon: IconConfetti,
    title: 'Wedding Calculator',
    description:
      'Plan your wedding budget effectively, manage expenses, and ensure a memorable celebration without financial stress.',
  },
  {
    icon: IconBeach,
    title: 'Vacation Calculator',
    description:
      'Estimate your vacation expenses, budget effectively, and ensure a stress-free getaway with our Vacation Calculator.',
  },
] as const;

export type Calculator = (typeof calculators)[number];

export const consultationTypes = [
  'retirement-planning',
  'children-higher-education',
  'children-wedding',
  'dream-car',
  'dream-vacation',
  'other',
] as const;

// extract the unions of the consultation types
export type ConsultationType = (typeof consultationTypes)[number];

export const seo = {
  title:
    'AMFI Registered Mutual Funds Distributor and Your Path to Prosperity Starts Here',
  description:
    'Ascent Wealth is your trusted MF advisor, offering a progressive plan for a secured wealth creation. We specialize in Mutual Funds, Fixed Income, Insurance, NCDs, PMS and more, helping you achieve your financial goals with expert guidance.  Contact Us +91 7305953668',
  keywords: [
    'Mutual Funds Advisor in Chennai',
    'Best Financial Advisor Chennai',
    'AMFI Registered Mutual Funds Distributor',
    'Chennai Mutual Fund Services',
    'Wealth Creation Advisor Chennai',
    'Best Mutual Funds Consultant Chennai',
    'Financial Planning Services Chennai',
    'PMS Services Chennai',
    'Fixed Income Investments Chennai',
    'Insurance Advisor Chennai',
    'NCD Investment Options Chennai',
    'Financial Goals Planning Chennai',
    'Top Mutual Funds Distributor Chennai',
    'Expert Mutual Fund Guidance Chennai',
    'Chennai Wealth Management Services',
    'Chennai Financial Advisor for Mutual Funds',
    'Investment Advisory Services Chennai',
    'Best PMS Provider Chennai',
    'Reliable Financial Planner Chennai',
    'Chennai Insurance Consultancy',
    'Wealth Management Consultant Chennai',
    'AMFI Registered Financial Advisor Chennai',
    'Chennai Investments and Insurance Advisor',
    'Comprehensive Wealth Creation Plan Chennai',
    "Chennai's Top Financial Planning Company",
    'Progressive Investment Strategy Chennai',
    'Best NCD Investment Consultant Chennai',
  ],
};
