"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

export default function AnimatedSection({
  children,
  variants,
  className,
  delay = 0,
}: {
  children: ReactNode;
  variants: Variants;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
