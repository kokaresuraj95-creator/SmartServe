import { Link } from 'react-router-dom';
import { useRequests } from '../hooks/useRequests';

function Dashboard() {
  const { requests, requestCounts } = useRequests();
  const recentRequests = requests.slice(0, 4);

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening with your requests.</p>
        </div>
        <Link to="/requests/new" className="primary-button">
          + New Request
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="dashboard-stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div>
            <strong>{requestCounts.total}</strong>
            <span>Total Requests</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏳</div>
          <div>
            <strong>{requestCounts.pending}</strong>
            <span>Pending</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🔄</div>
          <div>
            <strong>{requestCounts.inProgress}</strong>
            <span>In Progress</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div>
            <strong>{requestCounts.resolved}</strong>
            <span>Resolved</span>
          </div>
        </div>
      </div>

      {/* Recent Requests */}
      <div className="recent-requests">
        <div className="section-header">
          <h2>Recent Requests</h2>
          <Link to="/requests" className="view-all">View All →</Link>
        </div>
        <div className="request-grid">
          {recentRequests.map((request) => (
            <Link to={`/requests/${request.id}`} key={request.id} className="request-card-link">
              <div className="request-card">
                <div className="request-card-top">
                  <div className="request-icon">{request.icon}</div>
                  <div className="request-badges">
                    <span className={`request-badge priority-${request.priority.toLowerCase()}`}>
                      {request.priority}
                    </span>
                    <span className={`request-status status-${request.status.toLowerCase().replace(/\s+/g, '-')}`}>
                      {request.status}
                    </span>
                  </div>
                </div>
                <h3>{request.title}</h3>
                <p>{request.description}</p>
                <div className="request-card-bottom">
                  <span className="request-time">{request.time}</span>
                  <span className="request-category">{request.category}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;