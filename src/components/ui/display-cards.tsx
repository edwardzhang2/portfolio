"use client";
import React from "react";
import { cn } from "../../lib/utils";
import { theme } from "../../data/theme";

interface DisplayCardProps {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  className?: string;
  tags?: string[];
  link?: string;
  meta?: string;
}

export const DisplayCard = ({
  title,
  description,
  image,
  icon,
  className,
  tags,
  link,
  meta,
}: DisplayCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        "bg-[var(--color-card)] border border-[var(--color-border)]",
        "transition-all duration-200 hover:border-[rgba(107,127,255,0.45)] hover:transform hover:scale-[1.02]",
        "hover:shadow-[0_10px_28px_rgba(0,0,0,0.28)]",
        className
      )}
    >
      {/* Image on top - no gradient */}
      {image && (
        <div
          className="relative overflow-hidden bg-gray-50"
          style={{ aspectRatio: "16/9" }}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain p-3"
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

        {/* Meta and Link */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1">
            {meta && (
              <div
                className="text-[11px] font-semibold uppercase tracking-wider"
                style={{ color: "var(--color-text-muted)" }}
              >
                {meta}
              </div>
            )}
          </div>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 p-1.5 rounded-lg hover:bg-gray-100 transition-all hover:scale-110 duration-200"
              style={{ color: theme.accentColor }}
              title="View project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
        </div>

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
                  borderColor: "rgba(107,127,255,0.22)",
                  color: "var(--color-text)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
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
