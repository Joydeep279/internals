export const Header = () => {
  return (
    <header className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 bg-white dark:bg-background-start transition-colors">
      <div className="absolute inset-0 z-[-2]"></div>
      <div className="absolute inset-0 bg-grid opacity-20 dark:opacity-20 z-[-1]"></div>

      <div className="relative z-10 text-center max-w-4xl px-4 sm:px-6 lg:px-8 mt-[-10vh]">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          v2.0 Now Available
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6 drop-shadow-lg transition-colors">
          Understanding Open Source <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
            From the Inside Out
          </span>
        </h1>

        <p className="mt-4 text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed transition-colors">
          Deep-dive walkthroughs, architectural diagrams, and line-by-line analysis
          of the world's most popular open-source repositories.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-40">
          <a
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-pink-600 md:text-lg shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.7)] transition-all duration-300 hover:text-white"
            href="#explore"
          >
            Start Exploring
            <span className="material-icons ml-2 text-sm">arrow_forward</span>
          </a>
          <a
            className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 dark:border-slate-700 text-base font-medium rounded-md text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-700 md:text-lg transition-all backdrop-blur-sm"
           href="https://github.com/Joydeep279/internals" target="_blank"
          >
            View on GitHub
          </a>
        </div>

        <div className="mt-40 mx-auto max-w-3xl transform hover:scale-[1.01] transition-transform duration-500">
          <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#0f172a]/80 shadow-2xl overflow-hidden text-left backdrop-blur-sm">
            <div className="flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors"></div>
              </div>
              <span className="text-xs text-slate-500 font-mono">react-reconciler/src/ReactFiber.js</span>
            </div>
            <div className="p-4 overflow-x-auto bg-slate-50 dark:bg-[#0a0e1c]">
              <pre className="font-mono text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                <span className="text-purple-600 dark:text-purple-400">export</span>{' '}
                <span className="text-blue-600 dark:text-blue-400">function</span>{' '}
                <span className="text-yellow-600 dark:text-yellow-300">createFiberFromElement</span>(
                <br />
                &nbsp;&nbsp;element: ReactElement,
                <br />
                &nbsp;&nbsp;mode: TypeOfMode,
                <br />
                &nbsp;&nbsp;lanes: Lanes,
                <br />
                ): Fiber {'{'}
                <br />
                &nbsp;&nbsp;<span className="text-slate-500 italic">// This is where the magic happens...</span>
                <br />
                &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">const</span> type = element.type;
                <br />
                &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">const</span> key = element.key;
                <br />
                &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">const</span> pendingProps = element.props;
                <br />
                &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">const</span> fiber ={' '}
                <span className="text-yellow-600 dark:text-yellow-300">createFiberFromTypeAndProps</span>(
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;type, key, pendingProps,{' '}
                <span className="text-primary font-bold">owner</span>, mode, lanes
                <br />
                &nbsp;&nbsp;);
                <br />
                &nbsp;&nbsp;<span className="text-purple-600 dark:text-purple-400">return</span> fiber;
                <br />
                {'}'}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
