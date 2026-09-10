"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Subtle spring lift on hover/focus, layered on top of a card's existing
 *  CSS hover states (border/color) rather than replacing them. */
export default function HoverLift({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ y: -2 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
