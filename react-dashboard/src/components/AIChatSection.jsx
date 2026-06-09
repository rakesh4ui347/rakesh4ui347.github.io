import { useEffect, useRef, useState } from 'react';
import AIIcon from './AIIcon.jsx';

const initialMessages = [
  {
    role: 'assistant',
    text: 'AI dashboard assistant ready. Ask about React architecture, fintech integrations, APIs, or production-grade dashboard patterns.'
  }
];

const suggestions = [
  'How should I structure a React dashboard?',
  'Best API design for fintech services',
  'How to connect PostgreSQL and Redis?',
  'What makes a dashboard enterprise-ready?'
];

export default function AIChatSection({ open, onClose }) {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, open]);

  const getResponse = (prompt) => {
    const text = prompt.toLowerCase();

    if (text.includes('react') || text.includes('dashboard')) {
      return 'For a professional fintech dashboard, use reusable React components, strong state management, responsive layouts, and a clean data-driven UI design.';
    }

    if (text.includes('api') || text.includes('backend')) {
      return 'Use Node.js REST APIs with secure authentication, modular services, and PostgreSQL for transactional data with Redis caching for fast queries.';
    }

    if (text.includes('postgres') || text.includes('redis') || text.includes('kafka')) {
      return 'PostgreSQL is ideal for relational fintech data, Redis can accelerate session and cache lookups, and Kafka helps with event-driven payment pipelines.';
    }

    if (text.includes('enterprise') || text.includes('production')) {
      return 'Focus on reliability, accessibility, observability, and performance testing. Use a scalable component system and clear monitoring for fintech delivery.';
    }

    return 'That sounds interesting. I recommend focusing on a strong React frontend with a Node.js API backend, secure payment flows, and reusable dashboard widgets.';
  };

  const handleSend = (event) => {
    event?.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) {
      return;
    }

    const userMessage = { role: 'user', text: trimmed };
    setMessages((current) => [...current, userMessage]);
    setInput('');

    setTimeout(() => {
      const assistantMessage = { role: 'assistant', text: getResponse(trimmed) };
      setMessages((current) => [...current, assistantMessage]);
    }, 300);
  };

  const handleSuggestion = (suggestion) => {
    setInput(suggestion);
  };

  if (!open) {
    return null;
  }

  return (
    <div className="ai-chat-modal open">
      <button className="ai-chat-backdrop" type="button" onClick={onClose} aria-label="Close chat" />
      <div className="ai-chat-panel">
        <div className="ai-chat-panel-header">
          <div>
            <h2><span className="ai-chat-icon">
              <AIIcon className="ai-icon" />
            </span> AI Chat Assistant</h2>
            <p>Ask the dashboard advisor for architecture tips, fintech integrations, and production-ready React guidance.</p>
          </div>
          <button className="ai-chat-close" type="button" onClick={onClose} aria-label="Close chat">
            ×
          </button>
        </div>
        <div className="ai-chat-widget">
          <div className="ai-chat-suggestions">
            {suggestions.map((suggestion) => (
              <button key={suggestion} type="button" className="ai-chat-suggestion" onClick={() => handleSuggestion(suggestion)}>
                {suggestion}
              </button>
            ))}
          </div>
          <div className="ai-chat-window">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`ai-chat-message ${message.role}`}>
                <span className="message-role">{message.role === 'assistant' ? 'Assistant' : 'You'}</span>
                <p>{message.text}</p>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form className="ai-chat-form" onSubmit={handleSend}>
            <input
              type="text"
              placeholder="Type your question..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <button className="button" type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}
