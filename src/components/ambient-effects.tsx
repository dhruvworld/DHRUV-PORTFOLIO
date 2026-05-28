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
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-[8%] top-[22%] h-40 w-64 rounded-2xl border border-cyan-300/20 bg-cyan-200/5"
        animate={{ rotateX: [18, 24, 18], rotateY: [-10, -4, -10], y: [0, -10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed right-[10%] top-[58%] h-36 w-72 rounded-2xl border border-violet-300/20 bg-violet-200/5"
        animate={{ rotateX: [-18, -24, -18], rotateY: [12, 6, 12], y: [0, 12, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      />
    </>
  );
}
