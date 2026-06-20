export default function DashboardChartCard({ title, value, chart, trend, note }) {
  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <div>
          <p className="chart-card-label">{title}</p>
          <span className="chart-card-value">{value}</span>
        </div>
        <div className={`chart-trend ${trend.direction}`}>
          {trend.label}
        </div>
      </div>
      <div className="chart-visual">
        {chart.type === 'line' ? (
          <div className="sparkline">
            {chart.points.map((height, index) => (
              <span key={index} className="sparkline-point" style={{ height: `${height}%` }} />
            ))}
          </div>
        ) : (
          <div className="bar-chart">
            {chart.bars.map((bar, index) => (
              <div key={index} className="bar-chart-item">
                <span className="bar-chart-bar" style={{ height: `${bar}%` }} />
                <small>{chart.labels[index]}</small>
              </div>
            ))}
          </div>
        )}
      </div>
      <p className="chart-note">{note}</p>
    </div>
  );
}
