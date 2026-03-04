"use client";
import Image from "next/image";
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
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${className}`}
        onError={() => setError(true)}
        priority={priority}
        unoptimized
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 800}
      height={height || 600}
      className={`object-cover ${className}`}
      onError={() => setError(true)}
      priority={priority}
      unoptimized
    />
  );
}
