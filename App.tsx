import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CollectiveProgress from './components/CollectiveProgress';
import Prizes from './components/Prizes';
import PointsSystem from './components/PointsSystem';
import Timeline from './components/Timeline';
import AdventCalendar from './components/AdventCalendar';
import Leaderboard from './components/Leaderboard';
import Motivation from './components/Motivation';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-950 text-brand-50 selection:bg-brand-500/30">
      <Header />
      
      <main>
        <Hero />
        <CollectiveProgress />
        <Prizes />
        <PointsSystem />
        <Timeline />
        <AdventCalendar />
        <Leaderboard />
        <Motivation />
      </main>

      <footer className="bg-brand-950 border-t border-brand-800 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-brand-400/60 text-sm">
            © 2024 Ambassador Hub. Все права защищены.
          </div>
          <div className="flex gap-6 text-sm font-medium text-brand-300/80">
            <a href="#" className="hover:text-white transition-colors">Правила</a>
            <a href="#" className="hover:text-white transition-colors">Поддержка</a>
            <a href="#" className="hover:text-white transition-colors">Конфиденциальность</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;