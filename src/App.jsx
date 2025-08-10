import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './pages/Hero.jsx'
import Navbar from './components/navbar.jsx'
import Tech from './pages/Tech.jsx'
import Projects from './pages/Projects.jsx'
import Services from './pages/Services.jsx'
import Footer from './pages/Footer.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 dark:bg-gray-900 bg-white">
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Services />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
