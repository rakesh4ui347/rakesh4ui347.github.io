import CountUp from './CountUp.jsx';

export default function DashboardKpiCard({ value, label, icon, delta, deltaLabel, trend = 'up', resetKey = '' }) {
  return (
    <article className="dashboard-kpi-card">
      <div className="kpi-card-top">
        <span className="kpi-icon">{icon}</span>
        {delta && (
          <span className={`kpi-delta kpi-delta-${trend}`}>
            {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '•'} {delta}
          </span>
        )}
      </div>
      <CountUp value={value} className="dashboard-kpi-value" resetKey={resetKey} />
      <p className="kpi-label">{label}</p>
      {deltaLabel && <span className="kpi-meta">{deltaLabel}</span>}
    </article>
  );
}
