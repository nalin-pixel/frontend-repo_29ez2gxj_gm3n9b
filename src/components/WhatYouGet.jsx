import { Handshake, Timer, MapPin } from 'lucide-react'

function WhatYouGet() {
  const features = [
    { icon: Handshake, title: 'Partnership-first', desc: 'We operate as an extension of your team with proactive communication and clear SLAs.' },
    { icon: Timer, title: 'Speed & reliability', desc: 'High-throughput systems deliver fresh data fast, with monitoring and alerting baked in.' },
    { icon: MapPin, title: 'Global coverage', desc: 'From local markets to global scale, we navigate regions, formats, and access restrictions.' },
  ]

  return (
    <section className="bg-[#F7F7F7]" id="what-you-get">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <p className="uppercase text-xs tracking-widest text-gray-500 mb-3">WHAT YOU GET</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">High speed, efficient work</h2>
        <p className="text-gray-600 mt-3 max-w-3xl">Get the outcomes you need: coverage, freshness, and quality. We combine automation with human-in-the-loop review to deliver dependable datasets and insights.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <Icon className="w-6 h-6 text-[#4169E1]" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatYouGet
