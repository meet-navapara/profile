export const companyInfo = {
  name: 'Zylate',
  legalName: 'Zylate Infotech',
  logo: '/projects/ZYLATE.LOGO.jpeg',
  logoNavbar: '/zylate-nav-logo.png',
  tagline: 'Designing & developing beyond the ordinary',
  description:
    'Leading IT services company providing comprehensive technology solutions including software development, cloud services, cybersecurity, and IT support. Your trusted partner for all IT needs.',
  email: 'zylateinfotech@gmail.com',
  phone: '+91 73831 68307',
  address: '309, Ambika pinecale, Mota Varachha, Surat, Gujarat 394101',
  hero: {
    badge: 'Your Trusted IT Solutions Partner',
    title: 'Comprehensive IT Services For Your Business Success',
    description:
      'We provide end-to-end IT solutions including software development, cloud services, network management, cybersecurity, and IT support to help your business thrive in the digital age.',
    stats: [
      { label: 'IT Projects', value: '50+' },
      { label: 'Clients', value: '25+' },
      { label: 'Support', value: '24/7' },
    ],
  },
  stats: [
    { label: 'Projects', value: '50+' },
    { label: 'Clients', value: '25+' },
    { label: 'Experience', value: '4+' },
  ],
}

export const portfolioCategories = [
  'All',
  'Web Development',
  'Web App',
  'App Development',
  'UI/UX Design',
]

