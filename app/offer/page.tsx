'use client';

import { useEffect, useState } from 'react';

import { Squares } from "@/components/ui/squares-background";
import TypewriterHeadline from "@/components/TypewriterHeadline";
import Footer from "@/components/Footer";
import { LiquidButton } from "@/app/components/ui/liquid-glass-button";






// SVG Icons Components
const CheckCircleIcon = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CameraIcon = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
  </svg>
);

const TypeIcon = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.627 2.707-3.227V6.741c0-1.6-1.123-2.994-2.707-3.227A48.394 48.394 0 0012 3C9.394 3 7.04 3.17 4.93 3.514 3.347 3.747 2.25 5.14 2.25 6.741v6.018z" />
  </svg>
);

const WaveformIcon = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
  </svg>
);

const CircuitIcon = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-16.5 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21" />
  </svg>
);

const LayersIcon = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25 21.75 7.5l-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
  </svg>
);

const BadgeIcon = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0z" />
  </svg>
);

const LightbulbIcon = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
  </svg>
);

const TriangleWarningIcon = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
  </svg>
);

const CoinIcon = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const HelpCircleIcon = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
  </svg>
);

const ChevronDownIcon = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg>
);

const ArrowRightIcon = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const DesignIcon = ({ className = "" }) => (
  <svg className="w-5 h-5 text-cyan-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
    <circle cx="12" cy="9" r="1" fill="currentColor" className="animate-bounce" />
  </svg>
);

const SparkIcon = ({ className = "" }) => (
  <svg className="w-5 h-5 text-rose-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    <circle cx="13" cy="7" r="1" fill="currentColor" className="animate-pulse" />
  </svg>
);

const SmartphoneIcon = ({ className = "" }) => (
  <svg className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
  </svg>
);

const VideoIcon = ({ className = "" }) => (
  <svg className="w-5 h-5 text-emerald-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
    <circle cx="12" cy="12" r="2" fill="currentColor" className="animate-spin" style={{animationDuration: '3s'}} />
  </svg>
);

const HeartIcon = ({ className = "" }) => (
  <svg className="w-5 h-5 text-amber-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    <circle cx="12" cy="16" r="1" fill="currentColor" className="animate-pulse" />
  </svg>
);
import LoadingScreen from "@/components/LoadingScreen";
import RevealOnScroll from "@/components/RevealOnScroll";
import CinematicHeadline from "@/components/CinematicHeadline";
import ScrollProgressBar from "@/components/ScrollProgressBar";


// Компонент аккордеона
function AccordionItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-xl bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 backdrop-blur-sm border border-white/5 ring-1 ring-white/10 shadow-soft overflow-hidden hover:shadow-glow transition-all duration-500 hover:ring-accent/30">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-200 group"
      >
        <div className="flex items-center gap-3">
          <HelpCircleIcon className="w-5 h-5 text-amber-400 flex-shrink-0 transition-transform duration-200 group-hover:scale-105" />
          <span className="text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] font-semibold pr-4">{question}</span>
        </div>
        <ChevronDownIcon className={`w-5 h-5 text-amber-400 flex-shrink-0 transition-all duration-300 group-hover:scale-105 ${
          isOpen ? 'rotate-180' : ''
        }`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-4 pl-8">
          <pre className="whitespace-pre-wrap text-subtle/90 leading-relaxed text-base drop-shadow-[0_0_4px_rgba(139,92,246,0.2)]">{answer}</pre>
        </div>
      </div>
    </div>
  );
}

