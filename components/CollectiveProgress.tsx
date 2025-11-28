import React, { useEffect, useState } from 'react';
import { IconTrophy, IconZap, IconCheckCircle2, IconUsers, IconGift, IconLock } from './Icons';

interface LevelData {
  id: number;
  title: string;
  requirements: {
    eves: number;
    subsBase: number;
    subsCorp?: number;
  };
  rewards: {
    intangible?: string;
    money: string;
    special?: string;
  };
  isGoal?: boolean;
}

const levelsData: LevelData[] = [
  {
    id: 1,
    title: '1-ый уровень',
    requirements: { eves: 3, subsBase: 3 },
    rewards: {
      money: '30% с личных продаж корпоративного тарифа',
    }
  },
  {
    id: 2,
    title: '2-ой уровень',
    requirements: { eves: 8, subsBase: 7 },
    rewards: {
      intangible: 'Секретный эксперт с обучением по нейросетям',
      money: '30% с личных продаж корпоративного тарифа',
    }
  },
  {
    id: 3,
    title: '3-ий уровень',
    requirements: { eves: 15, subsBase: 13 },
    rewards: {
      intangible: 'Синемалогия с Воликовым',
      money: '30% с личных продаж корпоративного тарифа',
    }
  },
  {
    id: 4,
    title: '4-ый уровень',
    isGoal: true, // "Цель достигнута"
    requirements: { eves: 26, subsBase: 20 },
    rewards: {
      intangible: 'Поход всей тусовкой в театр',
      money: 'Закрепляем на 1 мес. для всех AI-Евангелистов 30% с продаж корпоративного тарифа',
      special: 'Кто привлек 3+ новых AI-Евангелиста попадает в группу к Киру Воликову'
    }
  },
  {
    id: 5,
    title: '5-ый уровень',
    requirements: { eves: 26, subsBase: 10, subsCorp: 10 },
    rewards: {
      intangible: 'Аутентичный выезд в Суздаль',
      money: 'Закрепляем на 1 мес. для всех AI-Евангелистов 30% с продаж корпоративного тарифа',
      special: 'Кто привлек 3+ новых AI-Евангелиста попадает в группу к Киру Воликову'
    }
  }
];

