import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-[var(--text-primary)] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
          Have an idea?<br />
          <span className="text-gray-400">Let's build it.</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Tell me what you're trying to build, automate or improve.
        </p>
        
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-600 transition-colors"
        >
          Start a Project <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;
