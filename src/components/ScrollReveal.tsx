// src/components/ScrollReveal.tsx
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
  depth?: number;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  depth = 1,
}: ScrollRevealProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDir, setScrollDir] = useState<'up' | 'down'>('down');

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollDir(currentScroll > lastScrollY ? 'down' : 'up');
      setLastScrollY(currentScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // Trigger animation only when element comes into view AND user is scrolling down
    if (inView && scrollDir === 'down') {
      controls.start('visible');
    }
  }, [controls, inView, scrollDir]);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
