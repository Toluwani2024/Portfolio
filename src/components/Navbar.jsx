import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['About', 'Services', 'Projects', 'Contact']

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-8 py-4 flex items-center justify-between transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent' }`}>

      {/* Logo */}
      <a href="#hero" className="text-xl font-black text-gray-900 tracking-tight">
        LUMEON <span className="text-[#5BB8F5]">DEV</span>
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8">
        {links.map(link => (
          <li key={link}>
            
              <a href={`#${link.toLowerCase()}`}
              className="text-gray-700 font-medium hover:text-[#5BB8F5] transition-colors duration-200"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="block w-6 h-0.5 bg-gray-900" />
        <span className="block w-6 h-0.5 bg-gray-900" />
        <span className="block w-6 h-0.5 bg-gray-900" />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden">
          {links.map(link => (
            <li key={link}>
              
               <a href={`#${link.toLowerCase()}`}
                className="text-gray-800 font-medium hover:text-[#5BB8F5]"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}