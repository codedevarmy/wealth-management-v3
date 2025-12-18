import { Logo } from '@/components/shared/logo';
import NavMenu from '@/components/shared/nav-menu';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Menu } from 'lucide-react';
import { Separator } from '../ui/separator';

export const NavigationSheet = () => {
  return (
    <Sheet>
      <VisuallyHidden>
        <SheetTitle>Navigation Menu</SheetTitle>
      </VisuallyHidden>

      <SheetTrigger asChild>
        <Button variant='outline' size='icon' className='rounded-full'>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className='px-6 py-3'>
        <Logo />
        <Separator />
        <NavMenu orientation='vertical' className='[&>div]:h-full' />
      </SheetContent>
    </Sheet>
  );
};
