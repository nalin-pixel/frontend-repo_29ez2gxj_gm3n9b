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

  return (
    <section className="bg-[#F7F7F7]" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="uppercase text-xs tracking-widest text-gray-500 mb-3">INDUSTRIES</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">We partner with top-tier startups and enterprises...</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-4 text-gray-800">
          {items.map((s) => (
            <div key={s} className="rounded-lg border border-gray-200 bg-white p-4 text-sm font-medium">{s}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
