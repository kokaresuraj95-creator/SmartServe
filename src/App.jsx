import "./App.css";

const services = [
  {
    icon: "⚡",
    title: "Instant Support",
    text: "Connect customers with the right service in seconds.",
  },
  {
    icon: "🛠️",
    title: "Smart Services",
    text: "Discover trusted professionals for everyday problems.",
  },
  {
    icon: "📍",
    title: "Nearby Experts",
    text: "Find available service providers around your location.",
  },
];

function App() {
  return (
    <div className="app">
      {/* Background */}
      <div className="background-grid"></div>
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      {/* Floating particles */}
      <div className="particles">
        {Array.from({ length: 35 }).map((_, index) => (
          <span
            key={index}
            style={{
              left: `${(index * 31) % 100}%`,
              top: `${(index * 47) % 100}%`,
              animationDelay: `${-(index % 8)}s`,
              animationDuration: `${4 + (index % 5)}s`,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <header className="navbar">
        <a href="#" className="logo">
          <span className="logo-mark">S</span>
          <span>Smart<span>Serve</span></span>
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#how">How it works</a>
          <a href="#about">About</a>
        </nav>

        <button className="nav-button">
          Get Started
          <span>→</span>
        </button>

        <button className="mobile-menu">☰</button>
      </header>

      {/* Hero */}
      <main id="home" className="hero">
        <section className="hero-content">
          <div className="badge">
            <span className="status-dot"></span>
            THE SMART WAY TO GET THINGS DONE
          </div>

          <h1>
            Your Problem.
            <br />
            <span>Our Solution.</span>
          </h1>

          <p className="hero-description">
            SmartServe connects you with trusted professionals and
            reliable services — fast, simple, and exactly when you need them.
          </p>

          <div className="hero-actions">
            <button className="primary-button">
              Explore Services
              <span>↗</span>
            </button>

            <button className="secondary-button">
              See How It Works
              <span>▶</span>
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <strong>10K+</strong>
              <span>Users</span>
            </div>

            <div className="stat-line"></div>

            <div>
              <strong>500+</strong>
              <span>Experts</span>
            </div>

            <div className="stat-line"></div>

            <div>
              <strong>4.9</strong>
              <span>Average Rating</span>
            </div>
          </div>
        </section>

        {/* Hero visual */}
        <section className="hero-visual">
          <div className="visual-orbit orbit-one"></div>
          <div className="visual-orbit orbit-two"></div>

          <div className="dashboard-card">
            <div className="dashboard-top">
              <div>
                <span className="small-label">SMARTSERVE</span>
                <h3>Find a Service</h3>
              </div>

              <div className="profile-circle">K</div>
            </div>

            <div className="search-box">
              <span>⌕</span>
              <span className="search-text">What do you need help with?</span>
              <span className="search-icon">→</span>
            </div>

            <div className="dashboard-label">
              Popular services
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <div className="service-card" key={service.title}>
                  <div className="service-icon">{service.icon}</div>
                  <strong>{service.title}</strong>
                  <p>{service.text}</p>
                </div>
              ))}
            </div>

            <div className="availability">
              <span className="live-dot"></span>

              <div>
                <strong>124 experts online</strong>
                <small>Ready to help right now</small>
              </div>

              <span className="availability-arrow">→</span>
            </div>
          </div>

          {/* Floating notification */}
          <div className="floating-card notification">
            <div className="notification-icon">✓</div>

            <div>
              <strong>Service booked!</strong>
              <span>Your expert is on the way</span>
            </div>
          </div>

          {/* Floating rating */}
          <div className="floating-card rating">
            <div className="rating-star">★</div>

            <div>
              <strong>4.9 / 5</strong>
              <span>Customer rating</span>
            </div>
          </div>
        </section>
      </main>

      {/* Service preview */}
      <section id="services" className="services-section">
        <div className="section-heading">
          <span>SMART SERVICES</span>
          <h2>Everything you need, <em>in one place.</em></h2>
        </div>

        <div className="service-preview">
          {services.map((service, index) => (
            <article className="preview-card" key={service.title}>
              <span className="preview-number">
                0{index + 1}
              </span>

              <div className="preview-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <button>
                Explore <span>↗</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <span>SMARTSERVE © 2026</span>
        <span>Built for a smarter everyday.</span>
      </footer>
    </div>
  );
}

export default App;