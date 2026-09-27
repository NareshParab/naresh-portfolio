import { ArrowRight, Globe, Workflow, Code2, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FinalCTA from '../sections/home/FinalCTA';
import nareshPhoto from '../assets/naresh-photo.jpeg';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const pills = [
  'Web Development',
  'SaaS',
  'Automation',
  'AI / Data',
  'Digital Products',
  'Problem Solver'
];

const technologies = [
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'PostgreSQL',
  'SQL',
  'Git'
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
      <div className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
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
          {/* Main Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="order-2 lg:order-1">
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
                {pills.map((p) => (
                  <span
                    key={p}
                    className="text-[13px] font-medium text-[#374151] bg-[#F3F6FA] border border-[#E5E7EB]
                               px-4 py-1.5 rounded-full tracking-tight transition-colors hover:bg-gray-100"
                  >
                    {p}
                  </span>
                ))}
              </motion.div>

              <motion.div {...fadeUp(0.32)} className="mt-12">
                <Link to="/contact" className="inline-flex items-center text-[#0070F3] font-semibold text-lg hover:text-[#005bb5] transition-colors group">
                  Let's build something great together
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Right Content - Portrait & Cards */}
            <div className="order-1 lg:order-2">
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex justify-center lg:justify-end"
              >
                <div className="flex flex-col gap-6 w-full max-w-[400px] lg:max-w-[460px] relative">
                  
                  {/* Portrait Container */}
                  <div className="relative w-full aspect-[4/5] rounded-[24px] lg:rounded-[32px] mx-auto z-10">
                    {/* Soft Pale Blue Abstract Background Shape */}
                    <div 
                      className="absolute top-4 -right-3 bottom-6 -left-3 sm:-right-4 sm:-left-4 bg-[#E2F0FF] rounded-[24px] lg:rounded-[40px] -rotate-3 z-0" 
                    />
                    
                    {/* The Image */}
                    <div className="absolute inset-0 z-10 rounded-[24px] lg:rounded-[32px] overflow-hidden border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] bg-white">
                      <img 
                        src={nareshPhoto} 
                        alt="Naresh" 
                        className="w-full h-full object-cover object-[center_20%]"
                      />
                    </div>

                    {/* Floating Label (Desktop/Tablet) */}
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="absolute top-8 -right-4 lg:-right-8 z-20 bg-white px-5 py-2.5 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-gray-100 hidden sm:block"
                    >
                      <span className="text-sm font-semibold text-gray-800 tracking-tight">Software Developer</span>
                    </motion.div>

                    {/* Info Card (Desktop/Tablet) */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="absolute bottom-28 -left-4 lg:-left-12 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-gray-100 hidden sm:flex flex-col gap-3 min-w-[210px]"
                    >
                      <div className="flex items-center gap-2.5">
                        <MapPin className="w-4.5 h-4.5 text-[#0070F3]" />
                        <span className="text-[13px] font-medium text-gray-700">Based in Pune, India</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#16a34a] animate-pulse ml-1" />
                        <span className="text-[13px] font-medium text-gray-700 ml-0.5">Available for freelance</span>
                      </div>
                    </motion.div>

                    {/* Technology Card (Desktop/Tablet) */}
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                      className="absolute -bottom-6 -right-2 lg:-right-8 z-20 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.08)] border border-gray-100 hidden sm:block max-w-[210px]"
                    >
                      <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2.5">Technologies I work with</div>
                      <div className="flex flex-wrap gap-1.5">
                        {technologies.map(tech => (
                          <span key={tech} className="text-[11px] font-semibold bg-[#F8FAFC] text-gray-600 px-2.5 py-1 rounded-md border border-gray-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Mobile Stacked Cards (Hidden on sm+) */}
                  <div className="flex flex-col gap-4 sm:hidden relative z-10 w-full mt-4">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-white p-4 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col gap-3"
                    >
                      <div className="flex items-center gap-2.5">
                        <MapPin className="w-4.5 h-4.5 text-[#0070F3]" />
                        <span className="text-[13px] font-medium text-gray-700">Based in Pune, India</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#16a34a] animate-pulse ml-1" />
                        <span className="text-[13px] font-medium text-gray-700 ml-0.5">Available for freelance</span>
                      </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="bg-white p-4 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-gray-100"
                    >
                      <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2.5">Technologies I work with</div>
                      <div className="flex flex-wrap gap-1.5">
                        {technologies.map(tech => (
                          <span key={tech} className="text-[11px] font-semibold bg-[#F8FAFC] text-gray-600 px-2.5 py-1 rounded-md border border-gray-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                </div>
              </motion.div>
            </div>
          </div>

          {/* Lower Section (What I Do) - Preserved */}
          <div className="mt-20 lg:mt-32">
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
