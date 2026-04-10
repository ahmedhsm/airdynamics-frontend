import React from 'react';

function App() {
  return (
    <div className="bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-lg shadow-lg shadow-black/5 h-16 sm:h-20">
        <div className="flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full gap-6 sm:gap-8 lg:gap-12">
          <span className="text-lg sm:text-2xl font-headline font-bold tracking-tighter text-[#1a1c1c] dark:text-white whitespace-nowrap">Air Dynamics</span>
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            <a className="font-headline tracking-tight font-bold text-[#ff5722] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#ff5722] text-sm lg:text-base" href="#about">About</a>
            <a className="font-headline tracking-tight font-bold text-[#1a1c1c] dark:text-white hover:text-[#ff5722] transition-colors text-sm lg:text-base" href="#vision">Vision</a>
            <a className="font-headline tracking-tight font-bold text-[#1a1c1c] dark:text-white hover:text-[#ff5722] transition-colors text-sm lg:text-base" href="#products">Products</a>
            <a className="font-headline tracking-tight font-bold text-[#1a1c1c] dark:text-white hover:text-[#ff5722] transition-colors text-sm lg:text-base" href="#partners">Partners</a>
            <a className="font-headline tracking-tight font-bold text-[#1a1c1c] dark:text-white hover:text-[#ff5722] transition-colors text-sm lg:text-base" href="#contact">Contact</a>
          </div>
          <button className="bg-primary-container hover:opacity-80 transition-all duration-300 text-on-primary font-headline font-bold px-5 sm:px-8 py-2 sm:py-3 rounded-full active:scale-95 text-sm sm:text-base">
            Inquire Now
          </button>
        </div>
      </nav>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-surface-bright py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
            <div className="z-10">
              <h1 className="font-headline text-on-surface text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold tracking-tight mb-6">
                Engineered for <br/>
                <span className="text-primary-container">Atmospheric</span> Precision.
              </h1>
              <p className="text-secondary text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
                Redefining filtration technology through advanced fluid dynamics and high-performance materials for industrial and automotive excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-br from-primary-container to-primary text-white font-headline font-bold px-8 py-3 sm:py-4 rounded-full shadow-lg shadow-orange-500/30 hover:scale-105 transition-transform text-sm sm:text-base">
                  View Tech Specs
                </button>
                <button className="border border-outline-variant/20 text-primary font-headline font-bold px-8 py-3 sm:py-4 rounded-full hover:bg-surface-container-low transition-colors text-sm sm:text-base">
                  Our Process
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-24 -right-24 w-[120%] h-[120%] bg-primary-container/5 rounded-full blur-3xl"></div>
              <img 
                className="relative z-10 w-full h-auto rounded-xl shadow-lg shadow-black/10 object-cover aspect-square sm:aspect-[4/5]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWno4aXfBCm1NXhx0u_mezD-13vbp7xh-Mm1h2yFZwoaobwesVaKW4hNaxDcNwa_6ZfSPpLgKo3HPX2ZGuKkPah5FanLFNTnw1yTfYktA-r_e2WaeoF9UuNsziBdESHfmAvElYp4rmlfnc4CW_kJ9B1_AYb9cqBuraOJAyrLUxXKgR34nFrX_wxmyEN46txz1Xauo3HvhqlFful-RecrwSVk_THunJLPFy_eX9nIX6vh0gZZ714UacvPVWth-T1LaDyB43rD-CNgU"
                alt="High-tech metallic air filtration component"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg z-20 hidden md:block border border-surface-container-high">
                <span className="block text-primary-container font-headline font-bold text-2xl sm:text-3xl">99.9%</span>
                <span className="text-secondary text-xs sm:text-sm font-label uppercase tracking-widest">Filtration Purity</span>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-surface-container-low" id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="w-24 h-0.5 bg-gradient-to-r from-primary-container to-transparent mb-8"></div>
                <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-on-surface tracking-tight">Legacy of Pure Performance</h2>
                <p className="text-secondary text-base sm:text-lg leading-relaxed mb-6">
                  Air Dynamics stands at the intersection of mechanical engineering and molecular science. Founded on the principle of "Aero-Logic," we develop systems that don't just block particles—they manage flow.
                </p>
                <p className="text-secondary text-base sm:text-lg leading-relaxed">
                  Our team of aerospace engineers and material scientists work tirelessly to ensure that every filter leaving our facility exceeds global ISO standards, providing the critical protection your machinery demands.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-sm border border-surface-container-high">
                  <span className="material-symbols-outlined text-primary-container text-4xl mb-4 block">precision_manufacturing</span>
                  <h3 className="font-headline font-bold text-lg sm:text-xl mb-2">Engineering</h3>
                  <p className="text-xs sm:text-sm text-secondary">CAD-optimized flow paths for maximum efficiency.</p>
                </div>
                <div className="bg-surface-container-lowest p-6 sm:p-8 rounded-xl shadow-sm border border-surface-container-high">
                  <span className="material-symbols-outlined text-primary-container text-4xl mb-4 block">biotech</span>
                  <h3 className="font-headline font-bold text-lg sm:text-xl mb-2">Innovation</h3>
                  <p className="text-xs sm:text-sm text-secondary">Nanofiber layering for sub-micron particle capture.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-24 bg-surface" id="vision">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full md:h-[600px]">
              <div className="md:col-span-8 bg-on-background rounded-3xl p-12 flex flex-col justify-end overflow-hidden relative group">
                <img 
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5VhwJiq2w9OwsLZTWIGXigxz7kMf9X4r1uzzwjkQK75ngc3i7ZhV14TE8Z9FmQ-KLIc5tynuFMX2o6ihtHrScbqSNiiB5-JRY3qA_KHqcBHeIgUQuNTuOtMMxq57n1UmIyb5oHpsxnCZCuVmG5TPQ153m9fPp18vxRKA24HeFFNCL_T3UXb9732dXo0eAgFzi6U-JdcDchn6abjPKPLEAouo7Ij15FdZgF2LbEe5kRYophuZyRxRm44GA28iWctVh2QhICdgu7CI"
                  alt="Abstract futuristic laboratory interior"
                />
                <div className="relative z-10">
                  <h3 className="font-headline text-surface text-4xl font-bold mb-4">Our Mission</h3>
                  <p className="text-surface/80 text-xl max-w-xl">To empower global industry by engineering superior filtration solutions that increase longevity, reduce waste, and protect the atmosphere.</p>
                </div>
              </div>
              <div className="md:col-span-4 bg-primary-container rounded-3xl p-12 flex flex-col justify-between">
                <div className="bg-on-primary-container/20 w-16 h-16 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary text-3xl">visibility</span>
                </div>
                <div>
                  <h3 className="font-headline text-on-primary text-4xl font-bold mb-4">Our Vision</h3>
                  <p className="text-on-primary/90 text-lg leading-snug">Setting the global benchmark for atmospheric precision by 2030, through carbon-neutral manufacturing and advanced aero-logic design.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-surface-container-low overflow-hidden" id="products">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
              <div className="max-w-2xl">
                <span className="text-primary font-headline font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block">Engineered Catalog</span>
                <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-on-surface tracking-tight">Precision Components</h2>
              </div>
              <p className="text-secondary max-w-sm text-sm sm:text-base">Explore our core range of high-performance filtration units designed for extreme operational environments.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Product 1 */}
              <div className="bg-surface-container-lowest rounded-xl p-6 hover:scale-[1.02] transition-all group shadow-sm border border-surface-container-high">
                <div className="h-32 sm:h-40 lg:h-48 flex items-center justify-center mb-6 sm:mb-8 relative overflow-hidden rounded-lg bg-surface">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgt5yceaIoMjEunquUyo0HzPRL0vqULncqXU4UDP6olfTBCjdn5RO6QOiYDPaxiFSXjUBED_Ee1sXbRapQWSoTCCrERHT_aBQAa2HdpwhbXPcRbS-0gvLNE34eiMk7olxu_tbxWqjfiLSSAoMbhMFzATqdTGIfOhRZXgdjfsf2PqmvZcfVXDneee5YUWlrP1p6LQ7T98rZxg5pbzQMTHHFEQ4je3gpGST6X3d6GG6-VNw6noJm5qQl45k_WIBiVie75SRNaqAEmfM"
                    alt="Air Filter Product"
                  />
                </div>
                <h4 className="font-headline font-bold text-lg sm:text-xl mb-2">Air Filters</h4>
                <p className="text-secondary text-xs sm:text-sm mb-4 sm:mb-6">Engineered for maximum oxygen intake while maintaining 99.9% particulate exclusion.</p>
                <div className="w-full h-0.5 bg-gradient-to-r from-primary-container to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left mb-4 sm:mb-6"></div>
                <button className="text-primary-container font-headline font-bold text-sm flex items-center gap-2 group/btn">
                  Technical Data <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform text-base">arrow_forward</span>
                </button>
              </div>

              {/* Product 2 */}
              <div className="bg-surface-container-lowest rounded-xl p-6 hover:scale-[1.02] transition-all group shadow-sm border border-surface-container-high">
                <div className="h-32 sm:h-40 lg:h-48 flex items-center justify-center mb-6 sm:mb-8 relative overflow-hidden rounded-lg bg-surface">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2ot9b7isEFZXn4jfrX9ayKdYhgn5YVjNaWg7ftjeU6TZRfTDiKw1k6KrfTcECqjroruKRr-M4lL6jWF3RlLoPYIaLwTzAnp1DqVXgyQ5TPtOsZMzi8wrJH4WJTkpQPN7Bq9hFI_48QDcyWKBfXGbErmo01Ili4Jum6QXbfHtW6Gz3F5j6IU5HIFXSQWnE0kXGEF_t5izApz5JjrNNjTLmnJ-ZVETky5NUEvum8SJVzG9KU2qsHFNR4Rg5x2S7WkQihFAz5Hn7qxQ"
                    alt="Oil Filter"
                  />
                </div>
                <h4 className="font-headline font-bold text-lg sm:text-xl mb-2">Oil Filters</h4>
                <p className="text-secondary text-xs sm:text-sm mb-4 sm:mb-6">High-viscosity resistant membranes designed for extended engine life and cleaner internal flow.</p>
                <div className="w-full h-0.5 bg-gradient-to-r from-primary-container to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left mb-4 sm:mb-6"></div>
                <button className="text-primary-container font-headline font-bold text-sm flex items-center gap-2 group/btn">
                  Technical Data <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform text-base">arrow_forward</span>
                </button>
              </div>

              {/* Product 3 */}
              <div className="bg-surface-container-lowest rounded-xl p-6 hover:scale-[1.02] transition-all group shadow-sm border border-surface-container-high">
                <div className="h-32 sm:h-40 lg:h-48 flex items-center justify-center mb-6 sm:mb-8 relative overflow-hidden rounded-lg bg-surface">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHHY5wvr1R4GOIwxgKlyad8K3Lo_48GkRl6wdb-2tXV1q3tA1L_nIRWpBzfGW7Ztrl-mzd-DnBSHD9BQoFDB3x6WhKIvn1b3D09iqH7kaaXsgwiVdjjnPIETTloaVAPLfTlgK9emdYO0DIbkU8iz80lDrU7yvVDb730gU2IoIXOLAs7hdh_384DdBvP1_q8dM4bHi4ivgwSvtBJNfwza7a8nhlBg2Jx9pN7XfOrTcuI4sOM4h-GfIGW9_Bt2n2VUmQjPpxZWdmbhY"
                    alt="AC Cabin Filter"
                  />
                </div>
                <h4 className="font-headline font-bold text-lg sm:text-xl mb-2">AC Cabin Filters</h4>
                <p className="text-secondary text-xs sm:text-sm mb-4 sm:mb-6">Activated carbon layers to neutralize odors and allergens for pure interior atmosphere.</p>
                <div className="w-full h-0.5 bg-gradient-to-r from-primary-container to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left mb-4 sm:mb-6"></div>
                <button className="text-primary-container font-headline font-bold text-sm flex items-center gap-2 group/btn">
                  Technical Data <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform text-base">arrow_forward</span>
                </button>
              </div>

              {/* Product 4 */}
              <div className="bg-surface-container-lowest rounded-xl p-6 hover:scale-[1.02] transition-all group shadow-sm border border-surface-container-high">
                <div className="h-32 sm:h-40 lg:h-48 flex items-center justify-center mb-6 sm:mb-8 relative overflow-hidden rounded-lg bg-surface">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwQU94kVMRPDRUck4f6epSnc76pThHq2lgVj4GkckYYkfqRDQvqstNgq5Kp1sUkRaGmfFQCXM4Glm2xIYcZ2ok35n1ZNxLVZ3IzJLiu-DaMZ4aVtagR2OZJoN-QpwCCfYrqWZrnWhqQmxNTRo-e4itNV4S7YaG1V8ueXWWOOL5wCLK0c4Upxy84GgTytsEh4RvIK_PPgSvRCRC9vhEVkyVK3zSDjrZciwvYnlZNieZcrl-lrV-69So-fUgNKExtadPISG-3AEECZg"
                    alt="Gasoline Filter"
                  />
                </div>
                <h4 className="font-headline font-bold text-lg sm:text-xl mb-2">Gasoline Filters</h4>
                <p className="text-secondary text-xs sm:text-sm mb-4 sm:mb-6">Advanced pressure-sealed housings to ensure fuel purity and optimal combustion cycles.</p>
                <div className="w-full h-0.5 bg-gradient-to-r from-primary-container to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left mb-4 sm:mb-6"></div>
                <button className="text-primary-container font-headline font-bold text-sm flex items-center gap-2 group/btn">
                  Technical Data <span className="material-symbols-outlined group-hover/btn:translate-x-1 transition-transform text-base">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-24 bg-surface" id="partners">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl font-bold mb-4">Strategic Partners</h2>
              <p className="text-secondary">Collaborating with the world's leading automotive and aerospace manufacturers.</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="font-headline text-3xl font-extrabold tracking-tighter">AERO-GLOBAL</div>
              <div className="font-headline text-3xl font-extrabold tracking-tighter">HYDRO-LOGIC</div>
              <div className="font-headline text-3xl font-extrabold tracking-tighter">QUARTZ-CORP</div>
              <div className="font-headline text-3xl font-extrabold tracking-tighter">MOTIVE-X</div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-on-background relative overflow-hidden" id="contact">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">Let's Refine Your Systems.</h2>
                <p className="text-surface/60 text-base sm:text-lg mb-10 sm:mb-12">Reach out to our engineering team for technical consultation or distribution inquiries.</p>
                <div className="space-y-6 sm:space-y-8">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-primary-container flex-shrink-0 flex items-center justify-center text-white">
                      <span className="material-symbols-outlined text-lg sm:text-xl">mail</span>
                    </div>
                    <span className="text-white text-sm sm:text-lg font-headline break-all">contact@airdynamics.eng</span>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-primary-container flex-shrink-0 flex items-center justify-center text-white">
                      <span className="material-symbols-outlined text-lg sm:text-xl">smartphone</span>
                    </div>
                    <span className="text-white text-sm sm:text-lg font-headline">+1 (800) AERO-FLOW</span>
                  </div>
                  <div className="pt-6 sm:pt-8 flex gap-4">
                    <a className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-surface/20 flex items-center justify-center text-white hover:bg-primary-container transition-colors" href="#">
                      <span className="material-symbols-outlined text-lg sm:text-xl">chat</span>
                    </a>
                    <a className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-surface/20 flex items-center justify-center text-white hover:bg-primary-container transition-colors" href="#">
                      <span className="material-symbols-outlined text-lg sm:text-xl">public</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-surface p-6 sm:p-8 lg:p-10 rounded-3xl shadow-lg">
                <form className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-2 gap-4 sm:gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs sm:text-sm font-label text-secondary font-bold uppercase tracking-wider">Full Name</label>
                      <input className="bg-surface-container-high border-none rounded-xl p-3 sm:p-4 focus:ring-2 focus:ring-primary-container focus:bg-white transition-all text-sm" placeholder="John Doe" type="text"/>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs sm:text-sm font-label text-secondary font-bold uppercase tracking-wider">Email Address</label>
                      <input className="bg-surface-container-high border-none rounded-xl p-3 sm:p-4 focus:ring-2 focus:ring-primary-container focus:bg-white transition-all text-sm" placeholder="john@company.com" type="email"/>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-label text-secondary font-bold uppercase tracking-wider">Subject</label>
                    <select className="bg-surface-container-high border-none rounded-xl p-3 sm:p-4 focus:ring-2 focus:ring-primary-container focus:bg-white transition-all text-sm">
                      <option>Technical Specification Inquiry</option>
                      <option>Wholesale Distribution</option>
                      <option>Custom Filter Engineering</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs sm:text-sm font-label text-secondary font-bold uppercase tracking-wider">Project Details</label>
                    <textarea className="bg-surface-container-high border-none rounded-xl p-3 sm:p-4 focus:ring-2 focus:ring-primary-container focus:bg-white transition-all resize-none text-sm" placeholder="Briefly describe your requirements..." rows="3"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary-container text-on-primary-container font-headline font-bold py-4 sm:py-5 rounded-full text-base sm:text-lg hover:opacity-90 transition-opacity">
                    Submit Engineering Request
                  </button>
                </form>
              </div>
            </div>
            {/* Decorative SVG */}
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

      {/* Footer */}
      <footer className="bg-[#f3f3f4] dark:bg-neutral-900 w-full py-12 sm:py-16 px-4 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8 max-w-7xl mx-auto">
          <div>
            <span className="text-lg sm:text-xl font-headline font-bold text-[#1a1c1c] dark:text-white">Air Dynamics</span>
            <p className="font-label text-xs sm:text-sm tracking-normal text-[#5e5e5e] dark:text-neutral-400 mt-2">© {new Date().getFullYear()} Air Dynamics. Engineered for Atmospheric Precision.</p>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-x-8 gap-y-2 sm:gap-y-4">
            <a className="font-label text-xs sm:text-sm tracking-normal text-[#5e5e5e] dark:text-neutral-400 hover:text-[#ff5722] transition-colors" href="#">Privacy Policy</a>
            <a className="font-label text-xs sm:text-sm tracking-normal text-[#5e5e5e] dark:text-neutral-400 hover:text-[#ff5722] transition-colors" href="#">Technical Specs</a>
            <a className="font-label text-xs sm:text-sm tracking-normal text-[#5e5e5e] dark:text-neutral-400 hover:text-[#ff5722] transition-colors" href="#">Global Distribution</a>
            <a className="font-label text-xs sm:text-sm tracking-normal text-[#5e5e5e] dark:text-neutral-400 hover:text-[#ff5722] transition-colors" href="#">Career Portal</a>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-1 h-8 sm:h-10 bg-[#e8e8e8] dark:bg-neutral-800 hidden md:block"></div>
            <div className="flex gap-3 sm:gap-4">
              <span className="text-xs sm:text-sm font-bold font-headline text-[#ff5722]">IG</span>
              <span className="text-xs sm:text-sm font-bold font-headline text-[#ff5722]">WA</span>
              <span className="text-xs sm:text-sm font-bold font-headline text-[#ff5722]">LN</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;