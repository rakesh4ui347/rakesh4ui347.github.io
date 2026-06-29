import CountUp from './CountUp.jsx';

export default function StatCard({ value, label, variant = 'dashboard', resetKey = '' }) {
  const className = variant === 'hero' ? 'stat-card hero-stat-card' : 'dashboard-kpi-card';

  return (
    <div className={className}>
      <CountUp
        value={value}
        className={variant === 'hero' ? 'stat-card-value' : 'dashboard-kpi-value'}
        as={variant === 'hero' ? 'h3' : 'span'}
        resetKey={resetKey}
      />
      <p>{label}</p>
    </div>
  );
}
