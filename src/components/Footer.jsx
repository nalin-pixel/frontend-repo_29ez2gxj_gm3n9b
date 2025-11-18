import { Linkedin, Twitter, Instagram, Facebook, Youtube } from 'lucide-react'

function Footer() {
  return (
    <footer className="relative bg-black text-white" id="contact">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_320px_at_50%_-20%,#4169E11a,transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-4 gap-10">
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-white/60 mb-4">Services</h4>
          <ul className="space-y-2 text-white/70 text-sm">
            {['Competitive Intelligence','Market Intelligence','Deep Web Intelligence','Price Monitoring','Lead Enrichment','App Intelligence'].map(i => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-white/60 mb-4">Industries</h4>
          <ul className="space-y-2 text-white/70 text-sm">
            {['E-commerce','Finance','Marketplaces','Media','Logistics'].map(i => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-white/60 mb-4">Case studies</h4>
          <ul className="space-y-3 text-white/70 text-sm">
            <li>“Improved price coverage by 97% in 8 weeks.”</li>
            <li>“Scaled to 10M+ rows/day with zero downtime.”</li>
            <li>“Cut delivery latency from days to minutes.”</li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-white/60 mb-4">Contact</h4>
          <p className="text-white/70 text-sm mb-4">contact@epctext.com<br/>San Francisco, CA</p>
          <div className="flex items-center gap-3">
            {[Linkedin, Twitter, Instagram, Facebook, Youtube].map((Icon, idx) => (
              <a key={idx} href="#" className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-white/60 flex items-center justify-between">
          <span>© {new Date().getFullYear()} epctext. All rights reserved.</span>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
