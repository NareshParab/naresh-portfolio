import { useState, useRef } from 'react';
import { Mail, GitBranch, Briefcase, Phone, ArrowRight, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

const contactLinks = [
  { icon: Mail, label: 'workingnaresh00@gmail.com', href: 'mailto:workingnaresh00@gmail.com' },
  { icon: Phone, label: '+91 84460 72604', href: 'tel:+918446072604' },
  { icon: Briefcase, label: 'linkedin.com/in/naresh-parab-56ab8129b', href: 'https://www.linkedin.com/in/naresh-parab-56ab8129b', external: true },
  { icon: GitBranch, label: 'github.com/NareshParab', href: 'https://github.com/NareshParab', external: true },
];

const SelectField = ({ id, name, label, value, onChange, placeholder, options }) => (
  <div className="space-y-2">
    <label htmlFor={id} className="text-[13.5px] font-semibold text-[#374151]">{label}</label>
    <div className="relative">
      <select
        id={id}
        name={name}
        required
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3.5 bg-gray-50 border border-[var(--border-color)] rounded-xl
                   focus:outline-none focus:ring-2 focus:ring-[#0070F3]/40 focus:border-[#0070F3]/50
                   transition-all duration-200 appearance-none text-[15px] cursor-pointer
                   hover:border-gray-300"
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', service: '', budget: '', timeline: '', message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setIsSubmitted(true);
      setFormData({ name: '', email: '', service: '', budget: '', timeline: '', message: '' });
    } catch (error) {
      console.error("Failed to send message:", error);
      setSubmitError("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-24 pb-16 flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,112,243,0.08) 0%, transparent 70%)', filter: 'blur(10px)' }}
        />
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 max-w-xl mx-auto px-6 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 260, damping: 18 }}
            className="relative w-16 h-16 mx-auto mb-6"
          >
            <span className="absolute inset-0 rounded-full bg-[#0070F3]/15 animate-ping" />
            <div className="relative w-16 h-16 bg-[#0070F3] text-white rounded-full flex items-center justify-center">
              <Check className="w-7 h-7" strokeWidth={2.5} />
            </div>
          </motion.div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">Thanks for reaching out.</h1>
          <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
            I've received your project details. I'll review the requirements and get back to you shortly.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-8 px-6 py-3 bg-gray-100 text-[var(--text-primary)] rounded-full font-medium hover:bg-gray-200 active:scale-[0.97] transition-all duration-150"
          >
            Send another message
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative pt-20 pb-16 sm:pt-28 sm:pb-20 lg:pt-40 lg:pb-28 bg-[var(--bg-color)] overflow-hidden">

      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(0,112,243,0.07) 0%, transparent 70%)', filter: 'blur(20px)' }}
        />
        <div
          className="absolute bottom-0 -right-40 w-[480px] h-[480px] rounded-full opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(0,112,243,0.06) 0%, transparent 70%)', filter: 'blur(20px)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16">

          <div className="lg:col-span-5">
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-5">
              <span className="w-6 h-[2px] bg-[#0070F3] rounded-full" />
              <span className="text-[11px] font-mono font-semibold tracking-[0.18em] text-[#0070F3] uppercase">
                Contact
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.06)}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.08]"
            >
              Let's build <span className="text-[#0070F3]">something.</span>
            </motion.h1>

            <motion.p {...fadeUp(0.12)} className="text-xl text-[var(--text-secondary)] mb-11 leading-relaxed">
              Have an idea, a problem to solve, or a process you want to automate? Tell me about it.
            </motion.p>

            <div className="space-y-3">
              {contactLinks.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    {...fadeUp(0.16 + i * 0.05)}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 p-2 rounded-2xl transition-colors duration-200 hover:bg-white"
                  >
                    <div
                      className="w-12 h-12 rounded-xl shadow-sm border border-[var(--border-color)] flex items-center justify-center
                                 text-gray-500 bg-white flex-shrink-0 transition-all duration-250
                                 group-hover:bg-[#0070F3] group-hover:border-[#0070F3] group-hover:text-white
                                 group-hover:shadow-[0_6px_18px_rgba(0,112,243,0.30)] group-hover:-translate-y-0.5"
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[15.5px] font-medium text-[var(--text-primary)] group-hover:text-[#0070F3] transition-colors duration-200 break-all">
                      {item.label}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative bg-white p-7 lg:p-11 rounded-[28px] border border-[var(--border-color)] shadow-[0_16px_48px_rgba(0,0,0,0.06)] overflow-hidden">

              <div
                className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(0,112,243,0.06) 0%, transparent 70%)' }}
              />

              <form ref={formRef} onSubmit={handleSubmit} className="relative space-y-6">

                {submitError && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
                    {submitError}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[13.5px] font-semibold text-[#374151]">Name</label>
                    <input
                      type="text" id="name" name="name" required
                      value={formData.name} onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-gray-50 border border-[var(--border-color)] rounded-xl
                                 focus:outline-none focus:ring-2 focus:ring-[#0070F3]/40 focus:border-[#0070F3]/50
                                 transition-all duration-200 text-[15px] hover:border-gray-300"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[13.5px] font-semibold text-[#374151]">Email</label>
                    <input
                      type="email" id="email" name="email" required
                      value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-gray-50 border border-[var(--border-color)] rounded-xl
                                 focus:outline-none focus:ring-2 focus:ring-[#0070F3]/40 focus:border-[#0070F3]/50
                                 transition-all duration-200 text-[15px] hover:border-gray-300"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <SelectField
                  id="service" name="service" label="What are you looking for?"
                  value={formData.service} onChange={handleChange}
                  placeholder="Select a service"
                  options={['Website', 'Custom Software', 'SaaS Application', 'Business Automation', 'Maintenance & Support', 'AI & Data Solutions', 'Not sure yet']}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <SelectField
                    id="budget" name="budget" label="Estimated Budget"
                    value={formData.budget} onChange={handleChange}
                    placeholder="Select budget"
                    options={['Not sure', 'Under ₹25K', '₹25K – ₹75K', '₹75K – ₹1.5L', '₹1.5L+']}
                  />
                  <SelectField
                    id="timeline" name="timeline" label="Timeline"
                    value={formData.timeline} onChange={handleChange}
                    placeholder="Select timeline"
                    options={['As soon as possible', '1 month', '1–3 months', '3+ months', 'Not sure']}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-[13.5px] font-semibold text-[#374151]">Tell me about the project</label>
                  <textarea
                    id="message" name="message" required
                    value={formData.message} onChange={handleChange} rows="5"
                    className="w-full px-4 py-3.5 bg-gray-50 border border-[var(--border-color)] rounded-xl
                               focus:outline-none focus:ring-2 focus:ring-[#0070F3]/40 focus:border-[#0070F3]/50
                               transition-all duration-200 resize-none text-[15px] hover:border-gray-300"
                    placeholder="Briefly describe what you're trying to achieve..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full py-4 bg-[#111111] text-white rounded-xl font-semibold text-[15.5px]
                             flex items-center justify-center gap-2
                             hover:bg-[#0070F3] active:scale-[0.98]
                             shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_24px_rgba(0,112,243,0.30)]
                             transition-all duration-250 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />}
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
