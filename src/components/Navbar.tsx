'use client';

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href}
    className="relative px-4 py-2 text-sm text-white/70 hover:text-white transition-colors group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00E1F4] to-[#6F4CFF] group-hover:w-full transition-all duration-300" />
  </Link>
)

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[980px] mx-auto px-6 h-[48px] flex items-center justify-between">
        <Link 
          href="/"
          className="text-lg font-medium hover:opacity-80 transition-opacity"
        >
          AI Engine
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Features', href: '#features' },
            { label: 'How it Works', href: '#how-it-works' },
            { label: 'Pricing', href: '#pricing' },
            { label: 'Enterprise', href: '#enterprise' },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-[#86868b] hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/login"
            className="text-sm text-[#86868b] hover:text-white transition-colors hidden md:block"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="text-sm text-[#2997FF] hover:opacity-80 transition-opacity"
          >
            Get Started →
          </Link>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white/70 hover:text-white transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
        className={`md:hidden glass border-t border-white/5 ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <Link 
            href="#features" 
            className="text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </Link>
          <Link 
            href="#how-it-works"
            className="text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            How it Works
          </Link>
          <Link 
            href="#pricing"
            className="text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            href="#testimonials"
            className="text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </Link>
          <div className="pt-4 flex flex-col space-y-4">
            <Link 
              href="/login"
              className="text-white/70 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Log in
            </Link>
            <Link 
              href="/signup"
              className="btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
} 