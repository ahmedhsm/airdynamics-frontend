export default function PartnersSection({ data }) {
  const { 
    partnersHeading = "Strategic Partners", 
    partnersDescription = "Collaborating with the world's leading automotive and aerospace manufacturers.",
    partnersList = []
  } = data || {};

  return (
    <section className="py-24 bg-surface" id="partners">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold mb-4">{partnersHeading}</h2>
          <p className="text-secondary text-sm sm:text-base">
            {partnersDescription}
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {partnersList && partnersList.length > 0 ? (
            partnersList.map((partner, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                {partner.logo?.asset?.url ? (
                  <img 
                    src={partner.logo.asset.url} 
                    alt={partner.name} 
                    className="h-8 sm:h-12 w-auto object-contain"
                  />
                ) : (
                  <div className="font-headline text-2xl sm:text-3xl font-extrabold tracking-tighter text-center">
                    {partner.name}
                  </div>
                )}
              </div>
            ))
          ) : (
            /* Fallback brands - add these in Sanity Partners List to edit or remove */
            <>
              <div className="font-headline text-2xl sm:text-3xl font-extrabold tracking-tighter">AERO-GLOBAL</div>
              <div className="font-headline text-2xl sm:text-3xl font-extrabold tracking-tighter">HYDRO-LOGIC</div>
              <div className="font-headline text-2xl sm:text-3xl font-extrabold tracking-tighter">QUARTZ-CORP</div>
              <div className="font-headline text-2xl sm:text-3xl font-extrabold tracking-tighter">MOTIVE-X</div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
