import { useEffect, useState } from 'react'
import { fetchStrategicPartners } from '../../lib/sanity'

export default function PartnersSection({ data }) {
  const { 
    partnersHeading = "Strategic Partners", 
    partnersDescription = "Collaborating with the world's leading automotive and aerospace manufacturers.",
  } = data || {};

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
    <section className="py-24 bg-surface" id="partners">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold mb-4">{partnersHeading}</h2>
          <p className="text-secondary text-sm sm:text-base">
            {partnersDescription}
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16">
          {partners && partners.length > 0 ? (
            partners.map((partner) => (
              <div key={partner._id} className="flex flex-col items-center gap-3 group">
                {partner.image?.asset?.url ? (
                  <img 
                    src={partner.image.asset.url} 
                    alt={partner.name} 
                    className="h-16 sm:h-20 w-auto object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-500"
                  />
                ) : (
                  <div className="font-headline text-2xl sm:text-3xl font-extrabold tracking-tighter opacity-40 group-hover:opacity-100 transition-opacity">
                    {partner.name}
                  </div>
                )}
                <span className="text-xs font-headline font-bold text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                  {partner.name}
                </span>
              </div>
            ))
          ) : (
            <>
              <div className="font-headline text-2xl sm:text-3xl font-extrabold tracking-tighter opacity-40">AERO-GLOBAL</div>
              <div className="font-headline text-2xl sm:text-3xl font-extrabold tracking-tighter opacity-40">HYDRO-LOGIC</div>
              <div className="font-headline text-2xl sm:text-3xl font-extrabold tracking-tighter opacity-40">QUARTZ-CORP</div>
              <div className="font-headline text-2xl sm:text-3xl font-extrabold tracking-tighter opacity-40">MOTIVE-X</div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
