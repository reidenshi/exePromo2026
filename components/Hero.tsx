import React, { useState } from 'react';
import { IconArrowRight, IconUsers } from './Icons';

const Hero: React.FC = () => {
  // Начинаем с абсолютного пути, так как файлы лежат в корне/public
  const [imgSrc, setImgSrc] = useState('/mascot.png');

  const handleImgError = () => {
    // Если не загрузилось по /mascot.png, пробуем без слэша (для некоторых серверов)
    if (imgSrc === '/mascot.png') {
      setImgSrc('mascot.png'); 
    } else if (imgSrc === 'mascot.png') {
      // Если и так не вышло, пробуем public явно (редкий кейс, но возможный)
      setImgSrc('public/mascot.png');
    } else if (imgSrc === 'public/mascot.png') {
      // Крайний случай - внешняя заглушка, чтобы верстка не ломалась
      setImgSrc('https://placehold.co/600x600/581c87/ffffff?text=Mascot+Error');
    }
  };

  return (
    <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden min-h-[90vh] flex items-center bg-brand-950">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[100px] mix-blend-screen"></div>
        {/* Snow/Star effect overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 w-full">
          
          {/* Left Column: Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-900/50 border border-brand-500/30 text-brand-200 text-sm font-semibold uppercase tracking-wider mb-8 backdrop-blur-sm shadow-lg shadow-brand-900/20">
              <IconUsers className="w-4 h-4 text-accent-500" />
              <span>Сообщество AI-Евангелистов</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-6 drop-shadow-2xl leading-tight">
              ЦЕЛЬ <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-accent-400">2026</span>
            </h1>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4 text-lg sm:text-xl font-bold text-white mb-8 font-mono">
              <span className="bg-brand-900/40 px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-brand-500/20 shadow-inner">26 AI-Евангелистов</span>
              <span className="text-accent-500 text-2xl">+</span>
              <span className="bg-brand-900/40 px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-brand-500/20 shadow-inner">20 Подписок</span>
              <span className="text-accent-500 text-2xl">=</span>
              <span className="text-brand-300">НАШ ГОД</span>
            </div>
            
            <div className="mt-4 text-lg text-brand-100/80 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed space-y-4">
              <p>Добро пожаловать в новогоднее промо! Мы строим будущее комьюнити уже сегодня. </p>
              <p>В одиночку можно сделать шаг. Но шаги нам больше не подходят — мы собрались здесь, чтобы взлетать.</p>
              <p>Мы — команда, которая создает будущее раньше, чем оно наступает.</p>
              <p className="font-semibold text-white">И чем нас больше — тем громче слышно, что мы уже начали!</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a href="#levels" className="whitespace-nowrap group w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-brand-600 to-accent-500 hover:from-brand-500 hover:to-accent-400 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-brand-900/50 hover:shadow-brand-500/25 border border-white/10">
                К уровням
                <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#calendar" className="whitespace-nowrap w-full sm:w-auto px-8 py-4 rounded-xl text-lg font-bold text-white border border-brand-700 hover:bg-brand-800 hover:border-brand-600 transition-all text-center">
                Адвент календарь
              </a>
            </div>
          </div>

          {/* Right Column: Mascot Image */}
          <div className="flex-1 relative flex justify-center lg:justify-end w-full max-w-[500px]">
             <div className="relative w-full aspect-square animate-float flex justify-center items-center">
                {/* Glow behind mascot */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/40 to-accent-500/40 rounded-full blur-[80px]"></div>
                
                {/* Mascot Image with Robust Fallback */}
                <img 
                  src={imgSrc} 
                  alt="Маскот с флагом" 
                  className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-transform duration-500"
                  onError={handleImgError}
                />
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;