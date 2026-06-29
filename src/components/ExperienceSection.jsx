import SectionHeader from './SectionHeader.jsx';

export default function ExperienceSection({ experiences, education }) {
  return (
    <section className="section section-alt" id="experience">
      <SectionHeader
        title="Work Experience"
        subtitle="8+ years delivering enterprise FinTech, SAP HR Tech, TravelTech, and AI-powered platforms across product organizations."
      />

      <div className="experience-timeline">
        {experiences.map((exp) => (
          <article key={`${exp.company}-${exp.period}`} className="experience-item">
            <div className="experience-marker">
              <span className="experience-dot" />
            </div>
            <div className="experience-content">
              <div className="experience-header">
                <div>
                  <h3>{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
                <span className="experience-period">{exp.period}</span>
              </div>
              <p className="experience-location">{exp.location}</p>
              <ul className="experience-highlights">
                {exp.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="experience-tags">
                {exp.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="education-block">
        <h3>Education</h3>
        {education.map((item) => (
          <div key={item.degree} className="education-item">
            <strong>{item.degree}</strong>
            <span>{item.institution}</span>
            <span className="education-year">{item.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
