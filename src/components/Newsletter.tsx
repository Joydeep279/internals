export const Newsletter = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-white dark:bg-background-start transition-colors">
      <div className="absolute inset-0 bg-transparent"></div>
      <div className="absolute inset-0 bg-grid opacity-10 dark:opacity-10"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-hero-glow z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">
          Stop guessing. Start knowing.
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 transition-colors">
          Join thousands of engineers who are mastering their tools by
          understanding how they work.
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
          <input
            className="flex-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900/80 text-slate-900 dark:text-white py-3 px-4 focus:ring-primary focus:border-primary placeholder-slate-500 dark:placeholder-slate-400 transition-colors"
            placeholder="Enter your email"
            type="email"
          />
          <button
            className="bg-primary hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-md transition-all shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_25px_rgba(236,72,153,0.6)]"
            type="button"
          >
            Get Weekly Deep Dives
          </button>
        </form>
        <p className="mt-4 text-xs text-slate-500 dark:text-slate-400 transition-colors">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};
