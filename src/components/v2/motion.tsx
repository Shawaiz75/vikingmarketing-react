"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useInView, useReducedMotion, useMotionValue, animate } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

/* Scroll reveals are progressive enhancement: the static HTML is fully visible
   (no-JS, crawlers, reduced motion). A `js` class on <html> opts into the
   hidden initial state, and IntersectionObserver flips `.is-in` once. */

function useRevealRef<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-in");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/** Scroll-triggered fade + rise. Purpose: establish reading order as sections enter. */
export function Rise({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRevealRef<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`v2-reveal ${className}`}
      style={delay ? ({ "--v2-delay": `${delay}s` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}

/** Staggered entrance for card groups. Purpose: guide the eye across a set, one item at a time. */
export function Stagger({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  const ref = useRevealRef<HTMLDivElement>();
  return (
    <div ref={ref} className={`v2-stagger ${className}`}>
      {children}
    </div>
  );
}

/** Child of <Stagger> — kept as a plain wrapper; the stagger delay comes from CSS nth-child. */
export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`v2-stagger-item ${className}`}>{children}</div>;
}

/** Count-up number. Purpose: make the cost-of-missed-calls stats land as motion, not decoration.
 *  SSR/no-JS/reduced motion all render the final value. */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.4,
  className,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const format = (v: number) => `${prefix}${v.toFixed(decimals)}${suffix}`;
  const [text, setText] = useState(format(to));
  const started = useRef(false);

  useEffect(() => {
    if (reduce || !inView || started.current) return;
    started.current = true;
    setText(format(0));
    const controls = animate(mv, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => setText(format(v)),
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
