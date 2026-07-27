import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80',
    category: 'Campus',
    title: 'Main Building',
  },
  {
    src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80',
    category: 'Campus',
    title: 'Classroom Wing',
  },
  {
    src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80',
    category: 'Library',
    title: 'Digital Library',
  },
  {
    src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80',
    category: 'Sports',
    title: 'Indoor Court',
  },
  {
    src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&q=80',
    category: 'Classroom',
    title: 'Smart Classroom',
  },
  {
    src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80',
    category: 'Lab',
    title: 'Science Laboratory',
  },
  {
    src: 'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?w=600&q=80',
    category: 'Sports',
    title: 'Sports Ground',
  },
  {
    src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    category: 'Classroom',
    title: 'Lecture Hall',
  },
]

const categories = ['All', 'Campus', 'Classroom', 'Sports', 'Lab', 'Library']

export default function CampusGallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <section id="campus" ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald/10 mb-6">
            <span className="w-1.5 h-1.5 bg-emerald rounded-full" />
            <span className="text-emerald text-sm font-semibold uppercase tracking-wider font-outfit">Our Campus</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-playfair font-bold text-primary">
            Explore Our{' '}
            <span className="text-gradient">World-Class Campus</span>
          </h2>
          <p className="mt-4 text-primary/50 text-lg max-w-2xl mx-auto font-inter">
            State-of-the-art infrastructure designed to provide the best learning environment
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 font-outfit ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-gray-100 text-primary/60 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                  i === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                    i === 0 ? 'h-full min-h-[300px] md:min-h-[420px]' : 'h-52 md:h-56'
                  }`}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider font-outfit">
                    {img.category}
                  </span>
                  <h3 className="text-white font-bold text-lg font-outfit mt-1">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
