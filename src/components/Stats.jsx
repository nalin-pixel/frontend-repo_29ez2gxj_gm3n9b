function Stats() {
  const stats = [
    { value: '1400+', label: 'Satisfied customers' },
    { value: '428M+', label: 'Data points gathered' },
    { value: '100%', label: 'Success rate' },
    { value: '15+', label: 'Years of experience' },
  ]

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <p className="text-4xl md:text-5xl font-extrabold text-gray-900">{s.value}</p>
              <p className="mt-2 text-xs tracking-widest uppercase text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
