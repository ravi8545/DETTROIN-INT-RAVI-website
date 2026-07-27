import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiMapPin, FiPhone, FiMail, FiClock, FiArrowUp } from 'react-icons/fi'
import dettroinLogo from '../assets/dettroin-logo.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa'

const footerLinks = {
  'About Us': [
    { name: 'Our Vision', path: '/our-vision' },
    { name: 'Our Mission', path: '/our-mission' },
    { name: 'Management', path: '/management' },
    { name: 'History', path: '/history' },
  ],
  'Academics': [
    { name: 'Primary Wing', href: '/#programs' },
    { name: 'Middle School', href: '/#programs' },
    { name: 'Senior Secondary', href: '/#programs' },
    { name: 'Curriculum', href: '/#programs' }
  ],
  'Admissions': [
    { name: 'Admission Process', path: '/admission-process' },
    { name: 'Fee Structure', path: '/fee-structure' },
    { name: 'Apply Online', path: '/apply-online' },
    { name: 'Contact Us', href: '/#contact' },
    { name: 'Home', href: '/' },
  ],
}

const socialLinks = [
  { icon: <FaFacebookF />, href: '#', color: 'hover:bg-blue-600' },
  { icon: <FaInstagram />, href: '#', color: 'hover:bg-pink-600' },
  { icon: <FaTwitter />, href: '#', color: 'hover:bg-sky-500' },
  { icon: <FaYoutube />, href: '#', color: 'hover:bg-red-600' },
  { icon: <FaLinkedinIn />, href: '#', color: 'hover:bg-blue-700' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="bg-primary-dark relative overflow-hidden">
      {/* Top decorative wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1360,35 1440,30 L1440,0 L0,0 Z" fill="rgba(255,255,255,0.03)" />
        </svg>
      </div>

      {/* Newsletter Bar */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-white">
                Stay Updated with <span className="text-gradient">School News</span>
              </h3>
              <p className="text-white/40 text-sm mt-1 font-inter">Get the latest updates, events, and announcements</p>
            </div>
            <div className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-80 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all font-inter text-sm"
              />
              <button className="px-8 py-3.5 bg-gradient-to-r from-accent to-accent-warm text-white font-semibold rounded-full hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 font-outfit whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={dettroinLogo} alt="Dettroin International School Logo" className="w-12 h-12 rounded-xl object-contain shadow-lg" />
              <div>
                <h2 className="font-playfair text-white font-bold text-xl">DETTROIN</h2>
                <p className="text-[10px] tracking-[0.3em] text-white/40 uppercase font-outfit">International School</p>
              </div>
            </div>

            <p className="text-white/40 text-sm leading-relaxed font-inter max-w-sm">
              Nurturing future leaders through holistic education since 2001. CBSE affiliated, 
              committed to academic excellence and all-round development.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <a href="#" className="flex items-start gap-3 text-white/50 hover:text-white/80 transition-colors group">
                <FiMapPin className="text-accent mt-0.5 shrink-0" />
                <span className="text-sm font-inter">123 Education Lane, Knowledge Park, City - 226001</span>
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-3 text-white/50 hover:text-white/80 transition-colors">
                <FiPhone className="text-accent" />
                <span className="text-sm font-inter">+91 123-456-7890</span>
              </a>
              <a href="mailto:info@dettroin.edu" className="flex items-center gap-3 text-white/50 hover:text-white/80 transition-colors">
                <FiMail className="text-accent" />
                <span className="text-sm font-inter">info@dettroin.edu</span>
              </a>
              <div className="flex items-center gap-3 text-white/50">
                <FiClock className="text-accent" />
                <span className="text-sm font-inter">Mon - Sat: 8:00 AM - 3:00 PM</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:text-white ${social.color} transition-all duration-300`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-outfit font-semibold text-lg mb-6 relative">
                {title}
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent rounded-full" />
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.path ? (
                      <Link
                        to={link.path}
                        className="text-white/40 hover:text-accent text-sm font-inter hover:pl-2 transition-all duration-300 block"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href || '#'}
                        className="text-white/40 hover:text-accent text-sm font-inter hover:pl-2 transition-all duration-300 block"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm font-inter">
            © 2026 Dettroin International School. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 hover:text-white/60 text-sm font-inter transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white/60 text-sm font-inter transition-colors">Terms of Service</a>
            <a href="#" className="text-white/30 hover:text-white/60 text-sm font-inter transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-accent to-accent-warm text-white flex items-center justify-center shadow-xl shadow-accent/30 z-50 hover:shadow-2xl transition-shadow"
      >
        <FiArrowUp className="text-lg" />
      </motion.button>
    </footer>
  )
}
