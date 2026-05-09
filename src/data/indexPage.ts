import heroImage from '../assets/images/hero-image.jpg';

export const indexPage = {
  seo: {
    title: 'C-39 Waterproofing Contractors | Los Angeles & Orange County | SPL',
    description:
      'Licensed C-39 waterproofing experts for decks, balconies, and commercial roofs. Providing code-compliant moisture protection in Santa Ana, Malibu, and Newport Beach.',

    // Enhanced Structured Data for 2026 SEO
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      '@id': 'https://spldecks.com/#localbusiness',
      name: 'SPL Waterproofing Inc.',
      alternateName: ['SPL Waterproofing', 'SPL Decks'],
      description:
        'Professional C-39 licensed waterproofing contractors specializing in multi-layer deck systems, balcony repair, and commercial foundation sealing.',
      url: 'https://spldecks.com/',
      telephone: '+1-949-817-1865',
      priceRange: '$$',
      image: 'https://spldecks.com/hero-waterproofing.jpg', // Essential for Local Pack
      address: {
        '@type': 'PostalAddress',
        streetAddress: '2229 Elder Ave',
        addressLocality: 'Santa Ana',
        addressRegion: 'CA',
        postalCode: '92704',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 33.7135,
        longitude: -117.8992,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:00',
          closes: '17:00',
        },
      ],
      // Tells Google specifically what you "Sell"
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Waterproofing Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Deck & Balcony Waterproofing',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Foundation & Below-Grade Sealing',
            },
          },
        ],
      },
      areaServed: [
        { '@type': 'City', name: 'Santa Ana' },
        { '@type': 'City', name: 'Newport Beach' },
        { '@type': 'City', name: 'Malibu' },
        { '@type': 'City', name: 'Los Angeles' },
        { '@type': 'AdministrativeArea', name: 'Orange County' },
        { '@type': 'AdministrativeArea', name: 'Los Angeles County' },
      ],
      sameAs: [
        'https://www.facebook.com/SPLWaterProofinginc',
        'https://www.instagram.com/splwaterproofing/',
        'https://www.linkedin.com/company/spl-waterproofing-inc',
      ],
    },

    openGraph: {
      image: '/hero-waterproofing.jpg',
      type: 'website',
    },
  },

  // UI Component Data
  hero: {
    title: 'Expert C-39 Waterproofing for Decks & Commercial Structures',
    description:
      'We provide permanent moisture protection for Southern California’s most demanding architectural projects. Licensed, bonded, and engineered for durability.',
    cta: {
      label: 'Request Free Inspection',
      href: '/contact/',
      iconName: 'mdi:clipboard-check-outline',
    },
    image: {
      src: heroImage,
      alt: 'Professional crew applying fluid-applied waterproofing membrane to a large commercial balcony',
      priority: true,
    },
  },

  services: {
    title: 'Industrial-Grade Waterproofing Solutions',
    description:
      'Tailored systems for residential balconies, HOA communities, and commercial foundations.',
    items: [
      {
        iconName: 'mdi:home-floor-g',
        title: 'Apartment Balcony Repair',
        description:
          'Structural restoration and SB-721 compliance for multi-family units.',
        pageLink: '/services/apartment-balcony-repair-orange-county/',
      },
      {
        iconName: 'mdi:office-building',
        title: 'Commercial Waterproofing',
        description:
          'Building envelope protection and seamless flat roof membranes.',
        pageLink: '/services/commercial-building-waterproofing-orange-county/',
      },
      {
        iconName: 'mdi:home-flood',
        title: 'Deck Leak Detection',
        description:
          'Precision moisture testing and permanent structural leak repair.',
        pageLink: '/services/deck-leak-repair-orange-county/',
      },
      {
        iconName: 'mdi:mountain',
        title: 'Hillside Deck Repair',
        description:
          'Elite waterproofing and designer finishes for Hollywood Hills estates.',
        pageLink: '/services/balcony-repair-hollywood-hills/',
      },
    ],
  },

  features: {
    title: 'The SPL Standard',
    items: [
      { icon: 'mdi:shield-lock', text: 'C-39 Specialty License #1088354' }, // Specificity builds trust
      { icon: 'mdi:timer-sand', text: 'Rapid-Response Leak Inspections' },
      { icon: 'mdi:certificate', text: 'Manufacturer-Certified Installers' },
      { icon: 'mdi:check-decagram', text: 'Full Structural Compliance' },
    ],
  },

  testimonials: [
    {
      quote:
        'Salvador is professional, honest, and delivered high-quality work on our balcony. A true specialist.',
      name: 'Michael C.',
      profession: 'Homeowner in Newport Beach',
    },
    {
      quote:
        'Finally found a contractor who understands structural waterproofing. Highly recommend for any deck project.',
      name: 'Mimy Y.',
      profession: 'Property Manager',
    },
  ],

  faq: [
    {
      id: 'faq-c39',
      question: 'Why hire a C-39 Licensed Contractor for waterproofing?',
      answer:
        'A C-39 license is the specific California classification for Roofing and Waterproofing. General contractors often lack the specialized equipment and manufacturer certifications required to warrant a waterproofing system.',
    },
    {
      id: 'faq-areas',
      question: 'Which areas do you serve in Southern California?',
      answer:
        'We provide full-service waterproofing in Santa Ana, Newport Beach, Huntington Beach, Malibu, and throughout Los Angeles and Orange Counties.',
    },
    {
      id: 'faq-inspection',
      question: 'How much does a waterproofing inspection cost?',
      answer:
        'We offer professional on-site inspections to assess deck integrity and moisture levels. Contact us today for a detailed estimate based on your specific structure.',
    },
  ],
};
