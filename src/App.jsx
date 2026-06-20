import { useEffect, useState } from 'react';
import SectionHeader from './components/SectionHeader.jsx';
import PortfolioCard from './components/PortfolioCard.jsx';
import AboutSection from './components/AboutSection.jsx';
import ContactForm from './components/ContactForm.jsx';
import HeroSection from './components/HeroSection.jsx';
import SpotlightSection from './components/SpotlightSection.jsx';
import InfoCard from './components/InfoCard.jsx';
import ProjectDetailCard from './components/ProjectDetailCard.jsx';
import DashboardChartCard from './components/DashboardChartCard.jsx';
import StatCard from './components/StatCard.jsx';
import AIChatSection from './components/AIChatSection.jsx';
import AIIcon from './components/AIIcon.jsx';
import TeamSection from './components/TeamSection.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import {
  headerData,
  heroData,
  spotlightData,
  services,
  techStack,
  features,
  projectHighlights,
  portfolioProjects,
  testimonials,
  team,
  dashboardKpis,
  dashboardFilters,
  dashboardCharts
} from './data/constants.js';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);
  const [selectedRange, setSelectedRange] = useState('30d');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 320);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showAIChat ? 'hidden' : '';
    document.documentElement.style.overflow = showAIChat ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [showAIChat]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openAIChat = () => setShowAIChat(true);
  const closeAIChat = () => setShowAIChat(false);

  return (
    <div className="app">
      <Header {...headerData} onAIChatClick={openAIChat} />

      <HeroSection {...heroData} />

      <section className="section dashboard-section" id="dashboard">
        <SectionHeader title="Live Fintech Metrics" subtitle="Executive KPI cards, trend visualizations, and interactive filters for a production-ready dashboard." />
        <div className="dashboard-controls">
          <div className="dashboard-filters">
            {dashboardFilters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                className={`filter-pill ${selectedRange === filter.value ? 'active' : ''}`}
                onClick={() => setSelectedRange(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <div className="dashboard-summary-panel">
            <div>
              <p>Insights</p>
              <strong>Current period: {selectedRange.replace('d', '-day')}</strong>
            </div>
            <div className="summary-pill-grid">
              <span className="summary-pill">Revenue +12.5%</span>
              <span className="summary-pill">New clients +18%</span>
              <span className="summary-pill">Churn 1.7%</span>
            </div>
          </div>
        </div>
        <div className="grid cards dashboard-grid">
          {dashboardKpis.map((kpi) => (
            <StatCard key={kpi.label} value={kpi.value} label={kpi.label} />
          ))}
        </div>
        <div className="grid chart-card-grid">
          {dashboardCharts.map((chart) => (
            <DashboardChartCard key={chart.title} {...chart} />
          ))}
        </div>
      </section>

      <SpotlightSection {...spotlightData} />

      <AboutSection />
      <section className="section" id="services">
        <SectionHeader title="Services" subtitle="Delivering enterprise-grade FinTech, SAP, and full-stack solutions using React, Node.js, cloud-native architectures, and modern payment ecosystems." />
        <div className="grid cards">
          {services.map((service) => (
            <InfoCard key={service.title} title={service.title} description={service.description} />
          ))}
        </div>
      </section>


      <section className="section features-section" id="features">
        <SectionHeader title="Technical Expertise" subtitle="Core engineering strengths developed through 8+ years
of building enterprise FinTech, SAP, and AI-powered platforms." />
        <div className="grid feature-grid">
          {features.map((feature) => (
            <InfoCard key={feature.title} title={feature.title} description={feature.description} className="feature-card" />
          ))}
        </div>
      </section>

      <section className="section section-alt tax-engine-spotlight" id="taxengine">
        <SectionHeader title="Tax Engine Spotlight" subtitle="A full-stack payroll tax platform built for enterprise embedding and React integration." />
        <div className="tax-engine-grid">
          <div className="tax-engine-copy">
            <p>The Tax Engine project is a complete payroll and tax calculation platform with multi-tenant support, state-level withholding, and embeddable UI components. It showcases how React, Next.js, and NestJS can power a scalable payroll system.</p>
            <ul>
              <li>Payroll workflows with draft, calculate, approve, and process stages</li>
              <li>Multi-state tax calculation for all 50 US states</li>
              <li>React embeddable pay stub viewer and partner integration widgets</li>
              <li>Secure API auth with JWT and API key support</li>
            </ul>
            <div className="tax-engine-actions">
              <a className="button" href="https://github.com/rakesh4ui347/Tax-Engine" target="_blank" rel="noreferrer">View Tax Engine</a>
              <a className="button button-secondary" href="#projects">See Featured Projects</a>
            </div>
          </div>
          <div className="tax-engine-stats">
            <div className="tax-engine-stat">
              <strong>5</strong>
              <span>years of tax support</span>
            </div>
            <div className="tax-engine-stat">
              <strong>50+</strong>
              <span>states supported</span>
            </div>
            <div className="tax-engine-stat">
              <strong>6</strong>
              <span>roles supported</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="portfolio">
        <SectionHeader title="Enterprise Portfolio" subtitle=" Built and delivered enterprise platforms used across FinTech, SAP HR Tech, TravelTech, Payroll, ATS integrations, and AI-powered products." />
        <div className="portfolio-stats">
          <span>8+ Years</span>
          <span>10+ Products</span>
          <span>3 Companies</span>
          <span>5 Domains</span>
        </div>
        <div className="company-badges">
          <span>SAP</span>
          <span>Zaggle</span>
          <span>Zenwork</span>
        </div>
        <div className="grid portfolio-grid">
          {portfolioProjects.map((project) => (
            <PortfolioCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="section project-highlights" id="projects">
        <SectionHeader title="Open Source & GitHub Projects" subtitle="Selected technical projects demonstrating AI, integrations,
frontend architecture, and full-stack engineering skills." />
        <div className="grid project-detail-grid">
          {projectHighlights.map((project) => (
            <ProjectDetailCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="section" id="tech-stack">
        <SectionHeader title="Technology Stack" subtitle="Technologies used to build enterprise FinTech, SAP HR Tech, TravelTech, and AI-powered applications at scale." />
        <div className="grid course-grid">
          {techStack.map((course) => (
            <div className="course-card" key={course.title}>
              <span className="course-icon">{course.icon}</span>
              <h4>{course.title}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <SectionHeader title="Contact" subtitle="Start a full-stack fintech dashboard, API integration, or enterprise React product." />
        <ContactForm />
      </section>

      <Footer />
      <AIChatSection open={showAIChat} onClose={closeAIChat} />
      <button
        className="ai-bubble"
        type="button"
        onClick={openAIChat}
        aria-label="Open AI chat"
      >
        <span className="ai-bubble-icon">
          <AIIcon className="ai-icon" />
        </span>
        <span className="ai-bubble-text">AI</span>
      </button>
      <button
        className={`scroll-top ${showScrollTop ? 'visible' : 'hidden'}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
}

export default App;
