import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        SmartServe
      </Link>

      {!isAuthPage && (
        <>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/requests/new">New Request</Link>
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