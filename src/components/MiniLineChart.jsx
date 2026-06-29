const CHART_WIDTH = 340;
const CHART_HEIGHT = 150;
const PADDING = { top: 14, right: 14, bottom: 30, left: 38 };

function slugify(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, '-');
}

function buildCoords(points, featured = false) {
  const height = featured ? 200 : 150;
  const chartW = CHART_WIDTH - PADDING.left - PADDING.right;
  const chartH = height - PADDING.top - PADDING.bottom;
  const max = 100;
  const min = 0;

  return points.map((point, index) => {
    const x = PADDING.left + (index / Math.max(points.length - 1, 1)) * chartW;
    const y = PADDING.top + chartH - ((point - min) / (max - min)) * chartH;
    return { x, y, point };
  });
}

export default function MiniLineChart({ labels = [], points = [], animateKey = '', chartId = 'line', featured = false }) {
  const svgHeight = featured ? 200 : CHART_HEIGHT;
  const coords = buildCoords(points, featured);
  const chartH = svgHeight - PADDING.top - PADDING.bottom;
  const baseline = PADDING.top + chartH;
  const gradientId = `line-area-${slugify(chartId)}-${slugify(animateKey)}`;

  const linePath = coords
    .map((coord, index) => `${index === 0 ? 'M' : 'L'} ${coord.x.toFixed(1)} ${coord.y.toFixed(1)}`)
    .join(' ');

  const areaPath = `${linePath} L ${coords[coords.length - 1].x.toFixed(1)} ${baseline} L ${coords[0].x.toFixed(1)} ${baseline} Z`;
  const yTicks = [0, 25, 50, 75, 100];

  return (
    <div className="mini-chart mini-line-chart">
      <svg
        viewBox={`0 0 ${CHART_WIDTH} ${svgHeight}`}
        className={`mini-chart-svg ${featured ? 'mini-chart-svg-featured' : ''}`}
        role="img"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.35)" />
            <stop offset="100%" stopColor="rgba(56, 189, 248, 0.02)" />
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

        <path d={areaPath} className="chart-area" fill={`url(#${gradientId})`} />
        <path d={linePath} className="chart-line" pathLength="100" />

        {coords.map((coord, index) => (
          <g key={`${animateKey}-point-${index}`}>
            <circle
              cx={coord.x}
              cy={coord.y}
              r="6"
              className="chart-dot-glow"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            />
            <circle
              cx={coord.x}
              cy={coord.y}
              r="3.5"
              className="chart-dot"
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            />
          </g>
        ))}

        {labels.map((label, index) => {
          const x = coords[index]?.x ?? PADDING.left;
          return (
            <text
              key={`${animateKey}-label-${label}-${index}`}
              x={x}
              y={svgHeight - 8}
              className="chart-axis-label chart-x-label"
              textAnchor="middle"
            >
              {label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
