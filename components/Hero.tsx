import React from 'react';
import { IconArrowRight, IconUsers } from './Icons';

const Hero: React.FC = () => {
  const mascotUrl = "https://iili.io/fCUB2F1.md.png";

  return (
    <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden min-h-[90vh] flex items-center bg-[#1a0b2e]">
      {/* --- SPACE BACKGROUND LAYER --- */}
      
      {/* 1. Deep Nebulas */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-brand-900/40 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#4c1d95]/30 rounded-full blur-[100px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      
      {/* 2. Stars Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30"></div>
      
      {/* 3. Shooting Star */}
      <div className="absolute top-0 right-0 w-[300px] h-[2px] bg-gradient-to-l from-transparent via-white to-transparent opacity-0 animate-[ping_3s_linear_infinite] rotate-[-45deg] origin-top-right transform translate-x-20 -translate-y-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full">
          
          {/* Left Column: Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-100 text-sm font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <IconUsers className="w-4 h-4 text-accent-500" />
              <span>Сообщество AI-Евангелистов</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-6 drop-shadow-2xl leading-tight">
              ЦЕЛЬ <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c084fc] to-[#f472b6]">2026</span>
            </h1>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4 text-lg sm:text-xl font-bold text-white mb-8 font-mono">
              <span className="bg-white/5 px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-white/10 shadow-inner backdrop-blur-sm">26 AI-Евангелистов</span>
              <span className="text-accent-500 text-2xl">+</span>
              <span className="bg-white/5 px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-white/10 shadow-inner backdrop-blur-sm">20 Подписок</span>
              <span className="text-accent-500 text-2xl">=</span>
              <span className="text-brand-200">НАШ ГОД</span>
            </div>
            
            {/* Styled Text Block - Compact & Clean */}
            <div className="mt-8 mb-10 pl-6 border-l-4 border-accent-500/80 max-w-2xl mx-auto lg:mx-0 bg-gradient-to-r from-white/5 to-transparent rounded-r-xl p-4 backdrop-blur-[2px]">
                <div className="text-brand-100/90 text-base sm:text-lg leading-relaxed space-y-3 text-left">
                  <p>
                    Добро пожаловать в новогоднее промо! Мы строим будущее комьюнити уже сегодня. 
                    В одиночку можно сделать шаг, но мы собрались здесь, чтобы <span className="text-white font-semibold border-b border-accent-500/50">взлетать</span>.
                  </p>
                  <p>
                    Когда мы объединяемся, скорость перестает быть целью — она становится побочным эффектом.
                  </p>
                  <p className="font-bold text-white text-lg pt-1 tracking-wide">
                    И чем нас больше — тем громче слышно, что мы уже начали!
                  </p>
                </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a href="#levels" className="whitespace-nowrap group w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-brand-600 to-accent-500 hover:from-brand-500 hover:to-accent-400 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                К уровням
                <IconArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#calendar" className="whitespace-nowrap w-full sm:w-auto px-8 py-4 rounded-xl text-lg font-bold text-white border border-brand-500/30 hover:bg-white/5 hover:border-brand-400 transition-all text-center backdrop-blur-sm">
                Адвент календарь
              </a>
            </div>
          </div>

          {/* Right Column: Mascot Image with CLEAN "CYBER-HALO" Animation */}
          <div className="flex-1 relative flex justify-center lg:justify-end w-full max-w-[600px] mt-10 lg:mt-0">
             <div className="relative w-full aspect-square flex justify-center items-center">
                
                {/* 1. Core Atmosphere Glow */}
                <div className="absolute inset-0 bg-gradient-radial from-brand-500/30 via-transparent to-transparent opacity-60 rounded-full blur-[80px] animate-pulse-slow"></div>
                
                {/* 2. Outer Ring - Thin & Elegant (Slow Spin) */}
                <div className="absolute w-[90%] h-[90%] border border-white/5 rounded-full animate-[spin_30s_linear_infinite]"></div>
                
                {/* 3. Middle Ring - Dashed & Accent Color (Reverse Spin) */}
                <div className="absolute w-[75%] h-[75%] border border-dashed border-accent-500/20 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
                
                {/* 4. Inner Ring - Brand Color & Solid (Pulse) */}
                <div className="absolute w-[60%] h-[60%] border-2 border-brand-400/10 rounded-full animate-pulse shadow-[0_0_30px_rgba(168,85,247,0.1)]"></div>

                {/* 5. Orbiting "Planets" (Decor Elements) */}
                <div className="absolute w-[90%] h-[90%] animate-[spin_30s_linear_infinite]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_white]"></div>
                </div>
                <div className="absolute w-[75%] h-[75%] animate-[spin_20s_linear_infinite_reverse]">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-accent-500 rounded-full shadow-[0_0_15px_#f97316]"></div>
                </div>

                {/* 6. Subtle Floor Spotlight */}
                <div className="absolute -bottom-5 w-[50%] h-[15%] bg-black/30 blur-[30px] rounded-[100%]"></div>

                {/* Mascot Image - Clean Float */}
                <div className="relative z-20 animate-float" style={{animationDuration: '6s'}}>
                  <img 
                    src={mascotUrl} 
                    alt="Маскот с флагом" 
                    className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(168,85,247,0.4)] transform hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;