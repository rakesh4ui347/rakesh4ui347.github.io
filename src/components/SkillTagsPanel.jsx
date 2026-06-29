export default function SkillTagsPanel({ groups, title = 'Technical Proficiency' }) {
  return (
    <aside className="dashboard-skill-tags-panel">
      <div className="panel-header">
        <h3>{title}</h3>
        <span className="panel-badge">From resume</span>
      </div>
      <div className="skill-tag-groups">
        {groups.map((group) => (
          <div key={group.label} className="skill-tag-group">
            <p className="skill-tag-group-label">{group.label}</p>
            <div className="skill-tag-list">
              {group.tags.map((tag) => (
                <span key={tag} className="skill-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
