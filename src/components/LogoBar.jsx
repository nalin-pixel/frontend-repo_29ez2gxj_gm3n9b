import { motion } from 'framer-motion'

function LogoBar() {
  const logos = ['TBLA', 'Bilt Liquide', 'APIFY', 'iallic', 'sirved', 'Trackwell', 'TellTail']

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  }
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  }

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#F7F7F7,white)] py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_-50%,#4169E10f,transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 mb-6">Trusted by data-driven teams</p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center"
        >
          {logos.map((name) => (
            <motion.div
              key={name}
              variants={item}
              className="h-12 flex items-center justify-center rounded-lg border border-gray-100 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="text-gray-400 font-semibold tracking-wide text-sm hover:text-gray-700 transition-colors">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default LogoBar
