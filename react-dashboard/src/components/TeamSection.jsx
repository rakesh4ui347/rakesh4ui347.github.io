export default function TeamSection({ team }) {
  return (
    <section className="section section-alt" id="team">
      <div className="section-title">
        <h2>Team</h2>
        <p>A compact team built for UI development, design, and project delivery.</p>
      </div>
      <div className="grid team-grid">
        {team.map((member) => (
          <div className="team-card" key={member.name}>
            <div className="avatar">{member.name.split(' ').map((word) => word[0]).join('')}</div>
            <h4>{member.name}</h4>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
