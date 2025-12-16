"use client";
import React from "react";
import { cn } from "../../lib/utils";

interface DisplayCardProps {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  className?: string;
  tags?: string[];
  href?: string;
  meta?: string;
}

export const DisplayCard = ({
  title,
  description,
  image,
  icon,
  className,
  tags,
  href,
  meta,
}: DisplayCardProps) => {
  const CardWrapper = href ? "a" : "div";
  const cardProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <CardWrapper
      {...cardProps}
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "bg-[var(--color-card)] border border-[var(--color-border)]",
        "transition-colors duration-200 hover:border-[rgba(91,95,199,0.35)]",
        "hover:shadow-[0_10px_28px_rgba(0,0,0,0.28)]",
        className
      )}
    >
      {/* Background Image Layer */}
      {image && (
        <div className="relative h-40 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            style={{ filter: "saturate(0.95) contrast(1.02)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(21,28,37,1), rgba(21,28,37,0.4) 60%, rgba(0,0,0,0.15))",
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative p-6">
        {/* Icon */}
        {icon && (
          <div className="mb-4" style={{ color: "var(--color-accent)" }}>
            {icon}
          </div>
        )}

        {/* Meta */}
        {meta && (
          <div
            className="text-[11px] font-semibold uppercase tracking-wider mb-3"
            style={{ color: "var(--color-text-muted)" }}
          >
            {meta}
          </div>
        )}

        {/* Title */}
        <h3
          className="text-lg font-semibold mb-2"
          style={{ color: "var(--color-text)" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-sm mb-4 line-clamp-4"
          style={{ color: "var(--color-text-muted)" }}
        >
          {description}
        </p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs rounded-full border"
                style={{
                  backgroundColor: "var(--color-accent-soft)",
                  borderColor: "rgba(91,95,199,0.18)",
                  color: "var(--color-text)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </CardWrapper>
  );
};

export const DisplayCardGrid = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        className
      )}
    >
      {children}
    </div>
  );
};

// Stacked Card Variant
export const StackedCard = ({
  title,
  description,
  image,
  className,
}: {
  title: string;
  description: string;
  image?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden group cursor-pointer",
        className
      )}
      style={{ gridArea: "stack" }}
    >
      {/* Background Image */}
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
      )}

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col justify-end p-8 text-white">
        <h3 className="text-3xl font-bold mb-2 transform transition-transform group-hover:translate-y-[-4px]">
          {title}
        </h3>
        <p className="text-slate-300 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {description}
        </p>
      </div>
    </div>
  );
};
