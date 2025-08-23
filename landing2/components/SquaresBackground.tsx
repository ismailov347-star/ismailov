'use client';

import React from 'react';

interface SquaresBackgroundProps {
  className?: string;
  squareSize?: number;
  opacity?: number;
  color?: string;
}

const SquaresBackground: React.FC<SquaresBackgroundProps> = ({
  className = '',
  squareSize = 40,
  opacity = 0.1,
  color = '#000000'
}) => {
  const backgroundStyle = {
    backgroundSize: `${squareSize}px ${squareSize}px`,
    backgroundImage: `
      linear-gradient(to right, ${color} 1px, transparent 1px),
      linear-gradient(to bottom, ${color} 1px, transparent 1px)
    `,
    opacity: opacity
  };

  return (
    <div 
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={backgroundStyle}
    />
  );
};

export default SquaresBackground;