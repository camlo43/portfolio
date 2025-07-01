import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si'

const skills = [
  { name: 'React', icon: <FaReact size={24} color="#61dafb" /> },
  { name: 'Tailwind', icon: <SiTailwindcss size={24} color="#38b2ac" /> },
  { name: 'Node.js', icon: <FaNodeJs size={24} color="#68a063" /> },
  { name: 'MongoDB', icon: <SiMongodb size={24} color="#4db33d" /> },
  { name: 'Express', icon: <SiExpress size={24} color="#000000" /> },
  { name: 'Database', icon: <FaDatabase size={24} color="#f59e0b" /> },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-appleWhite dark:bg-appleBlack text-appleBlack dark:text-appleWhite rounded-2xl shadow-lg dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-sm transition-all duration-500">
      <h2 className="text-4xl font-semibold mb-12 text-center">Fortalezas</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map(({ name, icon }, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white/40 dark:bg-black/40 backdrop-blur-sm rounded-lg px-6 py-4 cursor-pointer shadow-md dark:shadow-[0_0_15px_rgba(255,255,255,0.15)]"
            whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(255,255,255,0.6)' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {icon}
            <span className="mt-2 text-lg font-medium">{name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
