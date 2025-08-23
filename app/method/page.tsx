"use client";

import { Squares } from "../components/ui/squares-background";
import Footer from "@/components/Footer";

// SVG Icons
const CheckCircleIcon = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const LightbulbIcon = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
  </svg>
);

const CameraIcon = ({ className = "" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
  </svg>
);

export default function MethodPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <Squares />
      
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                СИСТЕМА ЛЕГКОГО КОНТЕНТА
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Проверенная методика создания вирусного контента, которая помогла мне набрать 100К подписчиков
              </p>
            </div>
            
            <div className="space-y-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <LightbulbIcon className="w-8 h-8 text-yellow-400 mr-4" />
                  <h2 className="text-3xl font-bold text-yellow-400">Суть метода</h2>
                </div>
                <p className="text-lg leading-relaxed text-gray-300">
                  Система Легкого Контента — это пошаговая методика создания контента, который:
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    Создается быстро и без стресса
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    Получает высокую вовлеченность
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    Привлекает целевую аудitorию
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    Масштабируется на любую нишу
                  </li>
                </ul>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-300/20">
                  <CameraIcon className="w-10 h-10 text-purple-300 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4 text-purple-300">Визуальный контент</h3>
                  <p className="text-gray-300">
                    Научитесь создавать цепляющие обложки и визуалы, которые останавливают скролл и заставляют смотреть ваш контент.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-cyan-300/20">
                  <LightbulbIcon className="w-10 h-10 text-cyan-300 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Идеи контента</h3>
                  <p className="text-gray-300">
                    Получите систему генерации идей, которая обеспечит вас контентом на месяцы вперед. Никогда больше не думайте "о чем писать".
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-rose-500/10 to-orange-500/10 rounded-2xl p-8 border border-rose-300/20">
                <h3 className="text-2xl font-bold mb-6 text-rose-300">Что входит в систему:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">Модуль 1: Основы</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Анализ целевой аудитории</li>
                      <li>• Выбор ниши и позиционирование</li>
                      <li>• Создание контент-плана</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-white">Модуль 2: Практика</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Шаблоны для постов и рилсов</li>
                      <li>• Техники написания цепляющих текстов</li>
                      <li>• Оптимизация под алгоритмы</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-12">
                <a 
                  href="/offer" 
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Получить систему
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}