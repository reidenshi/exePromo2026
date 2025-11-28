import React, { useState } from 'react';
import { CalendarDay } from '../types';
import { IconLock, IconGift, IconClose, IconZap } from './Icons';

const generateDays = (): CalendarDay[] => {
  const days: CalendarDay[] = [];
  const currentDay = 1; // 1 Декабря открыто, остальное закрыто
  
  for (let i = 1; i <= 31; i++) {
    const isSpecial = i === 31;
    days.push({
      day: i,
      isLocked: i > currentDay,
      content: {
        title: isSpecial ? 'С Новым 2026 Годом!' : `Задание ${i} Декабря`,
        description: isSpecial 
          ? 'Ты прошел этот путь до конца! Забирай свой главный подарок.' 
          : (i % 5 === 0 ? 'Особый бонус за активность в этом месяце.' : 'Выполни небольшое задание и получи баллы!'),
        type: isSpecial ? 'merch' : (i % 3 === 0 ? 'bonus' : 'challenge'),
        promoCode: i % 7 === 0 ? `NY2026-${i}GIFT` : undefined
      }
    });
  }
  return days;
};

const AdventCalendar: React.FC = () => {
  const [days] = useState<CalendarDay[]>(generateDays());
  const [selectedDay, setSelectedDay] = useState<CalendarDay | null>(null);

  const handleDayClick = (day: CalendarDay) => {
    if (!day.isLocked) {
      setSelectedDay(day);
    }
  };

  return (
    <section id="calendar" className="py-24 bg-brand-950 relative overflow-hidden">
      {/* Background decoration: Snowy Night */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1e1b4b] via-brand-950 to-[#0f0a20] opacity-90"></div>
          {/* Stars / Snow */}
          <div className="absolute top-10 left-[15%] w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-[10%] w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse delay-700"></div>
          <div className="absolute top-20 left-[60%] w-1 h-1 bg-white/50 rounded-full animate-pulse delay-300"></div>
          {/* Falling snow effect */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
            Новогодний Календарь
          </h2>
          <p className="text-brand-200 max-w-xl mx-auto text-lg">
            Каждый день декабря открывай новое окошко, выполняй задания и приближай 2026 год!
          </p>
        </div>

        {/* THE HOUSE CONTAINER */}
        <div className="relative mx-auto max-w-4xl w-full">
          
          {/* Chimney - Placed lower and behind roof (z-0) */}
          <div className="absolute top-20 sm:top-28 right-[20%] w-12 sm:w-16 h-32 bg-[#7f1d1d] border-x-2 border-[#500707] z-0 flex flex-col items-center">
             {/* Chimney Cap */}
             <div className="w-[120%] h-4 bg-white rounded-sm shadow-md absolute -top-2 -left-[10%] border-b-2 border-gray-300"></div>
             {/* Bricks Texture */}
             <div className="w-full h-full opacity-30 bg-[repeating-linear-gradient(0deg,transparent,transparent_14px,#300_14px,#300_15px)]"></div>
             
             {/* Smoke Animation */}
             <div className="absolute -top-10 left-1/2 w-6 h-6 bg-white/40 rounded-full blur-lg animate-float" style={{animationDuration: '3.5s'}}></div>
             <div className="absolute -top-20 left-1/3 w-10 h-10 bg-white/20 rounded-full blur-xl animate-float" style={{animationDuration: '5s', animationDelay: '0.5s'}}></div>
          </div>

          {/* Roof Structure (z-20 to cover chimney bottom) */}
          <div className="relative z-20 w-[110%] -left-[5%] -mb-2 filter drop-shadow-2xl">
             <div className="w-full aspect-[2.2/1] relative">
                
                {/* 1. Base White Triangle (Snow Layer) */}
                <div 
                  className="absolute inset-0 w-full h-full bg-white"
                  style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                ></div>

                {/* 2. Red Roof Triangle (Sitting on top of white, shifted down to reveal snow cap) */}
                <div 
                  className="absolute inset-0 w-full h-full bg-[#b91c1c]"
                  style={{ 
                    clipPath: 'polygon(50% 15%, 0% 100%, 100% 100%)', // Starts 15% down
                  }}
                >
                   {/* Shingles Texture */}
                   <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
                   <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30 pointer-events-none"></div>
                </div>

                {/* Sign on Roof */}
                <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 bg-[#500707] px-6 sm:px-8 py-2 sm:py-3 rounded-lg border-2 border-[#ffb703] shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex flex-col items-center z-30">
                   <div className="absolute -top-1.5 -left-1.5 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#ffb703] shadow-sm"></div>
                   <div className="absolute -top-1.5 -right-1.5 w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-[#ffb703] shadow-sm"></div>
                   <span className="text-brand-100 text-[8px] sm:text-[10px] uppercase tracking-[0.2em] leading-none mb-1">Адвент</span>
                   <span className="text-white font-black tracking-widest text-base sm:text-xl uppercase drop-shadow-md whitespace-nowrap">Декабрь 2025</span>
                </div>
             </div>
          </div>

          {/* House Body (z-10) */}
          <div className="relative z-10 bg-[#7f1d1d] px-3 sm:px-8 pb-8 sm:pb-12 pt-6 sm:pt-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-b-lg border-x-4 border-b-8 border-[#500707]">
            {/* Shadows from roof */}
            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-black/60 to-transparent pointer-events-none z-20"></div>
            
            {/* Wooden Texture */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] mix-blend-overlay pointer-events-none"></div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2 sm:gap-4 relative z-10">
              {days.map((day) => (
                <button
                  key={day.day}
                  onClick={() => handleDayClick(day)}
                  disabled={day.isLocked}
                  className={`
                    group relative aspect-[3/4] flex flex-col items-center justify-between py-1.5 sm:py-3
                    transition-all duration-300 ease-out transform
                    ${day.isLocked 
                      ? 'bg-[#500707] cursor-not-allowed border-[#380303] opacity-90' 
                      : 'bg-[#b91c1c] hover:bg-[#dc2626] hover:-translate-y-1 hover:shadow-xl hover:z-30 cursor-pointer border-[#991b1b] ring-1 ring-white/10'
                    }
                    rounded-md border-b-4 border-r-2 shadow-md overflow-hidden
                  `}
                >
                  {/* Garland light at top */}
                  <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.6)] ${day.day % 2 === 0 ? 'bg-green-500 shadow-green-500/50' : 'bg-yellow-400 shadow-yellow-400/50'}`}></div>

                  {/* Day Number */}
                  <span className={`font-serif text-xl sm:text-3xl md:text-4xl font-bold drop-shadow-sm ${day.isLocked ? 'text-white/10' : 'text-white'}`}>
                    {day.day}
                  </span>

                  {/* Icon indicator */}
                  <div className="w-full flex justify-center pb-1">
                    {day.isLocked ? (
                      <IconLock className="w-3 h-3 sm:w-5 sm:h-5 text-[#300505]" />
                    ) : (
                      <div className="w-3 h-3 sm:w-5 sm:h-5 bg-white/20 rounded-full border border-white/40 flex items-center justify-center">
                         <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      </div>
                    )}
                  </div>

                  {/* Texture overlay for button */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-black/20 pointer-events-none"></div>
                </button>
              ))}
            </div>
            
            {/* Bottom Snow Foundation */}
            <div className="absolute bottom-0 left-0 w-full h-2 sm:h-4 bg-white/20 blur-sm rounded-b-md"></div>
          </div>
        </div>
      </div>

      {/* Modal for Opened Day */}
      {selectedDay && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div 
            className="bg-[#1a1033] w-full max-w-lg rounded-3xl p-1 relative shadow-2xl animate-in zoom-in-95 duration-300 border border-brand-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gradient-to-b from-[#2e1065] to-[#1a1033] rounded-[22px] p-8 h-full relative overflow-hidden">
                {/* Confetti Background */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

                <button 
                onClick={() => setSelectedDay(null)}
                className="absolute top-4 right-4 text-brand-300 hover:text-white transition-colors z-20"
                >
                <IconClose className="w-6 h-6" />
                </button>

                <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-24 h-24 bg-gradient-to-br from-accent-500 to-red-600 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(249,115,22,0.4)] text-white border-4 border-[#1a1033]">
                    <IconGift className="w-12 h-12 animate-pulse-slow" />
                </div>

                <div className="text-sm font-bold text-accent-400 uppercase tracking-widest mb-2">
                    {selectedDay.day} Декабря
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                    {selectedDay.content?.title}
                </h3>
                
                <p className="text-brand-100 mb-8 leading-relaxed text-lg">
                    {selectedDay.content?.description}
                </p>

                {selectedDay.content?.promoCode && (
                    <div className="w-full mb-8">
                        <div className="text-xs text-brand-400 uppercase font-bold mb-2">Твой промокод</div>
                        <div className="p-4 bg-brand-900/50 rounded-xl border border-brand-700/50 font-mono text-xl text-accent-400 font-bold tracking-widest select-all cursor-pointer hover:bg-brand-800 transition-colors flex justify-center items-center gap-2 group">
                           <span>{selectedDay.content.promoCode}</span>
                           <IconZap className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                    </div>
                )}

                <button 
                    onClick={() => setSelectedDay(null)}
                    className="w-full bg-accent-600 hover:bg-accent-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-accent-500/25 active:scale-95"
                >
                    Отлично!
                </button>
                </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AdventCalendar;