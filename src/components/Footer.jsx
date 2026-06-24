import { FaGithub, FaLinkedin } from 'react-icons/fa'

const links = ['About', 'Services', 'Projects', 'Contact']

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] px-8 md:px-20 py-12">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">

          <a href="#hero" className="text-2xl font-black text-white tracking-tight">
            LUMEON <span className="text-[#5BB8F5]">DEV</span>
          </a>

          <ul className="flex gap-8">
            {links.map(link => (
              <li key={link}>
                
                 <a href={`#${link.toLowerCase()}`}
                  className="text-gray-400 font-medium hover:text-[#5BB8F5] transition-colors duration-200 text-sm"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-5">
            
             <a href="https://github.com/Toluwani2024"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#5BB8F5] transition-colors duration-200"
            >
              <FaGithub size={22} />
            </a>
            
               <a href="https://www.linkedin.com/in/aderibigbe-toluwani-b0bb31248"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#5BB8F5] transition-colors duration-200"
            >
              <FaLinkedin size={22} />
            </a>
          </div>

        </div>

        <div className="border-t border-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Lumeon Dev. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Designed & Built by{' '}
            <span className="text-[#5BB8F5] font-semibold">Aderibigbe Toluwani</span>
          </p>
        </div>

      </div>
    </footer>
  )
}