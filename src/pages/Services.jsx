import { services } from '../data/services';
import { pricingPlans } from '../data/pricing';
import { ArrowRight, Check, CheckCircle2, Sparkles } from 'lucide-react';
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
      <div className="pt-20 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 bg-[var(--bg-color)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
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
            <a
              href="#pricing"
              className="group mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-[#0070F3] transition-colors duration-200 hover:text-[#0058C2]"
            >
              See starting prices
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="space-y-16 sm:space-y-24 lg:space-y-28">
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

      <section
        id="pricing"
        aria-labelledby="pricing-title"
        className="relative overflow-hidden border-y border-[var(--border-color)] bg-white py-16 sm:py-24 lg:py-32"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-36 -top-40 h-96 w-96 rounded-full opacity-70 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(0,112,243,0.10) 0%, transparent 70%)' }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div {...fadeUp(0)} className="mb-12 max-w-3xl sm:mb-16">
            <div className="mb-5 inline-flex items-center gap-2">
              <span className="h-[2px] w-6 rounded-full bg-[#0070F3]" />
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0070F3]">
                Starting Prices
              </span>
            </div>
            <h2
              id="pricing-title"
              className="mb-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              A clear place to start.
              <span className="text-[#0070F3]"> Built around your scope.</span>
            </h2>
            <p className="text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              These are starting prices for the focused scopes below, not fixed quotes. Add-on features,
              extra pages, integrations and project complexity will change the final estimate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-6">
            {pricingPlans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <motion.article
                  key={plan.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: 0.06 * index, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-[var(--border-color)] bg-[#F9FAFB] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0070F3]/35 hover:bg-white hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] sm:p-7 ${
                    index < 3 ? 'xl:col-span-2' : 'xl:col-span-3'
                  }`}
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border-color)] bg-white text-[#0070F3] shadow-sm transition-all duration-300 group-hover:border-[#0070F3] group-hover:bg-[#0070F3] group-hover:text-white group-hover:shadow-[0_6px_18px_rgba(0,112,243,0.25)]">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[12px] font-medium tracking-tight text-gray-300 transition-colors duration-300 group-hover:text-[#0070F3]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mb-2 text-xl font-bold tracking-tight">{plan.title}</h3>
                  <p className="mb-6 min-h-[3rem] text-sm leading-relaxed text-[var(--text-secondary)]">
                    {plan.summary}
                  </p>

                  <div className="mb-6 border-y border-[var(--border-color)] py-5">
                    <span className="mb-1 block font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--text-secondary)]">
                      Starting from
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-semibold text-[#0070F3]">₹</span>
                      <span className="text-4xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-[2.6rem]">
                        {plan.price}
                      </span>
                    </div>
                  </div>

                  <ul className="mb-8 flex-1 space-y-3">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-[var(--text-secondary)]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0070F3]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className="group/link inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#D1D5DB] bg-white px-5 py-3 text-[13px] font-semibold text-[#111111] transition-all duration-200 hover:border-[#0070F3] hover:bg-[#0070F3] hover:text-white active:scale-[0.98]"
                  >
                    Discuss this scope
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            {...fadeUp(0.1)}
            className="mt-8 flex items-start gap-3 rounded-2xl border border-[#0070F3]/15 bg-[#0070F3]/[0.04] p-5 sm:mt-10 sm:p-6"
          >
            <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-[#0070F3]" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              SaaS and software prices cover a small first build scope, not a complete production platform.
              Subscriptions, multiple roles, advanced security, additional integrations, hosting, domains
              and paid third-party services are scoped separately. I’ll confirm the requirements and final
              price with you before work begins.
            </p>
          </motion.div>
        </div>
      </section>
      <FinalCTA />
    </>
  );
};

export default Services;
