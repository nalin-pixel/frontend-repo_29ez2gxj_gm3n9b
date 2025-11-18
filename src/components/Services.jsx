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

  return (
    <section className="bg-[#F7F7F7]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="uppercase text-xs tracking-widest text-gray-500 mb-3">SERVICES</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our epctext services for your unique needs</h2>
        <p className="text-gray-600 mt-3 max-w-3xl">Flexible capabilities that adapt to your use case, volume, and compliance requirements.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-4 text-gray-800">
          {services.map((s) => (
            <div key={s} className="rounded-lg border border-gray-200 bg-white p-4 text-sm font-medium">{s}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
