function DashboardPreview() {
  return (
    <div className="dashboard-card">
      <div className="dashboard-header">
        <div className="dashboard-title">
          <strong>Service Overview</strong>
          <span>Request Activity</span>
        </div>

        <div className="dashboard-menu">⋯</div>
      </div>

      <div className="chart">
        <div className="chart-area" />
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

      <div className="dashboard-bottom">
        <div className="dashboard-metric">
          <strong>1,284</strong>
          <span>Total Requests</span>
        </div>
        <div className="dashboard-metric">
          <strong>982</strong>
          <span>Resolved</span>
        </div>
        <div className="dashboard-metric">
          <strong>18m</strong>
          <span>Response Time</span>
        </div>
      </div>

      <div className="floating-card floating-one">
        <strong>Request Resolved</strong>
        <span>Just now</span>
      </div>

      <div className="floating-card floating-two">
        <strong>Fast Response</strong>
        <span>92% efficiency</span>
      </div>
    </div>
  );
}

export default DashboardPreview;