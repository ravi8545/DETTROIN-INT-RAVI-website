import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { number: 25, suffix: '+', label: 'Years of Excellence', icon: '🏛️' },
  { number: 5000, suffix: '+', label: 'Happy Students', icon: '🎓' },
  { number: 98, suffix: '%', label: 'Board Results', icon: '📊' },
  { number: 150, suffix: '+', label: 'Expert Faculty', icon: '👨‍🏫' },
  { number: 50, suffix: '+', label: 'Awards Won', icon: '🏆' },
]

function AnimatedCounter({ end, duration = 2000, inView }) {
  const [count, setCount] = useState(0)
  const startTime = useRef(null)
  const animationFrame = useRef(null)

  useEffect(() => {
    if (!inView) return

    const animate = (timestamp) => {
      if (!startTime.current) startTime.current = timestamp
      const progress = Math.min((timestamp - startTime.current) / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        animationFrame.current = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame.current = requestAnimationFrame(animate)
    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current)
    }
  }, [inView, end, duration])

  return <span>{count.toLocaleString()}</span>
}

export default function StatsBar() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section ref={ref} className="relative -mt-1 z-20">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary via-primary-light to-primary rounded-2xl shadow-2xl shadow-primary/30 p-8 lg:p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center group"
              >
                <span className="text-3xl mb-2 block group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </span>
                <p className="text-3xl lg:text-4xl font-bold text-white font-outfit">
                  <AnimatedCounter end={stat.number} inView={inView} duration={2500} />
                  <span className="text-gold">{stat.suffix}</span>
                </p>
                <p className="text-white/60 text-sm mt-1 font-inter">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
