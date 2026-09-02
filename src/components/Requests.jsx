function Requests({
  requests,
  counts,
  search,
  setSearch,
  status,
  setStatus,
  category,
  setCategory,
  priority,
  setPriority,
  sort,
  setSort,
  onReset,
}) {
  return (
    <section className="requests-section" id="requests">
      <div className="section-heading">
        <div>
          <span className="section-kicker">SERVICE MANAGEMENT</span>
          <h2>Track every request.</h2>
        </div>

        <p>
          Monitor service requests, priorities and progress
          from one centralized workspace.
        </p>
      </div>

      {/* Request statistics */}
      <div className="request-stats">
        <div className="request-stat">
          <span className="request-stat-icon">◉</span>
          <div>
            <strong>{counts.total}</strong>
            <span>Total Requests</span>
          </div>
        </div>

        <div className="request-stat">
          <span className="request-stat-icon">◷</span>
          <div>
            <strong>{counts.pending}</strong>
            <span>Pending</span>
          </div>
        </div>

        <div className="request-stat">
          <span className="request-stat-icon">↻</span>
          <div>
            <strong>{counts.inProgress}</strong>
            <span>In Progress</span>
          </div>
        </div>

        <div className="request-stat">
          <span className="request-stat-icon">✓</span>
          <div>
            <strong>{counts.resolved}</strong>
            <span>Resolved</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="request-toolbar">
        <div className="search-box">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search requests..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Technical">Technical</option>
          <option value="Equipment">Equipment</option>
          <option value="Account">Account</option>
          <option value="Software">Software</option>
          <option value="Maintenance">Maintenance</option>
        </select>

        <select
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="All">All Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        <select
          value={sort}
          onChange={(event) => setSort(event.target.value)}
        >
          <option value="newest">Newest</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      {/* Result bar */}
      <div className="request-result-bar">
        <span>
          Showing <strong>{requests.length}</strong> requests
        </span>

        <button
          type="button"
          className="reset-button"
          onClick={onReset}
        >
          Reset Filters
        </button>
      </div>

      {/* Request cards */}
      {requests.length > 0 ? (
        <div className="request-grid">
          {requests.map((request) => (
            <article className="request-card" key={request.id}>
              <div className="request-card-top">
                <div className="request-icon">
                  {request.icon}
                </div>

                <div className="request-badges">
                  <span
                    className={`request-badge priority-${request.priority.toLowerCase()}`}
                  >
                    {request.priority}
                  </span>

                  <span
                    className={`request-status status-${request.status
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {request.status}
                  </span>
                </div>
              </div>

              <div className="request-card-content">
                <span className="request-category">
                  {request.category}
                </span>

                <h3>{request.title}</h3>

                <p>{request.description}</p>
              </div>

              <div className="request-card-footer">
                <span>{request.time}</span>

                <button type="button">
                  View Details <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">⌕</div>

          <h3>No requests found</h3>

          <p>
            Try changing your search or filter options.
          </p>

          <button
            type="button"
            className="secondary-button"
            onClick={onReset}
          >
            Clear Filters
          </button>
        </div>
      )}
    </section>
  );
}

export default Requests;