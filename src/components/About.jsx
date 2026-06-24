const stats = [
  { number: '1+', label: 'Year of Experience' },
  { number: '6', label: 'Projects Built' },
 
]

const skills = [
  'React',
  'JavaScript',
  'HTML & CSS',
  'Tailwind CSS',
  'Git & GitHub',
  'Node.js',
  'REST APIs',
  'Figma',
  'Next.js',
]

export default function About() {
  return (
    <section id="about" className="py-24 px-8 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <p className="text-[#5BB8F5] font-semibold tracking-widest text-sm uppercase mb-3">
          About Me
        </p>

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
          Passionate About Building <br />
          <span className="text-[#5BB8F5]">Things That Work.</span>
        </h2>

        {/* Bio + Stats — split layout */}
        <div className="flex flex-col md:flex-row gap-16 mb-16">

          {/* Bio */}
          <div className="flex-1">
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              I'm Toluwani — a Frontend-focused Full Stack Developer based in Nigeria.
              I started my journey over a year ago and haven't stopped building since.
              My focus is on creating web experiences that are fast, clean, and purposeful.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Every project I take on — whether a client job or a personal build —
              is an opportunity to solve a real problem with clean code and great design.
              I believe great software isn't just functional, it's something people enjoy using.
            </p>



            {/* Download CV Button */}
            <a
              href="/Toluwani_CV.pdf"
              download
              className="inline-flex items-center gap-2 bg-[#1A1A1A] text-white font-bold px-8 py-4 rounded-full hover:bg-[#5BB8F5] transition-colors duration-200"
            >
              Download CV
              <span>↓</span>
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-col justify-center gap-8 md:w-64">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-4 border-[#5BB8F5] pl-6">
                <p className="text-5xl font-black text-gray-900">{stat.number}</p>
                <p className="text-gray-500 font-medium mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>

        {/* Skills */}
        <div>
          <h3 className="text-xl font-black text-gray-900 mb-6 tracking-tight">
            My Toolkit
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-2 rounded-full text-sm font-semibold border-2 border-gray-900 text-gray-900 bg-white hover:bg-gray-900 hover:text-white transition-all duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}