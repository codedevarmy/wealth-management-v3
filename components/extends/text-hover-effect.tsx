'use client';

import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';

type TextHoverEffectProps = {
  text: string;
  duration?: number;
  automatic?: boolean;
  className?: string;
};

export default function TextHoverEffect(props: TextHoverEffectProps) {
  const { text, duration, className } = props;
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: '50%', cy: '50%' });

  const { ref, inView } = useInView({
    root: null,
    rootMargin: '20px',
    threshold: 0,
    triggerOnce: false,
  });

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <div ref={ref} className='lg:flex hidden aspect-36/9'>
      <svg
        ref={svgRef}
        width='100%'
        height='100%'
        viewBox='0 0 300 100'
        xmlns='http://www.w3.org/2000/svg'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
        style={{ pointerEvents: inView ? 'auto' : 'none' }}
        className={cn(
          'select-none uppercase cursor-pointer transition-opacity duration-300',
          inView ? 'opacity-100' : 'opacity-50',
          className
        )}>
        <defs>
          <linearGradient
            id='textGradient'
            gradientUnits='userSpaceOnUse'
            cx='50%'
            cy='50%'
            r='25%'>
            {hovered && inView && (
              <>
                <stop offset='0%' stopColor='#eab308' />
                <stop offset='25%' stopColor='#ef4444' />
                <stop offset='50%' stopColor='#80eeb4' />
                <stop offset='75%' stopColor='#06b6d4' />
                <stop offset='100%' stopColor='#8b5cf6' />
              </>
            )}
          </linearGradient>

          <motion.radialGradient
            id='revealMask'
            gradientUnits='userSpaceOnUse'
            r='20%'
            initial={{ cx: '50%', cy: '50%' }}
            animate={inView ? maskPosition : { cx: '50%', cy: '50%' }}
            transition={{ duration: duration ?? 0, ease: 'easeOut' }}>
            <stop offset='0%' stopColor='white' />
            <stop offset='100%' stopColor='black' />
          </motion.radialGradient>
          <mask id='textMask'>
            <rect
              x='0'
              y='0'
              width='100%'
              height='100%'
              fill='url(#revealMask)'
            />
          </mask>
        </defs>
        <text
          x='50%'
          y='50%'
          textAnchor='middle'
          dominantBaseline='middle'
          strokeWidth='0.3'
          className={cn(
            'fill-transparent stroke-primary font-[helvetica] text-3xl font-bold'
          )}
          style={{ opacity: hovered && inView ? 0.7 : 0 }}>
          {text}
        </text>
        <motion.text
          key={inView ? 'visible' : 'hidden'}
          x='50%'
          y='50%'
          textAnchor='middle'
          dominantBaseline='middle'
          strokeWidth='0.3'
          className='fill-transparent stroke-primary font-[helvetica] text-3xl font-bold 
        dark:stroke-primary'
          initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
          animate={
            inView
              ? { strokeDashoffset: 0, strokeDasharray: 1000 }
              : { strokeDashoffset: 1000, strokeDasharray: 1000 }
          }
          transition={{
            duration: 4,
            ease: 'easeInOut',
          }}>
          {text}
        </motion.text>
        <text
          x='50%'
          y='50%'
          textAnchor='middle'
          dominantBaseline='middle'
          stroke='url(#textGradient)'
          strokeWidth='0.3'
          mask='url(#textMask)'
          className='fill-transparent font-[helvetica] text-3xl font-bold'
          style={{ opacity: inView ? 1 : 0 }}>
          {text}
        </text>
      </svg>
    </div>
  );
}
