"use client";

import { useState } from "react";
import Script from "next/script";
import LoadingScreen from "@/components/LoadingScreen";
import RevealOnScroll from "@/components/RevealOnScroll";
import { ImageAutoSlider } from "@/app/components/ui/image-auto-slider";
import TypewriterHeadline from "@/components/TypewriterHeadline";
import AdvantagesBlock from "@/components/AdvantagesBlock";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { Squares } from "@/components/ui/squares-background";
import Footer from "@/components/Footer";
import Image from "next/image";
import { LiquidButton } from "./components/ui/liquid-glass-button";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  // Изображения для галерей
  const coverageImages = [
    { src: "/Охваты 1.jpg", alt: "Охваты: пример 1" },
    { src: "/Охваты 2.jpg", alt: "Охваты: пример 2" },
    { src: "/Охваты 3.jpg", alt: "Охваты: пример 3" },
    { src: "/Охваты 4.jpg", alt: "Охваты: пример 4" }
  ];

  const failureImages = [
    { src: "/Низкие 1.jpg", alt: "Низкие просмотры: пример 1" },
    { src: "/Низкие 2.jpg", alt: "Низкие просмотры: пример 2" },
    { src: "/Низкие 3.jpg", alt: "Низкие просмотры: пример 3" }
  ];

  const subscribersImages = [
    { src: "/50 тыс.jpg", alt: "Количество подписчиков: 50 тысяч" }
  ];

  const reelsImages = [
    { src: "/Пример 1.jpg", alt: "Охваты Reels: пример 1" },
    { src: "/Пример 2.jpg", alt: "Охваты Reels: пример 2" },
    { src: "/Пример 3.jpg", alt: "Охваты Reels: пример 3" },
    { src: "/Пример 4.jpg", alt: "Охваты Reels: пример 4" }
  ];

  const thanksImages = [
    { src: "/Спасибо 1.jpg", alt: "Сообщения с благодарностями: пример 1" },
    { src: "/Спасибо 2.jpg", alt: "Сообщения с благодарностями: пример 2" },
    { src: "/Спасибо 3.jpg", alt: "Сообщения с благодарностями: пример 3" },
    { src: "/Спасибо 4.jpg", alt: "Сообщения с благодарностями: пример 4" }
  ];

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
          <TypewriterHeadline phrase="СИСТЕМА ЛЁГКОГО КОНТЕНТА" />
          <p className="mt-3 text-lg md:text-xl text-subtle/90 max-w-3xl drop-shadow-[0_0_8px_rgba(139,92,246,0.2)] text-left mx-auto">
            Как я вырос до 50 000 подписчиков с помощью Системы Лёгкого Контента<br />
            (без съёмок «говорящей головы» и сложного монтажа)
          </p>
        </RevealOnScroll>
      </section>

      {/* Знакомо чувство? */}
      <section className="relative mx-auto max-w-screen-xl px-4 sm:px-6 py-6 sm:py-8">
        <RevealOnScroll>
        <div className="text-center space-y-6 max-w-4xl mx-auto mb-8">
          <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5 mb-6">
            <pre className="whitespace-pre-line text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow text-left">
              <span className="text-2xl md:text-3xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent animate-premium-fade-in block mb-4" style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: '300',
                letterSpacing: '0.05em',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2))'
              }}>
                Знакомо чувство?
              </span>
              {`Листаешь ленту, видишь блогеров с тысячами подписчиков и думаешь:
«Хочу так же, но… себя снимать некомфортно, монтаж съедает часы, а результат — так себе».

Я был на твоём месте.`}
            </pre>
          </div>
        </div>
        </RevealOnScroll>
      </section>



      {/* Мой путь */}
      <section className="relative mx-auto max-w-screen-xl px-4 sm:px-6 py-6 sm:py-8">
        <RevealOnScroll>
        <div className="text-center space-y-6 max-w-4xl mx-auto mb-8">
          {/* Блок о системе лёгкого контента */}
          <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5 mb-6">
            <pre className="whitespace-pre-line text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow text-left">
              <span className="text-2xl md:text-3xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent animate-premium-fade-in block mb-4" style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: '300',
                letterSpacing: '0.05em',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2))'
              }}>
                В 2024 году я открыл для себя Систему Лёгкого Контента
              </span>
              {`Самый вирусный контент в Instagram — не всегда тот, где говорят в камеру. Работает простота:`}
            </pre>
            
            {/* Список с иконками */}
            <div className="space-y-4 my-6 text-left">
              <div className="flex items-start gap-4 group mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-rose-500/20 to-pink-600/30 border border-rose-400/30 flex items-center justify-center group-hover:from-rose-400/30 group-hover:to-pink-500/40 group-hover:border-rose-300/50 transition-all duration-300 shadow-lg group-hover:shadow-rose-500/25">
                  <svg className="w-5 h-5 text-rose-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-subtle/90 group-hover:text-white transition-colors duration-300 flex-1 text-base sm:text-lg leading-relaxed drop-shadow">короткое видео 5–7 секунд на фоне;</span>
              </div>
              
              <div className="flex items-start gap-4 group mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-yellow-600/30 border border-amber-400/30 flex items-center justify-center group-hover:from-amber-400/30 group-hover:to-yellow-500/40 group-hover:border-amber-300/50 transition-all duration-300 shadow-lg group-hover:shadow-amber-500/25">
                  <svg className="w-5 h-5 text-amber-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                </div>
                <span className="text-subtle/90 group-hover:text-white transition-colors duration-300 flex-1 text-base sm:text-lg leading-relaxed drop-shadow">крупный текст поверх;</span>
              </div>
              
              <div className="flex items-start gap-4 group mb-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/20 to-green-600/30 border border-emerald-400/30 flex items-center justify-center group-hover:from-emerald-400/30 group-hover:to-green-500/40 group-hover:border-emerald-300/50 transition-all duration-300 shadow-lg group-hover:shadow-emerald-500/25">
                  <svg className="w-5 h-5 text-emerald-300 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-subtle/90 group-hover:text-white transition-colors duration-300 flex-1 text-base sm:text-lg leading-relaxed drop-shadow">сильное описание Reels, которое раскрывает мысль.</span>
              </div>
            </div>
            
            <pre className="whitespace-pre-line text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow text-left">
              {`И это сработало. Я адаптировал систему под себя.`}
            </pre>
            
            {/* Примеры формата */}
            <div className="mt-6">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-4 text-center">
                Примеры формата
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square rounded-lg overflow-hidden border border-white/20 shadow-lg hover:shadow-xl hover:border-white/40 transition-all duration-300 hover:scale-105">
                  <Image
                    src="/Пример 1.jpg"
                    alt="Пример формата 1"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden border border-white/20 shadow-lg hover:shadow-xl hover:border-white/40 transition-all duration-300 hover:scale-105">
                  <Image
                    src="/Пример 2.jpg"
                    alt="Пример формата 2"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden border border-white/20 shadow-lg hover:shadow-xl hover:border-white/40 transition-all duration-300 hover:scale-105">
                  <Image
                    src="/Пример 3.jpg"
                    alt="Пример формата 3"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden border border-white/20 shadow-lg hover:shadow-xl hover:border-white/40 transition-all duration-300 hover:scale-105">
                  <Image
                    src="/Пример 4.jpg"
                    alt="Пример формата 4"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5 mb-6">
            <pre className="whitespace-pre-line text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow text-left">
              <span className="text-2xl md:text-3xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent animate-premium-fade-in block mb-4" style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: '300',
                letterSpacing: '0.05em',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2))'
              }}>
                Мой путь: 10 000 подписчиков за 2,5 месяца
              </span>
              {`12 октября 2024 года я принял решение: иду этим путём всерьёз.

И сразу стало ясно — лёгким он не будет.
Первые недели были испытанием на прочность: 44 дня подряд я выкладывал новые ролики.
И что в ответ? Крошечные просмотры. Пустота в статистике. Всего +140 подписчиков за полтора месяца.

Каждый день я смотрел на эти цифры и думал: «Может, зря я всё это начал?»
Мотивация таяла на глазах.`}
            </pre>
          </div>

        </div>
        </RevealOnScroll>
      </section>

      {/* Низкие просмотры */}
      <section className="relative mx-auto max-w-screen-xl px-4 sm:px-6 py-6 sm:py-8">
        <RevealOnScroll>
          <div className="text-center space-y-6 max-w-4xl mx-auto mb-8">
            <p className="text-center text-subtle/80 text-base font-light mb-6 italic" style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '300',
              letterSpacing: '0.05em'
            }}>
              Так выглядели мои просмотры в начале
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-500 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-1 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5">
                <Image
                  src="/Низкие 1 .jpg"
                  alt="Низкие просмотры: пример 1"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-500 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-1 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5">
                <Image
                  src="/Низкие 2.jpg"
                  alt="Низкие просмотры: пример 2"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-500 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-1 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5">
                <Image
                  src="/Низкие 3.jpg"
                  alt="Низкие просмотры: пример 3"
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>

      {/* Но потом… */}
      <section className="relative mx-auto max-w-screen-xl px-4 sm:px-6 py-6 sm:py-8">
        <RevealOnScroll>
        <div className="text-center space-y-6 max-w-4xl mx-auto mb-8">
          <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-white/10 backdrop-blur-sm border border-white/10">
            <pre className="whitespace-pre-line text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow text-left">
              <span className="text-2xl md:text-3xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent animate-premium-fade-in block mb-4" style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: '300',
                letterSpacing: '0.05em',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2))'
              }}>
                Но потом…
              </span>
              {`29 ноября 2024 первый ролик по Системе «выстрелил»:

+500 подписчиков за 3 дня,

ещё +1000 — за следующую неделю,

к 29 декабря — уже 10 000 подписчиков.`}
            </pre>
          </div>
          
          {/* Изображение "Выстрелил" */}
          <div className="flex flex-col items-center mt-8">
            <div className="rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-500 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-1 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5 max-w-md">
              <Image
                src="/Выстрелил.jpg"
                alt="Результат: ролик выстрелил"
                width={400}
                height={300}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-center text-subtle/80 text-base font-light mt-4 italic" style={{
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: '300',
              letterSpacing: '0.05em'
            }}>
              Тот самый reels, с которого пошел рост.
            </p>
          </div>
          
        </div>
        </RevealOnScroll>
      </section>

      {/* Сейчас у меня */}
      <section className="relative mx-auto max-w-screen-xl px-4 sm:px-6 py-6 sm:py-8">
        <RevealOnScroll>
        <div className="text-center space-y-6 max-w-4xl mx-auto mb-8">
          <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5 mb-6">
            <pre className="whitespace-pre-line text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow text-left">
              <span className="text-2xl md:text-3xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent animate-premium-fade-in block mb-4" style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: '300',
                letterSpacing: '0.05em',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2))'
              }}>
                Сейчас у меня
              </span>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <svg className="w-8 h-8 text-blue-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="userGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#1D4ED8" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#userGradient)" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-bounce"></div>
                </div>
                <span>50 000+ подписчиков — и цифра растёт каждый день.</span>
              </div>
            </pre>
            
            {/* Изображение "50 тыс" */}
            <div className="flex justify-center my-6">
              <div className="rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-500 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-1 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5 max-w-sm">
                <Image
                  src="/50 тыс.jpg"
                  alt="50 тысяч подписчиков"
                  width={350}
                  height={250}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow text-left mb-4">
              <div className="relative">
                <svg className="w-8 h-8 text-purple-500 hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#7C3AED" />
                    </linearGradient>
                  </defs>
                  <path fill="url(#chartGradient)" d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"/>
                </svg>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-ping"></div>
              </div>
              <span>Миллионные охваты — Reels стабильно собирают сотни тысяч и миллионы просмотров.</span>
            </div>
            
            {/* Изображения "Охваты" */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
              {[
                { src: "/Охваты 1.jpg", alt: "Охваты Reels: пример 1" },
                { src: "/Охваты 2.jpg", alt: "Охваты Reels: пример 2" },
                { src: "/Охваты 3.jpg", alt: "Охваты Reels: пример 3" },
                { src: "/Охваты 4.jpg", alt: "Охваты Reels: пример 4" }
              ].map((image, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-500 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-1 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
            
            <pre className="whitespace-pre-line text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow text-left">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <svg className="w-8 h-8 text-pink-500 hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EC4899" />
                        <stop offset="100%" stopColor="#BE185D" />
                      </linearGradient>
                    </defs>
                    <path fill="url(#heartGradient)" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                </div>
                <span>Сообщения с благодарностями — пишут, что тексты помогают, направляют, дают опору.</span>
              </div>
            </pre>
            
            {/* Сетка изображений сообщений */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-500 ring-2 ring-gray-300/50 flex items-center justify-center">
                <Image
                  src="/photo_2025-07-22_19-30-39.jpg"
                  alt="Сообщение с благодарностью 1"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto max-w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-500 ring-2 ring-gray-300/50 flex items-center justify-center">
                <Image
                  src="/photo_2025-07-22_19-30-41.jpg"
                  alt="Сообщение с благодарностью 2"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto max-w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-500 ring-2 ring-gray-300/50 flex items-center justify-center">
                <Image
                  src="/photo_2025-07-22_19-30-43.jpg"
                  alt="Сообщение с благодарностью 3"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto max-w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-500 ring-2 ring-gray-300/50 flex items-center justify-center">
                <Image
                  src="/photo_2025-07-22_19-30-45.jpg"
                  alt="Сообщение с благодарностью 4"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto max-w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-500 ring-2 ring-gray-300/50 flex items-center justify-center">
                <Image
                  src="/photo_2025-07-22_19-30-46.jpg"
                  alt="Сообщение с благодарностью 5"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto max-w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-500 ring-2 ring-gray-300/50 flex items-center justify-center">
                <Image
                  src="/photo_2025-07-22_19-30-48.jpg"
                  alt="Сообщение с благодарностью 6"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-auto h-auto max-w-full hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            <pre className="whitespace-pre-line text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow text-left mt-8">
              {``}
            </pre>
          </div>
        </div>
        </RevealOnScroll>
      </section>

      {/* Новый блок перед "Хочешь начать прямо сейчас?" */}
      <section className="relative mx-auto max-w-screen-xl px-4 sm:px-6 py-6 sm:py-8">
        <RevealOnScroll>
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5 mb-8">
            <pre className="whitespace-pre-line text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow text-left">
              {`Круто, что ты дочитал(а) до этого места.

Если эта история откликнулась — давай превратим её в понятные шаги. Без пафоса и лишних слов, только то, что работает.`}
            </pre>
          </div>
        </div>
        </RevealOnScroll>
      </section>

      {/* Хочешь начать прямо сейчас? */}
      <section className="relative mx-auto max-w-screen-xl px-4 sm:px-6 py-6 sm:py-8">
        <RevealOnScroll>
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5 mb-8">
            <pre className="whitespace-pre-line text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow text-left">
              <span className="text-2xl md:text-3xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent animate-premium-fade-in block mb-4" style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: '300',
                letterSpacing: '0.05em',
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2))'
              }}>
                Хочешь начать прямо сейчас?
              </span>
              {`«Хватит тянуть — давай суть!»

Окей. Держи пошаговый разбор метода.

👉 Жми на кнопку ниже и продолжай чтение…`}
            </pre>
          </div>
          
          <div className="flex justify-center">
            <a
              href="/method"
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
              }}>читать дальше</span>
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1 relative z-10" style={{
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.3)'
              }}>→</span>
            </a>
          </div>
        </div>
        </RevealOnScroll>
      </section>

      <Footer />
      

    </main>
  );
}