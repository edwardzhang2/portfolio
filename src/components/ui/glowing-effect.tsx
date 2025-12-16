"use client";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const GlowingEffect = ({
  children,
  className,
  glowColor = "rgba(91, 95, 199, 0.22)",
  borderRadius = "24px",
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  borderRadius?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={cn("relative group", className)}
      style={{ borderRadius }}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          borderRadius,
          background: `radial-gradient(520px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 42%)`,
        }}
        animate={{
          opacity: isHovering ? 1 : 0,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export const GlowingCard = ({
  children,
  className,
  title,
  description,
  icon,
  glowColor,
}: {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  glowColor?: string;
}) => {
  return (
    <GlowingEffect className={cn("p-6", className)} glowColor={glowColor}>
      <div className="bg-slate-900/90 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
        {icon && <div className="mb-4 text-indigo-400">{icon}</div>}
        {title && (
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        )}
        {description && <p className="text-slate-400 mb-4">{description}</p>}
        {children}
      </div>
    </GlowingEffect>
  );
};
