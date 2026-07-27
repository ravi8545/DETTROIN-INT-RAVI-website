import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBookOpen, FiStar, FiHeart, FiSmile } from 'react-icons/fi'

const features = [
  {
    icon: <FiBookOpen className="text-2xl" />,
    title: 'Foundational Learning',
    desc: 'Building a strong foundation in literacy, numeracy, and environmental awareness.'
  },
  {
    icon: <FiStar className="text-2xl" />,
    title: 'Creative Expression',
    desc: 'Encouraging imagination through art, music, drama, and creative play.'
  },
  {
    icon: <FiHeart className="text-2xl" />,
    title: 'Value Education',
    desc: 'Instilling core values of kindness, honesty, respect, and responsibility.'
  },
  {
    icon: <FiSmile className="text-2xl" />,
    title: 'Joyful Environment',
    desc: 'Creating a safe, happy, and stimulating atmosphere for young learners.'
  },
]

export default function PrimaryWing() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 mb-6">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span className="text-accent text-sm font-semibold uppercase tracking-wider font-outfit">Academics</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-playfair font-bold text-primary leading-tight">
            Primary <span className="text-gradient">Wing</span>
          </h2>
          <p className="mt-6 text-primary/60 text-lg leading-relaxed font-inter">
            Our Primary Wing focuses on nurturing curiosity and a love for learning. We provide a vibrant 
            and caring environment where young minds can explore, discover, and grow at their own pace.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 relative rounded-3xl overflow-hidden"
        >
          <div className="animated-gradient p-12 lg:p-16 text-center">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=60')] bg-cover bg-center opacity-10" />
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                className="w-20 h-20 mx-auto mb-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20"
              >
                <FiBookOpen className="text-gold text-3xl" />
              </motion.div>
              <blockquote className="text-white text-2xl lg:text-3xl font-playfair font-bold italic leading-relaxed max-w-4xl mx-auto">
                "Every child is a born learner. In our Primary Wing, we provide the wings for their curiosity to take flight."
              </blockquote>
              <div className="mt-8 w-16 h-1 bg-gradient-to-r from-accent to-gold mx-auto rounded-full" />
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
              className="group p-8 rounded-2xl bg-surface hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-transparent hover:border-accent/10"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent-warm/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {point.icon}
              </div>
              <h3 className="mt-5 text-xl font-outfit font-bold text-primary">{point.title}</h3>
              <p className="mt-3 text-primary/55 leading-relaxed font-inter">{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
