export const FIGMA_VARIANTS = {
  flowkit: {
    fileName: 'FlowKit — Design System.fig',
    frameIds: ['dashboard', 'analytics', 'onboarding', 'mobile'],
    labels: {
      dashboard: 'Dashboard',
      analytics: 'Analytics',
      onboarding: 'Onboarding Flow',
      mobile: 'Mobile App',
    },
  },
  lumen: {
    fileName: 'Lumen Health — Mobile App.fig',
    frameIds: ['home', 'appointments', 'records', 'telehealth'],
    labels: {
      home: 'Health Home',
      appointments: 'Book Appointment',
      records: 'Medical Records',
      telehealth: 'Telehealth Chat',
    },
  },
}

export function getFigmaVariant(variant = 'flowkit') {
  return FIGMA_VARIANTS[variant] ?? FIGMA_VARIANTS.flowkit
}