export const projects = [
  {
    id: 'zimji',
    title: 'zimji',
    category: 'Web App',
    tags: ['Web App', 'AI', 'E-commerce'],
    result: 'AI virtual try-on for outfits & hair',
    color: '#101412',
    year: 2026,
    url: 'https://www.zimji.com/',
    thumbnail: '/projects/zimji1.png',
    screens: [
      { label: 'Homepage — Instant AI Try-On', image: '/projects/zimji1.png' },
      { label: 'Outfit Try-On', image: '/projects/zimji2.png' },
      { label: 'Try-On Pricing', image: '/projects/zimji3.png' },
    ],
    description:
      'zimji is an AI virtual try-on product for shoppers, boutiques, and salons. Customers upload a photo, pay with M-Pesa or Razorpay, and preview outfits, hairstyles, hair color, and beards in seconds. Businesses upload a catalog once and run in-store or online try-ons on prepaid credits.',
    highlights: [
      'Consumer try-on flow — photo, payment, instant render',
      'Boutique and salon catalog with staff dashboard',
      'M-Pesa and Razorpay pay-per-look pricing',
      'Outfit, hair, color, and beard try-on experiences',
    ],
  },
  {
    id: 'zhealth',
    title: 'Z Health',
    category: 'Web App',
    tags: ['Web App', 'Healthcare', 'SaaS'],
    result: 'Clinic software from check-in to follow-up',
    color: '#f3efe6',
    year: 2026,
    url: 'https://www.zhealth.world/',
    thumbnail: '/projects/zhealth1.png',
    screens: [
      { label: 'Homepage — Clinic Day', image: '/projects/zhealth1.png' },
      { label: 'Visit Workflow', image: '/projects/zhealth2.png' },
      { label: 'Day Calendar', image: '/projects/zhealth3.png' },
    ],
    description:
      'Z Health is clinic software for the full patient visit. Doctors and staff share one workspace for registration, the day calendar, consultation notes, billing, and WhatsApp or email follow-up — including multi-branch roles and campaign approvals.',
    highlights: [
      'Shared doctor and front-desk clinic workspace',
      'One visit record from register to follow-up',
      'Day, week, and month appointment calendar',
      'Billing, branches, and WhatsApp or email campaigns',
    ],
  },
  {
    id: 'runebond',
    title: 'RUNEBond',
    category: 'Web App',
    tags: ['Web App', 'UI/UX Design', 'DeFi'],
    result: 'THORChain node bonding platform',
    color: '#0b0f1a',
    year: 2025,
    url: 'https://app.runebond.com/nodes',
    thumbnail: '/projects/runebond1.png',
    interactive: true,
    uiScreens: [
      { label: 'Nodes Dashboard', image: '/projects/runebond1.png' },
      { label: 'Node Bonding Flow', image: '/projects/runebond2.png' },
      { label: 'Platform Overview', image: '/projects/runebond3.png' },
    ],
    description:
      'RUNEBond is a THORChain node bonding platform where users discover node operators, stake RUNE, and manage bonds securely. We designed the nodes dashboard, bonding flows, and wallet-connected experience for crypto-native users.',
    highlights: [
      'Nodes listing & operator comparison UI',
      'Bond calculator and staking flows',
      'Wallet-connected dashboard design',
      'Dark fintech interface system',
    ],
  },
  {
    id: 'flowkit',
    title: 'FlowKit Analytics',
    category: 'UI/UX Design',
    tags: ['UI/UX Design', 'Figma', 'SaaS', 'Design System'],
    result: 'End-to-end product design system',
    color: '#1e1b4b',
    year: 2025,
    cardLabel: 'Figma Design System',
    interactive: true,
    dynamicUi: true,
    figmaVariant: 'flowkit',
    description:
      'FlowKit is a SaaS analytics design system built in Figma — covering dashboard, analytics, onboarding, and mobile experiences. We crafted component libraries, auto-layout frames, and a cohesive 8pt grid system for rapid product iteration.',
    highlights: [
      'Figma component library with variants & states',
      'Dashboard, analytics & onboarding frame sets',
      'Mobile-responsive app screens',
      'Design tokens — color, type, spacing, radius',
    ],
  },
  {
    id: 'lumen-health',
    title: 'Lumen Health UI',
    category: 'UI/UX Design',
    tags: ['UI/UX Design', 'Figma', 'Healthcare', 'Mobile App'],
    result: 'Patient-first telehealth experience',
    color: '#0f766e',
    year: 2025,
    cardLabel: 'Figma Mobile UI',
    interactive: true,
    dynamicUi: true,
    figmaVariant: 'lumen',
    description:
      'Lumen Health is a mobile healthcare app designed in Figma — covering vitals dashboard, appointment booking, medical records, and telehealth chat. We built a calming teal design system with accessible typography and component variants for iOS-ready handoff.',
    highlights: [
      'Figma mobile frames with auto-layout',
      'Vitals dashboard & wellness plan UI',
      'Appointment booking flow design',
      'Telehealth chat & records screens',
    ],
  },
  {
    id: 'vasana',
    title: 'Vasana',
    category: 'UI/UX Design',
    tags: ['UI/UX Design', 'Healthcare', 'AI Platform'],
    result: '27,400+ members inspired',
    color: '#1a365d',
    year: 2025,
    url: 'https://vasana.ai/',
    thumbnail: '/projects/vasana-hero.png',
    interactive: true,
    uiScreens: [
      { label: 'Homepage — Human Performance OS', image: '/projects/vasana-hero.png' },
      {
        label: 'Homepage — Full Page',
        image: '/projects/vasana-home-screenshot.png',
      },
      { label: 'Behavioral Genome Section', image: '/projects/vasana-genome.webp' },
      { label: 'Public Safety — Product Detail', image: '/projects/vasana-build1.webp' },
      { label: 'Healthcare — Product Detail', image: '/projects/vasana-build2.webp' },
      { label: 'Enterprise — Product Detail', image: '/projects/vasana-build3.webp' },
    ],
    description:
      'Vasana is the operating system for human performance, powered by the Vasana Behavioral Genome®. We designed the homepage, industry solution pages, genome storytelling, and product detail experiences for public safety, healthcare, and enterprise audiences.',
    highlights: [
      'Homepage & hero experience design',
      'Behavioral Genome visual storytelling',
      'Industry-specific landing pages',
      'Healthcare trust-focused UI patterns',
    ],
  },
  {
    id: 'fix-my-gym',
    title: 'Fix My Gym',
    category: 'App Development',
    tags: ['App Development', 'UI/UX Design', 'Fitness'],
    result: 'Diagnose · Fix · Book',
    color: '#ff6b2b',
    year: 2025,
    url: 'https://fixmygym.app/',
    thumbnail: '/projects/fixmygym-home.png',
    interactive: true,
    uiScreens: [
      { label: 'Home — Diagnose. Fix. Book.', image: '/projects/fixmygym-home.png' },
      { label: 'Equipment Diagnose Flow', image: '/projects/fixmygym-diagnose.png' },
    ],
    description:
      'FixMyGym is a fitness platform that helps users diagnose gym equipment issues, find fixes, and book services. We built the mobile-first app UI with bold Barlow typography and an energetic orange brand system.',
    highlights: [
      'Diagnose-first user journey',
      'Service booking flow design',
      'Mobile app interface development',
      'Fitness brand UI with #FF6B2B theme',
    ],
  },
  {
    id: 'agilis-commerce',
    title: 'Agilis Commerce',
    category: 'Web Development',
    tags: ['Web Development', 'B2B SaaS', 'AI'],
    result: 'Trusted by global chemical suppliers',
    color: '#0c4a6e',
    year: 2025,
    url: 'https://agiliscommerce.com/',
    thumbnail: '/projects/agilis-home-screenshot.png',
    screens: [
      { label: 'Marketing Homepage', image: '/projects/agilis-home-screenshot.png' },
      { label: 'Platform Page', image: '/projects/agilis-platform.png' },
      { label: 'Sales Enablement', image: '/projects/agilis-customer.png' },
    ],
    description:
      'Agilis Commerce marketing website for a chemical industry SaaS platform — “Making AI work for chemicals and materials.” We built responsive landing pages showcasing platform capabilities, case studies, and ROI metrics.',
    highlights: [
      'B2B chemical industry marketing site',
      'Case study & ROI landing sections',
      'Platform storytelling pages',
      'Enterprise-ready responsive development',
    ],
  },
  {
    id: 'regaportal',
    title: 'REGAPORTAL',
    category: 'Web Development',
    tags: ['Web Development', 'SaaS', 'Webinars'],
    result: 'Live webinar registration platform',
    color: '#4f46e5',
    year: 2025,
    url: 'https://regaportal.com/',
    thumbnail: '/projects/regaportal.png',
    screens: [
      { label: 'Portal Dashboard', image: '/projects/regaportal.png' },
    ],
    description:
      'REGAPORTAL is a live webinar registration and management platform with real-time analytics, attendee tracking, and payment integration. We developed the organizer portal and registration experience.',
    highlights: [
      'Webinar registration workflows',
      'Organizer admin portal',
      'Analytics & attendee tracking UI',
      'Payment integration development',
    ],
  },
  {
    id: 'altitude-labs',
    title: 'Altitude Labs',
    category: 'Web Development',
    tags: ['Web Development', 'E-commerce', 'Health & Wellness'],
    result: 'Pure Himalayan Shilajit brand site',
    color: '#0f0f0f',
    year: 2026,
    url: 'https://www.altitudelabs.in/',
    thumbnail: '/projects/altitude1.png',
    screens: [
      { label: 'Homepage — Peak Performance', image: '/projects/altitude1.png' },
      { label: 'Product Collection', image: '/projects/altitude2.png' },
      { label: 'Story & Trust Section', image: '/projects/altitude3.png' },
    ],
    description:
      'Altitude Labs is a premium D2C brand website for pure Himalayan Shilajit resin — cinematic hero storytelling, product collection pages, lab-tested trust sections, and a conversion-focused shop experience built for performance-minded customers.',
    highlights: [
      'Cinematic homepage with performance-led messaging',
      'Boardroom Black™ product collection pages',
      'Lab-tested trust & certification sections',
      'Responsive e-commerce ready development',
    ],
  },
]

export function getProjectById(id) {
  return projects.find((project) => project.id === id)
}
