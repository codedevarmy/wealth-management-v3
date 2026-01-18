import { cn } from '@/lib/utils';
import React from 'react';

type BlockquoteProps = {
  children?: React.ReactNode;
  className?: string;
};

const Blockquote = ({ children, className }: BlockquoteProps) => {
  return (
    <div
      className={cn(
        "relative rounded-lg border-l-8 border-l-primary-700 bg-primary-500 py-5 pl-16 pr-5 font-sans text-lg italic leading-relaxed text-primary-500 before:absolute before:left-3 before:top-3 before:font-serif before:text-6xl before:text-primary-700 before:content-['“']",
        className,
      )}>
      {children}
    </div>
  );
};

const BlockquoteAuthor = ({ children, className }: BlockquoteProps) => {
  return (
    <p
      className={cn(
        'mt-5 pr-4 text-right font-bold not-italic text-primary-700',
        className,
      )}>
      {children}
    </p>
  );
};

export { Blockquote, BlockquoteAuthor };
