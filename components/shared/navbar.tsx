import NavMenu from '@/components/shared/nav-menu';
import { NavigationSheet } from '@/components/shared/navigation-sheet';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatedThemeToggler } from '../extends/animated-theme-toggler';
// import { ThemeModeToggle } from './theme-mode-toggler';

export default function Navbar() {
  return (
    <nav className='fixed z-50 top-6 inset-x-4 h-16 bg-transparent border max-w-(--breakpoint-xl) mx-auto rounded-full backdrop-blur-xl border-border/50 shadow-lg shadow-black/5'>
      <div className='h-full flex items-center justify-between mx-auto px-4'>
        <Link href='/' aria-label='Home'>
          <Image
            src='/ascent-wealth.svg'
            alt='logo'
            width={4800}
            height={1320}
            className={'w-auto h-12'}
          />
        </Link>

        {/* Desktop Menu */}
        <NavMenu className='hidden lg:block' />

        <div className='flex items-center gap-3'>
          {/* <ThemeModeToggle /> */}
          <AnimatedThemeToggler />
          <Link
            scroll={true}
            href='#contact-us'
            className={buttonVariants({
              variant: 'default',
              className: 'rounded-full!',
              size: 'sm',
            })}>
            Get a quote
          </Link>

          {/* Mobile Menu */}
          <div className='lg:hidden'>
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
}
