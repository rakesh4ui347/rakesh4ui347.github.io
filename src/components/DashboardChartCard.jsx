import CountUp from './CountUp.jsx';
import MiniLineChart from './MiniLineChart.jsx';
import MiniBarChart from './MiniBarChart.jsx';

export default function DashboardChartCard({
  title,
  value,
  chart,
  trend,
  note,
  animateKey = '',
  featured = false
}) {
  const chartTypeLabel = chart.type === 'line' ? 'Trend index' : 'Proficiency score';

  return (
    <article className={`chart-card ${featured ? 'chart-card-featured' : ''}`}>
      <div className="chart-card-header">
        <div>
          <p className="chart-card-label">{title}</p>
          <CountUp value={value} className="chart-card-value" as="span" resetKey={animateKey} />
        </div>
        <div className={`chart-trend ${trend.direction}`}>
          {trend.label}
        </div>
      </div>

      <div className="chart-visual">
        {chart.type === 'line' ? (
          <MiniLineChart
            labels={chart.labels}
            points={chart.points}
            animateKey={animateKey}
            chartId={title}
            featured={featured}
          />
        ) : (
          <MiniBarChart
            labels={chart.labels}
            bars={chart.bars}
            animateKey={animateKey}
            chartId={title}
          />
        )}
      </div>

      <div className="chart-card-footer">
        <span className="chart-legend">
          <span className="legend-dot" />
          {chartTypeLabel}
        </span>
        {chart.labels && (
          <span className="chart-range">
            {chart.labels[0]} — {chart.labels[chart.labels.length - 1]}
          </span>
        )}
      </div>

      <p className="chart-note">{note}</p>
    </article>
  );
}
