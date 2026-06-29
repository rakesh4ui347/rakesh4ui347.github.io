import { useEffect, useRef, useState } from 'react';
import AIIcon from './AIIcon.jsx';

const initialMessages = [
  {
    role: 'assistant',
    text: 'Hi! I can help you explore Rakesh\'s expertise — FinTech AP/AR platforms, SAP micro-frontends, RAG/AI applications, React architecture, and full-stack engineering patterns.'
  }
];

const suggestions = [
  'What FinTech projects has Rakesh built?',
  'Tell me about SAP & GenAI experience',
  'What is his tech stack?',
  'How does he approach RAG architecture?'
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

    if (text.includes('fintech') || text.includes('payment') || text.includes('ap') || text.includes('ar')) {
      return 'Rakesh builds enterprise FinTech platforms at Zenwork — AP/AR workflows, bills, recurring payments, QuickBooks (QBO/QBD) sync, and integrations with Stripe, Plaid, Mercoa, and COLUMN using Node.js microservices and Next.js.';
    }

    if (text.includes('sap') || text.includes('successfactors') || text.includes('talent')) {
      return 'At SAP Labs, Rakesh led React + TypeScript micro-frontend development for SuccessFactors products — NextGen CDP, Growth Portfolio, and Talent Intelligence Hub with GenAI recommendations, WCAG accessibility, and SAP Fiori design principles.';
    }

    if (text.includes('travel') || text.includes('zaggle') || text.includes('expense') || text.includes('booking')) {
      return 'At Zaggle, Rakesh delivered the Expense Management System, Self Booking Tool, Dynamic Form Builder, and a shared React NPM component library — with WebSocket updates, Recharts dashboards, and GCP deployment.';
    }

    if (text.includes('rag') || text.includes('ai') || text.includes('langchain') || text.includes('genai')) {
      return 'Rakesh builds production RAG applications with LangChain, vector embeddings, semantic retrieval, and Gemini/OpenAI APIs. He also integrated GenAI into SAP career development products and uses Cursor and GitHub Copilot for AI-assisted development.';
    }

    if (text.includes('stack') || text.includes('tech') || text.includes('skill')) {
      return 'Core stack: React, Next.js, TypeScript, Redux Toolkit, TanStack Query, Node.js, NestJS, Prisma, PostgreSQL, Redis, Kafka, AWS/GCP, Docker, LangChain, Stripe, Plaid, Jest, Cypress, and Playwright.';
    }

    if (text.includes('experience') || text.includes('years') || text.includes('career')) {
      return 'Rakesh has 8+ years of experience across Zenwork (FinTech), Zaggle (TravelTech/EMS), SAP Labs (HR Tech), and Swooptalent (ATS/Talent Matching). He has delivered 11+ enterprise products and mentored 3–5 engineers.';
    }

    if (text.includes('react') || text.includes('dashboard') || text.includes('frontend')) {
      return 'Rakesh specializes in scalable React/Next.js architectures — micro-frontends, Server Components, Redux Toolkit, TanStack Table with virtualization, Storybook component libraries, and WCAG-compliant enterprise UX patterns.';
    }

    if (text.includes('api') || text.includes('backend') || text.includes('node')) {
      return 'Backend expertise includes Node.js/NestJS REST and GraphQL APIs, BFF layers, Prisma ORM, PostgreSQL, Redis caching, Kafka event pipelines, JWT/OAuth2/RBAC auth, and AWS/GCP cloud-native deployment.';
    }

    return 'Rakesh is a Senior Full-Stack Engineer with deep expertise in FinTech, SAP, TravelTech, and AI. Ask about specific projects, technologies, or architecture patterns — or explore the Career Dashboard and Portfolio sections.';
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
            <h2>
              <span className="ai-chat-icon">
                <AIIcon className="ai-icon" />
              </span>{' '}
              Portfolio AI Assistant
            </h2>
            <p>Ask about Rakesh&apos;s experience, projects, tech stack, and engineering approach.</p>
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
              placeholder="Ask about experience, projects, or tech stack..."
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
