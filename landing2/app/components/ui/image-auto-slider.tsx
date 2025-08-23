'use client';
import React from 'react';

export const ImageAutoSlider = () => {
  // Placeholders for thank you messages screenshots
  const placeholders = [
    { title: "Скрин сообщения #1", desc: "Добавьте скриншот благодарности" },
    { title: "Скрин сообщения #2", desc: "Добавьте скриншот благодарности" },
    { title: "Скрин сообщения #3", desc: "Добавьте скриншот благодарности" },
    { title: "Скрин сообщения #4", desc: "Добавьте скриншот благодарности" }
  ];

  return (
    <div className="w-full bg-black/50 relative overflow-hidden flex items-center justify-center rounded-xl p-4">
      {/* Static placeholders grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl">
        {placeholders.map((item, index) => (
          <div
            key={index}
            className="aspect-square rounded-lg overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 border-2 border-dashed border-slate-500/50 hover:border-slate-400/70 bg-slate-800/80 group"
          >
            <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
              <div className="w-12 h-12 mb-3 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-emerald-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                <svg className="w-6 h-6 text-emerald-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0v8a2 2 0 01-2 2H9a2 2 0 01-2-2v-8m0 0V6a2 2 0 012-2h6a2 2 0 012 2v2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11v2" />
                  <circle cx="12" cy="16" r="1" fill="currentColor" className="animate-pulse" />
                </svg>
              </div>
              <h3 className="text-sm text-subtle/70 mb-2 drop-shadow-[0_0_6px_rgba(139,92,246,0.2)]">{item.title}</h3>
              <p className="whitespace-pre-wrap text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)]">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};