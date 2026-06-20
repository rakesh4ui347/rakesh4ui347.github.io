export const heroData = {
  eyebrow: 'Rakesh Kumar · Senior Full-Stack Engineer',

  title:
    '8+ years building enterprise FinTech, SAP, and AI-powered products at scale.',

  description:
    'Senior Full-Stack Engineer specializing in React, TypeScript, Node.js, PostgreSQL, Redis, Kafka, and cloud-native architectures. Experienced in delivering enterprise platforms across FinTech, SAP HR Tech, TravelTech, and AI-powered products.',

  primary: {
    label: 'Explore Projects',
    link: '#portfolio'
  },

  secondary: {
    label: 'Download Resume',
    link: '/resume.pdf'
  },

  stats: [
    {
      value: '8+',
      label: 'Years'
    },
    {
      value: '10+',
      label: 'Products'
    },
    {
      value: '30+',
      label: 'Components'
    }
  ]
};

export const dashboardKpis = [
  { value: '$4.2M', label: 'Monthly processed volume' },
  { value: '98.7%', label: 'On-time settlement' },
  { value: '4.8 / 5', label: 'Client satisfaction' }
];

export const dashboardFilters = [
  { label: '7 days', value: '7d' },
  { label: '30 days', value: '30d' },
  { label: '90 days', value: '90d' }
];

export const dashboardCharts = [
  {
    title: 'Revenue Trend',
    value: '$4.2M',
    trend: { label: '+12.5%', direction: 'positive' },
    chart: { type: 'line', points: [18, 22, 28, 34, 40, 46, 52] },
    note: 'Revenue growth for the selected period.'
  },
  {
    title: 'Transactions',
    value: '21.4K',
    trend: { label: '+8.4%', direction: 'positive' },
    chart: { type: 'bar', labels: ['Mon', 'Wed', 'Fri', 'Sun'], bars: [42, 62, 54, 72] },
    note: 'Daily successful transaction volume across the platform.'
  },
  {
    title: 'Payment Success',
    value: '97.2%',
    trend: { label: 'Stable', direction: 'neutral' },
    chart: { type: 'bar', labels: ['Auth', 'Clearing', 'Settlement'], bars: [82, 88, 97] },
    note: 'Success rates across payment workflow stages.'
  }
];

export const spotlightData = {
  eyebrow: 'Featured Project',
  title: 'Tax Engine: Enterprise Payroll & Tax API',
  description: 'Launch your payroll tax platform with a full-stack React experience, state-level tax calculations, and embeddable pay stub widgets built for modern web products.',
  primary: { label: 'Explore Tax Engine', link: '#taxengine' },
  secondary: { label: 'View GitHub', link: 'https://github.com/rakesh4ui347/Tax-Engine' }
};

export const headerData = {
  brand: 'Rakesh Kumar | Senior Full-Stack Engineer',
  links: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Technical Expertise', href: '#features' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Technology Stack', href: '#tech-stack' },
    { label: 'Contact', href: '#contact' }
  ]
};

