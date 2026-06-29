export const RESUME_PDF = '/Resume.pdf';

export const heroData = {
  eyebrow: 'Rakesh Kumar · Senior Full-Stack Engineer',

  title:
    '8+ years building enterprise FinTech, SAP, and AI-powered products at scale.',

  description:
    'Senior Full-Stack Engineer specializing in React, Next.js, TypeScript, Node.js, PostgreSQL, Redis, Kafka, and cloud-native architectures. Experienced in AP/AR workflows, RAG-powered AI applications, micro-frontends, and enterprise integrations across FinTech, SAP HR Tech, TravelTech, and ATS platforms.',

  primary: {
    label: 'Explore Projects',
    link: '#portfolio'
  },

  secondary: {
    label: 'Download Resume',
    link: RESUME_PDF
  },

  stats: [
    { value: '8+', label: 'Years Experience' },
    { value: '11+', label: 'Enterprise Products' },
    { value: '5', label: 'Engineers Mentored' }
  ]
};

export const dashboardFilters = [
  { label: 'Overview', value: 'all', icon: '◉' },
  { label: 'FinTech', value: 'fintech', icon: '💳' },
  { label: 'SAP HR Tech', value: 'sap', icon: '🏢' },
  { label: 'TravelTech', value: 'travel', icon: '✈' },
  { label: 'AI / GenAI', value: 'ai', icon: '🤖' }
];

const sharedActivities = {
  all: [
    { date: 'Dec 2025', title: 'Zenwork — Sr. Software Engineer', description: 'Full-stack FinTech: Node.js microservices, AP/AR, Tax1099, payment APIs, and Next.js frontends on AWS.', tag: 'Current', status: 'current' },
    { date: 'Aug 2024', title: 'Zaggle — Sr. Software Engineer', description: 'Full-stack EMS & SBT: SSR React, Node.js REST APIs, WebSockets, and micro-frontend architecture.', tag: 'TravelTech' },
    { date: 'Aug 2021', title: 'SAP Labs — Software Engineer', description: 'React + TypeScript micro-frontends integrated with Java/Python backend systems at scale.', tag: 'SAP' },
    { date: 'Oct 2018', title: 'Swooptalent — Software Engineer', description: 'Full-stack talent platform: React, Vue.js, GraphQL, browser extensions, and Kubernetes CI/CD.', tag: 'ATS' }
  ],
  fintech: [
    { date: 'Dec 2025', title: 'Node.js Microservices — AP/AR', description: 'REST APIs for bills, recurring payments, bulk pay, RBAC, audit trails, and vendor portals.', tag: 'Zenwork', status: 'current' },
    { date: '2025', title: 'Payment & Banking Stack', description: 'Stripe, Plaid, Mercoa, COLUMN, QuickBooks QBO/QBD production integrations.', tag: 'APIs' },
    { date: '2025', title: 'Tax1099 & E-Filing Platform', description: 'End-to-end fintech workflows with Next.js UI and secure Node.js backend services.', tag: 'FinTech' },
    { date: '2025', title: 'Event-Driven Architecture', description: 'Kafka, Redis, SSE, and WebSocket pipelines for high-volume financial operations.', tag: 'Backend' }
  ],
  sap: [
    { date: '2021–2024', title: 'NextGen CDP + GenAI', description: 'OMP, Goals, Growth Portfolio with personalized GenAI recommendations.', tag: 'SAP', status: 'current' },
    { date: '2022', title: 'Talent Intelligence Hub', description: 'Whole Self Model, skills, competencies, and AI/ML-driven experiences.', tag: 'SAP' },
    { date: '2023', title: 'PWA & i18n Rollout', description: 'Service Workers, offline caching, and multi-region localization support.', tag: 'Architecture' },
    { date: '2023', title: 'Storybook Design System', description: 'Atomic design components with WCAG, ARIA, and enterprise UI guidelines.', tag: 'Design System' }
  ],
  travel: [
    { date: '2024–2025', title: 'EMS Full-Stack Revamp', description: 'SSR React + Node.js REST APIs for Expense, Report, Advance, and Travel Advance.', tag: 'Zaggle', status: 'current' },
    { date: '2024', title: 'Self Booking Tool (SBT)', description: 'React frontend with WebSocket backend sync, approvals, and policy engine APIs.', tag: 'SBT' },
    { date: '2024', title: 'Dynamic Form Builder', description: 'Configurable form engine integrated with EMS backend validation and workflows.', tag: 'Forms' },
    { date: '2024', title: 'Microservices on GCP', description: 'Cloud-native deployment, CI/CD pipelines, and ExcelJS reporting services.', tag: 'Cloud' }
  ],
  ai: [
    { date: '2025', title: 'LLM API Platform', description: 'Full-stack AI services: Node.js orchestration, LLM APIs, and React intelligent UX.', tag: 'Zenwork', status: 'current' },
    { date: '2022–2024', title: 'SAP GenAI Integration', description: 'Backend-connected GenAI features for recommendations and workflow automation.', tag: 'SAP' },
    { date: '2025', title: 'Observability Stack', description: 'Telemetry, diagnostics, and performance monitoring across frontend and API layers.', tag: 'DevOps' },
    { date: '2025', title: 'Secure AI Pipelines', description: 'OAuth2, SAML, JWT auth flows with AI service integration and audit logging.', tag: 'Security' }
  ]
};

