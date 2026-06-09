export const heroData = {
  eyebrow: 'Senior Full-Stack Engineer',
  title: '8+ years building professional full-stack fintech dashboards and enterprise applications.',
  description: 'Senior software engineer with 8+ years building scalable React.js, Next.js, TypeScript, Redux, Node.js, PostgreSQL, Redis, and Kafka applications for payments and billing workflows.',
  primary: { label: 'Learn More', link: '#about' },
  secondary: { label: 'Explore Tax Engine', link: '#taxengine' },
  stats: [
    { value: '30+', label: 'Reusable UI modules' },
    { value: '12', label: 'Dashboard sections' },
    { value: '1', label: 'Production-ready Vite app' }
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
  brand: 'Rakesh Kumar',
  links: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Features', href: '#features' },
    { label: 'Projects', href: '#projects' },
    { label: 'AI Chat', href: '#ai-chat' },
    { label: 'Tax Engine', href: '#taxengine' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ]
};

export const portfolioProjects = [
  {
    title: 'Tax Engine',
    category: 'React · Payroll',
    description: 'A production-grade payroll tax engine with a Next.js React frontend, NestJS backend, API auth, and embeddable payroll components.',
    link: 'https://github.com/rakesh4ui347/Tax-Engine',
    label: 'View on GitHub'
  },
  {
    title: 'Google Map',
    category: 'React · Maps',
    description: 'Interactive Google Maps integration with markers, location search, and custom map layers.',
    link: 'https://github.com/rakesh4ui347/Google_Map',
    label: 'View on GitHub'
  },
  {
    title: 'AI Review Responser',
    category: 'AI · Automation',
    description: 'An AI-powered review responder that creates context-aware replies and improves customer engagement.',
    link: 'https://github.com/rakesh4ui347/AI-review-Responser',
    label: 'View on GitHub'
  },
  {
    title: 'React Dashboard',
    category: 'React · Dashboard',
    description: 'A modern Vite-built React dashboard structure with reusable cards, navigation, and responsive layout.',
    link: '#portfolio',
    label: 'Explore'
  },
  {
    title: 'UI System Refresh',
    category: 'Design · Rebrand',
    description: 'A polished UI design update that improves visual hierarchy, accessibility, and brand consistency.',
    link: '#services',
    label: 'Learn More'
  }
];

export const services = [
  { title: 'Frontend Engineering', description: 'React, Next.js, TypeScript and design systems for modern UI experiences.' },
  { title: 'Backend APIs', description: 'Node.js services, REST APIs, PostgreSQL, Redis, and Kafka-based integrations.' },
  { title: 'Fintech Integrations', description: 'AP/AR workflows, billing platforms, Stripe, Plaid and payment gateway solutions.' },
  { title: 'Scalable Architecture', description: 'Distributed systems, micro-frontends, reusable components and performance tuning.' }
];

export const techStack = [
  { title: 'React.js', icon: '⚛️' },
  { title: 'Next.js', icon: '🚀' },
  { title: 'TypeScript', icon: '🧩' },
  { title: 'Redux', icon: '🌀' },
  { title: 'Node.js', icon: '🟩' },
  { title: 'PostgreSQL', icon: '🐘' }
];

export const features = [
  { title: 'Enterprise-grade design', description: 'Modern dashboard layouts optimized for scalability and user performance.' },
  { title: 'React + Vite workflow', description: 'Fast development, instant feedback, and production-ready builds.' },
  { title: 'API & embed support', description: 'Integrate your backend APIs, GitHub projects, and embedded React widgets.' },
  { title: 'Responsive UI', description: 'Layouts and components that resize gracefully across desktop and mobile.' }
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
    title: 'Google Map',
    category: 'React · Maps',
    description: 'Interactive map integration using Google Maps API with custom markers, location search, and styled map layers.',
    features: ['Marker clusters and custom icons', 'Location search and directions', 'Responsive map layout'],
    link: 'https://github.com/rakesh4ui347/Google_Map',
    cta: 'View Source'
  },
  {
    title: 'AI Review Responser',
    category: 'AI · Automation',
    description: 'AI-assisted review response tool designed to generate context-aware reply drafts and improve customer engagement.',
    features: ['Automated response generation', 'Tone and sentiment support', 'Custom templates for reviews'],
    link: 'https://github.com/rakesh4ui347/AI-review-Responser',
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
