import React from 'react'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import MissionVisionSection from './sections/MissionVisionSection'
import ProductsSection from './sections/ProductsSection'
import PartnersSection from './sections/PartnersSection'
import ContactSection from './sections/ContactSection'

const sectionComponents = {
  hero: HeroSection,
  about: AboutSection,
  missionVision: MissionVisionSection,
  products: ProductsSection,
  contact: ContactSection,
}

export default function DynamicPage({ sections = [], loading, error }) {
  if (loading) return <div className="p-4">Loading...</div>
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>

  return (
    <>
      {sections.map((section) => {
        const SectionComponent = sectionComponents[section.sectionType]
        if (!SectionComponent) return null
        return (
          <React.Fragment key={section._id}>
            <SectionComponent data={section} />
            {/* Render Strategic Partners right after Products */}
            {section.sectionType === 'products' && <PartnersSection />}
          </React.Fragment>
        )
      })}
    </>
  )
}
