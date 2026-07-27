import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiLinkedin } from 'react-icons/fi'

const managementTeam = [
  {
    name: 'Dr. Rajendra Prasad Sharma',
    role: 'Chairman',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    bio: 'A visionary educationist with over 35 years of experience in transforming educational institutions. Dr. Sharma holds a Ph.D. in Education Policy from Delhi University and has been instrumental in establishing Dettroin as a premier institution.',
    email: 'chairman@dettroin.edu',
    phone: '+91 98765 43210',
  },
  {
    name: 'Mrs. Kavita Sharma',
    role: 'Vice Chairperson',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: 'An advocate for holistic education and women empowerment in academics. Mrs. Sharma oversees community outreach programs and ensures the school\'s mission translates into everyday practice.',
    email: 'vc@dettroin.edu',
    phone: '+91 98765 43211',
  },
  {
    name: 'Mr. Arjun Mehta',
    role: 'Director of Academics',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'An IIT Delhi alumnus and former CBSE curriculum advisor with 20+ years in academic leadership. Mr. Mehta spearheads curriculum innovation and faculty development at Dettroin.',
    email: 'director@dettroin.edu',
    phone: '+91 98765 43212',
  },
  {
    name: 'Dr. Priya Nair',
    role: 'Principal',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'A seasoned educator with a Doctorate in Child Psychology and 18 years of school administration experience. Dr. Nair is passionate about student welfare and innovative teaching practices.',
    email: 'principal@dettroin.edu',
    phone: '+91 98765 43213',
  },
  {
    name: 'Mr. Vikram Singh',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'An MBA from IIM Ahmedabad with extensive experience in institutional management. Mr. Singh ensures smooth day-to-day operations, infrastructure development, and resource planning.',
    email: 'operations@dettroin.edu',
    phone: '+91 98765 43214',
  },
  {
    name: 'Mrs. Ananya Desai',
    role: 'Head of Student Affairs',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&q=80',
    bio: 'A counseling psychologist and former Teach For India fellow. Mrs. Desai leads student counseling, extracurricular programming, and pastoral care initiatives across all wings.',
    email: 'studentaffairs@dettroin.edu',
    phone: '+91 98765 43215',
  },
]

const boardMembers = [
  { name: 'Justice (Retd.) V.K. Agarwal', designation: 'Advisory Board Member' },
  { name: 'Prof. Sunita Krishnan', designation: 'Academic Advisor' },
  { name: 'Mr. Deepak Chopra', designation: 'Finance Committee Head' },
  { name: 'Dr. Meena Iyer', designation: 'Health & Safety Advisor' },
]

export default function Management() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            <span className="text-primary text-sm font-semibold uppercase tracking-wider font-outfit">Leadership</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-playfair font-bold text-primary leading-tight">
            Our{' '}
            <span className="text-gradient">Management Team</span>
          </h2>
          <p className="mt-6 text-primary/60 text-lg leading-relaxed font-inter">
            Meet the dedicated leaders who steer Dettroin International School towards excellence.
            Their collective wisdom, passion for education, and unwavering commitment to our students
            form the backbone of our institution.
          </p>
        </motion.div>

        {/* Leadership Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {managementTeam.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              className="group bg-surface rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-transparent hover:border-accent/10"
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="text-white font-playfair font-bold text-xl">{member.name}</h3>
                  <p className="text-accent-warm font-outfit text-sm font-semibold mt-0.5">{member.role}</p>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <p className="text-primary/55 text-sm leading-relaxed font-inter">{member.bio}</p>
                <div className="mt-5 pt-5 border-t border-primary/5 flex items-center gap-4">
                  <a href={`mailto:${member.email}`} className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300">
                    <FiMail className="text-sm" />
                  </a>
                  <a href={`tel:${member.phone}`} className="w-9 h-9 rounded-full bg-sky/10 flex items-center justify-center text-sky hover:bg-sky hover:text-white transition-all duration-300">
                    <FiPhone className="text-sm" />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300">
                    <FiLinkedin className="text-sm" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisory Board */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-2xl font-playfair font-bold text-primary text-center mb-10">Advisory Board</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {boardMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
                className="p-6 rounded-2xl bg-surface text-center hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-transparent hover:border-primary/5"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-playfair font-bold text-xl mb-4">
                  {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </div>
                <h4 className="font-outfit font-bold text-primary text-sm">{member.name}</h4>
                <p className="text-primary/45 text-xs font-inter mt-1">{member.designation}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
