export const projects = [
  {
    slug: 'ets2',
    kicker: 'EU Climate Policy',
    title: 'ETS2: Price Stability, Household Affordability & Environmental Integrity',
    question: 'Keeping ETS2 affordable without weakening the cap',
    summary:
      'A scenario-based distributional and policy-response model of the EU’s second Emissions Trading System, testing how carbon prices of €45–150/t CO₂ hit urban, working and rural households, and which policy responses protect them without loosening the cap.',
    year: null, // TODO: confirm year
    thumbnail: '/images/ets2-thumbnail.svg',
    findings: [
      { value: '€162–€512', label: 'annual carbon cost across three household types' },
      { value: '€500', label: 'transfer offsets the cost, cuts zero emissions' },
      { value: '−92%', label: 'cost cut by electrifying a working home' },
    ],
    reportUrl: '/reports/ets2-research-report-ruqaiya-motagam.pdf',
    modelUrl: '/reports/ets2-household-affordability-model-ruqaiya-motagam.numbers',
  },
  {
    slug: 'industrial-electrification',
    kicker: 'Industrial Energy',
    title: 'Industrial Electrification Economics',
    question: 'When does electrifying industrial heat pay off?',
    summary:
      'A cost model comparing gas boilers, heat pumps and electric boilers for industrial process heat across carbon prices of €0–200/t, identifying when switching from gas to electricity becomes economically rational.',
    year: null, // TODO: confirm year
    thumbnail: '/images/industrial-electrification-thumbnail.svg',
    findings: [
      { value: '€86 vs €94', label: 'heat pump vs gas, cost per MWh of heat' },
      { value: '€49/t', label: 'break-even carbon price' },
      { value: '6.5 yrs', label: 'payback, with −74% operational emissions' },
    ],
    reportUrl: '/reports/industrial-electrification-research-report-ruqaiya-motagam.pdf',
    modelUrl: '/reports/industrial-electrification-economics-model-ruqaiya-motagam.numbers',
  },
]
