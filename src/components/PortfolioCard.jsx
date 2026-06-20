export default function PortfolioCard({ project }) {
  return (
    <article className="card">
      <div className="project-header">
        <h3>{project.title}</h3>
        <span className="project-tag">{project.category}</span>
      </div>
      <p>{project.description}</p>
      <a className="button button-secondary" href={project.link} target="_blank" rel="noreferrer">
        {project.label}
      </a>
    </article>
  );
}
