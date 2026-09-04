import { motion, useReducedMotion } from 'framer-motion';
import { Lightbulb, Search, PenTool, Code2, Plug, Rocket, LifeBuoy } from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────── */

const CARD_DOTS = [
  { cx: 24,  cy: 24  }, { cx: 80,  cy: 24  }, { cx: 136, cy: 24  }, { cx: 192, cy: 24  }, { cx: 248, cy: 24  },
  { cx: 24,  cy: 80  }, { cx: 80,  cy: 80  }, { cx: 136, cy: 80  }, { cx: 192, cy: 80  }, { cx: 248, cy: 80  },
  { cx: 24,  cy: 136 }, { cx: 80,  cy: 136 }, { cx: 136, cy: 136 }, { cx: 192, cy: 136 }, { cx: 248, cy: 136 },
  { cx: 24,  cy: 192 }, { cx: 80,  cy: 192 }, { cx: 136, cy: 192 }, { cx: 192, cy: 192 }, { cx: 248, cy: 192 },
  { cx: 24,  cy: 248 }, { cx: 80,  cy: 248 }, { cx: 136, cy: 248 }, { cx: 192, cy: 248 }, { cx: 248, cy: 248 },
];

const CARD_LINES = [
  { x1: 80,  y1: 24,  x2: 136, y2: 80  },
  { x1: 136, y1: 80,  x2: 192, y2: 80  },
  { x1: 192, y1: 80,  x2: 248, y2: 136 },
  { x1: 24,  y1: 136, x2: 80,  y2: 136 },
  { x1: 80,  y1: 136, x2: 136, y2: 192 },
  { x1: 136, y1: 192, x2: 192, y2: 248 },
  { x1: 248, y1: 192, x2: 248, y2: 248 },
];

const CARD_ACCENTS = [
  { cx: 136, cy: 80  },
  { cx: 192, cy: 80  },
  { cx: 136, cy: 192 },
];

const SECTION_NODES = [
  { cx: 60,   cy: 80  }, { cx: 200,  cy: 40  }, { cx: 380,  cy: 120 },
  { cx: 520,  cy: 60  }, { cx: 700,  cy: 150 }, { cx: 860,  cy: 80  },
  { cx: 100,  cy: 280 }, { cx: 300,  cy: 320 }, { cx: 480,  cy: 260 },
  { cx: 640,  cy: 340 }, { cx: 820,  cy: 290 }, { cx: 960,  cy: 200 },
  { cx: 160,  cy: 440 }, { cx: 400,  cy: 480 }, { cx: 600,  cy: 420 },
  { cx: 780,  cy: 460 }, { cx: 900,  cy: 380 },
];

const SECTION_LINES = [
  { x1: 60,  y1: 80,  x2: 200,  y2: 40  },
  { x1: 200, y1: 40,  x2: 380,  y2: 120 },
  { x1: 380, y1: 120, x2: 520,  y2: 60  },
  { x1: 520, y1: 60,  x2: 700,  y2: 150 },
  { x1: 700, y1: 150, x2: 860,  y2: 80  },
  { x1: 100, y1: 280, x2: 300,  y2: 320 },
  { x1: 300, y1: 320, x2: 480,  y2: 260 },
  { x1: 480, y1: 260, x2: 640,  y2: 340 },
  { x1: 640, y1: 340, x2: 820,  y2: 290 },
  { x1: 820, y1: 290, x2: 960,  y2: 200 },
  { x1: 160, y1: 440, x2: 400,  y2: 480 },
  { x1: 400, y1: 480, x2: 600,  y2: 420 },
  { x1: 600, y1: 420, x2: 780,  y2: 460 },
  { x1: 200,  y1: 40,  x2: 100,  y2: 280 },
  { x1: 520,  y1: 60,  x2: 480,  y2: 260 },
  { x1: 860,  y1: 80,  x2: 820,  y2: 290 },
  { x1: 300,  y1: 320, x2: 160,  y2: 440 },
  { x1: 640,  y1: 340, x2: 600,  y2: 420 },
];

