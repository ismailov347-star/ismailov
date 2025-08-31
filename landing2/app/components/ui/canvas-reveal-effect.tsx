"use client";
import { cn } from "@/lib/utils";
import React from "react";

export const CanvasRevealEffect = ({
  containerClassName,
  colors = ["#3b82f6", "#8b5cf6", "#06b6d4"],
  opacities = [0.1, 0.2, 0.3],
  animationSpeed = 3,
}: {
  containerClassName?: string;
  colors?: string[];
  opacities?: number[];
  animationSpeed?: number;
}) => {
  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {/* Анимированный градиент */}
      <div 
        className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
        style={{
          background: `linear-gradient(45deg, ${colors[0]}, ${colors[1]}, ${colors[2]})`,
          backgroundSize: '400% 400%',
          animation: `gradient-animation ${animationSpeed}s ease infinite`,
        }}
      />
      
      <style jsx>{`
        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      
      {/* Минималистичная тонкая рамка */}
      <div className="absolute inset-0 rounded-xl bg-gray-900/80 backdrop-blur-sm" />
      <div 
        className="absolute inset-0 rounded-xl border border-gray-600/30 transition-all duration-500 group-hover:border-gray-500/50"
        style={{
          boxShadow: `inset 0 0 20px ${colors[0]}${Math.round(opacities[0] * 255).toString(16).padStart(2, '0')}`,
        }}
      />
      
      {/* Тонкая анимированная подсветка */}
      <div 
        className="absolute inset-0 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{
          background: `linear-gradient(45deg, transparent, ${colors[0]}${Math.round(opacities[1] * 255).toString(16).padStart(2, '0')}, transparent)`,
          backgroundSize: '200% 200%',
          animation: `gradient-shift ${animationSpeed}s ease-in-out infinite`,
        }}
      />
      
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
};