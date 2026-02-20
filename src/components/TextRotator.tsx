"use client";

import { useState, useEffect } from "react";

interface TextRotatorProps {
  texts: string[];
  interval?: number;
  className?: string;
}

export default function TextRotator({
  texts,
  interval = 3000,
  className = "",
}: TextRotatorProps) {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setIsAnimating(false);
      }, 400);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <span className={`inline-block relative overflow-hidden ${className}`}>
      <span
        className={`inline-block transition-all duration-400 ease-out ${
          isAnimating
            ? "translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        {texts[index]}
      </span>
    </span>
  );
}
