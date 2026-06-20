import StatCard from './StatCard.jsx';

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
    'TypeScript',
    'Node JS',
    'PostgreSQL',
    'Redis',
    'Kafka',
    'AWS'
  ];

  return (
    <header className="hero" id="home">
      <div className="hero-copy">
        <span className="eyebrow">{eyebrow}</span>

        <h1>{title}</h1>

        <p>{description}</p>

        <div className="hero-tech">
          {techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="hero-actions">
          <a className="button" href={primary.link}>
            {primary.label}
          </a>

          <a
            className="button button-secondary"
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
      </div>

      <div className="hero-stats-wrapper">
        <div className="hero-stats">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stat-card"
              style={{
                animationDelay: `${index * 0.15}s`
              }}
            >
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="hero-domains">
          <span>FinTech</span>
          <span>SAP HR Tech</span>
          <span>TravelTech</span>
          <span>AI Platforms</span>
        </div>
      </div>
    </header>
  );
}