export const portfolioProjects = [
  {
    title: 'Fintech Payments Platform',
    category: 'FinTech',
    description:
      'Built AP/AR payment workflows, accounting integrations, and payment automation using Stripe, Plaid, and QuickBooks.',
    link: '#',
    label: 'Enterprise Product'
  },
  {
    title: 'Expense Management System (EMS)',
    category: 'FinTech',
    description:
      'Enterprise expense platform with approvals, reimbursements, dynamic forms, and policy workflows.',
    link: '#',
    label: 'Enterprise Product'
  },
  {
    title: 'Self Booking Tool (SBT)',
    category: 'TravelTech',
    description:
      'Travel booking platform with approvals, policy compliance, and cancellation management.',
    link: '#',
    label: 'Enterprise Product'
  },
  {
    title: 'Dynamic Form Builder',
    category: 'TravelTech',
    description:
      'Enterprise-grade React form builder supporting dynamic layouts, conditional logic, validations, connected dropdowns, file uploads, workflow automation, and configurable business rules.',
    link: '#',
    label: 'Enterprise Product'
  },
  {
    title: 'NextGen CDP',
    category: 'SAP GenAI',
    description:
      'CCareer development platform with goals, Opportunity Marketplace, and AI-powered recommendations.',
    link: 'https://help.sap.com/docs/successfactors-platform/using-talent-intelligence-hub/talent-intelligence-hub',
    label: 'SAP Product'
  },
  {
    title: 'Growth Portfolio',
    category: 'SAP Talent',
    description:
      'Employee growth platform providing attribute ratings, recommendations, manager evaluations, and AI-driven career development experiences.',
    link: 'https://community.sap.com/t5/human-capital-management-blog-posts-by-sap/talent-intelligence-hub-sap-successfactors-learning-integration/ba-p/13560184',
    label: 'SAP Product'
  },
  {
    title: 'Talent Intelligence Hub',
    category: 'SAP HR . HR Tech',
    description:
      'Centralized talent intelligence solution for managing skills, competencies, behaviors, proficiency ratings, multilingual content, and organizational talent data.',
    link: 'https://help.sap.com/docs/successfactors-platform/using-talent-intelligence-hub/talent-intelligence-hub',
    label: 'SAP Product'
  },
  {
    title: 'Talent Matching Platform',
    category: 'ATS Platform',
    description:
      'Automated talent matching and candidate synchronization platform integrating Workday, Taleo, Paradox, and ClearCompany with browser extensions and intelligent candidate data processing.',
    link: '#',
    label: 'Enterprise Project'
  },
  {
    title: 'Tax Engine',
    category: 'Payroll',
    description:
      'Production-grade payroll tax engine built with Next.js, NestJS, authentication, payroll processing workflows, and embeddable payroll components.',
    link: 'https://github.com/rakesh4ui347/Tax-Engine',
    label: 'View on GitHub'
  },
  {
    title: 'AI Review Response Assistant',
    category: 'AI · Automation',
    description:
      'AI-powered review responder that generates context-aware customer replies and improves customer engagement through intelligent response suggestions.',
    link: 'https://github.com/rakesh4ui347/AI-review-Responser',
    label: 'View on GitHub ->'
  },
  {
    title: 'Location Intelligence Platform',
    category: 'React · Maps',
    description:
      'Interactive Google Maps integration with markers, geolocation, custom map layers, and advanced location search capabilities.',
    link: 'https://github.com/rakesh4ui347/Google_Map',
    label: 'View on GitHub'
  }
];

export const services = [
  { title: '💳 Enterprise FinTech', description: 'Built AP/AR automation, billing systems, payment workflows,QuickBooks integrations, and enterprise financial products using Stripe, Plaid, Mercoa, and Node.js.' },
  { title: '⚛️ Modern Frontend Engineering', description: 'Developing scalable React, Next.js, TypeScript, Redux, and micro-frontend applications focused on performance, accessibility, and enterprise UX.' },
  { title: '🔗 API & System Integrations', description: 'Integrating third-party platforms including QuickBooks, Stripe, Plaid, SAP, ATS systems, and enterprise APIs with secure authentication and data synchronization.' },
  { title: '☁️ Full-Stack Architecture', description: 'Designing cloud-native solutions using Node.js, PostgreSQL, Redis, Kafka, Docker, AWS, and event-driven architectures.' }
];

export const techStack = [
  { title: 'React.js', icon: '⚛️' },
  { title: 'Next.js', icon: '🚀' },
  { title: 'TypeScript', icon: '🧩' },
  { title: 'Redux Toolkit', icon: '🌀' },
  { title: 'Node.js', icon: '🟩' },
  { title: 'PostgreSQL', icon: '🐘' },
  { title: 'Redis', icon: '⚡' },
  { title: 'Kafka', icon: '📨' },
  { title: 'AWS', icon: '☁️' },
  { title: 'Docker', icon: '🐳' },
  { title: 'Stripe', icon: '💳' },
  { title: 'AI / GenAI', icon: '🤖' }
];

