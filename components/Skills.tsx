'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'Java', 'Bash'],
  },
  {
    category: 'Frontend / Backend',
    skills: ['React.js', 'Next.js', 'Django', 'FastAPI', 'Node.js', 'REST APIs', 'WebSockets'],
  },
  {
    category: 'Data & ML',
    skills: ['Pandas', 'NumPy', 'scikit-learn', 'PyTorch', 'Data Cleaning', 'EDA', 'Feature Engineering'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS (EC2, S3)', 'Docker', 'Git / GitHub', 'GitHub Actions', 'Terraform', 'CI/CD', 'Linux/Unix'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'SQLAlchemy'],
  },
]

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="skills" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning full-stack development, data science, cloud computing,
            and DevOps practices
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="p-4 bg-white/75 backdrop-blur-xl rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-white/30 flex flex-col"
            >
              <h3 className="text-lg font-semibold mb-3 text-teal-600">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications with Bento Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="group bg-gradient-to-br from-teal-600/90 to-emerald-600/90 backdrop-blur-sm rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-white/20"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 mb-3 overflow-hidden">
                <div className="aspect-video bg-white/20 rounded-lg flex items-center justify-center">
                  <img 
                    src="/certificates/oracle-cloud.png" 
                    alt="Oracle Cloud Infrastructure Certified Data Science Professional"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextElementSibling!.style.display = 'flex'
                    }}
                  />
                  <div className="hidden items-center justify-center text-white/80 text-sm">
                    Certificate Image
                  </div>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-1 text-white">
                Oracle Cloud Infrastructure Certified Data Science Professional
              </h4>
              <p className="text-white/90 text-sm">Validated expertise in cloud-based data science</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="group bg-gradient-to-br from-teal-500/90 to-cyan-600/90 backdrop-blur-sm rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-white/20"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 mb-3 overflow-hidden">
                <div className="aspect-video bg-white/20 rounded-lg flex items-center justify-center">
                  <img 
                    src="/certificates/aws-cloud-practitioner.png" 
                    alt="AWS Certified Cloud Practitioner"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextElementSibling!.style.display = 'flex'
                    }}
                  />
                  <div className="hidden items-center justify-center text-white/80 text-sm">
                    Certificate Image
                  </div>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-1 text-white">AWS Certified Cloud Practitioner</h4>
              <p className="text-white/90 text-sm">Foundation-level AWS cloud knowledge</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
