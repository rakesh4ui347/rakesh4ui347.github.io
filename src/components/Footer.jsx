const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Experience', href: '#experience' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Contact', href: '#contact' }
];

const connectLinks = [
  { label: 'GitHub', href: 'https://github.com/rakesh4ui347' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rakeshkumar-dev' },
  { label: 'Resume PDF', href: '/Resume.pdf' }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Rakesh Kumar</h3>
            <p className="footer-role">Senior Full-Stack Engineer</p>
            <p>
              8+ years building enterprise FinTech, SAP HR Tech, TravelTech,
              and AI-powered platforms with React, Next.js, Node.js, and cloud-native architectures.
            </p>
            <div className="footer-tech-tags">
              <span>React</span>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>LangChain</span>
              <span>AWS</span>
            </div>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:rakesh4ui347@gmail.com">rakesh4ui347@gmail.com</a>
              </li>
              <li>
                <a href="tel:+917008329759">+91 7008329759</a>
              </li>
              <li>
                <span>Hyderabad, India</span>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Connect</h4>
            <div className="footer-connect-buttons">
              {connectLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  download={link.label === 'Resume PDF' ? true : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-note">
            © {year} Rakesh Kumar. Built with Love.
          </p>
          <a className="footer-back-top" href="#home">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
