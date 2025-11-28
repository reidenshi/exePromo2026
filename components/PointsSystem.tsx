import React from 'react';
import { PromoTask } from '../types';
import { 
  IconInstagram, 
  IconTikTok, 
  IconUsers, 
  IconQuiz, 
  IconReview, 
  IconDefault, 
  IconArrowRight,
  IconTrophy,
  IconZap // Added for the highlight section
} from './Icons';

const tasks: PromoTask[] = [
  {
    id: '1',
    title: 'Выступление на конференции',
    description: 'Выступил на конференции (рефералка).',
    points: 500,
    icon: 'default',
    difficulty: 'Hard'
  },
  {
    id: '2',
    title: 'Сбор контактов',
    description: 'Собрал 10 контактов в базу на конференции/выставке/бизнес-завтраке.',
    points: 300,
    icon: 'invite',
    difficulty: 'Medium'
  },
  {
    id: '3',
    title: 'Спикер exeDrive 2026',
    description: 'Выступил спикером на общем вебинаре exeDrive 2026.',
    points: 300,
    icon: 'default',
    difficulty: 'Hard'
  },
  {
    id: '4',
    title: 'Спикер Демо Клуба',
    description: 'Стал спикером на одном из эфиров в Демо Клуба.',
    points: 300,
    icon: 'default',
    difficulty: 'Hard'
  },
  {
    id: '5',
    title: 'Личный кейс',
    description: 'Опубликовал личный кейс (пост в соц.сетях, сторитейлинг) с рефералкой.',
    points: 200,
    icon: 'instagram',
    difficulty: 'Medium'
  },
  {
    id: '6',
    title: 'Демо клиенту',
    description: 'Провел демо потенциальному клиенту.',
    points: 200,
    icon: 'default',
    difficulty: 'Medium'
  },
  {
    id: '7',
    title: 'Отзыв exeDrive',
    description: 'Опубликовал отзыв/пост про exeDrive в соц.сетях (рефералка).',
    points: 100,
    icon: 'review',
    difficulty: 'Easy'
  },
  {
    id: '8',
    title: 'Лид на продукт',
    description: 'Привел лид по ссылке на продукт (Клуб AI-Евангелистов / подписка на платформу).',
    points: 70,
    icon: 'invite',
    difficulty: 'Medium'
  },
  {
    id: '9',
    title: 'Лид на вебинар',
    description: 'Привел лид по ссылке на вебинар.',
    points: 50,
    icon: 'invite',
    difficulty: 'Easy'
  },
];

const getIcon = (type: string, className: string) => {
  switch (type) {
    case 'instagram': return <IconInstagram className={className} />;
    case 'tiktok': return <IconTikTok className={className} />;
    case 'invite': return <IconUsers className={className} />;
    case 'quiz': return <IconQuiz className={className} />;
    case 'review': return <IconReview className={className} />;
    default: return <IconDefault className={className} />;
  }
};

const getDifficultyColor = (diff: string) => {
  switch (diff) {
    case 'Easy': return 'text-green-400 bg-green-400/10 border-green-400/20';
    case 'Medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
    case 'Hard': return 'text-red-400 bg-red-400/10 border-red-400/20';
    default: return 'text-slate-400';
  }
};

