const processSteps = [
  {
    num: "01",
    title: "Discover",
    desc: "Understand the business, problem, users and goals."
  },
  {
    num: "02",
    title: "Define",
    desc: "Clarify scope, features, technology, timeline and deliverables."
  },
  {
    num: "03",
    title: "Build",
    desc: "Design, development, APIs, database and integrations."
  },
  {
    num: "04",
    title: "Test",
    desc: "Functionality, responsiveness, performance and edge cases."
  },
  {
    num: "05",
    title: "Launch",
    desc: "Deploy and configure the production system."
  },
  {
    num: "06",
    title: "Support",
    desc: "Maintenance, improvements and future development."
  }
];

const Process = () => {
  return (
    <section className="py-24 lg:py-32 bg-gray-50/50 border-y border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            A simple process. No unnecessary complexity.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-4xl font-bold text-gray-200 mb-4 font-mono">
                {step.num}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-[var(--text-secondary)]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
