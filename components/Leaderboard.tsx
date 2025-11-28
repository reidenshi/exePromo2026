import React from 'react';
import { UserStats } from '../types';

const users: UserStats[] = [
  { id: 1, name: 'Александр М.', handle: '@alex_ai', points: 1540, rank: 1, avatarColor: 'bg-yellow-500' },
  { id: 2, name: 'Мария К.', handle: '@mary_promo', points: 1320, rank: 2, avatarColor: 'bg-slate-400' },
  { id: 3, name: 'Дмитрий В.', handle: '@dimon_biz', points: 1100, rank: 3, avatarColor: 'bg-orange-600' },
  { id: 4, name: 'Елена С.', handle: '@elena_start', points: 950, rank: 4, avatarColor: 'bg-brand-500' },
  { id: 5, name: 'Игорь П.', handle: '@igor_tech', points: 880, rank: 5, avatarColor: 'bg-purple-500' },
  { id: 6, name: 'Светлана Р.', handle: '@svetlana_sky', points: 820, rank: 6, avatarColor: 'bg-pink-500' },
  { id: 7, name: 'Андрей Т.', handle: '@andrew_top', points: 750, rank: 7, avatarColor: 'bg-blue-500' },
];

const Leaderboard: React.FC = () => {
  return (
    <section className="py-20 bg-brand-950 border-t border-brand-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-10">Топ AI-Евангелистов</h2>
        
        <div className="bg-brand-900/40 rounded-2xl overflow-hidden border border-brand-800 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-brand-800/50 text-left">
                  <th className="p-4 text-brand-300 font-medium text-sm uppercase tracking-wider">#</th>
                  <th className="p-4 text-brand-300 font-medium text-sm uppercase tracking-wider">Участник</th>
                  <th className="p-4 text-brand-300 font-medium text-sm uppercase tracking-wider text-right">Баллы</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-800/50">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-brand-800/30 transition-colors group">
                    <td className="p-4 text-brand-400 font-mono w-16">
                      {user.rank <= 3 ? (
                        <span className={`text-xl ${user.rank === 1 ? 'text-yellow-400' : user.rank === 2 ? 'text-slate-300' : 'text-orange-500'}`}>
                           {user.rank === 1 ? '🥇' : user.rank === 2 ? '🥈' : '🥉'}
                        </span>
                      ) : (
                        <span className="pl-1">#{user.rank}</span>
                      )}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full ${user.avatarColor} flex items-center justify-center text-white font-bold text-xs`}>
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <div className="text-white font-medium group-hover:text-brand-300 transition-colors">{user.name}</div>
                          <div className="text-xs text-brand-400/60">{user.handle}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <span className="font-bold text-white text-lg">{user.points}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-brand-900/50 text-center">
            <button className="text-sm text-brand-300 hover:text-white transition-colors">
              Показать весь список
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;