const PointsSystem: React.FC = () => {
  return (
    <section id="tasks" className="py-20 bg-brand-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Охота за <span className="text-brand-400">Баллами</span>
          </h2>
          
          <div className="max-w-4xl mx-auto bg-brand-900/40 border border-brand-700/30 rounded-3xl p-8 backdrop-blur-sm shadow-xl relative overflow-hidden">
            {/* Subtle glow effects */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent-500/10 rounded-full blur-[60px]"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-500/10 rounded-full blur-[60px]"></div>

            <div className="relative z-10 flex flex-col gap-6">
                <p className="text-xl text-brand-100 leading-relaxed">
                    Помимо общих целей, копи <span className="text-white font-bold">личные баллы</span>. 
                    Они аккумулируются на вашем внутреннем счете <span className="text-brand-300 font-bold">exeDrive</span>.
                </p>

                <div className="h-px w-24 bg-brand-700/50 mx-auto"></div>

                <p className="text-lg text-brand-200/90 leading-relaxed">
                    В конце Промо вы <span className="text-white font-bold border-b border-brand-500/50">ВСЕ</span> сможете потратить эти баллы в нашем виртуальном шопе: 
                    получить подарки или частично оплатить… <em>что-то интересное</em> 😉
                    <br />
                    <span className="text-sm text-brand-400 mt-2 block font-medium">(Подробности расскажем позже)</span>
                </p>

                <div className="mt-2">
                    <div className="bg-brand-800/40 border border-brand-700/50 rounded-xl py-3 px-6 inline-flex items-center gap-2 shadow-inner">
                        <IconZap className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="text-white font-semibold">А самых активных AI-Евангелистов ждет дополнительная награда:</span>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Top Rewards Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* 2nd Place */}
          <div className="bg-brand-900/30 border border-brand-800 rounded-2xl p-6 flex flex-col items-center justify-end md:order-1 order-2 transform hover:-translate-y-2 transition-transform">
             <div className="text-5xl mb-4 opacity-70">🥈</div>
             <h3 className="text-xl font-bold text-brand-100 mb-2">2 Место</h3>
             <div className="text-brand-400 font-bold text-lg mb-2 text-center">Фирменный термос exeDrive</div>
             <p className="text-xs text-brand-300/60 text-center">Чтобы тепло наших сердец всегда было с тобой</p>
          </div>

          {/* 1st Place */}
          <div className="bg-gradient-to-b from-brand-800/50 to-brand-900 border border-brand-500/40 rounded-2xl p-8 flex flex-col items-center relative md:order-2 order-1 transform scale-105 shadow-2xl">
             <div className="absolute -top-4 bg-brand-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-lg">LEADER</div>
             <div className="text-6xl mb-4 drop-shadow-[0_0_15px_rgba(255,215,0,0.5)]">🏆</div>
             <h3 className="text-2xl font-bold text-white mb-2">1 Место</h3>
             <div className="text-accent-400 font-bold text-xl mb-2 text-center">Фирменная толстовка exeDrive</div>
             <p className="text-sm text-brand-200 text-center">Мерч, который выделит тебя из толпы</p>
          </div>

          {/* 3rd Place */}
          <div className="bg-brand-900/30 border border-brand-800 rounded-2xl p-6 flex flex-col items-center justify-end md:order-3 order-3 transform hover:-translate-y-2 transition-transform">
             <div className="text-5xl mb-4 opacity-70">🥉</div>
             <h3 className="text-xl font-bold text-brand-100 mb-2">3 Место</h3>
             <div className="text-brand-400 font-bold text-lg mb-2 text-center">Фирменная футболка exeDrive</div>
             <p className="text-xs text-brand-300/60 text-center">Стиль, который объединяет</p>
          </div>
        </div>

        <div className="flex justify-center md:justify-start items-center mb-8">
            <h3 className="text-xl font-bold text-white">Доступные задания</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <div 
              key={task.id} 
              className="group bg-brand-900/20 border border-brand-800 rounded-2xl p-6 hover:border-brand-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-900/20 flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-brand-900 rounded-xl group-hover:bg-brand-500/20 group-hover:text-brand-400 transition-colors text-brand-300/60">
                  {getIcon(task.icon, "w-6 h-6")}
                </div>
                <div className={`text-xs px-2 py-1 rounded-full border ${getDifficultyColor(task.difficulty)}`}>
                  {task.difficulty}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                {task.title}
              </h3>
              
              <p className="text-brand-200/60 text-sm mb-6 flex-grow leading-relaxed">
                {task.description}
              </p>
              
              <div className="flex items-center justify-end pt-4 border-t border-brand-800 mt-auto">
                <div className="text-2xl font-bold text-white">
                  {task.points} <span className="text-xs text-brand-400 font-normal uppercase ml-1">баллов</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PointsSystem;