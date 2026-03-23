import React from "react";

// Type definitions
interface SidebarLink {
  icon: string;
  label: string;
  href: string;
  active?: boolean;
  nested?: SidebarLink[];
}

interface ArticleMetadata {
  readTime: string;
  difficulty: string;
  difficultyLevel: "Beginner" | "Intermediate" | "Advanced";
  source: string;
  sourceUrl: string;
}

interface Contributor {
  name: string;
  avatar: string;
}

interface CodeLine {
  lineNumber: number;
  content: string;
  highlight?: boolean;
}

interface NavigationLink {
  direction: "previous" | "next";
  label: string;
  href: string;
}

const FiberArchitecturePage: React.FC = () => {
  // Sample data
  const sidebarLinks: SidebarLink[] = [
    { icon: "article", label: "1. Introduction", href: "#", active: false },
    {
      icon: "account_tree",
      label: "2. Fiber Architecture",
      href: "#",
      active: true,
      nested: [
        {
          icon: "",
          label: "Structure of a Fiber",
          href: "#structure",
          active: true,
        },
        {
          icon: "",
          label: "Reconciliation Algorithm",
          href: "#reconciliation",
          active: false,
        },
        {
          icon: "",
          label: "Side Effects",
          href: "#side-effects",
          active: false,
        },
      ],
    },
    { icon: "schedule", label: "3. The Scheduler", href: "#", active: false },
    { icon: "commit", label: "4. Commit Phase", href: "#", active: false },
  ];

  const metadata: ArticleMetadata = {
    readTime: "25 min",
    difficulty: "Advanced",
    difficultyLevel: "Advanced",
    source: "ReactFiber.js",
    sourceUrl: "#",
  };

  const contributors: Contributor[] = [
    { name: "Contributor 1", avatar: "https://i.pravatar.cc/150?img=1" },
    { name: "Contributor 2", avatar: "https://i.pravatar.cc/150?img=2" },
    { name: "Contributor 3", avatar: "https://i.pravatar.cc/150?img=3" },
  ];

  const onThisPage = [
    { label: "Structure of a Fiber", href: "#structure", active: true },
    { label: "Traversal Visualized", href: "#traversal", active: false },
    { label: "The Work Loop", href: "#work-loop", active: false },
    { label: "Effect List", href: "#effect-list", active: false },
  ];

  const codeLines: CodeLine[] = [
    {
      lineNumber: 124,
      content: "function FiberNode(tag, pendingProps, key, mode) {",
      highlight: false,
    },
    { lineNumber: 125, content: "  // Instance", highlight: false },
    { lineNumber: 126, content: "  this.tag = tag;", highlight: false },
    { lineNumber: 127, content: "  this.key = key;", highlight: false },
    {
      lineNumber: 128,
      content: "  this.elementType = null;",
      highlight: false,
    },
    { lineNumber: 129, content: "  this.type = null;", highlight: false },
    { lineNumber: 130, content: "  this.stateNode = null;", highlight: false },
    { lineNumber: 131, content: "", highlight: false },
    {
      lineNumber: 132,
      content: "  // Fiber Links (The Graph)",
      highlight: false,
    },
    {
      lineNumber: 133,
      content: "  this.return = null; // Parent",
      highlight: true,
    },
    {
      lineNumber: 134,
      content: "  this.child = null; // First child",
      highlight: true,
    },
    {
      lineNumber: 135,
      content: "  this.sibling = null; // Next sibling",
      highlight: true,
    },
    { lineNumber: 136, content: "", highlight: false },
    { lineNumber: 137, content: "  this.index = 0;", highlight: false },
    { lineNumber: 138, content: "  this.ref = null;", highlight: false },
    { lineNumber: 139, content: "", highlight: false },
    { lineNumber: 140, content: "  // Effects", highlight: false },
    { lineNumber: 141, content: "  this.flags = NoFlags;", highlight: false },
    {
      lineNumber: 142,
      content: "  this.subtreeFlags = NoFlags;",
      highlight: false,
    },
    { lineNumber: 143, content: "  this.deletions = null;", highlight: false },
    { lineNumber: 144, content: "}", highlight: false },
  ];

  const navigation: NavigationLink[] = [
    { direction: "previous", label: "1. Introduction to React", href: "#" },
    { direction: "next", label: "3. The Scheduler", href: "#" },
  ];

  return (
    <div className="min-h-screen dark:bg-[#230f22] text-white font-sans antialiased">
      {/* Main Layout */}
      <div className="flex max-w-[1600px] mx-auto">
        {/* Left Sidebar */}
        <aside className="hidden lg:flex w-64 flex-col border-r border-[#3a2739] sticky top-[65px] h-[calc(100vh-65px)] overflow-y-auto bg-[#230f22]">
          <div className="p-6 flex flex-col gap-6">
            <div>
              <h5 className="text-[#bb9bba] text-xs font-bold uppercase tracking-wider mb-4">
                Module
              </h5>
              <div className="flex items-center gap-2 mb-1">
                <svg
                  className="w-5 h-5 text-[#f91ff2]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                <span className="text-white font-medium">React Internals</span>
              </div>
            </div>

            <div>
              <h5 className="text-[#bb9bba] text-xs font-bold uppercase tracking-wider mb-4">
                Chapters
              </h5>
              <nav className="flex flex-col gap-1">
                {sidebarLinks.map((link, index) => (
                  <div key={index}>
                    <a
                      className={`group flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
                        link.active
                          ? "bg-[#f91ff2]/10 text-[#f91ff2] font-medium border-r-2 border-[#f91ff2]"
                          : "text-[#bb9bba] hover:bg-[#2a1629] hover:text-white"
                      }`}
                      href={link.href}>
                      {link.icon && (
                        <svg
                          className="w-[18px] h-[18px]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      )}
                      <span className="text-sm">{link.label}</span>
                    </a>

                    {link.nested && link.active && (
                      <div className="ml-9 mt-1 flex flex-col gap-1">
                        {link.nested.map((nested, nestedIndex) => (
                          <a
                            key={nestedIndex}
                            className={`px-3 py-1.5 text-xs rounded transition-colors ${
                              nested.active
                                ? "text-[#f91ff2] font-medium"
                                : "text-[#bb9bba] hover:text-white"
                            }`}
                            href={nested.href}>
                            {nested.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-6 md:px-12 py-12 max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-[#bb9bba] mb-6">
            <a href="#" className="hover:text-white transition-colors">
              Docs
            </a>
            <span>›</span>
            <a href="#" className="hover:text-white transition-colors">
              React Source
            </a>
            <span>›</span>
            <span className="text-[#f91ff2]">Fiber Architecture</span>
          </nav>

          {/* Article Header */}
          <article>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-[#bb9bba] bg-clip-text text-transparent">
              React Internals: The Fiber Architecture
            </h1>

            <div className="flex items-center gap-6 mb-8 flex-wrap">
              <div className="flex items-center gap-2">
                <img
                  src="https://i.pravatar.cc/150?img=12"
                  alt="Dan Abramov"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm text-[#bb9bba]">Dan Abramov</span>
              </div>
              <span className="text-sm text-[#bb9bba]">
                Updated Oct 24, 2023
              </span>
              <div className="flex items-center gap-1 text-sm">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-[#bb9bba]">Verified for v18.2.0</span>
              </div>
            </div>

            {/* Intro */}
            <p className="mb-6 text-[#bb9bba] leading-relaxed">
              React's "Fiber" architecture was a complete rewrite of the
              reconciliation algorithm. The primary goal was to enable
              incremental rendering: the ability to split rendering work into
              chunks and spread it out over multiple frames. This deep dive
              explores the{" "}
              <code className="px-2 py-0.5 rounded bg-[#f91ff2]/20 text-[#f91ff2] font-mono text-sm">
                FiberNode
              </code>{" "}
              structure and how React traverses it.
            </p>

            {/* Concept Card */}
            <div className="my-8 p-6 rounded-xl border border-[#f91ff2]/30 bg-[#f91ff2]/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#f91ff2]"></div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#f91ff2]/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-[#f91ff2]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">
                    Concept: Cooperative Multitasking
                  </h3>
                  <p className="text-[#bb9bba] text-sm leading-relaxed">
                    Unlike the stack reconciler (React 15), Fiber allows React
                    to pause work, check for higher priority updates (like user
                    input), and then resume or discard the work in progress.
                  </p>
                </div>
              </div>
            </div>

            {/* Main Section */}
            <h2
              id="structure"
              className="text-3xl font-bold mb-6 mt-12 flex items-center gap-3">
              <span className="text-[#f91ff2]">#</span>
              Structure of a Fiber
            </h2>

            <p className="mb-6 text-[#bb9bba] leading-relaxed">
              A Fiber is essentially a plain JavaScript object that contains
              information about a component, its input, and its output. It
              corresponds to a stack frame, but it exists on the heap. Let's
              look at its source definition.
            </p>

            {/* Code Block */}
            <div className="my-8 rounded-xl border border-[#3a2739] bg-[#2a1629] overflow-hidden shadow-lg">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#3a2739] bg-[#230f22]">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-[#bb9bba]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  <span className="text-xs text-[#bb9bba] font-mono">
                    packages/react-reconciler/src/ReactFiber.js
                  </span>
                </div>
                <button className="text-xs text-[#f91ff2] hover:text-white flex items-center gap-1 transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  Copy
                </button>
              </div>

              <div
                className="p-4 overflow-x-auto"
                style={{ counterReset: "line 123" }}>
                <code className="font-mono text-sm">
                  {codeLines.map((line, index) => (
                    <div
                      key={index}
                      className={`leading-relaxed ${line.highlight ? "bg-[#f91ff2]/10 -mx-4 px-4 border-l-2 border-[#f91ff2]" : ""}`}
                      style={{ counterIncrement: "line" }}>
                      <span className="inline-block w-8 text-right mr-4 text-[#6b5a6b] text-xs select-none">
                        {line.lineNumber}
                      </span>
                      <span className="text-white">
                        {line.content.includes("//") ? (
                          <>
                            {line.content.split("//")[0]}
                            <span className="text-[#6b5a6b]">
                              //{line.content.split("//")[1]}
                            </span>
                          </>
                        ) : (
                          <>
                            {line.content.split(".").map((part, i, arr) => (
                              <React.Fragment key={i}>
                                {i > 0 && (
                                  <span className="text-[#f91ff2]">.</span>
                                )}
                                {part.includes("this") ? (
                                  <span className="text-[#f91ff2]">{part}</span>
                                ) : part.includes("null") ||
                                  part.includes("0") ? (
                                  <span className="text-[#bb9bba]">{part}</span>
                                ) : (
                                  part
                                )}
                              </React.Fragment>
                            ))}
                          </>
                        )}
                      </span>
                    </div>
                  ))}
                </code>
              </div>
            </div>

            <p className="mb-6 text-[#bb9bba] leading-relaxed">
              The properties highlighted above (
              <code className="px-2 py-0.5 rounded bg-[#f91ff2]/20 text-[#f91ff2] font-mono text-sm">
                return
              </code>
              ,{" "}
              <code className="px-2 py-0.5 rounded bg-[#f91ff2]/20 text-[#f91ff2] font-mono text-sm">
                child
              </code>
              ,{" "}
              <code className="px-2 py-0.5 rounded bg-[#f91ff2]/20 text-[#f91ff2] font-mono text-sm">
                sibling
              </code>
              ) form the singly linked list structure that allows React to
              traverse the component tree. This structure is what enables the
              "pause and resume" functionality, as React keeps a pointer to the
              current fiber it is working on.
            </p>

            {/* Traversal Visualized Section */}
            <h2 id="traversal" className="text-3xl font-bold mb-6 mt-12">
              Traversal Visualized
            </h2>

            <p className="mb-6 text-[#bb9bba] leading-relaxed">
              React performs a depth-first traversal. It goes deep into{" "}
              <code className="px-2 py-0.5 rounded bg-[#f91ff2]/20 text-[#f91ff2] font-mono text-sm">
                child
              </code>{" "}
              nodes first, then moves to{" "}
              <code className="px-2 py-0.5 rounded bg-[#f91ff2]/20 text-[#f91ff2] font-mono text-sm">
                sibling
              </code>{" "}
              nodes, and finally returns to the{" "}
              <code className="px-2 py-0.5 rounded bg-[#f91ff2]/20 text-[#f91ff2] font-mono text-sm">
                parent
              </code>
              .
            </p>

            {/* Diagram */}
            <div className="my-8 rounded-xl border border-[#3a2739] bg-[#2a1629] p-2 shadow-lg">
              <div className="w-full aspect-video bg-[#130913] rounded-lg flex items-center justify-center overflow-hidden relative">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  {/* Connecting lines */}
                  <path
                    d="M200 60 L140 120"
                    stroke="#ffffff20"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M200 60 L260 120"
                    stroke="#ffffff20"
                    strokeWidth="2"
                    fill="none"
                  />

                  {/* Highlighted path */}
                  <path
                    d="M200 60 L140 120"
                    stroke="#f91ff2"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    fill="none">
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="10"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <path
                    d="M140 120 L260 120"
                    stroke="#f91ff2"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity="0.3"
                    fill="none"
                  />

                  {/* Root node */}
                  <circle
                    cx="200"
                    cy="60"
                    r="24"
                    fill="#f91ff220"
                    stroke="#f91ff2"
                    strokeWidth="2"
                  />
                  <circle
                    cx="200"
                    cy="60"
                    r="24"
                    fill="none"
                    stroke="#f91ff2"
                    strokeWidth="2"
                    opacity="0.5">
                    <animate
                      attributeName="r"
                      values="24;28;24"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <text
                    x="200"
                    y="67"
                    textAnchor="middle"
                    fill="white"
                    fontSize="14"
                    fontWeight="bold">
                    Root
                  </text>

                  {/* Child nodes */}
                  <circle
                    cx="140"
                    cy="120"
                    r="24"
                    fill="#3a2739"
                    stroke="#ffffff40"
                    strokeWidth="1"
                  />
                  <text
                    x="140"
                    y="127"
                    textAnchor="middle"
                    fill="#bb9bba"
                    fontSize="14">
                    A
                  </text>

                  <circle
                    cx="260"
                    cy="120"
                    r="24"
                    fill="#3a2739"
                    stroke="#ffffff40"
                    strokeWidth="1"
                  />
                  <text
                    x="260"
                    y="127"
                    textAnchor="middle"
                    fill="#bb9bba"
                    fontSize="14">
                    B
                  </text>
                </svg>
              </div>

              <div className="px-4 py-3 flex justify-between items-center bg-[#2a1629] rounded-b-lg border-t border-[#3a2739]">
                <span className="text-xs font-mono text-[#bb9bba] uppercase tracking-wider">
                  Fig 1.2: Fiber Traversal Path
                </span>
                <button className="text-xs text-[#f91ff2] hover:text-white flex items-center gap-1 transition-colors">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                  Expand
                </button>
              </div>
            </div>

            <p className="mb-6 text-[#bb9bba] leading-relaxed">
              When React processes a Fiber, it either completes the work
              immediately or schedules it for later. Once the entire tree has
              been traversed and the "work in progress" tree is complete, React
              switches pointers, making the WIP tree the current tree. This swap
              happens in the Commit Phase.
            </p>
          </article>

          {/* Bottom Navigation */}
          <div className="mt-16 pt-8 border-t border-[#3a2739] flex flex-col md:flex-row justify-between gap-4">
            <a
              href={navigation[0].href}
              className="group flex flex-col gap-1 p-4 rounded-xl border border-[#3a2739] hover:border-[#f91ff2]/50 hover:bg-[#2a1629] transition-all w-full md:w-1/2">
              <span className="text-xs text-[#bb9bba] font-medium uppercase tracking-wide">
                Previous
              </span>
              <div className="flex items-center gap-2 text-white font-bold group-hover:text-[#f91ff2] transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                {navigation[0].label}
              </div>
            </a>

            <a
              href={navigation[1].href}
              className="group flex flex-col gap-1 items-end p-4 rounded-xl border border-[#3a2739] hover:border-[#f91ff2]/50 hover:bg-[#2a1629] transition-all w-full md:w-1/2 text-right">
              <span className="text-xs text-[#bb9bba] font-medium uppercase tracking-wide">
                Next
              </span>
              <div className="flex items-center gap-2 text-white font-bold group-hover:text-[#f91ff2] transition-colors">
                {navigation[1].label}
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="hidden xl:flex w-72 flex-col gap-6 sticky top-[65px] h-[calc(100vh-65px)] overflow-y-auto p-6 border-l border-[#3a2739] bg-[#230f22]/50">
          {/* Metadata Card */}
          <div className="rounded-xl bg-[#2a1629] border border-[#3a2739] p-4 shadow-sm">
            <h6 className="text-white text-sm font-bold mb-3">
              Article Details
            </h6>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#230f22] flex items-center justify-center text-[#bb9bba]">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#bb9bba]">Read time</p>
                  <p className="text-sm font-medium text-white">
                    {metadata.readTime}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#230f22] flex items-center justify-center text-[#bb9bba]">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[#bb9bba]">Difficulty</p>
                  <p className="text-sm font-medium text-[#f91ff2]">
                    {metadata.difficulty}
                  </p>
                </div>
              </div>

              <div className="h-px bg-[#3a2739] my-1"></div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#230f22] flex items-center justify-center text-[#bb9bba]">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-[#bb9bba]">Source</p>
                  <a
                    href={metadata.sourceUrl}
                    className="text-sm font-mono text-[#f91ff2] hover:underline truncate block">
                    {metadata.source}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* On This Page */}
          <div>
            <h6 className="text-white text-xs font-bold uppercase tracking-wider mb-3">
              On this page
            </h6>
            <ul className="flex flex-col gap-0 border-l border-[#3a2739]">
              {onThisPage.map((item, index) => (
                <li key={index} className="relative">
                  <a
                    href={item.href}
                    className={`block pl-4 py-1.5 text-sm transition-colors ${
                      item.active
                        ? "text-[#f91ff2] font-medium border-l-2 border-[#f91ff2] -ml-[1px]"
                        : "text-[#bb9bba] hover:text-white"
                    }`}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contributors */}
          <div>
            <h6 className="text-white text-xs font-bold uppercase tracking-wider mb-3">
              Contributors
            </h6>
            <div className="flex items-center -space-x-2 overflow-hidden">
              {contributors.map((contributor, index) => (
                <img
                  key={index}
                  src={contributor.avatar}
                  alt={contributor.name}
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-[#230f22]"
                />
              ))}
              <div className="flex w-8 h-8 items-center justify-center rounded-full ring-2 ring-[#230f22] bg-[#3a2739] text-xs font-medium text-white hover:bg-[#f91ff2] transition-colors cursor-pointer">
                +5
              </div>
            </div>
            <button className="mt-4 w-full py-2 rounded-lg border border-[#3a2739] text-xs font-bold text-[#bb9bba] hover:text-white hover:bg-[#2a1629] transition-colors">
              Edit on GitHub
            </button>
          </div>

          {/* Newsletter */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-[#f91ff2]/20 to-[#2a1629] border border-[#3a2739] mt-auto">
            <p className="text-white text-sm font-bold mb-1">
              Deep Dives Weekly
            </p>
            <p className="text-xs text-[#bb9bba] mb-3">
              Get advanced React patterns delivered to your inbox.
            </p>
            <input
              className="w-full bg-[#230f22] border border-[#3a2739] rounded text-xs text-white placeholder-[#bb9bba] px-3 py-2 mb-2 focus:outline-none focus:ring-1 focus:ring-[#f91ff2]"
              placeholder="Email address"
              type="email"
            />
            <button className="w-full bg-[#f91ff2] text-white text-xs font-bold py-2 rounded hover:bg-[#f91ff2]/90 transition-colors">
              Subscribe
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default FiberArchitecturePage;
