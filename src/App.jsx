import { useMemo, useState } from "react";
import "./App.css";

/* =========================================
   SERVICES
========================================= */

const services = [
  {
    icon: "⚡",
    title: "Fast Service",
    text: "Deliver faster and manage every service request from one place.",
  },
  {
    icon: "🧠",
    title: "Smart Management",
    text: "Keep your workflow organized with a simple and intelligent interface.",
  },
  {
    icon: "🔒",
    title: "Secure Platform",
    text: "Built with security and reliability in mind for modern businesses.",
  },
];

/* =========================================
   HERO STATS
========================================= */

const stats = [
  ["10K+", "Requests Managed"],
  ["99.9%", "Platform Uptime"],
  ["24/7", "Service Support"],
];

/* =========================================
   SERVICE REQUESTS
========================================= */

const requests = [
  {
    id: "#SR-1048",
    title: "Website performance issue",
    description: "Homepage is loading slower than usual.",
    category: "Technical",
    priority: "High",
    status: "In Progress",
    time: "12 min ago",
    icon: "⚙️",
  },
  {
    id: "#SR-1047",
    title: "Update billing information",
    description: "Customer requested a billing profile update.",
    category: "Billing",
    priority: "Medium",
    status: "Pending",
    time: "28 min ago",
    icon: "💳",
  },
  {
    id: "#SR-1046",
    title: "Account access request",
    description: "User needs access restored to their workspace.",
    category: "Account",
    priority: "High",
    status: "In Progress",
    time: "41 min ago",
    icon: "🔐",
  },
  {
    id: "#SR-1045",
    title: "Feature request",
    description: "Customer suggested a dark mode preference.",
    category: "Product",
    priority: "Low",
    status: "Resolved",
    time: "1 hr ago",
    icon: "💡",
  },
  {
    id: "#SR-1044",
    title: "Payment verification",
    description: "Payment needs manual verification.",
    category: "Billing",
    priority: "High",
    status: "Pending",
    time: "2 hrs ago",
    icon: "💰",
  },
  {
    id: "#SR-1043",
    title: "Dashboard customization",
    description: "Customer wants additional dashboard widgets.",
    category: "Product",
    priority: "Low",
    status: "Resolved",
    time: "3 hrs ago",
    icon: "📊",
  },
];

/* =========================================
   APP
========================================= */

