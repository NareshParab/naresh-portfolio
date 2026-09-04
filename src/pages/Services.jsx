import { services } from '../data/services';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FinalCTA from '../sections/home/FinalCTA';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

const Services = () => {
  return (
    <>
      <div className="pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[var(--bg-color)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="max-w-3xl mb-20">
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-5">
              <span className="w-6 h-[2px] bg-[#0070F3] rounded-full" />
              <span className="text-[11px] font-mono font-semibold tracking-[0.18em] text-[#0070F3] uppercase">
                Services
              </span>
            </motion.div>
            <motion.h1
              {...fadeUp(0.06)}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.08]"
            >
              Services & Capabilities
            </motion.h1>
            <motion.p {...fadeUp(0.12)} className="text-xl text-[var(--text-secondary)] leading-relaxed">
              I provide end-to-end technical solutions, from simple marketing sites to complex custom software and business automation.
            </motion.p>
          </div>

          <div className="space-y-24 lg:space-y-28">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
                >

                  <div className="lg:col-span-4 lg:sticky lg:top-32">
                    <div className="flex items-center gap-3.5 mb-5">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-[var(--border-color)] flex items-center justify-center text-[#0070F3] flex-shrink-0">
                        <Icon className="w-5.5 h-5.5" />
                      </div>
                      <span className="font-mono text-[13px] font-semibold text-gray-300 tracking-tight">
                        0{index + 1}
                      </span>
                      <span className="flex-1 h-px bg-[var(--border-color)]" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-3.5 tracking-tight leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-[15.5px] text-[var(--text-secondary)] leading-relaxed mb-6">
                      {service.fullDescription}
                    </p>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#111111] hover:text-[#0070F3] transition-colors duration-200"
                    >
                      Inquire about this service
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>

                  <div
                    className="lg:col-span-8 bg-white p-7 lg:p-10 rounded-[26px] border border-[var(--border-color)]
                               shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-shadow duration-300
                               hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)]"
                  >
                    <div className="mb-9">
                      <h3 className="text-[15px] font-bold mb-5 flex items-center gap-2 tracking-tight uppercase text-[#374151]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
                        Typical Deliverables
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-[14.5px] text-[var(--text-secondary)] leading-snug">
                            <CheckCircle2 className="w-4 h-4 text-[#0070F3] shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-[15px] font-bold mb-5 flex items-center gap-2 tracking-tight uppercase text-[#374151]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0070F3]" />
                        Technology Focus
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3.5 py-1.5 bg-gray-50 border border-[var(--border-color)] rounded-lg
                                       text-[13px] font-medium text-[var(--text-primary)] tracking-tight
                                       transition-colors duration-200 hover:border-[#0070F3]/40 hover:bg-[#0070F3]/[0.04]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
      <FinalCTA />
    </>
  );
};

export default Services;
