function DashboardPreview() {
  return (
    <section className="dashboard-section" id="dashboard">
      <div className="dashboard-card">
        <div className="dashboard-header">
          <div>
            <span className="dashboard-label">SERVICE OVERVIEW</span>
            <h3>Request Activity</h3>
          </div>

          <div className="dashboard-status">
            <span className="status-dot" />
            Live
          </div>
        </div>

        <div className="dashboard-content">
          <div className="chart-area">
            <div className="chart-grid">
              <span />
              <span />
              <span />
              <span />
            </div>

            <svg
              className="chart-line"
              viewBox="0 0 700 220"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="1">
                  <stop offset="0%" />
                  <stop offset="100%" />
                </linearGradient>
              </defs>

              <path
                d="M0 185 C70 175 80 140 145 150 S220 115 280 130 S350 85 415 105 S500 55 555 75 S630 25 700 40"
                fill="none"
                stroke="url(#chartGradient)"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>

            <div className="chart-values">
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
            <div className="metric-box">
              <span>Total Requests</span>
              <strong>1,284</strong>
              <small>+12.8%</small>
            </div>

            <div className="metric-box">
              <span>Resolved</span>
              <strong>982</strong>
              <small>+8.4%</small>
            </div>

            <div className="metric-box">
              <span>Response Time</span>
              <strong>18m</strong>
              <small>-14.2%</small>
            </div>
          </div>
        </div>

        <div className="floating-card floating-card-one">
          <span>✓</span>
          <div>
            <strong>Request Resolved</strong>
            <small>Just now</small>
          </div>
        </div>

        <div className="floating-card floating-card-two">
          <span>⚡</span>
          <div>
            <strong>Fast Response</strong>
            <small>92% efficiency</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardPreview;