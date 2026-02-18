'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiCode, FiImage } from 'react-icons/fi'

const projects = [
  {
    title: 'CollabSpace - Real-time Team Collaboration Platform',
    period: 'Jan 2025 – Feb 2025',
    description:
      'Built a collaboration platform with Django Channels and WebSockets enabling real-time updates for 50+ users, achieving sub-200ms latency through Redis message brokering.',
    highlights: [
      'Multi-user document editing with conflict resolution supporting 10+ simultaneous editors',
      'JWT auth with RBAC and AWS S3 file storage processing 1,000+ documents',
      'Operational transformation and locking mechanisms preventing data loss',
    ],
    technologies: ['Django Channels', 'React', 'PostgreSQL', 'Redis', 'WebSockets', 'Docker', 'AWS S3'],
    github: 'https://github.com/rjain52208/collabspace',
    demo: '#',
    screenshot: '/projects/collabspace.png',
  },
  {
    title: 'JobTracker Pro - Application Management System',
    period: 'Nov 2024 – Dec 2024',
    description:
      'Architected full-stack SaaS with Next.js and Django REST managing 500+ applications through complete pipeline, improving tracking efficiency via kanban board and search filters.',
    highlights: [
      'Resume parser using PyPDF2 and python-docx extracting data with 90% accuracy',
      'Chrome extension enabling one-click job saving from LinkedIn/Indeed',
      'Reduced form-filling time by 70% through auto-population',
    ],
    technologies: ['Next.js', 'Django REST', 'PostgreSQL', 'Docker', 'GitHub Actions', 'Chrome Extension'],
    github: 'https://github.com/rjain52208/job_pro_tracker',
    demo: '#',
    screenshot: '/projects/jobtracker.png',
  },
  {
    title: 'FinanceFlow - Personal Finance Analytics Platform',
    period: 'Sep 2024 – Oct 2024',
    description:
      'Built a Django REST finance app handling 10K+ monthly transactions with TF-IDF, achieving 88% auto-categorization accuracy.',
    highlights: [
      'Async pipeline with Celery and Redis for scheduled budget reports and alerts',
      'Row-level security in PostgreSQL supporting 100+ users with complete data isolation',
      'Reduced manual tracking by 70% through automated email notifications',
    ],
    technologies: ['React', 'Django REST', 'PostgreSQL', 'Celery', 'Redis', 'Chart.js', 'scikit-learn'],
    github: 'https://github.com/rjain52208/Finance-Flow',
    demo: '#',
    screenshot: '/projects/financeflow-dashboard.png',
    screenshots: [
      '/projects/financeflow-dashboard.png',
      '/projects/financeflow-transactions.png',
      '/projects/financeflow-budgets.png',
      '/projects/financeflow-analytics.png',
    ],
  },
]

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const [previewScreenshots, setPreviewScreenshots] = useState<string[] | null>(null)
  const [currentScreenshotIndex, setCurrentScreenshotIndex] = useState(0)

  return (
    <section id="projects" ref={ref} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Innovative solutions showcasing full-stack development, real-time systems, and data-driven applications
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white/75 backdrop-blur-xl rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-white/30 hover:border-teal-200/60 flex flex-col"
            >
              <div className="relative h-48 bg-gray-900 overflow-hidden">
                <img
                  src={project.screenshot}
                  alt={project.title}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.style.display = 'none'
                    const fallback = target.nextElementSibling as HTMLElement
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                <div className="absolute inset-0 bg-slate-800 flex flex-col items-center justify-center p-4 hidden" style={{ display: 'none' }}>
                  <div className="w-full max-w-sm rounded-lg bg-slate-900/90 border border-slate-600/50 p-3 font-mono text-xs text-left">
                    <div className="flex gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-red-500/80" />
                      <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                      <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                    </div>
                    <pre className="text-slate-300 overflow-hidden">
{`def process_data(df):
  return df.merge(
    right=lookup,
    on="id"
  ).pipe(clean)`}
                    </pre>
                  </div>
                  <p className="text-slate-400 text-xs mt-2">Code snippet — add screenshot or Carbon image</p>
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <button
                  type="button"
                  onClick={() => {
                    if (project.screenshots && project.screenshots.length > 0) {
                      setPreviewScreenshots(project.screenshots)
                      setCurrentScreenshotIndex(0)
                    } else {
                      setPreviewImage(project.screenshot)
                    }
                  }}
                  className="absolute bottom-3 right-3 px-3 py-1.5 bg-white/95 backdrop-blur text-sm font-medium rounded-lg hover:bg-white transition-colors flex items-center gap-2 text-slate-700 border border-slate-200"
                >
                  <FiImage className="w-4 h-4" />
                  View demo
                </button>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-slate-800 group-hover:text-teal-600 transition-colors">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-sm text-slate-500 mb-4">{project.period}</p>
                
                <p className="text-slate-700 mb-4">{project.description}</p>
                
                <ul className="space-y-2 mb-6 flex-1">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-teal-500 mt-1">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 flex-wrap">
                  {project.github && project.github !== '#' && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors text-slate-700"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub className="w-5 h-5" />
                      <span>Code</span>
                    </motion.a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink className="w-5 h-5" />
                      <span>Live demo</span>
                    </motion.a>
                  )}
                  <motion.button
                    type="button"
                    onClick={() => {
                      if (project.screenshots && project.screenshots.length > 0) {
                        setPreviewScreenshots(project.screenshots)
                        setCurrentScreenshotIndex(0)
                      } else {
                        setPreviewImage(project.screenshot)
                      }
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiImage className="w-5 h-5" />
                    <span>View demo</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
            )
          })}
        </div>
      </div>

      {/* Full-screen screenshot preview modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setPreviewImage(null)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Escape' && setPreviewImage(null)}
          aria-label="Close preview"
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white text-2xl hover:opacity-80"
            onClick={() => setPreviewImage(null)}
            aria-label="Close"
          >
            ×
          </button>
          <img
            src={previewImage}
            alt="Project demo"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Screenshot gallery modal */}
      {previewScreenshots && previewScreenshots.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => {
            setPreviewScreenshots(null)
            setCurrentScreenshotIndex(0)
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setPreviewScreenshots(null)
              setCurrentScreenshotIndex(0)
            } else if (e.key === 'ArrowLeft' && currentScreenshotIndex > 0) {
              setCurrentScreenshotIndex(currentScreenshotIndex - 1)
            } else if (e.key === 'ArrowRight' && currentScreenshotIndex < previewScreenshots.length - 1) {
              setCurrentScreenshotIndex(currentScreenshotIndex + 1)
            }
          }}
          aria-label="Close preview"
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white text-2xl hover:opacity-80 z-10"
            onClick={() => {
              setPreviewScreenshots(null)
              setCurrentScreenshotIndex(0)
            }}
            aria-label="Close"
          >
            ×
          </button>
          
          {previewScreenshots.length > 1 && (
            <>
              <button
                type="button"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:opacity-80 z-10 disabled:opacity-30"
                onClick={(e) => {
                  e.stopPropagation()
                  if (currentScreenshotIndex > 0) {
                    setCurrentScreenshotIndex(currentScreenshotIndex - 1)
                  }
                }}
                disabled={currentScreenshotIndex === 0}
                aria-label="Previous screenshot"
              >
                ‹
              </button>
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:opacity-80 z-10 disabled:opacity-30"
                onClick={(e) => {
                  e.stopPropagation()
                  if (currentScreenshotIndex < previewScreenshots.length - 1) {
                    setCurrentScreenshotIndex(currentScreenshotIndex + 1)
                  }
                }}
                disabled={currentScreenshotIndex === previewScreenshots.length - 1}
                aria-label="Next screenshot"
              >
                ›
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {previewScreenshots.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentScreenshotIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation()
                      setCurrentScreenshotIndex(idx)
                    }}
                    aria-label={`Go to screenshot ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
          
          <img
            src={previewScreenshots[currentScreenshotIndex]}
            alt={`Project demo ${currentScreenshotIndex + 1}`}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
