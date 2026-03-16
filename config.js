// ADR Configuration - Centralized Settings
// Update values here to change pricing, URLs, contact info across entire site

export const config = {
  // Company Info
  company: {
    name: 'Australian Data Removal',
    shortName: 'ADR',
    tagline: 'Australian human-led privacy review and data removal support',
    email: 'hello@ausdataremoval.com.au',
    location: 'Perth, Western Australia',
    year: '2026',
    abn: '86 921 751 764'
  },

  // Domain & URLs
  domain: 'ausdataremoval.com.au',
  
  // Stripe Payment Links (Replace with actual URLs after Stripe setup)
  stripe: {
    audit: 'https://buy.stripe.com/[AUDIT_LINK_HERE]',
    cleanup: 'https://buy.stripe.com/[CLEANUP_LINK_HERE]',
    founding: 'https://buy.stripe.com/[FOUNDING_LINK_HERE]'
  },

  // Form URLs (Replace with actual Paperform or form service URL)
  forms: {
    intake: 'https://form.typeform.com/to/[INTAKE_FORM_ID]',
    contact: 'https://form.typeform.com/to/[CONTACT_FORM_ID]'
  },

  // Services & Pricing
  services: {
    audit: {
      id: 'audit',
      name: 'Personal Data Exposure Audit',
      price: 199,
      currency: 'AUD',
      duration: 'One-time',
      featured: true, // This is the primary first-step offer
      description: 'A confidential manual review of where your personal information appears online. We check major people-search sites, data brokers, directories, and indexed public sources using your name, phone number, email address, and related identifiers.\n\nYou receive a clear summary of what was found, where the exposure sits, and the practical next steps available.',
      cta: 'START MY AUDIT',
      stripe_link: 'stripe.audit'
    },
    cleanup: {
      id: 'cleanup',
      name: 'Full Digital Clean-Up',
      price: 997,
      currency: 'AUD',
      duration: 'One-time',
      featured: false,
      description: 'For clients ready to act. We use the audit findings to prepare and submit eligible opt-out and removal requests, complete the first follow-up round, tighten relevant privacy settings where appropriate, and document the work completed.\n\nThis service does not guarantee every listing can be removed, but it is designed to materially reduce your exposure.',
      cta: 'START MY CLEAN-UP',
      stripe_link: 'stripe.cleanup'
    },
    founding: {
      id: 'founding',
      name: 'Founding Member Access',
      price: 500,
      currency: 'AUD',
      duration: 'One-time',
      featured: false,
      limited: true,
      limit_text: 'Limited to 500 places',
      description: 'Includes your Personal Data Exposure Audit, priority placement for clean-up work, light ongoing exposure checks during the founding period, and early access to selected future features.\n\nDesigned for early clients who want a lower-entry way to secure priority and support the service as it develops.',
      cta: 'JOIN AS A FOUNDING MEMBER',
      stripe_link: 'stripe.founding'
    }
  },

  // Process Steps
  process: [
    {
      step: 1,
      title: 'Choose Your Service',
      description: 'Select your audit or launch offer and complete payment securely online.'
    },
    {
      step: 2,
      title: 'Complete Intake',
      description: 'Fill out a short confidential form so we can investigate the correct records and identifiers.'
    },
    {
      step: 3,
      title: 'Manual Review',
      description: 'We investigate your exposure and prepare your findings report, typically within 2 business days.'
    },
    {
      step: 4,
      title: 'Choose Next Steps',
      description: 'Use the report yourself or engage ADR to carry out the clean-up work.'
    }
  ],

  // Trust Markers
  trust: [
    'Australian-based',
    'Human-led',
    'Confidential'
  ],

  // SEO / Meta
  seo: {
    title: 'Australian Data Removal - Privacy Audit & Data Removal Service',
    description: 'Manual review of where your personal information appears online. Confidential audit and removal service for Australians concerned about data exposure, doxxing, and people-search listings.',
    ogImage: 'https://ausdataremoval.com.au/og-image.jpg'
  }
}
