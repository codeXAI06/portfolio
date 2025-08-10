import React from 'react'
import profilePicture from '../assets/picture.png'
import resumeFile from '../assets/resume.pdf'
import { useTheme } from '../contexts/ThemeContext'



const Hero = () => {
    const { isDarkMode, toggleTheme } = useTheme()
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'Vijay_Kumar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className={`min-h-screen flex items-center justify-center px-6 py-12 pt-24 lg:pt-24 transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-slate-50 to-blue-50'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className={`text-3xl md:text-5xl font-bold leading-tight transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                I craft digital experiences that{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  inspire & deliver
                </span>
              </h1>
              
              <p className={`text-md md:text-lg leading-relaxed max-w-lg transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Full-stack developer passionate about building scalable applications 
                and seamless user experiences. I transform complex problems into 
                elegant, efficient solutions that drive business growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center inline-block"
              >
                <span className="relative z-10">View My Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-700 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <button
                onClick={handleDownloadResume}
                className={`px-8 py-4 border-2 font-semibold rounded-lg transition-all duration-300 text-center inline-block ${
                  isDarkMode 
                    ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400' 
                    : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                Download Resume
              </button>
            </div>

            {/* Tech Stack */}
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-lg"></div>
              
              {/* Main image container */}
              <div className={`relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 shadow-2xl transition-colors duration-300 ${
                isDarkMode 
                  ? 'border-gray-700 bg-gradient-to-br from-gray-800 to-gray-700' 
                  : 'border-white bg-gradient-to-br from-blue-100 to-purple-100'
              }`}>
                {/* Placeholder for profile image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
                  <div className="text-center">
                      <img
                        src={profilePicture} 
                        alt="Profile Picture"
                        className="w-60 h-full scale-250 object-cover rounded-full transform translate-x-[40%] translate-y-[-2%] lg:translate-x-[40%] lg:translate-y-[-10%]"
                      />

                  </div>
                </div>
                
                {/* Replace above div with actual image when you have one */}
                {/* <img 
                  src="/path-to-your-image.jpg" 
                  alt="Your Name" 
                  className="w-full h-full object-cover"
                /> */}
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-pink-400 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute top-1/2 -left-8 w-10 h-10 bg-green-400 rounded-full animate-ping shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero