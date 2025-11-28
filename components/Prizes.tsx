import React, { useState } from 'react';
import { IconGift, IconTrophy, IconClose, IconArrowRight, IconUsers, IconZap } from './Icons';

type PrizeType = 'suzdal' | 'theatre' | null;

const Prizes: React.FC = () => {
  const [activeModal, setActiveModal] = useState<PrizeType>(null);

  const openModal = (type: PrizeType) => {
    setActiveModal(type);
    document.body.style.overflow = 'hidden'; // Prevent scrolling background
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="prizes" className="py-24 bg-brand-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black text-center text-white mb-4">
          Призовой Фонд
        </h2>
        <p className="text-brand-200 text-center max-w-2xl mx-auto mb-16 text-lg">
          Награды, которые меняют мышление и дарят эмоции.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          
          {/* Card 1: Suzdal */}
          <div className="relative group bg-gradient-to-b from-brand-900 to-brand-950 rounded-[2rem] p-8 border border-brand-700/50 hover:border-brand-500/50 transition-all duration-300 flex flex-col h-full overflow-hidden shadow-2xl">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-[80px] group-hover:bg-accent-500/20 transition-all"></div>
            
            <div className="relative z-10 flex-grow flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-800 to-brand-900 border border-brand-700 shadow-lg flex items-center justify-center text-accent-500 mb-6 transform group-hover:scale-110 transition-transform duration-500">
                <IconTrophy className="w-10 h-10" />
              </div>
              
              <div className="inline-block px-3 py-1 rounded-full bg-accent-500/20 text-accent-400 text-xs font-bold uppercase tracking-widest mb-4">
                Главный приз
              </div>
              
              <h3 className="text-3xl font-black text-white mb-4 leading-tight">
                Аутентичный выезд <br/>в Суздаль
              </h3>
              
              <p className="text-brand-200 text-lg mb-8 leading-relaxed">
                Двухдневное путешествие-ретрит, где время течет иначе, а AI-Евангелистов становятся лидерами.
              </p>

              <button 
                onClick={() => openModal('suzdal')}
                className="mt-auto w-full py-4 px-6 bg-accent-500 hover:bg-accent-600 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 uppercase tracking-wide text-sm sm:text-base"
              >
                Подробнее о выезде
                <IconArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Card 2: Theatre */}
          <div className="relative group bg-gradient-to-b from-brand-900 to-brand-950 rounded-[2rem] p-8 border border-brand-700/50 hover:border-brand-500/50 transition-all duration-300 flex flex-col h-full overflow-hidden shadow-2xl">
             {/* Background Decor */}
             <div className="absolute top-0 left-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px] group-hover:bg-brand-500/20 transition-all"></div>
            
            <div className="relative z-10 flex-grow flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-800 to-brand-900 border border-brand-700 shadow-lg flex items-center justify-center text-brand-300 mb-6 transform group-hover:scale-110 transition-transform duration-500">
                <IconGift className="w-10 h-10" />
              </div>
              
              <div className="inline-block px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-bold uppercase tracking-widest mb-4">
                Special Event
              </div>
              
              <h3 className="text-3xl font-black text-white mb-4 leading-tight">
                Вечер <br/>в Театре
              </h3>
              
              <p className="text-brand-200 text-lg mb-8 leading-relaxed">
                Погружение в искусство, живые эмоции и глубокий нетворкинг в атмосфере творчества.
              </p>

              <button 
                onClick={() => openModal('theatre')}
                className="mt-auto w-full py-4 px-6 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2 uppercase tracking-wide text-sm sm:text-base"
              >
                Подробнее о вечере
                <IconArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* MODALS */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-brand-950/90 backdrop-blur-sm" onClick={closeModal}></div>
          
          <div className="relative bg-[#1a1033] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-brand-700 shadow-2xl animate-in fade-in zoom-in-95 duration-300 custom-scrollbar">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-brand-900/50 rounded-full text-brand-300 hover:text-white hover:bg-brand-800 transition-colors z-20"
            >
              <IconClose className="w-6 h-6" />
            </button>

            {activeModal === 'suzdal' && (
              <div className="p-8 sm:p-10 text-brand-50">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🌿</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-500">
                    Аутентичный выезд в Суздаль
                  </h3>
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed text-brand-100/90">
                  <p className="font-semibold text-xl text-white border-l-4 border-accent-500 pl-4">
                    Двухдневное путешествие, где AI-Евангелисты становятся лидерами.
                  </p>

                  <p>
                    Суздаль — это место, где время течёт иначе, вдохновение пахнет дымом печи, а мысли становятся кристально ясными.
                    Здесь пространство само ведёт тебя к нужным мыслям: спокойные монастыри, деревянные избы, мягкие холмы и ощущение, что ты находишься в точке соприкосновения с чем-то древним и мудрым.
                  </p>

                  <p>
                    Это не просто поездка — это <span className="text-accent-400 font-bold">мини-ретрит</span>, который меняет взгляд на себя, работу и жизнь.
                  </p>

                  <p>
                    Мы уезжаем всей тусовкой на 2 дня в Суздаль, живём в одном большом, атмосферном доме, собираемся вечерами у костра и говорим о самом важном — о себе, своём пути и своём масштабе.
                  </p>

                  <div className="bg-brand-900/40 p-6 rounded-2xl border border-brand-800">
                    <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Что ждёт участников:</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <span className="text-accent-500">🔥</span>
                        <span>Практики на раскрытие аутентичности и лидерства</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent-500">🔥</span>
                        <span>Глубокие разговоры, которые невозможно повторить в городе</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent-500">🔥</span>
                        <span>Прогулки по самым аутентичным местам Суздаля — где сама атмосфера настраивает на инсайты</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent-500">🔥</span>
                        <span>Карта целей на 2026 год — основанная на твоих сильных сторонах</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-accent-500">🔥</span>
                        <span>Природа, тишина, костёр — то самое состояние, в котором приходят настоящие решения</span>
                      </li>
                    </ul>
                  </div>

                  <p className="italic text-brand-300 text-center border-t border-brand-800 pt-6">
                    Это путешествие — награда для тех, кто играет по-крупному. <br/>
                    После этих двух дней ты возвращаешься другим: ясным, собранным, вдохновлённым и на своей траектории.
                  </p>
                </div>
              </div>
            )}

            {activeModal === 'theatre' && (
              <div className="p-8 sm:p-10 text-brand-50">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🎭</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500">
                    Вечер в театре
                  </h3>
                </div>
                
                <div className="space-y-6 text-lg leading-relaxed text-brand-100/90">
                  <p className="font-semibold text-xl text-white border-l-4 border-purple-500 pl-4">
                    Погружение в искусство, которое открывает новые грани тебя.
                  </p>

                  <p>
                    Театр — это место, где жизнь раскрывается в честных, обнажённых формах. Где история, музыка, интонации и свет собирают тебя изнутри.
                    Где каждый герой на сцене — как намёк на твою собственную силу, страх, мечту или путь.
                  </p>

                  <p>
                    Это не просто поход в театр — это совместное прикосновение к искусству, где каждый прожитый на сцене момент становится зеркалом для наших собственных историй.
                  </p>

                  <p>
                    Мы соберёмся всей тусовкой AI-Евангелистов, чтобы на несколько часов <span className="text-purple-400 font-bold border-b border-purple-400/30">выдохнуть</span>, отключиться от задач и позволить себе почувствовать глубже.
                  </p>

                  <div className="bg-brand-900/40 p-6 rounded-2xl border border-brand-800">
                    <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Что тебя ждёт:</h4>
                    <ul className="space-y-3">
                      <li className="flex gap-3">
                        <span className="text-purple-400">✨</span>
                        <span>Атмосфера, в которой искусство становится порталом к внутреннему миру</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-purple-400">🎭</span>
                        <span>Живые эмоции, которые невозможно подделать — они случаются только здесь и сейчас</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-purple-400">💭</span>
                        <span>Послевкусие бесед после спектакля, когда мы вместе разгадываем символы, смыслы и метафоры</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            
            <div className="sticky bottom-0 left-0 right-0 p-6 bg-[#1a1033] border-t border-brand-800 flex justify-center">
               <button 
                onClick={closeModal}
                className="px-8 py-3 rounded-xl bg-brand-800 hover:bg-brand-700 text-white font-bold transition-colors"
               >
                 Закрыть
               </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Prizes;