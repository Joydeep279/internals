interface CardProps {
  title: string;
  description: string;
  version: string;
  icon: React.ReactNode;
  color: string;
}

const DeepDiveCard: React.FC<CardProps> = ({ title, description, version, icon, color }) => {
  const colorClasses: Record<string, { bg: string; hover: string; border: string; shadow: string }> = {
    blue: {
      bg: "bg-blue-500/10",
      hover: "group-hover:scale-150 group-hover:bg-blue-500/20",
      border: "border-blue-500/20",
      shadow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:border-blue-500/30",
    },
    green: {
      bg: "bg-green-500/10",
      hover: "group-hover:scale-150 group-hover:bg-green-500/20",
      border: "border-green-500/20",
      shadow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] hover:border-green-500/30",
    },
    yellow: {
      bg: "bg-yellow-500/10",
      hover: "group-hover:scale-150 group-hover:bg-yellow-500/20",
      border: "border-yellow-500/20",
      shadow: "hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] hover:border-yellow-500/30",
    },
    emerald: {
      bg: "bg-emerald-500/10",
      hover: "group-hover:scale-150 group-hover:bg-emerald-500/20",
      border: "border-emerald-500/20",
      shadow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:border-emerald-500/30",
    },
    cyan: {
      bg: "bg-cyan-500/10",
      hover: "group-hover:scale-150 group-hover:bg-cyan-500/20",
      border: "border-cyan-500/20",
      shadow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:border-cyan-500/30",
    },
    red: {
      bg: "bg-red-500/10",
      hover: "group-hover:scale-150 group-hover:bg-red-500/20",
      border: "border-red-500/20",
      shadow: "hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] hover:border-red-500/30",
    },
  };

  const classes = colorClasses[color] || colorClasses.blue;

  return (
    <div
      className={`group relative rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-card-dark p-6 ${classes.shadow} transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-sm`}
    >
      <div
        className={`absolute top-0 right-0 w-24 h-24 ${classes.bg} rounded-bl-full -mr-4 -mt-4 transition-transform ${classes.hover} blur-xl`}
      ></div>
      <div className="flex items-center gap-4 mb-4 relative z-10">
        <div className={`p-3 rounded-lg ${classes.bg} ${classes.border} border`}>{icon}</div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors">{title}</h3>
      </div>
      <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3 relative z-10 transition-colors">{description}</p>
      <div className="flex items-center justify-between mt-auto relative z-10">
        <span className="text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 px-2 py-1 rounded transition-colors">
          {version}
        </span>
        <span className="text-primary text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform group-hover:text-white dark:group-hover:text-white">
          Read Analysis <span className="material-icons text-sm ml-1">arrow_forward</span>
        </span>
      </div>
    </div>
  );
};

export const DeepDives = () => {
  const dives = [
    {
      title: "React Core",
      description:
        "Understand the Fiber architecture, reconciliation process, and how hooks are implemented under the hood.",
      version: "v18.2.0",
      icon: (
        <svg
          className="w-8 h-8 text-blue-500"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12c6.628 0 12-5.373 12-12s-5.372-12-12-12zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6-9.6-4.298-9.6-9.6 4.298-9.6 9.6-9.6zm0 1.5c-4.483 0-8.1 3.617-8.1 8.1s3.617 8.1 8.1 8.1 8.1-3.617 8.1-8.1-3.617-8.1-8.1-8.1z" />
        </svg>
      ),
      color: "blue",
    },
    {
      title: "Node.js Internals",
      description:
        "Explore the Event Loop, libuv, streams implementation, and the bridge between C++ and JavaScript.",
      version: "v20.x",
      icon: (
        <svg
          className="w-8 h-8 text-green-500"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0c6.628 0 12 5.372 12 12s-5.372 12-12 12S0 18.628 0 12 5.372 0 12 0m0 2c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10z" />
        </svg>
      ),
      color: "green",
    },
    {
      title: "V8 Engine",
      description:
        "Dive into the JIT compiler, garbage collection strategies (Orinoco), and hidden classes optimization.",
      version: "Ignition/TurboFan",
      icon: <span className="material-icons text-4xl text-yellow-500">memory</span>,
      color: "yellow",
    },
    {
      title: "Vue.js 3",
      description:
        "The reactivity system explained: Proxies, dep collection, and the compiler optimization hints.",
      version: "v3.3",
      icon: (
        <svg
          className="w-8 h-8 text-emerald-500"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M3 0h18l-9 15.52L3 0m0 0l9 15.52L21 0" />
        </svg>
      ),
      color: "emerald",
    },
    {
      title: "Tailwind CSS",
      description:
        "How the JIT engine parses your HTML and generates utility classes on demand.",
      version: "v3.0",
      icon: (
        <svg
          className="w-8 h-8 text-cyan-500"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0C6.482 0 3 3.482 3 9c0 1.657.671 3.157 1.756 4.243 0 0-1.243 3.713-2.268 6.756h2.268c1.024-3.043 2.268-6.756 2.268-6.756C8.843 13.329 10.357 14 12 14c1.643 0 3.157-.671 4.244-1.757 0 0 1.244 3.713 2.268 6.756h2.268c-1.025-3.043-2.268-6.756-2.268-6.756C20.329 12.157 21 10.657 21 9c0-5.518-3.482-9-9-9z" />
        </svg>
      ),
      color: "cyan",
    },
    {
      title: "Redis",
      description:
        "Inside the single-threaded event loop, dict implementation, and persistence mechanisms (RDB/AOF).",
      version: "v7.0",
      icon: (
        <svg
          className="w-8 h-8 text-red-500"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M0 0h24v24H0z" />
        </svg>
      ),
      color: "red",
    },
  ];

  return (
    <section className="py-24 relative bg-white dark:bg-background-start transition-colors" id="explore">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">
            Deep Dives Available Now
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto transition-colors">
            Choose a technology stack to start exploring its internal architecture
            and source code.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dives.map((dive) => (
            <DeepDiveCard key={dive.title} {...dive} />
          ))}
        </div>
      </div>
    </section>
  );
};
