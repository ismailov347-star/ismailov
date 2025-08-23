import Image from "next/image";

export default function MasonryGrid() {
  const placeholders = [
    { title: "Скрин охватов #1", desc: "Добавьте свой скриншот" },
    { title: "Скрин охватов #2", desc: "Добавьте свой скриншот" },
    { title: "Скрин охватов #3", desc: "Добавьте свой скриншот" },
    { title: "Скрин охватов #4", desc: "Добавьте свой скриншот" }
  ];
  
  return (
    <div className="columns-2 md:columns-3 gap-4">
      {placeholders.map((item, i) => (
        <div key={i} className="mb-4 break-inside-avoid group">
          <div className="rounded-xl shadow-glow p-1 bg-slate-700/50 border-2 border-dashed border-slate-500/50 hover:border-slate-400/70 transition-colors">
            <div className="w-full aspect-square bg-slate-800/80 rounded-lg flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 mb-4 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                <svg className="w-8 h-8 text-purple-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  <circle cx="12" cy="8" r="1" fill="currentColor" className="animate-pulse" />
                </svg>
              </div>
              <h3 className="text-sm text-subtle/70 mb-2 drop-shadow-[0_0_6px_rgba(139,92,246,0.2)]">{item.title}</h3>
              <p className="whitespace-pre-wrap text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)]">{item.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}