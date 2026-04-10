import { useEffect, useState } from 'react';
import { fetchSanityQuery, sanityReady } from './lib/sanity';
import { fallbackHomePage, homePageQuery, normalizeHomePage } from './content/homePage';

function getSocialIcon(label) {
  const normalized = String(label || '').toLowerCase();
  if (normalized.includes('chat')) return 'chat';
  if (normalized.includes('web') || normalized.includes('site') || normalized.includes('public')) {
    return 'public';
  }
  return 'share';
}

function ProductCard({ product }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 hover:scale-[1.02] transition-all group shadow-sm border border-surface-container-high">
      <div className="h-32 sm:h-40 lg:h-48 flex items-center justify-center mb-6 sm:mb-8 relative overflow-hidden rounded-lg bg-surface">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={product.imageUrl}
          alt={product.imageAlt}
        />
      </div>
      <h4 className="font-headline font-bold text-lg sm:text-xl mb-2">{product.title}</h4>
      <p className="text-secondary text-xs sm:text-sm mb-4 sm:mb-6">{product.description}</p>
      <div className="w-full h-0.5 bg-gradient-to-r from-primary-container to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left mb-4 sm:mb-6"></div>
      <a
        href={product.buttonHref}
        className="text-primary-container font-headline font-bold text-sm flex items-center gap-2 group/btn"
      >
        {product.buttonLabel}{' '}
        <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform text-base">
          arrow_forward
        </span>
      </a>
    </div>
  );
}

function FeatureCard({ card }) {
  return (
    <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-sm border border-surface-container-high">
      <span className="material-symbols-outlined text-primary-container text-4xl mb-4 block">
        {card.icon}
      </span>
      <h3 className="font-headline font-bold text-lg sm:text-xl mb-2">{card.title}</h3>
      <p className="text-xs sm:text-sm text-secondary">{card.description}</p>
    </div>
  );
}

