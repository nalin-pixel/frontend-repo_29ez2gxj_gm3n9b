import { Shield, Target, Infinity, TrendingUp } from 'lucide-react'

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

  return (
    <section className="bg-white" id="why">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="max-w-xl">
            <p className="uppercase text-xs tracking-widest text-gray-500 mb-3">WHY EPCTEXT</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Invest in your future with the power of automation and data.</h2>
            <p className="text-gray-600 mb-6">Partner with a team that understands the real-world constraints of data acquisition at scale. We design resilient systems for discovery, extraction, enrichment, and delivery—optimized for cost, speed, and reliability.</p>
            <a href="#contact" className="inline-flex items-center rounded-md bg-[#4169E1] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#3256c7]">Get started</a>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {items.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <Icon className="w-6 h-6 text-[#4169E1]" />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why
