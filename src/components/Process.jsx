import { motion } from 'framer-motion'

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

  const card = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <section className="relative bg-black" id="how">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_300px_at_90%_-10%,#4169E133,transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <p className="uppercase text-xs tracking-widest text-white/60 mb-3">HOW WE WORK</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Getting started with epctext</h2>
        <p className="text-white/70 max-w-2xl">A streamlined engagement model that gets you from scoping to delivery fast—with transparency at each step.</p>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]"
            >
              <div className="absolute -top-4 left-6 w-9 h-9 rounded-full bg-[#4169E1] text-white flex items-center justify-center font-semibold shadow-[0_10px_30px_-10px_rgba(65,105,225,0.8)]">
                {i + 1}
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <h3 className="mt-5 text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
