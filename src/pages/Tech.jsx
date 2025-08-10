import React, { useState, useEffect } from 'react'
import { useTheme } from '../contexts/ThemeContext'

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null)
  const [animateOnView, setAnimateOnView] = useState(false)
  const { isDarkMode } = useTheme()

  // Tech stack data with custom properties
  const techStack = [
    {
      name: 'HTML',
      category: 'Frontend',
      level: 95,
      color: 'from-orange-500 to-red-500',
      icon: '🌐',
      bgColor: 'bg-orange-100',
      description: 'Semantic markup and web standards'
    },
    {
      name: 'CSS',
      category: 'Frontend',
      level: 90,
      color: 'from-blue-500 to-cyan-500',
      icon: '🎨',
      bgColor: 'bg-blue-100',
      description: 'Modern styling and animations'
    },
    {
      name: 'JavaScript',
      category: 'Frontend',
      level: 88,
      color: 'from-yellow-400 to-orange-500',
      icon: '⚡',
      bgColor: 'bg-yellow-100',
      description: 'ES6+ and modern JavaScript'
    },
    {
      name: 'React',
      category: 'Frontend',
      level: 92,
      color: 'from-blue-400 to-cyan-400',
      icon: '⚛️',
      bgColor: 'bg-cyan-100',
      description: 'Component-based UI development'
    },
    {
      name: 'Node.js',
      category: 'Backend',
      level: 85,
      color: 'from-green-500 to-emerald-500',
      icon: '🟢',
      bgColor: 'bg-green-100',
      description: 'Server-side JavaScript runtime'
    },
    {
      name: 'MongoDB',
      category: 'Database',
      level: 80,
      color: 'from-green-600 to-green-700',
      icon: '🍃',
      bgColor: 'bg-green-100',
      description: 'NoSQL database management'
    },
    {
      name: 'Java',
      category: 'Backend',
      level: 83,
      color: 'from-red-500 to-orange-600',
      icon: '☕',
      bgColor: 'bg-red-100',
      description: 'Object-oriented programming'
    },
    {
      name: 'Python',
      category: 'Backend',
      level: 87,
      color: 'from-blue-600 to-yellow-500',
      icon: '🐍',
      bgColor: 'bg-blue-100',
      description: 'Versatile programming language'
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
      { threshold: 0.3 }
    )

    const element = document.getElementById('tech-stack')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Group technologies by category
  const groupedTech = techStack.reduce((acc, tech) => {
    if (!acc[tech.category]) acc[tech.category] = []
    acc[tech.category].push(tech)
    return acc
  }, {})

  return (
    <section id="tech-stack" className={`py-20 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-gray-50 to-blue-50'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My Tech
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Arsenal</span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            A comprehensive toolkit of technologies I use to build exceptional digital experiences
          </p>
        </div>

        {/* Tech Grid - Hexagon Layout */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-110 ${
                  animateOnView ? 'animate-fadeInUp' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                {/* Rounded Container */}
                <div className={`relative w-24 h-24 mx-auto ${tech.bgColor} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
                  
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} rounded-full opacity-0 group-hover:opacity-20 transition-all duration-300`}></div>
                  
                  {/* Icon */}
                  <div className="relative z-10 text-3xl transition-all duration-300">
                    {tech.icon}
                  </div>
                  
                  {/* Skill Level Ring */}
                  <div className="absolute -inset-2">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="rgba(229, 231, 235, 0.3)"
                        strokeWidth="2"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        strokeDasharray={`${tech.level * 2.83} 283`}
                        className="transition-all duration-1000 ease-out"
                        style={{
                          strokeDasharray: animateOnView ? `${tech.level * 2.83} 283` : '0 283'
                        }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full animate-ping"
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          animationDelay: `${i * 200}ms`,
                          animationDuration: '1s'
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Tech Name */}
                <div className="text-center mt-4">
                  <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-500">{tech.level}%</p>
                </div>

                {/* Tooltip */}
                {hoveredTech?.name === tech.name && (
                  <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap z-20 animate-fadeIn">
                    {tech.description}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedTech).map(([category, techs], index) => (
            <div
              key={category}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                animateOnView ? 'animate-slideUp' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
                {category}
              </h3>
              <div className="space-y-3">
                {techs.map((tech) => (
                  <div key={tech.name} className="flex items-center space-x-3">
                    <div className={`w-8 h-8 ${tech.bgColor} rounded-lg flex items-center justify-center text-sm`}>
                      {tech.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                        <span className="text-xs text-gray-500">{tech.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                        <div
                          className={`bg-gradient-to-r ${tech.color} h-1.5 rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: animateOnView ? `${tech.level}%` : '0%'
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Tech Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Tech Proficiency Overview</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className={`px-4 py-2 rounded-full bg-gradient-to-r ${tech.color} text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 cursor-pointer`}
                style={{
                  fontSize: `${0.8 + (tech.level / 100) * 0.5}rem`,
                  opacity: animateOnView ? 1 : 0,
                  transform: animateOnView ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {tech.icon} {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

export default Tech