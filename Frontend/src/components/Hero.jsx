import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiPlay } from 'react-icons/fi'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80',
    tag: 'CBSE Affiliated',
    title: 'Nurturing Future Leaders\nThrough Holistic Education',
    subtitle: 'Where every child discovers their potential and builds the foundation for a remarkable future.',
    hashtag: '#BeYourself',
  },
  {
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c476?w=1920&q=80',
    tag: 'Modern Campus',
    title: 'World-Class Infrastructure\nFor Modern Learning',
    subtitle: 'State-of-the-art facilities designed to inspire creativity and academic excellence.',
    hashtag: '#ExploreLearnGrow',
  },
  {
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920&q=80',
    tag: 'Beyond Academics',
    title: 'Empowering Minds\nShaping Futures',
    subtitle: 'A perfect blend of academics, sports, arts, and technology for all-round development.',
    hashtag: '#FutureReady',
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const slide = slides[currentSlide]

  return (
    <section id="home" className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Images with Crossfade */}
      {slides.map((s, i) => (
        <motion.div
          key={i}
          initial={false}
          animate={{
            opacity: i === currentSlide ? 1 : 0,
            scale: i === currentSlide ? 1.05 : 1,
          }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={s.image}
            alt={s.tag}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="absolute top-1/4 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-40 w-48 h-48 bg-gold/10 rounded-full blur-2xl animate-float-delayed" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Campus Tag */}
              <motion.div
                key={`tag-${currentSlide}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass mb-8"
              >
                <span className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
                <span className="text-white/90 text-sm font-outfit font-medium">{slide.tag}</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                key={`title-${currentSlide}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white leading-tight whitespace-pre-line"
              >
                {slide.title}
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                key={`sub-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-6 text-white/70 text-lg font-inter max-w-lg leading-relaxed"
              >
                {slide.subtitle}
              </motion.p>

              {/* Hashtag */}
              <motion.p
                key={`hash-${currentSlide}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 text-gradient text-xl font-bold font-outfit"
              >
                {slide.hashtag}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#admission"
                  className="group px-8 py-4 bg-gradient-to-r from-accent to-accent-warm text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105 flex items-center gap-2 font-outfit text-lg animate-pulse-glow"
                >
                  Admission Open
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>

                <button className="group px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 flex items-center gap-3 font-outfit">
                  <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <FiPlay className="text-white ml-0.5" />
                  </span>
                  Virtual Tour
                </button>
              </motion.div>
            </div>

            {/* Right - Featured Image Card */}
            <motion.div
              initial={{ opacity: 0, x: 100, rotate: 3 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Main Image Card */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
                  <motion.img
                    key={`hero-img-${currentSlide}`}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    src={slide.image}
                    alt="School Campus"
                    className="w-full h-[420px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

                  {/* Overlay badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass rounded-xl px-5 py-4">
                      <p className="text-white font-outfit font-semibold text-lg">Admissions 2026-27</p>
                      <p className="text-white/70 text-sm font-inter mt-1">Limited seats available. Apply now!</p>
                    </div>
                  </div>
                </div>

                {/* Floating Stats Card */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-5 border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-emerald/10 flex items-center justify-center">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <div>
                      <p className="text-primary font-bold font-outfit text-lg">A+ Grade</p>
                      <p className="text-primary/50 text-xs font-inter">CBSE Inspection</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Achievement Card */}
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -top-4 -right-4 bg-white rounded-xl shadow-2xl p-4 border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                      <span className="text-xl">⭐</span>
                    </div>
                    <div>
                      <p className="text-primary font-bold font-outfit">25+ Years</p>
                      <p className="text-primary/50 text-[11px] font-inter">of Excellence</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`transition-all duration-500 rounded-full ${
              i === currentSlide
                ? 'w-10 h-3 bg-gradient-to-r from-accent to-gold'
                : 'w-3 h-3 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" className="w-full">
          <path d="M0,60 C360,100 720,20 1080,60 C1260,80 1360,70 1440,60 L1440,100 L0,100 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
