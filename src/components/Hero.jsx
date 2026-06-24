import { useEffect, useReducer } from 'react'
import profilePhoto from '../assets/profile3.jpg'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const roles = [
  'Frontend-focused Full Stack Developer',
  'React & Node.js Engineer',
  'UI/UX Enthusiast',
  'Freelance Web Developer',
]

const initialState = {
  currentRole: 0,
  displayed: '',
  typing: true,
}

function typingReducer(state, action) {
  switch (action.type) {

    case 'TYPE_CHAR':
      // Add one character
      return {
        ...state,
        displayed: roles[state.currentRole].slice(0, state.displayed.length + 1),
      }

    case 'START_DELETING':
      // Switch from typing to deleting
      return { ...state, typing: false }

    case 'DELETE_CHAR':
      // Remove one character
      return { ...state, displayed: state.displayed.slice(0, -1) }

    case 'NEXT_ROLE':
      // Move to next role and start typing again
      return {
        currentRole: (state.currentRole + 1) % roles.length,
        displayed: '',
        typing: true,
      }

    default:
      return state
  }
}

export default function Hero() {
  const [state, dispatch] = useReducer(typingReducer, initialState)
  const { currentRole, displayed, typing } = state
  const fullRole = roles[currentRole]

  useEffect(() => {
    let timeout

    if (typing) {
      if (displayed.length < fullRole.length) {
        // Still typing
        timeout = setTimeout(() => dispatch({ type: 'TYPE_CHAR' }), 60)
      } else {
        // Done typing — pause then delete
        timeout = setTimeout(() => dispatch({ type: 'START_DELETING' }), 2000)
      }
    } else {
      if (displayed.length > 0) {
        // Still deleting
        timeout = setTimeout(() => dispatch({ type: 'DELETE_CHAR' }), 30)
      } else {
        // Done deleting — next role
        timeout = setTimeout(() => dispatch({ type: 'NEXT_ROLE' }), 200)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, fullRole])

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center bg-white px-8 md:px-20 pt-24 pb-12"
    >
      {/* Main content — split layout */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full max-w-6xl mx-auto">

        {/* LEFT — Text */}
        <div className="flex-1">

          {/* Greeting */}
          <p className="text-[#5BB8F5] font-semibold tracking-widest text-sm uppercase mb-3">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-4">
            Aderibigbe <br />
            <span className="text-[#5BB8F5]">Toluwani</span>
          </h1>

          {/* Animated typing role */}
          <div className="h-8 mb-6">
            <p className="text-gray-600 text-lg font-medium">
              {displayed}
              <span className="animate-pulse text-[#5BB8F5]">|</span>
            </p>
          </div>

          {/* Subtext */}
          <p className="text-gray-500 text-base md:text-lg max-w-lg mb-10">
            I craft fast, scalable, and beautiful web applications —
            from pixel-perfect frontends to robust backend systems.
            Let's build something great together.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap mb-10">
            
             <a href="#projects"
              className="bg-[#5BB8F5] text-white font-bold px-8 py-4 rounded-full hover:bg-[#3aa3e3] transition-colors duration-200"
            >
              View My Work
            </a>
            
            <a  href="#contact"
              className="border-2 border-gray-900 text-gray-900 font-bold px-8 py-4 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200"
            >
              Let's Talk
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 items-center">
            <span className="text-gray-400 text-sm font-medium tracking-widest uppercase">
              Find me on
            </span>
            
            <a  href="https://github.com/Toluwani2024"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-[#5BB8F5] transition-colors duration-200"
            >
              <FaGithub size={24} />
            </a>
            
              <a href="https://www.linkedin.com/in/aderibigbe-toluwani-b0bb31248"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:text-[#5BB8F5] transition-colors duration-200"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* RIGHT — Photo */}
        <div className="flex-shrink-0 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Blue accent ring */}
            <div className="absolute inset-0 rounded-full border-4 border-[#5BB8F5] scale-110" />
            {/* Photo */}
            <img
              src={profilePhoto}
              alt="Aderibigbe Toluwani"
              className="w-full h-full object-cover rounded-full relative z-10"
            />
            {/* Blue dot accent */}
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-[#5BB8F5] rounded-full z-20" />
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center mt-16">
        <a href="#about" className="flex flex-col items-center gap-2 text-gray-400 hover:text-[#5BB8F5] transition-colors duration-200">
          <span className="text-xs tracking-widest uppercase">Scroll Down</span>
          <div className="animate-bounce text-xl">↓</div>
        </a>
      </div>

    </section>
  )
}