function Hero({ stats }) {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="status-dot" />
          Smart service management platform
        </div>
        <h1>
          Manage every service
          <br />
          <span className="highlight">smarter & faster.</span>
        </h1>
        <p>
          SmartServe brings service requests, team collaboration,
          tracking and management into one intelligent platform.
        </p>
        <div className="hero-actions">
          <a href="#requests" className="btn-primary">
            Create Request <span className="btn-arrow">→</span>
          </a>
          <a href="#services" className="btn-secondary">
            Explore Services
          </a>
        </div>
        <div className="hero-stats">
          {stats.map((stat) => (
            <div className="hero-stat" key={stat.label}>
              <span className="number">{stat.value}</span>
              <span className="label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-visual" aria-label="3D dashboard preview">
        <div className="visual-scene">
          <div className="visual-panel upper-panel">
            <div className="panel-header">
              <span className="panel-dot dot-one" />
              <span className="panel-dot dot-two" />
              <span className="panel-dot dot-three" />
            </div>
            <div className="panel-body">
              <div className="mini-chart">
                <span className="chart-bar bar-one" />
                <span className="chart-bar bar-two" />
                <span className="chart-bar bar-three" />
                <span className="chart-bar bar-four" />
                <span className="chart-bar bar-five" />
                <span className="chart-bar bar-six" />
              </div>
              <div className="mini-metrics">
                <div>
                  <strong>1.2k</strong>
                  <small>Requests</small>
                </div>
                <div>
                  <strong>96%</strong>
                  <small>Delivery</small>
                </div>
              </div>
            </div>
          </div>

          <div className="visual-panel lower-panel">
            <div className="panel-body compact">
              <div className="status-row">
                <span className="status-pill success">Resolved</span>
                <span className="status-pill neutral">Live</span>
              </div>
              <div className="progress-wrap">
                <span className="progress-label">Team output</span>
                <div className="progress-track">
                  <span className="progress-fill" />
                </div>
              </div>
            </div>
          </div>

          <div className="floating-mini mini-left">
            <span>Queue</span>
            <strong>14 pending</strong>
          </div>

          <div className="floating-mini mini-right">
            <span>Response</span>
            <strong>3.4 min</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;