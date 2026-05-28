"use client";

import { useState } from "react";

export function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [style, setStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
  });

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  }

  function handleLeave() {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
    });
  }

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={style}
      className={`transition-transform duration-200 will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
