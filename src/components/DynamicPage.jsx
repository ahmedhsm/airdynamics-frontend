import { useEffect, useState } from 'react'
import { fetchPageSections } from '../lib/sanity'
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
  partners: PartnersSection,
  contact: ContactSection,
}

export default function DynamicPage() {
  const [sections, setSections] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getSections = async () => {
      try {
        const data = await fetchPageSections()
        setSections(data)
      } catch (err) {
        setError(err.message)
        console.error('Error fetching sections:', err)
      } finally {
        setLoading(false)
      }
    }

    getSections()
  }, [])

  if (loading) return <div className="p-4">Loading...</div>
  if (error) return <div className="p-4 text-red-600">Error: {error}</div>

  return (
    <>
      {sections.map((section) => {
        const SectionComponent = sectionComponents[section.sectionType]
        if (!SectionComponent) return null
        return <SectionComponent key={section._id} data={section} />
      })}
    </>
  )
}
