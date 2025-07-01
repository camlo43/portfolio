import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import betty from '../assets/betty-ai-chatbot.png'
import smartkingdom from '../assets/Smart-Kingdom-final.png'
import cuc from '../assets/cuc.png'
import memojiIdea from '../assets/memoji-idea.png'

const projects = [
  {
    id: 1,
    title: 'BETTY AI CHATBOT',
    description: 'Asistente virtual desarrollada con IA para evaluar la madurez digital de empresas y guiarlas en su transformación digital. Construida con React y LLaMA 3 durante la Hackathon Barranquilla AI 2024, donde obtuvo el 4.º puesto.',
    technologies: ['Python', 'Llama3'],
    image: betty,
    url: '/betty'
  },
  {
    id: 2,
    title: 'SMART KINGDOM WEBSITE',
    description: 'Plataforma web interactiva desarrollada para el preescolar Smart Kingdom, con login jerárquico para administradores, docentes y padres. Incluye gestión de salones, notas, estudiantes y recursos, todo con una interfaz moderna y responsiva.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    image: smartkingdom,
    url: '/smartkingdom'
  },
  {
    id: 3,
    title: 'EVALUA TU DOCENTE CUC',
    description: 'Descripción corta del proyecto tres.',
    technologies: ['React', 'Framer Motion', 'Vite'],
    image: cuc
  },
  {
    id: 4,
    title: '',
    description: 'Descripción corta del proyecto tres.',
    technologies: ['React', 'Framer Motion', 'Vite'],
    image: cuc
  },
  {
    id: 5,
    title: 'NOTICIAS ESPORTS',
    description: 'Descripción corta del proyecto tres.',
    technologies: ['React', 'Framer Motion', 'Vite'],
    image: cuc
  },
  {
    id: 6,
    title: 'SISTEMA DE PEDIDOS RESTAURANTE',
    description: 'Descripción corta del proyecto tres.',
    technologies: ['React', 'Framer Motion', 'Vite'],
    image: cuc
  }
]

const Projects = () => {
  const navigate = useNavigate()

  const handleProjectClick = (path, elementId) => {
    navigate(path)
    // El scroll solo lo hará la página destino, ya no lo forzamos desde aquí
  }

  return (
    <section id="projects" className="py-10 px-6 md:px-10 bg-gradient-to-tr from-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-black text-appleBlack dark:text-gray-200 rounded-2xl shadow-lg dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-sm transition-all duration-500">
      <h2 className="text-4xl font-semibold mb-6 text-center">Proyectos Destacados</h2>
      <img src={memojiIdea} alt="Idea Memoji" className="mx-auto mb-12 w-30 h-40" />
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map(({ id, title, description, technologies, image, url }) => (
          <motion.div
            key={id}
            className="bg-white/30 dark:bg-black/30 backdrop-blur-xs rounded-xl shadow-lg overflow-hidden flex flex-col"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="flex-grow mb-4">{description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {title === 'BETTY AI CHATBOT' ? (
                <button
                  onClick={() => handleProjectClick('/betty')}
                  className="mt-auto inline-block text-center px-6 py-2 border border-gray-700 dark:border-gray-300 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                >
                  Ver más
                </button>
              ) : title === 'SMART KINGDOM WEBSITE' ? (
                <button
                  onClick={() => handleProjectClick('/smartkingdom')}
                  className="mt-auto inline-block text-center px-6 py-2 border border-gray-700 dark:border-gray-300 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
                >
                  Ver más
                </button>
              ) : (
                <a
                  href="#"
                  className="mt-auto inline-block text-center px-6 py-2 border border-gray-700 dark:border-gray-300 rounded-full font-semibold cursor-not-allowed opacity-50"
                  onClick={e => e.preventDefault()}
                >
                  Ver más
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
