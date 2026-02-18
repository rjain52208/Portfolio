'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiDownload, FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'
import { useInView } from 'react-intersection-observer'

const roles = ['Full Stack Developer', 'Data Analyst', 'ML Engineer', 'Cloud Architect']

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-6"
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <div className="w-32 h-32 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 p-1 shadow-lg">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-4xl font-bold text-gradient">
                RJ
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            <span className="text-gradient">Riddhi Jain</span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-4xl font-semibold mb-8 h-16 md:h-20 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <motion.span
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-teal-600"
            >
              {roles[currentRole]}
            </motion.span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 mb-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            Building scalable web applications and leveraging data insights to drive impactful solutions.
            Currently pursuing Master's in Computer Science at Binghamton University.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-teal-700 hover:shadow-md transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail className="w-5 h-5" />
              Get In Touch
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download="Riddhi_Jain_Resume.pdf"
              className="px-8 py-3 bg-white border-2 border-teal-600 text-teal-600 rounded-lg font-semibold flex items-center gap-2 hover:bg-teal-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="w-5 h-5" />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="https://www.linkedin.com/in/riddhijain2208"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-teal-600 hover:text-white transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:rjain5@binghamton.edu"
              className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-teal-600 hover:text-white transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiMail className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-100 text-slate-600 hover:bg-teal-600 hover:text-white transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
          </div>

          {/* Decorative workspace illustration - visible on larger screens */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block flex-1 max-w-md xl:max-w-lg"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/30 bg-white/50 backdrop-blur-sm">
              <img
                src="/decoration/hero-illustration.png"
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-teal-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
