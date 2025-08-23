"use client";
import { useEffect, useMemo, useState } from "react";

export default function CinematicHeadline({
  phrase = "СИСТЕМА ЛЁГКОГО КОНТЕНТА",
  baseDelay = 0,
  step = 200,
  className = ""
}: {
  phrase?: string;
  baseDelay?: number;
  step?: number;
  className?: string;
}) {
  const words = useMemo(() => phrase.split(" "), [phrase]);
  
  return (
    <div className="text-left mx-auto max-w-3xl">
      <h1 className={`mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight ${className}`}>
        {words.map((w, i) => (
          <Word key={i} text={w} delay={baseDelay + i * step} />
        ))}
      </h1>
    </div>
  );
}

function Word({ text, delay }: { text: string; delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);
  
  return (
    <span className="relative inline-block mr-2 align-baseline">
      <span
        className={`headline-lepka inline-block transition-opacity duration-700 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {text}
      </span>
    </span>
  );
}