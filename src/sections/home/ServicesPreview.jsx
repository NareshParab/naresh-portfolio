import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { services } from '../../data/services';

const ServicesPreview = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white border-y border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="w-6 h-[2px] bg-[#0070F3] rounded-full" />
            <span className="text-[11px] font-mono font-semibold tracking-[0.18em] text-[#0070F3] uppercase">
              Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            What I can build for you.
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            From a focused business website to a complete software platform, I build practical digital solutions around real business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {services.slice(0, 6).map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: 0.06 * index, ease: [0.22, 1, 0.36, 1] }}
                className="group relative p-8 rounded-[26px] border border-[var(--border-color)]
                           bg-gray-50/50 flex flex-col h-full overflow-hidden
                           transition-all duration-300 ease-out
                           hover:border-[#0070F3]/30 hover:bg-white hover:-translate-y-1
                           hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
              >
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0
                             group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(0,112,243,0.10) 0%, transparent 70%)' }}
                />

                <div className="relative flex justify-between items-start mb-7">
                  <div
                    className="w-12 h-12 rounded-xl shadow-sm border border-[var(--border-color)]
                               flex items-center justify-center flex-shrink-0
                               bg-white transition-all duration-300
                               group-hover:bg-[#0070F3] group-hover:border-[#0070F3]
                               group-hover:shadow-[0_6px_18px_rgba(0,112,243,0.30)]"
                  >
                    <Icon className="w-5.5 h-5.5 text-[#111111] transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <span className="font-mono text-[13px] text-gray-300 font-medium tracking-tight
                                   transition-colors duration-300 group-hover:text-[#0070F3]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="relative text-xl font-bold mb-3 tracking-tight">{service.title}</h3>
                <p className="relative text-[var(--text-secondary)] mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>

                <div
                  className="relative flex items-center gap-1.5 text-[13px] font-semibold text-[#0070F3]
                             opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0
                             transition-all duration-300"
                >
                  Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-[14px] font-semibold text-[#111111]
                       border border-[#D1D5DB] bg-white px-6 py-3.5 rounded-full
                       hover:border-[#111111] hover:bg-[#F9F9F9] active:scale-[0.97]
                       transition-all duration-150"
          >
            View All Services
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
