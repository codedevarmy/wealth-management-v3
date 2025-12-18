'use client';

import { useDevtoolsBlocker } from '@/hooks/use-devtools-blocker';

export function DevtoolsBlocker() {
  useDevtoolsBlocker();
  return null;
}
