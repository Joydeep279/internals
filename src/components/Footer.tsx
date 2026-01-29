export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-white/5 bg-white dark:bg-[#020617] py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="material-icons text-slate-400 dark:text-slate-500 text-xl transition-colors">terminal</span>
          <span className="font-bold text-slate-700 dark:text-slate-200 transition-colors">Internals</span>
        </div>
        <div className="flex gap-8 text-sm text-slate-600 dark:text-slate-400">
          <a className="hover:text-primary transition-colors" href="#">
            About
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Requests
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Twitter
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            GitHub
          </a>
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-600 transition-colors">
          © 2023 Internals Project. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
