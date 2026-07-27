import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiUser, FiUsers, FiBook, FiMapPin, FiPhone, FiMail, FiCalendar, FiChevronDown, FiCheckCircle, FiUpload } from 'react-icons/fi'

const classOptions = [
  'Nursery', 'LKG', 'UKG',
  'Class I', 'Class II', 'Class III', 'Class IV', 'Class V',
  'Class VI', 'Class VII', 'Class VIII',
  'Class IX', 'Class X',
  'Class XI – Science', 'Class XI – Commerce', 'Class XI – Humanities',
  'Class XII – Science', 'Class XII – Commerce', 'Class XII – Humanities',
]

export default function ApplyOnline() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-emerald to-emerald-light flex items-center justify-center shadow-2xl"
          >
            <FiCheckCircle className="text-white text-4xl" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl lg:text-4xl font-playfair font-bold text-primary"
          >
            Application Submitted!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-primary/60 text-lg font-inter leading-relaxed"
          >
            Thank you for applying to Dettroin International School. Your application reference number
            is <span className="font-bold text-accent">DIS-2026-{Math.floor(10000 + Math.random() * 90000)}</span>.
            Our admissions team will contact you within 3–5 working days.
          </motion.p>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            href="/"
            className="inline-flex items-center gap-2 mt-10 px-8 py-3.5 bg-primary text-white rounded-full font-outfit font-semibold hover:bg-primary-light transition-all"
          >
            Back to Home
          </motion.a>
        </div>
      </section>
    )
  }

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -translate-x-1/3" />

      <div className="max-w-4xl mx-auto px-4 lg:px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky/10 mb-6">
            <span className="w-1.5 h-1.5 bg-sky rounded-full" />
            <span className="text-sky text-sm font-semibold uppercase tracking-wider font-outfit">Apply Online</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-playfair font-bold text-primary leading-tight">
            Begin Your{' '}
            <span className="text-gradient">Application</span>
          </h2>
          <p className="mt-6 text-primary/60 text-lg leading-relaxed font-inter">
            Fill out the form below to start the admission process. It takes just a few minutes.
          </p>
        </motion.div>

        {/* Step Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          {[
            { num: 1, label: 'Student Info' },
            { num: 2, label: 'Parent Details' },
            { num: 3, label: 'Academics' },
          ].map((s) => (
            <div key={s.num} className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-outfit font-bold text-sm transition-all duration-300 ${
                step >= s.num
                  ? 'bg-gradient-to-br from-accent to-accent-warm text-white shadow-lg shadow-accent/30'
                  : 'bg-surface text-primary/30 border border-primary/10'
              }`}>
                {step > s.num ? <FiCheckCircle /> : s.num}
              </div>
              <span className={`text-sm font-outfit font-medium hidden sm:block ${step >= s.num ? 'text-primary' : 'text-primary/30'}`}>
                {s.label}
              </span>
              {s.num < 3 && <div className={`w-12 h-0.5 rounded-full ${step > s.num ? 'bg-accent' : 'bg-primary/10'}`} />}
            </div>
          ))}
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="p-8 lg:p-10 rounded-3xl bg-surface border border-primary/5"
        >
          {/* Step 1: Student Info */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-playfair font-bold text-primary flex items-center gap-2">
                <FiUser className="text-accent" /> Student Information
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-outfit font-semibold text-primary/70 mb-1.5">First Name *</label>
                  <input type="text" required placeholder="Enter first name" className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all font-inter text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-outfit font-semibold text-primary/70 mb-1.5">Last Name *</label>
                  <input type="text" required placeholder="Enter last name" className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all font-inter text-sm" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-outfit font-semibold text-primary/70 mb-1.5">Date of Birth *</label>
                  <input type="date" required className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all font-inter text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-outfit font-semibold text-primary/70 mb-1.5">Gender *</label>
                  <select required className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all font-inter text-sm">
                    <option value="">Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-outfit font-semibold text-primary/70 mb-1.5">Applying for Class *</label>
                <select required className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all font-inter text-sm">
                  <option value="">Select class</option>
                  {classOptions.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-outfit font-semibold text-primary/70 mb-1.5">Aadhaar Number (Student)</label>
                <input type="text" placeholder="XXXX XXXX XXXX" maxLength={14} className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all font-inter text-sm" />
              </div>
            </motion.div>
          )}

          {/* Step 2: Parent Details */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-playfair font-bold text-primary flex items-center gap-2">
                <FiUsers className="text-sky" /> Parent / Guardian Details
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-outfit font-semibold text-primary/70 mb-1.5">Father's Name *</label>
                  <input type="text" required placeholder="Full name" className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all font-inter text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-outfit font-semibold text-primary/70 mb-1.5">Father's Occupation *</label>
                  <input type="text" required placeholder="Occupation" className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all font-inter text-sm" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-outfit font-semibold text-primary/70 mb-1.5">Mother's Name *</label>
                  <input type="text" required placeholder="Full name" className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all font-inter text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-outfit font-semibold text-primary/70 mb-1.5">Mother's Occupation</label>
                  <input type="text" placeholder="Occupation" className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all font-inter text-sm" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-outfit font-semibold text-primary/70 mb-1.5">Phone Number *</label>
                  <input type="tel" required placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all font-inter text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-outfit font-semibold text-primary/70 mb-1.5">Email Address *</label>
                  <input type="email" required placeholder="parent@email.com" className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all font-inter text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-outfit font-semibold text-primary/70 mb-1.5">Residential Address *</label>
                <textarea required rows={3} placeholder="Full address with pincode" className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all font-inter text-sm resize-none" />
              </div>
            </motion.div>
          )}

          {/* Step 3: Academics */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-playfair font-bold text-primary flex items-center gap-2">
                <FiBook className="text-emerald" /> Academic Information
              </h3>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-outfit font-semibold text-primary/70 mb-1.5">Previous School Name</label>
                  <input type="text" placeholder="Name of school" className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all font-inter text-sm" />
                </div>
                <div>
                  <label className="block text-sm font-outfit font-semibold text-primary/70 mb-1.5">Board / Affiliation</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all font-inter text-sm">
                    <option value="">Select board</option>
                    <option>CBSE</option>
                    <option>ICSE</option>
                    <option>State Board</option>
                    <option>IB</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-outfit font-semibold text-primary/70 mb-1.5">Last Class Attended & Percentage</label>
                <div className="grid md:grid-cols-2 gap-5">
                  <input type="text" placeholder="e.g., Class V" className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all font-inter text-sm" />
                  <input type="text" placeholder="e.g., 92%" className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all font-inter text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-outfit font-semibold text-primary/70 mb-1.5">Upload Transfer Certificate (PDF/Image)</label>
                <div className="w-full p-6 rounded-xl border-2 border-dashed border-primary/10 bg-white text-center hover:border-accent/30 transition-colors cursor-pointer">
                  <FiUpload className="text-2xl text-primary/30 mx-auto mb-2" />
                  <p className="text-sm text-primary/40 font-inter">Click to upload or drag & drop</p>
                  <p className="text-xs text-primary/25 font-inter mt-1">PDF, JPG, PNG — Max 5MB</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-outfit font-semibold text-primary/70 mb-1.5">Any Special Requirements / Remarks</label>
                <textarea rows={3} placeholder="Learning needs, medical conditions, special talents, etc." className="w-full px-4 py-3 rounded-xl border border-primary/10 bg-white focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all font-inter text-sm resize-none" />
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required className="mt-1 accent-accent w-4 h-4" />
                <span className="text-sm text-primary/50 font-inter">
                  I hereby declare that all the information provided is true and correct. I agree to the
                  school's admission policy and terms & conditions.
                </span>
              </label>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-10 pt-8 border-t border-primary/5">
            {step > 1 ? (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-6 py-3 rounded-full border border-primary/10 text-primary/60 font-outfit font-semibold text-sm hover:bg-surface transition-colors"
              >
                ← Previous
              </button>
            ) : <div />}
            <button
              type="submit"
              className="px-8 py-3.5 bg-gradient-to-r from-accent to-accent-warm text-white font-outfit font-semibold rounded-full hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 text-sm"
            >
              {step < 3 ? 'Next Step →' : 'Submit Application'}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
