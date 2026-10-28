import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GitBranch, ExternalLink, Lock } from 'lucide-react';
import { projects } from '../data/projects';
import FinalCTA from '../sections/home/FinalCTA';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ["All", "Web", "SaaS", "AI"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [expandedImg, setExpandedImg] = useState(null); // lightbox

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Lightbox */}
      <AnimatePresence>
        {expandedImg && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedImg(null)}
          >
            <motion.img
              src={expandedImg}
              alt="Screenshot preview"
              className="max-w-5xl w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-6 text-white text-3xl font-light hover:text-gray-300 transition-colors"
              onClick={() => setExpandedImg(null)}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pt-20 pb-16 sm:pt-32 sm:pb-20 lg:pt-48 lg:pb-32 bg-[var(--bg-color)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Page header */}
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.08]">
              Some Things I've Built
            </h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              Real projects I've built across web, software, AI and SaaS products.
            </p>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${
                  activeCategory === category
                    ? 'bg-[var(--text-primary)] text-white border-[var(--text-primary)]'
                    : 'bg-white text-[var(--text-secondary)] border-[var(--border-color)] hover:border-gray-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-3xl border border-[var(--border-color)] overflow-hidden flex flex-col hover:shadow-md transition-shadow"
                >
                  {/* Screenshot thumbnail */}
                  <div
                    className="w-full aspect-[4/3] bg-gray-100 relative overflow-hidden cursor-pointer"
                    onClick={() => setExpandedImg(project.image)}
                    title="Click to enlarge"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {project.confidential && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center gap-2">
                        <Lock className="w-5 h-5 text-white" />
                        <span className="text-white text-sm font-semibold tracking-wide uppercase">Confidential</span>
                      </div>
                    )}
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    {/* Category badge + icon links */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="inline-block px-3 py-1 rounded-full border border-[var(--border-color)] text-xs font-mono">
                        {project.category}
                      </div>
                      <div className="flex gap-3">
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="View on GitHub"
                            className="text-gray-400 hover:text-[var(--text-primary)] transition-colors"
                          >
                            <GitBranch className="w-5 h-5" />
                          </a>
                        )}
                        {project.liveDemoLink && (
                          <a
                            href={project.liveDemoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="View live site"
                            className="text-gray-400 hover:text-[var(--accent)] transition-colors"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                        {project.confidential && (
                          <Lock className="w-5 h-5 text-gray-300" />
                        )}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-[var(--text-secondary)] mb-6 flex-grow">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Footer actions */}
                    <div className="mt-auto pt-6 border-t border-[var(--border-color)] flex flex-wrap items-center gap-4">
                      {project.confidential ? (
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 select-none">
                          <Lock className="w-4 h-4" />
                          Confidential Project — Screenshots Approved
                        </span>
                      ) : project.caseStudyLink ? (
                        <Link
                          to={project.caseStudyLink}
                          className="inline-flex items-center gap-2 font-medium hover:text-[var(--accent)] transition-colors"
                        >
                          View Case Study <ArrowRight className="w-4 h-4" />
                        </Link>
                      ) : null}

                      {project.liveDemoLink && (
                        <a
                          href={project.liveDemoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:underline transition-colors"
                        >
                          Live Demo <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}

                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[var(--text-primary)] transition-colors"
                        >
                          <GitBranch className="w-3.5 h-3.5" />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-32 bg-white rounded-3xl border border-[var(--border-color)]">
              <p className="text-[var(--text-secondary)] text-lg">
                No projects found in this category yet.
              </p>
            </div>
          )}

        </div>
      </div>

      <FinalCTA />
    </>
  );
};

export default Projects;
