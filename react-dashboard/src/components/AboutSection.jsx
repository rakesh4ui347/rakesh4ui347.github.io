export default function AboutSection() {
  return (
    <section className="section section-alt about-section" id="about">
      <div className="section-title">
        <h2>About Rakesh Kumar</h2>
        <p>Senior software engineer with over 8 years designing and delivering scalable web applications across frontend, backend, and fintech ecosystems.</p>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p>
            My core expertise is frontend development with React.js, Next.js, TypeScript, Redux, and modern JavaScript frameworks, backed by a strong backend foundation in Node.js, REST APIs, PostgreSQL, Redis, and Kafka.
          </p>
          <p>
            Currently at Zenwork, I develop fintech and payment solutions for AP/AR workflows, QuickBooks integrations, subscription billing systems, and third-party platforms like Stripe, Plaid, and Mercato.
          </p>
          <div className="about-features">
            <div>
              <h4>Frontend Excellence</h4>
              <p>Building intuitive dashboards, reusable component libraries, and polished UI experiences that scale across devices.</p>
            </div>
            <div>
              <h4>Backend & APIs</h4>
              <p>Designing APIs, services, and data systems with Node.js, PostgreSQL, Redis, Kafka, and modern cloud-native practices.</p>
            </div>
            <div>
              <h4>Fintech Delivery</h4>
              <p>Delivering payments, billing, and integration solutions with enterprise-grade reliability and user-centered workflows.</p>
            </div>
          </div>
        </div>
        <div className="about-card">
          <div className="highlight-box">
            <h3>Career Highlights</h3>
            <p>Experience at Zenwork, Zaggle, and SAP Labs building enterprise React products, micro-frontend systems, AI-powered UI experiences, and high-performance distributed applications.</p>
            <p>Regularly using AI-assisted development tools like GitHub Copilot, Cursor, Claude, and Windsurf to accelerate delivery.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
