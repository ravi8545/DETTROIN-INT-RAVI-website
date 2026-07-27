import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiFileText, FiUserCheck, FiCalendar, FiCheckCircle, FiArrowRight, FiDownload } from 'react-icons/fi'

const admissionSteps = [
  {
    step: '01',
    icon: <FiFileText className="text-2xl" />,
    title: 'Online Registration',
    desc: 'Fill out the online registration form on our website with the student\'s personal details, academic records, and parent/guardian information. A non-refundable registration fee of ₹1,500 is payable during this step.',
    timeline: 'Available Year-Round',
    color: 'from-accent to-accent-warm',
  },
  {
    step: '02',
    icon: <FiCalendar className="text-2xl" />,
    title: 'Entrance Assessment',
    desc: 'Students are invited for an age-appropriate written assessment covering English, Mathematics, and General Awareness. For Pre-Primary (Nursery to UKG), an interaction session with the child and parents is conducted instead.',
    timeline: 'Within 7 days of registration',
    color: 'from-sky to-emerald',
  },
  {
    step: '03',
    icon: <FiUserCheck className="text-2xl" />,
    title: 'Parent-Student Interaction',
    desc: 'A personal interaction session with the Principal and the Admissions Committee. This is an opportunity for parents to understand the school\'s philosophy and for the school to understand the student\'s learning needs and interests.',
    timeline: 'Scheduled after assessment',
    color: 'from-emerald to-emerald-light',
  },
  {
    step: '04',
    icon: <FiCheckCircle className="text-2xl" />,
    title: 'Admission Offer & Enrollment',
    desc: 'Selected students receive an admission offer letter via email and SMS. Parents must confirm the seat by paying the admission fee and submitting required documents within 10 working days. Late confirmations may result in seat forfeiture.',
    timeline: 'Within 5 days of interaction',
    color: 'from-gold to-accent-warm',
  },
]

const requiredDocs = [
  'Birth Certificate (Original + 2 Photocopies)',
  'Aadhaar Card of Student & Both Parents',
  'Previous School Transfer Certificate (TC)',
  'Report Card / Mark Sheet of Last 2 Years',
  '4 Passport-Size Photographs of Student',
  '2 Passport-Size Photographs of Each Parent',
  'Address Proof (Electricity Bill / Aadhaar)',
  'Caste Certificate (if applicable)',
  'Medical Fitness Certificate',
  'Migration Certificate (for Class XI)',
]

const ageRequirements = [
  { class: 'Nursery', age: '3+ years as of 31st March' },
  { class: 'LKG', age: '4+ years as of 31st March' },
  { class: 'UKG', age: '5+ years as of 31st March' },
  { class: 'Class I', age: '6+ years as of 31st March' },
  { class: 'Class II–VIII', age: 'Age-appropriate + TC from previous school' },
  { class: 'Class IX–X', age: 'CBSE board-aligned syllabus + TC' },
  { class: 'Class XI', age: 'Board exam result + Migration Certificate' },
]

export default function AdmissionProcess() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-sky/5 rounded-full blur-3xl -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 mb-6">
            <span className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span className="text-accent text-sm font-semibold uppercase tracking-wider font-outfit">Admission Process</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-playfair font-bold text-primary leading-tight">
            Your Journey to{' '}
            <span className="text-gradient">Dettroin Begins Here</span>
          </h2>
          <p className="mt-6 text-primary/60 text-lg leading-relaxed font-inter">
            We have designed a transparent, streamlined admission process to make joining the Dettroin family
            as smooth as possible. Follow these simple steps to secure your child's future.
          </p>
        </motion.div>

        {/* Admission Steps */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {admissionSteps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className="group relative p-8 rounded-3xl bg-surface hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 border border-transparent hover:border-accent/10"
            >
              {/* Step number */}
              <div className="absolute top-6 right-6 text-6xl font-outfit font-black text-primary/5 group-hover:text-accent/10 transition-colors duration-300">
                {item.step}
              </div>
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="mt-6 text-xl font-outfit font-bold text-primary">{item.title}</h3>
              <p className="mt-3 text-primary/55 leading-relaxed font-inter text-sm">{item.desc}</p>
              <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/5 text-accent text-xs font-semibold font-outfit">
                <FiCalendar className="text-xs" />
                {item.timeline}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Two Column: Documents + Age */}
        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Required Documents */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="p-8 rounded-3xl bg-surface border border-primary/5"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky to-emerald flex items-center justify-center text-white">
                <FiFileText className="text-xl" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-primary">Required Documents</h3>
            </div>
            <ul className="space-y-3">
              {requiredDocs.map((doc, i) => (
                <li key={i} className="flex items-start gap-3 text-primary/60 font-inter text-sm">
                  <FiCheckCircle className="text-emerald mt-0.5 shrink-0" />
                  {doc}
                </li>
              ))}
            </ul>
            <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-outfit font-semibold text-sm hover:bg-primary-light hover:shadow-lg transition-all duration-300">
              <FiDownload className="text-sm" />
              Download Checklist
            </button>
          </motion.div>

          {/* Age Requirements */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="p-8 rounded-3xl bg-surface border border-primary/5"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-warm flex items-center justify-center text-white">
                <FiUserCheck className="text-xl" />
              </div>
              <h3 className="text-2xl font-playfair font-bold text-primary">Age Eligibility</h3>
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary/5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-3 px-5 text-left font-outfit font-semibold">Class</th>
                    <th className="py-3 px-5 text-left font-outfit font-semibold">Age Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  {ageRequirements.map((row, i) => (
                    <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-surface'} hover:bg-accent/5 transition-colors`}>
                      <td className="py-3 px-5 font-outfit font-semibold text-primary">{row.class}</td>
                      <td className="py-3 px-5 font-inter text-primary/60">{row.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block p-10 rounded-3xl animated-gradient relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c476?w=1200&q=40')] bg-cover bg-center opacity-10" />
            <div className="relative z-10">
              <h3 className="text-white text-3xl font-playfair font-bold">Ready to Join Dettroin?</h3>
              <p className="text-white/60 font-inter mt-3 max-w-xl mx-auto">
                Admissions for the academic year 2026-27 are now open. Apply today and give your child
                the gift of world-class education.
              </p>
              <a
                href="/apply-online"
                className="inline-flex items-center gap-2 mt-8 px-8 py-3.5 bg-white text-primary rounded-full font-semibold hover:bg-gold hover:text-primary hover:shadow-xl transition-all duration-300 font-outfit"
              >
                Apply Now
                <FiArrowRight />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
