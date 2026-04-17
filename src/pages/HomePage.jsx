import React, { useEffect } from 'react'
import DynamicPage from '../components/DynamicPage'

export default function HomePage() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    handleHashChange()

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-lg shadow-lg shadow-black/5 min-h-[4rem] py-2 sm:py-0">
        <div className="flex flex-col sm:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full gap-2 sm:gap-8 lg:gap-12">
          
          {/* Logo Section */}
          <div className="flex items-center justify-between w-full sm:w-auto">
            <span className="text-lg sm:text-2xl font-headline font-bold tracking-tighter text-[#1a1c1c] dark:text-white whitespace-nowrap">
              <a href="/">Air Dynamics</a>
            </span>
          </div>

          {/* Main Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-6 lg:gap-10">
            <a className="font-headline tracking-tight font-bold text-[#ff5722] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#ff5722] text-xs sm:text-sm lg:text-base" href="#about">About</a>
            <a className="font-headline tracking-tight font-bold text-[#1a1c1c] dark:text-white hover:text-[#ff5722] transition-colors text-xs sm:text-sm lg:text-base" href="#vision">Vision</a>
            <a className="font-headline tracking-tight font-bold text-[#1a1c1c] dark:text-white hover:text-[#ff5722] transition-colors text-xs sm:text-sm lg:text-base" href="#products">Products</a>
            <a className="font-headline tracking-tight font-bold text-[#1a1c1c] dark:text-white hover:text-[#ff5722] transition-colors text-xs sm:text-sm lg:text-base" href="#partners">Partners</a>
            <a className="font-headline tracking-tight font-bold text-[#1a1c1c] dark:text-white hover:text-[#ff5722] transition-colors text-xs sm:text-sm lg:text-base" href="#contact">Contact</a>
          </div>
          
        </div>
      </nav>

      <main className="pt-24 sm:pt-20">
        <DynamicPage />
      </main>

      {/* Footer */}
      <footer className="bg-[#f3f3f4] dark:bg-neutral-900 w-full py-12 sm:py-16 px-4 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8 max-w-7xl mx-auto">
          <div>
            <span className="text-lg sm:text-xl font-headline font-bold text-[#1a1c1c] dark:text-white">Air Dynamics</span>
            <p className="font-label text-xs sm:text-sm tracking-normal text-[#5e5e5e] dark:text-neutral-400 mt-2">© {new Date().getFullYear()} Air Dynamics. Engineered for Atmospheric Precision.</p>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-x-8 gap-y-2 sm:gap-y-4">
            <a className="font-label text-xs sm:text-sm tracking-normal text-[#5e5e5e] dark:text-neutral-400 hover:text-[#ff5722] transition-colors" href="#">Privacy Policy</a>
            <a className="font-label text-xs sm:text-sm tracking-normal text-[#5e5e5e] dark:text-neutral-400 hover:text-[#ff5722] transition-colors" href="#">Technical Specs</a>
            <a className="font-label text-xs sm:text-sm tracking-normal text-[#5e5e5e] dark:text-neutral-400 hover:text-[#ff5722] transition-colors" href="#">Global Distribution</a>
            <a className="font-label text-xs sm:text-sm tracking-normal text-[#5e5e5e] dark:text-neutral-400 hover:text-[#ff5722] transition-colors" href="#">Career Portal</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 sm:h-10 bg-[#e8e8e8] dark:bg-neutral-800 hidden md:block"></div>
            <div className="flex gap-3 sm:gap-4">
              <span className="text-xs sm:text-sm font-bold font-headline text-[#ff5722]">IG</span>
              <span className="text-xs sm:text-sm font-bold font-headline text-[#ff5722]">WA</span>
              <span className="text-xs sm:text-sm font-bold font-headline text-[#ff5722]">LN</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}