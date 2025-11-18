import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

function Services() {
  const services = [
    'Competitive Intelligence',
    'Market Intelligence',
    'Data & Deep Web Intelligence',
    'Price & Catalog Monitoring',
    'Lead Generation & Enrichment',
    'App & Store Intelligence',
    'Review & Ratings Intelligence',
    'Job & Talent Intelligence',
    'SEO & SERP Intelligence',
  ]

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
  }

  return (
    <section className="relative bg-[#F7F7F7]" id="services">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_0%_0%,#4169E10d,transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <p className="uppercase text-xs tracking-widest text-gray-500 mb-3">SERVICES</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our epctext services for your unique needs</h2>
            <p className="text-gray-600 mt-3 max-w-3xl">Flexible capabilities that adapt to your use case, volume, and compliance requirements.</p>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-[#4169E1] px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(65,105,225,0.6)] hover:bg-[#3256c7]">
            <Sparkles size={16} /> Get a proposal
          </a>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4 text-gray-800">
          {services.map((s) => (
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

export default Services
