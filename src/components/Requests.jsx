import { useEffect, useRef, useState } from 'react';
import { Copy, X } from 'lucide-react';

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
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [copyStatus, setCopyStatus] = useState('');
  const detailsDialogRef = useRef(null);

  const handleCopyRequestId = async () => {
    const requestId = `SR-${String(selectedRequest.id).padStart(4, '0')}`;

    try {
      await navigator.clipboard.writeText(requestId);
      setCopyStatus('Request ID copied');
    } catch {
      setCopyStatus('Unable to copy request ID');
    }
  };

  useEffect(() => {
    if (selectedRequest && !detailsDialogRef.current?.open) {
      detailsDialogRef.current?.showModal();
    }
  }, [selectedRequest]);

  return (
    <section className="requests-section" id="requests">
      <div className="section-header" style={{ textAlign: 'left', margin: '0 0 40px' }}>
        <div className="section-tag">Request Management</div>
        <h2>Track every request.</h2>
        <p>
          Monitor service requests, priorities and progress
          from one centralized workspace.
        </p>
      </div>

      <div className="request-stats">
        <div className="request-stat">
          <span className="label">Total Requests</span>
          <span className="value">{counts.total}</span>
        </div>
        <div className="request-stat">
          <span className="label">Pending</span>
          <span className="value">{counts.pending}</span>
        </div>
        <div className="request-stat">
          <span className="label">In Progress</span>
          <span className="value">{counts.inProgress}</span>
        </div>
        <div className="request-stat">
          <span className="label">Resolved</span>
          <span className="value">{counts.resolved}</span>
        </div>
      </div>

      <div className="request-toolbar">
        <div className="search-box">
          <span className="icon">⌕</span>
          <input
            type="text"
            placeholder="Search requests..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Technical">Technical</option>
          <option value="Equipment">Equipment</option>
          <option value="Account">Account</option>
          <option value="Software">Software</option>
          <option value="Maintenance">Maintenance</option>
        </select>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="All">All Priority</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="newest">Newest</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      <div className="request-result-bar">
        <span className="request-count">Showing <strong>{requests.length}</strong> requests</span>
        <button className="reset-btn" onClick={onReset}>Reset Filters</button>
      </div>

      {requests.length > 0 ? (
        <div className="request-grid">
          {requests.map((request) => (
            <article className="request-card" key={request.id}>
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
                  <button
                    type="button"
                    className="request-action"
                    aria-haspopup="dialog"
                    onClick={() => {
                      setCopyStatus('');
                      setSelectedRequest(request);
                    }}
                  >
                    View Details <span aria-hidden="true">→</span>
                  </button>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="icon">🔍</div>
          <h3>No requests found</h3>
          <p>Try changing your search or filter options.</p>
          <button className="btn-secondary" onClick={onReset}>Clear Filters</button>
        </div>
      )}

      <dialog
        ref={detailsDialogRef}
        className="request-dialog"
        onClose={() => {
          setSelectedRequest(null);
          setCopyStatus('');
        }}
        aria-labelledby="request-dialog-title"
      >
        {selectedRequest && (
          <div className="request-dialog-content">
            <div className="request-dialog-heading">
              <div className="request-icon" aria-hidden="true">{selectedRequest.icon}</div>
              <button
                type="button"
                className="request-dialog-close"
                aria-label="Close request details"
                onClick={() => detailsDialogRef.current?.close()}
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>
            <h2 id="request-dialog-title">{selectedRequest.title}</h2>
            <p className="request-dialog-description">{selectedRequest.description}</p>
            <dl className="request-dialog-details">
              <div><dt>Category</dt><dd>{selectedRequest.category}</dd></div>
              <div><dt>Priority</dt><dd>{selectedRequest.priority}</dd></div>
              <div><dt>Status</dt><dd>{selectedRequest.status}</dd></div>
              <div><dt>Submitted</dt><dd>{selectedRequest.time}</dd></div>
            </dl>
            <div className="request-dialog-footer">
              <span className="request-dialog-id">
                SR-{String(selectedRequest.id).padStart(4, '0')}
              </span>
              <button
                type="button"
                className="request-dialog-copy"
                onClick={handleCopyRequestId}
              >
                <Copy size={15} aria-hidden="true" />
                Copy ID
              </button>
              <span className="request-dialog-copy-status" role="status" aria-live="polite">
                {copyStatus}
              </span>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}

export default Requests;