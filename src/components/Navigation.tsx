import { useTheme } from '../context/ThemeContext';

export const Navigation = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full z-50 top-0 border-b border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#0a0e27]/80 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <span className="material-icons text-primary text-3xl group-hover:animate-pulse">
              terminal
            </span>
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white transition-colors">
              Internals
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
              href="#"
            >
              Explore
            </a>
            <a
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
              href="#"
            >
              Documentation
            </a>
            <a
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
              href="#"
            >
             Engineering Blogs
            </a>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-icons text-slate-400 dark:text-slate-500 text-sm">search</span>
              </div>
              <input
                className="block w-full pl-10 pr-3 py-1.5 border border-slate-300 dark:border-slate-700 rounded-full leading-5 bg-white dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary sm:text-sm transition-all"
                placeholder="Search codebase..."
                type="text"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-slate-500 dark:text-slate-400 text-xs border border-slate-600 dark:border-slate-700 px-1.5 rounded">
                  ⌘K
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="https://github.com/Joydeep279/internals" target="_blank">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <button
              onClick={toggleTheme}
              className="bg-transparent text-slate-500 dark:text-slate-400 hover:text-pink-500 dark:hover:text-pink-400 transition-colors border-none"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <span className="material-icons text-xl">light_mode</span>
              ) : (
                <span className="material-icons text-xl">dark_mode</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
