import React from 'react';
import RevealOnScroll from './RevealOnScroll';

interface AdvantageItem {
  icon: React.ReactNode;
  text: string;
}

interface AdvantagesBlockProps {
  title: string;
  advantages: AdvantageItem[];
  delay?: number;
}

const AdvantagesBlock: React.FC<AdvantagesBlockProps> = ({ title, advantages, delay = 0 }) => {
  return (
    <RevealOnScroll delay={delay}>
      <div className="rounded-2xl bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5 p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30">
        <h3 className="text-xl md:text-2xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent animate-premium-fade-in mb-6" style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: '300',
          letterSpacing: '0.05em',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2))'
        }}>{title}</h3>
        
        <div className="space-y-4">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                {advantage.icon}
              </div>
              <p className="text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] flex-1">
                {advantage.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
};

export default AdvantagesBlock;