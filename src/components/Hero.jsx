import React from 'react'
import { motion } from 'framer-motion'
import memojiSaludo from '../assets/memoji-saludo.png'

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-20 bg-appleWhite dark:bg-appleBlack text-appleBlack dark:text-appleWhite">
      <motion.img
        src={memojiSaludo}
        alt="Camilo Memoji"
        className="w-40 h-40 - mb-6 md:mb-0 md:mr-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="text-center md:text-left max-w-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-5xl md:text-6xl font-semibold mb-4">Camilo Jose Chaves Jimenez</h1>
        <p className="text-xl md:text-2xl mb-8">Systems Engineer | Frontend Developer | IOS Developer | Full Stack en progreso</p>
        <button
          onClick={scrollToProjects}
          className="px-8 py-3 rounded-full border border-gray-700 dark:border-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 backdrop-blur-sm bg-white/40 dark:bg-black/40"
        >
          Explorar
        </button>
      </motion.div>
    </section>
  )
}

export default Hero
