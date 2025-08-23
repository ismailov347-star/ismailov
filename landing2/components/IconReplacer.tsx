import React from 'react';

interface IconReplacerProps {
  children: string;
}

// Премиальная иконка глаза для проблемы незаметности
const PremiumEye: React.FC = () => (
  <span className="inline-flex items-center justify-center w-8 h-6 mx-1 group cursor-pointer relative">
    <div 
      className="relative w-6 h-6 transition-all duration-700 ease-out group-hover:scale-125 group-hover:brightness-125"
      style={{
        animation: 'eyeFloat 4s ease-in-out infinite'
      }}
    >
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 24 24" 
        fill="none"
        style={{
          filter: 'drop-shadow(0 0 15px rgba(16,185,129,0.8)) drop-shadow(0 0 30px rgba(16,185,129,0.4))'
        }}
      >
        <defs>
          <radialGradient id="eyeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6ee7b7" stopOpacity="1" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#047857" stopOpacity="0.7" />
          </radialGradient>
          <radialGradient id="pupilGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1f2937" stopOpacity="1" />
            <stop offset="100%" stopColor="#000000" stopOpacity="1" />
          </radialGradient>
        </defs>
        
        {/* Основная форма глаза */}
        <ellipse 
          cx="12" 
          cy="12" 
          rx="10" 
          ry="6" 
          fill="url(#eyeGradient)" 
          stroke="#10b981" 
          strokeWidth="1.5"
          style={{ animation: 'eyeBlink 6s ease-in-out infinite' }}
        />
        
        {/* Зрачок */}
        <circle 
          cx="12" 
          cy="12" 
          r="3" 
          fill="url(#pupilGradient)"
          style={{ animation: 'pupilScan 3s ease-in-out infinite' }}
        />
        
        {/* Сканирующие лучи */}
        <line 
          x1="2" 
          y1="12" 
          x2="22" 
          y2="12" 
          stroke="#34d399" 
          strokeWidth="0.8" 
          opacity="0.6"
          style={{ 
            strokeDasharray: '4 2',
            animation: 'scanBeam 2s linear infinite' 
          }}
        />
        
        {/* Радарные кольца */}
        <circle 
          cx="12" 
          cy="12" 
          r="8" 
          fill="none" 
          stroke="#6ee7b7" 
          strokeWidth="0.5" 
          opacity="0.4"
          style={{ 
            strokeDasharray: '3 2',
            animation: 'radarRotate 4s linear infinite' 
          }}
        />
        
        {/* Точки обнаружения */}
        <circle cx="18" cy="8" r="1" fill="#fbbf24" opacity="0.8" style={{ animation: 'detectPoint1 2s ease-in-out infinite' }} />
        <circle cx="6" cy="16" r="0.8" fill="#ef4444" opacity="0.9" style={{ animation: 'detectPoint2 2.5s ease-in-out infinite' }} />
        <circle cx="20" cy="18" r="0.6" fill="#8b5cf6" opacity="0.7" style={{ animation: 'detectPoint3 3s ease-in-out infinite' }} />
      </svg>
    </div>
    
    <style jsx>{`
      @keyframes eyeFloat {
        0%, 100% { transform: translateY(0px) rotateZ(0deg); }
        50% { transform: translateY(-2px) rotateZ(-0.5deg); }
      }
      @keyframes eyeBlink {
        0%, 90%, 100% { transform: scaleY(1); }
        95% { transform: scaleY(0.1); }
      }
      @keyframes pupilScan {
        0%, 100% { transform: translateX(0px); }
        25% { transform: translateX(-1px); }
        75% { transform: translateX(1px); }
      }
      @keyframes scanBeam {
        0% { opacity: 0.6; }
        50% { opacity: 1; }
        100% { opacity: 0.6; }
      }
      @keyframes radarRotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes detectPoint1 {
        0%, 100% { opacity: 0.8; transform: scale(1); }
        50% { opacity: 0.3; transform: scale(1.5); }
      }
      @keyframes detectPoint2 {
        0%, 100% { opacity: 0.9; transform: scale(1); }
        50% { opacity: 0.4; transform: scale(1.3); }
      }
      @keyframes detectPoint3 {
        0%, 100% { opacity: 0.7; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.8); }
      }
    `}</style>
  </span>
);