function App() {
  /* =======================================
     REQUEST FILTER STATE
  ======================================= */

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [category, setCategory] = useState("All");
  const [priority, setPriority] = useState("All");
  const [sort, setSort] = useState("newest");

  /* =======================================
     FILTER + SEARCH
  ======================================= */

  const filteredRequests = useMemo(() => {
    let result = [...requests];

    /* SEARCH */

    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter(
        (request) =>
          request.title.toLowerCase().includes(query) ||
          request.description.toLowerCase().includes(query) ||
          request.id.toLowerCase().includes(query) ||
          request.category.toLowerCase().includes(query)
      );
    }

    /* STATUS */

    if (status !== "All") {
      result = result.filter(
        (request) => request.status === status
      );
    }

    /* CATEGORY */

    if (category !== "All") {
      result = result.filter(
        (request) => request.category === category
      );
    }

    /* PRIORITY */

    if (priority !== "All") {
      result = result.filter(
        (request) => request.priority === priority
      );
    }

    /* SORT */

    if (sort === "priority") {
      const order = {
        High: 1,
        Medium: 2,
        Low: 3,
      };

      result.sort(
        (a, b) =>
          order[a.priority] -
          order[b.priority]
      );
    }

    return result;
  }, [
    search,
    status,
    category,
    priority,
    sort,
  ]);

  /* =======================================
     REQUEST COUNTS
  ======================================= */

  const totalRequests = requests.length;

  const pendingRequests = requests.filter(
    (item) => item.status === "Pending"
  ).length;

  const progressRequests = requests.filter(
    (item) => item.status === "In Progress"
  ).length;

  const resolvedRequests = requests.filter(
    (item) => item.status === "Resolved"
  ).length;

  return (
    <div className="app">

      {/* ===================================
          BACKGROUND
      =================================== */}

      <div className="bg-orb orb-one"></div>
      <div className="bg-orb orb-two"></div>
      <div className="grid-bg"></div>

      {/* ===================================
          NAVBAR
      =================================== */}

      <nav className="navbar">

        <div className="logo">
          <span className="logo-mark">S</span>

          <span>
            Smart<span>Serve</span>
          </span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#requests">Requests</a>
          <a href="#about">About</a>
        </div>

        <button className="nav-button">
          Get Started
        </button>

      </nav>

      {/* ===================================
          MAIN
      =================================== */}

      <main id="home">

        {/* =================================
            HERO
        ================================= */}

        <section className="hero">

          <div className="hero-content">

            <div className="badge">
              <span className="status-dot"></span>
              SMART SERVICE PLATFORM
            </div>

            <h1>
              Manage services.
              <br />
              <span>Serve smarter.</span>
            </h1>

            <p className="hero-text">
              SmartServe helps modern businesses manage
              requests, services and customer workflows
              from one powerful platform.
            </p>

            <div className="hero-actions">

              <button className="primary-btn">
                Get Started
                <span>→</span>
              </button>

              <button
                className="secondary-btn"
                onClick={() =>
                  document
                    .getElementById("requests")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
              >
                Explore Requests
              </button>

            </div>

            {/* STATS */}

            <div className="stats">

              {stats.map(([number, label]) => (
                <div
                  className="stat"
                  key={label}
                >
                  <strong>{number}</strong>
                  <span>{label}</span>
                </div>
              ))}

            </div>

          </div>

          {/* HERO VISUAL */}

          <div className="hero-visual">

            <div className="dashboard-card">

              <div className="dashboard-top">

                <div>
                  <span className="small-label">
                    OVERVIEW
                  </span>

                  <h3>
                    Service Activity
                  </h3>
                </div>

                <span className="live">
                  LIVE
                </span>

              </div>

              <div className="chart">

                <div className="chart-line"></div>

                <div className="chart-point p1"></div>
                <div className="chart-point p2"></div>
                <div className="chart-point p3"></div>
                <div className="chart-point p4"></div>
                <div className="chart-point p5"></div>

              </div>

              <div className="dashboard-bottom">

                <div>
                  <span>Total Requests</span>
                  <strong>2,847</strong>
                </div>

                <div>
                  <span>Growth</span>

                  <strong className="growth">
                    +24.8%
                  </strong>
                </div>

              </div>

            </div>

            <div className="floating-card card-one">
              <span>⚡</span>

              <div>
                <strong>Fast</strong>
                <small>Response time</small>
              </div>
            </div>

            <div className="floating-card card-two">
              <span>✓</span>

              <div>
                <strong>98.4%</strong>
                <small>Success rate</small>
              </div>
            </div>

          </div>

        </section>

        {/* =================================
            SERVICES
        ================================= */}

        <section
          id="services"
          className="services-section"
        >

          <div className="section-heading">

            <div className="section-tag">
              WHAT WE OFFER
            </div>

            <h2>
              Everything you need to
              <span> serve better.</span>
            </h2>

            <p>
              Powerful tools designed to simplify your
              everyday service workflow.
            </p>

          </div>

          <div className="service-grid">

            {services.map(
              (service, index) => (

                <article
                  className="service-card"
                  key={service.title}
                  style={{
                    "--delay": `${index * 0.15}s`,
                  }}
                >

                  <div className="service-icon">
                    {service.icon}
                  </div>

                  <span className="card-number">
                    0{index + 1}
                  </span>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>

                  <button className="learn-more">
                    Learn more
                    <span>↗</span>
                  </button>

                </article>

              )
            )}

          </div>

        </section>

        {/* =================================
            REQUEST DASHBOARD
        ================================= */}

        <section
          id="requests"
          className="requests-section"
        >

          <div className="section-heading request-heading">

            <div className="section-tag">
              SERVICE CENTER
            </div>

            <h2>
              Manage every
              <span> request.</span>
            </h2>

            <p>
              Search, filter and organize customer
              service requests from one place.
            </p>

          </div>

          {/* REQUEST STATS */}

          <div className="request-stats">

            <div className="request-stat-card">

              <div className="request-stat-icon">
                📋
              </div>

              <div>
                <span>Total Requests</span>
                <strong>{totalRequests}</strong>
              </div>

            </div>

            <div className="request-stat-card">

              <div className="request-stat-icon">
                ⏳
              </div>

              <div>
                <span>Pending</span>
                <strong>{pendingRequests}</strong>
              </div>

            </div>

            <div className="request-stat-card">

              <div className="request-stat-icon">
                🔄
              </div>

              <div>
                <span>In Progress</span>
                <strong>{progressRequests}</strong>
              </div>

            </div>

            <div className="request-stat-card">

              <div className="request-stat-icon">
                ✓
              </div>

              <div>
                <span>Resolved</span>
                <strong>{resolvedRequests}</strong>
              </div>

            </div>

          </div>

          {/* FILTER PANEL */}

          <div className="request-toolbar">

            {/* SEARCH */}

            <div className="search-box">

              <span>⌕</span>

              <input
                type="text"
                placeholder="Search requests..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

              {search && (
                <button
                  className="clear-search"
                  onClick={() => setSearch("")}
                >
                  ×
                </button>
              )}

            </div>

            {/* STATUS */}

            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
            >
              <option value="All">
                All Status
              </option>
              <option value="Pending">
                Pending
              </option>
              <option value="In Progress">
                In Progress
              </option>
              <option value="Resolved">
                Resolved
              </option>
            </select>

            {/* CATEGORY */}

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
            >
              <option value="All">
                All Categories
              </option>
              <option value="Technical">
                Technical
              </option>
              <option value="Billing">
                Billing
              </option>
              <option value="Account">
                Account
              </option>
              <option value="Product">
                Product
              </option>
            </select>

            {/* PRIORITY */}

            <select
              value={priority}
              onChange={(e) =>
                setPriority(e.target.value)
              }
            >
              <option value="All">
                All Priority
              </option>
              <option value="High">
                High
              </option>
              <option value="Medium">
                Medium
              </option>
              <option value="Low">
                Low
              </option>
            </select>

            {/* SORT */}

            <select
              value={sort}
              onChange={(e) =>
                setSort(e.target.value)
              }
            >
              <option value="newest">
                Latest
              </option>
              <option value="priority">
                Priority
              </option>
            </select>

          </div>

          {/* RESULTS */}

          <div className="results-header">

            <span>
              Showing{" "}
              <strong>
                {filteredRequests.length}
              </strong>{" "}
              of {requests.length} requests
            </span>

            {(search ||
              status !== "All" ||
              category !== "All" ||
              priority !== "All") && (
              <button
                className="reset-filters"
                onClick={() => {
                  setSearch("");
                  setStatus("All");
                  setCategory("All");
                  setPriority("All");
                }}
              >
                Reset filters
              </button>
            )}

          </div>

          {/* REQUEST CARDS */}

          {filteredRequests.length > 0 ? (

            <div className="request-grid">

              {filteredRequests.map(
                (request) => (

                  <article
                    className="request-card"
                    key={request.id}
                  >

                    <div className="request-card-top">

                      <div className="request-icon">
                        {request.icon}
                      </div>

                      <span className="request-id">
                        {request.id}
                      </span>

                    </div>

                    <div className="request-main">

                      <h3>
                        {request.title}
                      </h3>

                      <p>
                        {request.description}
                      </p>

                    </div>

                    <div className="request-meta">

                      <span className="category-badge">
                        {request.category}
                      </span>

                      <span
                        className={`priority-badge priority-${request.priority
                          .toLowerCase()}`}
                      >
                        {request.priority}
                      </span>

                    </div>

                    <div className="request-footer">

                      <span
                        className={`status-badge status-${request.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        <span></span>
                        {request.status}
                      </span>

                      <span className="request-time">
                        {request.time}
                      </span>

                    </div>

                  </article>

                )
              )}

            </div>

          ) : (

            <div className="empty-state">

              <div>🔍</div>

              <h3>
                No requests found
              </h3>

              <p>
                Try changing your search or filters.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setStatus("All");
                  setCategory("All");
                  setPriority("All");
                }}
              >
                Clear Filters
              </button>

            </div>

          )}

        </section>

      </main>

      {/* ===================================
          FOOTER
      =================================== */}

      <footer id="about">

        <div className="footer-logo">
          SmartServe
        </div>

        <p>
          Built for smarter service management.
        </p>

        <span>
          © 2026 SmartServe
        </span>

      </footer>

    </div>
  );
}

export default App;