const SectionNetwork = () => {
  const reduced = useReducedMotion();
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 1024 540"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        style={{ transform: 'translate3d(0,0,0)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
      >
        {SECTION_LINES.map((l, i) => (
          <line
            key={i}
            x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke="#94A3B8"
            strokeWidth="0.6"
            strokeDasharray="5 6"
            opacity="0.22"
          />
        ))}

        {SECTION_NODES.map((n, i) => (
          <circle
            key={i}
            cx={n.cx} cy={n.cy}
            r="2.5"
            fill="#94A3B8"
            opacity="0.22"
          />
        ))}

        {[SECTION_NODES[2], SECTION_NODES[8], SECTION_NODES[13]].map((n, i) => (
          <motion.circle
            key={`sec-accent-${i}`}
            cx={n.cx} cy={n.cy}
            r="3.5"
            fill="#0070F3"
            opacity="0.18"
            animate={reduced ? {} : { opacity: [0.10, 0.28, 0.10] }}
            transition={{ duration: 5 + i * 1.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </motion.svg>

      {!reduced && (
        <motion.div
          className="absolute inset-0"
          animate={{ x: [0, 6, 0, -6, 0], y: [0, -4, 0, 4, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transform: 'translate3d(0,0,0)' }}
        />
      )}

      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, #F3F6FA 0%, transparent 18%, transparent 82%, #F3F6FA 100%)',
        }}
      />
    </div>
  );
};

const CardGrid = () => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
      aria-hidden="true"
    >
      <motion.svg
        width="100%" height="100%"
        viewBox="0 0 272 272"
        preserveAspectRatio="xMaxYMid slice"
        className="absolute inset-0 w-full h-full"
        style={{ transform: 'translate3d(0,0,0)' }}
        animate={reduced ? {} : { x: [0, 3, 0, -3, 0], y: [0, -2, 0, 2, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      >
        {CARD_LINES.map((l, i) => (
          <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke="#9CA3AF" strokeWidth="0.7" strokeDasharray="4 4" opacity="0.30" />
        ))}
        {CARD_DOTS.map((d, i) => (
          <circle key={i} cx={d.cx} cy={d.cy} r="2" fill="#9CA3AF" opacity="0.22" />
        ))}
        {CARD_ACCENTS.map((d, i) => (
          <motion.circle
            key={`ca-${i}`}
            cx={d.cx} cy={d.cy} r="2.5"
            fill="#0070F3" opacity="0.40"
            animate={reduced ? {} : { opacity: [0.22, 0.55, 0.22] }}
            transition={{ duration: 4 + i * 0.9, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </motion.svg>

      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: 'radial-gradient(ellipse at 60% 50%, transparent 25%, rgba(255,255,255,0.90) 100%)',
        }}
      />
    </motion.div>
  );
};

const Positioning = () => {
  const steps = [
    { label: 'IDEA',        icon: Lightbulb, note: 'Understanding the problem' },
    { label: 'DISCOVERY',   icon: Search,    note: 'Mapping the real requirements' },
    { label: 'DESIGN',      icon: PenTool,   note: 'Structuring the solution' },
    { label: 'DEVELOPMENT', icon: Code2,     note: 'Building it end-to-end', active: true },
    { label: 'INTEGRATION', icon: Plug,      note: 'Connecting systems & data', active: true },
    { label: 'DEPLOYMENT',  icon: Rocket,    note: 'Shipping to production' },
    { label: 'SUPPORT',     icon: LifeBuoy,  note: 'Ongoing care & fixes' },
  ];

  return (
    <section
      className="relative pt-10 pb-16 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-32 overflow-hidden"
      style={{ background: '#F3F6FA' }}
    >
      <SectionNetwork />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="w-6 h-[2px] bg-[#0070F3] rounded-full" />
              <span className="text-[11px] font-mono font-semibold tracking-[0.18em] text-[#0070F3] uppercase">
                How I work
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Not just a website.<br />A complete digital solution.
            </h2>

            <div className="space-y-5 text-lg">
              <p className="text-[#9CA3AF]">Some businesses need a website.</p>
              <p className="text-[#9CA3AF]">Some need a dashboard, SaaS product or internal tool.</p>
              <p className="text-[#6B7280]">Others need to automate the work their team is doing manually every day.</p>
              <p className="text-[var(--text-primary)] font-semibold text-xl leading-snug pt-1">
                I work across web development, software, APIs and automation to build practical digital systems around those problems.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-white p-8 lg:p-12 rounded-3xl border border-[#E2E8F0] shadow-[0_8px_32px_rgba(0,0,0,0.07)] overflow-hidden"
          >
            <CardGrid />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-7">
                <span className="text-[10px] font-mono font-semibold tracking-[0.2em] text-[#94A3B8] uppercase">
                  01 / Positioning
                </span>
                <span className="flex-1 h-px bg-[#E2E8F0]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070F3] opacity-60" />
              </div>

              <div className="flex flex-col">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.label} className="flex flex-col">
                      <div
                        className={`group relative flex items-center gap-3.5 px-4 py-3.5 rounded-xl border transition-all duration-200
                          ${step.active
                            ? 'bg-[#0070F3]/[0.06] border-[#0070F3]/25'
                            : 'bg-gray-50 border-gray-100 hover:border-gray-200 hover:bg-gray-100/60'
                          }`}
                      >
                        <div
                          className={`w-8 h-8 rounded-[9px] flex items-center justify-center flex-shrink-0 transition-colors duration-200
                            ${step.active ? 'bg-[#0070F3]' : 'bg-white border border-gray-200'}`}
                        >
                          <Icon className={`w-3.5 h-3.5 ${step.active ? 'text-white' : 'text-gray-400'}`} />
                        </div>

                        <div className="flex flex-col min-w-0">
                          <span
                            className={`text-sm font-mono font-semibold tracking-wide
                              ${step.active ? 'text-[#0070F3]' : 'text-gray-600'}`}
                          >
                            {step.label}
                          </span>
                          <span className="text-[11.5px] text-gray-400 leading-tight truncate">
                            {step.note}
                          </span>
                        </div>

                        {step.active && (
                          <span className="ml-auto flex-shrink-0 relative flex h-2 w-2">
                            <motion.span
                              className="absolute inline-flex h-full w-full rounded-full bg-[#0070F3]"
                              animate={{ opacity: [0.6, 0, 0.6], scale: [1, 1.9, 1] }}
                              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0070F3]" />
                          </span>
                        )}
                      </div>

                      {index < steps.length - 1 && (
                        <div className="w-px h-4 bg-gray-200 ml-[34px] my-1" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Positioning;
