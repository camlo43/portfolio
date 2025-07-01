import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BettyDetails from './components/BettyDetails'
import SmartKingdomDetails from './components/SmartkingdomDetails'

import { useLocation } from 'react-router-dom'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-appleWhite dark:bg-appleBlack text-appleBlack dark:text-appleWhite transition-colors duration-500 font-sans">
      <AnimatePresence mode="wait">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Projects />
                <Skills />
                <About />
                <Contact />
                <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
              </>
            }
          />
          <Route path="/betty" element={<BettyDetails />} />
          <Route path="/smartkingdom" element={<SmartKingdomDetails />} /> {/* ✅ Ruta añadida */}
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App