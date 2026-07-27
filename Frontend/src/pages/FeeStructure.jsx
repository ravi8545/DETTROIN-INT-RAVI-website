import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiInfo, FiCheckCircle } from 'react-icons/fi'

const feeData = [
  {
    category: 'Pre-Primary (Nursery – UKG)',
    admissionFee: '₹25,000',
    annualFee: '₹72,000',
    termFee: '₹24,000',
    busFee: '₹18,000 – ₹30,000',
    highlights: ['Activity-based learning kits included', 'Mid-day meals available at ₹2,500/term'],
  },
  {
    category: 'Primary Wing (Class I – V)',
    admissionFee: '₹35,000',
    annualFee: '₹90,000',
    termFee: '₹30,000',
    busFee: '₹18,000 – ₹30,000',
    highlights: ['Smart classroom & lab access', 'Annual exam & notebook fees included'],
  },
  {
    category: 'Middle School (Class VI – VIII)',
    admissionFee: '₹40,000',
    annualFee: '₹1,08,000',
    termFee: '₹36,000',
    busFee: '₹20,000 – ₹35,000',
    highlights: ['Science & computer lab access', 'Annual sports & cultural fest fees included'],
  },
  {
    category: 'Senior Secondary (Class IX – X)',
    admissionFee: '₹45,000',
    annualFee: '₹1,20,000',
    termFee: '₹40,000',
    busFee: '₹20,000 – ₹35,000',
    highlights: ['Board exam preparation resources', 'Career counseling included'],
  },
  {
    category: 'Senior Secondary (Class XI – XII)',
    admissionFee: '₹50,000',
    annualFee: '₹1,35,000',
    termFee: '₹45,000',
    busFee: '₹22,000 – ₹38,000',
    highlights: ['Stream-specific lab access', 'Competitive exam coaching support'],
  },
]

const additionalFees = [
  { item: 'Registration Fee (One-Time)', amount: '₹1,500', note: 'Non-refundable' },
  { item: 'Security Deposit (Refundable)', amount: '₹10,000', note: 'Refunded on leaving' },
  { item: 'Development Charges (Annual)', amount: '₹8,000', note: 'Infrastructure & tech' },
  { item: 'Examination Fee (Per Term)', amount: '₹2,000', note: 'Class VI onwards' },
  { item: 'Library & E-Resources (Annual)', amount: '₹3,500', note: 'Digital library access' },
  { item: 'Activity & Co-curricular (Annual)', amount: '₹5,000', note: 'Clubs, events, workshops' },
]

const scholarships = [
  { name: 'Merit Scholarship', criteria: 'Top 3 rank holders per class', benefit: 'Up to 50% tuition waiver' },
  { name: 'Sports Excellence', criteria: 'State/National level achievers', benefit: 'Up to 75% tuition waiver' },
  { name: 'Sibling Discount', criteria: '2nd child onwards', benefit: '10% on tuition fees' },
  { name: 'Single Parent / EWS', criteria: 'Income < ₹2 LPA', benefit: 'Up to 100% tuition waiver' },
]

export default function FeeStructure() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-emerald/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl translate-x-1/3" />

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
            <span className="text-emerald text-sm font-semibold uppercase tracking-wider font-outfit">Fee Structure</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-playfair font-bold text-primary leading-tight">
            Transparent &{' '}
            <span className="text-gradient">Affordable Fees</span>
          </h2>
          <p className="mt-6 text-primary/60 text-lg leading-relaxed font-inter">
            We believe quality education should be accessible. Our fee structure is competitive, transparent,
            and designed with multiple payment options and scholarship opportunities.
          </p>
        </motion.div>

        {/* Fee Cards */}
        <div className="space-y-6 mb-24">
          {feeData.map((tier, i) => (
            <motion.div
              key={tier.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              className="group p-6 lg:p-8 rounded-3xl bg-surface hover:bg-white hover:shadow-2xl hover:shadow-primary/10 border border-transparent hover:border-accent/10 transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Category Name */}
                <div className="lg:w-1/4">
                  <h3 className="text-lg font-outfit font-bold text-primary">{tier.category}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {tier.highlights.map((h, j) => (
                      <span key={j} className="text-[11px] px-2.5 py-1 rounded-full bg-accent/5 text-accent/80 font-outfit">{h}</span>
                    ))}
                  </div>
                </div>

                {/* Fee Breakdown */}
                <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-white text-center border border-primary/5 group-hover:border-accent/10 transition-colors">
                    <p className="text-xs text-primary/40 font-outfit uppercase tracking-wider">Admission</p>
                    <p className="text-xl font-bold font-outfit text-primary mt-1">{tier.admissionFee}</p>
                    <p className="text-[10px] text-primary/30 font-inter">One-time</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white text-center border border-primary/5 group-hover:border-accent/10 transition-colors">
                    <p className="text-xs text-primary/40 font-outfit uppercase tracking-wider">Annual</p>
                    <p className="text-xl font-bold font-outfit text-accent mt-1">{tier.annualFee}</p>
                    <p className="text-[10px] text-primary/30 font-inter">Per year</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white text-center border border-primary/5 group-hover:border-accent/10 transition-colors">
                    <p className="text-xs text-primary/40 font-outfit uppercase tracking-wider">Per Term</p>
                    <p className="text-xl font-bold font-outfit text-sky mt-1">{tier.termFee}</p>
                    <p className="text-[10px] text-primary/30 font-inter">3 terms/year</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white text-center border border-primary/5 group-hover:border-accent/10 transition-colors">
                    <p className="text-xs text-primary/40 font-outfit uppercase tracking-wider">Transport</p>
                    <p className="text-xl font-bold font-outfit text-emerald mt-1">{tier.busFee}</p>
                    <p className="text-[10px] text-primary/30 font-inter">Per year (optional)</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Fees & Scholarships Row */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Additional Fees */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="p-8 rounded-3xl bg-surface border border-primary/5"
          >
            <h3 className="text-2xl font-playfair font-bold text-primary mb-6">Additional Charges</h3>
            <div className="space-y-3">
              {additionalFees.map((fee, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-primary/5 last:border-0">
                  <div>
                    <p className="font-outfit font-semibold text-primary text-sm">{fee.item}</p>
                    <p className="text-xs text-primary/40 font-inter">{fee.note}</p>
                  </div>
                  <span className="font-outfit font-bold text-primary">{fee.amount}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Scholarships */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="p-8 rounded-3xl animated-gradient relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=40')] bg-cover bg-center opacity-5" />
            <div className="relative z-10">
              <h3 className="text-2xl font-playfair font-bold text-white mb-2">Scholarships & Financial Aid</h3>
              <p className="text-white/50 text-sm font-inter mb-8">We ensure no deserving student is denied education due to financial constraints.</p>
              <div className="space-y-4">
                {scholarships.map((s, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-white font-outfit font-bold">{s.name}</h4>
                        <p className="text-white/40 text-xs font-inter mt-0.5">{s.criteria}</p>
                      </div>
                      <span className="text-gold font-outfit font-bold text-sm whitespace-nowrap">{s.benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex items-start gap-4 p-6 rounded-2xl bg-gold/5 border border-gold/20 max-w-3xl mx-auto"
        >
          <FiInfo className="text-gold text-xl mt-0.5 shrink-0" />
          <div>
            <p className="text-primary font-outfit font-semibold text-sm">Important Note</p>
            <p className="text-primary/50 text-sm font-inter mt-1">
              Fees are subject to revision at the beginning of each academic session. Parents will be notified
              at least 3 months in advance. Fees once paid are non-refundable. Installment options are available
              upon request at the accounts office.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
