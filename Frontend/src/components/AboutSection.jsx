import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight, FiAward, FiBookOpen, FiHeart } from 'react-icons/fi'

export default function AboutSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
                alt="Students in classroom"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Overlapping second image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 w-64 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden md:block"
            >
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80"
                alt="Happy students"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-6 -left-6 w-28 h-28 bg-gradient-to-br from-accent to-accent-warm rounded-full flex flex-col items-center justify-center shadow-xl text-white"
            >
              <span className="text-3xl font-bold font-outfit">25+</span>
              <span className="text-[10px] uppercase tracking-wider font-inter">Years</span>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 mb-6">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span className="text-accent text-sm font-semibold uppercase tracking-wider font-outfit">About Us</span>
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-playfair font-bold text-primary leading-tight">
              Building Character,{' '}
              <span className="text-gradient">Inspiring Excellence</span>
            </h2>

            <p className="mt-6 text-primary/60 text-lg leading-relaxed font-inter">
              At Dettroin International School, we believe in nurturing every child's unique potential. 
              Our holistic approach to education combines rigorous academics with character building, 
              sports, and creative arts to develop well-rounded global citizens.
            </p>

            {/* Feature Cards */}
            <div className="mt-10 space-y-4">
              {[
                {
                  icon: <FiAward className="text-accent text-xl" />,
                  title: 'Award-Winning Curriculum',
                  desc: 'CBSE-aligned curriculum with global best practices'
                },
                {
                  icon: <FiBookOpen className="text-sky text-xl" />,
                  title: 'Expert Faculty',
                  desc: '150+ highly qualified and trained educators'
                },
                {
                  icon: <FiHeart className="text-emerald text-xl" />,
                  title: 'Student-Centric Approach',
                  desc: 'Personalized attention with 1:20 teacher-student ratio'
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface transition-colors duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-primary font-semibold font-outfit text-lg">{item.title}</h3>
                    <p className="text-primary/50 text-sm font-inter mt-0.5">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-primary text-white rounded-full font-semibold hover:bg-primary-light hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 font-outfit group"
            >
              Discover More
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
