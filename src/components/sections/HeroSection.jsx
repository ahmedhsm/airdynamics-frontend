export default function HeroSection({ data }) {
  const {
    heroHeading,
    heroHighlight,
    heroDescription,
    heroImage,
    heroPrimaryButtonText,
    heroSecondaryButtonText,
    heroStatNumber,
    heroStatLabel,
  } = data

  const getHeroImageUrl = () => {
    if (!heroImage) return null
    if (heroImage.asset?.url) return heroImage.asset.url
    if (heroImage.url) return heroImage.url
    return null
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface-bright py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        <div className="z-10">
          <h1 className="font-headline text-on-surface text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold tracking-tight mb-6">
            {heroHeading} <br />
            <span className="text-primary-container">{heroHighlight}</span>
          </h1>
          <p className="text-secondary text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
            {heroDescription}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-br from-primary-container to-primary text-white font-headline font-bold px-8 py-3 sm:py-4 rounded-full shadow-lg shadow-orange-500/30 hover:scale-105 transition-transform text-sm sm:text-base">
              {heroPrimaryButtonText}
            </button>
            <button className="border border-outline-variant/20 text-primary font-headline font-bold px-8 py-3 sm:py-4 rounded-full hover:bg-surface-container-low transition-colors text-sm sm:text-base">
              {heroSecondaryButtonText}
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-24 -right-24 w-[120%] h-[120%] bg-primary-container/5 rounded-full blur-3xl"></div>
          {getHeroImageUrl() && (
            <img
              className="relative z-10 w-full h-auto rounded-xl shadow-lg shadow-black/10 object-cover aspect-square sm:aspect-[4/5]"
              src={getHeroImageUrl()}
              alt="Hero"
            />
          )}
          <div className="absolute -bottom-6 -left-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg z-20 hidden md:block border border-surface-container-high">
            <span className="block text-primary-container font-headline font-bold text-2xl sm:text-3xl">
              {heroStatNumber}
            </span>
            <span className="text-secondary text-xs sm:text-sm font-label uppercase tracking-widest">
              {heroStatLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
