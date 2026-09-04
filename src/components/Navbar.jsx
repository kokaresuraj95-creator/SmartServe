import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <div className="logo-icon">S</div>
        <span>SmartServe</span>
      </Link>

      {!isAuthPage && (
        <>
          <div className="nav-links">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
            <Link to="/dashboard" className={location.pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link>
            <Link to="/requests/new" className={location.pathname === '/requests/new' ? 'active' : ''}>New Request</Link>
          </div>

          <div className="nav-actions">
            <Link to="/login" className="nav-button">
              Sign In
            </Link>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;