// Премиальная иконка сердца для проблемы эмоций
const PremiumHeart: React.FC = () => (
  <span className="inline-flex items-center justify-center w-8 h-6 mx-1 group cursor-pointer relative">
    <div 
      className="relative w-6 h-6 transition-all duration-700 ease-out group-hover:scale-125 group-hover:brightness-125"
      style={{
        animation: 'heartFloat 4s ease-in-out infinite'
      }}
    >
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 24 24" 
        fill="none"
        style={{
          filter: 'drop-shadow(0 0 15px rgba(239,68,68,0.8)) drop-shadow(0 0 30px rgba(239,68,68,0.4))'
        }}
      >
        <defs>
          <radialGradient id="heartGradientHeart" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fca5a5" stopOpacity="1" />
            <stop offset="50%" stopColor="#ef4444" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0.7" />
          </radialGradient>
          <radialGradient id="glowGradientHeart" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.3" />
          </radialGradient>
        </defs>
        
        {/* Основная форма сердца */}
        <path 
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
          fill="url(#heartGradientHeart)" 
          stroke="#ef4444" 
          strokeWidth="1"
          style={{ animation: 'heartbeat 2.5s ease-in-out infinite' }}
        />
        
        {/* Внутреннее свечение */}
        <path 
          d="M12 19l-1.2-1.1C6.4 13.8 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-2.4 5.3-6.8 9.4L12 19z" 
          fill="url(#glowGradientHeart)" 
          opacity="0.6"
          style={{ animation: 'innerGlow 3s ease-in-out infinite' }}
        />
        
        {/* Пульсирующие кольца */}
        <circle 
          cx="12" 
          cy="12" 
          r="10" 
          fill="none" 
          stroke="#fca5a5" 
          strokeWidth="0.8" 
          opacity="0.5"
          style={{ 
            strokeDasharray: '6 4',
            animation: 'pulseRing1 3s ease-out infinite' 
          }}
        />
        <circle 
          cx="12" 
          cy="12" 
          r="14" 
          fill="none" 
          stroke="#ef4444" 
          strokeWidth="0.6" 
          opacity="0.3"
          style={{ 
            strokeDasharray: '8 6',
            animation: 'pulseRing2 4s ease-out infinite' 
          }}
        />
        
        {/* Летающие частицы любви */}
        <circle cx="18" cy="8" r="1" fill="#fbbf24" opacity="0.8" style={{ animation: 'loveParticle1 3s ease-in-out infinite' }} />
        <circle cx="6" cy="10" r="0.8" fill="#fca5a5" opacity="0.9" style={{ animation: 'loveParticle2 3.5s ease-in-out infinite' }} />
        <circle cx="20" cy="16" r="0.6" fill="#ef4444" opacity="0.7" style={{ animation: 'loveParticle3 2.8s ease-in-out infinite' }} />
      </svg>
    </div>
    
    <style jsx>{`
      @keyframes heartFloat {
        0%, 100% { transform: translateY(0px) rotateZ(0deg); }
        50% { transform: translateY(-3px) rotateZ(-1deg); }
      }
      @keyframes heartbeat {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }
      @keyframes innerGlow {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 0.9; }
      }
      @keyframes pulseRing1 {
        0% { transform: scale(0.8); opacity: 0.5; }
        100% { transform: scale(1.2); opacity: 0; }
      }
      @keyframes pulseRing2 {
        0% { transform: scale(0.9); opacity: 0.3; }
        100% { transform: scale(1.4); opacity: 0; }
      }
      @keyframes loveParticle1 {
        0%, 100% { opacity: 0.8; transform: translateY(0px) scale(1); }
        50% { opacity: 0.3; transform: translateY(-8px) scale(1.5); }
      }
      @keyframes loveParticle2 {
        0%, 100% { opacity: 0.9; transform: translateX(0px) scale(1); }
        50% { opacity: 0.4; transform: translateX(-6px) scale(1.3); }
      }
      @keyframes loveParticle3 {
        0%, 100% { opacity: 0.7; transform: translate(0px, 0px) scale(1); }
        50% { opacity: 1; transform: translate(4px, -6px) scale(1.8); }
      }
    `}</style>
  </span>
);

