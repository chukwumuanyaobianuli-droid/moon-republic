'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header({ onOpenRegister }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-indigo-600/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </div>
          <span className="text-xl font-extrabold text-white tracking-tight">
            Moon <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-200 bg-clip-text text-transparent">Republic</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="#about" className="text-slate-300 hover:text-white transition-colors">About</Link>
          <Link href="#skills" className="text-slate-300 hover:text-white transition-colors">Skills</Link>
          <Link href="#community" className="text-slate-300 hover:text-white transition-colors">Community</Link>
          <Link href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button 
            onClick={onOpenRegister}
            className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md shadow-indigo-600/20 transition-all duration-200"
          >
            Join Now
          </button>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-4">
          <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">About</Link>
          <Link href="#skills" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">Skills</Link>
          <Link href="#community" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">Community</Link>
          <Link href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-slate-300 hover:text-white py-1">Contact</Link>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenRegister(); }}
            className="w-full mt-2 py-3 text-center text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl"
          >
            Join Now
          </button>
        </div>
      )}
    </header>
  )
}