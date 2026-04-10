export const homePageQuery = `*[_type == "homePage"][0]{
  siteTitle,
  navLinks[]{label, href},
  ui{
    productsEyebrow,
    productsTitle,
    productsDescription,
    partnersTitle,
    partnersDescription,
    navCtaLabel,
    navCtaHref
  },
  hero{
    eyebrow,
    titleLineOne,
    titleHighlight,
    titleLineTwo,
    description,
    primaryCta{label, href},
    secondaryCta{label, href},
    metricValue,
    metricLabel,
    "imageUrl": image.asset->url,
    imageAlt
  },
  about{
    eyebrow,
    title,
    paragraphs,
    cards[]{icon, title, description}
  },
  mission{
    title,
    description,
    "imageUrl": image.asset->url,
    imageAlt
  },
  vision{
    title,
    description
  },
  products[]{
    title,
    description,
    "imageUrl": image.asset->url,
    imageAlt,
    buttonLabel,
    buttonHref
  },
  partners[]{name},
  contact{
    title,
    description,
    email,
    phone,
    socialLinks[]{label, href},
    form{
      fullNameLabel,
      fullNamePlaceholder,
      emailAddressLabel,
      emailAddressPlaceholder,
      subjectLabel,
      subjectOptions,
      projectDetailsLabel,
      projectDetailsPlaceholder,
      submitLabel
    }
  },
  footer{
    note,
    links[]{label, href},
    socialLinks[]{label, href}
  }
}`;

const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCWno4aXfBCm1NXhx0u_mezD-13vbp7xh-Mm1h2yFZwoaobwesVaKW4hNaxDcNwa_6ZfSPpLgKo3HPX2ZGuKkPah5FanLFNTnw1yTfYktA-r_e2WaeoF9UuNsziBdESHfmAvElYp4rmlfnc4CW_kJ9B1_AYb9cqBuraOJAyrLUxXKgR34nFrX_wxmyEN46txz1Xauo3HvhqlFful-RecrwSVk_THunJLPFy_eX9nIX6vh0gZZ714UacvPVWth-T1LaDyB43rD-CNgU';

const missionImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB5VhwJiq2w9OwsLZTWIGXigxz7kMf9X4r1uzzwjkQK75ngc3i7ZhV14TE8Z9FmQ-KLIc5tynuFMX2o6ihtHrScbqSNiiB5-JRY3qA_KHqcBHeIgUQuNTuOtMMxq57n1UmIyb5oHpsxnCZCuVmG5TPQ153m9fPp18vxRKA24HeFFNCL_T3UXb9732dXo0eAgFzi6U-JdcDchn6abjPKPLEAouo7Ij15FdZgF2LbEe5kRYophuZyRxRm44GA28iWctVh2QhICdgu7CI';

const productImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDgt5yceaIoMjEunquUyo0HzPRL0vqULncqXU4UDP6olfTBCjdn5RO6QOiYDPaxiFSXjUBED_Ee1sXbRapQWSoTCCrERHT_aBQAa2HdpwhbXPcRbS-0gvLNE34eiMk7olxu_tbxWqjfiLSSAoMbhMFzATqdTGIfOhRZXgdjfsf2PqmvZcfVXDneee5YUWlrP1p6LQ7T98rZxg5pbzQMTHHFEQ4je3gpGST6X3d6GG6-VNw6noJm5qQl45k_WIBiVie75SRNaqAEmfM',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB2ot9b7isEFZXn4jfrX9ayKdYhgn5YVjNaWg7ftjeU6TZRfTDiKw1k6KrfTcECqjroruKRr-M4lL6jWF3RlLoPYIaLwTzAnp1DqVXgyQ5TPtOsZMzi8wrJH4WJTkpQPN7Bq9hFI_48QDcyWKBfXGbErmo01Ili4Jum6QXbfHtW6Gz3F5j6IU5HIFXSQWnE0kXGEF_t5izApz5JjrNNjTLmnJ-ZVETky5NUEvum8SJVzG9KU2qsHFNR4Rg5x2S7WkQihFAz5Hn7qxQ',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBHHY5wvr1R4GOIwxgKlyad8K3Lo_48GkRl6wdb-2tXV1q3tA1L_nIRWpBzfGW7Ztrl-mzd-DnBSHD9BQoFDB3x6WhKIvn1b3D09iqH7kaaXsgwiVdjjnPIETTloaVAPLfTlgK9emdYO0DIbkU8iz80lDrU7yvVDb730gU2IoIXOLAs7hdh_384DdBvP1_q8dM4bHi4ivgwSvtBJNfwza7a8nhlBg2Jx9pN7XfOrTcuI4sOM4h-GfIGW9_Bt2n2VUmQjPpxZWdmbhY',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCwQU94kVMRPDRUck4f6epSnc76pThHq2lgVj4GkckYYkfqRDQvqstNgq5Kp1sUkRaGmfFQCXM4Glm2xIYcZ2ok35n1ZNxLVZ3IzJLiu-DaMZ4aVtagR2OZJoN-QpwCCfYrqWZrnWhqQmxNTRo-e4itNV4S7YaG1V8ueXWWOOL5wCLK0c4Upxy84GgTytsEh4RvIK_PPgSvRCRC9vhEVkyVK3zSDjrZciwvYnlZNieZcrl-lrV-69So-fUgNKExtadPISG-3AEECZg',
];

