"use client";
import { useState } from "react";

interface Props {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  fallbackText?: string;
  priority?: boolean;
}

export default function ImageWithFallback({
  src,
  alt,
  fill,
  width,
  height,
  className = "",
  fallbackText,
  priority = false,
}: Props) {
  const [error, setError] = useState(false);
  const resolvedSrc = src;

  if (error) {
    return (
      <div
        className={`art-placeholder ${className} ${fill ? "absolute inset-0" : ""}`}
        style={!fill && width && height ? { width, height } : undefined}
      >
        <span className="text-xs font-medium text-[#666] text-center leading-relaxed max-w-[80%]">
          {fallbackText || alt}
        </span>
      </div>
    );
  }

  if (fill) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={resolvedSrc}
        alt={alt}
        className={`object-cover w-full h-full ${className}`}
        onError={() => setError(true)}
        loading={priority ? "eager" : "lazy"}
        style={{ position: "absolute", inset: 0 }}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={resolvedSrc}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={`object-cover ${className}`}
      onError={() => setError(true)}
      loading={priority ? "eager" : "lazy"}
    />
  );
}
