const principles = [
  {
    title: "Business-first thinking",
    desc: "I start with the problem, not the technology."
  },
  {
    title: "Full-system thinking",
    desc: "I look beyond the interface and consider frontend, backend, APIs, data and deployment together."
  },
  {
    title: "Clear communication",
    desc: "You should always know what is being built and why."
  },
  {
    title: "Long-term support",
    desc: "The relationship does not have to end when the product launches."
  }
];

const WhyWorkWithMe = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 sticky top-32">
              Technology is the tool.<br />The problem comes first.
            </h2>
          </div>

          <div className="space-y-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl border border-[var(--border-color)]">
                <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                <p className="text-[var(--text-secondary)] text-lg">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
