import { useState } from 'react';

const contactDetails = [
  {
    label: 'Email',
    value: 'rakesh4ui347@gmail.com',
    href: 'mailto:rakesh4ui347@gmail.com',
    icon: '✉'
  },
  {
    label: 'Phone',
    value: '+91 7008329759',
    href: 'tel:+917008329759',
    icon: '☎'
  },
  {
    label: 'Location',
    value: 'Hyderabad, India',
    href: null,
    icon: '📍'
  },
  {
    label: 'Availability',
    value: 'Open to full-time & contract',
    href: null,
    icon: '⚡'
  }
];

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/rakesh4ui347' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rakeshkumar-dev' },
  { label: 'Resume', href: '/Resume.pdf' }
];

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const contactEmail = 'rakesh4ui347@gmail.com';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in your name, email, and message before submitting.');
      setStatus('');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setError('Please enter a valid email address.');
      setStatus('');
      return;
    }

    const subject = encodeURIComponent(`Project inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

    setError('');
    setStatus('Opening your email client — send the message to complete your inquiry.');
    setFormData({ name: '', email: '', message: '' });
    window.location.href = mailtoUrl;
  };

  return (
    <div className="contact-layout">
      <aside className="contact-info-panel">
        <div className="contact-info-header">
          <span className="contact-status-dot" />
          <p>Available for new opportunities</p>
        </div>

        <h3>Let&apos;s build something impactful</h3>
        <p className="contact-info-lead">
          Full-stack FinTech platforms, SAP enterprise products, AI/RAG applications,
          API integrations, or scalable React architectures — I respond within 24 hours.
        </p>

        <ul className="contact-details-list">
          {contactDetails.map((item) => (
            <li key={item.label}>
              <span className="contact-detail-icon">{item.icon}</span>
              <div>
                <small>{item.label}</small>
                {item.href ? (
                  <a href={item.href}>{item.value}</a>
                ) : (
                  <strong>{item.value}</strong>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="contact-social-row">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              download={link.label === 'Resume' ? true : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </aside>

      <div className="contact-form-panel">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">Project details</label>
            <textarea
              id="contact-message"
              name="message"
              rows="6"
              placeholder="Tell me about your project — scope, timeline, tech stack, and goals..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="button contact-submit">
            Send message
          </button>
        </form>
        {error && <p className="form-status form-error">{error}</p>}
        {status && <p className="form-status">{status}</p>}
      </div>
    </div>
  );
}
