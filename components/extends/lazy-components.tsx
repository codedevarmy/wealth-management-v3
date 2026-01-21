'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '../ui/skeleton';

export const LazyTextHoverEffect = dynamic(
  () => import('./text-hover-effect').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <Skeleton className='w-full h-24 lg:h-32' />,
  },
);

export const LazyPixelImage = dynamic(
  () => import('./pixel-image').then((mod) => mod.PixelImage),
  {
    ssr: false,
    loading: () => (
      <Skeleton className='w-full h-full aspect-4/3 basis-1/2 animate-pulse' />
    ),
  },
);

export const LazyPixelTransition = dynamic(
  () => import('./pixel-transition').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <Skeleton className='w-full h-full aspect-square animate-pulse' />
    ),
  },
);
