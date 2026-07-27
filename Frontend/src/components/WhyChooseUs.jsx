import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMonitor, FiUsers, FiGlobe, FiShield, FiMusic, FiCpu } from 'react-icons/fi'

const features = [
  {
    icon: <FiMonitor />,
    title: 'Smart Classrooms',
    description: 'Interactive digital learning with projectors, tablets, and AI-powered teaching tools in every classroom.',
    color: 'from-sky to-blue-600',
    iconBg: 'bg-sky-50',
  },
  {
    icon: <FiUsers />,
    title: '1:20 Teacher Ratio',
    description: 'Personalized attention ensuring every student gets the guidance they need to excel.',
    color: 'from-emerald to-teal-600',
    iconBg: 'bg-emerald-50',
  },
  {
    icon: <FiGlobe />,
    title: 'Global Exposure',
    description: 'International exchange programs, MUN conferences, and partnerships with global institutions.',
    color: 'from-purple-500 to-violet-600',
    iconBg: 'bg-purple-50',
  },
  {
    icon: <FiShield />,
    title: 'Safe & Secure Campus',
    description: '24/7 CCTV surveillance, trained security staff, GPS-enabled transport, and health facilities.',
    color: 'from-accent to-accent-warm',
    iconBg: 'bg-orange-50',
  },
  {
    icon: <FiMusic />,
    title: 'Arts & Culture',
    description: 'Dedicated studios for music, dance, drama, and visual arts to nurture creative expression.',
    color: 'from-pink-500 to-rose-500',
    iconBg: 'bg-pink-50',
  },
  {
    icon: <FiCpu />,
    title: 'STEM & Robotics',
    description: 'Cutting-edge labs for coding, robotics, 3D printing, and scientific experimentation.',
    color: 'from-amber-500 to-yellow-500',
    iconBg: 'bg-amber-50',
  },
]

export default function WhyChooseUs() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="activities" ref={ref} className="py-24 lg:py-32 animated-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold/10 rounded-full blur-3xl" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6">
            <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
            <span className="text-gold-light text-sm font-semibold uppercase tracking-wider font-outfit">Why Choose Us</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-playfair font-bold text-white">
            What Makes Us{' '}
            <span className="text-gradient">Stand Out</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-2xl mx-auto font-inter">
            Discover the unique advantages that make Dettroin International the preferred choice for parents
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group glass rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-white font-outfit group-hover:text-gold-light transition-colors">
                {feature.title}
              </h3>
              <p className="mt-3 text-white/50 text-sm leading-relaxed font-inter group-hover:text-white/70 transition-colors">
                {feature.description}
              </p>

              {/* Hover indicator */}
              <div className={`mt-6 h-0.5 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
