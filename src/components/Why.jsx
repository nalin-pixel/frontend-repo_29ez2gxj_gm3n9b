import { Shield, Target, Infinity, TrendingUp } from 'lucide-react'

function Why() {
  const items = [
    {
      icon: Target,
      title: 'Precision targeting',
      desc: 'Scope only what matters for your business, then collect and normalize with strict quality controls.'
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

  return (
    <section className="relative bg-white" id="why">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_320px_at_10%_0%,#4169E10d,transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="max-w-xl">
            <p className="uppercase text-xs tracking-[0.2em] text-gray-500 mb-4">Why epctext</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Invest in your future with the power of automation and data.</h2>
            <p className="text-gray-600 mb-8">Partner with a team that understands the real-world constraints of data acquisition at scale. We design resilient systems for discovery, extraction, enrichment, and delivery—optimized for cost, speed, and reliability.</p>
            <div className="flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center rounded-full bg-[#4169E1] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(65,105,225,0.6)] hover:bg-[#3256c7] transition-colors">Get started</a>
              <a href="#services" className="inline-flex items-center rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50">Explore services</a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {items.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex p-2 rounded-lg bg-[#4169E1]/10 text-[#4169E1]"><Icon className="w-6 h-6" /></div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why
