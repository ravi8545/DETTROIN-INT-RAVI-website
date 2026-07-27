import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiUser, FiLock, FiUsers, FiCalendar, FiCreditCard, FiMessageSquare, FiTruck, FiFileText, FiBell, FiCheckCircle, FiAlertCircle, FiBarChart2 } from 'react-icons/fi'

const dashboardCards = [
  { icon: <FiBarChart2 className="text-xl" />, title: 'Academic Progress', desc: 'Track grades, rankings & performance trends', color: 'from-accent to-accent-warm' },
  { icon: <FiCalendar className="text-xl" />, title: 'Attendance Report', desc: 'Monthly & yearly attendance summary', color: 'from-sky to-emerald' },
  { icon: <FiCreditCard className="text-xl" />, title: 'Fee Payments', desc: 'View dues, pay online & download receipts', color: 'from-emerald to-emerald-light' },
  { icon: <FiMessageSquare className="text-xl" />, title: 'Messages', desc: 'Communication with teachers & admin', color: 'from-gold to-accent-warm' },
  { icon: <FiTruck className="text-xl" />, title: 'Transport Tracker', desc: 'Live bus tracking & route details', color: 'from-primary-light to-sky' },
  { icon: <FiFileText className="text-xl" />, title: 'Reports & TC', desc: 'Download report cards & certificates', color: 'from-accent-warm to-gold' },
]

const childrenData = [
  {
    name: 'Aarav Sharma',
    class: 'Class VIII-A',
    roll: 23,
    attendance: '94%',
    lastExam: '87.5%',
    feeDue: '₹0',
    feeStatus: 'paid',
  },
  {
    name: 'Ananya Sharma',
    class: 'Class V-B',
    roll: 12,
    attendance: '97%',
    lastExam: '92.3%',
    feeDue: '₹30,000',
    feeStatus: 'due',
  },
]

const recentActivity = [
  { date: '27 Jul', text: 'Term 1 Report Card published for Aarav', type: 'academic' },
  { date: '25 Jul', text: 'Fee receipt generated — ₹40,000 paid for Ananya', type: 'fee' },
  { date: '23 Jul', text: 'Parent-Teacher Meeting scheduled for 28 Jul', type: 'meeting' },
  { date: '22 Jul', text: 'Aarav awarded "Best Speaker" in debate competition', type: 'achievement' },
  { date: '20 Jul', text: 'Ananya\'s attendance dropped below 95% — action needed', type: 'alert' },
  { date: '18 Jul', text: 'Annual Day performance consent form pending for Ananya', type: 'action' },
]

const feeHistory = [
  { date: '15 Apr 2026', desc: 'Term 1 Tuition Fee — Aarav', amount: '₹40,000', status: 'Paid' },
  { date: '15 Apr 2026', desc: 'Term 1 Tuition Fee — Ananya', amount: '₹30,000', status: 'Paid' },
  { date: '01 Apr 2026', desc: 'Annual Development Charges', amount: '₹16,000', status: 'Paid' },
  { date: '15 Jul 2026', desc: 'Term 2 Tuition Fee — Aarav', amount: '₹40,000', status: 'Paid' },
  { date: '15 Jul 2026', desc: 'Term 2 Tuition Fee — Ananya', amount: '₹30,000', status: 'Due' },
]

