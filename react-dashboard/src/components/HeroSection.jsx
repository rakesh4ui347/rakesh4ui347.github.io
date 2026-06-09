import StatCard from './StatCard.jsx';

export default function HeroSection({ eyebrow, title, description, primary, secondary, stats }) {
  return (
    <header className="hero" id="home">
      <div className="hero-copy">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="hero-actions">
          <a className="button" href={primary.link}>{primary.label}</a>
          <a className="button button-secondary" href={secondary.link}>{secondary.label}</a>
        </div>
      </div>
      <div className="hero-stats">
        {stats.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </header>
  );
}
