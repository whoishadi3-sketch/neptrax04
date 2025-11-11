// src/components/ScrollReveal.tsx
import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade";
  delay?: number; // milliseconds
  depth?: number; // controls offset strength
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  depth = 1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("down");

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY.current + 2) {
        setScrollDir("down");
      } else if (current < lastScrollY.current - 2) {
        setScrollDir("up");
      }
      lastScrollY.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && scrollDir === "down") {
            setTimeout(() => setVisible(true), delay);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [scrollDir, delay]);

  // determine initial transform direction
  const baseOffset = 30 * (depth ?? 1);
  const transformStart =
    direction === "up"
      ? `translateY(${baseOffset}px)`
      : direction === "down"
      ? `translateY(-${baseOffset}px)`
      : direction === "left"
      ? `translateX(${baseOffset}px)`
      : direction === "right"
      ? `translateX(-${baseOffset}px)`
      : "none";

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate(0, 0)" : transformStart,
        transition: `all 0.8s cubic-bezier(0.23, 1, 0.32, 1)`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