function AppSanity() {
  const [content, setContent] = useState(normalizeHomePage(fallbackHomePage));
  const [status, setStatus] = useState(sanityReady ? 'loading' : 'fallback');

  useEffect(() => {
    let cancelled = false;

    async function loadContent() {
      if (!sanityReady) {
        setStatus('fallback');
        return;
      }

      try {
        const result = await fetchSanityQuery(homePageQuery);
        if (cancelled) return;
        setContent(normalizeHomePage(result));
        setStatus(result ? 'sanity' : 'fallback');
      } catch {
        if (cancelled) return;
        setContent(normalizeHomePage(fallbackHomePage));
        setStatus('fallback');
      }
    }

    loadContent();

    return () => {
      cancelled = true;
    };
  }, []);

  const current = content;

  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-lg shadow-lg shadow-black/5 h-16 sm:h-20">
        <div className="flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full gap-6 sm:gap-8 lg:gap-12">
          <span className="text-lg sm:text-2xl font-headline font-bold tracking-tighter text-[#1a1c1c] dark:text-white whitespace-nowrap">
            {current.siteTitle}
          </span>
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {current.navLinks.map((link, index) => (
              <a
                key={`${link.label}-${index}`}
                className={`font-headline tracking-tight font-bold relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#ff5722] text-sm lg:text-base ${
                  index === 0
                    ? 'text-[#ff5722]'
                    : 'text-[#1a1c1c] dark:text-white hover:text-[#ff5722] transition-colors'
                }`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={current.ui.navCtaHref}
            className="bg-primary-container hover:opacity-80 transition-all duration-300 text-on-primary font-headline font-bold px-5 sm:px-8 py-2 sm:py-3 rounded-full active:scale-95 text-sm sm:text-base"
          >
            {current.ui.navCtaLabel}
          </a>
        </div>
      </nav>

      <main className="pt-20">
        {status === 'sanity' ? (
          <div className="sticky top-20 z-40 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="ml-auto inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 text-xs sm:text-sm font-semibold shadow-sm border border-emerald-100">
              Connected to Sanity
            </div>
          </div>
        ) : null}

        <section className="relative min-h-screen flex items-center overflow-hidden bg-surface-bright py-20" id="hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            <div className="z-10">
              <span className="text-primary font-headline font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block">
                {current.hero.eyebrow}
              </span>
              <h1 className="font-headline text-on-surface text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold tracking-tight mb-6">
                {current.hero.titleLineOne} <br />
                <span className="text-primary-container">{current.hero.titleHighlight}</span>{' '}
                {current.hero.titleLineTwo}
              </h1>
              <p className="text-secondary text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
                {current.hero.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={current.hero.primaryCta.href}
                  className="bg-gradient-to-br from-primary-container to-primary text-white font-headline font-bold px-8 py-3 sm:py-4 rounded-full shadow-lg shadow-orange-500/30 hover:scale-105 transition-transform text-sm sm:text-base"
                >
                  {current.hero.primaryCta.label}
                </a>
                <a
                  href={current.hero.secondaryCta.href}
                  className="border border-outline-variant/20 text-primary font-headline font-bold px-8 py-3 sm:py-4 rounded-full hover:bg-surface-container-low transition-colors text-sm sm:text-base"
                >
                  {current.hero.secondaryCta.label}
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-24 -right-24 w-[120%] h-[120%] bg-primary-container/5 rounded-full blur-3xl"></div>
              <img
                className="relative z-10 w-full h-auto rounded-xl shadow-lg shadow-black/10 object-cover aspect-square sm:aspect-[4/5]"
                src={current.hero.imageUrl || fallbackHomePage.hero.imageUrl}
                alt={current.hero.imageAlt || fallbackHomePage.hero.imageAlt}
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg z-20 hidden md:block border border-surface-container-high">
                <span className="block text-primary-container font-headline font-bold text-2xl sm:text-3xl">
                  {current.hero.metricValue}
                </span>
                <span className="text-secondary text-xs sm:text-sm font-label uppercase tracking-widest">
                  {current.hero.metricLabel}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24 bg-surface-container-low" id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="w-24 h-0.5 bg-gradient-to-r from-primary-container to-transparent mb-8"></div>
                <span className="text-primary font-headline font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block">
                  {current.about.eyebrow}
                </span>
                <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-on-surface tracking-tight">
                  {current.about.title}
                </h2>
                <div className="space-y-6">
                  {current.about.paragraphs.map((paragraph, index) => (
                    <p
                      key={`${index}-${paragraph.slice(0, 16)}`}
                      className="text-secondary text-base sm:text-lg leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {current.about.cards.map((card) => (
                  <FeatureCard key={card.title} card={card} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface" id="vision">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full md:h-[600px]">
              <div className="md:col-span-8 bg-on-background rounded-3xl p-12 flex flex-col justify-end overflow-hidden relative group">
                <img
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                  src={current.mission.imageUrl || fallbackHomePage.mission.imageUrl}
                  alt={current.mission.imageAlt || fallbackHomePage.mission.imageAlt}
                />
                <div className="relative z-10">
                  <h3 className="font-headline text-surface text-4xl font-bold mb-4">
                    {current.mission.title}
                  </h3>
                  <p className="text-surface/80 text-xl max-w-xl">{current.mission.description}</p>
                </div>
              </div>
              <div className="md:col-span-4 bg-primary-container rounded-3xl p-12 flex flex-col justify-between">
                <div className="bg-on-primary-container/20 w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary text-3xl">
                    visibility
                  </span>
                </div>
                <div>
                  <h3 className="font-headline text-on-primary text-4xl font-bold mb-4">
                    {current.vision.title}
                  </h3>
                  <p className="text-on-primary/90 text-lg leading-snug">
                    {current.vision.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24 bg-surface-container-low overflow-hidden" id="products">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
              <div className="max-w-2xl">
                <span className="text-primary font-headline font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block">
                  {current.ui.productsEyebrow}
                </span>
                <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">
                  {current.ui.productsTitle}
                </h2>
              </div>
              <p className="text-secondary max-w-sm text-sm sm:text-base">
                {current.ui.productsDescription}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {current.products.map((product, index) => (
                <ProductCard
                  key={`${product.title}-${index}`}
                  product={{
                    ...product,
                    imageUrl: product.imageUrl || fallbackHomePage.products[index]?.imageUrl,
                    imageAlt: product.imageAlt || fallbackHomePage.products[index]?.imageAlt,
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface" id="partners">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl font-bold mb-4">{current.ui.partnersTitle}</h2>
              <p className="text-secondary">{current.ui.partnersDescription}</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              {current.partners.map((partner) => (
                <div key={partner.name} className="font-headline text-3xl font-extrabold tracking-tighter">
                  {partner.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24 bg-on-background relative overflow-hidden" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
                  {current.contact.title}
                </h2>
                <p className="text-surface/60 text-base sm:text-lg mb-10 sm:mb-12">
                  {current.contact.description}
                </p>
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-primary-container flex-shrink-0 flex items-center justify-center text-white">
                      <span className="material-symbols-outlined text-lg sm:text-xl">mail</span>
                    </div>
                    <span className="text-white text-sm sm:text-lg font-headline break-all">
                      {current.contact.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-primary-container flex-shrink-0 flex items-center justify-center text-white">
                      <span className="material-symbols-outlined text-lg sm:text-xl">smartphone</span>
                    </div>
                    <span className="text-white text-sm sm:text-lg font-headline">
                      {current.contact.phone}
                    </span>
                  </div>
                  <div className="pt-6 sm:pt-8 flex gap-4">
                    {current.contact.socialLinks.map((link) => (
                      <a
                        key={link.label}
                        className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-surface/20 flex items-center justify-center text-white hover:bg-primary-container transition-colors"
                        href={link.href}
                        aria-label={link.label}
                      >
                        <span className="material-symbols-outlined text-lg sm:text-xl">
                          {getSocialIcon(link.label)}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
                <div className="bg-surface p-6 sm:p-8 lg:p-10 rounded-3xl shadow-lg">
                  <form className="space-y-5 sm:space-y-6">
                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                      <div className="flex flex-col gap-2">
                      <label className="text-xs sm:text-sm font-label text-secondary font-bold uppercase tracking-wider">
                        {current.contact.form.fullNameLabel}
                      </label>
                      <input
                        className="bg-surface-container-high border-none rounded-xl p-3 sm:p-4 focus:ring-2 focus:ring-primary-container focus:bg-white transition-all text-sm"
                        placeholder={current.contact.form.fullNamePlaceholder}
                        type="text"
                      />
                      </div>
                      <div className="flex flex-col gap-2">
                      <label className="text-xs sm:text-sm font-label text-secondary font-bold uppercase tracking-wider">
                        {current.contact.form.emailAddressLabel}
                      </label>
                      <input
                        className="bg-surface-container-high border-none rounded-xl p-3 sm:p-4 focus:ring-2 focus:ring-primary-container focus:bg-white transition-all text-sm"
                        placeholder={current.contact.form.emailAddressPlaceholder}
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-label text-secondary font-bold uppercase tracking-wider">
                      {current.contact.form.subjectLabel}
                    </label>
                    <select className="bg-surface-container-high border-none rounded-xl p-3 sm:p-4 focus:ring-2 focus:ring-primary-container focus:bg-white transition-all text-sm">
                      {current.contact.form.subjectOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-label text-secondary font-bold uppercase tracking-wider">
                      {current.contact.form.projectDetailsLabel}
                    </label>
                    <textarea
                      className="bg-surface-container-high border-none rounded-xl p-3 sm:p-4 focus:ring-2 focus:ring-primary-container focus:bg-white transition-all resize-none text-sm"
                      placeholder={current.contact.form.projectDetailsPlaceholder}
                      rows="3"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary-container text-on-primary-container font-headline font-bold py-4 sm:py-5 rounded-full text-base sm:text-lg hover:opacity-90 transition-opacity"
                  >
                    {current.contact.form.submitLabel}
                  </button>
                </form>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block">
              <svg className="w-full h-full text-white fill-none stroke-current stroke-[0.5]" viewBox="0 0 400 800">
                <path d="M400,100 Q200,100 200,400 T400,700"></path>
                <path d="M400,150 Q250,150 250,400 T400,650"></path>
                <path d="M400,200 Q300,200 300,400 T400,600"></path>
              </svg>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#f3f3f4] dark:bg-neutral-900 w-full py-12 sm:py-16 px-4 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8 max-w-7xl mx-auto">
          <div>
            <span className="text-lg sm:text-xl font-headline font-bold text-[#1a1c1c] dark:text-white">
              {current.siteTitle}
            </span>
            <p className="font-label text-xs sm:text-sm tracking-normal text-[#5e5e5e] dark:text-neutral-400 mt-2">
              © {new Date().getFullYear()} {current.siteTitle}. {current.footer.note}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-x-8 gap-y-2 sm:gap-y-4">
            {current.footer.links.map((link) => (
              <a
                key={link.label}
                className="font-label text-xs sm:text-sm tracking-normal text-[#5e5e5e] dark:text-neutral-400 hover:text-[#ff5722] transition-colors"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 sm:h-10 bg-[#e8e8e8] dark:bg-neutral-800 hidden md:block"></div>
            <div className="flex gap-3 sm:gap-4">
              {current.footer.socialLinks.map((link) => (
                <span
                  key={link.label}
                  className="text-xs sm:text-sm font-bold font-headline text-[#ff5722]"
                >
                  {link.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AppSanity;
