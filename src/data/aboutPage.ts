import heroImage from '../assets/images/team-work.jpg';
import westcoatLogo from '../assets/images/westcoat.jpeg';
import tremcoLogo from '../assets/images/tremco.png';
import vaproShieldLogo from '../assets/images/vaproShield.png';
import sikaLogo from '../assets/images/sika.png';

/**
 * 2026 Strategy: About Page for the SPL Decks Division.
 * Emphasis on specialization, parent-company stability, and precision.
 */
export const aboutPage = {
  seo: {
    title:
      'About SPL Decks | The Specialized Division of SPL Waterproofing Inc.',
    description:
      'Learn about SPL Decks, the specialized division of SPL Waterproofing Inc. dedicated to precision deck and balcony waterproofing throughout Southern California.',

    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'AboutPage',
          '@id': 'https://spldecks.com/about/#webpage',
          url: 'https://spldecks.com/about/',
          name: 'About SPL Decks | Specialty Waterproofing Division',
          description:
            'Dedicated experts in multi-layer deck waterproofing systems and balcony structural protection.',
          isPartOf: { '@id': 'https://spldecks.com/#website' },
        },
        {
          '@type': 'HomeAndConstructionBusiness',
          '@id': 'https://spldecks.com/#localbusiness',
          name: 'SPL Decks (Division of SPL Waterproofing Inc.)',
          image: 'https://spldecks.com/about-hero.jpg',
          telephone: '+1-949-817-1865',
          priceRange: '$$',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '2229 Elder Ave',
            addressLocality: 'Santa Ana',
            addressRegion: 'CA',
            postalCode: '92704',
            addressCountry: 'US',
          },
          // MOVED INSIDE THE BUSINESS OBJECT
          areaServed: [
            { '@type': 'AdministrativeArea', name: 'Orange County' },
            { '@type': 'AdministrativeArea', name: 'Los Angeles County' },
            { '@type': 'AdministrativeArea', name: 'Ventura County' },
            { '@type': 'City', name: 'Santa Ana' },
            { '@type': 'City', name: 'Newport Beach' },
            { '@type': 'City', name: 'Malibu' },
            { '@type': 'City', name: 'Thousand Oaks' },
            { '@type': 'City', name: 'Laguna Beach' },
            { '@type': 'City', name: 'Dana Point' },
            { '@type': 'City', name: 'San Clemente' },
          ],
        },
      ],
    },
  },

  hero: {
    title: 'The Pedestrian Waterproofing Specialists',
    description:
      'SPL Decks was established as a dedicated division of SPL Waterproofing Inc. to provide laser-focused expertise on the structures we live on: decks, balconies, and patios.',
    image: {
      src: heroImage,
      alt: 'SPL Decks team members reviewing architectural details for a balcony waterproofing project',
      priority: true,
    },
  },

  mission: {
    title: 'Our Division Mission',
    content: [
      'While our parent company, SPL Waterproofing Inc., handles large-scale structural moisture mitigation, SPL Decks was born from a need for precision on pedestrian surfaces.',
      'We understand that a deck is more than just a roof—it is an aesthetic and functional space. Our mission is to combine industrial-strength protection with architectural beauty.',
      'By utilizing specialized crews who only work on pedestrian coatings, we ensure a level of finish and detail that general contractors simply cannot match.',
    ],
  },

  values: {
    title: 'The SPL Decks Standard',
    items: [
      {
        icon: 'mdi:ruler-square',
        title: 'Architectural Precision',
        text: 'We focus on the details that matter: flashing, transitions, and slope-to-drain accuracy.',
      },
      {
        icon: 'mdi:shield-sun',
        title: 'UV-Engineered Systems',
        text: 'Southern California sun destroys cheap coatings. We only install UV-stable, multi-layer assemblies.',
      },
      {
        icon: 'mdi:account-hard-hat',
        title: 'Expert Craftsmanship',
        text: 'Our applicators are manufacturer-certified, ensuring your warranty remains fully intact.',
      },
    ],
  },

  // New Component Idea: Material Excellence (Trust Signal)
  partnerships: {
    title: 'Engineered with Industry Leaders',
    description:
      'We don’t experiment with your home. We install systems from the most trusted names in liquid-applied membranes.',
    brands: [
      { name: 'VaproShield', src: vaproShieldLogo },
      { name: 'Westcoat', src: westcoatLogo },
      { name: 'Sika', src: sikaLogo },
      { name: 'Tremco', src: tremcoLogo },
    ],
  },

  compliance: {
    title: 'Backed by Corporate Stability',
    description:
      'As a division of SPL Waterproofing Inc., we bring the financial stability and insurance coverage of a major contractor to every residential project.',
    items: [
      { label: 'License', value: 'C-39 Specialty Waterproofing #1088354' },
      { label: 'Insurance', value: 'General Liability & Workers Comp' },
      { label: 'Bonding', value: 'Fully Bonded for Commercial & HOA' },
      {
        label: 'Areas Served',
        value:
          'Orange County, Los Angeles, and Ventura County (Coastal & Inland).',
      },
    ],
    note: 'From the hills of Thousand Oaks to the cliffs of San Clemente, we provide structural moisture protection for Southern California’s most exposed architectural environments.',
  },

  cta: {
    title: 'Experience the SPL Decks Difference',
    description:
      'Schedule a specialized inspection with a technician who understands the unique demands of pedestrian waterproofing.',
    action: {
      label: 'Request My Inspection',
      href: '/contact/',
    },
  },
};