const sharedSkills = {
  all: [
    { name: 'React / Next.js', level: 95, delay: 0 },
    { name: 'Node.js / NestJS', level: 92, delay: 0.04 },
    { name: 'TypeScript', level: 94, delay: 0.08 },
    { name: 'PostgreSQL', level: 90, delay: 0.12 },
    { name: 'Kafka / Redis', level: 88, delay: 0.16 },
    { name: 'AWS / Cloud', level: 86, delay: 0.2 }
  ],
  fintech: [
    { name: 'Node.js Microservices', level: 94, delay: 0 },
    { name: 'Next.js / React', level: 92, delay: 0.04 },
    { name: 'PostgreSQL', level: 90, delay: 0.08 },
    { name: 'Payment APIs', level: 93, delay: 0.12 },
    { name: 'Kafka / Event-Driven', level: 88, delay: 0.16 },
    { name: 'QuickBooks (QBO/QBD)', level: 89, delay: 0.2 },
    { name: 'TanStack Query', level: 92, delay: 0.04 },
    { name: 'TanStack Table', level: 90, delay: 0.08 },
    { name: 'Core Web Vitals', level: 91, delay: 0.12 },
  ],
  sap: [
    { name: 'React + TypeScript', level: 96, delay: 0 },
    { name: 'Micro-Frontends', level: 94, delay: 0.04 },
    { name: 'Storybook / Design System', level: 92, delay: 0.08 },
    { name: 'WCAG / ARIA', level: 91, delay: 0.12 },
    { name: 'i18n / Localization', level: 86, delay: 0.16 },
    { name: 'PWA / Service Workers', level: 84, delay: 0.2 },
    { name: 'REST APIs', level: 91, delay: 0.24 },
    { name: 'Redux Toolkit', level: 90, delay: 0.28 },
    { name: 'Java / Python Backends', level: 87, delay: 0.32 },
    { name: 'GenAI / LLM Features', level: 88, delay: 0.36 }
  ],
  travel: [
        { name: 'React Hook Form', level: 90, delay: 0.04 },
    { name: 'Storybook / Atomic Design', level: 91, delay: 0.08 },
    { name: 'WebSockets / Real-time', level: 88, delay: 0.12 },
    { name: 'React / Redux Saga', level: 93, delay: 0 },
    { name: 'Node.js REST APIs', level: 90, delay: 0.04 },
    { name: 'WebSockets / Real-time', level: 88, delay: 0.08 },
    { name: 'SSR / Performance', level: 89, delay: 0.12 },
    { name: 'Module Federation', level: 87, delay: 0.16 },
    { name: 'Bundle Optimization', level: 89, delay: 0.2 },
    { name: 'Bundle Optimization', level: 89, delay: 0.2 }
  ],
  ai: [
    { name: 'LLM API Integration', level: 90, delay: 0 },
    { name: 'GenAI UX / Recommendations', level: 88, delay: 0.04 },
    { name: 'Node.js AI Services', level: 88, delay: 0.04 },
    { name: 'Workflow Automation', level: 87, delay: 0.08 },
    { name: 'Cursor / Copilot / Claude', level: 92, delay: 0.12 },
    { name: 'Telemetry / Observability', level: 85, delay: 0.16 },
    { name: 'SSE / Streaming UI', level: 86, delay: 0.2 },
    {name: 'SSE / Streaming APIs', level: 86, delay: 0.12 },
    { name: 'OAuth2 / JWT / SAML', level: 88, delay: 0.16 },
    { name: 'Telemetry / Observability', level: 85, delay: 0.2 }
  ]
};

const sharedExtendedSkills = {
  all: [
    { name: 'Vue.js', level: 78, delay: 0.24 },
    { name: 'Node.js / REST APIs', level: 88, delay: 0.28 },
    { name: 'Playwright / Cypress', level: 87, delay: 0.32 },
    { name: 'Kafka / Redis', level: 84, delay: 0.36 },
    { name: 'Vue.js', level: 78, delay: 0.24 },
    { name: 'Node.js / REST APIs', level: 88, delay: 0.28 },
    { name: 'Playwright / Cypress', level: 87, delay: 0.32 },
    { name: 'Kafka / Redis', level: 84, delay: 0.36 }
  ],
  fintech: [
        { name: 'Salesforce CRM', level: 84, delay: 0.24 },
    { name: 'Kafka / SSE / WebSockets', level: 86, delay: 0.28 },
    { name: 'Jest / RTL / Playwright', level: 88, delay: 0.32 },
    { name: 'Tax1099 / E-Filing UI', level: 85, delay: 0.36 },
    { name: 'TanStack Table', level: 90, delay: 0.24 },
    { name: 'Redis Caching', level: 86, delay: 0.28 },
    { name: 'Stripe / Plaid / Mercoa', level: 92, delay: 0.32 },
    { name: 'Jest / Playwright', level: 87, delay: 0.36 }
  ],
  sap: [
    { name: 'GenAI Features', level: 88, delay: 0.24 },
    { name: 'SAP UI5 / Fiori', level: 85, delay: 0.28 },
    { name: 'Jest / Cypress / Cucumber', level: 87, delay: 0.32 },
    { name: 'Performance Profiling', level: 86, delay: 0.36 },
    { name: 'Storybook / Design System', level: 90, delay: 0.24 },
    { name: 'PWA / i18n', level: 84, delay: 0.28 },
    { name: 'WCAG / ARIA', level: 91, delay: 0.32 },
    { name: 'Jest / Cypress', level: 87, delay: 0.36 }
  ],
  travel: [
    { name: 'AEM Integration', level: 82, delay: 0.24 },
    { name: 'ExcelJS Reporting', level: 85, delay: 0.28 },
    { name: 'Chart.js / Recharts', level: 86, delay: 0.32 },
    { name: 'GCP / Docker / CI/CD', level: 83, delay: 0.36 },
    { name: 'React Hook Form', level: 90, delay: 0.24 },
    { name: 'Storybook / AEM', level: 86, delay: 0.28 },
    { name: 'ExcelJS Reporting', level: 85, delay: 0.32 },
    { name: 'Chart.js / Recharts', level: 86, delay: 0.36 }
  ],
  ai: [
    { name: 'Secure Auth (OAuth/SAML)', level: 88, delay: 0.24 },
    { name: 'CSP / Frontend Security', level: 85, delay: 0.28 },
    { name: 'SEO / SSR / SSG', level: 87, delay: 0.32 },
    { name: 'Performance Profiling', level: 84, delay: 0.36 },
    { name: 'GenAI UX Layer', level: 88, delay: 0.24 },
    { name: 'Cursor / Copilot / Claude', level: 92, delay: 0.28 },
    { name: 'Prisma / ORM', level: 84, delay: 0.32 },
    { name: 'MongoDB / Elasticsearch', level: 82, delay: 0.36 }
  ]
};

