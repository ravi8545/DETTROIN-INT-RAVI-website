import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiHeart, FiBookOpen, FiUsers, FiAward, FiShield, FiSun } from 'react-icons/fi'

const missionStatements = [
  {
    icon: <FiBookOpen className="text-2xl" />,
    title: 'Innovative Curriculum',
    desc: 'To deliver a dynamic, CBSE-aligned curriculum integrated with global best practices, fostering intellectual curiosity and a love for lifelong learning.',
    color: 'from-accent to-accent-warm',
  },
  {
    icon: <FiUsers className="text-2xl" />,
    title: 'Inclusive Environment',
    desc: 'To create a safe, inclusive, and nurturing environment where every student feels valued, respected, and motivated to achieve their personal best.',
    color: 'from-sky to-emerald',
  },
  {
    icon: <FiHeart className="text-2xl" />,
    title: 'Character Building',
    desc: 'To instill strong moral values, ethical conduct, empathy, and social responsibility in every student through experiential learning and community engagement.',
    color: 'from-emerald to-emerald-light',
  },
  {
    icon: <FiAward className="text-2xl" />,
    title: 'Excellence in All Spheres',
    desc: 'To promote excellence not just in academics but in sports, arts, leadership, and co-curricular activities, ensuring well-rounded development.',
    color: 'from-gold to-accent-warm',
  },
  {
    icon: <FiShield className="text-2xl" />,
    title: 'Teacher Empowerment',
    desc: 'To invest in continuous professional development of our educators, empowering them with modern pedagogical tools and research-backed methodologies.',
    color: 'from-primary-light to-sky',
  },
  {
    icon: <FiSun className="text-2xl" />,
    title: 'Technology Integration',
    desc: 'To embrace cutting-edge educational technology — smart classrooms, AI-driven learning, and digital resources — to prepare students for the digital age.',
    color: 'from-accent-warm to-gold',
  },
]

export default function OurMission() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-emerald/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald/10 mb-6">
            <span className="w-1.5 h-1.5 bg-emerald rounded-full" />
            <span className="text-emerald text-sm font-semibold uppercase tracking-wider font-outfit">Our Mission</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-playfair font-bold text-primary leading-tight">
            Driving Purpose,{' '}
            <span className="text-gradient-blue">Delivering Impact</span>
          </h2>
          <p className="mt-6 text-primary/60 text-lg leading-relaxed font-inter">
            Our mission is the compass that guides every decision, every program, and every interaction
            at Dettroin International. We are committed to providing an unparalleled educational
            experience that transforms lives.
          </p>
        </motion.div>

        {/* Mission Statement Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 grid lg:grid-cols-2 gap-8 items-center"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&q=80"
              alt="Students learning together"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-playfair text-xl font-bold leading-snug">
                "Education is not just about filling minds,<br />it's about igniting souls."
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-playfair font-bold text-primary">Our Commitment</h3>
            <p className="text-primary/60 leading-relaxed font-inter">
              We are dedicated to empowering every student who walks through our gates. Our mission
              extends beyond the classroom walls — we aim to build confident, compassionate, and
              capable individuals who will lead with vision and serve with humility.
            </p>
            <p className="text-primary/60 leading-relaxed font-inter">
              Through a balanced blend of rigorous academics, creative expression, physical fitness,
              and moral education, we ensure that each student develops into a complete human being,
              ready to face the challenges of the modern world with resilience and grace.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="text-center">
                <span className="text-3xl font-bold font-outfit text-accent">150+</span>
                <p className="text-xs text-primary/50 font-inter mt-1">Expert Faculty</p>
              </div>
              <div className="w-px h-12 bg-primary/10" />
              <div className="text-center">
                <span className="text-3xl font-bold font-outfit text-emerald">3000+</span>
                <p className="text-xs text-primary/50 font-inter mt-1">Students</p>
              </div>
              <div className="w-px h-12 bg-primary/10" />
              <div className="text-center">
                <span className="text-3xl font-bold font-outfit text-sky">25+</span>
                <p className="text-xs text-primary/50 font-inter mt-1">Years Legacy</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {missionStatements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
              className="group relative p-8 rounded-2xl bg-surface hover:bg-white border border-transparent hover:border-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="mt-5 text-lg font-outfit font-bold text-primary">{item.title}</h3>
              <p className="mt-3 text-primary/55 text-sm leading-relaxed font-inter">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
