"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(79,140,255,0.18),transparent_42%),radial-gradient(circle_at_82%_84%,rgba(123,97,255,0.16),transparent_44%),linear-gradient(180deg,#03040A_0%,#0B1020_100%)]" />
      <motion.div
        className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-brand-cyan/20 blur-[110px]"
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-16 bottom-24 h-96 w-96 rounded-full bg-brand-violet/20 blur-[120px]"
        animate={{ y: [0, -28, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:38px_38px] opacity-40" />
    </div>
  );
}
