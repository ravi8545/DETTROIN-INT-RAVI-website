import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBookOpen, FiCalendar, FiClipboard, FiDownload, FiFileText, FiAward, FiClock, FiBell, FiUser, FiLock, FiMail } from 'react-icons/fi'

const quickLinks = [
  { icon: <FiCalendar className="text-xl" />, title: 'Attendance', desc: 'View daily attendance records', color: 'from-accent to-accent-warm' },
  { icon: <FiClipboard className="text-xl" />, title: 'Exam Results', desc: 'Check term-wise results & report cards', color: 'from-sky to-emerald' },
  { icon: <FiBookOpen className="text-xl" />, title: 'Assignments', desc: 'View & submit homework online', color: 'from-emerald to-emerald-light' },
  { icon: <FiDownload className="text-xl" />, title: 'Study Material', desc: 'Download notes, worksheets & PDFs', color: 'from-gold to-accent-warm' },
  { icon: <FiFileText className="text-xl" />, title: 'Time Table', desc: 'Class schedule & exam timetable', color: 'from-primary-light to-sky' },
  { icon: <FiAward className="text-xl" />, title: 'Achievements', desc: 'Certificates & awards gallery', color: 'from-accent-warm to-gold' },
]

const notices = [
  { date: '25 Jul 2026', title: 'Mid-Term Examination Schedule Released', type: 'Exam', urgent: true },
  { date: '22 Jul 2026', title: 'Independence Day Celebration — Rehearsal Schedule', type: 'Event', urgent: false },
  { date: '20 Jul 2026', title: 'Science Fair Project Submission Deadline Extended', type: 'Academic', urgent: false },
  { date: '18 Jul 2026', title: 'Annual Sports Day Registration Open', type: 'Sports', urgent: false },
  { date: '15 Jul 2026', title: 'Parent-Teacher Meeting — Class VI to X', type: 'Meeting', urgent: true },
]

const timetable = [
  { time: '8:00 – 8:45', mon: 'English', tue: 'Mathematics', wed: 'Science', thu: 'Hindi', fri: 'Social Science' },
  { time: '8:45 – 9:30', mon: 'Mathematics', tue: 'English', wed: 'Hindi', thu: 'Science', fri: 'Computer' },
  { time: '9:30 – 10:15', mon: 'Science', tue: 'Hindi', wed: 'Mathematics', thu: 'English', fri: 'English' },
  { time: '10:15 – 10:45', mon: 'BREAK', tue: 'BREAK', wed: 'BREAK', thu: 'BREAK', fri: 'BREAK' },
  { time: '10:45 – 11:30', mon: 'Social Science', tue: 'Science', wed: 'Computer', thu: 'Mathematics', fri: 'Art' },
  { time: '11:30 – 12:15', mon: 'Hindi', tue: 'Physical Ed.', wed: 'English', thu: 'Social Science', fri: 'Mathematics' },
  { time: '12:15 – 1:00', mon: 'Computer', tue: 'Social Science', wed: 'Physical Ed.', thu: 'Art', fri: 'Science' },
  { time: '1:00 – 1:30', mon: 'LUNCH', tue: 'LUNCH', wed: 'LUNCH', thu: 'LUNCH', fri: 'LUNCH' },
  { time: '1:30 – 2:15', mon: 'Art', tue: 'Library', wed: 'Music', thu: 'Physical Ed.', fri: 'Hindi' },
]

