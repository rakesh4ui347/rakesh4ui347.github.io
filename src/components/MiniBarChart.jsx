const CHART_WIDTH = 340;
const CHART_HEIGHT = 150;
const PADDING = { top: 14, right: 10, bottom: 30, left: 38 };

function slugify(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

export default function MiniBarChart({ labels = [], bars = [], animateKey = '', chartId = 'bar' }) {
  const chartW = CHART_WIDTH - PADDING.left - PADDING.right;
  const chartH = CHART_HEIGHT - PADDING.top - PADDING.bottom;
  const barGap = 12;
  const barWidth = (chartW - barGap * (bars.length - 1)) / bars.length;
  const yTicks = [0, 50, 100];
  const baseline = PADDING.top + chartH;
  const gradientId = `bar-fill-${slugify(chartId)}-${slugify(animateKey)}`;

  return (
    <div className="mini-chart mini-bar-chart">
      <svg
        viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
        className="mini-chart-svg"
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
        </defs>

        {yTicks.map((tick) => {
          const y = PADDING.top + chartH - (tick / 100) * chartH;
          return (
            <g key={tick}>
              <line
                x1={PADDING.left}
                y1={y}
                x2={CHART_WIDTH - PADDING.right}
                y2={y}
                className="chart-grid-line"
              />
              <text x={PADDING.left - 8} y={y + 4} className="chart-axis-label chart-y-label">
                {tick}
              </text>
            </g>
          );
        })}

        {bars.map((value, index) => {
          const barHeight = (value / 100) * chartH;
          const x = PADDING.left + index * (barWidth + barGap);
          const y = baseline - barHeight;

          return (
            <g key={`${animateKey}-bar-${labels[index]}`}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                rx="4"
                className="chart-bar"
                fill={`url(#${gradientId})`}
                style={{ animationDelay: `${index * 0.08}s` }}
              />
              <text
                x={x + barWidth / 2}
                y={baseline + 16}
                className="chart-axis-label chart-x-label"
                textAnchor="middle"
              >
                {labels[index]}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
