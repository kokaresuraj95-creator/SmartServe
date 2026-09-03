import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRequests } from '../hooks/useRequests';

function CreateRequest() {
  const navigate = useNavigate();
  const { addRequest } = useRequests();
  const [formData, setFormData] = useState({
    title: '',
    category: 'Technical',
    description: '',
    priority: 'Medium',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRequest({
      ...formData,
      icon: '📝',
      user: 'Current User',
      department: 'Engineering'
    });
    setSubmitted(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="create-request-page">
        <div className="success-state">
          <div className="success-icon">✅</div>
          <h2>Request Created!</h2>
          <p>Your request has been submitted successfully.</p>
          <button onClick={() => navigate('/dashboard')} className="primary-button">
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="create-request-page">
      <div className="create-request-container">
        <div className="create-request-header">
          <h1>Create New Request</h1>
          <p>Fill in the details below to submit a new service request.</p>
        </div>

        <form onSubmit={handleSubmit} className="create-request-form">
          <div className="form-group">
            <label htmlFor="title">Request Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter request title"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="Technical">Technical</option>
              <option value="Equipment">Equipment</option>
              <option value="Account">Account</option>
              <option value="Software">Software</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <select
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              required
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your request in detail..."
              rows="5"
              required
            />
          </div>

          <div className="form-actions">
            <button type="button" onClick={() => navigate('/dashboard')} className="secondary-button">
              Cancel
            </button>
            <button type="submit" className="primary-button">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateRequest;