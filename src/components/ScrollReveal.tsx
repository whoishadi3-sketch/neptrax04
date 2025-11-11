// src/components/ScrollReveal.tsx
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number; // milliseconds
  depth?: number; // used for subtle perspective/parallax feel
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  depth = 1,
}: ScrollRevealProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 });
  const lastScrollYRef = useRef<number>(typeof window !== 'undefined' ? window.scrollY : 0);
  const [scrollDir, setScrollDir] = useState<'up' | 'down'>('down');
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Track scroll direction using a ref for last Y (avoids heavy re-renders)
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const last = lastScrollYRef.current ?? 0;
      if (current > last + 2) {
        // small threshold to avoid micro-jitter
        setScrollDir('down');
      } else if (current < last - 2) {
        setScrollDir('up');
      }
      lastScrollYRef.current = current;
    };

    // Use passive listener for performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Start animation only when element is in view AND user is scrolling down.
  useEffect(() => {
    if (prefersReducedMotion) {
      // If user prefers reduced motion, just show immediately without animation.
      controls.set('visible');
      return;
    }

    if (inView && scrollDir === 'down') {
      controls.start('visible');
    }
    // If inView false or user scrolling up, we do nothing (no re-trigger)
  }, [controls, inView, scrollDir, prefersReducedMotion]);

  const baseOffset = 36 * (depth ?? 1); // deeper = slightly larger offset

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? baseOffset : direction === 'down' ? -baseOffset : 0,
      x: direction === 'left' ? baseOffset : direction === 'right' ? -baseOffset : 0,
      scale: direction === 'fade' ? 0.985 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        delay: delay ? delay / 1000 : 0,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      style={{ perspective: Math.max(300, 100 * (depth ?? 1)) }}
    >
      {children}
    </motion.div>
  );
}
