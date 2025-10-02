"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import RevealOnScroll from "@/components/RevealOnScroll";
import ImageCarousel from "@/components/ImageCarousel";
import MasonryGrid from "@/components/MasonryGrid";
import { ImageAutoSlider } from "@/app/components/ui/image-auto-slider";
import TypewriterHeadline from "@/components/TypewriterHeadline";
import AdvantagesBlock from "@/components/AdvantagesBlock";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { Squares } from "@/components/ui/squares-background";
import Footer from "@/components/Footer";
import GetCoursePayForm from "@/components/GetCoursePayForm";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  // Загрузка GetCourse-виджета
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'ebfd00e56b5d53e123c2e1baf410c8008ff7430e';
    script.src = 'https://school.ismablog.ru/pl/lite/widget/script?id=1491870';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('ebfd00e56b5d53e123c2e1baf410c8008ff7430e');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  // Обработчик для открытия виджета при клике на кнопки
  useEffect(() => {
    const handleButtonClick = (event: Event) => {
      const target = event.target as HTMLElement;
      const button = target.closest('a, button');
      
      if (button) {
        // Проверяем, не является ли это ссылкой на другую страницу
        const link = button as HTMLAnchorElement;
        if (link.href && (link.href.includes('/offer') || link.href.includes('/istoriya') || link.href.includes('/')  && !link.href.includes('#'))) {
          // Позволяем обычную навигацию для ссылок на другие страницы
          return;
        }
        
        event.preventDefault();
        
        // Заполняем скрытую форму GetCourse
        const emailField = document.querySelector('input[name="formParams[email]"]') as HTMLInputElement;
        const nameField = document.querySelector('input[name="formParams[name]"]') as HTMLInputElement;
        const phoneField = document.querySelector('input[name="formParams[phone]"]') as HTMLInputElement;
        const offerIdField = document.querySelector('input[name="formParams[offer_id]"]') as HTMLInputElement;
        const needOfferField = document.querySelector('input[name="formParams[need_offer]"]') as HTMLInputElement;
        
        if (emailField) emailField.value = 'user@example.com';
        if (nameField) nameField.value = 'Пользователь';
        if (phoneField) phoneField.value = '+7 (999) 999-99-99';
        if (offerIdField) offerIdField.value = '1';
        if (needOfferField) needOfferField.value = '1';
        
        // Отправляем форму GetCourse
        const form = document.getElementById('ltForm921497') as HTMLFormElement;
        if (form) {
          if (form.requestSubmit) {
            form.requestSubmit();
          } else {
            const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
            if (submitButton) {
              submitButton.click();
            }
          }
        }
        
        // Показываем модальное окно
        const container = document.getElementById('getcourse-widget-container');
        if (container) {
          container.style.display = 'block';
          
          // Ищем iframe виджета и перемещаем его в контейнер
          setTimeout(() => {
            const iframe = document.querySelector('iframe[data-account-id="912144"]') as HTMLIFrameElement;
            const widgetContent = document.getElementById('getcourse-widget-content');
            
            if (iframe && widgetContent) {
              widgetContent.appendChild(iframe);
              iframe.style.width = '100%';
              iframe.style.height = '600px';
              iframe.style.border = 'none';
            }
          }, 500);
        }
      }
    };

    document.addEventListener('click', handleButtonClick);
    return () => document.removeEventListener('click', handleButtonClick);
  }, []);

  return (
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
      <section className="relative mx-auto max-w-screen-xl px-4 sm:px-6 pt-6 sm:pt-8 pb-10 sm:pb-14 md:pt-12 md:pb-20">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl animate-float" />
          <div className="absolute top-40 right-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "1.2s" }} />
        </div>

        <RevealOnScroll>
          <div 
            className="text-base sm:text-lg md:text-xl font-medium lowercase tracking-[.1em] sm:tracking-[.15em] transition-all duration-500 hover:scale-105 mb-6 sm:mb-8 cursor-default text-white dark:text-white"
            style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 500,
              letterSpacing: '0.15em'
            }}
          >
            @isma.blog
          </div>
          <TypewriterHeadline phrase="КАК РАБОТАЕТ СИСТЕМА ЛЁГКОГО КОНТЕНТА?" />
          <p className="mt-3 text-lg md:text-xl text-subtle/90 max-w-3xl drop-shadow-[0_0_8px_rgba(139,92,246,0.2)] text-left mx-auto">
            Простая структура, которая даёт рост без необходимости говорить на камеру, сложного монтажа и выгорания
          </p>
        </RevealOnScroll>
      </section>

      {/* Диалоговый текст + галереи */}
      <section className="mx-auto max-w-screen-md px-4 sm:px-6 space-y-6 sm:space-y-8 pb-6 sm:pb-8">
        {[
          ["Ты наверняка видел мои «текстовые» Reels в ленте.", (
            <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5">
              <pre className="whitespace-pre-wrap text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)] text-left">{`И, скорее всего, у тебя возникал вопрос: «Как у него это работает?»

Давай разберёмся вместе.`}</pre>
            </div>
          )],
          ["Чтобы зритель не просто посмотрел твоё видео, а захотел подписаться, нужно решить 3 ключевые проблемы:", ``],
          ["1. Проблема незаметности", (
            <div>
              <p className="mb-4">Каждый день в Instagram загружают миллионы Reels. Но лента рекомендаций — одна.</p>
              <p className="mb-4">Твоя задача: пробить «баннерную слепоту» и заставить остановиться.</p>
              <p className="mb-4">Большинство создателей даже не задумываются об этом. А в нашем методе удержание внимания — основа основ.</p>
              <p className="mb-4">Мы отработали формулу, которая:</p>
              
              <div className="icon-block">
                <div className="icon-wrapper">
                  <img src="/magnet-icon.svg" alt="Magnet" className="wow-icon" />
                </div>
                <span>Цепляет с первых секунд</span>
              </div>
              
              <div className="icon-block">
                <div className="icon-wrapper">
                  <img src="/target-icon.svg" alt="Target" className="wow-icon" />
                </div>
                <span>Увеличивает глубину просмотра</span>
              </div>
              
              <div className="icon-block">
                <div className="icon-wrapper">
                  <img src="/arrow-up-icon.svg" alt="Arrow Up" className="wow-icon" />
                </div>
                <span>Выделяет твой контент из потока</span>
              </div>
            </div>
          )],
          ["2. Проблема «лайки есть, а подписок нет»", (
            <div>
              <p className="mb-4">Если Reels просто «прикольные» — подписываться не будут.</p>
              <p className="mb-4">Ключ к росту аудитории — ценность.</p>
              <p className="mb-4">Не сиюминутный смех, а реальная польза:</p>
              
              <div className="icon-block">
                <div className="icon-wrapper">
                  <img src="/key-icon.svg" alt="Key" className="wow-icon" />
                </div>
                <span>Решение проблемы</span>
              </div>
              
              <div className="icon-block">
                <div className="icon-wrapper">
                  <img src="/bulb-icon.svg" alt="Bulb" className="wow-icon" />
                </div>
                <span>Уникальные знания</span>
              </div>
              
              <div className="icon-block">
                <div className="icon-wrapper">
                  <img src="/target-icon.svg" alt="Target" className="wow-icon" />
                </div>
                <span>Чёткая выгода для зрителя</span>
              </div>
              
              <p className="mt-4 mb-4">В «текстовых» Reels транслировать ценность проще. Поэтому конверсия в подписки у них в разы выше.</p>
              <p className="mb-4">Пример: можно годами набирать 20 000 подписчиков… или получить их с одного удачного видео.</p>
              <p>А если таких видео будет 5, 10 или 20?</p>
            </div>
          )],
          ["3. Проблема алгоритмов", (
            <div>
              <p className="mb-4">Правда в том, что никто не знает точных правил Instagram.</p>
              <p className="mb-4">Но мы можем «договориться» с алгоритмом:</p>
              
              <div className="icon-block">
                <div className="icon-wrapper">
                  <img src="/clock-icon.svg" alt="Clock" className="wow-icon" />
                </div>
                <span>Регулярность — контент должен выходить часто</span>
              </div>
              
              <div className="icon-block">
                <div className="icon-wrapper">
                  <img src="/heart-icon.svg" alt="Heart" className="wow-icon" />
                </div>
                <span>Релевантность — попадать в интересы аудитории</span>
              </div>
              
              <div className="icon-block">
                <div className="icon-wrapper">
                  <img src="/arrow-up-icon.svg" alt="Arrow Up" className="wow-icon" />
                </div>
                <span>Вовлечённость — провоцировать действия</span>
              </div>
              
              <p className="mt-4 mb-4">Проблема в том, что:</p>
              
              <div className="icon-block">
                 <div className="icon-wrapper">
                   <img src="/clock-icon.svg" alt="Clock" className="wow-icon" />
                 </div>
                 <span>Тратить 3 часа на один Reels — нереально</span>
               </div>
               
               <div className="icon-block">
                 <div className="icon-wrapper">
                   <img src="/target-icon.svg" alt="Target" className="wow-icon" />
                 </div>
                 <span>Публиковать раз в неделю — бесполезно</span>
               </div>
               
               <div className="icon-block">
                 <div className="icon-wrapper">
                   <img src="/arrow-up-icon.svg" alt="Arrow Up" className="wow-icon" />
                 </div>
                 <span>Менять форматы — сбивает алгоритм</span>
               </div>
            </div>
          )],
          ["Как же всё-таки работает «Система Лёгкого Контента»?", (
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]">
                Текстовые Reels
              </h3>
              
              <h4 className="text-lg md:text-xl font-semibold text-white mb-3">
                Формат:
              </h4>
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-purple-400/30 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="flex-1">
                  5–7 секунд простого видео (идёте, пьёте кофе, смотрите в окно — да что угодно)
                </p>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-purple-400/30 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m0 0V3a1 1 0 011 1v10.586l-2-2V4H8v8.586l-2 2V4a1 1 0 011-1V2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  </svg>
                </div>
                <p className="flex-1">
                  Крупный, цепляющий заголовок поверх видео
                </p>
              </div>
              <div className="flex items-start gap-3 mb-6">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-purple-400/30 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <p className="flex-1">
                  Глубокая подпись с раскрытием темы заголовка
                </p>
              </div>
              
              <h4 className="text-lg md:text-xl font-semibold text-white mb-3">
                Особенности:
              </h4>
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-purple-400/30 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <p className="flex-1">
                  Текст поверх фонового видео привлекает внимание с первых секунд
                </p>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-purple-400/30 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <p className="flex-1">
                  Видео повторяется, пока зритель читает подпись — это увеличивает досмотр
                </p>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-purple-400/30 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18 18M5.636 5.636L6 6" />
                  </svg>
                </div>
                <p className="flex-1">
                  Фон может быть любым, при этом говорить на камеру необязательно
                </p>
              </div>
              <div className="flex items-start gap-3 mb-6">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-purple-400/30 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="flex-1">
                  Создаются быстро, без сложного монтажа
                </p>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]">
                Карусели
              </h3>
              
              <p className="mb-6">
                С марта 2025 я начал активно использовать карусели — и они стали приносить отличный результат. Иногда они даже набирали больше охватов, чем Reels. Формат оказался не просто альтернативным, а равноправным инструментом роста.
              </p>
              
              <h4 className="text-lg md:text-xl font-semibold text-white mb-3">
                Формат:
              </h4>
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-purple-400/30 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <p className="flex-1">
                  до 20 слайдов — всё зависит от объёма мысли
                </p>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-purple-400/30 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                </div>
                <p className="flex-1">
                  Можно добавить фоновое аудио — и Instagram будет продвигать карусель наравне с Reels
                </p>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-purple-400/30 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="flex-1">
                  Каждый слайд — это кадр с текстом или изображением
                </p>
              </div>
              <div className="flex items-start gap-3 mb-6">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-purple-400/30 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <p className="flex-1">
                  Первый слайд задаёт тему и вовлекает в просмотр, но не обязательно с крупным текстом
                </p>
              </div>
              
              <h4 className="text-lg md:text-xl font-semibold text-white mb-3">
                Особенности:
              </h4>
              <div className="flex items-start gap-3 mb-4">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-purple-400/30 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <p className="flex-1">
                  Можно использовать до 20 слайдов для раскрытия темы
                </p>
              </div>
              <div className="flex items-start gap-3 mb-6">
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-purple-400/30 backdrop-blur-sm">
                  <svg className="w-4 h-4 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                <p className="flex-1">
                  Фоны, иллюстрации или изображения — листание вовлекает и удерживает внимание
                </p>
              </div>
            </div>
          )],
        ].map(([title, body], i) => (
          <RevealOnScroll key={i} delay={i * 80}>
             <div className={`rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 ${
                [0, 1, 2, 3, 4, 5].includes(i)
                  ? 'bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5'
                  : 'bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5 hover:bg-gray-500/15'
              }`}>
               <h3 className={`font-semibold mb-2 sm:mb-3 ${
                 [0, 1, 2, 3, 4, 5].includes(i)
                   ? 'text-xl sm:text-2xl md:text-3xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent animate-premium-fade-in'
                   : 'text-lg sm:text-xl md:text-2xl text-white drop-shadow-[0_0_8px_rgba(139,92,246,0.3)]'
               }`} style={[0, 1, 2, 3, 4, 5].includes(i) ? {
                 fontFamily: 'Inter, system-ui, sans-serif',
                 fontWeight: '300',
                 letterSpacing: '0.05em',
                 textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                 filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2))'
               } : {}}>{title}</h3>
               <pre className="whitespace-pre-wrap text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)]">{body}</pre>


            </div>
          </RevealOnScroll>
        ))}

        {/* Преимущества системы с иконками */}
        <AdvantagesBlock 
                title="Преимущества системы"
                delay={400}
                advantages={[
                  {
                    icon: (
                      <svg className="w-5 h-5 text-purple-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        <circle cx="9" cy="12" r="1" fill="currentColor" className="animate-pulse" />
                      </svg>
                    ),
                    text: "Крупный заголовок цепляет с первых секунд"
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-emerald-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        <circle cx="12" cy="12" r="2" fill="currentColor" className="animate-spin" style={{animationDuration: '3s'}} />
                      </svg>
                    ),
                    text: "Видео повторяется, пока читают текст, повышая досмотры"
                   },
                   {
                     icon: (
                       <svg className="w-5 h-5 text-cyan-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                         <circle cx="12" cy="9" r="1" fill="currentColor" className="animate-bounce" />
                       </svg>
                     ),
                     text: "Не нужно говорить на камеру — акцент на тексте и смысле"
                   },
                   {
                     icon: (
                       <svg className="w-5 h-5 text-rose-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                         <circle cx="13" cy="7" r="1" fill="currentColor" className="animate-pulse" />
                       </svg>
                     ),
                     text: "Делать просто — без сложного монтажа"
                   },
                   {
                     icon: (
                       <svg className="w-5 h-5 text-amber-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                         <circle cx="12" cy="16" r="1" fill="currentColor" className="animate-pulse" />
                       </svg>
                     ),
                     text: "Алгоритмы их любят"
                   },
                   {
                     icon: (
                       <svg className="w-5 h-5 text-indigo-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                         <circle cx="12" cy="8" r="1" fill="currentColor" className="animate-bounce" />
                       </svg>
                     ),
                     text: "Люди вовлекаются в «листание»"
                   },
                   {
                     icon: (
                       <svg className="w-5 h-5 text-teal-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                         <circle cx="12" cy="12" r="1" fill="currentColor" className="animate-pulse" />
                       </svg>
                     ),
                     text: "Формат удерживает внимание до конца"
                   },
                   {
                     icon: (
                       <svg className="w-5 h-5 text-violet-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                         <circle cx="12" cy="8" r="1" fill="currentColor" className="animate-pulse" />
                       </svg>
                     ),
                     text: "Позволяет развернуть мысль или инструкцию на нескольких слайдах"
                   }
                ]}
              />

        {[
          ["P.S.", `Если бы мне показали это раньше, я сэкономил бы кучу времени. Сейчас этот шанс есть у тебя.`],
          ["P.S.S.", `Жми кнопку и читай дальше.`],
        ].map(([title, body], i) => (
          <RevealOnScroll key={i} delay={i * 80}>
             <div className="rounded-xl sm:rounded-2xl bg-white/5 p-4 sm:p-6 ring-1 ring-white/10 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 hover:bg-white/8">
               <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3 drop-shadow-[0_0_8px_rgba(139,92,246,0.3)]">{title}</h3>
               <pre className="whitespace-pre-wrap text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow-[0_0_4px_rgba(139,92,246,0.2)]">{body}</pre>


            </div>
          </RevealOnScroll>
        ))}

      </section>

      {/* CTA */}
       <section className="mx-auto max-w-screen-md px-4 sm:px-6 pt-2 pb-16 sm:pb-24">
         <RevealOnScroll delay={100}>
           <a
             href="/offer"
             className="group inline-flex items-center justify-center rounded-full px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.05] hover:-translate-y-1 w-full sm:w-auto text-center overflow-hidden relative"
             style={{
               background: 'linear-gradient(135deg, #9333ea 0%, #2563eb 50%, #06b6d4 100%)',
               border: '1px solid rgba(255, 255, 255, 0.3)',
               boxShadow: '0 8px 32px rgba(147, 51, 234, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
             }}
             onMouseEnter={(e) => {
               e.currentTarget.style.background = 'linear-gradient(135deg, #a855f7 0%, #3b82f6 50%, #0891b2 100%)';
               e.currentTarget.style.boxShadow = '0 16px 48px rgba(147, 51, 234, 0.4), 0 8px 24px rgba(37, 99, 235, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)';
             }}
             onMouseLeave={(e) => {
               e.currentTarget.style.background = 'linear-gradient(135deg, #9333ea 0%, #2563eb 50%, #06b6d4 100%)';
               e.currentTarget.style.boxShadow = '0 8px 32px rgba(147, 51, 234, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
             }}
           >
             <span className="relative z-10" style={{
               textShadow: '0 2px 4px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.3)'
             }}>Продолжить чтение</span>
             <span className="ml-2 inline-block transition-transform group-hover:translate-x-1 relative z-10" style={{
               textShadow: '0 2px 4px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.3)'
             }}>→</span>
           </a>
         </RevealOnScroll>
       </section>
       
       <Footer />
       
       {/* Скрытая форма GetCourse */}
       <GetCoursePayForm />
       
       {/* Контейнер для GetCourse-виджета */}
       <div id="getcourse-widget-container" style={{ display: 'none', padding: '20px', backgroundColor: 'rgba(0,0,0,0.8)', position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', zIndex: '9999' }}>
         <div style={{ position: 'relative', maxWidth: '800px', margin: '50px auto', backgroundColor: 'white', borderRadius: '10px', padding: '20px' }}>
           <button 
             onClick={() => {
               const container = document.getElementById('getcourse-widget-container');
               if (container) container.style.display = 'none';
             }}
             style={{ position: 'absolute', top: '10px', right: '15px', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}
           >
             ×
           </button>
           <div id="getcourse-widget-content"></div>
         </div>
       </div>
    </main>
  );
}