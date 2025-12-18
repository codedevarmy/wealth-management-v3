'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '../ui/skeleton';

export const LazyTextHoverEffect = dynamic(
  () => import('./text-hover-effect').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <Skeleton className='w-full h-24 lg:h-32' />,
  }
);
