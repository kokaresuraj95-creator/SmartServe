function DashboardPreview() {
  const metrics = [
    { value: '1,284', label: 'Total Requests', change: '↑ 12.8%', tone: 'positive' },
    { value: '982', label: 'Resolved', change: '↑ 8.4%', tone: 'positive' },
    { value: '18m', label: 'Response Time', change: '↓ 14.2%', tone: 'negative' },
  ];

  return (
    <div className="dashboard-card">
      <div className="dashboard-header">
        <div className="dashboard-title">
          <h3>Service Overview</h3>
          <span>Request Activity</span>
        </div>
        <button className="dashboard-menu" type="button" aria-label="Open dashboard options">
          ⋯
        </button>
      </div>
      <div className="chart-container">
        <div className="chart-grid" />
        <div className="chart-line" />
        <div className="chart-labels">
          <span>Mon</span><span>Tue</span><span>Wed</span>
          <span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
        </div>
      </div>
      <div className="dashboard-metrics">
        {metrics.map((metric) => (
          <div className="metric" key={metric.label}>
            <span className="value">{metric.value}</span>
            <span className="label">{metric.label}</span>
            <span className={`change ${metric.tone}`}>{metric.change}</span>
          </div>
        ))}
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