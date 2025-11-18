import { Shield, Target, Infinity, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

function Why() {
  const items = [
    {
      icon: Target,
      title: 'Precision targeting',
      desc: 'We scope exactly what matters for your business, then collect and normalize with strict quality controls.'
    },
    {
      icon: Shield,
      title: 'Compliance & security',
      desc: 'Enterprise-safe practices, governance, and monitoring. Your data is protected end-to-end.'
    },
    {
      icon: Infinity,
      title: 'Elastic scale',
      desc: 'From hundreds to billions of records, our infrastructure grows with your needs without compromising speed.'
    },
    {
      icon: TrendingUp,
      title: 'Business outcomes',
      desc: 'Turn raw signals into revenue with enriched, structured outputs tailored to your pipelines.'
    }
  ]

  const card = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <section className="relative bg-white" id="why">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_0%,#4169E10d,transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <p className="uppercase text-xs tracking-widest text-gray-500 mb-3">WHY EPCTEXT</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Invest in your future with the power of automation and data.</h2>
            <p className="text-gray-600 mb-6">Partner with a team that understands the real-world constraints of data acquisition at scale. We design resilient systems for discovery, extraction, enrichment, and delivery—optimized for cost, speed, and reliability.</p>
            <a href="#contact" className="inline-flex items-center rounded-md bg-[#4169E1] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(65,105,225,0.6)] hover:bg-[#3256c7] transition-colors">Get started</a>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {items.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={card}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="inline-flex p-2 rounded-lg bg-[#4169E1]/10 text-[#4169E1]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why
