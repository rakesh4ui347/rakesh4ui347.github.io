export default function ProjectDetailCard({ project }) {
  return (
    <div className="project-detail-card">
      <div className="project-detail-header">
        <div>
          <h3>{project.title}</h3>
          <span className="project-tag">{project.category}</span>
        </div>
        <a className="button button-secondary" href={project.link} target="_blank" rel="noreferrer">
          {project.cta}
        </a>
      </div>
      <p>{project.description}</p>
      <ul className="project-detail-features">
        {project.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}
