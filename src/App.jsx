import "./App.css";

function App() {
  return (
    <main className="app">
      <nav className="navbar">
        <div className="logo">
          Smart<span>Serve</span>
        </div>

        <div className="navLinks">
          <a href="#services">Services</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#providers">Professionals</a>
          <a href="#about">About</a>
        </div>

        <div className="navActions">
          <button className="loginBtn">Login</button>
          <button className="primaryBtn">Get Started</button>
        </div>
      </nav>

      <section className="hero">
        <div className="heroContent">
          <div className="badge">
            <span className="badgeDot"></span>
            TRUSTED LOCAL SERVICES
          </div>

          <h1>
            Find the right
            <br />
            <span>service.</span>
          </h1>

          <p>
            Discover trusted professionals for your everyday needs.
            Compare services, check ratings and book with confidence.
          </p>

          <div className="searchBox">
            <div className="searchField">
              <span>⌕</span>
              <input
                type="text"
                placeholder="What service do you need?"
              />
            </div>

            <button className="searchButton">
              Search
            </button>
          </div>

          <div className="popular">
            <span>Popular:</span>
            <button>Electrician</button>
            <button>Plumber</button>
            <button>AC Repair</button>
            <button>Cleaning</button>
          </div>
        </div>

        <div className="heroVisual">
          <div className="visualGlow"></div>

          <div className="serviceOrb">
            <div className="orbInner">
              <span>SS</span>
            </div>
          </div>

          <div className="floatingCard cardOne">
            <div className="cardIcon">🔧</div>
            <div>
              <strong>Electrician</strong>
              <small>4.9 ★ · Available</small>
            </div>
          </div>

          <div className="floatingCard cardTwo">
            <div className="cardIcon">❄️</div>
            <div>
              <strong>AC Repair</strong>
              <small>4.8 ★ · From ₹599</small>
            </div>
          </div>

          <div className="floatingCard cardThree">
            <div className="cardIcon">🧹</div>
            <div>
              <strong>Cleaning</strong>
              <small>4.9 ★ · Verified</small>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div>
          <strong>10K+</strong>
          <span>Services booked</span>
        </div>

        <div>
          <strong>2.5K+</strong>
          <span>Professionals</span>
        </div>

        <div>
          <strong>4.9</strong>
          <span>Average rating</span>
        </div>

        <div>
          <strong>50+</strong>
          <span>Service categories</span>
        </div>
      </section>
    </main>
  );
}

export default App;