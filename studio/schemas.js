import { defineField, defineType } from 'sanity';

const navLink = defineType({
  name: 'navLink',
  title: 'Navigation Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Href',
      type: 'string',
      description: 'Use a section anchor like #about or a full URL.',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'href',
    },
  },
});

const ctaLink = defineType({
  name: 'ctaLink',
  title: 'Call To Action Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Href',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'href',
    },
  },
});

const featureCard = defineType({
  name: 'featureCard',
  title: 'Feature Card',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Material symbol name, for example precision_manufacturing.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
});

const productCard = defineType({
  name: 'productCard',
  title: 'Product Card',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'imageAlt',
      title: 'Image Alt Text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'buttonLabel',
      title: 'Button Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'buttonHref',
      title: 'Button Href',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
});

const partnerItem = defineType({
  name: 'partnerItem',
  title: 'Partner Item',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
});

const socialLink = defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Href',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'href',
    },
  },
});

const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  initialValue: {
    siteTitle: 'Air Dynamics',
    navLinks: [
      { _type: 'navLink', label: 'About', href: '#about' },
      { _type: 'navLink', label: 'Vision', href: '#vision' },
      { _type: 'navLink', label: 'Products', href: '#products' },
      { _type: 'navLink', label: 'Partners', href: '#partners' },
      { _type: 'navLink', label: 'Contact', href: '#contact' },
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
      primaryCta: { _type: 'ctaLink', label: 'View Tech Specs', href: '#products' },
      secondaryCta: { _type: 'ctaLink', label: 'Our Process', href: '#vision' },
      metricValue: '99.9%',
      metricLabel: 'Filtration Purity',
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
          _type: 'featureCard',
          icon: 'precision_manufacturing',
          title: 'Engineering',
          description: 'CAD-optimized flow paths for maximum efficiency.',
        },
        {
          _type: 'featureCard',
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
    },
    vision: {
      title: 'Our Vision',
      description:
        'Setting the global benchmark for atmospheric precision by 2030, through carbon-neutral manufacturing and advanced aero-logic design.',
    },
    products: [
      {
        _type: 'productCard',
        title: 'Air Filters',
        description:
          'Engineered for maximum oxygen intake while maintaining 99.9% particulate exclusion.',
        imageAlt: 'Air Filter Product',
        buttonLabel: 'Technical Data',
        buttonHref: '#contact',
      },
      {
        _type: 'productCard',
        title: 'Oil Filters',
        description:
          'High-viscosity resistant membranes designed for extended engine life and cleaner internal flow.',
        imageAlt: 'Oil Filter',
        buttonLabel: 'Technical Data',
        buttonHref: '#contact',
      },
      {
        _type: 'productCard',
        title: 'AC Cabin Filters',
        description:
          'Activated carbon layers to neutralize odors and allergens for pure interior atmosphere.',
        imageAlt: 'AC Cabin Filter',
        buttonLabel: 'Technical Data',
        buttonHref: '#contact',
      },
      {
        _type: 'productCard',
        title: 'Gasoline Filters',
        description:
          'Advanced pressure-sealed housings to ensure fuel purity and optimal combustion cycles.',
        imageAlt: 'Gasoline Filter',
        buttonLabel: 'Technical Data',
        buttonHref: '#contact',
      },
    ],
    partners: [
      { _type: 'partnerItem', name: 'AERO-GLOBAL' },
      { _type: 'partnerItem', name: 'HYDRO-LOGIC' },
      { _type: 'partnerItem', name: 'QUARTZ-CORP' },
      { _type: 'partnerItem', name: 'MOTIVE-X' },
    ],
    contact: {
      title: "Let's Refine Your Systems.",
      description:
        'Reach out to our engineering team for technical consultation or distribution inquiries.',
      email: 'contact@airdynamics.eng',
      phone: '+1 (800) AERO-FLOW',
      socialLinks: [
        { _type: 'socialLink', label: 'Chat', href: '#' },
        { _type: 'socialLink', label: 'Website', href: '#' },
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
        { _type: 'navLink', label: 'Privacy Policy', href: '#' },
        { _type: 'navLink', label: 'Technical Specs', href: '#' },
        { _type: 'navLink', label: 'Global Distribution', href: '#' },
        { _type: 'navLink', label: 'Career Portal', href: '#' },
      ],
      socialLinks: [
        { _type: 'socialLink', label: 'Instagram', href: '#' },
        { _type: 'socialLink', label: 'WhatsApp', href: '#' },
        { _type: 'socialLink', label: 'LinkedIn', href: '#' },
      ],
    },
  },
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [{ type: 'navLink' }],
      options: {
        sortable: true,
      },
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'ui',
      title: 'Section Copy',
      type: 'object',
      fields: [
        defineField({
          name: 'productsEyebrow',
          title: 'Products Eyebrow',
          type: 'string',
        }),
        defineField({
          name: 'productsTitle',
          title: 'Products Title',
          type: 'string',
        }),
        defineField({
          name: 'productsDescription',
          title: 'Products Description',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'partnersTitle',
          title: 'Partners Title',
          type: 'string',
        }),
        defineField({
          name: 'partnersDescription',
          title: 'Partners Description',
          type: 'text',
          rows: 3,
        }),
        defineField({
          name: 'navCtaLabel',
          title: 'Nav CTA Label',
          type: 'string',
        }),
        defineField({
          name: 'navCtaHref',
          title: 'Nav CTA Href',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'string',
        }),
        defineField({
          name: 'titleLineOne',
          title: 'Title Line One',
          type: 'string',
        }),
        defineField({
          name: 'titleHighlight',
          title: 'Title Highlight',
          type: 'string',
        }),
        defineField({
          name: 'titleLineTwo',
          title: 'Title Line Two',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
        }),
        defineField({
          name: 'primaryCta',
          title: 'Primary CTA',
          type: 'ctaLink',
        }),
        defineField({
          name: 'secondaryCta',
          title: 'Secondary CTA',
          type: 'ctaLink',
        }),
        defineField({
          name: 'metricValue',
          title: 'Metric Value',
          type: 'string',
        }),
        defineField({
          name: 'metricLabel',
          title: 'Metric Label',
          type: 'string',
        }),
        defineField({
          name: 'image',
          title: 'Hero Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'imageAlt',
          title: 'Hero Image Alt Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'about',
      title: 'About Section',
      type: 'object',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
          type: 'string',
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          of: [{ type: 'text' }],
          options: {
            sortable: true,
          },
        }),
        defineField({
          name: 'cards',
          title: 'Feature Cards',
          type: 'array',
          of: [{ type: 'featureCard' }],
          options: {
            sortable: true,
          },
        }),
      ],
    }),
    defineField({
      name: 'mission',
      title: 'Mission Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
        }),
        defineField({
          name: 'image',
          title: 'Background Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'imageAlt',
          title: 'Background Image Alt Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'vision',
      title: 'Vision Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
        }),
      ],
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{ type: 'productCard' }],
      options: {
        sortable: true,
      },
    }),
    defineField({
      name: 'partners',
      title: 'Partners',
      type: 'array',
      of: [{ type: 'partnerItem' }],
      options: {
        sortable: true,
      },
    }),
    defineField({
      name: 'contact',
      title: 'Contact Section',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
        }),
        defineField({
          name: 'phone',
          title: 'Phone',
          type: 'string',
        }),
        defineField({
          name: 'socialLinks',
          title: 'Social Links',
          type: 'array',
          of: [{ type: 'socialLink' }],
          options: {
            sortable: true,
          },
        }),
        defineField({
          name: 'form',
          title: 'Contact Form',
          type: 'object',
          fields: [
            defineField({
              name: 'fullNameLabel',
              title: 'Full Name Label',
              type: 'string',
            }),
            defineField({
              name: 'fullNamePlaceholder',
              title: 'Full Name Placeholder',
              type: 'string',
            }),
            defineField({
              name: 'emailAddressLabel',
              title: 'Email Address Label',
              type: 'string',
            }),
            defineField({
              name: 'emailAddressPlaceholder',
              title: 'Email Address Placeholder',
              type: 'string',
            }),
            defineField({
              name: 'subjectLabel',
              title: 'Subject Label',
              type: 'string',
            }),
            defineField({
              name: 'subjectOptions',
              title: 'Subject Options',
              type: 'array',
              of: [{ type: 'string' }],
              options: {
                sortable: true,
              },
            }),
            defineField({
              name: 'projectDetailsLabel',
              title: 'Project Details Label',
              type: 'string',
            }),
            defineField({
              name: 'projectDetailsPlaceholder',
              title: 'Project Details Placeholder',
              type: 'string',
            }),
            defineField({
              name: 'submitLabel',
              title: 'Submit Button Label',
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        defineField({
          name: 'note',
          title: 'Note',
          type: 'string',
        }),
        defineField({
          name: 'links',
          title: 'Footer Links',
          type: 'array',
          of: [{ type: 'navLink' }],
          options: {
            sortable: true,
          },
        }),
        defineField({
          name: 'socialLinks',
          title: 'Footer Social Links',
          type: 'array',
          of: [{ type: 'socialLink' }],
          options: {
            sortable: true,
          },
        }),
      ],
    }),
  ],
});

export const schemaTypes = [
  navLink,
  ctaLink,
  featureCard,
  productCard,
  partnerItem,
  socialLink,
  homePage,
];
