'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Community from '../components/Community'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import RegisterModal from '../components/RegisterModal'

export default function Home() {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)

  return (
    <main className="bg-[#030712] min-h-screen text-white">
      <Header onOpenRegister={() => setIsRegisterOpen(true)} />
      <Hero onOpenRegister={() => setIsRegisterOpen(true)} />
      <About />
      <Skills onOpenRegister={() => setIsRegisterOpen(true)} />
      <Community />
      <CTA />
      <Footer />

      <RegisterModal 
        isOpen={isRegisterOpen} 
        onClose={() => setIsRegisterOpen(false)} 
      />
    </main>
  )
}