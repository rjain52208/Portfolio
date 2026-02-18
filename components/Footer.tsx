'use client'

import { FiHeart } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-300 text-center md:text-left">
            © {new Date().getFullYear()} Riddhi Jain. All rights reserved.
          </p>
          <p className="text-slate-300 flex items-center gap-2">
            Made with <FiHeart className="text-teal-400" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
