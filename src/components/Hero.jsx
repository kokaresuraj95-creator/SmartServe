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
            Create Request
            <span className="btn-arrow">→</span>
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

      <div className="hero-visual">
        {/* DashboardPreview will render here */}
      </div>
    </section>
  );
}

export default Hero;