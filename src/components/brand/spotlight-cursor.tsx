"use client";

import { useEffect, useState } from "react";

export function SpotlightCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    function onMove(event: MouseEvent) {
      setPos({ x: event.clientX, y: event.clientY });
    }
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-0 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,166,107,0.16),rgba(201,166,107,0.03),transparent_70%)] blur-2xl transition-transform duration-300 md:block"
      style={{ left: pos.x, top: pos.y }}
      aria-hidden
    />
  );
}