export const fallbackHomePage = {
  siteTitle: 'Air Dynamics',
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Vision', href: '#vision' },
    { label: 'Products', href: '#products' },
    { label: 'Partners', href: '#partners' },
    { label: 'Contact', href: '#contact' },
  ],
  ui: {
    productsEyebrow: 'Engineered Catalog',
    productsTitle: 'Precision Components',
    productsDescription:
      'Explore our core range of high-performance filtration units designed for extreme operational environments.',
    partnersTitle: 'Strategic Partners',
    partnersDescription:
      "Collaborating with the world's leading automotive and aerospace manufacturers.",
    navCtaLabel: 'Inquire Now',
    navCtaHref: '#contact',
  },
  hero: {
    eyebrow: 'Engineered for precision',
    titleLineOne: 'Engineered for',
    titleHighlight: 'Atmospheric',
    titleLineTwo: 'Precision.',
    description:
      'Redefining filtration technology through advanced fluid dynamics and high-performance materials for industrial and automotive excellence.',
    primaryCta: { label: 'View Tech Specs', href: '#products' },
    secondaryCta: { label: 'Our Process', href: '#vision' },
    metricValue: '99.9%',
    metricLabel: 'Filtration Purity',
    imageUrl: heroImage,
    imageAlt: 'High-tech metallic air filtration component',
  },
  about: {
    eyebrow: 'Legacy of Pure Performance',
    title: 'Legacy of Pure Performance',
    paragraphs: [
      'Air Dynamics stands at the intersection of mechanical engineering and molecular science. Founded on the principle of Aero-Logic, we develop systems that do not just block particles, they manage flow.',
      'Our team of aerospace engineers and material scientists work tirelessly to ensure that every filter leaving our facility exceeds global ISO standards, providing the critical protection your machinery demands.',
    ],
    cards: [
      {
        icon: 'precision_manufacturing',
        title: 'Engineering',
        description: 'CAD-optimized flow paths for maximum efficiency.',
      },
      {
        icon: 'biotech',
        title: 'Innovation',
        description: 'Nanofiber layering for sub-micron particle capture.',
      },
    ],
  },
  mission: {
    title: 'Our Mission',
    description:
      'To empower global industry by engineering superior filtration solutions that increase longevity, reduce waste, and protect the atmosphere.',
    imageUrl: missionImage,
    imageAlt: 'Abstract futuristic laboratory interior',
  },
  vision: {
    title: 'Our Vision',
    description:
      'Setting the global benchmark for atmospheric precision by 2030, through carbon-neutral manufacturing and advanced aero-logic design.',
  },
  products: [
    {
      title: 'Air Filters',
      description:
        'Engineered for maximum oxygen intake while maintaining 99.9% particulate exclusion.',
      imageUrl: productImages[0],
      imageAlt: 'Air Filter Product',
      buttonLabel: 'Technical Data',
      buttonHref: '#contact',
    },
    {
      title: 'Oil Filters',
      description:
        'High-viscosity resistant membranes designed for extended engine life and cleaner internal flow.',
      imageUrl: productImages[1],
      imageAlt: 'Oil Filter',
      buttonLabel: 'Technical Data',
      buttonHref: '#contact',
    },
    {
      title: 'AC Cabin Filters',
      description:
        'Activated carbon layers to neutralize odors and allergens for pure interior atmosphere.',
      imageUrl: productImages[2],
      imageAlt: 'AC Cabin Filter',
      buttonLabel: 'Technical Data',
      buttonHref: '#contact',
    },
    {
      title: 'Gasoline Filters',
      description:
        'Advanced pressure-sealed housings to ensure fuel purity and optimal combustion cycles.',
      imageUrl: productImages[3],
      imageAlt: 'Gasoline Filter',
      buttonLabel: 'Technical Data',
      buttonHref: '#contact',
    },
  ],
  partners: [
    { name: 'AERO-GLOBAL' },
    { name: 'HYDRO-LOGIC' },
    { name: 'QUARTZ-CORP' },
    { name: 'MOTIVE-X' },
  ],
  contact: {
    title: "Let's Refine Your Systems.",
    description:
      'Reach out to our engineering team for technical consultation or distribution inquiries.',
    email: 'contact@airdynamics.eng',
    phone: '+1 (800) AERO-FLOW',
    socialLinks: [
      { label: 'Chat', href: '#' },
      { label: 'Website', href: '#' },
    ],
    form: {
      fullNameLabel: 'Full Name',
      fullNamePlaceholder: 'John Doe',
      emailAddressLabel: 'Email Address',
      emailAddressPlaceholder: 'john@company.com',
      subjectLabel: 'Subject',
      subjectOptions: [
        'Technical Specification Inquiry',
        'Wholesale Distribution',
        'Custom Filter Engineering',
      ],
      projectDetailsLabel: 'Project Details',
      projectDetailsPlaceholder: 'Briefly describe your requirements...',
      submitLabel: 'Submit Engineering Request',
    },
  },
  footer: {
    note: 'Engineered for Atmospheric Precision.',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Technical Specs', href: '#' },
      { label: 'Global Distribution', href: '#' },
      { label: 'Career Portal', href: '#' },
    ],
    socialLinks: [
      { label: 'Instagram', href: '#' },
      { label: 'WhatsApp', href: '#' },
      { label: 'LinkedIn', href: '#' },
    ],
  },
};

