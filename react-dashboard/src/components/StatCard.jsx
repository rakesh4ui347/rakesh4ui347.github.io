export default function StatCard({ value, label }) {
  return (
    <div className="stat-card">
      <span>{value}</span>
      <p>{label}</p>
    </div>
  );
}
