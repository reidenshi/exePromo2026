import React from 'react';
import { TimelineEvent } from '../types';

const events: TimelineEvent[] = [
  {
    period: '1.12 - 14.12',
    title: 'Тема: ОХВАТЫ',
    description: 'Максимальный шум в соцсетях. Заявляем о себе.',
    isActive: true
  },
  {
    period: '15.12 - 29.12',
    title: 'Тема: ЛИЧНЫЕ ПРОДАЖИ',
    description: 'Вклад каждого в общую цель. Закрываем год мощно.',
    isActive: false
  },
  {
    period: '5.01 - 18.01',
    title: 'Тема: ВЕБИНАР',
    description: 'Совместный эфир от всех AI-Евангелистов. Делимся пользой.',
    isActive: false
  },
  {
    period: '19.01 - 31.01',
    title: 'Тема: ДЕМО-КЛУБ',
    description: 'Открываем двери для всех потенциалов. Показываем ценность.',
    isActive: false
  }
];

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 bg-brand-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Карта Активностей</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, idx) => (
            <div 
              key={idx} 
              className={`
                relative p-6 rounded-2xl border transition-all duration-300
                ${event.isActive 
                  ? 'bg-brand-900 border-accent-500 shadow-[0_0_20px_rgba(249,115,22,0.15)]' 
                  : 'bg-brand-900/30 border-brand-800 opacity-70 hover:opacity-100 hover:border-brand-700'
                }
              `}
            >
              {event.isActive && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-accent-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  Сейчас
                </div>
              )}
              
              <div className="text-sm font-mono text-brand-300 mb-2">{event.period}</div>
              <h3 className={`text-lg font-bold mb-3 ${event.isActive ? 'text-white' : 'text-brand-200'}`}>
                {event.title}
              </h3>
              <p className="text-brand-200/70 text-sm leading-relaxed">
                {event.description}
              </p>
              
              <div className="mt-4 h-1 w-full bg-brand-800 rounded-full overflow-hidden">
                <div className={`h-full ${event.isActive ? 'bg-accent-500 w-1/2' : 'bg-transparent w-0'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;