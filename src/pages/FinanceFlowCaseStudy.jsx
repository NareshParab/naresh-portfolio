import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, GitBranch, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import FinalCTA from '../sections/home/FinalCTA';

const project = projects.find((p) => p.id === 'financeflow');

const FinanceFlowCaseStudy = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const screenshots = project.screenshots;
  const total = screenshots.length;

  const prev = () => setActiveIdx((i) => (i - 1 + total) % total);
  const next = () => setActiveIdx((i) => (i + 1) % total);

  return (
    <>
      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
          >
            <motion.img
              src={screenshots[activeIdx].src}
              alt={screenshots[activeIdx].caption}
              className="max-w-5xl w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-6 text-white text-4xl font-light leading-none hover:text-gray-300 transition-colors"
              onClick={() => setLightboxOpen(false)}
            >
              ×
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/40 rounded-full p-2"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/40 rounded-full p-2"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pt-20 pb-16 sm:pt-32 sm:pb-20 lg:pt-48 lg:pb-32 bg-[var(--bg-color)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">

          {/* Back link */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-block px-3 py-1 rounded-full border border-[var(--border-color)] text-xs font-mono mb-6">
              {project.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.08]">
              {project.title}
            </h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Meta row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-16 p-6 bg-white rounded-2xl border border-[var(--border-color)]">
            <div>
              <div className="text-xs font-mono text-[var(--text-secondary)] mb-1">Role</div>
              <div className="font-semibold text-sm">{project.role}</div>
            </div>
            <div>
              <div className="text-xs font-mono text-[var(--text-secondary)] mb-1">Category</div>
              <div className="font-semibold text-sm">{project.category}</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-xs font-mono text-[var(--text-secondary)] mb-2">Links</div>
              <div className="flex gap-3">
                <a
                  href={project.liveDemoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)] hover:underline transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-[var(--text-primary)] transition-colors"
                >
                  <GitBranch className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Screenshot carousel */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Screenshots</h2>

            {/* Main image */}
            <div
              className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden bg-gray-100 border border-[var(--border-color)] cursor-pointer mb-4 group"
              onClick={() => setLightboxOpen(true)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIdx}
                  src={screenshots[activeIdx].src}
                  alt={screenshots[activeIdx].caption}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                />
              </AnimatePresence>
              {/* Expand hint */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm font-medium bg-black/50 px-3 py-1.5 rounded-full">
                  Click to enlarge
                </span>
              </div>
              {/* Nav arrows */}
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-all"
                onClick={(e) => { e.stopPropagation(); prev(); }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-all"
                onClick={(e) => { e.stopPropagation(); next(); }}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Caption */}
            <p className="text-center text-sm text-[var(--text-secondary)] mb-4">
              {screenshots[activeIdx].caption}
            </p>

            {/* Thumbnail strip */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {screenshots.map((shot, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`flex-shrink-0 w-24 h-16 rounded-xl overflow-hidden border-2 transition-all ${
                    i === activeIdx
                      ? 'border-[var(--accent)] opacity-100'
                      : 'border-transparent opacity-50 hover:opacity-75'
                  }`}
                >
                  <img
                    src={shot.src}
                    alt={shot.caption}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-sm font-medium text-gray-700 bg-gray-100 border border-[var(--border-color)] px-4 py-2 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA row */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--text-primary)] text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[var(--text-primary)] font-semibold px-6 py-3 rounded-full border border-[var(--border-color)] hover:border-gray-400 transition-colors"
            >
              <GitBranch className="w-4 h-4" />
              View on GitHub
            </a>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors self-center ml-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Projects
            </Link>
          </div>

        </div>
      </div>

      <FinalCTA />
    </>
  );
};

export default FinanceFlowCaseStudy;

