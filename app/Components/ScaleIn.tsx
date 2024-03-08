"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";

export default function ScaleIn({
  children,
  index,
  ariaLabel,
  className,
}: {
  children: React.ReactNode;
  index?: number;
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <LazyMotion features={domAnimation}>
      <m.span
        className={`flex flex-col gap-4 ${className}`}
        aria-label={ariaLabel}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index ? index / 60 : 0 }}
      >
        {children}
      </m.span>
    </LazyMotion>
  );
}
