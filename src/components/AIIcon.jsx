export default function AIIcon({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="44" height="44" rx="12" fill="rgba(15, 23, 42, 0.95)" stroke="url(#aiGradient)" strokeWidth="3" />
      <circle cx="32" cy="32" r="11" fill="url(#aiGradient)" opacity="0.18" />
      <text x="32" y="39" fill="#ffffff" fontSize="18" fontWeight="700" fontFamily="Inter, sans-serif" textAnchor="middle">AI</text>
      <path d="M20 16v-6" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
      <path d="M44 16v-6" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 54v6" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
      <path d="M44 54v6" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 20h-6" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 44h-6" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
      <path d="M54 20h6" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
      <path d="M54 44h6" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
