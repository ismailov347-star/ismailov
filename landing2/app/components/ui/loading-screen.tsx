"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [stars, setStars] = useState<Array<{left: string, top: string}>>([]);
  const [particles, setParticles] = useState<Array<{left: string, top: string}>>([]);

  useEffect(() => {
    // Генерируем позиции только на клиенте
    setStars(Array.from({ length: 100 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    })));
    
    setParticles(Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    })));
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => {
            onComplete();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        >
          {/* Черный звездный фон */}
          <div className="absolute inset-0 bg-black">
            {/* Звезды */}
            <div className="absolute inset-0">
              {stars.map((star, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: star.left,
                    top: star.top,
                  }}
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    scale: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: Math.random() * 6 + 4,
                    repeat: Infinity,
                    delay: Math.random() * 4,
                  }}
                />
              ))}
            </div>
            

          </div>

          {/* Контент загрузки */}
          <div className="relative z-10 text-center text-white">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <h1 className="text-6xl font-bold text-white mb-4" style={{fontFamily: 'monospace, "Courier New", Courier'}}>
                LOADING
              </h1>
              <p className="text-xl text-gray-400" style={{fontFamily: 'monospace, "Courier New", Courier'}}>Preparing your experience...</p>
            </motion.div>

            {/* Прогресс бар */}
            <div className="w-96 mx-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-400" style={{fontFamily: 'monospace, "Courier New", Courier'}}>PROGRESS</span>
                <span className="text-sm text-gray-400" style={{fontFamily: 'monospace, "Courier New", Courier'}}>{Math.round(progress)}%</span>
              </div>
              
              {/* Рамка загрузки */}
              <div className="relative">
                <div className="w-full h-4 border-2 border-white bg-black">
                  <motion.div
                    className="h-full bg-white"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
                
                {/* Декоративные углы */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-white"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-white"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-white"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-white"></div>
              </div>
            </div>


          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}