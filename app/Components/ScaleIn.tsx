"use client";

import { motion } from "framer-motion";

export default function ScaleIn({
  children,
  index,
}: {
  children: React.ReactNode;
  index?: number;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index ? index / 60 : 0 }}
    >
      {children}
    </motion.span>
  );
}