// Премиальная иконка шестеренок для проблемы алгоритмов
const PremiumGears: React.FC = () => (
  <span className="inline-flex items-center justify-center w-8 h-6 mx-1 group cursor-pointer relative">
    <div 
      className="relative w-6 h-6 transition-all duration-700 ease-out group-hover:scale-125 group-hover:brightness-125"
      style={{
        animation: 'gearsFloat 4s ease-in-out infinite'
      }}
    >
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 24 24" 
        fill="none"
        style={{
          filter: 'drop-shadow(0 0 15px rgba(59,130,246,0.8)) drop-shadow(0 0 30px rgba(59,130,246,0.4))'
        }}
      >
        <defs>
          <radialGradient id="gearGradientGears" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#93c5fd" stopOpacity="1" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.7" />
          </radialGradient>
        </defs>
        
        {/* Большая шестеренка */}
        <g style={{ animation: 'gearRotate1 4s linear infinite', transformOrigin: '12px 12px' }}>
          <circle cx="12" cy="12" r="6" fill="url(#gearGradientGears)" stroke="#3b82f6" strokeWidth="1" />
          <circle cx="12" cy="12" r="2" fill="#1e40af" />
          {/* Зубцы большой шестеренки */}
          <rect x="11" y="4" width="2" height="3" fill="#3b82f6" />
          <rect x="11" y="17" width="2" height="3" fill="#3b82f6" />
          <rect x="4" y="11" width="3" height="2" fill="#3b82f6" />
          <rect x="17" y="11" width="3" height="2" fill="#3b82f6" />
          <rect x="6.5" y="6.5" width="2" height="2" fill="#3b82f6" transform="rotate(45 7.5 7.5)" />
          <rect x="15.5" y="6.5" width="2" height="2" fill="#3b82f6" transform="rotate(45 16.5 7.5)" />
          <rect x="6.5" y="15.5" width="2" height="2" fill="#3b82f6" transform="rotate(45 7.5 16.5)" />
          <rect x="15.5" y="15.5" width="2" height="2" fill="#3b82f6" transform="rotate(45 16.5 16.5)" />
        </g>
        
        {/* Малая шестеренка */}
        <g style={{ animation: 'gearRotate2 3s linear infinite reverse', transformOrigin: '18px 6px' }}>
          <circle cx="18" cy="6" r="3" fill="url(#gearGradientGears)" stroke="#60a5fa" strokeWidth="0.8" />
          <circle cx="18" cy="6" r="1" fill="#1e40af" />
          {/* Зубцы малой шестеренки */}
          <rect x="17.5" y="2" width="1" height="1.5" fill="#60a5fa" />
          <rect x="17.5" y="8.5" width="1" height="1.5" fill="#60a5fa" />
          <rect x="15" y="5.5" width="1.5" height="1" fill="#60a5fa" />
          <rect x="20.5" y="5.5" width="1.5" height="1" fill="#60a5fa" />
        </g>
        
        {/* Энергетические искры */}
        <circle cx="8" cy="18" r="0.8" fill="#fbbf24" opacity="0.8" style={{ animation: 'energySpark1 2.5s ease-in-out infinite' }} />
        <circle cx="20" cy="16" r="0.6" fill="#10b981" opacity="0.9" style={{ animation: 'energySpark2 3s ease-in-out infinite' }} />
        <circle cx="4" cy="8" r="0.7" fill="#8b5cf6" opacity="0.7" style={{ animation: 'energySpark3 2.8s ease-in-out infinite' }} />
      </svg>
    </div>
    
    <style jsx>{`
      @keyframes gearsFloat {
        0%, 100% { transform: translateY(0px) rotateZ(0deg); }
        50% { transform: translateY(-2px) rotateZ(-0.5deg); }
      }
      @keyframes gearRotate1 {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes gearRotate2 {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(-360deg); }
      }
      @keyframes energySpark1 {
        0%, 100% { opacity: 0.8; transform: scale(1); }
        50% { opacity: 0.3; transform: scale(1.5); }
      }
      @keyframes energySpark2 {
        0%, 100% { opacity: 0.9; transform: scale(1); }
        50% { opacity: 0.4; transform: scale(1.3); }
      }
      @keyframes energySpark3 {
        0%, 100% { opacity: 0.7; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.8); }
      }
    `}</style>
  </span>
);

