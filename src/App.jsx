import Navbar from './components/Navbar'
import Hero from './components/Hero'
import LogoBar from './components/LogoBar'
import Why from './components/Why'
import Process from './components/Process'
import WhatYouGet from './components/WhatYouGet'
import Stats from './components/Stats'
import Services from './components/Services'
import Industries from './components/Industries'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <Why />
        <Process />
        <WhatYouGet />
        <Stats />
        <Services />
        <Industries />
      </main>
      <Footer />
    </div>
  )
}

export default App
