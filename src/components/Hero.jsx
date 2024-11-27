import React, { useState } from 'react'

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <section className="relative w-screen h-screen overflow-hidden bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-black/70 before:to-black/50">
      {/* Header */}
      <header className="relative z-20 w-full flex items-center justify-between px-8 py-6">
        <div className="text-white text-3xl font-bold">ConstructCo</div>
        
        {/* Hamburger Menu Button */}
        <button 
          className={`lg:hidden focus:outline-none z-30 ${isMenuOpen ? 'text-white' : 'text-black'}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${isMenuOpen ? 'bg-white transform rotate-45 translate-y-2' : 'bg-black'}`}></div>
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${isMenuOpen ? 'bg-white opacity-0' : 'bg-black'}`}></div>
          <div className={`w-6 h-0.5 transition-all ${isMenuOpen ? 'bg-white transform -rotate-45 -translate-y-2' : 'bg-black'}`}></div>
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-black/95 z-20 lg:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <nav className="flex flex-col items-center justify-center h-full">
            {['Home', 'About', 'Services', 'Projects', 'Team', 'Blog', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-white hover:text-yellow-400 transition-colors text-2xl mb-8"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button 
              className="bg-yellow-400 px-8 py-4 rounded-md text-black font-semibold hover:bg-yellow-500 transition-colors text-xl mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </button>
          </nav>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {['Home', 'About', 'Services', 'Projects', 'Team', 'Blog', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-white hover:text-yellow-400 transition-colors">
              {item}
            </a>
          ))}
        </nav>
        
        {/* Desktop Get Started Button */}
        <button className="hidden lg:block bg-yellow-400 px-6 py-3 rounded-md text-black font-semibold hover:bg-yellow-500 transition-colors">
          Get Started
        </button>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-5rem)] text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Building Dreams <br/>Into Reality</h1>
        <p className="text-xl md:text-2xl max-w-3xl mb-12 text-gray-200">Transform your vision into stunning architectural masterpieces with our expert construction services</p>
        <button className="bg-yellow-400 px-10 py-4 rounded-md text-black font-semibold hover:bg-yellow-500 transition-colors text-lg">
          Explore Our Projects
        </button>
      </div>
    </section>
  )
}

export default Hero
