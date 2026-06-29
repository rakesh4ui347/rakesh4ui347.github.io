import useCountUp from '../hooks/useCountUp.js';

export default function CountUp({
  value,
  duration = 1800,
  className = '',
  as: Tag = 'span',
  startOnView = true,
  resetKey = ''
}) {
  const { display, ref, isNumeric } = useCountUp(value, { duration, startOnView, resetKey });

  if (!isNumeric) {
    return <Tag className={className}>{value}</Tag>;
  }

  return (
    <Tag className={className}>
      <span ref={ref} className="count-up-track">{display}</span>
    </Tag>
  );
}
