function LogoBar() {
  const logos = [
    { name: 'Datacore' },
    { name: 'Quantium' },
    { name: 'Novatech' },
    { name: 'Apify' },
    { name: 'Trackwell' },
    { name: 'TellTail' },
    { name: 'Sirved' },
  ]

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#F7F7F7,white)] py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_240px_at_50%_-40%,#4169E10f,transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Trusted by data-driven teams</p>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="h-14 flex items-center justify-center rounded-xl border border-gray-200/80 bg-white shadow-sm text-gray-400 hover:text-gray-700 transition-colors"
            >
              <span className="font-semibold tracking-wide text-sm">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoBar
