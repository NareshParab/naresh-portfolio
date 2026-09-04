import { motion } from 'framer-motion';
import {
  Code2,
  Terminal,
  Cloud,
  Zap,
  Layers,
  Database,
  Wrench,
  ArrowUpRight
} from 'lucide-react';

const capabilities = [
  { label: 'Web Development', id: '01', icon: Code2 },
  { label: 'Software', id: '02', icon: Terminal },
  { label: 'SaaS', id: '03', icon: Cloud },
  { label: 'Automation', id: '04', icon: Zap },
  { label: 'Digital Products', id: '05', icon: Layers },
  { label: 'AI / Data', id: '06', icon: Database },
  { label: 'Maintenance', id: '07', icon: Wrench },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
};

const CapabilityStrip = () => {
  return (
    <div className="w-full px-6 lg:px-12 pb-4 lg:pb-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="relative bg-[#161618] rounded-[24px] border border-white/[0.08] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 md:px-7 py-3 border-b border-white/[0.08] bg-white/[0.02]">
            <h3 className="text-[11px] font-mono font-semibold tracking-[0.2em] text-white/50 uppercase">
              Capabilities
            </h3>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0070F3] animate-pulse"></span>
              <span className="text-[11px] font-mono font-medium tracking-widest text-[#0070F3]">
                07 SERVICES
              </span>
            </div>
          </div>

          {/* Capabilities Row */}
          <div className="flex overflow-x-auto scrollbar-none" style={{ WebkitOverflowScrolling: 'touch' }}>
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.id}
                  variants={itemVariants}
                  className="group relative flex-shrink-0 w-[140px] md:w-auto md:flex-1 p-4 lg:p-5
                             border-r border-white/[0.08] last:border-r-0 cursor-pointer
                             bg-transparent hover:bg-white/[0.02] transition-colors duration-300 overflow-hidden"
                >
                  <div className="flex flex-col h-full transform transition-transform duration-300 group-hover:-translate-y-1">
                    {/* Top section: Icon & Number */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-white/40 group-hover:text-[#0070F3] transition-colors duration-300">
                        <Icon strokeWidth={1.5} size={19} />
                      </div>
                      <span className="text-[10px] font-mono text-white/30 group-hover:text-[#0070F3]/80 transition-colors duration-300">
                        {cap.id}
                      </span>
                    </div>

                    {/* Bottom section: Label & Arrow */}
                    <div className="flex items-end justify-between mt-auto">
                      <span className="text-[13px] md:text-[14px] font-semibold tracking-tight leading-tight 
                                       text-white/70 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                        {cap.label}
                      </span>
                      <ArrowUpRight 
                        size={15} 
                        strokeWidth={2}
                        className="text-white/20 group-hover:text-[#0070F3] transform -translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 opacity-0 group-hover:opacity-100" 
                      />
                    </div>
                  </div>

                  {/* Thin blue bottom indicator */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0070F3] scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 ease-out" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CapabilityStrip;
