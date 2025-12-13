'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useSyncExternalStore } from 'react';

export function useHash() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const subscribe = (onStoreChange: () => void) => {
    const handleChange = () => onStoreChange();

    window.addEventListener('hashchange', handleChange);
    window.addEventListener('popstate', handleChange);

    return () => {
      window.removeEventListener('hashchange', handleChange);
      window.removeEventListener('popstate', handleChange);
    };
  };

  const getSnapshot = () => {
    if (typeof window === 'undefined') return '';
    return window.location.hash;
  };

  const hash = useSyncExternalStore(subscribe, getSnapshot, () => '');

  // Trigger re-render when Next.js navigation changes pathname/searchParams
  // This forces getSnapshot to re-evaluate
  return hash;
}
