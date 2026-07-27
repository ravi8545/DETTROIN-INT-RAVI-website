import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import AboutSection from './components/AboutSection'
import ProgramsSection from './components/ProgramsSection'
import WhyChooseUs from './components/WhyChooseUs'
import CampusGallery from './components/CampusGallery'
import TestimonialsSection from './components/TestimonialsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import PageLayout from './layouts/PageLayout'
import OurVision from './pages/OurVision'
import OurMission from './pages/OurMission'
import Management from './pages/Management'
import History from './pages/History'
import AdmissionProcess from './pages/AdmissionProcess'
import FeeStructure from './pages/FeeStructure'
import ApplyOnline from './pages/ApplyOnline'
import StudentPortal from './pages/StudentPortal'
import ParentPortal from './pages/ParentPortal'
import PrimaryWing from './pages/PrimaryWing'
import MiddleSchool from './pages/MiddleSchool'
import SeniorSecondary from './pages/SeniorSecondary'

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <StatsBar />
      <AboutSection />
      <ProgramsSection />
      <WhyChooseUs />
      <CampusGallery />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Preloader />

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/our-vision" element={<PageLayout><OurVision /></PageLayout>} />
      <Route path="/our-mission" element={<PageLayout><OurMission /></PageLayout>} />
      <Route path="/management" element={<PageLayout><Management /></PageLayout>} />
      <Route path="/history" element={<PageLayout><History /></PageLayout>} />
      <Route path="/admission-process" element={<PageLayout><AdmissionProcess /></PageLayout>} />
      <Route path="/fee-structure" element={<PageLayout><FeeStructure /></PageLayout>} />
      <Route path="/apply-online" element={<PageLayout><ApplyOnline /></PageLayout>} />
      <Route path="/student-portal" element={<PageLayout><StudentPortal /></PageLayout>} />
      <Route path="/parent-portal" element={<PageLayout><ParentPortal /></PageLayout>} />
      <Route path="/primary-wing" element={<PageLayout><PrimaryWing /></PageLayout>} />
      <Route path="/middle-school" element={<PageLayout><MiddleSchool /></PageLayout>} />
      <Route path="/senior-secondary" element={<PageLayout><SeniorSecondary /></PageLayout>} />
    </Routes>
  )
}

export default App
