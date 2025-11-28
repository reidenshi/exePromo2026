import React from 'react';

const Motivation: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-950">
      {/* Background with blend mode */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-900 to-indigo-900 opacity-50"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Мы — Команда</h2>
        <p className="text-xl text-brand-100 leading-relaxed mb-10">
          Каждый выполненный шаг, каждый сторис и каждый приглашенный друг приближают нас к общей цели. 
          2026 год — это не просто дата, это наш с вами результат.
          <br /><br />
          Давайте сделаем это красиво! 🚀
        </p>
        <button className="bg-white text-brand-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-50 transition-colors shadow-xl">
          Вступить в игру
        </button>
      </div>
    </section>
  );
};

export default Motivation;