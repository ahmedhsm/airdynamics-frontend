export default function MissionVisionSection({ data }) {
  const { missionHeading, missionDescription, missionImage, visionHeading, visionDescription } =
    data

  const getMissionImageUrl = () => {
    if (!missionImage) return null
    if (missionImage.asset?.url) return missionImage.asset.url
    if (missionImage.url) return missionImage.url
    return null
  }

  return (
    <section className="py-24 bg-surface" id="missionVision">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full md:h-[600px]">
          <div className="md:col-span-8 bg-on-background rounded-3xl p-12 flex flex-col justify-end overflow-hidden relative group">
            {getMissionImageUrl() && (
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                src={getMissionImageUrl()}
                alt="Mission"
              />
            )}
            <div className="relative z-10">
              <h3 className="font-headline text-surface text-4xl font-bold mb-4">{missionHeading}</h3>
              <p className="text-surface/80 text-xl max-w-xl">{missionDescription}</p>
            </div>
          </div>
          <div className="md:col-span-4 bg-primary-container rounded-3xl p-12 flex flex-col justify-between">
            <div className="bg-on-primary-container/20 w-16 h-16 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-3xl">visibility</span>
            </div>
            <div>
              <h3 className="font-headline text-on-primary text-4xl font-bold mb-4">{visionHeading}</h3>
              <p className="text-on-primary/90 text-lg leading-snug">{visionDescription}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
