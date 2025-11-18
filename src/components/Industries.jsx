import { motion } from 'framer-motion'

function Industries() {
  const items = [
    'E-commerce',
    'Gaming & Real Estate',
    'Sports & Trading',
    'Travel & Hospitality',
    'Retail & CPG',
    'Financial Services',
    'Marketplaces',
    'Media & Entertainment',
    'Logistics & Mobility',
  ]

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
  }

  return (
    <section className="relative bg-[#F7F7F7]" id="industries">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_100%_0%,#4169E10d,transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="uppercase text-xs tracking-widest text-gray-500 mb-3">INDUSTRIES</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">We partner with top-tier startups and enterprises...</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-4 text-gray-800">
          {items.map((s) => (
            <motion.div
              key={s}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-lg border border-gray-200 bg-white p-4 text-sm font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {s}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
