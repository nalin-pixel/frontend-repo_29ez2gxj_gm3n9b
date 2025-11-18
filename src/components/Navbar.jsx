import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Blog', href: '#blog' },
    { label: 'About Us', href: '#about' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl">
      {/* subtle bottom divider */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-white font-extrabold text-xl tracking-tight">epctext</span>
            <span className="hidden sm:inline-flex items-center rounded-full border border-white/15 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em] text-white/70">Enterprise</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-[#4169E1] px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-blue-400/30 hover:bg-[#3256c7] transition-colors"
              >
                Contact
              </a>
              <a
                href="#services"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/0 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                Get a quote
              </a>
            </div>
          </nav>

          {/* Mobile button */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="rounded-xl border border-white/10 bg-black/70 backdrop-blur p-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-white/90 hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <a
                  href="#contact"
                  className="text-center rounded-lg bg-[#4169E1] px-4 py-2 text-sm font-semibold text-white hover:bg-[#3256c7]"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </a>
                <a
                  href="#services"
                  className="text-center rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  Get a quote
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
