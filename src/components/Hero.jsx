import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black" id="home">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to improve text contrast (doesn't block interactions) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
        <div className="max-w-2xl">
          <p className="text-white/70 uppercase tracking-widest text-xs mb-6">Enterprise Data Acquisition</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white">
            Data acquisition, at <span className="text-[#4169E1]">any scale</span>.
          </h1>
          <div className="mt-6 space-y-4 text-white/90">
            <p className="text-lg">We build robust, compliant pipelines to collect and deliver mission-critical data from the public web and deep web. Our infrastructure scales with your needs while maintaining reliability, speed, and precision.</p>
            <p className="text-lg">From discovery and orchestration to quality control and delivery, our teams operate as an extension of yours—so you can focus on insights, not plumbing.</p>
            <p className="text-lg">Trusted by startups and global enterprises for high-volume collection, enrichment, and structured delivery.</p>
          </div>

          <div className="mt-10 flex items-center gap-4 flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-[#4169E1] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-[#3256c7] transition-colors"
            >
              Schedule a meeting
            </a>
            {/* G2 badge placeholder */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-full px-4 py-2 border border-white/10">
              <img src="https://images.unsplash.com/photo-1671814789275-d6c962ab649f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHMnxlbnwwfDB8fHwxNzYzNDkxNjg1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="G2" className="h-5 invert" />
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F59E0B" className="w-5 h-5">
                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.786 1.401 8.163L12 18.896l-7.335 3.863 1.401-8.163L.132 9.21l8.2-1.192z" />
                  </svg>
                ))}
              </div>
              <span className="text-white/80 text-sm">5.0 on G2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
