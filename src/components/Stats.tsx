export const Stats = () => {
  return (
    <div className="border-y border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-slate-900/30 py-12 backdrop-blur-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          <div className="p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors duration-300">
            <div className="text-3xl font-bold text-slate-900 dark:text-white transition-colors">100+</div>
            <div className="mt-1 text-sm text-slate-600 dark:text-slate-400 transition-colors">Repositories Analyzed</div>
          </div>
          <div className="p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors duration-300">
            <div className="text-3xl font-bold text-slate-900 dark:text-white transition-colors">50k+</div>
            <div className="mt-1 text-sm text-slate-600 dark:text-slate-400 transition-colors">Developer Readers</div>
          </div>
          <div className="p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors duration-300">
            <div className="text-3xl font-bold text-slate-900 dark:text-white transition-colors">500+</div>
            <div className="mt-1 text-sm text-slate-600 dark:text-slate-400 transition-colors">Diagrams</div>
          </div>
          <div className="p-4 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 transition-colors duration-300">
            <div className="text-3xl font-bold text-slate-900 dark:text-white transition-colors">MIT</div>
            <div className="mt-1 text-sm text-slate-600 dark:text-slate-400 transition-colors">Open License</div>
          </div>
        </div>
      </div>
    </div>
  );
};
