"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type HoverBorderGradientProps = {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
  as?: React.ElementType;
  duration?: number;
};

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "div",
  duration = 2,
}: HoverBorderGradientProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative inline-flex overflow-visible rounded-full p-[1px] transition-all duration-300",
        containerClassName
      )}
    >
      {hovered && (
        <div
          className="absolute inset-0 rounded-full opacity-100 animate-spin"
          style={{
            background:
              "conic-gradient(from 0deg, #fb923c, #f59e0b, #fbbf24, #f59e0b, #fb923c)",
            animation: `spin ${duration}s linear infinite`,
          }}
        />
      )}
      <div
        className={cn(
          "relative z-10 inline-flex items-center justify-center rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700 transition-all duration-300",
          hovered && "bg-orange-50",
          className
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
