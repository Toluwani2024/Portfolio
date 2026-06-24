import hotelImg from '../assets/hotel.png'
import havenImg from '../assets/haven.png'

const projects = [
  {
    title: 'Ehi Grand Hotel',
    description:
      'A fully functional hotel website where customers can browse rooms and make bookings directly from the site. Built for a real client and live in production.',
    tech: ['React', 'Tailwind CSS'],
    live: 'https://www.ehigrandhotelandresort.com.ng/',
    github: 'https://github.com/Toluwani2024/ehi-grand-hotel',
    tag: 'Client Project',
    image: hotelImg,
  },
  {
    title: 'Haven Hub',
    description:
      'A clean and modern real estate platform where property listings are showcased beautifully. Users can browse available properties with ease.',
    tech: ['React', 'Tailwind CSS'],
    live: 'https://haven-hub-mauve.vercel.app/',
    github: 'https://github.com/Toluwani2024/haven-hub',
    tag: 'Personal Project',
    image: havenImg,
  },
  {
    title: 'Auth API',
    description:
      'A backend authentication API built with C# handling user registration, login, and secure token-based authentication for web applications.',
    tech: ['C#'],
    live: null,
    github: 'https://github.com/Toluwani2024/authApi',
    tag: 'Personal Project',
    image: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-8 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <p className="text-[#5BB8F5] font-semibold tracking-widest text-sm uppercase mb-3">
          My Work
        </p>

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          Projects That <span className="text-[#5BB8F5]">Speak</span> For Me.
        </h2>
        <p className="text-gray-500 text-lg max-w-xl mb-16">
          A selection of real projects — built with care, clean code, and purpose.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col bg-white rounded-2xl border-2 border-gray-100 hover:border-[#5BB8F5] hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Thumbnail */}
              {project.image ? (
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="w-full h-48 bg-[#1A1A1A] flex flex-col items-center justify-center gap-3 px-6">
                  <p className="text-4xl">⚙️</p>
                  <p className="text-white font-black text-center">{project.title}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold text-[#5BB8F5] border border-[#5BB8F5] px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-6">

                {/* Tag */}
                <span className="text-xs font-semibold text-[#5BB8F5] uppercase tracking-widest mb-3">
                  {project.tag}
                </span>

                {/* Title */}
                <h3 className="text-lg font-black text-gray-900 mb-2 group-hover:text-[#5BB8F5] transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold text-gray-500 border border-gray-200 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-500 leading-relaxed flex-1 mb-6 text-sm">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-4">
                  {project.live && (
                    
                    <a  href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center bg-[#5BB8F5] text-white font-bold py-3 rounded-full hover:bg-[#3aa3e3] transition-colors duration-200 text-sm"
                    >
                      Live Site →
                    </a>
                  )}
                  {project.github && (
                    
                    <a  href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center border-2 border-gray-900 text-gray-900 font-bold py-3 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200 text-sm"
                    >
                      GitHub →
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-lg mb-6">
            Want to see more? Check out my GitHub.
          </p>
          
          <a href="https://github.com/Toluwani2024"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 font-bold px-8 py-4 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-200"
          >
            View GitHub Profile →
          </a>
        </div>

      </div>
    </section>
  )
}