import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('Thanks! Your project brief is ready to send.');
    setFormData({ name: '', email: '', message: '' });
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
      {status && <p className="form-status">{status}</p>}
    </div>
  );
}
