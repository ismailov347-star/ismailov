"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import RevealOnScroll from "@/components/RevealOnScroll";
import { ImageAutoSlider } from "@/app/components/ui/image-auto-slider";
import TypewriterHeadline from "@/components/TypewriterHeadline";
import AdvantagesBlock from "@/components/AdvantagesBlock";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { Squares } from "../components/ui/squares-background";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function HistoryPage() {
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
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight headline-lepka text-left mx-auto max-w-3xl">
            СИСТЕМА ЛЁГКОГО КОНТЕНТА
          </h1>
          <p className="mt-6 text-lg md:text-xl text-subtle/90 max-w-3xl drop-shadow-[0_0_8px_rgba(139,92,246,0.2)] text-left mx-auto">
            Как я вырос до 50 000 подписчиков с помощью Системы Лёгкого Контента<br />
            (без съёмок «говорящей головы» и сложного монтажа)
          </p>
        </RevealOnScroll>
      </section>

      {/* Знакомо чувство? */}
      <section className="relative mx-auto max-w-screen-xl px-4 sm:px-6 py-6 sm:py-8">
        <RevealOnScroll>
        <div className="text-center space-y-6 max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent animate-premium-fade-in mb-6" style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '0.05em',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2))'
          }}>
            Знакомо чувство?
          </h2>
          <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5 mb-6">
            <pre className="whitespace-pre-line text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow text-left">{`Листаешь ленту, видишь блогеров с тысячами подписчиков и думаешь:
«Хочу так же, но… себя снимать некомфортно, монтаж съедает часы, а результат — так себе».

Я был на твоём месте.`}</pre>
          </div>
        </div>
        </RevealOnScroll>
      </section>



      {/* Мой путь */}
      <section className="relative mx-auto max-w-screen-xl px-4 sm:px-6 py-6 sm:py-8">
        <RevealOnScroll>
        <div className="text-center space-y-6 max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent animate-premium-fade-in mb-6" style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '0.05em',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2))'
          }}>
            Мой путь: 10 000 подписчиков за 2,5 месяца
          </h2>
          <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5 mb-6">
            <pre className="whitespace-pre-line text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow text-left">{`12 октября 2024 года я принял решение: иду этим путём всерьёз.

И сразу стало ясно — лёгким он не будет.
Первые недели были испытанием на прочность: 44 дня подряд я выкладывал новые ролики.
И что в ответ? Крошечные просмотры. Пустота в статистике. Всего +140 подписчиков за полтора месяца.

Каждый день я смотрел на эти цифры и думал: «Может, зря я всё это начал?»
Мотивация таяла на глазах`}</pre>
          </div>

        </div>
        </RevealOnScroll>
      </section>

      {/* Но потом… */}
      <section className="relative mx-auto max-w-screen-xl px-4 sm:px-6 py-6 sm:py-8">
        <RevealOnScroll>
        <div className="text-center space-y-6 max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent animate-premium-fade-in mb-6" style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '0.05em',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2))'
          }}>
            Но потом…
          </h2>
          <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5">
            <pre className="whitespace-pre-line text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow text-left">{`29 ноября 2024 первый ролик по Системе «выстрелил»:

+500 подписчиков за 3 дня,

ещё +1000 — за следующую неделю,

к 29 декабря — уже 10 000 подписчиков.`}</pre>
          </div>
        </div>
        </RevealOnScroll>
      </section>

      {/* Сейчас у меня */}
      <section className="relative mx-auto max-w-screen-xl px-4 sm:px-6 py-6 sm:py-8">
        <RevealOnScroll>
        <div className="text-center space-y-6 max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent animate-premium-fade-in mb-6" style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '0.05em',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2))'
          }}>
            Сейчас у меня
          </h2>
          
          <div className="mb-8">
            <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5 mb-6">
              <pre className="whitespace-pre-line text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow text-left">{`📌 50 000+ подписчиков — и цифра растёт каждый день.
📸 [Место для скринов количества подписчиков]`}</pre>
            </div>
          </div>

          <div className="mb-8">
            <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5 mb-6">
              <pre className="whitespace-pre-line text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow text-left">{`📌 Миллионные охваты — Reels стабильно собирают сотни тысяч и миллионы просмотров.
📸 [Место для скринов охватов Reels]`}</pre>
            </div>
          </div>

          <div className="mb-8">
            <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5 mb-6">
              <pre className="whitespace-pre-line text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow text-left">{`📌 Сообщения с благодарностями — пишут, что тексты помогают, направляют, дают опору.
📸 [Место для скринов сообщений]`}</pre>
            </div>
          </div>
        </div>
        </RevealOnScroll>
      </section>

      {/* Хочешь начать прямо сейчас? */}
      <section className="relative mx-auto max-w-screen-xl px-4 sm:px-6 py-6 sm:py-8">
        <RevealOnScroll>
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-light bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 bg-clip-text text-transparent animate-premium-fade-in mb-6" style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontWeight: '300',
            letterSpacing: '0.05em',
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
            filter: 'drop-shadow(0 1px 2px rgba(255,215,0,0.2))'
          }}>
            Хочешь начать прямо сейчас?
          </h2>
          <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5 mb-6">
            <pre className="whitespace-pre-line text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow text-left">{`«Хватит тянуть — давай суть!»
Окей. Держи пошаговый разбор метода.`}</pre>
          </div>
          <div className="rounded-xl sm:rounded-2xl p-4 sm:p-6 ring-1 shadow-soft hover:shadow-glow transition-all duration-500 hover:ring-accent/30 bg-gradient-to-br from-gray-500/10 via-slate-400/5 to-gray-600/15 ring-amber-500/10 backdrop-blur-sm border border-amber-500/5 mb-8">
            <pre className="whitespace-pre-line text-subtle/90 leading-relaxed text-base sm:text-lg drop-shadow text-left">{`👉 Жми на кнопку ниже и продолжай чтение…`}</pre>
          </div>
          
          <div className="flex justify-center">
            <a 
              href="/method" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent to-accent/80 text-white font-semibold rounded-xl hover:from-accent/90 hover:to-accent/70 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Изучить метод
            </a>
          </div>
        </div>
        </RevealOnScroll>
      </section>

      <Footer />
    </main>
  );
}