import { useState } from 'react';

export const Architecture = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-black/20 dark:to-black/10 backdrop-blur-sm border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
   
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 animate-fade-in-up">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-primary/10 to-purple-500/10 dark:from-primary/20 dark:to-purple-500/20 rounded-full border border-primary/30 dark:border-primary/50">
                <span className="text-xs font-semibold text-primary">✨ Advanced Visuals</span>
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-colors animate-fade-in-up stagger-1 leading-tight">
              Not just code blocks. <br />
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Visual Architecture.</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed transition-colors animate-fade-in-up stagger-2">
              We don't just dump code on you. Every deep dive comes with
              hand-crafted architectural diagrams that explain the data flow and
              component relationships before you read a single line of C++ or
              JavaScript.
            </p>
            <ul className="space-y-3">
              {[
                { icon: 'call_split', text: 'Interactive Call Stacks' },
                { icon: 'memory', text: 'Memory Layout Visualizations' },
                { icon: 'link', text: 'Annotated Source Links' }
              ].map((feature, idx) => (
                <li 
                  key={idx}
                  className="flex items-start animate-fade-in-up feature-item-base"
                  style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                  onClick={() => setActiveFeature(activeFeature === idx ? null : idx)}
                  onMouseEnter={() => setActiveFeature(idx)}
                  onMouseLeave={() => setActiveFeature(null)}
                >
                  <span className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3 transition-all duration-300 feature-badge ${
                    activeFeature === idx 
                      ? 'feature-badge-active bg-primary/30 border-2 border-primary shadow-lg' 
                      : 'bg-primary/20 border border-primary/40'
                  }`}>
                    <span className="material-icons text-primary text-sm">
                      {feature.icon}
                    </span>
                  </span>
                  <span className={`text-slate-700 dark:text-slate-300 transition-colors duration-300 feature-text font-medium ${
                    activeFeature === idx ? 'text-primary dark:text-pink-300' : ''
                  }`}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
            <button 
              className="mt-8 px-6 py-3 text-primary font-medium hover:text-pink-600 flex items-center transition-all duration-300 animate-fade-in-up stagger-4 button-glow border border-primary/30 dark:border-primary/20 rounded-full hover:border-primary/60 dark:hover:border-primary/50 bg-primary/8 dark:bg-primary/5 hover:bg-primary/15 dark:hover:bg-primary/10"
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              See an example diagram{" "}
              <span className={`material-icons ml-2 text-sm transition-transform duration-300 ${isButtonHovered ? 'translate-x-1' : ''}`}>
                open_in_new
              </span>
            </button>
          </div>
            <div className="relative animate-slide-in-right group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-purple-600 to-primary rounded-2xl blur-2xl opacity-15 dark:opacity-40 animate-pulse group-hover:opacity-25 dark:group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="absolute -inset-2 bg-gradient-to-b from-white/5 dark:from-white/10 to-transparent rounded-xl pointer-events-none"></div>
            <div className="relative rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-slate-300 dark:border-slate-700/60 p-4 shadow-lg dark:shadow-2xl animate-scale-in overflow-hidden group-hover:shadow-2xl dark:group-hover:shadow-3xl group-hover:border-primary/40 transition-all duration-300">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 group-hover:via-primary/80 transition-all duration-300"></div>
              
              {/* SVG connections */}
              <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
                </filter>
              </defs>
              
              {/* Vertical flow lines */}
              <line x1="200" y1="50" x2="200" y2="120" stroke="rgba(139,92,246,0.3)" strokeWidth="2" strokeDasharray="5,5" className="group-hover:stroke-primary/60 transition-colors duration-300" />
              <line x1="200" y1="170" x2="200" y2="240" stroke="rgba(139,92,246,0.3)" strokeWidth="2" strokeDasharray="5,5" className="group-hover:stroke-primary/60 transition-colors duration-300" />
              <line x1="200" y1="290" x2="200" y2="360" stroke="rgba(139,92,246,0.3)" strokeWidth="2" strokeDasharray="5,5" className="group-hover:stroke-primary/60 transition-colors duration-300" />
              
              {/* Horizontal distribution lines */}
              <path d="M 200 130 L 200 160" stroke="rgba(168,85,247,0.15)" strokeWidth="1.5" fill="none" className="group-hover:stroke-primary/40 transition-colors duration-300" />
              </svg>

              {/* Layered Architecture */}
              <div className="relative z-10 space-y-6">
              {/* Client Layer */}
              <div 
                className="text-center group/layer transition-transform duration-300 group-hover:scale-105"
                onMouseEnter={() => setActiveLayer('client')}
                onMouseLeave={() => setActiveLayer(null)}
              >
                <div className={`inline-block px-8 py-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                activeLayer === 'client' 
                  ? 'bg-pink-500/20 dark:bg-pink-500/30 border-pink-400 shadow-[0_0_25px_rgba(236,72,153,0.4)] dark:shadow-[0_0_25px_rgba(236,72,153,0.5)]' 
                  : 'bg-pink-500/8 dark:bg-primary/15 border-pink-400/40 dark:border-primary/50 shadow-[0_0_15px_rgba(236,72,153,0.1)] dark:shadow-[0_0_15px_rgba(236,72,153,0.2)] group-hover/layer:shadow-[0_0_25px_rgba(236,72,153,0.3)]'
                }`}>
                <div className="flex items-center gap-2 justify-center">
                  <span className="material-icons text-pink-500 dark:text-primary text-xl">devices</span>
                  <span className="font-semibold text-slate-900 dark:text-white text-sm">Client Layer</span>
                </div>
                <p className={`text-xs text-pink-600 dark:text-pink-200 mt-1 transition-opacity duration-300 ${activeLayer === 'client' ? 'opacity-100' : 'opacity-0'}`}>Web • Mobile • Desktop</p>
                </div>
              </div>

              {/* API Gateway */}
              <div 
                className="text-center group/layer transition-transform duration-300 group-hover:scale-105"
                onMouseEnter={() => setActiveLayer('gateway')}
                onMouseLeave={() => setActiveLayer(null)}
              >
                <div className={`inline-block px-8 py-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                activeLayer === 'gateway' 
                  ? 'bg-purple-500/20 dark:bg-purple-500/30 border-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.4)] dark:shadow-[0_0_25px_rgba(168,85,247,0.5)]' 
                  : 'bg-purple-500/8 dark:bg-purple-500/15 border-purple-400/40 dark:border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.1)] dark:shadow-[0_0_15px_rgba(168,85,247,0.2)] group-hover/layer:shadow-[0_0_25px_rgba(168,85,247,0.3)]'
                }`}>
                <div className="flex items-center gap-2 justify-center">
                  <span className="material-icons text-purple-600 dark:text-purple-300 text-xl">router</span>
                  <span className="font-semibold text-slate-900 dark:text-white text-sm">API Gateway & Auth</span>
                </div>
                <p className={`text-xs text-purple-600 dark:text-purple-200 mt-1 transition-opacity duration-300 ${activeLayer === 'gateway' ? 'opacity-100' : 'opacity-0'}`}>Rate Limit • Routing • Security</p>
                </div>
              </div>

              {/* Microservices Layer */}
              <div className="space-y-2">
                <div className="text-center mb-2">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Microservices</span>
                </div>
                <div className="flex justify-around gap-3 px-4">
                {[
                  { name: 'User Service', icon: 'person', colorLight: 'from-cyan-500/10 to-cyan-600/5 border-cyan-400/40', colorDark: 'from-cyan-500/20 to-cyan-600/10 border-cyan-400/50', textLight: 'text-cyan-600', textDark: 'text-cyan-300' },
                  { name: 'Data Service', icon: 'database', colorLight: 'from-blue-500/10 to-blue-600/5 border-blue-400/40', colorDark: 'from-blue-500/20 to-blue-600/10 border-blue-400/50', textLight: 'text-blue-600', textDark: 'text-blue-300' },
                  { name: 'Queue Service', icon: 'queue', colorLight: 'from-indigo-500/10 to-indigo-600/5 border-indigo-400/40', colorDark: 'from-indigo-500/20 to-indigo-600/10 border-indigo-400/50', textLight: 'text-indigo-600', textDark: 'text-indigo-300' }
                ].map((service, idx) => (
                  <div 
                  key={idx}
                  className={`flex-1 px-4 py-3 rounded-lg border-2 text-center cursor-pointer transition-all duration-300 bg-gradient-to-br ${service.colorLight} dark:${service.colorDark} shadow-sm dark:shadow-md hover:scale-110 hover:shadow-md`}
                  onMouseEnter={() => setActiveLayer(`service-${idx}`)}
                  onMouseLeave={() => setActiveLayer(null)}
                  >
                  <span className={`material-icons text-sm block mb-1 text-center ${service.textLight} dark:${service.textDark}`}>
                    {service.icon}
                  </span>
                  <span className="text-xs font-medium text-slate-900 dark:text-white">{service.name}</span>
                  </div>
                ))}
                </div>
              </div>

              {/* Cache Layer */}
              <div 
                className="text-center group/layer transition-transform duration-300 group-hover:scale-105"
                onMouseEnter={() => setActiveLayer('cache')}
                onMouseLeave={() => setActiveLayer(null)}
              >
                <div className={`inline-block px-8 py-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                activeLayer === 'cache' 
                  ? 'bg-amber-500/20 dark:bg-amber-500/30 border-amber-400 shadow-[0_0_25px_rgba(217,119,6,0.4)] dark:shadow-[0_0_25px_rgba(217,119,6,0.5)]' 
                  : 'bg-amber-500/8 dark:bg-amber-500/15 border-amber-400/40 dark:border-amber-500/50 shadow-[0_0_15px_rgba(217,119,6,0.1)] dark:shadow-[0_0_15px_rgba(217,119,6,0.2)] group-hover/layer:shadow-[0_0_25px_rgba(217,119,6,0.3)]'
                }`}>
                <div className="flex items-center gap-2 justify-center">
                  <span className="material-icons text-amber-600 dark:text-amber-300 text-xl">bolt</span>
                  <span className="font-semibold text-slate-900 dark:text-white text-sm">Cache Layer</span>
                </div>
                <p className={`text-xs text-amber-600 dark:text-amber-200 mt-1 transition-opacity duration-300 ${activeLayer === 'cache' ? 'opacity-100' : 'opacity-0'}`}>Redis • Memcached</p>
                </div>
              </div>

              {/* Data Persistence */}
              <div 
                className="text-center group/layer transition-transform duration-300 group-hover:scale-105"
                onMouseEnter={() => setActiveLayer('database')}
                onMouseLeave={() => setActiveLayer(null)}
              >
                <div className={`inline-block px-8 py-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                activeLayer === 'database' 
                  ? 'bg-emerald-500/20 dark:bg-emerald-500/30 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.4)] dark:shadow-[0_0_25px_rgba(16,185,129,0.5)]' 
                  : 'bg-emerald-500/8 dark:bg-emerald-500/15 border-emerald-400/40 dark:border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.1)] dark:shadow-[0_0_15px_rgba(16,185,129,0.2)] group-hover/layer:shadow-[0_0_25px_rgba(16,185,129,0.3)]'
                }`}>
                <div className="flex items-center gap-2 justify-center">
                  <span className="material-icons text-emerald-600 dark:text-emerald-300 text-xl">storage</span>
                  <span className="font-semibold text-slate-900 dark:text-white text-sm">Data Persistence</span>
                </div>
                <p className={`text-xs text-emerald-600 dark:text-emerald-200 mt-1 transition-opacity duration-300 ${activeLayer === 'database' ? 'opacity-100' : 'opacity-0'}`}>PostgreSQL • MongoDB • S3</p>
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
