function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-brand">
        <a href="/" className="logo">
          <span className="logo-mark">S</span>
          <span className="logo-text">
            Smart<span>Serve</span>
          </span>
        </a>

        <p>
          Smarter service management for modern teams.
        </p>
      </div>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#requests">Requests</a>
        <a href="#about">About</a>
      </div>

      <div className="footer-copy">
        © 2026 SmartServe. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;