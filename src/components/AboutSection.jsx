const companies = ['Zenwork', 'Zaggle', 'SAP Labs', 'Swooptalent'];

const features = [
  {
    title: 'Enterprise FinTech',
    description:
      'AP/AR workflows, subscription billing, QuickBooks integrations, and payment ecosystems with Stripe, Plaid, Mercoa, and COLUMN.'
  },
  {
    title: 'Full-Stack Engineering',
    description:
      'React, Next.js, TypeScript, Node.js, NestJS, PostgreSQL, Redis, Kafka, AWS/GCP, and scalable microservices architecture.'
  },
  {
    title: 'AI & Product Leadership',
    description:
      'RAG pipelines, LangChain, GenAI UX, micro-frontends, mentoring 3–5 engineers, and cross-functional delivery at scale.'
  }
];

const highlights = [
  '8+ Years of Software Engineering Experience',
  'Built 11+ Enterprise Products Across 4 Companies',
  'Expert in React, Next.js, TypeScript & Node.js',
  'Integrated Stripe, Plaid, Mercoa, QuickBooks & COLUMN',
  'RAG & LangChain AI Applications in Production',
  'Micro-Frontends, Kafka, Redis & Cloud-Native Systems',
  'Mentored Engineers & Led Technical Initiatives',
  'AI-Assisted Development with Cursor & GitHub Copilot'
];

export default function AboutSection() {
  return (
    <section className="section section-alt about-section" id="about">
      <div className="section-title">
        <h2>About Me</h2>

        <p>
          Senior Full-Stack Engineer specializing in enterprise FinTech,
          SAP HR Tech, TravelTech, ATS integrations, and AI-powered applications.
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
            I am a Senior Full-Stack Engineer with 8+ years of experience designing
            and building scalable, high-performance web applications. I specialize in
            React, Next.js, TypeScript, Node.js, PostgreSQL, Redis, Kafka, and
            cloud-native architectures across distributed systems.
          </p>

          <p>
            Currently at Zenwork, I build enterprise FinTech platforms focused on
            AP/AR automation, QuickBooks integrations, subscription billing, and
            payment ecosystems powered by Stripe, Plaid, and Mercoa — alongside
            RAG-powered AI applications using LangChain and vector search.
          </p>

          <p>
            Previously at Zaggle, SAP Labs, and Swooptalent, I delivered
            expense management systems, travel booking tools, SAP SuccessFactors
            products with GenAI, talent matching platforms, and micro-frontend
            architectures used by thousands of enterprise users.
          </p>

          <div className="about-features">
            {features.map((feature) => (
              <div key={feature.title} className="about-feature-card">
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
