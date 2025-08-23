"use client";
import { useEffect, useState } from "react";

export default function TypewriterHeadline({
  phrase = "СИСТЕМА ЛЁГКОГО КОНТЕНТА",
  speed = 100,
  className = ""
}: {
  phrase?: string;
  speed?: number;
  className?: string;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= phrase.length) {
        setDisplayedText(phrase.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [phrase, speed]);

  return (
    <div className="text-left mx-auto max-w-3xl">
      <h1 className={`mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight headline-lepka ${className}`}>
        {displayedText}
        <span 
          className="inline-block w-0.5 h-[1em] ml-1"
          style={{
            animation: 'blink 1s infinite',
            backgroundColor: 'currentColor'
          }}
        >
        </span>
      </h1>
    </div>
  );
}