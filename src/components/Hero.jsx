import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

const HeroScene = lazy(() => import('./HeroScene'));

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
          <Link to="/requests/new" className="btn-primary">
            Create Request <span className="btn-arrow">→</span>
          </Link>
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

      <div className="hero-visual" aria-label="Interactive 3D service dashboard">
        <Suspense fallback={<div className="hero-canvas-fallback" aria-hidden="true" />}>
          <HeroScene />
        </Suspense>
        <div className="visual-scene" aria-hidden="true">
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