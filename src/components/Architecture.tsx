export const Architecture = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-black/20 backdrop-blur-sm border-t border-slate-200 dark:border-white/5 transition-colors">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        
        @keyframes dashAnimation {
          to {
            stroke-dashoffset: -8px;
          }
        }
        
        @keyframes dataFlowRight {
          0% {
            offset-distance: 0%;
            opacity: 1;
          }
          100% {
            offset-distance: 100%;
            opacity: 1;
          }
        }
        
        @keyframes dataFlowLeft {
          0% {
            offset-distance: 100%;
            opacity: 1;
          }
          100% {
            offset-distance: 0%;
            opacity: 1;
          }
        }
        
        .data-packet {
          animation: dataFlowRight 2s ease-in-out infinite;
        }
        
        .data-packet-return {
          animation: dataFlowLeft 2s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.6s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-dash {
          animation: dashAnimation 20s linear infinite;
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 transition-colors animate-fade-in-up">
              Not just code blocks. <br />
              <span className="text-primary">Visual Architecture.</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed transition-colors animate-fade-in-up stagger-1">
              We don't just dump code on you. Every deep dive comes with
              hand-crafted architectural diagrams that explain the data flow and
              component relationships before you read a single line of C++ or
              JavaScript.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start animate-fade-in-up stagger-2">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mr-3">
                  <span className="material-icons text-primary text-xs">
                    check
                  </span>
                </span>
                <span className="text-slate-700 dark:text-slate-300 transition-colors">Interactive Call Stacks</span>
              </li>
              <li className="flex items-start animate-fade-in-up stagger-3">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mr-3">
                  <span className="material-icons text-primary text-xs">
                    check
                  </span>
                </span>
                <span className="text-slate-700 dark:text-slate-300 transition-colors">Memory Layout Visualizations</span>
              </li>
              <li className="flex items-start animate-fade-in-up stagger-4">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mr-3">
                  <span className="material-icons text-primary text-xs">
                    check
                  </span>
                </span>
                <span className="text-slate-700 dark:text-slate-300 transition-colors">Annotated Source Links</span>
              </li>
            </ul>
            <button className="mt-8 text-primary font-medium hover:text-pink-600 dark:hover:text-pink-400 flex items-center transition-colors animate-fade-in-up stagger-4 hover:scale-105 transform duration-200">
              See an example diagram{" "}
              <span className="material-icons ml-1 text-sm">open_in_new</span>
            </button>
          </div>
          <div className="relative animate-slide-in-right">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur-lg opacity-20 dark:opacity-30 animate-pulse"></div>
            <div className="relative rounded-xl bg-slate-900 dark:bg-[#0f172a] border border-slate-700/60 p-2 shadow-2xl animate-scale-in">
              <div className="h-64 w-full bg-slate-800/50 dark:bg-[#0a0e1c] rounded flex items-center justify-center border border-slate-700/50 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center gap-20">
                  <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="flow-path" d="M28 28 C45 28,55 72,72 72" fill="none" stroke="rgba(148,163,184,0.12)" strokeWidth="0.6" />
                    <path id="flow-path-rev" d="M72 72 C55 72,45 28,28 28" fill="none" stroke="rgba(168,85,247,0.06)" strokeWidth="0.6" />
                    <circle r="1.6" fill="#ec4899">
                      <animateMotion dur="2s" repeatCount="indefinite" begin="0s">
                        <mpath href="#flow-path" />
                      </animateMotion>
                    </circle>
                    <circle r="1.6" fill="#a855f7">
                      <animateMotion dur="2s" repeatCount="indefinite" begin="1s">
                        <mpath href="#flow-path-rev" />
                      </animateMotion>
                    </circle>
                  </svg>

                  <div className="w-32 h-16 border-2 border-primary rounded-lg flex items-center justify-center text-primary text-xs font-mono bg-primary/10 mb-24 z-10 shadow-[0_0_15px_rgba(236,72,153,0.15)] animate-float" style={{ animationDelay: '0s' }}>
                    Client
                  </div>
                  <div className="w-48 h-24 border-2 border-purple-500 rounded-lg flex items-center justify-center text-purple-400 text-xs font-mono bg-purple-500/10 mt-24 z-10 shadow-[0_0_15px_rgba(168,85,247,0.15)] animate-float" style={{ animationDelay: '0.5s' }}>
                    Server / API
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
