export default function PartnersSection() {
  return (
    <section className="py-24 bg-surface" id="partners">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold mb-4">Strategic Partners</h2>
          <p className="text-secondary">
            Collaborating with the world's leading automotive and aerospace manufacturers.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="font-headline text-3xl font-extrabold tracking-tighter">AERO-GLOBAL</div>
          <div className="font-headline text-3xl font-extrabold tracking-tighter">HYDRO-LOGIC</div>
          <div className="font-headline text-3xl font-extrabold tracking-tighter">QUARTZ-CORP</div>
          <div className="font-headline text-3xl font-extrabold tracking-tighter">MOTIVE-X</div>
        </div>
      </div>
    </section>
  )
}
