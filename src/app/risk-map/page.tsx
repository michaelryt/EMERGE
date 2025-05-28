'use client';

import { useState } from 'react';

export default function RiskMapPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <main className="risk-map-main">
      <div className="risk-map-topbar">
        <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <span />
          <span />
          <span />
        </button>
        <div className="search-container">
          <input
            className="location-search"
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search location..."
          />
          <button className="search-btn" aria-label="Search">
            🔍
          </button>
        </div>
      </div>

      {sidebarOpen && (
        <aside className="risk-map-sidebar">
          <div className="sidebar-columns">
            <div className="sidebar-column left-column">
              <div className="sidebar-section" id="risk-score-section">
                <div className="sidebar-value" id="risk-score-value">87</div>
                <div className="sidebar-label" id="risk-score-label">Risk Score</div>
              </div>
              <div className="sidebar-section" id="population-section">
                <div className="sidebar-value" id="population-value">12,300</div>
                <div className="sidebar-label" id="population-label">Estimated Population</div>
              </div>
              <div className="sidebar-section" id="evacuation-section">
                <div className="sidebar-value" id="evacuation-value">Jaro National High School (800m)</div>
                <div className="sidebar-label" id="evacuation-label">Nearby Evacuation Center</div>
              </div>
            </div>

            <div className="sidebar-column right-column">
              <div className="sidebar-section" id="primary-hazard-section">
                <div className="sidebar-value" id="primary-hazard-value">FLOOD</div>
                <div className="sidebar-label" id="primary-hazard-label">Primary Hazard</div>
              </div>
              <div className="sidebar-section" id="resources-section">
                <div className="sidebar-value" id="resources-value">
                  2 ambulances,<br />3 rescue boats
                </div>
                <div className="sidebar-label" id="resources-label">Pre-positioned resources</div>
                <button className="allocation-btn" id="allocation-btn" onClick={() => (window.location.href = '/responder-allocation')}>View Resource Allocation</button>
              </div>
            </div>
          </div>
        </aside>
      )}

      <div className="risk-map-area">
        <div className="risk-map-circle" />
        <img src="/sampleimg.png" alt="Sample Map" style={{ width: '100vw', height: '100vh', objectFit: 'cover' }} />
      </div>

      <div className="risk-map-controls">
        <div className="hazard-filters">
          <button className="hazard-btn active">
            <span className="hazard-icon"></span> Flood
          </button>
          <button className="hazard-btn">
            Landslide
          </button>
          <button className="hazard-btn">
            <span className="hazard-icon"></span> Earthquake
          </button>
        </div>

        <div className="map-controls">
          <button className="map-btn" id='maponly-btn' title="My Location">📍</button>
          <div className="zoom-controls">
            <button className="map-btn" title="Zoom In">+</button>
            <button className="map-btn" title="Zoom Out">−</button>
          </div>
        </div>

        <div className="risk-legend">
          <span className="legend-box low" /> Low
          <span className="legend-box med" /> Med
          <span className="legend-box high" /> High
        </div>
      </div>
    </main>
  );
}