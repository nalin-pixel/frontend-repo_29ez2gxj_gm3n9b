function LogoBar() {
  const logos = ['TBLA', 'Bilt Liquide', 'APIFY', 'iallic', 'sirved', 'Trackwell', 'TellTail']

  return (
    <section className="bg-[#F7F7F7] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 mb-6">Trusted by data-driven teams</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
          {logos.map((name) => (
            <div key={name} className="h-10 flex items-center justify-center bg-white rounded-md border border-gray-100 shadow-sm">
              <span className="text-gray-400 font-semibold tracking-wide text-sm">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogoBar
