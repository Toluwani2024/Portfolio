import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const contacts = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'lumeondev@gmail.com',
    href: 'mailto:lumeondev@gmail.com',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/Toluwani2024',
    href: 'https://github.com/Toluwani2024',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'Aderibigbe Toluwani',
    href: 'https://www.linkedin.com/in/aderibigbe-toluwani-b0bb31248',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <p className="text-[#5BB8F5] font-semibold tracking-widest text-sm uppercase mb-3">
          Get In Touch
        </p>

        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
          Let's Build Something <br />
          <span className="text-[#5BB8F5]">Great Together.</span>
        </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-xl mb-12">
          Have a project in mind or just want to say hi? My inbox is always
          open. I'll get back to you as soon as possible.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {contacts.map((contact) => {
            const Icon = contact.icon
            return (


              <a key={contact.label}
               href={contact.href}
                target={contact.label !== 'Email' ? '_blank' : undefined}
                rel="noreferrer"
                className="flex flex-row md:flex-col items-center md:items-start gap-4 p-6 rounded-2xl border-2 border-gray-100 hover:border-[#5BB8F5] hover:shadow-md active:scale-95 transition-all duration-200"
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#5BB8F5] bg-opacity-10 flex items-center justify-center text-[#5BB8F5]">
                  <Icon size={20} />
                </div>

                {/* Text */}
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                    {contact.label}
                  </p>
                  <p className="text-gray-900 font-bold text-sm break-all">
                    {contact.value}
                  </p>
                </div>
              </a>
            )
          })}
        </div>

        {/* CTA Banner */}
        <div className="bg-[#1A1A1A] rounded-3xl px-8 py-12 md:px-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-4xl font-black text-white mb-2">
              Ready to start a project?
            </h3>
            <p className="text-gray-400 text-base md:text-lg">
              Let's turn your idea into something real.
            </p>
          </div>
          
        <a  href="mailto:lumeondev@gmail.com"
            className="flex-shrink-0 whitespace-nowrap bg-[#5BB8F5] text-white font-bold px-8 py-4 rounded-full hover:bg-[#3aa3e3] active:scale-95 transition-all duration-200 text-base"
          >
            Send Me an Email →
          </a>
        </div>

      </div>
    </section>
  )
}