export default function StudentPortal() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true })
  const [loggedIn, setLoggedIn] = useState(false)

  if (!loggedIn) {
    return (
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-md mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-sky to-emerald flex items-center justify-center shadow-xl">
              <FiUser className="text-white text-3xl" />
            </div>
            <h2 className="text-3xl font-playfair font-bold text-primary">Student Portal</h2>
            <p className="text-primary/50 font-inter mt-2">Access your academic dashboard</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            onSubmit={(e) => { e.preventDefault(); setLoggedIn(true) }}
            className="p-8 rounded-3xl bg-surface border border-primary/5 space-y-5"
          >
            <div>
              <label className="block text-sm font-outfit font-semibold text-primary/70 mb-1.5">Student ID / Enrollment No.</label>
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30" />
                <input type="text" required placeholder="e.g., DIS2026001" className="w-full pl-11 pr-4 py-3 rounded-xl border border-primary/10 bg-white focus:ring-2 focus:ring-sky/30 focus:border-sky outline-none transition-all font-inter text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-outfit font-semibold text-primary/70 mb-1.5">Password</label>
              <div className="relative">
                <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30" />
                <input type="password" required placeholder="Enter password" className="w-full pl-11 pr-4 py-3 rounded-xl border border-primary/10 bg-white focus:ring-2 focus:ring-sky/30 focus:border-sky outline-none transition-all font-inter text-sm" />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-primary/50 font-inter">
                <input type="checkbox" className="accent-sky w-4 h-4" /> Remember me
              </label>
              <a href="#" className="text-sky font-outfit font-semibold hover:underline">Forgot Password?</a>
            </div>
            <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-sky to-emerald text-white font-outfit font-semibold rounded-xl hover:shadow-lg hover:shadow-sky/30 transition-all duration-300">
              Login to Portal
            </button>
            <p className="text-center text-xs text-primary/30 font-inter">
              Default password is your Date of Birth (DDMMYYYY)
            </p>
          </motion.form>
        </div>
      </section>
    )
  }

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-20 left-0 w-96 h-96 bg-sky/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald/5 rounded-full blur-3xl translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 lg:px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky/10 mb-3">
              <span className="w-1.5 h-1.5 bg-sky rounded-full" />
              <span className="text-sky text-sm font-semibold uppercase tracking-wider font-outfit">Student Dashboard</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-primary">
              Welcome, <span className="text-gradient-blue">Student</span>
            </h2>
            <p className="text-primary/50 font-inter text-sm mt-1">Class VIII-A | Roll No. 23 | Session 2026-27</p>
          </div>
          <button onClick={() => setLoggedIn(false)} className="px-5 py-2.5 rounded-full border border-primary/10 text-primary/60 font-outfit font-semibold text-sm hover:bg-surface transition-colors">
            Logout
          </button>
        </motion.div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {quickLinks.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Notices */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-1 p-6 rounded-3xl bg-surface border border-primary/5"
          >
            <h3 className="text-lg font-outfit font-bold text-primary flex items-center gap-2 mb-6">
              <FiBell className="text-accent" /> Notices & Circulars
            </h3>
            <div className="space-y-4">
              {notices.map((n, i) => (
                <div key={i} className="p-3 rounded-xl bg-white hover:shadow-md transition-shadow cursor-pointer border border-transparent hover:border-accent/10">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-outfit font-bold ${n.urgent ? 'bg-red-100 text-red-600' : 'bg-sky/10 text-sky'}`}>
                      {n.type}
                    </span>
                    <span className="text-[10px] text-primary/30 font-inter">{n.date}</span>
                  </div>
                  <p className="text-sm font-inter text-primary/70 leading-snug">{n.title}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Timetable */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="lg:col-span-2 p-6 rounded-3xl bg-surface border border-primary/5"
          >
            <h3 className="text-lg font-outfit font-bold text-primary flex items-center gap-2 mb-6">
              <FiClock className="text-emerald" /> Weekly Timetable
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-primary/5">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-2.5 px-3 text-left font-outfit">Time</th>
                    <th className="py-2.5 px-3 font-outfit">Mon</th>
                    <th className="py-2.5 px-3 font-outfit">Tue</th>
                    <th className="py-2.5 px-3 font-outfit">Wed</th>
                    <th className="py-2.5 px-3 font-outfit">Thu</th>
                    <th className="py-2.5 px-3 font-outfit">Fri</th>
                  </tr>
                </thead>
                <tbody>
                  {timetable.map((row, i) => {
                    const isBreak = row.mon === 'BREAK' || row.mon === 'LUNCH'
                    return (
                      <tr key={i} className={`${isBreak ? 'bg-accent/5' : i % 2 === 0 ? 'bg-white' : 'bg-surface'}`}>
                        <td className="py-2.5 px-3 font-outfit font-semibold text-primary/70 whitespace-nowrap">{row.time}</td>
                        <td className={`py-2.5 px-3 font-inter text-center ${isBreak ? 'text-accent font-outfit font-bold' : 'text-primary/60'}`}>{row.mon}</td>
                        <td className={`py-2.5 px-3 font-inter text-center ${isBreak ? 'text-accent font-outfit font-bold' : 'text-primary/60'}`}>{row.tue}</td>
                        <td className={`py-2.5 px-3 font-inter text-center ${isBreak ? 'text-accent font-outfit font-bold' : 'text-primary/60'}`}>{row.wed}</td>
                        <td className={`py-2.5 px-3 font-inter text-center ${isBreak ? 'text-accent font-outfit font-bold' : 'text-primary/60'}`}>{row.thu}</td>
                        <td className={`py-2.5 px-3 font-inter text-center ${isBreak ? 'text-accent font-outfit font-bold' : 'text-primary/60'}`}>{row.fri}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
