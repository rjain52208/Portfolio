'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi'

const experiences = [
  {
    title: 'Data Analyst',
    company: 'Global Health Impact',
    location: 'Binghamton, NY',
    period: 'Sep 2025 – Present',
    description: [
      'Co-designed and standardized the WHO TB-2017 workbook into a reusable entity map (country to strain to regimen to drug to company) with faculty/RA partners for cross-year reuse',
      'Co-developed Python/Pandas ETL to parse sheets, join "need" data, apply regimen weights, and export 4,991 normalized rows plus 868 rollup summaries to CSV through peer reviews',
      'Collaboratively computed per-drug impact scores (E, H, R, Z, MDR/XDR), reducing manual spreadsheet work by about 80% and aligning methods for drug-level comparisons',
    ],
    technologies: ['Python', 'Pandas', 'ETL', 'Data Analysis'],
    image: '/decoration/experience-health.png',
  },
  {
    title: 'Full Stack Developer',
    company: 'Imentus Technologies Pvt. Ltd',
    location: 'Indore, India',
    period: 'Feb 2023 – Dec 2024',
    description: [
      'Built real-time trading platform using Django REST + React to process 50,000+ monthly market data rows with PostgreSQL optimization, reducing query latency by 40% through indexed queries and connection pooling',
      'Engineered FastAPI microservices integrating ML models via BentoML for automated trade signals, delivering P/L predictions with 85% accuracy across production while handling 500+ API requests daily',
      'Deployed containerized services on AWS (EC2, S3) with GitHub Actions CI/CD pipeline, automating BUY/SELL execution and cutting deployment time by 60% while reducing manual intervention by 75%',
    ],
    technologies: ['Django', 'React', 'FastAPI', 'PostgreSQL', 'AWS', 'Docker', 'CI/CD', 'ML'],
    image: '/decoration/experience-trading.png',
  },
  {
    title: 'Graduate Assistant',
    company: 'Binghamton University School of Computing',
    location: 'Binghamton, NY',
    period: 'Aug 2025 – Dec 2025',
    description: [
      'Designed and maintained KPI dashboards for inventory flow and operational metrics, improving visibility and stakeholder reporting',
      'Collaborated with staff and partners to analyze program data, document definitions, and improve participation tracking',
    ],
    technologies: ['Data Analysis', 'Dashboard Design', 'KPI Metrics'],
    image: '/decoration/experience-dashboard.png',
  },
]

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="experience" ref={ref} className="section-padding bg-soothing-sand">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Building impactful solutions through full-stack development and data analytics
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="grid md:grid-cols-2 gap-8 items-stretch"
            >
              {/* Content card */}
              <div>
                <div className="p-6 bg-white/75 backdrop-blur-xl rounded-xl shadow-sm hover:shadow-md transition-shadow border border-white/30 h-full">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-teal-600">
                      {exp.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-slate-600">
                    <div className="flex items-center gap-2">
                      <FiExternalLink className="w-4 h-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiMapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FiCalendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <span className="text-teal-500 mt-1">●</span>
                        <span className="text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contextual illustration */}
              <div className="hidden md:block">
                <div className="w-full h-full min-h-[260px] overflow-hidden shadow-md border border-white/30 bg-white/60 backdrop-blur-sm rounded-2xl">
                  <img src={exp.image} alt="" className="w-full h-full object-cover object-center block" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
