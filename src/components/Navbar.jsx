function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="logo">
        <span className="logo-mark">S</span>
        <span className="logo-text">Smart<span>Serve</span></span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#requests">Requests</a>
        <a href="#about">About</a>
      </div>

      <a href="#requests" className="nav-button">
        Get Started
        <span>→</span>
      </a>
    </nav>
  );
}

export default Navbar;