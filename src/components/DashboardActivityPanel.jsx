export default function DashboardActivityPanel({ activities, title = 'Career Timeline' }) {
  return (
    <aside className="dashboard-activity-panel">
      <div className="panel-header">
        <h3>{title}</h3>
        <span className="panel-badge">{activities.length} events</span>
      </div>
      <ul className="activity-feed">
        {activities.map((item) => (
          <li key={`${item.date}-${item.title}`} className={`activity-item ${item.status || ''}`}>
            <div className="activity-marker" />
            <div className="activity-body">
              <time>{item.date}</time>
              <strong>{item.title}</strong>
              <p>{item.description}</p>
              {item.tag && <span className="activity-tag">{item.tag}</span>}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
