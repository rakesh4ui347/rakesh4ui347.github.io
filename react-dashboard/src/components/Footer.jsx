export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>Rakesh Kumar</h3>
          <p>
            Senior Frontend Engineer with 8+ years of experience building
            scalable enterprise applications.
          </p>
          <p>
            React • TypeScript • Redux • Node.js • PostgreSQL • Redis
          </p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>
            <a href="mailto:rakesh4ui347@gmail.com">
              rakesh4ui347@gmail.com
            </a>
          </p>
          <p>
            <a href="tel:+917008329759">
              +91 7008329759
            </a>
          </p>
        </div>

        <div>
          <h4>Connect</h4>
          <p>
            <a
              href="https://github.com/rakesh4ui347"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            ·{" "}
            <a
              href="https://www.linkedin.com/in/rakeshkumar-dev"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}

          </p>
        </div>
      </div>

      <p className="footer-note">
        © {new Date().getFullYear()} Rakesh Kumar. Built with React, TypeScript, Vite, Node.js, PostgreSQL, and enterprise-grade architecture.
      </p>
    </footer>
  );
}