export const features = [
  { title: '⚛️ Modern Frontend Architecture', description: 'Built scalable React, Next.js, TypeScript, Redux, and micro-frontend applications used by enterprise teams.' },
  {
    title: '🚀 Full-Stack Product Development', description: `Designed and delivered end-to-end solutions using
Node.js, PostgreSQL, Redis, Kafka, Docker, and AWS.` },
  {
    title: '💳 Payments & FinTech Systems', description: `Developed AP/AR workflows, billing platforms,
QuickBooks integrations, and payment solutions using
Stripe, Plaid, Mercoa, and financial APIs.` },
  {
    title: '🤖 AI & Enterprise Platforms', description: `Built AI-powered experiences, talent management systems,
and enterprise applications across SAP, HR Tech,
TravelTech, and FinTech domains.` }
];

export const projectHighlights = [
  {
    title: 'Tax Engine',
    category: 'React · Payroll',
    description: 'A production-grade payroll tax engine with a Next.js React frontend, NestJS backend, API authentication, and embedded pay stub UI components.',
    features: ['Multi-tenant payroll workflow', 'Tax calculations for all 50 states', 'Embeddable React components'],
    link: 'https://github.com/rakesh4ui347/Tax-Engine',
    cta: 'View Source'
  },
  {
    title: 'Location Intelligence Platform',
    category: 'React · Maps',
    description: 'Interactive map integration using Google Maps API with custom markers, location search, and styled map layers.',
    features: ['Marker clusters and custom icons', 'Location search and directions', 'Responsive map layout'],
    link: 'https://github.com/rakesh4ui347/Google_Map',
    cta: 'View Source'
  },
  {
    title: 'AI Review Response Assistant',
    category: 'AI · OpenAI',
    description: 'AI-powered review generation system using OpenAI APIs, prompt engineering, and workflow automation.',
    features: ['Automated response generation', 'Tone and sentiment support', 'Custom templates for reviews'],
    link: 'https://github.com/rakesh4ui347/AI-review-Responser',
    cta: 'View Source'
  },
  {
    title: 'RAG Chatbot',
    category: 'AI • RAG • LLM',
    description: 'Coming soon: AI-powered RAG chatbot with document retrieval, vector search, contextual responses, and enterprise knowledge management capabilities.',
    features: [
      'Document ingestion & indexing',
      'Vector search & semantic retrieval',
      'Context-aware AI responses'
    ],
    link: 'https://github.com/rakesh4ui347/AI-review-Responser',
    cta: 'In Development'
  },
  {
    title: 'Talent Intelligence Hub',
    category: 'Talent · Intelligence Hub',
    description: 'Talent Intelligence Hub is a centralized framework that helps connect different attributes such as skills and competencies defined by the organizations with the employees of that organization.',
    features: ['View skills', 'View competencies', 'Add or reject skills'],
    link: 'https://help.sap.com/docs/successfactors-platform/using-talent-intelligence-hub/talent-intelligence-hub',
    cta: 'View Source'
  },
  {
    title: 'Growth Portfolio ',
    category: 'Talent · Growth Portfolio ',
    description: 'SAP SuccessFactors Learning plays a vital role in our comprehensive product strategy for a Future Ready Workforce and Learning is getting a lot of love from our Product team in the upcoming releases!.',
    features: ['Employees Growth Portfolio', 'Proficiency Rating ', 'Skills'],
    link: 'https://community.sap.com/t5/human-capital-management-blog-posts-by-sap/talent-intelligence-hub-sap-successfactors-learning-integration/ba-p/13560184',
    cta: 'View Source'
  }
];

export const testimonials = [
  { name: 'Nisha Rao', role: 'Product Lead', quote: 'The updated dashboard is clean, fast, and easy to extend. The React structure makes future updates simple.', company: 'FinTech Inc' },
  { name: 'Daniel Fernandes', role: 'CTO', quote: 'Tax Engine and dashboard features are presented clearly, with strong attention to both UI and integration readiness.', company: 'PayrollCloud' }
];

export const team = [
  { name: 'Rakesh Kumar', role: 'Full Stack Developer' },
  { name: 'Sonal Gupta', role: 'Frontend Engineer' },
  { name: 'Priya Singh', role: 'Product Designer' },
  { name: 'Amit Patel', role: 'Project Manager' }
];
