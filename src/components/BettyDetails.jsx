import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import bettylaptop1 from '../assets/bettylaptop1.png'
import bettylaptop2 from '../assets/bettylaptop2.png'
import bettytelefono1 from '../assets/bettytelefono1.png'
import bettytelefono2 from '../assets/bettytelefono2.png'
import bettypc from '../assets/bettypc.png'

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

const BettyDetails = () => {
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

  const scrollToTop = () => {
    const element = document.getElementById('betty-title')
    if (element) {
      const yOffset = -100; // Adjust this value to scroll a bit higher
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  return (
    <motion.section
      className="max-w-6xl mx-auto p-8 bg-gradient-to-tr from-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-black text-appleBlack dark:text-gray-200 rounded-2xl shadow-2xl dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] mt-0 mb-0 font-sf-pro backdrop-blur-md"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Arial, sans-serif' }}
    >
      <motion.h1
        id="betty-title"
        className="text-5xl font-extrabold mb-8 text-center tracking-tight"
        variants={itemVariants}
      >
        BETTY AI CHATBOT
      </motion.h1>
      <motion.p className="mb-6 text-xl max-w-4xl mx-auto leading-relaxed" variants={itemVariants}>
        <strong>Finalidad:</strong> Ayudar a equipos consultores a diagnosticar el nivel de madurez digital de una empresa y proporcionar recomendaciones personalizadas que impulsen su transformación hacia entornos más competitivos, eficientes y digitales.
      </motion.p>
      <motion.div
  className="mb-6 text-xl max-w-4xl mx-auto leading-relaxed"
  variants={itemVariants}
>
  <strong className="block mb-2">Funcionalidad:</strong>
  <motion.ul className="list-disc list-inside space-y-2">
    <motion.li>Interfaz web responsiva con diseño limpio y profesional.</motion.li>
    <motion.li>Sistema de preguntas guiadas para evaluar distintas áreas digitales de una empresa.</motion.li>
    <motion.li>Motor de IA basado en LLaMA 3, afinado mediante ingeniería de prompts.</motion.li>
    <motion.li>Generación de respuestas adaptadas al contexto del usuario.</motion.li>
    <motion.li>Seguridad de datos garantizada durante toda la conversación.</motion.li>
  </motion.ul>
</motion.div>

      <motion.p className="mb-12 text-xl max-w-4xl mx-auto leading-relaxed" variants={itemVariants}>
        <strong>Descripción:</strong> Betty AI es una asistente virtual especializada en transformación digital, diseñada para evaluar el estado actual de digitalización de empresas y guiarlas mediante recomendaciones estratégicas personalizadas. Este proyecto fue desarrollado en solo 48 horas durante la Hackathon Barranquilla AI 2024, logrando el 4.º puesto entre más de 20 equipos participantes.

Betty utiliza el modelo LLaMA 3 como base, ajustado con técnicas avanzadas de prompting para comportarse como una consultora digital inteligente. Su interfaz moderna fue construida con React, animaciones con Framer Motion y estilos con TailwindCSS, asegurando una experiencia fluida tanto en desktop como en dispositivos móviles.

El objetivo principal de Betty es empoderar a equipos consultores y empresas que buscan iniciar o mejorar su transformación digital, proporcionando diagnósticos confiables, rápidos y accionables.
      </motion.p>

      <motion.div
        ref={carouselRef}
        className="flex overflow-x-auto space-x-8 max-w-full pb-4 scrollbar-hide"
        variants={itemVariants}
      >
        {[bettypc, bettylaptop1, bettylaptop2, bettytelefono1, bettytelefono2, bettypc, bettylaptop1, bettylaptop2, bettytelefono1, bettytelefono2].map((src, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 rounded-3xl shadow-lg bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 p-4 cursor-pointer border border-gray-300 dark:border-gray-700"
            variants={imageVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
          >
            <img
              src={src}
              alt={`Betty AI Chatbot View ${idx + 1}`}
              className="rounded-xl max-h-80 object-contain"
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-12 space-x-4">
        <button
          onClick={() => window.location.href = '/'}
          className="px-10 py-4 rounded-3xl border border-gray-700 dark:border-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 backdrop-blur-sm bg-white/40 dark:bg-black/40 shadow-lg dark:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
        >
          Volver
        </button>
      </div>
    </motion.section>
  )
}

export default BettyDetails