function mergeByIndex(source, fallback) {
  if (!Array.isArray(source) || source.length === 0) {
    return fallback;
  }

  return source.map((item, index) => ({
    ...fallback[index],
    ...item,
  }));
}

export function normalizeHomePage(data) {
  if (!data) return fallbackHomePage;

  return {
    ...fallbackHomePage,
    ...data,
    navLinks: mergeByIndex(data.navLinks, fallbackHomePage.navLinks),
    ui: {
      ...fallbackHomePage.ui,
      ...data.ui,
    },
    hero: {
      ...fallbackHomePage.hero,
      ...data.hero,
    },
    about: {
      ...fallbackHomePage.about,
      ...data.about,
      cards: mergeByIndex(data.about?.cards, fallbackHomePage.about.cards),
    },
    mission: {
      ...fallbackHomePage.mission,
      ...data.mission,
    },
    vision: {
      ...fallbackHomePage.vision,
      ...data.vision,
    },
    products: mergeByIndex(data.products, fallbackHomePage.products),
    partners: mergeByIndex(data.partners, fallbackHomePage.partners),
    contact: {
      ...fallbackHomePage.contact,
      ...data.contact,
      socialLinks: mergeByIndex(
        data.contact?.socialLinks,
        fallbackHomePage.contact.socialLinks
      ),
      form: {
        ...fallbackHomePage.contact.form,
        ...data.contact?.form,
        subjectOptions:
          data.contact?.form?.subjectOptions?.length > 0
            ? data.contact.form.subjectOptions
            : fallbackHomePage.contact.form.subjectOptions,
      },
    },
    footer: {
      ...fallbackHomePage.footer,
      ...data.footer,
      links: mergeByIndex(data.footer?.links, fallbackHomePage.footer.links),
      socialLinks: mergeByIndex(
        data.footer?.socialLinks,
        fallbackHomePage.footer.socialLinks
      ),
    },
  };
}
