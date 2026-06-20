export default function SpotlightSection({ eyebrow, title, description, primary, secondary }) {
  return (
    <section className="section spotlight-banner">
      <div className="spotlight-card">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <div className="spotlight-top">
          <div className="spotlight-copy">
            <p>{description}</p>
          </div>
          <div className="spotlight-preview">
            <div className="preview-header">
              <span className="preview-badge">Dashboard</span>
              <span className="preview-status">Live preview</span>
            </div>
            <div className="preview-graphic">
              <div className="preview-chart-row">
                <div className="preview-bar large" />
                <div className="preview-bar medium" />
                <div className="preview-bar small" />
              </div>
              <div className="preview-chart-row">
                <div className="preview-bar small" />
                <div className="preview-bar large" />
                <div className="preview-bar medium" />
              </div>
              <div className="preview-line" />
            </div>
          </div>
        </div>
        <div className="spotlight-actions">
          <a className="button" href={primary.link}>{primary.label}</a>
          <a className="button button-secondary" href={secondary.link} target="_blank" rel="noreferrer">{secondary.label}</a>
        </div>
      </div>
    </section>
  );
}
