import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, GitBranch, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import FinalCTA from '../sections/home/FinalCTA';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ["All", "Web", "Software", "SaaS", "Automation", "AI"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <div className="pt-20 pb-16 sm:pt-32 sm:pb-20 lg:pt-48 lg:pb-32 bg-[var(--bg-color)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.08]">
              Some Things I've Built
            </h1>
            <p className="text-xl text-[var(--text-secondary)] leading-relaxed">
              Real projects I've built across web, software, automation and digital products.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-16">
            {categories.map(category => (
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
                  <div className="w-full aspect-[4/3] bg-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-mono text-sm">
                      Image: {project.title}
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="inline-block px-3 py-1 rounded-full border border-[var(--border-color)] text-xs font-mono">
                        {project.category}
                      </div>
                      <div className="flex gap-2">
                        {project.githubLink && (
                          <a href={project.githubLink} className="text-gray-400 hover:text-[var(--text-primary)] transition-colors">
                            <GitBranch className="w-5 h-5" />
                          </a>
                        )}
                        {project.liveDemoLink && (
                          <a href={project.liveDemoLink} className="text-gray-400 hover:text-[var(--text-primary)] transition-colors">
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-[var(--text-secondary)] mb-6 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="text-sm font-semibold mb-2">Result:</div>
                      <div className="text-sm text-[var(--text-secondary)] bg-blue-50/50 p-3 rounded-lg border border-blue-100/50">
                        {project.result}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map(tech => (
                        <span key={tech} className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-6 border-t border-[var(--border-color)]">
                      <Link
                        to={`#`}
                        className="inline-flex items-center gap-2 font-medium hover:text-[var(--accent)] transition-colors"
                      >
                        View Case Study <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-32 bg-white rounded-3xl border border-[var(--border-color)]">
              <p className="text-[var(--text-secondary)] text-lg">No projects found in this category yet.</p>
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default Projects;
