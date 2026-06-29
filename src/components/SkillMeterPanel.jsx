function SkillMeterList({ skills }) {
  return (
    <ul className="skill-meter-list">
      {skills.map((skill) => (
        <li key={skill.name} className="skill-meter-item">
          <div className="skill-meter-labels">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="skill-meter-track">
            <span
              className="skill-meter-fill"
              style={{ width: `${skill.level}%`, animationDelay: `${skill.delay || 0}s` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function SkillMeterPanel({
  skills,
  extendedSkills = [],
  title = 'Core Proficiency',
  extendedTitle = 'Extended Skills'
}) {
  return (
    <aside className="dashboard-skills-panel">
      <div className="panel-header">
        <h3>{title}</h3>
        <span className="panel-badge">Resume-backed</span>
      </div>
      <SkillMeterList skills={skills} />
      {extendedSkills.length > 0 && (
        <>
          <p className="skill-section-divider">{extendedTitle}</p>
          <SkillMeterList skills={extendedSkills} />
        </>
      )}
    </aside>
  );
}
