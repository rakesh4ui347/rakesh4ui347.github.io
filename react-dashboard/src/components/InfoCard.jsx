export default function InfoCard({ title, description, className = '' }) {
  return (
    <div className={`card ${className}`.trim()}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
