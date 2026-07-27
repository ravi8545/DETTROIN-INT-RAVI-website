import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight } from 'react-icons/fi'

const programs = [
  {
    id: 1,
    title: 'Pre-Primary',
    grades: 'Nursery - KG',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=600&q=80',
    description: 'A nurturing environment where young minds explore, create, and build the foundations of lifelong learning through play-based education.',
    features: ['Activity-Based Learning', 'Smart Classrooms', 'Dedicated Play Areas'],
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
    iconBg: 'bg-pink-100',
    textColor: 'text-pink-600',
  },
  {
    id: 2,
    title: 'Primary Wing',
    grades: 'Grade I - V',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80',
    description: 'Building strong academic foundations with a focus on conceptual understanding, creativity, and critical thinking skills.',
    features: ['CBSE Curriculum', 'Language Lab', 'Science Explorer Program'],
    color: 'from-sky to-blue-500',
    bgColor: 'bg-sky-50',
    iconBg: 'bg-sky-100',
    textColor: 'text-sky-600',
  },
  {
    id: 3,
    title: 'Middle School',
    grades: 'Grade VI - VIII',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80',
    description: 'Developing analytical skills and encouraging independent thinking through project-based and experiential learning approaches.',
    features: ['STEM Labs', 'Robotics Club', 'Inter-School Competitions'],
    color: 'from-emerald to-teal-500',
    bgColor: 'bg-emerald-50',
    iconBg: 'bg-emerald-100',
    textColor: 'text-emerald-600',
  },
  {
    id: 4,
    title: 'Senior Secondary',
    grades: 'Grade IX - XII',
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=600&q=80',
    description: 'Preparing students for competitive exams and global universities with specialized coaching and career counseling.',
    features: ['Career Counseling', 'JEE/NEET Prep', 'University Placement'],
    color: 'from-accent to-accent-warm',
    bgColor: 'bg-orange-50',
    iconBg: 'bg-orange-100',
    textColor: 'text-orange-600',
  },
]

export default function ProgramsSection() {
  const [hoveredId, setHoveredId] = useState(null)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="programs" ref={ref} className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `radial-gradient(circle at 20% 50%, rgba(15, 27, 76, 0.03) 0%, transparent 50%),
                          radial-gradient(circle at 80% 50%, rgba(230, 81, 0, 0.03) 0%, transparent 50%)`
      }} />

      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-primary text-sm font-semibold uppercase tracking-wider font-outfit">Our Programs</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-playfair font-bold text-primary">
            Academic Programs{' '}
            <span className="text-gradient">For Every Stage</span>
          </h2>
          <p className="mt-4 text-primary/50 text-lg max-w-2xl mx-auto font-inter">
            Comprehensive education pathways designed to nurture potential at every stage of a child's growth
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              onMouseEnter={() => setHoveredId(program.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                {/* Grade Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`${program.bgColor} ${program.textColor} text-xs font-bold px-3 py-1.5 rounded-full font-outfit`}>
                    {program.grades}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary font-playfair group-hover:text-accent transition-colors">
                  {program.title}
                </h3>
                <p className="mt-2 text-primary/50 text-sm leading-relaxed font-inter line-clamp-3">
                  {program.description}
                </p>

                {/* Features */}
                <div className="mt-4 space-y-2">
                  {program.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${program.color}`} />
                      <span className="text-xs text-primary/60 font-inter">{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#"
                  className={`mt-5 inline-flex items-center gap-2 text-sm font-semibold ${program.textColor} hover:gap-3 transition-all font-outfit`}
                >
                  Learn More <FiArrowRight />
                </a>
              </div>

              {/* Bottom accent line */}
              <div className={`h-1 bg-gradient-to-r ${program.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
