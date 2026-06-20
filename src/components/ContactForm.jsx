import { useState } from 'react';

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

    const subject = encodeURIComponent(`New project brief from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

    setError('');
    setStatus('Opening your email client so you can send the brief.');
    setFormData({ name: '', email: '', message: '' });
    window.location.href = mailtoUrl;
  };

  return (
    <div className="contact-form-wrapper">
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Describe your fintech dashboard or integration requirements"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit" className="button button-secondary">Submit brief</button>
      </form>
      {error && <p className="form-status form-error">{error}</p>}
      {status && <p className="form-status">{status}</p>}
    </div>
  );
}
