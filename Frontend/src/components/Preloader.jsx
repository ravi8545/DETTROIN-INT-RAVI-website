import { motion } from 'framer-motion'
import dettroinLogo from '../assets/dettroin-logo.png'

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center animated-gradient"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* School Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <img src={dettroinLogo} alt="Dettroin International School Logo" className="w-24 h-24 mx-auto rounded-full object-contain shadow-2xl" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white font-playfair text-3xl md:text-4xl font-bold tracking-wide"
        >
          Dettroin International
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-gold-light font-outfit text-lg mt-2 tracking-widest uppercase"
        >
          School of Excellence
        </motion.p>

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-10 w-48 mx-auto h-1 bg-white/20 rounded-full overflow-hidden"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 1.2, duration: 1.3, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-accent via-gold to-accent-warm rounded-full"
          />
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-20 w-16 h-16 rounded-full bg-accent/10 blur-xl"
      />
      <motion.div
        animate={{ y: [20, -20, 20], rotate: [360, 180, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-gold/10 blur-xl"
      />
    </motion.div>
  )
}
