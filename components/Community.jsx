'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Professional Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Moon Icon Badge */}
          <div className="w-9 h-9 rounded-xl bg-indigo-600/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500 group-hover:shadow-lg group-hover:shadow-indigo-500/30 transition-all duration-300">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </div>

          {/* Brand Name */}
          <span className="text-xl font-extrabold text-white tracking-tight">
            Moon <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200 bg-clip-text text-transparent">Republic</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#about" className="text-slate-300 hover:text-white transition-colors">
            About
          </Link>
          <Link href="#skills" className="text-slate-300 hover:text-white transition-colors">
            Skills
          </Link>
          <Link href="#community" className="text-slate-300 hover:text-white transition-colors">
            Community
          </Link>
          <Link href="#contact" className="text-slate-300 hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <Link 
            href="#get-started" 
            className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md shadow-indigo-600/20 hover:shadow-indigo-500/40 transition-all duration-200"
          >
            Join Now
          </Link>
        </div>

      </nav>
    </header>
  )
}