export default function OfferPage() {
  useEffect(() => {
    console.log('🔧 Инициализация GetCourse iframe виджета...');

    // Создаем функцию для открытия виджета через создание нового скрипта
    window.openGetCourseWidget = () => {
      console.log('🚀 Открываем GetCourse виджет...');
      
      // Создаем модальное окно для виджета
      let modal = document.getElementById('getcourse-modal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'getcourse-modal';
        modal.style.cssText = `
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          box-sizing: border-box;
        `;
        
        const container = document.createElement('div');
        container.style.cssText = `
          background: white;
          border-radius: 8px;
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          overflow: hidden;
          position: relative;
        `;
        
        const closeButton = document.createElement('button');
        closeButton.innerHTML = '×';
        closeButton.style.cssText = `
          position: absolute;
          top: 10px;
          right: 15px;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          z-index: 10001;
          color: #666;
        `;
        
        closeButton.onclick = () => {
          document.body.removeChild(modal);
          console.log('✅ Модальное окно закрыто');
        };
        
        // Создаем скрипт для виджета внутри контейнера
        const widgetScript = document.createElement('script');
        widgetScript.id = 'ebfd00e56b5d53e123c2e1baf410c8008ff7430e';
        widgetScript.src = 'http://school.ismablog.ru/pl/lite/widget/script?id=1491870';
        
        // Добавляем обработчики событий для скрипта
        widgetScript.onload = () => {
          console.log('✅ GetCourse скрипт успешно загружен');
          console.log('🔍 Проверяем доступные объекты в window после загрузки скрипта...');
          
          // Проверяем все возможные объекты GetCourse
          const gcKeys = Object.keys(window).filter(key => 
            key.toLowerCase().includes('getcourse') || 
            key.toLowerCase().includes('gc') ||
            key.toLowerCase().includes('widget')
          );
          console.log('🔑 Найденные ключи, связанные с GetCourse:', gcKeys);
          
          // Принудительно запускаем код GetCourse, так как DOMContentLoaded уже произошел
          console.log('🚀 Принудительно запускаем GetCourse код...');
          
          // Эмулируем код из GetCourse скрипта
          const script = document.getElementById('ebfd00e56b5d53e123c2e1baf410c8008ff7430e');
          if (script) {
            const par = script.parentNode;
            par.style.overflow = 'hidden';

            const iframe = document.createElement('iframe');
            iframe.src = 'http://school.ismablog.ru/pl/lite/widget/widget'
              + "?" + window.location.search.substring(1)
              + "&id=1491870"
              + "&ref=" + encodeURIComponent(document.referrer)
              + "&loc=" + encodeURIComponent(document.location.href);

            try {
              if (window.clrtQueryData) {
                iframe.src += "&clrtQueryData=" + encodeURIComponent(JSON.stringify(window.clrtQueryData));
              }
            } catch(e) {}

            iframe.dataset.accountId = '912144';
            iframe.style.width = '100%';
            iframe.style.height = '0px';
            iframe.style.border = 'none';
            iframe.style.overflow = 'hidden';
            iframe.setAttribute('allowfullscreen', 'allowfullscreen');
            iframe.className = '149';
            iframe.id = '43fac3d04dd5597f8b4391cfbf928a1c99e903d9' + '_' + iframe.className;
            iframe.name = iframe.className;

            const iframeId = iframe.id;

            const gcEmbedOnMessage = function(e) {
              const insertedIframe = document.getElementById(iframeId);
              if (!insertedIframe) {
                return;
              }

              if (e.data.uniqName == 'ebfd00e56b5d53e123c2e1baf410c8008ff7430e') {
                if (e.data.height) {
                  if (e.data.iframeName) {
                    const cuttedName = e.data.iframeName.split('&')[0];
                    if (cuttedName == iframe.name) {
                      par.style.height = (e.data.height) + "px";
                      insertedIframe.style.height = (e.data.height) + "px";
                    }
                  } else {
                    par.style.height = (e.data.height) + "px";
                    insertedIframe.style.height = (e.data.height) + "px";
                  }
                }
              }
            };

            if (window.addEventListener) {
              window.addEventListener("message", gcEmbedOnMessage, false);
            } else if (window.attachEvent) {
              window.attachEvent('onmessage', gcEmbedOnMessage);
            } else {
              window['onmessage'] = gcEmbedOnMessage;
            }

            script.parentNode.insertBefore(iframe, script);
            par.removeChild(script);
            
            console.log('✅ GetCourse iframe создан принудительно');
          }
          
          // Проверяем iframe
          setTimeout(() => {
            const iframes = container.querySelectorAll('iframe');
            console.log('📱 Найдено iframe элементов:', iframes.length);
            iframes.forEach((iframe, index) => {
              console.log(`📱 Iframe ${index + 1}:`, {
                src: iframe.src,
                id: iframe.id,
                className: iframe.className,
                style: iframe.style.cssText
              });
            });
            
            // Если iframe не найден, проверим еще раз через 3 секунды
            if (iframes.length === 0) {
              setTimeout(() => {
                const iframes2 = container.querySelectorAll('iframe');
                console.log('📱 Повторная проверка - найдено iframe элементов:', iframes2.length);
                iframes2.forEach((iframe, index) => {
                  console.log(`📱 Iframe ${index + 1} (повторная проверка):`, {
                    src: iframe.src,
                    id: iframe.id,
                    className: iframe.className,
                    style: iframe.style.cssText
                  });
                });
              }, 3000);
            }
          }, 1000);
        };
        
        widgetScript.onerror = (error) => {
          console.error('❌ Ошибка загрузки GetCourse скрипта:', error);
          console.error('🌐 URL скрипта:', widgetScript.src);
          console.error('🔒 Возможная причина: HTTPS требуется для localhost');
          
          // Показываем сообщение об ошибке пользователю
          const errorDiv = document.createElement('div');
          errorDiv.style.cssText = `
            padding: 20px;
            text-align: center;
            color: #666;
            font-family: Arial, sans-serif;
          `;
          errorDiv.innerHTML = `
            <h3>Ошибка загрузки виджета</h3>
            <p>Виджет GetCourse не может загрузиться на localhost.</p>
            <p>Попробуйте открыть сайт через HTTPS или на production сервере.</p>
          `;
          container.appendChild(errorDiv);
        };
        
        container.appendChild(closeButton);
        container.appendChild(widgetScript);
        modal.appendChild(container);
        document.body.appendChild(modal);
        
        console.log('✅ Модальное окно с виджетом создано');
        console.log('⏳ Ожидаем загрузку скрипта GetCourse...');
        
        // Закрытие по клику на фон
        modal.addEventListener('click', (e) => {
          if (e.target === modal) {
            document.body.removeChild(modal);
            console.log('✅ Модальное окно закрыто по клику на фон');
          }
        });
      } else {
        modal.style.display = 'flex';
        console.log('✅ Модальное окно показано');
      }
    };

    const handleDocumentClick = (event: MouseEvent) => {
      const target = event.target as Element;
      const liquidButton = target.closest('.liquid-button-target');
      
      if (liquidButton) {
        console.log('🎯 Клик по целевой кнопке');
        event.preventDefault();
        window.openGetCourseWidget();
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      delete window.openGetCourseWidget;
      
      // Удаляем модальное окно при размонтировании
      const modal = document.getElementById('getcourse-modal');
      if (modal) {
        document.body.removeChild(modal);
      }
    };
  }, []);

  // Адаптивные классы для иконок
  const iconSizeClasses = "w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6";
  const headingIconClasses = "w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7";
  const listIconClasses = "w-3 h-3 xs:w-4 xs:h-4 sm:w-4 sm:h-4";
  const [isLoading, setIsLoading] = useState(true);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionData = [
    {
      question: "А если не получится?",
      answer: "Не страшно. Любая попытка даёт ясность и опыт. Получается у тех, кто возвращается и продолжает. Этого достаточно."
    },
    {
      question: "А если у меня нет времени?",
      answer: "Идеального момента не бывает. Делай в своём ритме. Важна регулярность — маленькие шаги тоже шаги."
    },
    {
      question: "А если я не знаю, о чём писать?",
      answer: "Темы рядом: твой опыт, то, что волнует сегодня, вопросы людей вокруг. Говори своим голосом — искренность всегда считывается."
    },
    {
      question: "А если моя тема слишком узкая?",
      answer: "Узкое — значит понятное для «своих». Лучше глубоко для нужных людей, чем поверхностно для всех. Глубина рождает доверие."
    },
    {
      question: "А если я только начинаю?",
      answer: "Это плюс. Нет лишних ожиданий — есть чистый старт. Живой, честный путь сильнее идеального «когда-нибудь»."
    }

  ];

  return (
    <>
    <main className="relative">
      <Squares 
        className="fixed inset-0 w-full h-full pointer-events-none -z-10" 
        direction="diagonal" 
        speed={0.5} 
        borderColor="#333" 
        squareSize={40} 
        hoverFillColor="#222" 
      />
      <ScrollProgressBar />
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Hero */}
      <section className="relative mx-auto max-w-screen-xl px-4 sm:px-6 pt-6 sm:pt-8 pb-6 sm:pb-8 md:pt-12 md:pb-12">
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -left-5 sm:-left-10 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-accent/10 blur-3xl animate-float" />
          <div className="absolute top-40 -right-5 sm:right-0 h-32 w-32 sm:h-64 sm:w-64 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "1.2s" }} />
        </div>

        <RevealOnScroll>
          <div className="text-base sm:text-lg md:text-xl lowercase tracking-[.1em] sm:tracking-[.15em] font-medium mb-6 sm:mb-8 transform hover:scale-105 transition-all duration-500 cursor-default text-white dark:text-white" style={{fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500, letterSpacing: '0.15em'}}>@isma.blog</div>
        </RevealOnScroll>
      </section>

      {/* Основной контент */}
      <section className="mx-auto max-w-screen-md px-4 sm:px-6 space-y-6 sm:space-y-8 pb-6 sm:pb-8">
        
        {/* Заголовок отдельно */}
        <div className="text-left mb-6 sm:mb-8">
          <TypewriterHeadline phrase="Что делать прямо сейчас?" />
        </div>
        
        {/* Отдельный текст */}
        <div className="text-center space-y-6 w-full mx-auto mb-8">
          <p className="mt-3 text-lg md:text-xl text-subtle/90 max-w-3xl drop-shadow-[0_0_8px_rgba(139,92,246,0.2)] text-left mx-auto">
            Если ты читаешь это — значит, у тебя внутри уже есть импульс. Вопрос теперь не в желании, а в действии.
          </p>
          
          {/* Текстовая рамка */}
          <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5">
            <pre className="whitespace-pre-wrap text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] text-left">{`Я не буду рассказывать тебе про «важность контента» или «алгоритмы Instagram». Ты и так это знаешь.

Вместо этого — покажу, как именно делать контент, который работает. Как снимать. Как монтировать. Как писать. Как упаковывать.

Всё по шагам. Всё на практике. Всё так, как делаю сам.`}</pre>
          </div>
          
          <h3 className="text-xl sm:text-2xl md:text-3xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent animate-premium-fade-in text-left" style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '0.05em',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2))'
          }}>
            Это не марафон на 30 дней и не курс на 40 часов. Это концентрат того, что реально нужно знать, чтобы твой блог начал расти.
          </h3>
          
          <h3 className="text-xl sm:text-2xl md:text-3xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent animate-premium-fade-in text-left" style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '0.05em',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2))'
          }}>
            Если ты готов перестать откладывать и начать делать — добро пожаловать.
          </h3>
        </div>

        {/* Блок 1 */}
        <div className="space-y-6 text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] w-full mx-auto">
          <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5">
            <div className="space-y-4 text-left">
              <div className="group flex items-start gap-3">
                <svg className="w-5 h-5 text-orange-300 group-hover:text-white transition-colors duration-300 animate-pulse flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)]">«Может, ещё рано?»</span>
              </div>
              
              <div className="group flex items-start gap-3">
                <svg className="w-5 h-5 text-red-300 group-hover:text-white transition-colors duration-300 animate-bounce flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)]">«А вдруг не получится?»</span>
              </div>
              
              <div className="group flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-300 group-hover:text-white transition-colors duration-300 animate-spin flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)]">«А вдруг это всё не про меня?»</span>
              </div>
              
              <div className="mt-6">
                <pre className="whitespace-pre-wrap text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)]">{`Давай по-честному.

Я сам проходил через эти вопросы. Но именно действие меняет всё.`}</pre>
              </div>
            </div>
          </div>
        </div>

        {/* CTA 1 */}
        <div className="text-center">
          <LiquidButton size="xl" className="liquid-button-target">
            Присоединиться сейчас
          </LiquidButton>
        </div>

        {/* Блок 2 */}
        <div className="space-y-6 text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent animate-premium-fade-in text-center" style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '0.05em',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2))'
          }}>
            Почему это важно?
          </h3>
          
          <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5">
            <pre className="whitespace-pre-wrap text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] text-left">{`Бывает, я думаю: 
 «А что, если завтра всё исчезнет? Аккаунт, подписчики, цифры…» 
 Обидно? Конечно. 
 Но одна вещь останется — понимание, как всё работает. 
 То, чему я научился сам. 
 То, что реально работает — и без лишнего.

Я упаковал это в систему, чтобы ты мог(ла) пройти тот же путь — только быстрее и проще.`}</pre>
          </div>
        </div>

        {/* Блок 3 */}
        <div className="text-center space-y-6 text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] w-full mx-auto">
          <h3 className="font-light font-inter text-3xl md:text-4xl bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent animate-premium-fade-in tracking-wide text-shadow-[0_0_20px_rgba(251,191,36,0.8)] drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]">
            Что такое Система Лёгкого Контента?
          </h3>
          
          <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5">
            <pre className="whitespace-pre-wrap text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] text-left">{`Это не «волшебная кнопка».

Это рабочая схема для тех, кто хочет стабильный рост без сложностей, монтажей и выгорания.`}</pre>
          </div>
        </div>



        {/* Блок 1 - Что внутри */}
        <div className="text-center space-y-6 text-lg md:text-xl text-white/90 w-full mx-auto">
          <h2 className="text-2xl md:text-3xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent animate-premium-fade-in text-left" style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '0.05em',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2))'
          }}>
            Что внутри?
          </h2>
          
          {/* Урок 1 */}
          <h3 className="font-light font-inter text-xl md:text-2xl bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent animate-premium-fade-in tracking-wide text-shadow-[0_0_20px_rgba(251,191,36,0.8)] drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] text-left">Урок 1. Суть текстовых Reels. «Формула захвата внимания»</h3>
          <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5">
            <div className="text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] text-left">
              <p className="mb-4">Ты узнаешь, как делать короткие ролики, которые не просто пролистывают — а читают, сохраняют и делятся.</p>
              
              <p className="mb-4">Мы разберём:</p>
              
              <div className="flex items-start gap-4 group mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500/20 to-pink-600/30 border border-rose-400/30 flex items-center justify-center group-hover:from-rose-400/30 group-hover:to-pink-500/40 group-hover:border-rose-300/50 transition-all duration-300 shadow-lg group-hover:shadow-rose-500/25">
                  <svg className="w-5 h-5 text-rose-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] group-hover:text-white transition-colors duration-300 flex-1">какую подложку снимать (и как)</span>
              </div>
              
              <div className="flex items-start gap-4 group mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-yellow-600/30 border border-amber-400/30 flex items-center justify-center group-hover:from-amber-400/30 group-hover:to-yellow-500/40 group-hover:border-amber-300/50 transition-all duration-300 shadow-lg group-hover:shadow-amber-500/25">
                  <svg className="w-5 h-5 text-amber-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                </div>
                <span className="text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] group-hover:text-white transition-colors duration-300 flex-1">как оформить текст, чтобы его дочитывали</span>
              </div>
              
              <div className="flex items-start gap-4 group mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-violet-600/30 border border-purple-400/30 flex items-center justify-center group-hover:from-purple-400/30 group-hover:to-violet-500/40 group-hover:border-purple-300/50 transition-all duration-300 shadow-lg group-hover:shadow-purple-500/25">
                  <svg className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <span className="text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] group-hover:text-white transition-colors duration-300 flex-1">как выбрать заголовок, который не даёт пролистнуть</span>
              </div>
              
              <div className="flex items-start gap-4 group mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-green-600/30 border border-emerald-400/30 flex items-center justify-center group-hover:from-emerald-400/30 group-hover:to-green-500/40 group-hover:border-emerald-300/50 transition-all duration-300 shadow-lg group-hover:shadow-emerald-500/25">
                  <svg className="w-5 h-5 text-emerald-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M9 12a3 3 0 106 0v5a3 3 0 11-6 0V9z" />
                  </svg>
                </div>
                <span className="text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] group-hover:text-white transition-colors duration-300 flex-1">как подобрать фоновое аудио</span>
              </div>
              
              <div className="flex items-start gap-4 group mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-400/30 flex items-center justify-center group-hover:from-cyan-400/30 group-hover:to-blue-500/40 group-hover:border-cyan-300/50 transition-all duration-300 shadow-lg group-hover:shadow-cyan-500/25">
                  <svg className="w-5 h-5 text-cyan-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] group-hover:text-white transition-colors duration-300 flex-1">и главное — как весь этот формат работает изнутри и почему алгоритм его любит</span>
              </div>
              
              <p className="mt-4">Это не теория. Это тот самый метод, с которого начался рост моего блога.</p>
            </div>
          </div>

          {/* Урок 2 */}
          <h3 className="font-light font-inter text-xl md:text-2xl bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent animate-premium-fade-in tracking-wide text-shadow-[0_0_20px_rgba(251,191,36,0.8)] drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] text-center">Урок 2. Публикации-карусели. «Листай — не отпускай»</h3>
          <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5">
            <div className="text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] text-left">
              <p className="mb-4">Мы разберём:</p>
              
              <div className="flex items-start gap-4 group mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                  <svg className="w-5 h-5 text-blue-300 group-hover:text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] flex-1">как работает формат и почему его продвигает Instagram</span>
              </div>
              
              <div className="flex items-start gap-4 group mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                  <svg className="w-5 h-5 text-pink-300 group-hover:text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] flex-1">как оформить первый слайд, чтобы зацепить</span>
              </div>
              
              <div className="flex items-start gap-4 group mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                  <svg className="w-5 h-5 text-indigo-300 group-hover:text-white animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <span className="text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] flex-1">как выстроить структуру до 20 слайдов</span>
              </div>
              
              <div className="flex items-start gap-4 group mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                  <svg className="w-5 h-5 text-yellow-300 group-hover:text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <span className="text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] flex-1">как выбирать темы</span>
              </div>
              
              <div className="flex items-start gap-4 group mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                  <svg className="w-5 h-5 text-green-300 group-hover:text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <span className="text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] flex-1">как писать текст</span>
              </div>
              
              <div className="flex items-start gap-4 group mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                  <svg className="w-5 h-5 text-purple-300 group-hover:text-white animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </div>
                <span className="text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] flex-1">как добавлять фоновое аудио</span>
              </div>
              
              <div className="flex items-start gap-4 group mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                  <svg className="w-5 h-5 text-teal-300 group-hover:text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] flex-1">какие инструменты использовать (телефон/ПК)</span>
              </div>
              
              <div className="flex items-start gap-4 group mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                  <svg className="w-5 h-5 text-orange-300 group-hover:text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] flex-1">как делать карусели за 15–20 минут без дизайнера</span>
              </div>
            </div>
          </div>

          {/* Урок 3 */}
          <h3 className="font-light font-inter text-xl md:text-2xl bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent animate-premium-fade-in tracking-wide text-shadow-[0_0_20px_rgba(251,191,36,0.8)] drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] text-center">Урок 3. Чек-лист «Упаковка блога»</h3>
          <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5">
            <div className="text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] text-left">
              <p className="mb-4">Люди могут перейти в твой профиль… и уйти. Даже если контент хороший.</p>
              
              <p className="mb-4">Почему? Потому что блог встречают по обложке.</p>
              
              <p className="mb-4">Ты узнаешь:</p>
              
              <div className="flex items-start gap-4 group mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                  <svg className="w-5 h-5 text-red-300 group-hover:text-white animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                  </svg>
                </div>
                <span className="text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] flex-1">что мешает подписке</span>
              </div>
              
              <div className="flex items-start gap-4 group mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                  <svg className="w-5 h-5 text-blue-300 group-hover:text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <span className="text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] flex-1">как оформить профиль, чтобы он не отпугивал</span>
              </div>
              
              <div className="flex items-start gap-4 group mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                  <svg className="w-5 h-5 text-emerald-300 group-hover:text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <span className="text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] flex-1">какие блоки важны на старте</span>
              </div>
              
              <div className="flex items-start gap-4 group mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                  <svg className="w-5 h-5 text-pink-300 group-hover:text-white animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <span className="text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] flex-1">как показать себя без пафоса, но с интересом</span>
              </div>
            </div>
          </div>

          {/* Урок 4 */}
          <h3 className="font-light font-inter text-xl md:text-2xl bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent animate-premium-fade-in tracking-wide text-shadow-[0_0_20px_rgba(251,191,36,0.8)] drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] text-center">Урок 4. Система идей. «Контент-база без ступора»</h3>
          <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5">
            <div className="text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] text-left">
              <p className="mb-4">Если ты садился перед телефоном и думал: «О чём вообще писать сегодня?» — это для тебя.</p>
              
              <p className="mb-4">Внутри — мой личный конвейер, который:</p>
              
              <div className="flex items-start gap-4 group mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                  <svg className="w-5 h-5 text-yellow-300 group-hover:text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <span className="text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] flex-1">даёт стабильный поток идей</span>
              </div>
              
              <div className="flex items-start gap-4 group mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                  <svg className="w-5 h-5 text-blue-300 group-hover:text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0V6a2 2 0 012-2h2a2 2 0 012 2v1m-6 0h6m-6 0l-.5 8.5A2 2 0 009.5 18h5a2 2 0 002-1.5L16 8m-6 0h6" />
                  </svg>
                </div>
                <span className="text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] flex-1">упрощает планирование</span>
              </div>
              
              <div className="flex items-start gap-4 group mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                  <svg className="w-5 h-5 text-green-300 group-hover:text-white animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] flex-1">экономит время</span>
              </div>
              
              <div className="flex items-start gap-4 group mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                  <svg className="w-5 h-5 text-purple-300 group-hover:text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <span className="text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] flex-1">освобождает голову от хаоса</span>
              </div>
              
              <p className="mt-4">Это не шаблоны. Это система, в которую ты просто подставляешь свои смыслы — и получаешь пост.</p>
            </div>
          </div>
        </div>

        {/* Разделитель */}
        <div className="relative py-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/15 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-black/50 px-4">
              <div className="w-1 h-1 bg-amber-400/40 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Блок 5 - Дополнительно */}
        <h3 className="font-light font-inter text-xl md:text-2xl bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent animate-premium-fade-in tracking-wide text-shadow-[0_0_20px_rgba(251,191,36,0.8)] drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] text-center">Кроме того в практикуме:</h3>
        
        <h3 className="font-light font-inter text-xl md:text-2xl bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent animate-premium-fade-in tracking-wide text-shadow-[0_0_20px_rgba(251,191,36,0.8)] drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] text-center">Рилс как магнит. «Из зрителей — в подписчики»</h3>
        <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5">
          <div className="text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] text-left">
            <p className="mb-4">Мы не просто «развлекаем» — мы цепляем. Ты узнаешь, как каждый Reels превращается в:</p>
            
            <div className="flex items-start gap-4 group mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                <svg className="w-5 h-5 text-green-300 group-hover:text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] flex-1">сигнал «это про тебя»</span>
            </div>
            
            <div className="flex items-start gap-4 group mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                <svg className="w-5 h-5 text-blue-300 group-hover:text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <span className="text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] flex-1">повод нажать «подписаться»</span>
            </div>
            
            <div className="flex items-start gap-4 group mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                <svg className="w-5 h-5 text-purple-300 group-hover:text-white animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4" />
                </svg>
              </div>
              <span className="text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] flex-1">микросценарий, который не даёт пролистнуть</span>
            </div>
          </div>
        </div>

        <h3 className="font-light font-inter text-xl md:text-2xl bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent animate-premium-fade-in tracking-wide text-shadow-[0_0_20px_rgba(251,191,36,0.8)] drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] text-center">Частые ошибки. «Что тормозит рост»</h3>
        <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5">
          <div className="text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] text-left">
            <div className="flex items-start gap-4 group mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                <svg className="w-5 h-5 text-red-300 group-hover:text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <span className="text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] flex-1">Почему люди «стараются», а результата нет</span>
            </div>
            
            <div className="flex items-start gap-4 group mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                <svg className="w-5 h-5 text-orange-300 group-hover:text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] flex-1">Почему блог без чёткой системы — это болото</span>
            </div>
            
            <div className="flex items-start gap-4 group mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                <svg className="w-5 h-5 text-yellow-300 group-hover:text-white animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <span className="text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] flex-1">Как перестать делать впустую и начать «попадать»</span>
            </div>
            
            <div className="flex items-start gap-4 group mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-purple-400/30 backdrop-blur-sm group-hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                <svg className="w-5 h-5 text-emerald-300 group-hover:text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <span className="text-subtle/90 leading-relaxed text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] flex-1">Как читать алгоритмы Instagram, а не бороться с ними</span>
            </div>
          </div>
        </div>

        {/* CTA 2 */}
        <div className="text-center">
          <LiquidButton size="lg" className="liquid-button-target">
            <span>Хочу доступ к системе</span>
          </LiquidButton>
        </div>

        {/* Разделитель */}
        <div className="relative py-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/15 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-black/50 px-4">
              <div className="w-1 h-1 bg-amber-400/40 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Секция закрытия возражений */}
        <section id="objections" className="space-y-6">
          <h3 className="font-light font-inter text-xl md:text-2xl bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent animate-premium-fade-in tracking-wide text-shadow-[0_0_20px_rgba(251,191,36,0.8)] drop-shadow-[0_0_15px_rgba(251,191,36,0.6)] text-center">А вдруг… (честные ответы перед стартом)</h3>
          
          <div className="space-y-4">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openAccordion === index}
                onToggle={() => toggleAccordion(index)}
              />
            ))}
          </div>
          
        </section>

        {/* Блок с выводом */}
        <div className="relative rounded-xl p-6 sm:p-7 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 backdrop-blur-sm border border-white/10 ring-1 ring-white/10 shadow-soft overflow-visible text-center">
          {/* Пульсирующее сердечко выше текста */}


          <h3 className="text-xl sm:text-2xl md:text-3xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent animate-premium-fade-in text-center" style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '0.05em',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2))'
          }}>
            Тебе не нужно нравиться всем. Достаточно быть ценным для тех, кому это действительно важно.
          </h3>
        </div>


        {/* Блок 6 - Инструменты */}
        <div className="rounded-xl bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 backdrop-blur-sm border border-white/5 ring-1 ring-white/10 shadow-soft p-6 sm:p-8 hover:shadow-glow transition-all duration-500 hover:ring-accent/30">
          <div className="flex items-center gap-3 mb-4">
            <BadgeIcon className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400 flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent animate-premium-fade-in" style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '300',
              letterSpacing: '0.05em',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2))'
            }}>Инструменты, которые пригодятся</h2>
          </div>
          <div className="space-y-3">
            <div className="group flex items-start gap-3">
              <SmartphoneIcon />
              <pre className="whitespace-pre-wrap text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)]"><strong className="text-amber-400">Смартфон</strong> — основной инструмент для съёмки и создания контента.</pre>
            </div>
            <div className="group flex items-start gap-3">
              <VideoIcon />
              <pre className="whitespace-pre-wrap text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)]"><strong className="text-amber-400">Видеоредактор</strong> — Кап Кат или любой другой простой редактор.</pre>
            </div>
            <div className="group flex items-start gap-3">
              <DesignIcon />
              <pre className="whitespace-pre-wrap text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)]"><strong className="text-amber-400">Canva</strong> — для быстрых и аккуратных каруселей.</pre>
            </div>
            <div className="group flex items-start gap-3">
              <SparkIcon />
              <pre className="whitespace-pre-wrap text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)]"><strong className="text-amber-400">ChatGPT</strong> — используй как помощника (правка, улучшение, идеи). Тексты лучше пиши сам(а): люди быстро распознают полностью ИИ-шные тексты.</pre>
            </div>
            <div className="group flex items-start gap-3">
              <HeartIcon />
              <pre className="whitespace-pre-wrap text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)]"><strong className="text-amber-400">Желание</strong> — самый важный инструмент для достижения результата.</pre>
            </div>
          </div>
        </div>

        {/* Блок 7 - FAQ */}
        <div className="rounded-xl bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 backdrop-blur-sm border border-white/5 ring-1 ring-white/10 shadow-soft p-6 sm:p-8 hover:shadow-glow transition-all duration-500 hover:ring-accent/30">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircleIcon className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400 flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent animate-premium-fade-in" style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '300',
              letterSpacing: '0.05em',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2))'
            }}>FAQ</h2>
          </div>
          <div className="space-y-3 text-base sm:text-lg text-subtle/90 leading-relaxed drop-shadow-[0_0_4px_rgba(139,92,246,0.2)]">
            <div className="flex items-start gap-3">
              <CheckCircleIcon className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <pre className="whitespace-pre-wrap text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)]"><strong className="text-amber-400">Обратная связь?</strong> Вы можете написать мне в личку и я отвечу на все ваши вопросы.</pre>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircleIcon className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <pre className="whitespace-pre-wrap text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)]"><strong className="text-amber-400">Гарантия?</strong> 7 дней на возврат, если не подойдёт.</pre>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircleIcon className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <pre className="whitespace-pre-wrap text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)]"><strong className="text-amber-400">Что нужно для старта?</strong> Смартфон и желание попробовать.</pre>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircleIcon className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <pre className="whitespace-pre-wrap text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)]"><strong className="text-amber-400">Подойдёт новичку?</strong> Да. Всё объясняю с нуля, без сложных терминов.</pre>
            </div>
          </div>
        </div>

        {/* Блок 8 - Цена */}
        <div className="rounded-xl bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 backdrop-blur-sm border border-white/5 ring-1 ring-white/10 shadow-soft p-6 sm:p-8 hover:shadow-glow transition-all duration-500 hover:ring-accent/30">
          <div className="flex items-center gap-3 mb-4">
            <CoinIcon className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400 flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent animate-premium-fade-in" style={{
          fontFamily: 'Inter, system-ui, sans-serif',
          fontWeight: '300',
          letterSpacing: '0.05em',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2))'
        }}>Сколько это стоит?</h2>
          </div>
          <div className="text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] space-y-4">
            <p>Если бы ты пытался собрать всё это по отдельности, то тебе пришлось бы потратить минимум 18 000 ₽.</p>
            <p>И то — если бы ты вообще нашёл, где это взять.</p>
            
            <p>Потому что эти материалы не продаются в открытом доступе.</p>
            <p>Я собрал их из своего личного опыта — из того, что реально сработало и дало результат.</p>
            
            <div className="space-y-2 my-6">
              <p className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-amber-400 flex-shrink-0" /> Упаковка блога — отдельно 3 000 ₽</p>
              <p className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-amber-400 flex-shrink-0" /> Контент-конвейер — отдельно 5 000 ₽</p>
              <p className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-amber-400 flex-shrink-0" /> Текстовые Reels (формула + разборы) — отдельно 7 000 ₽</p>
              <p className="flex items-center gap-2"><CheckCircleIcon className="w-5 h-5 text-amber-400 flex-shrink-0" /> Публикации-карусели — отдельно 3 000 ₽</p>
            </div>
            
            <p className="font-semibold">ИТОГО по отдельности: 18 000 ₽</p>
            
            <p>И это честная цена, потому что всё это напрямую влияет на рост твоего блога и экономит месяцы проб и ошибок.</p>
            
            <p>Но я прекрасно понимаю:</p>
            <p>в начале пути не каждый готов сразу вложить такую сумму.</p>
            
            <p>Поэтому я сделал практикум максимально доступным —</p>
            <p>чтобы ты мог попробовать систему на деле.</p>
            
            <div className="p-4 sm:p-6 rounded-lg border-2 border-amber-400 text-center">
              <p className="text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] text-center mb-3">
                Если ты присоединишься сейчас, то получишь всё это за
              </p>
              <div className="flex flex-col items-center justify-center gap-3">
                <span className="text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] font-bold line-through text-gray-400">18 000 ₽</span>
                <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent flex items-center gap-2" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)', filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2))'}}>
                  <ArrowRightIcon className="w-6 h-6 text-amber-400 animate-bounce" />
                  1 990 ₽
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA 3 */}
        <div className="text-center">
          <LiquidButton size="xl" className="liquid-button-target">
            <span>Начать сегодня — 1990 р.</span>
          </LiquidButton>
        </div>

        {/* Блок гарантии */}
        <div className="rounded-xl bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 backdrop-blur-sm border border-white/5 ring-1 ring-white/10 shadow-soft p-6 sm:p-8 hover:shadow-glow transition-all duration-500 hover:ring-accent/30">
          <div className="space-y-4 text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)]">
            <p>И ещё важный момент.</p>
            <p>Я гарантирую полный возврат в течение 7 дней — без вопросов.</p>
            <p>Если тебе по какой-то причине не зайдёт, просто напиши — и я верну деньги.</p>
            <p>Почему я так делаю?</p>
            <p>Потому что уверен в этой системе.</p>
            <p>Она помогла мне набрать десятки тысяч подписчиков и миллионы просмотров.</p>
            <p>И теперь может сработать и у тебя.</p>
          </div>
          
          {/* Кнопка "Занять место" */}
          <div className="mt-6 flex justify-center">
            <LiquidButton size="xl" className="liquid-button-target inline-flex items-center gap-3">
              <span>Занять место</span>
            </LiquidButton>
          </div>
        </div>


        {/* Финальный призыв к действию */}
        <div className="text-center space-y-6 w-full mx-auto">
          <div className="relative rounded-xl p-6 sm:p-8 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 backdrop-blur-sm border border-white/5 ring-1 ring-white/10 shadow-soft overflow-visible">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-400/5 via-slate-300/3 to-gray-500/8 rounded-xl blur-sm"></div>
            <div className="relative">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent animate-premium-fade-in text-center leading-relaxed" style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: '300',
                letterSpacing: '0.05em',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2)) drop-shadow(0 0 10px rgba(255,215,0,0.1))'
              }}>
                Ты можешь снова отложить и остаться там же, где сейчас. А можешь — прямо сегодня запустить систему и увидеть, как твой блог начинает расти.
              </h3>
            </div>
          </div>
        </div>

        {/* Блок оплаты */}
        <div id="checkout" className="rounded-xl bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 backdrop-blur-sm border border-white/5 ring-1 ring-white/10 shadow-soft p-6 sm:p-8 hover:shadow-glow transition-all duration-500 hover:ring-accent/30 text-center">
          <LiquidButton size="xl" className="liquid-button-target">
            <span>начать обучение</span>
          </LiquidButton>
        </div>

        {/* Финальное послание */}
        <div className="rounded-xl bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 backdrop-blur-sm border border-white/5 ring-1 ring-white/10 shadow-soft p-6 sm:p-8 hover:shadow-glow transition-all duration-500 hover:ring-accent/30">
          <div className="space-y-4 text-center">
            <p className="text-xl sm:text-2xl md:text-3xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent leading-relaxed" style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '300',
              letterSpacing: '0.05em',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2)) drop-shadow(0 0 10px rgba(255,215,0,0.1))'
            }}>Хочу сказать напоследок одну простую вещь.</p>
            
            <p className="text-xl sm:text-2xl md:text-3xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent leading-relaxed" style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '300',
              letterSpacing: '0.05em',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2)) drop-shadow(0 0 10px rgba(255,215,0,0.1))'
            }}>Я благодарен за свой блог и за людей, которые здесь со мной. Это не про цифры — это про жизнь, свободу и новые возможности.</p>
            
            <p className="text-xl sm:text-2xl md:text-3xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent leading-relaxed" style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '300',
              letterSpacing: '0.05em',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2)) drop-shadow(0 0 10px rgba(255,215,0,0.1))'
            }}>И если ты всё ещё сидишь и думаешь, то знай: время всё равно пройдёт. Только вопрос в том — ты проведёшь его в сомнениях или начнёшь действовать.</p>
            
            <p className="text-xl sm:text-2xl md:text-3xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent leading-relaxed" style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '300',
              letterSpacing: '0.05em',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2)) drop-shadow(0 0 10px rgba(255,215,0,0.1))'
            }}>Готовая система уже есть. Осталось только нажать кнопку.</p>
            
            <p className="text-xl sm:text-2xl md:text-3xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent leading-relaxed" style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '300',
              letterSpacing: '0.05em',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2)) drop-shadow(0 0 10px rgba(255,215,0,0.1))'
            }}>Решение за тобой</p>
            
            {/* Золотистая прыгающая стрелка */}
            <div className="flex justify-center mt-4">
              <svg 
                className="w-8 h-8 text-amber-400 animate-bounce" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                style={{
                  filter: 'drop-shadow(0 2px 4px rgba(255,215,0,0.3)) drop-shadow(0 0 10px rgba(255,215,0,0.2))',
                  animation: 'bounce 1s infinite'
                }}
              >
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Финальная кнопка */}
        <div className="text-center mt-8 mb-8">
          <LiquidButton size="xl" className="liquid-button-target">
            <span>Начать — 1990 р.</span>
          </LiquidButton>
        </div>
      </section>
      

      

      
      <Footer />
      
      
      
      {/* Модальное окно формы */}

    </main>
    </>
  );
}