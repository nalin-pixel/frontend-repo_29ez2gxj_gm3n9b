import { motion } from 'framer-motion'

function Stats() {
  const stats = [
    { value: '1400+', label: 'Satisfied customers' },
    { value: '428M+', label: 'Data points gathered' },
    { value: '100%', label: 'Success rate' },
    { value: '15+', label: 'Years of experience' },
  ]

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } }
  }

  return (
    <section className="relative bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(500px_250px_at_20%_-20%,#4169E108,transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <p className="text-4xl md:text-5xl font-extrabold text-gray-900">{s.value}</p>
              <p className="mt-2 text-xs tracking-widest uppercase text-gray-500">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
