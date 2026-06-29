import { useMemo, useState } from 'react';
import DashboardKpiCard from './DashboardKpiCard.jsx';
import DashboardChartCard from './DashboardChartCard.jsx';
import DashboardActivityPanel from './DashboardActivityPanel.jsx';
import SkillMeterPanel from './SkillMeterPanel.jsx';
import SkillTagsPanel from './SkillTagsPanel.jsx';
import { dashboardFilters, dashboardDataByDomain, RESUME_PDF } from '../data/constants.js';
import './dashboard.css';

function getLastSync() {
  const now = new Date();
  return now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export default function CareerDashboard() {
  const [selectedDomain, setSelectedDomain] = useState('all');
  const active = dashboardDataByDomain[selectedDomain];
  const lastSync = useMemo(() => getLastSync(), []);

  const featuredIndex = active.featuredChart ?? active.charts.length - 1;
  const featuredChart = active.charts[featuredIndex];
  const secondaryCharts = active.charts.filter((_, index) => index !== featuredIndex);

  return (
    <section className="section dashboard-section" id="dashboard">
      <div className="section-container">
        <div className="dashboard-page-header">
          <div>
            <span className="dashboard-eyebrow">Full-Stack Analytics</span>
            <h2 className="dashboard-page-title">Full-Stack Command Center</h2>
            <p className="dashboard-page-subtitle">
              End-to-end engineering metrics — frontend, backend, databases, cloud, and AI — sourced from production experience.
            </p>
          </div>
          <div className="dashboard-header-actions">
            <a className="dashboard-action-btn" href="#portfolio">View Portfolio</a>
            <a className="dashboard-action-btn primary" href={RESUME_PDF} download target="_blank" rel="noreferrer">
              Export Resume
            </a>
          </div>
        </div>

        <div className="dashboard-shell">
          <div className="dashboard-toolbar">
            <div className="dashboard-toolbar-left">
              <div className="dashboard-live-badge">
                <span className="live-dot" />
                Live metrics
              </div>
              <span className="dashboard-toolbar-meta">Last synced · {lastSync}</span>
              <span className="dashboard-toolbar-divider" />
              <span className="dashboard-toolbar-meta">{active.meta?.company || 'All companies'}</span>
            </div>
            <div className="dashboard-status-row">
              {active.status.map((item) => (
                <span key={item.label} className={`status-chip status-${item.state}`}>
                  <span className="status-chip-dot" />
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          <div className="dashboard-tab-bar">
            {dashboardFilters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                className={`dashboard-tab ${selectedDomain === filter.value ? 'active' : ''}`}
                onClick={() => setSelectedDomain(filter.value)}
              >
                <span className="dashboard-tab-icon">{filter.icon}</span>
                {filter.label}
              </button>
            ))}
          </div>

          <div className="dashboard-insight-banner">
            <div>
              <p className="dashboard-panel-label">{active.meta?.label || 'Domain Overview'}</p>
              <strong>{active.insights}</strong>
            </div>
            <div className="summary-pill-grid">
              {active.pills.map((pill) => (
                <span key={pill} className="summary-pill">{pill}</span>
              ))}
            </div>
          </div>

          <div className="dashboard-kpi-row" key={`kpis-${selectedDomain}`}>
            {active.kpis.map((kpi) => (
              <DashboardKpiCard key={kpi.label} {...kpi} resetKey={selectedDomain} />
            ))}
          </div>

          <div className="dashboard-body-grid" key={`body-${selectedDomain}`}>
            <div className="dashboard-main-col">
              <DashboardChartCard
                {...featuredChart}
                animateKey={selectedDomain}
                featured
              />
              <div className="dashboard-secondary-charts">
                {secondaryCharts.map((chart) => (
                  <DashboardChartCard key={chart.title} {...chart} animateKey={selectedDomain} />
                ))}
              </div>
            </div>

            <div className="dashboard-side-col">
              <DashboardActivityPanel activities={active.activities} title={active.activityTitle} />
              <SkillMeterPanel
                skills={active.skills}
                extendedSkills={active.extendedSkills}
                title={active.skillsTitle}
                extendedTitle={active.extendedSkillsTitle}
              />
              {active.skillTags?.length > 0 && (
                <SkillTagsPanel groups={active.skillTags} title="Resume Tech Stack" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
