import { useEffect, useState } from 'react'
import { fetchStrategicPartners } from '../../lib/sanity'

export default function PartnersSection() {
  const [partners, setPartners] = useState([])

  useEffect(() => {
    const getPartners = async () => {
      try {
        const data = await fetchStrategicPartners()
        setPartners(data)
      } catch (err) {
        console.error('Error fetching strategic partners:', err)
      }
    }
    getPartners()
  }, [])

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-primary font-headline font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block">Trusted Network</span>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">Strategic Partners</h2>
          <p className="text-secondary text-sm sm:text-base mt-4 max-w-xl mx-auto">
            Collaborating with the world's leading automotive and aerospace manufacturers.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-start gap-8 sm:gap-12 lg:gap-16">
          {partners && partners.length > 0 ? (
            partners.map((partner) => (
              <div key={partner._id} className="flex flex-col items-center gap-3 group cursor-pointer">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/5 transition-all duration-500">
                  {partner.image?.asset?.url ? (
                    <img 
                      src={partner.image.asset.url} 
                      alt={partner.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-neutral-400">
                      <span className="material-symbols-outlined text-3xl">handshake</span>
                    </div>
                  )}
                </div>
                <span className="text-xs sm:text-sm font-headline font-bold text-secondary group-hover:text-primary transition-colors text-center">
                  {partner.name}
                </span>
              </div>
            ))
          ) : (
            <p className="text-secondary text-sm">Partners coming soon...</p>
          )}
        </div>
      </div>
    </section>
  )
}
