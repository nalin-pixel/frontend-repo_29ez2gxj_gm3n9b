function Process() {
  const steps = [
    {
      title: 'Consultation',
      desc: 'We explore your goals, constraints, and success metrics to design the right approach.'
    },
    {
      title: 'Setting Up',
      desc: 'We configure sources, access, and infrastructure. Compliance-first architecture.'
    },
    {
      title: 'Collecting & Delivering',
      desc: 'Pipelines run on schedule or demand with validation, enrichment, and SLAs.'
    },
    {
      title: 'Ongoing Maintenance',
      desc: 'We iterate on coverage, performance, and resilience as your needs evolve.'
    },
  ]

  return (
    <section className="bg-black" id="how">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <p className="uppercase text-xs tracking-widest text-white/60 mb-3">HOW WE WORK</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Getting started with epctext</h2>
        <p className="text-white/70 max-w-2xl">A streamlined engagement model that gets you from scoping to delivery fast—with transparency at each step.</p>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-[#4169E1] text-white flex items-center justify-center font-semibold shadow-lg">
                {i + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
