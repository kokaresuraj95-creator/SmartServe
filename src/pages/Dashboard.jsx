import { Link } from 'react-router-dom';
import { useRequests } from '../hooks/useRequests';

function Dashboard() {
  const { requests, requestCounts } = useRequests();
  const recentRequests = requests.slice(0, 4);
  const urgentRequests = requests
    .filter((request) => request.priority === 'High' && request.status !== 'Resolved')
    .slice(0, 3);
  const completionRate = requestCounts.total
    ? Math.round((requestCounts.resolved / requestCounts.total) * 100)
    : 0;

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening with your requests.</p>
        </div>
        <Link to="/requests/new" className="btn-primary">+ New Request</Link>
      </div>

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

      <div className="dashboard-insights">
        <div className="insight-card insight-highlight">
          <span className="insight-label">Resolution rate</span>
          <strong>{completionRate}%</strong>
          <p>{requestCounts.resolved} of {requestCounts.total} requests are completed.</p>
        </div>

        <div className="insight-card">
          <span className="insight-label">Priority queue</span>
          {urgentRequests.length > 0 ? (
            <ul className="priority-queue">
              {urgentRequests.map((request) => (
                <li key={request.id}>
                  <span className="priority-dot" aria-hidden="true" />
                  <div>
                    <strong>{request.title}</strong>
                    <small>{request.category}</small>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="insight-empty">All clear — no urgent requests right now.</p>
          )}
        </div>
      </div>

      <div className="recent-requests">
        <div className="section-header-custom">
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
                    <span className={`badge badge-${request.priority.toLowerCase()}`}>{request.priority}</span>
                    <span className={`status-badge status-${request.status.toLowerCase().replace(/\s+/g, '')}`}>{request.status}</span>
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