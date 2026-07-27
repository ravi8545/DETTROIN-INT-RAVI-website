import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCalendar, FiMapPin, FiAward, FiBookOpen, FiUsers, FiGlobe, FiStar, FiTrendingUp } from 'react-icons/fi'

const timelineEvents = [
  {
    year: '2001',
    title: 'Foundation & Inauguration',
    desc: 'Dettroin International School was founded by Dr. Rajendra Prasad Sharma with a vision to provide world-class education accessible to all. The school began with just 120 students, 8 teachers, and a single building wing on a 2-acre campus in Knowledge Park.',
    icon: <FiCalendar />,
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80',
    highlight: 'Founding Year',
  },
  {
    year: '2004',
    title: 'CBSE Affiliation Achieved',
    desc: 'After three years of exemplary academic performance and rigorous infrastructure development, Dettroin received its full CBSE affiliation. The school expanded to include classes from Nursery through Class X, with student enrollment crossing 500.',
    icon: <FiAward />,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    highlight: 'CBSE Affiliated',
  },
  {
    year: '2007',
    title: 'Campus Expansion Phase I',
    desc: 'The campus grew to 5 acres with the addition of a state-of-the-art science block, computer laboratory wing, and the iconic 800-seat auditorium — "The Dettroin Hall". An Olympic-size swimming pool and indoor sports complex were also inaugurated.',
    icon: <FiMapPin />,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80',
    highlight: '5-Acre Campus',
  },
  {
    year: '2010',
    title: 'Senior Secondary Wing Launch',
    desc: 'Dettroin expanded to Class XII with Science, Commerce, and Humanities streams. The school\'s first batch of Class XII students achieved a 100% pass rate with 15 students securing ranks in national competitive exams including IIT-JEE and NEET.',
    icon: <FiBookOpen />,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c476?w=600&q=80',
    highlight: '100% Pass Rate',
  },
  {
    year: '2013',
    title: 'International Exchange Program',
    desc: 'Dettroin launched its International Student Exchange Program with partner schools in Singapore, London, and Melbourne. Over 50 students participated in cross-cultural immersion programs, and the school hosted 30 international students on campus.',
    icon: <FiGlobe />,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80',
    highlight: 'Global Reach',
  },
  {
    year: '2016',
    title: 'Excellence in Sports & Arts',
    desc: 'The school\'s cricket team won the National Inter-School Championship. Our music ensemble performed at the National Cultural Festival. The art department\'s exhibition was featured in national media. Student enrollment crossed 2,000.',
    icon: <FiStar />,
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80',
    highlight: 'National Champions',
  },
  {
    year: '2019',
    title: 'Smart Campus 2.0 & Innovation Hub',
    desc: 'Dettroin underwent a complete digital transformation. Every classroom was converted to a smart classroom with interactive panels. The Innovation & Robotics Hub was established with a ₹2 crore investment, featuring 3D printers, coding labs, and an AI playground.',
    icon: <FiTrendingUp />,
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
    highlight: 'Digital Campus',
  },
  {
    year: '2022',
    title: 'Campus Expansion Phase II',
    desc: 'The campus expanded to a sprawling 12 acres with the inauguration of a new academic block, amphitheater, botanical garden, and the Dettroin Sports Arena. Student enrollment crossed 3,000 with a 150+ strong faculty.',
    icon: <FiUsers />,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80',
    highlight: '12-Acre Campus',
  },
  {
    year: '2025',
    title: 'Silver Jubilee & International Recognition',
    desc: 'Dettroin celebrated its 25th anniversary with grand celebrations and was ranked among the Top 50 Schools in India by Education World. The school received the "International School of Excellence" award from the Global Education Council.',
    icon: <FiAward />,
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80',
    highlight: 'Top 50 in India',
  },
]

export default function History() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 mb-6">
            <span className="w-1.5 h-1.5 bg-gold rounded-full" />
            <span className="text-gold text-sm font-semibold uppercase tracking-wider font-outfit">Our Journey</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-playfair font-bold text-primary leading-tight">
            25 Years of{' '}
            <span className="text-gradient">Shaping Futures</span>
          </h2>
          <p className="mt-6 text-primary/60 text-lg leading-relaxed font-inter">
            From a humble beginning in 2001 with 120 students to becoming one of the most
            respected educational institutions in the region — our journey is a testament to
            dedication, innovation, and an unwavering belief in the power of education.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-gold to-emerald hidden lg:block" />

          {timelineEvents.map((event, i) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7 }}
              className={`relative flex flex-col lg:flex-row items-center gap-8 mb-16 last:mb-0 ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <div className={`flex-1 ${i % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                <div className="bg-surface rounded-2xl p-8 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-transparent hover:border-accent/10">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold font-outfit mb-4 ${i % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                    {event.highlight}
                  </div>
                  <h3 className="text-xl font-playfair font-bold text-primary">{event.title}</h3>
                  <p className="mt-3 text-primary/55 text-sm leading-relaxed font-inter">{event.desc}</p>
                </div>
              </div>

              {/* Year Badge (center) */}
              <div className="relative z-10 shrink-0">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent-warm flex flex-col items-center justify-center text-white shadow-xl shadow-accent/30">
                  <span className="text-lg font-bold font-outfit leading-none">{event.year}</span>
                  <span className="text-[9px] uppercase tracking-wider opacity-70 mt-0.5">Year</span>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="rounded-2xl overflow-hidden shadow-xl group">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="inline-block p-10 rounded-3xl animated-gradient relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=40')] bg-cover bg-center opacity-10" />
            <div className="relative z-10">
              <h3 className="text-white text-3xl font-playfair font-bold">The Journey Continues...</h3>
              <p className="text-white/60 font-inter mt-3 max-w-xl mx-auto">
                As we step into our next chapter, we invite you to be part of the Dettroin story.
                Together, let's shape the leaders of tomorrow.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-white text-primary rounded-full font-semibold hover:bg-gold hover:text-primary hover:shadow-xl transition-all duration-300 font-outfit"
              >
                Join Our Legacy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
