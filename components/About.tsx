'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiDatabase, FiCloud, FiTrendingUp } from 'react-icons/fi'

const highlights = [
  {
    icon: FiCode,
    title: 'Full Stack Development',
    description: 'Building scalable web applications with React, Next.js, Django, and FastAPI',
  },
  {
    icon: FiDatabase,
    title: 'Data Analytics',
    description: 'Transforming complex data into actionable insights using Python and ML',
  },
  {
    icon: FiCloud,
    title: 'Cloud & DevOps',
    description: 'Deploying applications on AWS with CI/CD pipelines and containerization',
  },
  {
    icon: FiTrendingUp,
    title: 'ML Engineering',
    description: 'Developing ML models with PyTorch and scikit-learn for production systems',
  },
]

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" ref={ref} className="section-padding bg-soothing-sand">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-6"></div>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-5xl mx-auto">
            <p className="text-lg text-slate-600 flex-1 text-center lg:text-left">
              I'm a passionate Full Stack Developer and Data Analyst with expertise in building
              scalable web applications and leveraging data insights. Currently pursuing my Master's
              in Computer Science at Binghamton University, I combine technical skills with a
              problem-solving mindset to deliver impactful solutions.
            </p>
            <div className="flex-shrink-0 w-full max-w-xs lg:max-w-sm">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-white/30 bg-white/60 backdrop-blur-sm">
                <img src="/decoration/about-illustration.png" alt="" className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Highlight grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 bg-white/75 backdrop-blur-xl rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group border border-white/30 hover:border-teal-200/60 flex flex-col"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-sm">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-800">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-1">{item.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-8 bg-gradient-to-r from-teal-600/95 to-emerald-600/95 backdrop-blur-sm rounded-2xl text-white shadow-sm border border-white/20"
        >
          <h3 className="text-2xl font-bold mb-4">What I Do</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="mb-4">
                I specialize in developing end-to-end web applications, from designing intuitive
                user interfaces to building robust backend systems. My experience includes working
                with modern frameworks like React, Next.js, and Django to create high-performance
                applications.
              </p>
              <p>
                On the data side, I excel at analyzing complex datasets, building ETL pipelines,
                and developing machine learning models. I've worked on projects processing thousands
                of records and delivering insights that drive decision-making.
              </p>
            </div>
            <div>
              <p className="mb-4">
                I'm passionate about cloud technologies and DevOps practices. I've deployed
                applications on AWS, implemented CI/CD pipelines, and containerized services using
                Docker. This ensures scalable, maintainable, and efficient systems.
              </p>
              <p>
                Currently, I'm working as a Data Analyst at Global Health Impact, where I'm
                contributing to impactful health data projects while continuing to expand my
                technical expertise.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
