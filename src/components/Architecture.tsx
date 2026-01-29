export const Architecture = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-black/20 backdrop-blur-sm border-t border-slate-200 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">
              Not just code blocks. <br />
              <span className="text-primary">Visual Architecture.</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed transition-colors">
              We don't just dump code on you. Every deep dive comes with
              hand-crafted architectural diagrams that explain the data flow and
              component relationships before you read a single line of C++ or
              JavaScript.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mr-3">
                  <span className="material-icons text-primary text-xs">
                    check
                  </span>
                </span>
                <span className="text-slate-700 dark:text-slate-300 transition-colors">Interactive Call Stacks</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mr-3">
                  <span className="material-icons text-primary text-xs">
                    check
                  </span>
                </span>
                <span className="text-slate-700 dark:text-slate-300 transition-colors">Memory Layout Visualizations</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mr-3">
                  <span className="material-icons text-primary text-xs">
                    check
                  </span>
                </span>
                <span className="text-slate-700 dark:text-slate-300 transition-colors">Annotated Source Links</span>
              </li>
            </ul>
            <button className="mt-8 text-primary font-medium hover:text-pink-600 dark:hover:text-pink-400 flex items-center transition-colors">
              See an example diagram{" "}
              <span className="material-icons ml-1 text-sm">open_in_new</span>
            </button>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur-lg opacity-20 dark:opacity-30 animate-pulse"></div>
            <div className="relative rounded-xl bg-slate-900 dark:bg-[#0f172a] border border-slate-700/60 p-2 shadow-2xl">
              <div className="h-64 w-full bg-slate-800/50 dark:bg-[#0a0e1c] rounded flex items-center justify-center border border-slate-700/50 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-16 border-2 border-primary rounded-lg flex items-center justify-center text-primary text-xs font-mono bg-primary/10 mb-24 z-10 shadow-[0_0_15px_rgba(236,72,153,0.15)]">
                    Client
                  </div>
                  <div className="absolute w-0.5 h-24 bg-slate-600 dark:bg-slate-700 top-[calc(50%-32px)]"></div>
                  <div className="w-48 h-24 border-2 border-purple-500 rounded-lg flex items-center justify-center text-purple-400 text-xs font-mono bg-purple-500/10 mt-24 z-10 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                    Server / API
                  </div>
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <path
                      d="M 50% 40% C 20% 40%, 20% 60%, 50% 60%"
                      fill="none"
                      stroke="#cbd5e1"
                      strokeDasharray="4 4"
                      strokeWidth="2"
                    ></path>
                    <path
                      d="M 50% 40% C 80% 40%, 80% 60%, 50% 60%"
                      fill="none"
                      stroke="#cbd5e1"
                      strokeDasharray="4 4"
                      strokeWidth="2"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
