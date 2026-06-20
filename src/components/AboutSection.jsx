const companies = ['SAP', 'Zaggle', 'Zenwork'];

const features = [
  {
    title: '💳 Enterprise FinTech',
    description:
      'AP/AR workflows, billing systems, payments, accounting integrations, and financial automation.'
  },
  {
    title: '⚙️ Full-Stack Engineering',
    description:
      'React, TypeScript, Node.js, PostgreSQL, Redis, Kafka, AWS, and scalable API design.'
  },
  {
    title: '🚀 Product & Leadership',
    description:
      'Architecture decisions, performance optimization, UX improvements, mentoring, and cross-functional delivery.'
  }
];

const highlights = [
  '8+ Years of Software Engineering Experience',
  'Built Enterprise FinTech, SAP HR Tech & AI Platforms',
  'Expert in React, TypeScript & Node.js',
  'Integrated Stripe, Plaid, Mercoa & QuickBooks APIs',
  'Experience with Micro Frontends & Cloud Architectures',
  'Strong focus on Performance, Scalability & UX',
  'Hands-on with AI-assisted development workflows'
];

export default function AboutSection() {
  return (
    <section className="section section-alt about-section" id="about">
      <div className="section-title">
        <h2>About Me</h2>

        <p>
          Senior Full-Stack Engineer specializing in enterprise FinTech,
          SAP HR Tech, TravelTech, and AI-powered applications.
        </p>

        <div className="company-badges">
          {companies.map((company) => (
            <span key={company}>{company}</span>
          ))}
        </div>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p>
            I am a Full-Stack Engineer with 8+ years of experience building
            scalable enterprise applications using React, TypeScript,
            Node.js, PostgreSQL, Redis, Kafka, and cloud-native
            architectures.
          </p>

          <p>
            Currently at Zenwork, building enterprise FinTech platforms
            focused on AP/AR automation, QuickBooks integrations,
            subscription billing, and payment ecosystems powered by
            Stripe, Plaid, and Mercoa.
          </p>

          <p>
            Previously at SAP and Zaggle, I delivered enterprise-scale
            applications, micro-frontend architectures, and AI-powered
            experiences used by thousands of users.
          </p>

          <div className="about-features">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="about-feature-card"
              >
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="about-card">
          <div className="highlight-box">
            <h3>Career Highlights</h3>

            <ul className="about-highlights">
              {highlights.map((item) => (
                <li key={item}>
                  <span className="highlight-icon">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}