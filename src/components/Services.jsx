const services = [
  {
    icon: '🌐',
    title: 'Website Development',
    description:
      'From landing pages to full web applications — I build fast, responsive, and scalable websites that look great on every device and deliver real results.',
  },
  {
    icon: '🎨',
    title: 'Frontend Development',
    description:
      'Pixel-perfect UIs built with React and Tailwind CSS. I turn designs into smooth, interactive experiences that users love to use.',
  },
  {
    icon: '🔌',
    title: 'API Integration',
    description:
      'I connect your frontend to any backend or third-party service — payment gateways, data feeds, authentication systems and more.',
  },
  {
    icon: '🛠️',
    title: 'Website Maintenance',
    description:
      'Already have a website? I keep it fast, secure, and up to date — fixing bugs, improving performance, and adding new features as you grow.',
  },
  {
    icon: '✏️',
    title: 'UI/UX Design',
    description:
      'Using Figma, I design clean and intuitive interfaces before a single line of code is written — saving time and ensuring the final product feels right.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-8 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Label */}
        <p className="text-[#5BB8F5] font-semibold tracking-widest text-sm uppercase mb-3">
          What I Do
        </p>

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
          Services I Offer
        </h2>
        <p className="text-gray-500 text-lg max-w-xl mb-16">
          Every service is delivered with clean code, attention to detail,
          and a focus on your business goals.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-[#5BB8F5] hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-5">{service.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-[#5BB8F5] transition-colors duration-200">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-lg mb-6">
            Have a project in mind? Let's talk about it.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#5BB8F5] text-white font-bold px-8 py-4 rounded-full hover:bg-[#3aa3e3] transition-colors duration-200"
          >
            Start a Project →
          </a>
        </div>

      </div>
    </section>
  )
}