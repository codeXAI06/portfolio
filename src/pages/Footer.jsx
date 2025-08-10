import React, { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import emailjs from '@emailjs/browser'

const Footer = () => {
  const { isDarkMode } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // EmailJS configuration (you'll need to set up your EmailJS account)
      // Replace these with your actual EmailJS service ID, template ID, and public key
      const serviceID = 'your_service_id'
      const templateID = 'your_template_id'
      const publicKey = 'your_public_key'
      
      // For now, we'll use a fallback mailto approach
      // To use EmailJS properly, you'll need to:
      // 1. Create an account at https://www.emailjs.com/
      // 2. Create a service (Gmail, Outlook, etc.)
      // 3. Create an email template
      // 4. Replace the IDs above with your actual values
      
      // Fallback: Create a more detailed email content
      const emailContent = `
Portfolio Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from your portfolio website contact form.
Timestamp: ${new Date().toLocaleString()}
      `
      
      // Use mailto link to send email
      const mailtoLink = `mailto:vijayimp123kk@gmail.com?subject=${encodeURIComponent(`Portfolio Contact: ${formData.subject}`)}&body=${encodeURIComponent(emailContent)}`
      
      // Open email client
      window.open(mailtoLink, '_blank')
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error sending email:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Social media and contact links
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://www.linkedin.com/in/thakur-vijay-kumar-singh-35684b299',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: '📸',
      url: 'https://instagram.com/yourhandle',
      color: 'hover:text-pink-500'
    },
    {
      name: 'GitHub',
      icon: '👨‍💻',
      url: 'https://github.com/codeXAI06',
      color: 'hover:text-gray-800'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: 'https://twitter.com/yourhandle',
      color: 'hover:text-blue-400'
    }
  ]

  const contactInfo = [
    {
      type: 'Email',
      value: 'vijayimp123kk@gmail.com',
      icon: '✉️',
      link: 'mailto:vijayimp123kk@gmail.com'
    },
    {
      type: 'Phone',
      value: '+91 9000523252',
      icon: '📞',
      link: 'tel:+919000523252'
    },
    {
      type: 'Location',
      value: 'Hyderbad, India',
      icon: '📍',
      link: '#'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer id="contact" className={`transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gray-900 text-white border-t border-gray-800' 
        : 'bg-gray-50 text-gray-900 border-t border-gray-200'
    }`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Side - Contact Info & Links */}
          <div className="space-y-8">
            {/* Brand Section */}
            <div>
              <h3 className={`text-3xl font-bold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Let's Build Something
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Amazing</span>
              </h3>
              <p className={`text-lg leading-relaxed transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Ready to turn your ideas into reality? I'm here to help you create exceptional digital experiences 
                that make an impact. Let's connect and discuss your next project.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Get In Touch</h4>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    className={`flex items-center space-x-3 transition-colors duration-300 group ${
                      isDarkMode 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </span>
                    <div>
                      <span className={`text-sm transition-colors duration-300 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>{contact.type}</span>
                      <p className="font-medium">{contact.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`hover:translate-x-2 transition-all duration-300 py-1 ${
                      isDarkMode 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 ${
                      isDarkMode 
                        ? 'bg-gray-800 hover:bg-gray-700' 
                        : 'bg-gray-200 hover:bg-gray-300'
                    } ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className={`rounded-2xl p-8 border transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-gray-800 border-gray-700' 
              : 'bg-white border-gray-200 shadow-lg'
          }`}>
            <h4 className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>Send me a message</h4>
            
            {submitStatus === 'success' && (
              <div className={`p-4 rounded-lg mb-6 animate-fade-in border ${
                isDarkMode 
                  ? 'bg-green-800 text-green-100 border-green-700' 
                  : 'bg-green-100 text-green-800 border-green-200'
              }`}>
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className={`p-4 rounded-lg mb-6 animate-fade-in border ${
                isDarkMode 
                  ? 'bg-red-800 text-red-100 border-red-700' 
                  : 'bg-red-100 text-red-800 border-red-200'
              }`}>
                ❌ Failed to send message. Please try again or contact me directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-blue-700 hover:to-purple-700'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Vijay Kumar. All rights reserved.</p>
              <p className="text-sm mt-1">Built with ❤️ using React & Tailwind CSS</p>
            </div>
            
            <div className="flex items-center space-x-6 text-gray-400">
              <a href="#" className={`transition-colors duration-300 ${
                isDarkMode ? 'hover:text-gray-300' : 'hover:text-white'
              }`}>Privacy Policy</a>
              <a href="#" className={`transition-colors duration-300 ${
                isDarkMode ? 'hover:text-gray-300' : 'hover:text-white'
              }`}>Terms of Service</a>
              <button 
                onClick={scrollToTop}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Back to Top</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style >{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </footer>
  )
}

export default Footer
