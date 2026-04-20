export default function ContactSection({ data }) {
  const { contactHeading, contactDescription, contactEmail, contactPhone, contactInstagram, contactFacebook } = data

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
                {/* Gmail Icon */}
                {contactEmail && (
                  <a
                    className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-surface/20 flex items-center justify-center text-white hover:bg-primary-container transition-colors"
                    href={`mailto:${contactEmail}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                    </svg>
                  </a>
                )}
                
                {/* Instagram Icon */}
                {contactInstagram && (
                  <a
                    className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-surface/20 flex items-center justify-center text-white hover:bg-primary-container transition-colors"
                    href={contactInstagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                )}

                {/* Facebook Icon */}
                {contactFacebook && (
                  <a
                    className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-surface/20 flex items-center justify-center text-white hover:bg-primary-container transition-colors"
                    href={contactFacebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                )}
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
