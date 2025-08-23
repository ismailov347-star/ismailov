"use client";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
            setTimeout(() => onComplete?.(), 600);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div
      aria-hidden={done}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-soft/95 backdrop-blur-md transition-opacity duration-600 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-[260px] text-center">
        <div className="text-subtle/80 mb-3 text-sm tracking-widest animate-pulseSoft">
          Loading {Math.round(progress)}%
        </div>
        <div className="h-1.5 w-full rounded-full bg-base/60 overflow-hidden">
          <div 
            className="h-full bg-accent rounded-full transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}