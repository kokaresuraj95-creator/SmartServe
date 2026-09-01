import "./App.css";

const services = [
  {
    icon: "⚡",
    title: "Fast Service",
    text: "Deliver faster and manage every service request from one place.",
  },
  {
    icon: "🧠",
    title: "Smart Management",
    text: "Keep your workflow organized with a simple and intelligent interface.",
  },
  {
    icon: "🔒",
    title: "Secure Platform",
    text: "Built with security and reliability in mind for modern businesses.",
  },
];

const stats = [
  ["10K+", "Requests Managed"],
  ["99.9%", "Platform Uptime"],
  ["24/7", "Service Support"],
];

function App() {
  return (
    <div className="app">

      {/* BACKGROUND EFFECTS */}
      <div className="bg-orb orb-one"></div>
      <div className="bg-orb orb-two"></div>
      <div className="grid-bg"></div>

      {/* NAVBAR */}
      <nav className="navbar">

        <div className="logo">
          <span className="logo-mark">S</span>
          <span>Smart<span>Serve</span></span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#solutions">Solutions</a>
          <a href="#about">About</a>
        </div>

        <button className="nav-button">
          Get Started
        </button>

      </nav>

      {/* HERO */}
      <main id="home">

        <section className="hero">

          <div className="hero-content">

            <div className="badge">
              <span className="status-dot"></span>
              SMART SERVICE PLATFORM
            </div>

            <h1>
              Manage services.
              <br />
              <span>Serve smarter.</span>
            </h1>

            <p className="hero-text">
              SmartServe helps modern businesses manage requests,
              services and customer workflows from one powerful platform.
            </p>

            <div className="hero-actions">

              <button className="primary-btn">
                Get Started
                <span>→</span>
              </button>

              <button className="secondary-btn">
                Explore Services
              </button>

            </div>

            {/* STATS */}
            <div className="stats">

              {stats.map(([number, label]) => (
                <div className="stat" key={label}>
                  <strong>{number}</strong>
                  <span>{label}</span>
                </div>
              ))}

            </div>

          </div>

          {/* HERO VISUAL */}
          <div className="hero-visual">

            <div className="dashboard-card">

              <div className="dashboard-top">
                <div>
                  <span className="small-label">
                    OVERVIEW
                  </span>

                  <h3>
                    Service Activity
                  </h3>
                </div>

                <span className="live">
                  LIVE
                </span>
              </div>

              <div className="chart">

                <div className="chart-line"></div>

                <div className="chart-point p1"></div>
                <div className="chart-point p2"></div>
                <div className="chart-point p3"></div>
                <div className="chart-point p4"></div>
                <div className="chart-point p5"></div>

              </div>

              <div className="dashboard-bottom">

                <div>
                  <span>Total Requests</span>
                  <strong>2,847</strong>
                </div>

                <div>
                  <span>Growth</span>
                  <strong className="growth">
                    +24.8%
                  </strong>
                </div>

              </div>

            </div>

            <div className="floating-card card-one">
              <span>⚡</span>
              <div>
                <strong>Fast</strong>
                <small>Response time</small>
              </div>
            </div>

            <div className="floating-card card-two">
              <span>✓</span>
              <div>
                <strong>98.4%</strong>
                <small>Success rate</small>
              </div>
            </div>

          </div>

        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="services-section"
        >

          <div className="section-heading">

            <div className="section-tag">
              WHAT WE OFFER
            </div>

            <h2>
              Everything you need to
              <span> serve better.</span>
            </h2>

            <p>
              Powerful tools designed to simplify your
              everyday service workflow.
            </p>

          </div>

          <div className="service-grid">

            {services.map((service, index) => (

              <article
                className="service-card"
                key={service.title}
                style={{
                  "--delay": `${index * 0.15}s`,
                }}
              >

                <div className="service-icon">
                  {service.icon}
                </div>

                <span className="card-number">
                  0{index + 1}
                </span>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.text}
                </p>

                <button className="learn-more">
                  Learn more
                  <span>↗</span>
                </button>

              </article>

            ))}

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer id="about">
        <div className="footer-logo">
          SmartServe
        </div>

        <p>
          Built for smarter service management.
        </p>

        <span>
          © 2026 SmartServe
        </span>
      </footer>

    </div>
  );
}

export default App;