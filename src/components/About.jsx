import React from 'react'
import { motion } from 'framer-motion'
import memojiLaptop from '../assets/memoji-laptop.png'

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black text-appleBlack dark:text-gray-200 flex flex-col md:flex-row items-center justify-center">
      <motion.img
        src={memojiLaptop}
        alt="Camilo Memoji Laptop"
        className="w-48 h-48 mb-8 md:mb-0 md:mr-12"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-4xl font-semibold mb-6">Sobre mí</h2>
        <p className="mb-6">
        Soy Camilo Chaves, desarrollador frontend en formación, apasionado por crear interfaces modernas, limpias y funcionales que realmente conecten con los usuarios.

Trabajo con soltura tanto en Windows/Android como en macOS/iOS, lo que me permite adaptar soluciones efectivas según el ecosistema. Exploro activamente el uso de la inteligencia artificial aplicada al frontend, buscando que cada experiencia sea más inteligente, dinámica y personalizada.

Actualmente, me enfoco en el desarrollo full stack con una marcada orientación al frontend, utilizando herramientas como React, Vite, TailwindCSS y Framer Motion para construir interfaces responsive, eficientes y con diseño impecable.

🚀 No solo escribo código. Diseño experiencias que comunican, conectan y sorprenden.
        </p>
        <a
          href="/assets/CamiloJoseChavesJimenez_CV.pdf"
          download
          className="inline-block px-6 py-3 rounded-full border border-gray-700 dark:border-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 backdrop-blur-sm bg-white/40 dark:bg-black/40"
        >
          Descargar CV
        </a>
      </div>
    </section>
  )
}

export default About
