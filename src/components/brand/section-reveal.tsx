"use client";

import { motion } from "framer-motion";

export function SectionReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
