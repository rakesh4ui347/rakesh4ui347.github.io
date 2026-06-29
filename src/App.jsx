import { useEffect, useState } from 'react';
import SectionHeader from './components/SectionHeader.jsx';
import PortfolioCard from './components/PortfolioCard.jsx';
import AboutSection from './components/AboutSection.jsx';
import ContactForm from './components/ContactForm.jsx';
import HeroSection from './components/HeroSection.jsx';
import SpotlightSection from './components/SpotlightSection.jsx';
import InfoCard from './components/InfoCard.jsx';
import ProjectDetailCard from './components/ProjectDetailCard.jsx';
import CareerDashboard from './components/CareerDashboard.jsx';
import AIChatSection from './components/AIChatSection.jsx';
import AIIcon from './components/AIIcon.jsx';
import CountUp from './components/CountUp.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
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
  workExperience,
  education
} from './data/constants.js';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);

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

      <CareerDashboard />

      <SpotlightSection {...spotlightData} />

      <AboutSection />
      <ExperienceSection experiences={workExperience} education={education} />
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
              <CountUp value="5" as="strong" />
              <span>years of tax support</span>
            </div>
            <div className="tax-engine-stat">
              <CountUp value="50+" as="strong" />
              <span>states supported</span>
            </div>
            <div className="tax-engine-stat">
              <CountUp value="6" as="strong" />
              <span>roles supported</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="portfolio">
        <SectionHeader title="Enterprise Portfolio" subtitle=" Built and delivered enterprise platforms used across FinTech, SAP HR Tech, TravelTech, Payroll, ATS integrations, and AI-powered products." />
        <div className="portfolio-stats">
          <span><CountUp value="8+" /> Years</span>
          <span><CountUp value="14" /> Products</span>
          <span><CountUp value="4" /> Companies</span>
          <span><CountUp value="5" /> Domains</span>
        </div>
        <div className="company-badges">
          <span>Zenwork</span>
          <span>Zaggle</span>
          <span>SAP Labs</span>
          <span>Swooptalent</span>
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

      <section className="section tech-stack-section" id="tech-stack">
        <div className="section-container">
          <SectionHeader title="Technology Stack" subtitle="40+ technologies across frontend, backend, data, cloud, AI, and testing — aligned with resume proficiency." />
          {['Frontend', 'Backend', 'Data', 'Cloud & DevOps', 'AI & Integrations', 'Testing'].map((group) => (
            <div key={group} className="tech-group">
              <h3 className="tech-group-title">{group}</h3>
              <div className="course-grid">
                {techStack.filter((item) => item.group === group).map((course) => (
                  <div className="course-card" key={course.title}>
                    <span className="course-icon">{course.icon}</span>
                    <h4>{course.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="section-container">
          <SectionHeader
            title="Get In Touch"
            subtitle="Ready to discuss a FinTech platform, enterprise React product, AI integration, or full-stack architecture project?"
          />
          <ContactForm />
        </div>
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
