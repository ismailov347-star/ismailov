'use client';

import React, { useEffect, useRef } from 'react';
import { Noise } from '@/app/components/ui/noise';
import { CanvasRevealEffect } from '@/app/components/ui/canvas-reveal-effect';
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";

const MyBlogStory = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animatedElements = entry.target.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-up');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="relative">
      {/* Noise Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <Noise
          patternSize={100}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={3}
          patternAlpha={25}
        />
      </div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div className="relative z-20 container mx-auto max-w-screen-md pt-20">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
               <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                 СИСТЕМА ЛЕГКОГО КОНТЕНТА
               </span>
             </h1>
            <div className="max-w-5xl mx-auto">
              <div className="relative group">
                {/* Анимированная градиентная рамка */}
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 animate-pulse transition duration-1000"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 rounded-2xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
                
                {/* Основной контейнер */}
                <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl p-8 border border-slate-600/50">
                  {/* Декоративные элементы */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  <div className="absolute top-4 left-8 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
                  <div className="absolute top-4 left-12 w-2 h-2 bg-red-400 rounded-full animate-ping" style={{animationDelay: '0.6s'}}></div>
                  
                  <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6 leading-tight mt-4">
                    Моя история успеха в блогинге
                  </h2>
                  <h3 className="text-xl md:text-2xl font-bold text-left leading-relaxed">
                      <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                        Как я вырос до 50 000 подписчиков с помощью Системы Легкого Контента (без съемок "говорящей головы" и сложного монтажа)
                      </span>
                    </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-10">
             <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
               <p className="text-xl text-slate-200 leading-relaxed font-light">
                 Знакомо ли тебе это чувство? Ты листаешь ленту, видишь блогеров с тысячами подписчиков и думаешь:
               </p>
             </div>
             
             <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
               <div className="relative group">
                 {/* Canvas Reveal Effect рамка */}
                 <div className="absolute -inset-2 rounded-r-xl overflow-hidden">
                   <CanvasRevealEffect
                     containerClassName="bg-transparent"
                     colors={["#06b6d4", "#3b82f6", "#8b5cf6"]}
                     opacities={[0.1, 0.15, 0.2]}
                     animationSpeed={4}
                   />
                 </div>
                 <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-600/30 rounded-r-xl blur-sm"></div>
                 
                 <blockquote className="relative border-l-4 border-blue-400 pl-8 py-6 bg-slate-800/90 rounded-r-xl backdrop-blur-sm border border-cyan-500/50">
                   <p className="text-xl italic text-blue-200 leading-relaxed font-medium">
                     "Я тоже так хочу, но... снимать себя на камеру не комфортно, монтаж занимает часы, а результаты не радуют".
                   </p>
                 </blockquote>
               </div>
             </div>
             
             <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
               <p className="text-xl text-slate-200 leading-relaxed font-light">
                 Я был на твоем месте.
               </p>
             </div>
             
             <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
               <p className="text-xl text-slate-200 leading-relaxed font-light">
                 В <span className="font-bold text-yellow-400">2024</span> году я открыл для себя Систему Легкого Контента:
               </p>
             </div>
             
             <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
               <div className="relative group">
                 {/* Canvas Reveal Effect рамка */}
                 <div className="absolute -inset-2 rounded-2xl overflow-hidden">
                   <CanvasRevealEffect
                     containerClassName="bg-transparent"
                     colors={["#ff1493", "#00ffff", "#ffff00"]}
                     opacities={[0.1, 0.15, 0.2]}
                     animationSpeed={4}
                   />
                 </div>
                 <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/30 via-cyan-400/30 via-yellow-300/30 to-purple-500/30 rounded-2xl blur-sm"></div>
                 
                 <div className="relative bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-pink-500/50 backdrop-blur-sm">
                   <div className="text-xl text-white leading-relaxed font-semibold text-center">
                     <TextGenerateEffect 
                        words="Самый вирусный контент в Instagram — не всегда тот, где люди говорят в камеру."
                        className="text-white"
                        duration={1.5}
                        filter={true}
                      />
                   </div>
                 </div>
               </div>
             </div>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="relative group">
                {/* Canvas Reveal Effect рамка */}
                <div className="absolute -inset-2 rounded-2xl overflow-hidden">
                  <CanvasRevealEffect
                     containerClassName="bg-transparent"
                     colors={["#32cd32", "#0064ff", "#8000ff"]}
                     opacities={[0.1, 0.15, 0.2]}
                     animationSpeed={4}
                   />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400/30 via-blue-500/30 to-purple-600/30 rounded-2xl blur-sm"></div>
                
                <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-700/80 p-8 rounded-2xl border border-green-400/50 backdrop-blur-sm">
                  <p className="text-2xl font-bold mb-6 text-white">Просто:</p>
                  <ul className="space-y-4 text-lg text-slate-200">
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></span>
                      <span>Короткое видео (<span className="font-semibold text-yellow-400">5-7</span> секунд)</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></span>
                      <span>Крупный текст поверх видео</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></span>
                      <span>Текст в описании reels, раскрывающий тему</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <p className="text-2xl text-white leading-relaxed font-bold text-center">
                И это сработало.
              </p>
            </div>
            
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <p className="text-xl text-slate-200 leading-relaxed font-light">
                Я адаптировал эту Систему Легкого Контента под себя. Мой путь: до <span className="font-bold text-yellow-400">10 тысяч</span> подписчиков за <span className="font-bold text-yellow-400">2,5 месяца</span>.
              </p>
            </div>
            
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <p className="text-xl text-slate-200 leading-relaxed font-light">
                Я твердо решил развивать свой блог с помощью этого метода <span className="font-bold text-yellow-400">12 октября 2024</span> года.
              </p>
            </div>
            
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <p className="text-xl text-slate-200 leading-relaxed font-light">
                Первые недели тестирования Системы Легкого Контента были тяжелыми:
              </p>
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="relative group">
                {/* Canvas Reveal Effect рамка */}
                <div className="absolute -inset-2 rounded-2xl overflow-hidden">
                  <CanvasRevealEffect
                    containerClassName="bg-transparent"
                    colors={["#ef4444", "#f97316", "#eab308"]}
                    opacities={[0.1, 0.15, 0.2]}
                    animationSpeed={4}
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 via-orange-500/30 to-yellow-500/30 rounded-2xl blur-sm"></div>
                
                <div className="relative bg-gradient-to-br from-red-900/40 to-red-800/40 p-8 rounded-2xl border border-red-500/50 backdrop-blur-sm">
                  <div className="text-lg text-red-100">
                    <TextGenerateEffect 
                       words="44 дня ежедневного постинга и всего +140 подписчиков. Нулевая мотивация."
                       className="text-red-100"
                       duration={2}
                       filter={true}
                     />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <p className="text-2xl text-white leading-relaxed font-bold text-center">
                Но потом...
              </p>
            </div>
            
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <p className="text-xl text-slate-200 leading-relaxed font-light">
                <span className="font-bold text-yellow-400">29 ноября 2024</span> — первый ролик по Системе Легкого Контента "выстрелил":
              </p>
            </div>
            
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="relative group">
                {/* Canvas Reveal Effect рамка */}
                <div className="absolute -inset-2 rounded-2xl overflow-hidden">
                  <CanvasRevealEffect
                    containerClassName="bg-transparent"
                    colors={["#10b981", "#22c55e", "#14b8a6"]}
                    opacities={[0.1, 0.15, 0.2]}
                    animationSpeed={4}
                  />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/30 via-green-500/30 to-teal-500/30 rounded-2xl blur-sm"></div>
                
                <div className="relative bg-gradient-to-br from-green-900/40 to-emerald-800/40 p-8 rounded-2xl border border-emerald-400/50 backdrop-blur-sm">
                  <div className="text-lg text-green-100">
                    <TextGenerateEffect 
                       words="+500 подписчиков за 3 дня. +1000 за следующую неделю. К 29 декабря — 10 000 подписчиков."
                       className="text-green-100"
                       duration={2.5}
                       filter={true}
                     />
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <h4 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">Сейчас у меня:</h4>
            </div>
            
            <div className="space-y-8">
              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                <div className="relative group">
                  {/* Canvas Reveal Effect рамка */}
                  <div className="absolute -inset-2 rounded-2xl overflow-hidden">
                    <CanvasRevealEffect
                      containerClassName="bg-transparent"
                      colors={["#6366f1", "#8b5cf6", "#06b6d4"]}
                      opacities={[0.1, 0.15, 0.2]}
                      animationSpeed={4}
                    />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 via-pink-500/30 to-cyan-500/30 rounded-2xl blur-sm"></div>
                  
                  <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-700/60 p-8 rounded-2xl border border-indigo-500/20 backdrop-blur-sm">
                    <div className="flex items-start space-x-6">
                      <div className="w-20 h-20 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-600 rounded-xl shadow-lg shadow-green-500/30 animate-pulse">
                          <svg className="w-full h-full p-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                          </svg>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-green-300/50 to-teal-500/50 rounded-xl blur-sm animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white italic mb-3"><span className="text-yellow-400">50 000+</span> подписчиков и эта цифра продолжает расти</div>
                        <div className="text-lg text-white italic leading-relaxed">
                          Когда я только начинал, у меня было всего 415 подписчиков.
                        </div>
                      </div>
                    </div>
                  </div>
                 </div>
               </div>
              
              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                <div className="relative group">
                  {/* Canvas Reveal Effect рамка */}
                  <div className="absolute -inset-2 rounded-2xl overflow-hidden">
                    <CanvasRevealEffect
                      containerClassName="bg-transparent"
                      colors={["#800080", "#8a2be2", "#4b0082"]}
                      opacities={[0.1, 0.15, 0.2]}
                      animationSpeed={4}
                    />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 via-violet-500/30 to-indigo-500/30 rounded-2xl blur-sm"></div>
                  
                  <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-700/60 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
                    <div className="flex items-start space-x-6">
                      <div className="w-20 h-20 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-700 rounded-xl shadow-lg shadow-purple-500/30 animate-pulse">
                          <svg className="w-full h-full p-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/50 to-indigo-600/50 rounded-xl blur-sm animate-pulse" style={{animationDelay: '0.3s'}}></div>
                      </div>
                      <div>
                          <div className="text-2xl font-bold text-white italic mb-3">Миллионные охваты</div>
                          <div className="text-lg text-white italic leading-relaxed">
                            <div className="text-white italic">
                              Мои посты регулярно набирают миллионы просмотров, а некоторые видео достигают 5-10 миллионов охватов благодаря Системе Легкого Контента.
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                <div className="relative group">
                  {/* Canvas Reveal Effect рамка */}
                  <div className="absolute -inset-2 rounded-2xl overflow-hidden">
                    <CanvasRevealEffect
                      containerClassName="bg-transparent"
                      colors={["#ec4899", "#f43f5e", "#ef4444"]}
                      opacities={[0.1, 0.15, 0.2]}
                      animationSpeed={4}
                    />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/30 via-rose-500/30 to-red-500/30 rounded-2xl blur-sm"></div>
                  
                  <div className="relative bg-gradient-to-br from-slate-800/60 to-slate-700/60 p-8 rounded-2xl border border-pink-500/20 backdrop-blur-sm">
                    <div className="flex items-start space-x-6">
                      <div className="w-20 h-20 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-rose-600 to-red-700 rounded-xl shadow-lg shadow-pink-500/30 animate-pulse">
                          <svg className="w-full h-full p-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                          </svg>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/50 to-red-600/50 rounded-xl blur-sm animate-pulse" style={{animationDelay: '0.7s'}}></div>
                      </div>
                      <div>
                          <div className="text-2xl font-bold text-white italic mb-3">Отзывы подписчиков</div>
                          <div className="text-lg text-white italic leading-relaxed space-y-4">
                            <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600/50">
                              <p className="text-slate-300 mb-2">"Спасибо за систему! Уже +500 подписчиков за месяц"</p>
                              <p className="text-slate-400 text-sm">— @username_example</p>
                            </div>
                            <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600/50">
                              <p className="text-slate-300 mb-2">"Наконец-то понял, как делать контент без камеры!"</p>
                              <p className="text-slate-400 text-sm">— @another_user</p>
                            </div>
                            <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600/50">
                              <p className="text-slate-300 mb-2">"Работает! Мой первый вирусный ролик набрал 50к просмотров"</p>
                              <p className="text-slate-400 text-sm">— @success_story</p>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="text-center mt-16 space-y-8">
                <h4 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Хочешь начать прямо сейчас?</h4>
                <p className="text-2xl text-yellow-400 font-bold">"Хватит тянуть — давай суть!"</p>
                <p className="text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto">Хорошо. Держи пошаговый разбор метода. Жми на кнопку ниже и продолжай чтение...</p>
                
                <div className="pt-8">
                  <button 
                    className="px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #9333ea 0%, #2563eb 50%, #06b6d4 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      boxShadow: '0 8px 32px rgba(147, 51, 234, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                      textShadow: '0 2px 4px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.3)'
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
                    <span className="relative z-10">Получить пошаговый разбор →</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBlogStory;