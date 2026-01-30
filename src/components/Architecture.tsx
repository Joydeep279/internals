import { useState } from 'react';

export const Architecture = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-black/20 dark:to-black/10 backdrop-blur-sm border-t border-slate-200 dark:border-white/5 transition-colors duration-300">
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

        @keyframes shimmer {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 15px rgba(236,72,153,0.15), 0 0 30px rgba(236,72,153,0.05); }
          50% { box-shadow: 0 0 25px rgba(236,72,153,0.25), 0 0 50px rgba(236,72,153,0.1); }
        }

        @keyframes badge-bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
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

        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }

        .animate-badge-bounce {
          animation: badge-bounce 2s ease-in-out infinite;
        }
        
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }

        .feature-item-base {
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .feature-item-base:hover {
          transform: translateX(4px);
        }

        .feature-badge {
          transition: all 0.3s ease;
        }

        .feature-badge-active {
          background-color: rgba(236, 72, 153, 0.3);
          border-color: rgba(236, 72, 153, 0.8);
          box-shadow: 0 0 12px rgba(236, 72, 153, 0.4);
        }

        .feature-text {
          transition: color 0.3s ease;
        }

        .button-glow {
          transition: all 0.3s ease;
        }

        .button-glow:hover {
          box-shadow: 0 0 20px rgba(236, 72, 153, 0.4), 0 0 40px rgba(236, 72, 153, 0.2);
        }

        .diagram-container {
          transition: transform 0.3s ease;
        }

        .diagram-container:hover {
          transform: scale(1.02);
        }

        .flow-element {
          transition: all 0.3s ease;
        }

        .flow-element:hover {
          filter: brightness(1.2);
        }
      `}</style>
      
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
              className="mt-8 px-6 py-3 text-primary font-medium hover:text-pink-600 flex items-center transition-all duration-300 animate-fade-in-up stagger-4 button-glow border border-primary/30 dark:border-primary/20 rounded-lg hover:border-primary/60 dark:hover:border-primary/50 bg-primary/8 dark:bg-primary/5 hover:bg-primary/15 dark:hover:bg-primary/10"
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              See an example diagram{" "}
              <span className={`material-icons ml-2 text-sm transition-transform duration-300 ${isButtonHovered ? 'translate-x-1' : ''}`}>
                open_in_new
              </span>
            </button>
          </div>
          <div className="relative animate-slide-in-right">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-purple-600 to-primary rounded-2xl blur-2xl opacity-15 dark:opacity-40 animate-pulse"></div>
            <div className="absolute -inset-2 bg-gradient-to-b from-white/5 dark:from-white/10 to-transparent rounded-xl pointer-events-none"></div>
            <div className="relative rounded-2xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-slate-300 dark:border-slate-700/60 p-4 shadow-lg dark:shadow-2xl animate-scale-in overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0"></div>
              
              {/* SVG connections */}
              <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
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
                <line x1="200" y1="50" x2="200" y2="120" stroke="rgba(139,92,246,0.3)" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="200" y1="170" x2="200" y2="240" stroke="rgba(139,92,246,0.3)" strokeWidth="2" strokeDasharray="5,5" />
                <line x1="200" y1="290" x2="200" y2="360" stroke="rgba(139,92,246,0.3)" strokeWidth="2" strokeDasharray="5,5" />
                
                {/* Animated particles flowing down */}
                <circle r="4" fill="#ff7ab6" filter="url(#glow2)" opacity="0.8">
                  <animate attributeName="cy" from="60" to="350" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;1;1;0" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle r="3" fill="#8b5cf6" filter="url(#glow2)" opacity="0.7">
                  <animate attributeName="cy" from="70" to="360" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0;0.8;0.8;0" dur="2.5s" repeatCount="indefinite" />
                </circle>
                
                {/* Horizontal distribution lines */}
                <path d="M 200 130 L 120 160" stroke="rgba(168,85,247,0.15)" strokeWidth="1.5" fill="none" />
                <path d="M 200 130 L 200 160" stroke="rgba(168,85,247,0.15)" strokeWidth="1.5" fill="none" />
                <path d="M 200 130 L 280 160" stroke="rgba(168,85,247,0.15)" strokeWidth="1.5" fill="none" />
              </svg>

              {/* Layered Architecture */}
              <div className="relative z-10 space-y-6">
                {/* Client Layer */}
                <div 
                  className="text-center group"
                  onMouseEnter={() => setActiveLayer('client')}
                  onMouseLeave={() => setActiveLayer(null)}
                >
                  <div className={`inline-block px-8 py-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    activeLayer === 'client' 
                      ? 'bg-pink-500/20 dark:bg-pink-500/30 border-pink-400 shadow-[0_0_25px_rgba(236,72,153,0.4)] dark:shadow-[0_0_25px_rgba(236,72,153,0.5)]' 
                      : 'bg-pink-500/8 dark:bg-primary/15 border-pink-400/40 dark:border-primary/50 shadow-[0_0_15px_rgba(236,72,153,0.1)] dark:shadow-[0_0_15px_rgba(236,72,153,0.2)]'
                  }`}>
                    <div className="flex items-center gap-2 justify-center">
                      <span className="material-icons text-pink-500 dark:text-primary text-xl">devices</span>
                      <span className="font-semibold text-slate-900 dark:text-white text-sm">Client Layer</span>
                    </div>
                    {activeLayer === 'client' && (
                      <p className="text-xs text-pink-600 dark:text-pink-200 mt-1">Web • Mobile • Desktop</p>
                    )}
                  </div>
                </div>

                {/* API Gateway */}
                <div 
                  className="text-center group"
                  onMouseEnter={() => setActiveLayer('gateway')}
                  onMouseLeave={() => setActiveLayer(null)}
                >
                  <div className={`inline-block px-8 py-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    activeLayer === 'gateway' 
                      ? 'bg-purple-500/20 dark:bg-purple-500/30 border-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.4)] dark:shadow-[0_0_25px_rgba(168,85,247,0.5)]' 
                      : 'bg-purple-500/8 dark:bg-purple-500/15 border-purple-400/40 dark:border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.1)] dark:shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                  }`}>
                    <div className="flex items-center gap-2 justify-center">
                      <span className="material-icons text-purple-600 dark:text-purple-300 text-xl">router</span>
                      <span className="font-semibold text-slate-900 dark:text-white text-sm">API Gateway & Auth</span>
                    </div>
                    {activeLayer === 'gateway' && (
                      <p className="text-xs text-purple-600 dark:text-purple-200 mt-1">Rate Limit • Routing • Security</p>
                    )}
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
                        className={`flex-1 px-4 py-3 rounded-lg border-2 text-center cursor-pointer transition-all duration-300 bg-gradient-to-br ${service.colorLight} dark:${service.colorDark} shadow-sm dark:shadow-md`}
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
                  className="text-center group"
                  onMouseEnter={() => setActiveLayer('cache')}
                  onMouseLeave={() => setActiveLayer(null)}
                >
                  <div className={`inline-block px-8 py-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    activeLayer === 'cache' 
                      ? 'bg-amber-500/20 dark:bg-amber-500/30 border-amber-400 shadow-[0_0_25px_rgba(217,119,6,0.4)] dark:shadow-[0_0_25px_rgba(217,119,6,0.5)]' 
                      : 'bg-amber-500/8 dark:bg-amber-500/15 border-amber-400/40 dark:border-amber-500/50 shadow-[0_0_15px_rgba(217,119,6,0.1)] dark:shadow-[0_0_15px_rgba(217,119,6,0.2)]'
                  }`}>
                    <div className="flex items-center gap-2 justify-center">
                      <span className="material-icons text-amber-600 dark:text-amber-300 text-xl">bolt</span>
                      <span className="font-semibold text-slate-900 dark:text-white text-sm">Cache Layer</span>
                    </div>
                    {activeLayer === 'cache' && (
                      <p className="text-xs text-amber-600 dark:text-amber-200 mt-1">Redis • Memcached</p>
                    )}
                  </div>
                </div>

                {/* Data Persistence */}
                <div 
                  className="text-center group"
                  onMouseEnter={() => setActiveLayer('database')}
                  onMouseLeave={() => setActiveLayer(null)}
                >
                  <div className={`inline-block px-8 py-3 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                    activeLayer === 'database' 
                      ? 'bg-emerald-500/20 dark:bg-emerald-500/30 border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.4)] dark:shadow-[0_0_25px_rgba(16,185,129,0.5)]' 
                      : 'bg-emerald-500/8 dark:bg-emerald-500/15 border-emerald-400/40 dark:border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.1)] dark:shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                  }`}>
                    <div className="flex items-center gap-2 justify-center">
                      <span className="material-icons text-emerald-600 dark:text-emerald-300 text-xl">storage</span>
                      <span className="font-semibold text-slate-900 dark:text-white text-sm">Data Persistence</span>
                    </div>
                    {activeLayer === 'database' && (
                      <p className="text-xs text-emerald-600 dark:text-emerald-200 mt-1">PostgreSQL • MongoDB • S3</p>
                    )}
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
