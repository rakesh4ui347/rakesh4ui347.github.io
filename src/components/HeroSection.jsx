import CountUp from './CountUp.jsx';

export default function HeroSection({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  stats
}) {
  const techStack = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'Kafka',
    'LangChain',
    'AWS'
  ];

  return (
    <header className="hero" id="home">
      <div className="hero-bg-glow hero-bg-glow-a" />
      <div className="hero-bg-glow hero-bg-glow-b" />

      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow hero-fade-in">{eyebrow}</span>

          <h1 className="hero-fade-in hero-fade-in-delay-1">{title}</h1>

          <p className="hero-fade-in hero-fade-in-delay-2">{description}</p>

          <div className="hero-actions hero-fade-in hero-fade-in-delay-3">
            <a className="button" href={primary.link}>
              {primary.label}
            </a>

            <a
              className="button button-secondary hero-resume-btn"
              href={secondary.link}
              target="_blank"
              rel="noreferrer"
              download
              onClick={() => {
                window.clarity?.('event', 'resume_download');
              }}
            >
              {secondary.label}
            </a>
          </div>

          <div className="hero-tech hero-fade-in hero-fade-in-delay-4">
            {techStack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        <div className="hero-stats-wrapper hero-fade-in hero-fade-in-delay-5">
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="stat-card hero-stat-card"
                style={{ animationDelay: `${0.5 + index * 0.15}s` }}
              >
                <CountUp value={stat.value} className="stat-card-value" as="h3" />
                <p>{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="hero-domains">
            <span>FinTech</span>
            <span>SAP HR Tech</span>
            <span>TravelTech</span>
            <span>AI / RAG</span>
            <span>ATS Platforms</span>
          </div>
        </div>
      </div>

      <a className="hero-scroll-indicator" href="#dashboard" aria-label="Scroll to dashboard">
        <span>Explore</span>
        <span className="hero-scroll-arrow">↓</span>
      </a>
    </header>
  );
}
