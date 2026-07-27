import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Parent of Class VIII Student',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&q=80',
    quote: 'Dettroin International has been a game-changer for my child. The holistic approach to education, combined with excellent faculty, has helped my son develop both academically and personally.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Parent of Class XII Student',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    quote: 'The career counseling and competitive exam preparation at Dettroin is outstanding. My daughter scored AIR 156 in JEE Mains. Truly grateful to the dedicated teachers.',
    rating: 5,
  },
  {
    name: 'Anita Verma',
    role: 'Parent of Class V Student',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    quote: 'The school\'s focus on extracurricular activities alongside academics gives children a well-rounded experience. My child loves going to school every day!',
    rating: 5,
  },
  {
    name: 'Dr. Mohit Agrawal',
    role: 'Alumni, Batch 2020',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    quote: 'The values and discipline instilled at Dettroin shaped who I am today. The school prepared me not just for exams, but for life. Forever grateful to my alma mater.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 mb-6">
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            <span className="text-gold text-sm font-semibold uppercase tracking-wider font-outfit">Testimonials</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-playfair font-bold text-primary">
            What Parents{' '}
            <span className="text-gradient">Say About Us</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-primary/5 border border-gray-100"
              >
                {/* Quote mark */}
                <div className="text-6xl text-accent/20 font-playfair leading-none mb-4">"</div>

                <p className="text-primary/70 text-lg lg:text-xl leading-relaxed font-inter italic">
                  {testimonials[current].quote}
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[current].avatar}
                      alt={testimonials[current].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-accent/30"
                    />
                    <div>
                      <h4 className="text-primary font-bold font-outfit text-lg">
                        {testimonials[current].name}
                      </h4>
                      <p className="text-primary/50 text-sm font-inter">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <span key={i} className="text-gold text-xl">★</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:text-accent hover:shadow-xl transition-all duration-300"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            <button
              onClick={() => setCurrent(prev => (prev + 1) % testimonials.length)}
              className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-primary hover:text-accent hover:shadow-xl transition-all duration-300"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? 'w-8 h-2.5 bg-accent'
                    : 'w-2.5 h-2.5 bg-primary/20 hover:bg-primary/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
