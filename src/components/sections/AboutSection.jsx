export default function AboutSection({ data }) {
  const {
    aboutHeading,
    aboutParagraph1,
    aboutParagraph2,
    aboutCard1Title,
    aboutCard1Description,
    aboutCard2Title,
    aboutCard2Description,
  } = data

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-primary-container to-transparent mb-8"></div>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-on-surface tracking-tight">
              {aboutHeading}
            </h2>
            <p className="text-secondary text-base sm:text-lg leading-relaxed mb-6">
              {aboutParagraph1}
            </p>
            <p className="text-secondary text-base sm:text-lg leading-relaxed">
              {aboutParagraph2}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-sm border border-surface-container-high">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-4 block">
                precision_manufacturing
              </span>
              <h3 className="font-headline font-bold text-lg sm:text-xl mb-2">{aboutCard1Title}</h3>
              <p className="text-xs sm:text-sm text-secondary">{aboutCard1Description}</p>
            </div>
            <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-sm border border-surface-container-high">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-4 block">
                biotech
              </span>
              <h3 className="font-headline font-bold text-lg sm:text-xl mb-2">{aboutCard2Title}</h3>
              <p className="text-xs sm:text-sm text-secondary">{aboutCard2Description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
