"use client";

export default function Footer() {
  return (
    <footer className="relative mx-auto max-w-screen-xl px-4 sm:px-6 py-8 sm:py-12 mt-16">
      {/* Footer content in styled block */}
      <div className="rounded-xl sm:rounded-2xl p-6 sm:p-8 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 ring-amber-500/10 border border-amber-500/5 bg-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left column - Copyright */}
          <div className="flex items-center justify-center lg:justify-start">
            <p className="font-light font-inter text-xl md:text-2xl bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent animate-premium-fade-in tracking-wide text-shadow-[0_0_20px_rgba(251,191,36,0.8)] drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]">
              Все права защищены ©{new Date().getFullYear()}
            </p>
          </div>

          {/* Right column - Company details and links */}
          <div className="space-y-6">
            {/* Company details */}
            <div className="space-y-2">
              <div className="font-light font-inter text-xl md:text-2xl bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent animate-premium-fade-in tracking-wide text-shadow-[0_0_20px_rgba(251,191,36,0.8)] drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] mb-3">
                Реквизиты:
              </div>
              <div className="space-y-1 text-white text-xs sm:text-sm" style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 500,
                letterSpacing: '0.01em',
                lineHeight: '1.4',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 1)',
                color: '#ffffff'
              }}>
                <p>ИП Исмаилов Исмаил Нухович</p>
                <p>ИНН: 051100220067</p>
                <p>ОГРНИП: 322057100037585</p>
                <p>E-mail: ismailov347@gmail.com</p>
              </div>
            </div>

            {/* Document links */}
            <div className="space-y-2">
              <div className="font-light font-inter text-xl md:text-2xl bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent animate-premium-fade-in tracking-wide text-shadow-[0_0_20px_rgba(251,191,36,0.8)] drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] mb-3">
                Документы:
              </div>
              <div className="space-y-2">
                <a
                  href="/docs/offer"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Открыть публичную оферту"
                  className="block text-white hover:text-amber-400 transition-colors duration-300 hover:underline"
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    letterSpacing: '0.01em'
                  }}
                >
                  Публичная оферта
                </a>
                <a
                  href="/docs/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Открыть политику конфиденциальности"
                  className="block text-white hover:text-amber-400 transition-colors duration-300 hover:underline"
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    letterSpacing: '0.01em'
                  }}
                >
                  Политика обработки персональных данных
                </a>
                <a
                  href="/docs/consent"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Открыть согласие на обработку персональных данных"
                  className="block text-white hover:text-amber-400 transition-colors duration-300 hover:underline"
                  style={{
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    letterSpacing: '0.01em'
                  }}
                >
                  Согласие на обработку персональных данных
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}