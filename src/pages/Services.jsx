import React, { useState, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const Services = () => {
  const [animateOnView, setAnimateOnView] = useState(false)
  const [hoveredService, setHoveredService] = useState(null)
  const { isDarkMode } = useTheme()

  // Services data based on your tech stack
  const services = [
    {
      id: 1,
      title: "Frontend Development",
      description: "Create stunning, responsive, and interactive user interfaces using modern frameworks and libraries.",
      icon: "🎨",
      features: [
        "Responsive Web Design",
        "React.js Applications",
        "Modern CSS & Animations",
        "Cross-browser Compatibility",
        "Performance Optimization"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100"
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Build robust, scalable server-side applications and APIs to power your digital solutions.",
      icon: "⚙️",
      features: [
        "RESTful API Development",
        "Database Design & Management",
        "Server Configuration",
        "Authentication & Security",
        "Third-party Integrations"
      ],
      technologies: ["Node.js", "Python", "Java", "MongoDB"],
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100"
    },
    {
      id: 3,
      title: "Full-Stack Development",
      description: "End-to-end web application development from conception to deployment with complete functionality.",
      icon: "🚀",
      features: [
        "Complete Web Applications",
        "Database Integration",
        "User Authentication",
        "Payment Integration",
        "Deployment & Hosting"
      ],
      technologies: ["React", "Node.js", "MongoDB", "JavaScript"],
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100"
    },
    {
      id: 4,
      title: "Web Application Development",
      description: "Custom web applications tailored to your business needs with modern technologies and best practices.",
      icon: "💻",
      features: [
        "Custom Business Solutions",
        "E-commerce Platforms",
        "Content Management Systems",
        "Dashboard & Analytics",
        "Real-time Features"
      ],
      technologies: ["React", "Node.js", "JavaScript", "CSS"],
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100"
    },
    {
      id: 5,
      title: "API Development & Integration",
      description: "Design and develop powerful APIs and integrate third-party services to enhance your applications.",
      icon: "🔗",
      features: [
        "RESTful API Design",
        "Third-party API Integration",
        "Documentation & Testing",
        "Rate Limiting & Security",
        "Microservices Architecture"
      ],
      technologies: ["Node.js", "Python", "Java", "MongoDB"],
      gradient: "from-teal-500 to-blue-500",
      bgColor: "bg-teal-50",
      iconBg: "bg-teal-100"
    },
    {
      id: 6,
      title: "Website Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support to keep your website running smoothly.",
      icon: "🛠️",
      features: [
        "Regular Updates & Patches",
        "Performance Monitoring",
        "Bug Fixes & Troubleshooting",
        "Security Audits",
        "Technical Support"
      ],
      technologies: ["All Technologies", "DevOps", "Monitoring"],
      gradient: "from-gray-500 to-gray-700",
      bgColor: "bg-gray-50",
      iconBg: "bg-gray-100"
    }
  ]

  // Animate on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateOnView(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('services')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className={`py-20 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-white to-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Services</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Comprehensive web development services to bring your ideas to life with cutting-edge technologies and best practices
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isDarkMode 
                  ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' 
                  : `${service.bgColor} border border-gray-100 hover:border-gray-200`
              } ${
                animateOnView ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Service Icon */}
              <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                isDarkMode 
                  ? 'bg-gray-700' 
                  : service.iconBg
              }`}>
                <span className="text-3xl">{service.icon}</span>
              </div>

              {/* Service Title */}
              <h3 className={`text-2xl font-bold mb-4 transition-all duration-300 ${
                isDarkMode 
                  ? 'text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text' 
                  : 'text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text'
              }`}>
                {service.title}
              </h3>

              {/* Service Description */}
              <p className={`mb-6 line-height-relaxed transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {service.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className={`font-semibold mb-3 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-200' : 'text-gray-800'
                }`}>Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 text-xs font-medium rounded-md border transition-colors duration-300 ${
                        isDarkMode 
                          ? 'bg-gray-700/60 backdrop-blur-sm text-gray-300 border-gray-600' 
                          : 'bg-white/60 backdrop-blur-sm text-gray-700 border-gray-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Particles */}
              {hoveredService === service.id && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping opacity-60"
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${i * 150}ms`,
                        animationDuration: '1.5s'
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              My Development Process
            </h3>
            <p className={`text-lg transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              A streamlined approach to deliver high-quality results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and goals", icon: "🔍" },
              { step: "02", title: "Planning", description: "Creating detailed project roadmap and timeline", icon: "📋" },
              { step: "03", title: "Development", description: "Building your solution with best practices", icon: "💻" },
              { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support", icon: "🚀" }
            ].map((process, index) => (
              <div
                key={index}
                className={`text-center group ${
                  animateOnView ? 'animate-fadeInUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 6) * 150}ms` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-lg">
                    {process.icon}
                  </div>
                </div>
                <h4 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>{process.title}</h4>
                <p className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .line-height-relaxed {
          line-height: 1.7;
        }
      `}</style>
    </section>
  )
}

export default Services
