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
    <section className="relative bg-[#F7F7F7]" id="industries">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(640px_320px_at_100%_0%,#4169E10d,transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <p className="uppercase text-xs tracking-[0.2em] text-gray-500 mb-3">Industries</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">We partner with top-tier startups and enterprises...</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-4 text-gray-800">
          {items.map((s) => (
            <div
              key={s}
              className="rounded-xl border border-gray-200 bg-white p-4 text-sm font-medium"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
