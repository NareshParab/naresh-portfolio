import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, ArrowUpRight, Pause, Play, 
  Lightbulb, PenTool, Code, Zap, Rocket,
  Monitor, Terminal, Cloud, Settings, Cpu, Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import avatarImg from '../../assets/avatar.png';

/* ---------- Animation helpers ---------- */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ---------- Dashboard Visual ---------- */
const DashboardVisual = () => {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setStep((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, [paused]);

  const processSteps = [
    { id: 'IDEA', desc: 'Understand business goals', icon: Lightbulb },
    { id: 'DESIGN', desc: 'Plan, wireframe & design', icon: PenTool },
    { id: 'BUILD', desc: 'Develop clean, scalable solutions', icon: Code },
    { id: 'AUTOMATE', desc: 'Streamline & automate flows', icon: Zap },
    { id: 'RESULT', desc: 'Deliver impact & growth', icon: Rocket, active: true },
  ];

  const capabilities = [
    { id: 'WEB DEVELOPMENT', icon: Monitor },
    { id: 'SOFTWARE', icon: Terminal },
    { id: 'SAAS', icon: Cloud },
    { id: 'AUTOMATION', icon: Settings },
    { id: 'AI / DATA', icon: Cpu },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className="relative lg:ml-auto w-full max-w-[720px]"
    >
      {/* Subtle glow behind the card */}
      <div
        className="absolute inset-0 translate-y-4 scale-[0.92] rounded-[24px]"
        style={{ background: 'rgba(0,112,243,0.06)', filter: 'blur(32px)' }}
      />

      {/* Floating browser card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative bg-white rounded-[24px] border border-[#E5E7EB] shadow-[0_16px_48px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col"
      >
        {/* Window chrome */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#F0F0F0] bg-white relative z-20">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57] border border-[#E0443E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E] border border-[#D89F24]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840] border border-[#23AB36]" />
          </div>
          
          <div 
            className="flex items-center justify-center flex-shrink-0 w-[72px] h-[26px] bg-[#F5F5F5] rounded-full text-[10px] font-mono font-bold"
            style={{ transform: 'translate3d(0,0,0)', WebkitFontSmoothing: 'antialiased' }}
          >
            <span className={`block w-[18px] text-center leading-none transition-colors duration-200 ${step === 0 ? 'text-[#111]' : 'text-[#CCC]'}`}>01</span>
            <span className="block leading-none text-[#DDD] mx-[1px]">/</span>
            <span className={`block w-[18px] text-center leading-none transition-colors duration-200 ${step === 1 ? 'text-[#111]' : 'text-[#CCC]'}`}>02</span>
          </div>

          <button 
            onClick={() => setPaused(!paused)} 
            className="text-[#999] hover:text-[#111] transition-colors"
            aria-label={paused ? "Play animation" : "Pause animation"}
          >
            {paused ? <Play className="w-3.5 h-3.5 fill-current" /> : <Pause className="w-3.5 h-3.5 fill-current" />}
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-1 relative z-10">
          {/* Left avatar panel */}
          <div 
            className="w-[38%] border-r border-[#F0F0F0] relative flex items-center justify-center overflow-hidden flex-shrink-0"
            style={{
              background: 'radial-gradient(circle, rgba(0,112,243,0.10) 0%, rgba(0,112,243,0) 70%)'
            }}
          >
            <img src={avatarImg} alt="Naresh" className="w-full h-full object-cover" />
          </div>

          {/* Right content panel */}
          <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center relative overflow-hidden bg-white">
            <AnimatePresence mode="wait">
              {step === 0 ? (
                <motion.div 
                  key="step1" 
                  initial={{ opacity: 0, x: 15 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: -15 }} 
                  transition={{ duration: 0.35, ease: 'easeOut' }} 
                  className="flex flex-col w-full h-full justify-center items-center"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-[20px] sm:text-[22px] font-black text-[#111]">My Work Process</h3>
                    <p className="text-[12px] text-[#666] font-medium mt-1">A clear, simple workflow from idea to impact.</p>
                  </div>
                  
                  <div className="flex items-start justify-between relative w-full px-2 overflow-x-auto">
                    <div className="absolute left-8 right-8 top-[22px] border-t-2 border-dotted border-[#E5E7EB] -z-10" />
                    {processSteps.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.id} className="flex flex-col items-center gap-3 w-1/5 relative group">
                          <div className={`w-[44px] h-[44px] rounded-full flex items-center justify-center transition-colors ${item.active ? 'bg-[#0070F3] shadow-[0_0_15px_rgba(0,112,243,0.3)]' : 'bg-[#111] group-hover:bg-[#333]'}`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex flex-col items-center text-center">
                            <div className="text-[10px] font-bold text-[#111] uppercase">{item.id}</div>
                            <div className="text-[9.5px] text-[#666] leading-tight mt-1 px-1">{item.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-10 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#F5F9FF] border border-[#E5EEFB]">
                    <Sparkles className="w-3.5 h-3.5 text-[#0070F3]" />
                    <span className="text-[11px] text-[#0070F3] font-medium">Focused on clarity, performance and real business outcomes.</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="step2" 
                  initial={{ opacity: 0, x: 15 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  exit={{ opacity: 0, x: -15 }} 
                  transition={{ duration: 0.35, ease: 'easeOut' }} 
                  className="flex flex-col w-full h-full justify-center"
                >
                  <div className="text-[10px] font-bold tracking-widest text-[#888] mb-5">CORE CAPABILITIES</div>
                  <div className="flex flex-col gap-3">
                    {capabilities.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.id} className="flex items-center gap-3.5 p-3 rounded-xl border border-[#F0F0F0] bg-gradient-to-r from-[#FAFAFA] to-white hover:border-[#E5E7EB] hover:shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all group cursor-default">
                          <div className="w-8 h-8 rounded-lg bg-[#F5F5F5] group-hover:bg-[#F0F4F8] flex items-center justify-center flex-shrink-0 transition-colors">
                            <Icon className="w-4 h-4 text-[#666] group-hover:text-[#0070F3] transition-colors" />
                          </div>
                          <div className="text-[12px] font-bold text-[#111] tracking-tight">{item.id}</div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ---------- Hero ---------- */
const Hero = () => {
  return (
    <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* ── Left: Copy ── */}
          <div className="max-w-xl">

            {/* Availability pill */}
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E5E7EB] text-[12px] font-medium mb-8 text-[#374151]">
                <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse" />
                Available for freelance projects
                <span className="text-[#9CA3AF] hidden sm:inline"> | Pune, India · Working remotely</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.08)}
              className="text-[42px] md:text-[52px] lg:text-[58px] font-black tracking-[-0.03em] leading-[1.04] text-[#111111] mb-6"
            >
              I build digital products that help businesses work better.
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              {...fadeUp(0.16)}
              className="text-[17px] leading-[1.7] text-[#555555] mb-10 max-w-[440px]"
            >
              From custom software to client dashboards and automation — I turn complex business problems into clean, scalable digital solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.24)} className="flex flex-wrap items-center gap-3 mb-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 bg-[#111111] text-white text-[14px] font-semibold tracking-tight px-6 py-3.5 rounded-full hover:bg-[#1a1a1a] active:scale-[0.97] transition-all duration-150"
              >
                Start a Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#111111] border border-[#D1D5DB] bg-white px-6 py-3.5 rounded-full hover:border-[#111111] hover:bg-[#F9F9F9] active:scale-[0.97] transition-all duration-150"
              >
                View Projects <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Credibility line */}
            <motion.div
              {...fadeUp(0.32)}
              className="flex items-center gap-3 text-[13px] text-[#9CA3AF]"
            >
              <span>Building practical digital solutions for businesses and teams.</span>
            </motion.div>
          </div>

          {/* ── Right: Visual ── */}
          <DashboardVisual />

        </div>
      </div>
    </section>
  );
};

export default Hero;
