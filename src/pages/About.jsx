import { User, ArrowRight, Globe, Workflow, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FinalCTA from '../sections/home/FinalCTA';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const principles = [
  'Business-first thinking',
  'Full-system thinking',
  'Quality & Polish',
];

const whatIDo = [
  {
    title: 'Web & SaaS',
    icon: Globe,
    desc: 'Building responsive, high-performance web applications and complete SaaS products that scale.',
  },
  {
    title: 'Automation',
    icon: Workflow,
    desc: 'Connecting systems and APIs to eliminate manual work and streamline business operations.',
  },
  {
    title: 'Custom Software',
    icon: Code2,
    desc: 'Developing tailored internal tools and software solutions designed exactly for your workflows.',
  },
];

const About = () => {
  return (
    <>
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div
            className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full opacity-60"
            style={{ background: 'radial-gradient(circle, rgba(0,112,243,0.08) 0%, transparent 70%)', filter: 'blur(20px)' }}
          />
          <div
            className="absolute top-[30%] -right-40 w-[480px] h-[480px] rounded-full opacity-50"
            style={{ background: 'radial-gradient(circle, rgba(0,112,243,0.06) 0%, transparent 70%)', filter: 'blur(20px)' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-6">
                <span className="w-6 h-[2px] bg-[#0070F3] rounded-full" />
                <span className="text-[11px] font-mono font-semibold tracking-[0.18em] text-[#0070F3] uppercase">
                  About
                </span>
              </motion.div>

              <motion.h1
                {...fadeUp(0.08)}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8"
              >
                I'm Naresh.<br />
                <span className="text-[var(--text-secondary)]">I build digital systems that work.</span>
              </motion.h1>

              <motion.div {...fadeUp(0.16)} className="space-y-6 text-lg">
                <p className="text-[#6B7280] leading-relaxed">
                  I'm a software developer focusing on practical, business-driven digital solutions. I bridge the gap between business requirements and technical implementation.
                </p>
                <p className="text-[var(--text-primary)] font-medium leading-relaxed">
                  My approach is simple: understand the core problem first, then build a robust, scalable solution around it. I work across the full stack — from intuitive frontend interfaces to reliable backend systems and automated workflows.
                </p>
              </motion.div>

              <motion.div {...fadeUp(0.24)} className="flex flex-wrap gap-2.5 mt-9">
                {principles.map((p) => (
                  <span
                    key={p}
                    className="text-[12.5px] font-semibold text-[#374151] bg-[#F3F6FA] border border-[#E5E7EB]
                               px-4 py-2 rounded-full tracking-tight"
                  >
                    {p}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center lg:justify-end w-full"
            >
              <div
                className="relative w-full max-w-md aspect-square rounded-[32px] border border-[var(--border-color)]
                           overflow-hidden flex items-center justify-center"
                style={{
                  background: 'linear-gradient(160deg, #F3F6FA 0%, #FFFFFF 55%, #EEF4FF 100%)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.06)',
                }}
              >
                <div
                  className="absolute w-[70%] aspect-square rounded-full"
                  style={{ background: 'radial-gradient(circle, rgba(0,112,243,0.12) 0%, transparent 70%)' }}
                />
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white border border-[var(--border-color)] shadow-sm flex items-center justify-center">
                    <User className="w-10 h-10 text-gray-300" />
                  </div>
                  <span className="text-gray-400 font-mono text-[13px] tracking-tight">Professional Photo Placeholder</span>
                </div>

                <div className="absolute bottom-5 left-5 z-10 inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-[var(--border-color)] px-3.5 py-2 rounded-full shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse flex-shrink-0" />
                  <span className="text-[11.5px] font-semibold text-[#374151]">Available for freelance work</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-32">
            <motion.h2 {...fadeUp(0)} className="text-3xl font-bold mb-12 tracking-tight">
              What I Do
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {whatIDo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative bg-white p-8 rounded-[26px] border border-[var(--border-color)]
                               transition-all duration-300 ease-out
                               hover:border-[#0070F3]/30 hover:-translate-y-1
                               hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-12 h-12 rounded-xl shadow-sm border border-[var(--border-color)]
                                   flex items-center justify-center bg-white
                                   transition-all duration-300
                                   group-hover:bg-[#0070F3] group-hover:border-[#0070F3]
                                   group-hover:shadow-[0_6px_18px_rgba(0,112,243,0.30)]"
                      >
                        <Icon className="w-5.5 h-5.5 text-[#111111] transition-colors duration-300 group-hover:text-white" />
                      </div>
                      <span className="font-mono text-[13px] text-gray-300 font-medium transition-colors duration-300 group-hover:text-[#0070F3]">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
      <FinalCTA />
    </>
  );
};

export default About;
