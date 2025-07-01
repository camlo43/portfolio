import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import smarttelefono11 from '../assets/smarttelefono11.png'
import smarttelefono22 from '../assets/smarttelefono22.png'
import smarttelefono3 from '../assets/smarttelefono3.png'
import smarttelefono33 from '../assets/smarttelefono33.png'
import smarttelefono from '../assets/smarttelefono.png'
import smarttelefono00 from '../assets/smarttelefono00.png'
import smartpc1 from '../assets/smartpc1.png'
import smartpc2 from '../assets/smartpc2.png'
import smartpc3 from '../assets/smartpc3.png'
import smartpc4 from '../assets/smartpc4.png'

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.35, duration: 0.7, ease: 'easeOut' } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.5, ease: 'easeIn' } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
}

const imageVariants = {
  hover: { scale: 1.05, transition: { duration: 0.4, yoyo: Infinity } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  hidden: { opacity: 0, y: 20 }
}

const SmartKingdomDetails = () => {
  const carouselRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const scrollContainer = carouselRef.current
    let animationFrameId
    let scrollAmount = 0

    const scrollStep = () => {
      if (scrollContainer) {
        scrollAmount += 1
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0
        }
        scrollContainer.scrollLeft = scrollAmount
      }
      animationFrameId = requestAnimationFrame(scrollStep)
    }

    animationFrameId = requestAnimationFrame(scrollStep)

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  // Igual que en Betty, definimos la función pero NO la usamos directamente
  const scrollToTop = () => {
    const element = document.getElementById('smart-title')
    if (element) {
      const yOffset = -100
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <motion.section
      className="max-w-6xl mx-auto p-8 bg-gradient-to-tr from-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-appleBlack dark:text-gray-200 rounded-3xl shadow-2xl dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] mt-0 mb-0 font-sf-pro backdrop-blur-md"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      <motion.h1
        id="smart-title"
        className="text-5xl font-extrabold mb-8 text-center tracking-tight"
        variants={itemVariants}
      >
        SMARTKINGDOM WEBSITE
      </motion.h1>

      <motion.p className="mb-6 text-xl max-w-4xl mx-auto leading-relaxed" variants={itemVariants}>
        <strong>Finalidad:</strong> Digitalizar la administración académica y la comunicación interna del preescolar Smart Kingdom, facilitando la gestión de salones, estudiantes, reportes y documentación para cada perfil (admin, docente y padre) desde una plataforma centralizada y segura.
      </motion.p>

      <motion.div
  className="mb-6 text-xl max-w-4xl mx-auto leading-relaxed"
  variants={itemVariants}
>
  <strong className="block mb-2">Funcionalidad:</strong>
  <motion.ul className="list-disc list-inside space-y-2">
    <motion.li>Autenticación jerárquica con tres roles: administrador, docente y padre.</motion.li>
    <motion.li>Gestión de salones, docentes asignados y estudiantes vinculados.</motion.li>
    <motion.li>Registro y consulta de notas semanales y por período académico.</motion.li>
    <motion.li>Acceso restringido a documentos internos y credenciales de cámaras escolares.</motion.li>
    <motion.li>Mapa interactivo, carrusel de imágenes y secciones informativas animadas.</motion.li>
    <motion.li>Diseño responsivo optimizado para desktop, tablet y móvil.</motion.li>
  </motion.ul>
</motion.div>


      <motion.p className="mb-12 text-xl max-w-4xl mx-auto leading-relaxed" variants={itemVariants}>
        <strong>Descripción:</strong> Smart Kingdom es una plataforma web completa desarrollada para el preescolar del mismo nombre. Este proyecto busca digitalizar la operación y comunicación interna del centro educativo mediante un sistema jerárquico de acceso que permite a los diferentes usuarios (administradores, docentes y padres) interactuar con la plataforma de acuerdo a su rol.

Desde el backend construido en Node.js + Express (Puerto 3001) y una base de datos MySQL, se gestiona toda la información académica, mientras que el frontend, desarrollado con React + Vite, ofrece una experiencia moderna, colorida y educativa. Se utilizaron herramientas como Framer Motion para animaciones, TailwindCSS para el diseño y React Router HashRouter para proteger rutas según los roles.

Incluye un carrusel de imágenes, mapa de ubicación del preescolar, secciones interactivas sobre valores y objetivos institucionales, y un sistema robusto para registrar y visualizar calificaciones de los estudiantes. Además, se prioriza la seguridad y la organización, permitiendo una mejor gestión educativa en tiempo real.
      </motion.p>

      <motion.div
        ref={carouselRef}
        className="flex overflow-x-auto space-x-8 max-w-full pb-4 scrollbar-hide"
        variants={itemVariants}
      >
        {[smartpc1, smartpc2, smartpc3, smartpc4, smarttelefono, smarttelefono00, smarttelefono11, smarttelefono22, smarttelefono3, smarttelefono33, smartpc1, smartpc2, smartpc3, smartpc4].map((src, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 rounded-2xl shadow-lg bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 p-4 cursor-pointer border border-gray-300 dark:border-gray-700"
            variants={imageVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
          >
            <img
              src={src}
              alt={`SmartKingdom View ${idx + 1}`}
              className="rounded-xl max-h-80 object-contain"
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-12 space-x-4">
        <button
          onClick={() => window.location.href = '/'}
          className="px-10 py-4 rounded-full border border-gray-700 dark:border-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 backdrop-blur-sm bg-white/40 dark:bg-black/40 shadow-lg dark:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
        >
          Volver
        </button>
      </div>
    </motion.section>
  )
}

export default SmartKingdomDetails
