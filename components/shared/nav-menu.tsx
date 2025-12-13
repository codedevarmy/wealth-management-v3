'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { navlinks } from '@/constants';
import { useHash } from '@/hooks/use-read-hash';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { type ComponentProps } from 'react';

export default function NavMenu(props: ComponentProps<typeof NavigationMenu>) {
  const hash = useHash();

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className='space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start'>
        {navlinks.map((link) => (
          <NavigationMenuItem key={link.id}>
            <NavigationMenuLink
              asChild
              className={cn(
                "data-[active=true]:focus:bg-destructive data-[active=true]:hover:bg-destructive data-[active=true]:bg-destructive data-[active=true]:text-accent-foreground hover:bg-primary hover:text-accent-foreground focus:bg-primary focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
                // 'data-[active=true]:focus:border data-[active=true]:hover:border data-[active=true]:border data-[active=true]:border-accent/50 border border-transparent'
                // 'data-[active=true]:focus:border-b-2 data-[active=true]:hover:border-b-2 data-[active=true]:border-b-2 data-[active=true]:border-primary border-b-2 hover:border-b-2 focus:border-b-2 border-primary'
                hash === `#${link.href.split('#')[1]}`
                  ? 'data-[active=true]=true'
                  : ''
              )}>
              <Link
                scroll={true}
                href={link.href}
                // className={cn(
                //   'data-[active=true]:focus:border-b data-[active=true]:hover:border-b data-[active=true]:border-b data-[active=true]:border-accent/50 border-b'
                // )}
              >
                {link.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
