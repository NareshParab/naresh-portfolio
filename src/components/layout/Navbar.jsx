import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname === path;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-[var(--bg-color)]/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-[0_2px_16px_rgba(0,0,0,0.06)] py-3.5'
          : 'bg-transparent py-5 shadow-[0_1px_0_rgba(0,0,0,0.02)]'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">

          <Link
            to="/"
            className="group flex items-center gap-[3px] text-[17px] font-black tracking-[-0.05em] text-[#111111] z-50 select-none"
            aria-label="Naresh — Home"
          >
            NARESH
            <span className="w-[5px] h-[5px] rounded-full bg-[#0070F3] mb-2.5 transition-transform duration-300 group-hover:scale-125" />
          </Link>

          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-3 py-2 text-[15px] font-medium tracking-tight transition-colors duration-200 ${isActive(link.path)
                  ? 'text-[#111111]'
                  : 'text-[#666666] hover:text-[#111111]'
                  }`}
              >
                <span className="relative z-10 inline-block transition-transform duration-200 hover:-translate-y-[1px]">
                  {link.name}
                </span>

                {isActive(link.path) && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-3 right-3 -bottom-0.5 h-[1.5px] rounded-full bg-[#0070F3]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 text-[14px] font-semibold tracking-tight bg-[#111111] text-white px-5 py-2.5 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.12)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.20)] hover:bg-[#1a1a1a] active:scale-[0.97] transition-all duration-200"
            >
              Start a Project
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <button
            className="md:hidden z-50 flex items-center gap-1.5 text-[13px] font-semibold tracking-wide text-[#111111] uppercase"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
            <span>{isOpen ? 'Close' : 'Menu'}</span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-40 bg-[var(--bg-color)] flex flex-col md:hidden"
          >
            <div className="h-px bg-[#E5E7EB] mt-[62px]" />

            <nav
              className="flex flex-col px-6 pt-10 flex-1"
              aria-label="Mobile navigation links"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.18, delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center justify-between py-4 border-b border-[#EBEBEB] text-[28px] font-bold tracking-tight transition-colors duration-150 ${isActive(link.path)
                      ? 'text-[#111111]'
                      : 'text-[#AAAAAA] hover:text-[#111111]'
                      }`}
                  >
                    {link.name}
                    {isActive(link.path) && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0070F3] flex-shrink-0" />
                    )}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              className="px-6 pb-10 pt-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.28 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full gap-2 text-[15px] font-semibold bg-[#111111] text-white px-6 py-4 rounded-full hover:bg-[#1a1a1a] active:scale-[0.98] transition-all duration-150"
              >
                Start a Project <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