const sharedSkillTags = {
  all: [
    { label: 'Frontend', tags: ['React.js', 'Next.js', 'TypeScript', 'Redux Toolkit', 'TanStack Query', 'Micro-Frontends'] },
    { label: 'Backend & Data', tags: ['Node.js', 'NestJS', 'Express', 'PostgreSQL', 'Redis', 'Kafka', 'GraphQL'] },
    { label: 'Cloud & DevOps', tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub Actions', 'Jenkins'] },
    { label: 'Testing', tags: ['Jest', 'Cypress', 'Playwright', 'React Testing Library'] }
  ],
  fintech: [
    { label: 'Backend & Data', tags: ['Node.js', 'PostgreSQL', 'Kafka', 'Redis', 'RBAC', 'QuickBooks'] },
    { label: 'Frontend', tags: ['Next.js', 'TanStack Query', 'TanStack Table', 'SSR', 'Core Web Vitals', 'Webpack'] },
    { label: 'Integrations', tags: ['Stripe', 'Plaid', 'Mercoa', 'COLUMN', 'Tax1099', 'Salesforce'] },
    { label: 'Quality & Security', tags: ['Jest', 'Playwright', 'OAuth2', 'JWT', 'SAML', 'CSP'] }
  ],
  sap: [
    { label: 'Full-Stack SAP', tags: ['React', 'TypeScript', 'Micro-Frontends', 'REST APIs', 'Redux Toolkit'] },
    { label: 'Frontend & UX', tags: ['Storybook', 'WCAG', 'i18n', 'PWA', 'SAP UI5', 'SuccessFactors'] },
    { label: 'Backend & Testing', tags: ['Java', 'Python', 'SAP HANA', 'GenAI', 'Jest', 'Cypress'] }
  ],
  travel: [
    { label: 'Full-Stack TravelTech', tags: ['React', 'Node.js', 'Redux Saga', 'WebSockets', 'SSR'] },
    { label: 'Frontend', tags: ['React Hook Form', 'Storybook', 'AEM', 'Module Federation', 'Chart.js'] },
    { label: 'Backend & Cloud', tags: ['Node.js APIs', 'ExcelJS', 'Microservices', 'GCP', 'Docker', 'CI/CD'] }
  ],
  ai: [
    { label: 'AI Full-Stack', tags: ['LLM APIs', 'Node.js', 'SSE', 'Workflow Automation', 'GenAI UX'] },
    { label: 'Data Layer', tags: ['PostgreSQL', 'Redis', 'MongoDB', 'Elasticsearch', 'Prisma'] },
    { label: 'DevOps & Tools', tags: ['AWS', 'Telemetry', 'Cursor', 'Copilot', 'Docker', 'CI/CD'] },
     { label: 'Dev Tools', tags: ['Cursor', 'GitHub Copilot', 'Claude', 'Windsurf', 'Figma'] },
  ]
};

export const dashboardDataByDomain = {
  all: {
    meta: { label: 'Cross-Domain Overview', company: 'Zenwork · Zaggle · SAP · Swooptalent' },
    kpis: [
      { value: '8+', label: 'Years Experience', icon: '⏱', delta: 'Since 2018', deltaLabel: 'UI Dev → Sr. Full-Stack', trend: 'up' },
      { value: '11+', label: 'Products Delivered', icon: '🚀', delta: 'End-to-end', deltaLabel: 'React + Node.js + Cloud', trend: 'up' },
      { value: '4', label: 'Product Companies', icon: '🏢', delta: 'Hyderabad', deltaLabel: 'Zenwork · Zaggle · SAP', trend: 'neutral' },
      { value: '5', label: 'Engineers Mentored', icon: '👥', delta: 'Leadership', deltaLabel: 'Full-stack delivery', trend: 'up' }
    ],
    insights: 'Senior Full-Stack Engineer — React, Next.js, Node.js, PostgreSQL, Kafka, Redis, AWS, TanStack, and enterprise microservices across FinTech, SAP, TravelTech, and AI.',
    pills: ['React & Next.js', 'Node.js APIs', 'PostgreSQL', 'Kafka & Redis', 'TanStack Query', 'Micro-frontends', 'WCAG / PWA'],
    status: [
      { label: 'Full-stack production ready', state: 'active' },
      { label: 'Microservices on AWS', state: 'active' },
      { label: 'Core Web Vitals optimized', state: 'active' }
    ],
    activities: sharedActivities.all,
    activityTitle: 'Career Milestones',
    skills: sharedSkills.all,
    extendedSkills: sharedExtendedSkills.all,
    extendedSkillsTitle: 'Frontend & Platform',
    skillTags: sharedSkillTags.all,
    skillsTitle: 'Full-Stack Proficiency',
    featuredChart: 2,
    charts: [
      {
        title: 'Domain Expertise',
        value: '5 Domains',
        trend: { label: 'Multi-sector', direction: 'positive' },
        chart: { type: 'bar', labels: ['FinTech', 'SAP', 'Travel', 'AI', 'ATS'], bars: [92, 88, 85, 78, 72] },
        note: 'Depth across enterprise product domains from resume-backed delivery.'
      },
      {
        title: 'Tech Stack Breadth',
        value: '40+ Tools',
        trend: { label: 'Full-stack', direction: 'positive' },
        chart: { type: 'bar', labels: ['Frontend', 'Backend', 'Cloud', 'Data', 'AI'], bars: [95, 90, 82, 85, 75] },
        note: 'React, Next.js, Vue.js, TypeScript, Node.js, PostgreSQL, Redis, Kafka, AWS, TanStack Query, and GenAI tooling from production delivery.'
      },
      {
        title: 'Career Growth',
        value: '2018 → Now',
        trend: { label: 'Sr. Engineer', direction: 'positive' },
        chart: {
          type: 'line',
          labels: ['2018', '2019', '2021', '2023', '2024', '2025'],
          points: [22, 32, 48, 62, 82, 95]
        },
        note: 'UI Developer → Software Engineer → Senior Full-Stack Engineer across Zenwork, Zaggle, SAP, Swooptalent.'
      }
    ]
  },
  fintech: {
    meta: { label: 'FinTech Domain', company: 'Zenwork Pvt Ltd · Current' },
    kpis: [
      { value: '30', label: 'Dev Effort Saved %', icon: '📈', delta: '4+ products', deltaLabel: 'Shared component libraries', trend: 'up' },
      { value: '4', label: 'Payment APIs', icon: '💳', delta: 'Live', deltaLabel: 'Stripe · Plaid · Mercoa · COLUMN', trend: 'up' },
      { value: 'Tax1099', label: 'E-Filing Platform', icon: '📄', delta: 'AP/AR', deltaLabel: 'Bills · recurring · bulk pay', trend: 'neutral' },
      { value: 'CRM', label: 'Salesforce Integration', icon: '☁', delta: 'Enterprise', deltaLabel: 'Workflow automation & sync', trend: 'up' }
    ],
    insights: 'Full-stack FinTech at Zenwork — Node.js microservices, Next.js frontends, AP/AR, Tax1099, payment APIs, and cloud-native AWS deployment.',
    pills: ['Node.js', 'Next.js', 'PostgreSQL', 'Kafka', 'Stripe & Plaid', 'TanStack Query', 'TanStack Table', 'Salesforce', 'Tax1099', 'Playwright', 'Core Web Vitals', 'Webpack'],
    status: [
      { label: 'Microservices active', state: 'active' },
      { label: 'RBAC & audit trails', state: 'active' },
       { label: 'CSP & secure auth', state: 'active' }
    ],
    activities: sharedActivities.fintech,
    activityTitle: 'FinTech Delivery Log',
    skills: sharedSkills.fintech,
    extendedSkills: sharedExtendedSkills.fintech,
    extendedSkillsTitle: 'Frontend & Integrations',
    skillTags: sharedSkillTags.fintech,
    skillsTitle: 'Full-Stack FinTech',
    featuredChart: 2,
    charts: [
      {
        title: 'Payment Integrations',
        value: '4 APIs',
        trend: { label: 'Production', direction: 'positive' },
        chart: { type: 'bar', labels: ['Stripe', 'Plaid', 'Mercoa', 'COLUMN'], bars: [95, 90, 85, 80] },
        note: 'Integrated payment and banking APIs for enterprise financial operations.'
      },
      {
        title: 'Full-Stack Architecture',
        value: 'Microservices',
        trend: { label: 'Event-driven', direction: 'positive' },
        chart: { type: 'bar', labels: ['Node.js', 'Next.js', 'Kafka', 'Redis', 'PostgreSQL', 'TanStack'], bars: [94, 92, 88, 86, 90, 91] },
        note: 'Node.js microservices and PostgreSQL backend with Next.js/TanStack frontend, Kafka pipelines, and Redis caching.'
      },
      {
        title: 'Platform Scope',
        value: 'End-to-end',
        trend: { label: 'BFF + Next.js', direction: 'positive' },
        chart: {
          type: 'line',
          labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q1', 'Q2'],
          points: [30, 45, 58, 72, 85, 96]
        },
        note: 'Next.js App Router with Node.js BFF, Core Web Vitals optimization, and end-to-end payment workflows.'
      }
    ]
  },
  sap: {
    meta: { label: 'SAP HR Tech', company: 'SAP Labs India · 2021–2024' },
    kpis: [
      { value: '3', label: 'SAP Products', icon: '🏢', delta: 'Shipped', deltaLabel: 'CDP · Growth · TIH', trend: 'up' },
      { value: 'MFE', label: 'Micro-Frontends', icon: '🧩', delta: 'Module fed', deltaLabel: 'React + Java/Python APIs', trend: 'up' },
      { value: 'GenAI', label: 'LLM Integration', icon: '🤖', delta: 'Production', deltaLabel: 'Backend-connected AI features', trend: 'up' },
      { value: '3', label: 'Years at SAP', icon: '📅', delta: '2021–24', deltaLabel: 'Full-stack delivery lead', trend: 'neutral' }
    ],
    insights: 'Full-stack SAP SuccessFactors — React micro-frontends integrated with Java/Python backends, GenAI workflows, REST APIs, and enterprise-scale deployment.',
    pills: ['React + TypeScript', 'Storybook', 'Java/Python APIs', 'Micro-Frontends', 'GenAI', 'WCAG / PWA'],
    status: [
      { label: 'Enterprise SaaS scale', state: 'active' },
      { label: 'Atomic design system', state: 'active' },
      { label: 'Backend API integration', state: 'active' }
    ],
    activities: sharedActivities.sap,
    activityTitle: 'SAP Product Log',
    skills: sharedSkills.sap,
    extendedSkills: sharedExtendedSkills.sap,
    extendedSkillsTitle: 'Design System & QA',
    skillTags: sharedSkillTags.sap,
    skillsTitle: 'Full-Stack SAP',
    featuredChart: 2,
    charts: [
      {
        title: 'SAP Products',
        value: '3 Platforms',
        trend: { label: 'Enterprise SaaS', direction: 'positive' },
        chart: { type: 'bar', labels: ['CDP', 'Growth', 'TIH'], bars: [90, 88, 92] },
        note: 'Career development, talent intelligence, and learning platforms at scale.'
      },
      {
        title: 'Architecture',
        value: 'Micro-Frontends',
        trend: { label: 'Distributed', direction: 'positive' },
        chart: { type: 'bar', labels: ['React', 'Storybook', 'REST APIs', 'Java/Python', 'PWA/i18n', 'GenAI'], bars: [94, 92, 91, 87, 84, 88] },
        note: 'React micro-frontends and Storybook design system wired to Java/Python backend services and GenAI pipelines.'
      },
      {
        title: 'Team Impact',
        value: '3 Years',
        trend: { label: 'SAP Labs', direction: 'positive' },
        chart: {
          type: 'line',
          labels: ['Y1', 'Y2', 'Y3', '2024'],
          points: [40, 62, 78, 94]
        },
        note: 'Led full-stack delivery across React micro-frontends, Java/Python APIs, accessibility, and GenAI features.'
      }
    ]
  },
  travel: {
    meta: { label: 'TravelTech Domain', company: 'Zaggle · 2024–2025' },
    kpis: [
      { value: '4', label: 'EMS Modules', icon: '📋', delta: 'Full-stack', deltaLabel: 'React + Node.js APIs', trend: 'up' },
      { value: 'SBT', label: 'Booking Platform', icon: '✈', delta: 'Real-time', deltaLabel: 'WebSocket backend sync', trend: 'up' },
      { value: 'Node', label: 'REST Services', icon: '⚙', delta: 'Microservices', deltaLabel: 'GCP · Docker · CI/CD', trend: 'up' },
      { value: '3–5', label: 'Engineers Led', icon: '👥', delta: 'Team lead', deltaLabel: 'End-to-end delivery', trend: 'up' }
    ],
    insights: 'Full-stack TravelTech at Zaggle — SSR React frontends, Node.js REST APIs, WebSockets, microservices on GCP, Form Builder, React Hook Form, Storybook, AEM, ExcelJS and ExcelJS reporting services.',
    pills: ['Node.js APIs', 'React / SSR', 'WebSockets', 'Microservices', 'GCP / Docker',  'Storybook', 'AEM', 'ExcelJS', 'Module Federation'],
    status: [
      { label: 'WebSocket real-time', state: 'active' },
      { label: 'Bundle optimized', state: 'active' },
      { label: 'Microservices on GCP', state: 'active' }
    ],
    activities: sharedActivities.travel,
    activityTitle: 'TravelTech Delivery Log',
    skills: sharedSkills.travel,
    extendedSkills: sharedExtendedSkills.travel,
    extendedSkillsTitle: 'Frontend & CMS',
    skillTags: sharedSkillTags.travel,
    skillsTitle: 'Full-Stack TravelTech',
    featuredChart: 2,
    charts: [
      {
        title: 'EMS Modules',
        value: '4 Revamped',
        trend: { label: 'SSR React', direction: 'positive' },
        chart: { type: 'bar', labels: ['Expense', 'Report', 'Advance', 'Travel'], bars: [90, 88, 85, 87] },
        note: 'Core modules rebuilt for performance, scalability, and UX.'
      },
      {
        title: 'SBT Platform',
        value: 'Unified',
        trend: { label: 'Online + Offline', direction: 'positive' },
        chart: { type: 'bar', labels: ['React', 'Node.js', 'WebSocket', 'Storybook'], bars: [90, 88, 89, 91] },
        note: 'React Hook Form UI with Node.js REST APIs, WebSocket sync, and Storybook design system across EMS and SBT.'
      },
      {
        title: 'Leadership',
        value: '3–5 Engineers',
        trend: { label: 'Mentored', direction: 'positive' },
        chart: {
          type: 'line',
          labels: ['2024', 'Q2', 'Q3', '2025'],
          points: [50, 68, 82, 95]
        },
        note: 'Led full-stack team delivery, API design, and CI/CD improvements at Zaggle.'
      }
    ]
  },
  ai: {
    meta: { label: 'AI / GenAI Domain', company: 'Zenwork + SAP · Production RAG' },
    kpis: [
      { value: 'LLM', label: 'API Integration', icon: '🤖', delta: 'Production', deltaLabel: 'Node.js orchestration', trend: 'up' },
      { value: 'GenAI', label: 'SAP + FinTech', icon: '✨', delta: '3 products', deltaLabel: 'Backend-connected AI', trend: 'up' },
      { value: 'RAG', label: 'Search Pipelines', icon: '🔍', delta: 'Live', deltaLabel: 'PostgreSQL + LLM APIs', trend: 'up' },
      { value: 'Auth', label: 'Secure AI Flows', icon: '🔐', delta: 'OAuth2/JWT', deltaLabel: 'SAML · audit logging', trend: 'up' },
      { value: '3', label: 'AI Dev Tools', icon: '⚡', delta: 'Cursor+GPT', deltaLabel: 'Copilot · Claude · Windsurf', trend: 'up' },
      { value: 'SEO', label: 'SSR / SSG / CWV', icon: '📊', delta: 'Optimized', deltaLabel: 'Metadata & structured data', trend: 'up' }
    ],
    insights: 'Full-stack AI delivery — Node.js AI services, LLM/RAG pipelines, secure API integration, and intelligent UX across FinTech and SAP.',
    pills: ['Node.js AI Services', 'LLM / RAG APIs', 'GenAI UX', 'PostgreSQL', 'SSE Streaming', 'OAuth2 / JWT'],
    status: [
      { label: 'AI services in production', state: 'active' },
      { label: 'Observability dashboards', state: 'active' }
    ],
    activities: sharedActivities.ai,
    activityTitle: 'AI Delivery Log',
    skills: sharedSkills.ai,
    extendedSkills: sharedExtendedSkills.ai,
    extendedSkillsTitle: 'Frontend & Data',
    skillTags: sharedSkillTags.ai,
    skillsTitle: 'Full-Stack AI',
    featuredChart: 2,
    charts: [
      {
        title: 'AI Capabilities',
        value: 'Production',
        trend: { label: 'RAG + GenAI', direction: 'positive' },
        chart: { type: 'bar', labels: ['Node.js', 'LLM API', 'RAG', 'GenAI UX', 'PostgreSQL', 'Telemetry'], bars: [88, 90, 87, 88, 85, 86] },
        note: 'Node.js orchestration and PostgreSQL data layer with LLM/RAG APIs and GenAI-powered frontend experiences.'
      },
      {
        title: 'SAP GenAI',
        value: '3 Products',
        trend: { label: 'Personalized UX', direction: 'positive' },
        chart: { type: 'bar', labels: ['CDP', 'Learning', 'Whole Self'], bars: [88, 85, 90] },
        note: 'Full-stack AI features — backend orchestration and GenAI UX — integrated across SAP and FinTech products.'
      },
      {
        title: 'Dev Productivity',
        value: 'AI-assisted',
        trend: { label: 'Cursor + Copilot', direction: 'positive' },
        chart: {
          type: 'line',
          labels: ['2024', 'Q3', 'Q4', '2025'],
          points: [25, 48, 72, 95]
        },
        note: 'End-to-end AI service delivery from API orchestration to production observability.'
      }
    ]
  }
};

export const spotlightData = {
  eyebrow: 'Current Focus · Zenwork',
  title: 'Enterprise FinTech & AP/AR Payment Platform',
  description:
    'Building scalable fintech platforms with Next.js, Node.js microservices, QuickBooks integrations, and payment workflows powered by Stripe, Plaid, Mercoa, and COLUMN — plus RAG-powered AI applications for intelligent search.',
  primary: { label: 'View Portfolio', link: '#portfolio' },
  secondary: { label: 'Download Resume', link: RESUME_PDF }
};

export const headerData = {
  brand: 'Rakesh Kumar | Senior Full-Stack Engineer',
  links: [
    { label: 'Home', href: '#home' },
    { label: 'Dashboard', href: '#dashboard' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Resume', href: RESUME_PDF, download: true },
    { label: 'Contact', href: '#contact' }
  ]
};

export const workExperience = [
  {
    role: 'Sr. Software Engineer',
    company: 'Zenwork Pvt Ltd',
    location: 'Hyderabad',
    period: 'Dec 2025 – Present',
    highlights: [
      'Led frontend for FinTech modules — React/Next.js component libraries adopted across 4+ products (30% faster delivery).',
      'Built TanStack Query data-fetching, TanStack Table virtualized grids, and Core Web Vitals optimization.',
      'Integrated Tax1099, AP/AR workflows, Stripe, Plaid, Mercoa, COLUMN, QuickBooks, Kafka, SSE, and WebSockets.',
      'Integrated React apps with Salesforce CRM for workflow automation and AI-powered services.',
      'Established Jest, React Testing Library, Cypress, and Playwright testing strategies for release stability.'
    ],
    technologies: ['Next.js', 'TanStack Query', 'TanStack Table', 'TypeScript', 'Kafka', 'Redis', 'Salesforce', 'Playwright']
  },
  {
    role: 'Sr. Software Engineer',
    company: 'Zaggle Prepaid Ocean Services Ltd',
    location: 'Hyderabad',
    period: 'Aug 2024 – Nov 2025',
    highlights: [
      'Led Dynamic Form Builder and EMS module revamp — Expense, Report, Advance, Travel Advance with SSR React.',
      'Architected SBT UI with React Hook Form, Redux, WebSockets, and responsive web/mobile experiences.',
      'Built reusable React NPM component library and Storybook design system with atomic design principles.',
      'Integrated AEM (Adobe Experience Manager) components and ExcelJS Excel/CSV reporting solutions.',
      'Designed micro-frontend architecture with module federation; mentored junior developers on React best practices.'
    ],
    technologies: ['React', 'Redux Saga', 'React Hook Form', 'Storybook', 'AEM', 'WebSockets', 'ExcelJS', 'Webpack']
  },
  {
    role: 'Software Engineer',
    company: 'SAP Labs India Pvt Ltd',
    location: 'Hyderabad',
    period: 'Aug 2021 – Jun 2024',
    highlights: [
      'Led React + TypeScript micro-frontend development for SAP SuccessFactors enterprise SaaS products.',
      'Delivered CDP, Growth Portfolio, and Talent Intelligence Hub with GenAI recommendations.',
      'Implemented PWA with Service Workers, i18n localization, and WCAG-compliant accessible UI components.',
      'Built Storybook design-system components following atomic design and enterprise UI guidelines.',
      'Integrated GenAI-powered recommendation features improving user productivity and reducing manual steps.'
    ],
    technologies: ['React', 'TypeScript', 'Redux Toolkit', 'Storybook', 'PWA', 'i18n', 'Micro-Frontends', 'Cypress']
  },
  {
    role: 'Software Engineer',
    company: 'Swooptalent Pvt Ltd',
    location: 'Hyderabad',
    period: 'Oct 2018 – Aug 2021',
    highlights: [
      'Built talent matching platform integrating Workday, Taleo, Paradox, and ClearCompany ATS systems.',
      'Developed Chrome browser extensions with React, iframe, context, and hooks for candidate data sync.',
      'Created Vue.js + Apollo Client GraphQL modules and canvas-based drag-and-drop workflow UI.',
      'Implemented Kubernetes CI/CD pipelines and conducted UX design reviews for optimal usability.'
    ],
    technologies: ['React', 'Vue.js', 'GraphQL', 'Apollo Client', 'Browser Extensions', 'Kubernetes', 'Canvas UI']
  }
];

export const education = [
  {
    degree: 'B.Tech',
    institution: 'DRIEMS, BPUT, Odisha',
    year: '2013'
  }
];

export const portfolioProjects = [
  {
    title: 'FinTech AP/AR Platform',
    category: 'FinTech · Zenwork',
    description:
      'Scalable fintech platform supporting AP/AR workflows, bills, recurring payments, bulk payments, vendor management, QuickBooks sync, and Stripe/Plaid/Mercoa/COLUMN integrations.',
    link: '#experience',
    label: 'Current Role'
  },
  {
    title: 'Expense Management System',
    category: 'FinTech · Zaggle',
    description:
      'Enterprise expense platform with Expense, Report, Advance, and Travel Advance modules — approvals, reimbursements, policy workflows, and SSR React performance.',
    link: '#experience',
    label: 'Enterprise Product'
  },
  {
    title: 'Dynamic Form Builder',
    category: 'TravelTech · Zaggle',
    description:
      'Enterprise React form builder with dynamic layouts, conditional logic, validations, connected dropdowns, file uploads, and configurable business rules integrated with EMS.',
    link: '#experience',
    label: 'Enterprise Product'
  },
  {
    title: 'Self Booking Tool (SBT)',
    category: 'TravelTech · Zaggle',
    description:
      'Unified ticket booking platform for online and offline workflows with role-based approvals, policy compliance, WebSocket updates, and cancellation management.',
    link: '#experience',
    label: 'Enterprise Product'
  },
  {
    title: 'React Component Library',
    category: 'Design System · Zaggle',
    description:
      'Reusable React NPM package shared across multiple internal projects — consistent UI, faster delivery, and enterprise-grade component architecture with Storybook.',
    link: '#experience',
    label: 'Internal NPM Package'
  },
  {
    title: 'Analytics Dashboards',
    category: 'Data Viz · Zaggle',
    description:
      'Enterprise analytical dashboards with Recharts — line, bar, area, and composed charts with real-time data updates for operational visibility.',
    link: '#experience',
    label: 'Enterprise Product'
  },
  {
    title: 'NextGen CDP',
    category: 'SAP · GenAI',
    description:
      'Career development platform with Opportunity Marketplace, goal setting, Growth Portfolio, and GenAI-powered personalized recommendations.',
    link: 'https://help.sap.com/docs/successfactors-platform/using-talent-intelligence-hub/talent-intelligence-hub',
    label: 'SAP Product'
  },
  {
    title: 'Growth Portfolio',
    category: 'SAP · Talent',
    description:
      'Employee growth platform with attribute ratings, manager evaluations, AI-driven career progression, and organizational goal alignment.',
    link: 'https://community.sap.com/t5/human-capital-management-blog-posts-by-sap/talent-intelligence-hub-sap-successfactors-learning-integration/ba-p/13560184',
    label: 'SAP Product'
  },
  {
    title: 'Talent Intelligence Hub',
    category: 'SAP · HR Tech',
    description:
      'Centralized talent intelligence for skills, competencies, behaviors, proficiency ratings, Whole Self Model, and multilingual content administration.',
    link: 'https://help.sap.com/docs/successfactors-platform/using-talent-intelligence-hub/talent-intelligence-hub',
    label: 'SAP Product'
  },
  {
    title: 'SAP Integrated Learning',
    category: 'SAP · AI/ML',
    description:
      'Integrated learning UI with Whole Self Model — AI/ML-driven personalized experiences, attribute management, and administrator translation workflows.',
    link: 'https://help.sap.com/docs/successfactors-platform/using-talent-intelligence-hub/talent-intelligence-hub',
    label: 'SAP Product'
  },
  {
    title: 'Talent Matching Platform',
    category: 'ATS · Swooptalent',
    description:
      'Automated talent matching and candidate sync integrating Workday, Taleo, Paradox, and ClearCompany with Chrome browser extensions for data crawling.',
    link: '#experience',
    label: 'Enterprise Project'
  },
  {
    title: 'Tax Engine',
    category: 'Payroll · Open Source',
    description:
      'Production-grade payroll tax engine with Next.js, NestJS, JWT auth, multi-state tax calculations, and embeddable pay stub components.',
    link: 'https://github.com/rakesh4ui347/Tax-Engine',
    label: 'View on GitHub'
  },
  {
    title: 'AI Review Response Assistant',
    category: 'AI · Open Source',
    description:
      'AI-powered review responder generating context-aware customer replies with OpenAI APIs, prompt engineering, and workflow automation.',
    link: 'https://github.com/rakesh4ui347/AI-review-Responser',
    label: 'View on GitHub'
  },
  {
    title: 'Location Intelligence Platform',
    category: 'Maps · Open Source',
    description:
      'Google Maps integration with markers, geolocation, custom overlays, location search, and interactive map views.',
    link: 'https://github.com/rakesh4ui347/Google_Map',
    label: 'View on GitHub'
  }
];

export const services = [
  {
    title: 'Enterprise FinTech',
    description:
      'AP/AR automation, billing systems, subscription workflows, QuickBooks (QBO/QBD) integrations, and payment ecosystems with Stripe, Plaid, Mercoa, and COLUMN.'
  },
  {
    title: 'Modern Frontend Engineering',
    description:
      'Scalable React, Next.js, TypeScript, Redux Toolkit, TanStack Query, micro-frontends, Storybook, and WCAG-accessible enterprise UX.'
  },
  {
    title: 'AI & RAG Applications',
    description:
      'LangChain, vector embeddings, semantic retrieval, Gemini/OpenAI integrations, and GenAI-powered intelligent search and workflow automation.'
  },
  {
    title: 'Full-Stack Architecture',
    description:
      'Node.js/NestJS microservices, PostgreSQL, Redis, Kafka, Docker, AWS/GCP, event-driven systems, BFF layers, and CI/CD pipelines.'
  }
];

export const techStack = [
  { title: 'React.js', icon: '⚛️', group: 'Frontend' },
  { title: 'Next.js', icon: '🚀', group: 'Frontend' },
  { title: 'Vue.js', icon: '💚', group: 'Frontend' },
  { title: 'TypeScript', icon: '🧩', group: 'Frontend' },
  { title: 'Redux Toolkit', icon: '🌀', group: 'Frontend' },
  { title: 'TanStack Query', icon: '🔄', group: 'Frontend' },
  { title: 'TanStack Table', icon: '📊', group: 'Frontend' },
  { title: 'React Hook Form', icon: '📝', group: 'Frontend' },
  { title: 'Storybook', icon: '📖', group: 'Frontend' },
  { title: 'Tailwind CSS', icon: '🎨', group: 'Frontend' },
  { title: 'Node.js', icon: '🟩', group: 'Backend' },
  { title: 'NestJS', icon: '🏗️', group: 'Backend' },
  { title: 'Express.js', icon: '⚡', group: 'Backend' },
  { title: 'GraphQL', icon: '◈', group: 'Backend' },
  { title: 'Kafka', icon: '📨', group: 'Backend' },
  { title: 'PostgreSQL', icon: '🐘', group: 'Data' },
  { title: 'Redis', icon: '🔴', group: 'Data' },
  { title: 'MongoDB', icon: '🍃', group: 'Data' },
  { title: 'AWS', icon: '☁️', group: 'Cloud & DevOps' },
  { title: 'GCP', icon: '🌐', group: 'Cloud & DevOps' },
  { title: 'Docker', icon: '🐳', group: 'Cloud & DevOps' },
  { title: 'GitHub Actions', icon: '🔁', group: 'Cloud & DevOps' },
  { title: 'Salesforce', icon: '☁', group: 'AI & Integrations' },
  { title: 'Stripe / Plaid', icon: '💳', group: 'AI & Integrations' },
  { title: 'QuickBooks', icon: '📒', group: 'AI & Integrations' },
  { title: 'LLM / GenAI', icon: '✨', group: 'AI & Integrations' },
  { title: 'Jest / RTL', icon: '🧪', group: 'Testing' },
  { title: 'Cypress', icon: '🎯', group: 'Testing' },
  { title: 'Playwright', icon: '🎭', group: 'Testing' }
];

export const features = [
  {
    title: 'Modern Frontend Architecture',
    description:
      'Micro-frontends, Server Components, SSR/SSG, Redux Toolkit, TanStack Table with virtualization, and WCAG-compliant component systems at enterprise scale.'
  },
  {
    title: 'Full-Stack Product Development',
    description:
      'End-to-end delivery with Node.js BFF layers, NestJS APIs, Prisma ORM, PostgreSQL, Redis caching, Kafka event pipelines, and AWS/GCP deployment.'
  },
  {
    title: 'Payments & FinTech Systems',
    description:
      'AP/AR workflows, subscription billing, reconciliation, vendor portals, and integrations with Stripe, Plaid, Mercoa, COLUMN, and QuickBooks.'
  },
  {
    title: 'AI & Enterprise Platforms',
    description:
      'RAG pipelines, vector embeddings, LangChain orchestration, GenAI UX in SAP products, and AI-assisted development with Cursor and GitHub Copilot.'
  }
];

export const projectHighlights = [
  {
    title: 'FinTech AP/AR Platform',
    category: 'FinTech · Full-Stack',
    description:
      'Enterprise fintech platform with AP/AR payment workflows, QuickBooks integrations, Stripe/Plaid/Mercoa APIs, Node.js microservices, and Next.js frontend.',
    features: ['Bulk & recurring payments', 'RBAC with audit trails', 'Event-driven Kafka architecture'],
    link: '#experience',
    cta: 'View Experience'
  },
  {
    title: 'RAG Knowledge Platform',
    category: 'AI · RAG · LLM',
    description:
      'Production RAG applications with LangChain, vector embeddings, semantic retrieval, and Gemini/OpenAI integrations for contextual Q&A and intelligent search.',
    features: ['Vector embedding pipelines', 'Semantic search & retrieval', 'SSE streaming responses'],
    link: '#experience',
    cta: 'View Experience'
  },
  {
    title: 'Tax Engine',
    category: 'Payroll · Open Source',
    description:
      'Full-stack payroll tax platform with Next.js, NestJS, JWT/API key auth, multi-state calculations, and embeddable React pay stub widgets.',
    features: ['50 US states tax support', 'Multi-tenant payroll workflow', 'Embeddable React components'],
    link: 'https://github.com/rakesh4ui347/Tax-Engine',
    cta: 'View Source'
  },
  {
    title: 'React Component Library',
    category: 'Design System · NPM',
    description:
      'Shared React component library published as an NPM package — reusable UI primitives, Storybook documentation, and consistent enterprise patterns.',
    features: ['Cross-project reuse', 'Storybook integration', 'Accessible components'],
    link: '#experience',
    cta: 'View Experience'
  },
  {
    title: 'Talent Intelligence Hub',
    category: 'SAP · Enterprise',
    description:
      'SAP SuccessFactors talent platform connecting skills, competencies, behaviors, and proficiency ratings with GenAI-powered Whole Self Model.',
    features: ['Skills & competencies', 'Proficiency ratings', 'Multilingual admin'],
    link: 'https://help.sap.com/docs/successfactors-platform/using-talent-intelligence-hub/talent-intelligence-hub',
    cta: 'SAP Docs'
  },
  {
    title: 'AI Review Response Assistant',
    category: 'AI · Open Source',
    description:
      'AI-powered review generation with OpenAI APIs, prompt engineering, tone control, and automated customer engagement workflows.',
    features: ['Context-aware replies', 'Sentiment support', 'Custom templates'],
    link: 'https://github.com/rakesh4ui347/AI-review-Responser',
    cta: 'View Source'
  }
];

// Legacy exports kept for compatibility
export const dashboardKpis = dashboardDataByDomain.all.kpis;
export const dashboardCharts = dashboardDataByDomain.all.charts;

export const testimonials = [
  {
    name: 'Cross-functional Team Lead',
    role: 'Product Engineering',
    quote:
      'Rakesh consistently delivers scalable React architectures with strong attention to performance, accessibility, and enterprise integration patterns.',
    company: 'Enterprise SaaS'
  },
  {
    name: 'Engineering Manager',
    role: 'FinTech Platform',
    quote:
      'Deep full-stack expertise across payment workflows, API design, and cloud-native microservices — a reliable technical leader on complex initiatives.',
    company: 'FinTech'
  }
];

export const team = [{ name: 'Rakesh Kumar', role: 'Senior Full-Stack Engineer' }];
