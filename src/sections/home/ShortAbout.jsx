import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import nareshPhoto from '../../assets/naresh-photo.jpeg';

const ShortAbout = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white border-y border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              I'm Naresh.
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-md">
              I focus on building practical digital solutions for businesses — from websites and SaaS applications to automation and custom software.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[var(--text-primary)] font-medium hover:text-[var(--accent)] transition-colors"
            >
              More About Me <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="w-48 sm:w-64 md:w-72 lg:w-80 aspect-[4/5] bg-[#E2F0FF] rounded-[24px] border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden">
              <img
                src={nareshPhoto}
                alt="Naresh, software developer"
                className="w-full h-full object-cover object-[center_20%]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ShortAbout;
