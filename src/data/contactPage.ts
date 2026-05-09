/**
 * 2026 Strategy: Optimized Contact Page for the SPL Decks Division.
 * Focuses on capturing high-intent leads for pedestrian traffic surfaces
 * while leveraging the parent company's C-39 licensing authority.
 */
export const contactPage = {
  seo: {
    title: 'Contact SPL Decks | Deck & Balcony Inspection – Thousand Oaks to San Clemente',
    description: 'Request a specialized deck waterproofing inspection or estimate. SPL Decks provides C-39 licensed solutions for residential and HOA balconies across SoCal.',
    
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'ContactPage',
          '@id': 'https://spldecks.com/contact/#webpage',
          'url': 'https://spldecks.com/contact/',
          'name': 'Contact SPL Decks | Specialty Waterproofing Division',
          'description': 'Schedule a specialized deck waterproofing inspection or request an estimate for balcony and pedestrian surface systems.',
          'mainEntity': {
            '@type': 'HomeAndConstructionBusiness',
            '@id': 'https://spldecks.com/#localbusiness',
            'name': 'SPL Decks (Division of SPL Waterproofing Inc.)',
            'telephone': '+1-949-817-1865',
            'email': 'contact@spldecks.com',
            'contactPoint': {
              '@type': 'ContactPoint',
              'telephone': '+1-949-817-1865',
              'contactType': 'customer service',
              'areaServed': ['US-CA'],
              'availableLanguage': ['English', 'Spanish']
            }
          }
        }
      ]
    }
  },

  content: {
    heading: 'Request Your Specialized Deck Inspection',
    subheading: 'Precision waterproofing for balconies, patios, and roof decks. Serving the Southern California coastline.',
    intro: 'From structural leaks to aesthetic resurfacing, our division focuses exclusively on pedestrian traffic surfaces. Get an honest assessment from the experts who understand deck-specific building codes.',
    
    // Links tailored to the SPL Decks domain
    serviceLinks: [
      {
        name: 'Deck & Balcony Resurfacing',
        href: '/services/deck-and-balcony-waterproofing-services/',
      },
      {
        name: 'Roof Deck Systems',
        href: '/services/roof-deck-waterproofing-services/',
      },
      {
        name: 'HOA & Multi-Family Balconies',
        href: '/services/commercial-waterproofing-and-sealing-services/',
      }
    ],

    serviceAreas: {
      counties: ['Orange County', 'Los Angeles County', 'Ventura County'],
      cities: [
        'Santa Ana', 'Newport Beach', 'Malibu', 'Thousand Oaks', 
        'Laguna Beach', 'Dana Point', 'San Clemente', 'Huntington Beach',
        'Irvine', 'Santa Monica'
      ],
      suffix: 'and the entire Southern California coastal corridor.'
    }
  },

  contactInfo: {
    company: 'SPL Decks (Division of SPL Waterproofing Inc.)',
    phone: '+1-949-817-1865',
    phoneDisplay: '(949) 817-1865',
    email: 'contact@spldecks.com',
    license: 'CA License #1088354 – C-39 Waterproofing Specialist', // Division specific/parent license ref
    address: {
      street: '2229 Elder Ave',
      city: 'Santa Ana',
      state: 'CA',
      zip: '92704'
    }
  },

  form: {
    title: 'Get Your Professional Quote',
    fields: [
      { name: 'name', label: 'Full Name', type: 'text', required: true },
      { name: 'email', label: 'Email Address', type: 'email', required: true },
      { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
      // Updated property types for deck-specific leads
      { 
        name: 'propertyType', 
        label: 'Property Type', 
        type: 'select', 
        options: ['Single Family Home', 'Condo/Apartment Balcony', 'HOA / Property Manager', 'Commercial'] 
      },
  
      { name: 'message', label: 'Tell us about your project (deck size, current issues, etc.)', type: 'textarea', required: true }
    ],
    buttonLabel: 'Request Inspection'
  }
};