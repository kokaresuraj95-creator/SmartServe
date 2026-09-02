function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="logo">
        SmartServe
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#requests">Requests</a>
        <a href="#about">About</a>
      </div>

      <button className="nav-button">
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;