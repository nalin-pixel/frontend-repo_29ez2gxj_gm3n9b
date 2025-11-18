import { Handshake, Timer, MapPin } from 'lucide-react'

function WhatYouGet() {
  const features = [
    { icon: Handshake, title: 'Partnership-first', desc: 'We operate as an extension of your team with proactive communication and clear SLAs.' },
    { icon: Timer, title: 'Speed & reliability', desc: 'High-throughput systems deliver fresh data fast, with monitoring and alerting baked in.' },
    { icon: MapPin, title: 'Global coverage', desc: 'From local markets to global scale, we navigate regions, formats, and access restrictions.' },
  ]

  return (
    <section className="relative overflow-hidden bg-[#F7F7F7]" id="what-you-get">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(640px_320px_at_80%_-10%,#4169E10d,transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <p className="uppercase text-xs tracking-[0.2em] text-gray-500 mb-3">What you get</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">High speed, efficient work</h2>
        <p className="text-gray-600 mt-3 max-w-3xl">Get the outcomes you need: coverage, freshness, and quality. We combine automation with human-in-the-loop review to deliver dependable datasets and insights.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex p-2 rounded-lg bg-[#4169E1]/10 text-[#4169E1]">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatYouGet
