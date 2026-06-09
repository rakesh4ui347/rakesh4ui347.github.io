import AIIcon from './AIIcon.jsx';

export default function Header({ brand, links, onAIChatClick }) {
  return (
    <nav className="navbar">
      <div className="brand">{brand}</div>
      <div className="nav-links">
        {links.map((link) => (
          link.label === 'AI Chat' ? (
            <button key={link.href} type="button" className="nav-button" onClick={onAIChatClick}>
              <span className="nav-icon">
                <AIIcon className="ai-icon" />
              </span>
              {link.label}
            </button>
          ) : (
            <a key={link.href} href={link.href}>{link.label}</a>
          )
        ))}
      </div>
    </nav>
  );
}