// Премиальная иконка предупреждения для проблемы безопасности
const PremiumWarning: React.FC = () => (
  <span className="inline-flex items-center justify-center w-8 h-6 mx-1 group cursor-pointer relative">
    <div 
      className="relative w-6 h-6 transition-all duration-700 ease-out group-hover:scale-125 group-hover:brightness-125"
      style={{
        animation: 'warningFloat 4s ease-in-out infinite'
      }}
    >
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 24 24" 
        fill="none"
        style={{
          filter: 'drop-shadow(0 0 15px rgba(239,68,68,0.8)) drop-shadow(0 0 30px rgba(251,191,36,0.4))'
        }}
      >
        <defs>
          <radialGradient id="warningGradientWarning" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.7" />
          </radialGradient>
          <radialGradient id="dangerGradientWarning" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0.3" />
          </radialGradient>
        </defs>
        
        {/* Треугольник предупреждения */}
        <path 
          d="M12 2L22 20H2L12 2Z" 
          fill="url(#warningGradientWarning)" 
          stroke="#f59e0b" 
          strokeWidth="1.5"
          style={{ animation: 'warningPulse 3s ease-in-out infinite' }}
        />
        
        {/* Восклицательный знак */}
        <line 
          x1="12" 
          y1="8" 
          x2="12" 
          y2="14" 
          stroke="#dc2626" 
          strokeWidth="2" 
          strokeLinecap="round"
          style={{ animation: 'exclamationBlink 2s ease-in-out infinite' }}
        />
        <circle 
          cx="12" 
          cy="17" 
          r="1" 
          fill="#dc2626"
          style={{ animation: 'exclamationBlink 2s ease-in-out infinite' }}
        />
        
        {/* Опасные искры */}
        <circle cx="8" cy="18" r="0.8" fill="#ef4444" opacity="0.8" style={{ animation: 'dangerSpark1 2.5s ease-in-out infinite' }} />
        <circle cx="16" cy="18" r="0.6" fill="#fbbf24" opacity="0.9" style={{ animation: 'dangerSpark2 3s ease-in-out infinite' }} />
        <circle cx="12" cy="4" r="0.7" fill="#dc2626" opacity="0.7" style={{ animation: 'dangerSpark3 2.8s ease-in-out infinite' }} />
        
        {/* Предупреждающие кольца */}
        <circle 
          cx="12" 
          cy="12" 
          r="12" 
          fill="none" 
          stroke="#fbbf24" 
          strokeWidth="0.8" 
          opacity="0.5"
          style={{ 
            strokeDasharray: '8 4',
            animation: 'warningRing1 3s ease-out infinite' 
          }}
        />
        <circle 
          cx="12" 
          cy="12" 
          r="15" 
          fill="none" 
          stroke="#ef4444" 
          strokeWidth="0.6" 
          opacity="0.3"
          style={{ 
            strokeDasharray: '6 3',
            animation: 'warningRing2 4s ease-out infinite' 
          }}
        />
      </svg>
    </div>
    
    <style jsx>{`
      @keyframes warningFloat {
        0%, 100% { transform: translateY(0px) rotateZ(0deg); }
        50% { transform: translateY(-3px) rotateZ(-1deg); }
      }
      @keyframes warningPulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.05); opacity: 0.8; }
      }
      @keyframes exclamationBlink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.6; }
      }
      @keyframes dangerSpark1 {
        0%, 100% { opacity: 0.8; transform: scale(1); }
        50% { opacity: 0.3; transform: scale(1.5); }
      }
      @keyframes dangerSpark2 {
        0%, 100% { opacity: 0.9; transform: scale(1); }
        50% { opacity: 0.4; transform: scale(1.3); }
      }
      @keyframes dangerSpark3 {
        0%, 100% { opacity: 0.7; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.8); }
      }
      @keyframes warningRing1 {
        0% { transform: scale(0.8); opacity: 0.5; }
        100% { transform: scale(1.2); opacity: 0; }
      }
      @keyframes warningRing2 {
        0% { transform: scale(0.9); opacity: 0.3; }
        100% { transform: scale(1.4); opacity: 0; }
      }
    `}</style>
  </span>
);

// Основной компонент IconReplacer
const IconReplacer: React.FC<IconReplacerProps> = ({ children }) => {
  const iconMap: { [key: string]: React.FC } = {
    '✅': PremiumEye,
    '🔹': PremiumHeart,
    '🔸': PremiumGears,
    '❌': PremiumWarning,
  };

  return (
    <span>
      {children.split('').map((char, index) => {
        const IconComponent = iconMap[char];
        return IconComponent ? (
          <IconComponent key={index} />
        ) : (
          <span key={index}>{char}</span>
        );
      })}
    </span>
  );
};

export default IconReplacer;