"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AmbientEffects() {
  const [cursor, setCursor] = useState({ x: -200, y: -200 });

  useEffect(() => {
    function onMove(event: MouseEvent) {
      setCursor({ x: event.clientX, y: event.clientY });
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed -top-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-1/3 -right-24 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl"
        animate={{ x: [0, -90, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed h-40 w-40 rounded-full bg-cyan-300/10 blur-2xl"
        animate={{ x: cursor.x - 80, y: cursor.y - 80 }}
        transition={{ type: "spring", stiffness: 90, damping: 20, mass: 0.6 }}
      />
    </>
  );
}
