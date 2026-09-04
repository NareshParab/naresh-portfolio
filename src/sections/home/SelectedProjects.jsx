import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';

const SelectedProjects = () => {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Things I've built.
          </h2>
          <p className="text-lg text-[var(--text-secondary)]">
            A selection of projects that demonstrate how I approach real problems with technology.
          </p>
        </div>

        <div className="space-y-16 lg:space-y-24 mb-16">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`w-full aspect-[4/3] bg-gray-100 rounded-3xl border border-[var(--border-color)] overflow-hidden relative group ${
                index % 2 !== 0 ? 'lg:order-2' : ''
              }`}>
                {/* Placeholder Image container */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-mono text-sm bg-gray-50">
                  Image: {project.title}
                </div>
                {/* Once you have images: <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /> */}
              </div>

              <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="inline-block px-3 py-1 rounded-full border border-[var(--border-color)] text-xs font-mono mb-6">
                  {project.category}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-lg text-[var(--text-secondary)] mb-6">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map(tech => (
                    <span key={tech} className="text-sm font-medium text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/projects`}
                  className="inline-flex items-center gap-2 font-medium hover:text-[var(--accent)] transition-colors"
                >
                  View Case Study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-[var(--text-primary)] font-medium hover:text-[var(--accent)] transition-colors"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SelectedProjects;
