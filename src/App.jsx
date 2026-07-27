import { useState, useEffect } from 'react'
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

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Preloader />

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

export default App