const CollectiveProgress: React.FC = () => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedProgress(65), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="levels" className="py-20 bg-brand-950 border-y border-brand-800 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-800/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            5 Уровней к Цели
          </h2>
          <p className="text-brand-200 max-w-3xl mx-auto text-lg">
            Двигайся по карьерной лестнице AI-Евангелиста. Каждый уровень открывает новые возможности заработка и уникальные мероприятия.
          </p>
        </div>

        {/* Progress Bars Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Main Goal Progress */}
          <div className="bg-brand-900/30 backdrop-blur-sm rounded-3xl p-8 border border-brand-700/50 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-brand-500 rounded-2xl text-white shadow-lg shadow-brand-500/20">
                <IconTrophy className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Общая Цель: 2026</h3>
                <p className="text-sm text-brand-300">Путь к 26 AI-Евангелистам и 20 Подпискам</p>
              </div>
            </div>
            
            <div className="relative h-4 bg-brand-950 rounded-full overflow-hidden border border-brand-700">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-600 to-accent-500 transition-all duration-1000 ease-out"
                style={{ width: `${animatedProgress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-shimmer" style={{ backgroundSize: '20px 20px' }}></div>
              </div>
            </div>
            <div className="flex justify-between mt-3 text-sm font-mono text-brand-200">
              <span>Текущий: Уровень 3</span>
              <span>Цель: Уровень 4</span>
            </div>
          </div>

          {/* Micro Goal Progress */}
          <div className="bg-brand-900/30 backdrop-blur-sm rounded-3xl p-8 border border-brand-700/50 shadow-lg">
             <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent-500 rounded-2xl text-white shadow-lg shadow-accent-500/20">
                <IconZap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Микро-цель Спринта</h3>
                <p className="text-sm text-brand-300">Активность текущей недели</p>
              </div>
            </div>

            <div className="relative h-4 bg-brand-950 rounded-full overflow-hidden border border-brand-700">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent-600 to-brand-400 transition-all duration-1000 ease-out"
                style={{ width: '45%' }}
              ></div>
            </div>
            <div className="flex justify-between mt-3 text-sm font-mono text-accent-200">
              <span>Прогресс: 45%</span>
              <span>Осталось: 4 дня</span>
            </div>
          </div>
        </div>

        {/* Levels Grid / Table View */}
        <div className="space-y-6">
          {levelsData.map((level) => (
            <div 
              key={level.id}
              className={`
                relative overflow-hidden rounded-2xl border transition-all duration-300 group
                ${level.isGoal 
                  ? 'bg-gradient-to-r from-brand-900 to-brand-950 border-brand-500 ring-1 ring-brand-500/50 shadow-[0_0_30px_rgba(168,85,247,0.15)]' 
                  : 'bg-brand-900/20 border-brand-800 hover:bg-brand-900/40 hover:border-brand-600'
                }
              `}
            >
              {level.isGoal && (
                <div className="absolute top-0 right-0 bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider z-20">
                  Главная Цель
                </div>
              )}
              
              <div className="flex flex-col lg:flex-row">
                {/* Left Column: Level & Requirements */}
                <div className="p-6 lg:w-1/3 border-b lg:border-b-0 lg:border-r border-brand-800/50 flex flex-col justify-center bg-brand-950/20">
                  <h3 className={`text-xl font-bold mb-4 ${level.isGoal ? 'text-brand-400' : 'text-white'}`}>
                    {level.title}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-brand-200">
                      <div className="w-8 h-8 rounded-full bg-brand-900 flex items-center justify-center text-brand-400 border border-brand-700 group-hover:border-brand-500/30 transition-colors">
                        <IconUsers className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-white">{level.requirements.eves}</span> AI-Евангелистов
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-brand-200">
                      <div className="w-8 h-8 rounded-full bg-brand-900 flex items-center justify-center text-brand-400 border border-brand-700 group-hover:border-brand-500/30 transition-colors">
                        <IconCheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-white">{level.requirements.subsBase}</span> Базовых подписок
                      </div>
                    </div>

                    {level.requirements.subsCorp && (
                      <div className="flex items-center gap-3 text-brand-200">
                        <div className="w-8 h-8 rounded-full bg-brand-900 flex items-center justify-center text-accent-500 border border-brand-700 shadow-sm">
                          <IconCheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-bold text-accent-500">{level.requirements.subsCorp}</span> Корпоративных подписок
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column: Rewards */}
                <div className="p-6 lg:w-2/3 flex flex-col gap-4 justify-center">
                  {/* Intangible Reward */}
                  {level.rewards.intangible && (
                    <div className="flex gap-4 items-start">
                       <div className="mt-1 flex-shrink-0 text-brand-400">
                          <IconGift className="w-5 h-5" />
                       </div>
                       <div>
                          <div className="text-xs text-brand-400 font-bold uppercase tracking-wider mb-1">Вознаграждение</div>
                          <div className="text-white font-medium">{level.rewards.intangible}</div>
                       </div>
                    </div>
                  )}

                  {/* Money Reward */}
                  <div className="flex gap-4 items-start">
                     <div className="mt-1 flex-shrink-0 text-accent-400">
                        <span className="text-lg font-bold w-5 h-5 flex items-center justify-center">$</span>
                     </div>
                     <div>
                        <div className="text-xs text-accent-400 font-bold uppercase tracking-wider mb-1">Финансы</div>
                        <div className="text-brand-100 text-sm leading-relaxed">{level.rewards.money}</div>
                     </div>
                  </div>

                  {/* Special Conditions */}
                  {level.rewards.special && (
                    <div className="mt-2 pt-4 border-t border-brand-800/50 flex gap-4 items-start">
                       <div className="mt-1 flex-shrink-0 text-amber-400">
                          <IconLock className="w-5 h-5" />
                       </div>
                       <div>
                          <div className="text-xs text-amber-400 font-bold uppercase tracking-wider mb-1">Особые условия</div>
                          <div className="text-brand-200 text-sm italic">{level.rewards.special}</div>
                       </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectiveProgress;