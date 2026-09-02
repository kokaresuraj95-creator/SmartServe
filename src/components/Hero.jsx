function Hero({ stats }) {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="status-dot" />
          Smart service management platform
        </div>

        <h1>
          Manage every
          <br />
          service <span>smarter.</span>
        </h1>

        <p>
          SmartServe brings service requests, team collaboration,
          tracking and management into one intelligent platform.
        </p>

        <div className="hero-actions">
          <a href="#requests" className="primary-button">
            Create Request
            <span>→</span>
          </a>

          <a href="#services" className="secondary-button">
            Explore Services
          </a>
        </div>

        <div className="hero-stats">
          {stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;