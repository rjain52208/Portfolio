'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBook, FiCalendar, FiStar } from 'react-icons/fi'

const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Binghamton University, State University of New York',
    college: 'Thomas J. Watson College of Engineering and Applied Science',
    period: 'Expected Dec 2026',
    gpa: '3.66/4.00',
    coursework: [
      'Systems Programming',
      'NLP',
      'Design & Analysis of Algorithms',
      'Database Systems',
    ],
  },
  {
    degree: 'Bachelor of Technology in Computer Science and Technology',
    institution: 'Acropolis Institute of Technology & Research',
    college: '',
    period: 'May 2023',
    gpa: '',
    coursework: ['Data Structures and Algorithms', 'Object-Oriented Programming'],
  },
]

export default function Education() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="education" ref={ref} className="section-padding bg-soothing-sand">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Academic journey in Computer Science and Technology
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/75 backdrop-blur-xl rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow border border-white/30"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiBook className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-teal-600 font-semibold mb-1">
                    {edu.institution}
                  </p>
                  {edu.college && (
                    <p className="text-slate-600 mb-4">{edu.college}</p>
                  )}
                  
                  <div className="flex flex-wrap items-center gap-6 mb-4 text-slate-600">
                    <div className="flex items-center gap-2">
                      <FiCalendar className="w-5 h-5" />
                      <span>{edu.period}</span>
                    </div>
                    {edu.gpa && (
                      <div className="flex items-center gap-2">
                        <FiStar className="w-5 h-5" />
                        <span>GPA: {edu.gpa}</span>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">
                      Relevant Coursework:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
