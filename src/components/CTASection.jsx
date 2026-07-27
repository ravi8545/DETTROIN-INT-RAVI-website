import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight, FiPhoneCall, FiDownload } from 'react-icons/fi'

export default function CTASection() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section id="admission" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&q=80"
          alt="Graduation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary-light/85" />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-full"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-20 h-20 border border-accent/20 rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass mb-8">
              <span className="w-2 h-2 bg-emerald rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-outfit font-medium">Admissions Open 2026-27</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-playfair font-bold text-white leading-tight">
              Begin Your Child's{' '}
              <span className="text-gradient">Journey of Excellence</span>
            </h2>

            <p className="mt-6 text-white/60 text-lg font-inter max-w-lg leading-relaxed">
              Join the Dettroin family and give your child the gift of world-class education. 
              Limited seats available for the upcoming academic session.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-warm text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-accent/40 transition-all duration-300 hover:scale-105 font-outfit text-lg"
              >
                Apply Now
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 font-outfit"
              >
                <FiDownload /> Download Brochure
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="tel:+911234567890"
                className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors font-inter"
              >
                <FiPhoneCall className="text-accent" />
                Or call us: +91 123-456-7890
              </a>
            </div>
          </motion.div>

          {/* Right - Admission Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
              <h3 className="text-2xl font-playfair font-bold text-primary mb-2">
                Quick Enquiry
              </h3>
              <p className="text-primary/50 text-sm font-inter mb-6">
                Fill in your details and we'll get back to you within 24 hours
              </p>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Parent's Full Name"
                    className="w-full px-5 py-3.5 rounded-xl bg-surface border border-gray-200 text-primary placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all font-inter text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-5 py-3.5 rounded-xl bg-surface border border-gray-200 text-primary placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all font-inter text-sm"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-5 py-3.5 rounded-xl bg-surface border border-gray-200 text-primary placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all font-inter text-sm"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <select className="w-full px-5 py-3.5 rounded-xl bg-surface border border-gray-200 text-primary/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all font-inter text-sm">
                    <option>Select Class</option>
                    <option>Nursery</option>
                    <option>LKG</option>
                    <option>UKG</option>
                    <option>Grade I-V</option>
                    <option>Grade VI-VIII</option>
                    <option>Grade IX-X</option>
                    <option>Grade XI-XII</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Student's Name"
                    className="w-full px-5 py-3.5 rounded-xl bg-surface border border-gray-200 text-primary placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all font-inter text-sm"
                  />
                </div>
                <textarea
                  placeholder="Your Message (Optional)"
                  rows="3"
                  className="w-full px-5 py-3.5 rounded-xl bg-surface border border-gray-200 text-primary placeholder:text-primary/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all font-inter text-sm resize-none"
                />
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-accent to-accent-warm text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 font-outfit text-lg hover:scale-[1.02]"
                >
                  Submit Enquiry
                </button>
              </form>

              <p className="text-center text-primary/40 text-xs mt-4 font-inter">
                By submitting, you agree to our Terms & Privacy Policy
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
