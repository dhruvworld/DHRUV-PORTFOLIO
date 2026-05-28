"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_8%,rgba(201,166,107,0.12),transparent_42%),radial-gradient(circle_at_84%_84%,rgba(46,94,78,0.12),transparent_44%),linear-gradient(180deg,#F8F7F4_0%,#F5F3EF_100%)]" />
      <motion.div
        className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#c9a66b]/20 blur-[110px]"
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-16 bottom-24 h-96 w-96 rounded-full bg-[#2e5e4e]/18 blur-[120px]"
        animate={{ y: [0, -28, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,17,17,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(17,17,17,0.04)_1px,transparent_1px)] bg-[size:52px_52px] opacity-30" />
    </div>
  );
}
