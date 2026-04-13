export default function ContactSection({ data }) {
  const { contactHeading, contactDescription, contactEmail, contactPhone } = data

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-on-background relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-12 lg:gap-20">
          <div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
              {contactHeading}
            </h2>
            <p className="text-surface/60 text-base sm:text-lg mb-10 sm:mb-12">
              {contactDescription}
            </p>
            <div className="space-y-6 sm:space-y-8">
              {contactEmail && (
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-primary-container flex-shrink-0 flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-lg sm:text-xl">mail</span>
                  </div>
                  <span className="text-white text-sm sm:text-lg font-headline break-all">
                    {contactEmail}
                  </span>
                </div>
              )}
              {contactPhone && (
                <div className="flex items-center gap-4 sm:gap-6">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-primary-container flex-shrink-0 flex items-center justify-center text-white">
                    <span className="material-symbols-outlined text-lg sm:text-xl">smartphone</span>
                  </div>
                  <span className="text-white text-sm sm:text-lg font-headline">
                    {contactPhone}
                  </span>
                </div>
              )}
              <div className="pt-6 sm:pt-8 flex gap-4">
                <a
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-surface/20 flex items-center justify-center text-white hover:bg-primary-container transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-lg sm:text-xl">chat</span>
                </a>
                <a
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-surface/20 flex items-center justify-center text-white hover:bg-primary-container transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined text-lg sm:text-xl">public</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block">
          <svg
            className="w-full h-full text-white fill-none stroke-current stroke-[0.5]"
            viewBox="0 0 400 800"
          >
            <path d="M400,100 Q200,100 200,400 T400,700"></path>
            <path d="M400,150 Q250,150 250,400 T400,650"></path>
            <path d="M400,200 Q300,200 300,400 T400,600"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
