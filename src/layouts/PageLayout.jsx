import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PageLayout({ children }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Spacer for fixed navbar */}
      <div className="pt-[72px] lg:pt-[116px]" />
      {children}
      <Footer />
    </div>
  )
}
