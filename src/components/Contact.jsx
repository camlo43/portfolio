import React, { useState } from 'react'
import memojiLlamada from '../assets/memoji-llamada.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Mensaje enviado. ¡Gracias por contactarme!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-appleWhite dark:bg-appleBlack text-appleBlack dark:text-white">
      <h2 className="text-4xl font-semibold mb-12 text-center">Contacto</h2>
      <div className="flex flex-col md:flex-row items-center justify-center max-w-4xl mx-auto gap-12">
        <img
          src={memojiLlamada}
          alt="Memoji Llamada"
          className="w-48 h-48 rounded-full"
        />
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Correo"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className="p-3 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full border border-gray-700 dark:border-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300 backdrop-blur-xs bg-white/30 dark:bg-black/30"
          >
            Enviar
          </button>
        </form>
      </div>

    </section>
  )
}

export default Contact