export default function ParentPortal() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })
  const [loggedIn, setLoggedIn] = useState(false)

  if (!loggedIn) {
    return (
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-md mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-accent to-accent-warm flex items-center justify-center shadow-xl">
              <FiUsers className="text-white text-3xl" />
            </div>
            <h2 className="text-3xl font-playfair font-bold text-primary">Parent Portal</h2>
            <p className="text-primary/50 font-inter mt-2">Monitor your child's progress & manage fees</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            onSubmit={(e) => { e.preventDefault(); setLoggedIn(true) }}
            className="p-8 rounded-3xl bg-surface border border-primary/5 space-y-5"
          >
            <div>
              <label className="block text-sm font-outfit font-semibold text-primary/70 mb-1.5">Parent ID / Phone Number</label>
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30" />
                <input type="text" required placeholder="e.g., P2026001 or +91 98765 43210" className="w-full pl-11 pr-4 py-3 rounded-xl border border-primary/10 bg-white focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all font-inter text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-outfit font-semibold text-primary/70 mb-1.5">Password</label>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30" />
                <input type="password" required placeholder="Enter password" className="w-full pl-11 pr-4 py-3 rounded-xl border border-primary/10 bg-white focus:ring-2 focus:ring-accent/30 focus:border-accent outline-none transition-all font-inter text-sm" />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-primary/50 font-inter">
                <input type="checkbox" className="accent-accent w-4 h-4" /> Remember me
              </label>
              <a href="#" className="text-accent font-outfit font-semibold hover:underline">Forgot Password?</a>
            </div>
            <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-accent to-accent-warm text-white font-outfit font-semibold rounded-xl hover:shadow-lg hover:shadow-accent/30 transition-all duration-300">
              Login to Portal
            </button>
            <p className="text-center text-xs text-primary/30 font-inter">
              Default credentials were shared via SMS at the time of admission
            </p>
          </motion.form>
        </div>
      </section>
    )
  }

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl -translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 mb-3">
              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
              <span className="text-accent text-sm font-semibold uppercase tracking-wider font-outfit">Parent Dashboard</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-primary">
              Welcome, <span className="text-gradient">Mr. Sharma</span>
            </h2>
            <p className="text-primary/50 font-inter text-sm mt-1">2 children enrolled | Session 2026-27</p>
          </div>
          <button onClick={() => setLoggedIn(false)} className="px-5 py-2.5 rounded-full border border-primary/10 text-primary/60 font-outfit font-semibold text-sm hover:bg-surface transition-colors">
            Logout
          </button>
        </motion.div>

        {/* Children Summary Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {childrenData.map((child, i) => (
            <motion.div
              key={child.name}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              className="p-6 rounded-3xl bg-surface hover:bg-white hover:shadow-xl hover:shadow-primary/10 border border-transparent hover:border-accent/10 transition-all duration-400"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-playfair font-bold text-xl shadow-lg">
                  {child.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-outfit font-bold text-primary text-lg">{child.name}</h3>
                  <p className="text-xs text-primary/40 font-inter">{child.class} | Roll No. {child.roll}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-white text-center border border-primary/5">
                  <p className="text-[10px] text-primary/40 font-outfit uppercase">Attendance</p>
                  <p className="text-lg font-bold font-outfit text-emerald">{child.attendance}</p>
                </div>
                <div className="p-3 rounded-xl bg-white text-center border border-primary/5">
                  <p className="text-[10px] text-primary/40 font-outfit uppercase">Last Exam</p>
                  <p className="text-lg font-bold font-outfit text-sky">{child.lastExam}</p>
                </div>
                <div className="p-3 rounded-xl bg-white text-center border border-primary/5">
                  <p className="text-[10px] text-primary/40 font-outfit uppercase">Fee Due</p>
                  <p className={`text-lg font-bold font-outfit ${child.feeStatus === 'paid' ? 'text-emerald' : 'text-red-500'}`}>{child.feeDue}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Access */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {dashboardCards.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
              className="group p-5 rounded-2xl bg-surface hover:bg-white hover:shadow-xl hover:shadow-primary/10 border border-transparent hover:border-primary/5 transition-all duration-400 cursor-pointer text-center"
            >
              <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h4 className="mt-3 text-sm font-outfit font-bold text-primary">{item.title}</h4>
              <p className="text-[11px] text-primary/40 font-inter mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="p-6 rounded-3xl bg-surface border border-primary/5"
          >
            <h3 className="text-lg font-outfit font-bold text-primary flex items-center gap-2 mb-6">
              <FiBell className="text-accent" /> Recent Activity
            </h3>
            <div className="space-y-3">
              {recentActivity.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white hover:shadow-md transition-shadow border border-transparent hover:border-accent/10">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                    item.type === 'alert' ? 'bg-red-100 text-red-500' :
                    item.type === 'achievement' ? 'bg-gold/20 text-gold' :
                    item.type === 'fee' ? 'bg-emerald/10 text-emerald' :
                    'bg-sky/10 text-sky'
                  }`}>
                    {item.type === 'alert' ? <FiAlertCircle className="text-sm" /> : <FiCheckCircle className="text-sm" />}
                  </div>
                  <div>
                    <p className="text-sm font-inter text-primary/70 leading-snug">{item.text}</p>
                    <p className="text-[10px] text-primary/30 font-inter mt-1">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Fee History */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="p-6 rounded-3xl bg-surface border border-primary/5"
          >
            <h3 className="text-lg font-outfit font-bold text-primary flex items-center gap-2 mb-6">
              <FiCreditCard className="text-emerald" /> Fee Payment History
            </h3>
            <div className="overflow-hidden rounded-2xl border border-primary/5">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-2.5 px-4 text-left font-outfit text-xs">Date</th>
                    <th className="py-2.5 px-4 text-left font-outfit text-xs">Description</th>
                    <th className="py-2.5 px-4 text-right font-outfit text-xs">Amount</th>
                    <th className="py-2.5 px-4 text-center font-outfit text-xs">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {feeHistory.map((fee, i) => (
                    <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-surface'} hover:bg-accent/5 transition-colors`}>
                      <td className="py-2.5 px-4 font-inter text-primary/50 text-xs whitespace-nowrap">{fee.date}</td>
                      <td className="py-2.5 px-4 font-inter text-primary/70 text-xs">{fee.desc}</td>
                      <td className="py-2.5 px-4 font-outfit font-bold text-primary text-xs text-right">{fee.amount}</td>
                      <td className="py-2.5 px-4 text-center">
                        <span className={`text-[10px] px-2.5 py-1 rounded-full font-outfit font-bold ${fee.status === 'Paid' ? 'bg-emerald/10 text-emerald' : 'bg-red-100 text-red-500'}`}>
                          {fee.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="mt-6 w-full py-3 bg-gradient-to-r from-emerald to-emerald-light text-white font-outfit font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald/30 transition-all duration-300 text-sm">
              Pay Pending Fees Online
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
