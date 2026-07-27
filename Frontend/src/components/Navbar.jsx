import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { FiChevronDown, FiPhone, FiMail } from 'react-icons/fi'
import dettroinLogo from '../assets/dettroin-logo.png'

const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'About Us',
    href: '/#about',
    dropdown: [
      { name: 'Our Vision', path: '/our-vision' },
      { name: 'Our Mission', path: '/our-mission' },
      { name: 'Management', path: '/management' },
      { name: 'History', path: '/history' },
    ]
  },
  {
    name: 'Academics',
    href: '/#programs',
    dropdown: [
      { name: 'Primary Wing', path: '/primary-wing' },
      { name: 'Middle School', path: '/middle-school' },
      { name: 'Senior Secondary', path: '/senior-secondary' },
      { name: 'Curriculum', href: '/#programs' }
    ]
  },
  { name: 'Beyond Academics', href: '/#activities' },
  { name: 'Infrastructure', href: '/#campus' },
  {
    name: 'Admission',
    href: '/#admission',
    dropdown: [
      { name: 'Process', path: '/admission-process' },
      { name: 'Fee Structure', path: '/fee-structure' },
      { name: 'Apply Online', path: '/apply-online' }
    ]
  },
  { name: 'Contact Us', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary-dark text-white/80 text-sm py-2 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-gold transition-colors">
              <FiPhone className="text-accent" /> +91 123-456-7890
            </a>
            <a href="mailto:info@dettroin.edu" className="flex items-center gap-2 hover:text-gold transition-colors">
              <FiMail className="text-accent" /> info@dettroin.edu
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gold-light font-medium">📅 Admissions Open 2026-27</span>
            <span className="text-white/40">|</span>
            <Link to="/student-portal" className="hover:text-accent transition-colors">Student Portal</Link>
            <Link to="/parent-portal" className="hover:text-accent transition-colors">Parent Portal</Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 lg:top-[36px] left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'lg:top-0 bg-white shadow-xl shadow-primary/10'
            : 'bg-white/95 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-18 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img src={dettroinLogo} alt="Dettroin International School Logo" className="w-12 h-12 rounded-xl object-contain shadow-lg group-hover:shadow-accent/30 transition-shadow duration-300" />
              <div className="hidden sm:block">
                <h1 className="font-playfair text-primary font-bold text-lg leading-tight">
                  DETTROIN
                </h1>
                <p className="text-[10px] tracking-[0.3em] text-primary/60 uppercase font-outfit">
                  International School
                </p>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="px-4 py-2 rounded-lg text-sm font-medium text-primary/80 hover:text-accent hover:bg-accent/5 transition-all duration-300 flex items-center gap-1 font-outfit"
                  >
                    {link.name}
                    {link.dropdown && <FiChevronDown className="text-xs" />}
                  </a>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-2xl shadow-primary/15 border border-gray-100 overflow-hidden py-2"
                      >
                        {link.dropdown.map((item) => (
                          item.path ? (
                            <Link
                              key={item.name}
                              to={item.path}
                              onClick={() => setActiveDropdown(null)}
                              className="block px-5 py-2.5 text-sm text-primary/70 hover:text-accent hover:bg-accent/5 hover:pl-7 transition-all duration-300 font-outfit"
                            >
                              {item.name}
                            </Link>
                          ) : (
                            <a
                              key={item.name}
                              href={item.href || '#'}
                              onClick={() => setActiveDropdown(null)}
                              className="block px-5 py-2.5 text-sm text-primary/70 hover:text-accent hover:bg-accent/5 hover:pl-7 transition-all duration-300 font-outfit"
                            >
                              {item.name}
                            </a>
                          )
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="/#admission"
                className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-accent to-accent-warm text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 hover:scale-105 font-outfit"
              >
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Admission Open
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-primary hover:bg-primary/5 transition-colors"
              >
                {mobileOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => !link.dropdown && setMobileOpen(false)}
                      className="block px-4 py-3 rounded-lg text-primary/80 hover:text-accent hover:bg-accent/5 transition-all font-outfit font-medium flex items-center justify-between"
                    >
                      <span>{link.name}</span>
                    </a>
                    {link.dropdown && (
                      <div className="pl-6 space-y-1 bg-surface/50 rounded-lg py-1 my-1">
                        {link.dropdown.map((subItem) => (
                          subItem.path ? (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              onClick={() => setMobileOpen(false)}
                              className="block px-4 py-2 text-sm text-primary/70 hover:text-accent font-outfit"
                            >
                              • {subItem.name}
                            </Link>
                          ) : (
                            <a
                              key={subItem.name}
                              href={subItem.href || '#'}
                              onClick={() => setMobileOpen(false)}
                              className="block px-4 py-2 text-sm text-primary/70 hover:text-accent font-outfit"
                            >
                              • {subItem.name}
                            </a>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a
                  href="/#admission"
                  onClick={() => setMobileOpen(false)}
                  className="block mt-4 text-center px-6 py-3 bg-gradient-to-r from-accent to-accent-warm text-white font-semibold rounded-full font-outfit"
                >
                  Admission Open
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
