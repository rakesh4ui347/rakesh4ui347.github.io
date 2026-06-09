export default function AboutSection() {
  return (
    <section className="section section-alt about-section" id="about">
      <div className="section-title">
        <h2>About Rakesh Kumar</h2>
        <p>My name is Rakesh Kumar, and I am a Senior Full-Stack Engineer with over 8 years of experience designing and developing scalable web applications.</p>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p>
            My core expertise is in frontend development using React.js, Next.js, TypeScript, Redux, and modern JavaScript frameworks, while also having a strong backend foundation with Node.js, REST APIs, PostgreSQL, Redis, and Kafka.
          </p>
          <p>
            Currently at Zenwork, I develop fintech and payment solutions, including AP/AR workflows, QuickBooks integrations, subscription billing systems, and third-party integrations with platforms such as Stripe, Plaid, and Mercato.
          </p>
          <p>
            I work across the application stack, building scalable frontend applications as well as backend services and APIs for enterprise-grade financial products.
          </p>
          <div className="about-features">
            <div>
              <h4>Enterprise Fintech</h4>
              <p>AP/AR workflows, subscription billing, payments, and accounting integrations built for high-reliability systems.</p>
            </div>
            <div>
              <h4>Full-Stack Delivery</h4>
              <p>Cross-stack engineering with React, modern JS, API design, PostgreSQL, Redis, and Kafka-based services.</p>
            </div>
            <div>
              <h4>Product & Leadership</h4>
              <p>Solving complex technical problems, creating intuitive UX, and collaborating strategically across teams.</p>
            </div>
          </div>
        </div>
        <div className="about-card">
          <div className="highlight-box">
            <h3>Career Highlights</h3>
            <p>Currently at Zenwork building fintech and payment solutions. Previously at Zaggle and SAP Labs delivering enterprise-scale applications, micro-frontend systems, and AI-powered user experiences.</p>
            <p>I enjoy solving complex technical problems, building intuitive user experiences, and working in collaborative environments where I can contribute both technically and strategically.</p>
            <p>I actively use AI-assisted development tools such as GitHub Copilot, Cursor, Claude, and Windsurf to improve productivity and accelerate development.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
