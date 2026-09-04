function DashboardPreview() {
  return (
    <div className="dashboard-card">
      <div className="dashboard-header">
        <div className="dashboard-title">
          <h3>Service Overview</h3>
          <span>Request Activity</span>
        </div>
        <div className="dashboard-menu">⋯</div>
      </div>

      <div className="chart-container">
        <div className="chart-grid" />
        <div className="chart-line" />
        <div className="chart-labels">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>

      <div className="dashboard-metrics">
        <div className="metric">
          <span className="value">1,284</span>
          <span className="label">Total Requests</span>
          <span className="change positive">↑ 12.8%</span>
        </div>
        <div className="metric">
          <span className="value">982</span>
          <span className="label">Resolved</span>
          <span className="change positive">↑ 8.4%</span>
        </div>
        <div className="metric">
          <span className="value">18m</span>
          <span className="label">Response Time</span>
          <span className="change negative">↓ 14.2%</span>
        </div>
      </div>

      <div className="floating-card floating-one">
        <div className="fc-label">Request Resolved</div>
        <div className="fc-value">Just now</div>
      </div>

      <div className="floating-card floating-two">
        <div className="fc-label">Fast Response</div>
        <div className="fc-value">92% efficiency</div>
      </div>
    </div>
  );
}

export default DashboardPreview;