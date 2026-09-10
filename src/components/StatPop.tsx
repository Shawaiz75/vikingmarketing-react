"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Spring pop-in for a single stat figure as it scrolls into view. */
export default function StatPop({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className={className}
    >
      {children}
    </motion.p>
  );
}
