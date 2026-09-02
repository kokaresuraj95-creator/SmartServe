import { useMemo, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DashboardPreview from "./components/DashboardPreview";
import Services from "./components/Services";
import Requests from "./components/Requests";
import Footer from "./components/Footer";

const services = [
  {
    title: "Fast Service",
    description:
      "Create, track and manage service requests with a faster and smoother workflow.",
    icon: "⚡",
  },
  {
    title: "Smart Management",
    description:
      "Keep your requests, teams, priorities and progress organized in one place.",
    icon: "🧠",
  },
  {
    title: "Secure Platform",
    description:
      "A secure and reliable environment designed for modern service operations.",
    icon: "🔒",
  },
];

const stats = [
  {
    value: "10K+",
    label: "Requests Managed",
  },
  {
    value: "99.9%",
    label: "Platform Uptime",
  },
  {
    value: "24/7",
    label: "Service Support",
  },
];

const requests = [
  {
    id: 1,
    title: "Website Performance Issue",
    description:
      "Website loading time has increased significantly and needs investigation.",
    category: "Technical",
    priority: "High",
    status: "In Progress",
    time: "10 min ago",
    icon: "⚙️",
  },
  {
    id: 2,
    title: "Office Equipment Request",
    description:
      "Need a new monitor and keyboard for the development workspace.",
    category: "Equipment",
    priority: "Medium",
    status: "Pending",
    time: "25 min ago",
    icon: "🖥️",
  },
  {
    id: 3,
    title: "Account Access Update",
    description:
      "Request to update permissions and access for the project workspace.",
    category: "Account",
    priority: "Low",
    status: "Resolved",
    time: "1 hour ago",
    icon: "🔑",
  },
  {
    id: 4,
    title: "Network Connectivity",
    description:
      "Intermittent network connection is affecting the development team.",
    category: "Technical",
    priority: "High",
    status: "In Progress",
    time: "2 hours ago",
    icon: "🌐",
  },
  {
    id: 5,
    title: "Software Installation",
    description:
      "Request to install required development software on a workstation.",
    category: "Software",
    priority: "Medium",
    status: "Pending",
    time: "3 hours ago",
    icon: "💻",
  },
  {
    id: 6,
    title: "Maintenance Request",
    description:
      "Workspace equipment requires routine maintenance and inspection.",
    category: "Maintenance",
    priority: "Low",
    status: "Resolved",
    time: "5 hours ago",
    icon: "🛠️",
  },
];

const priorityOrder = {
  High: 1,
  Medium: 2,
  Low: 3,
};

function App() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [category, setCategory] = useState("All");
  const [priority, setPriority] = useState("All");
  const [sort, setSort] = useState("newest");

  const filteredRequests = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    const result = requests.filter((request) => {
      const matchesSearch =
        !normalizedSearch ||
        request.title.toLowerCase().includes(normalizedSearch) ||
        request.description.toLowerCase().includes(normalizedSearch) ||
        request.category.toLowerCase().includes(normalizedSearch);

      const matchesStatus =
        status === "All" || request.status === status;

      const matchesCategory =
        category === "All" || request.category === category;

      const matchesPriority =
        priority === "All" || request.priority === priority;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesCategory &&
        matchesPriority
      );
    });

    return [...result].sort((a, b) => {
      if (sort === "priority") {
        return (
          priorityOrder[a.priority] -
          priorityOrder[b.priority]
        );
      }

      return b.id - a.id;
    });
  }, [search, status, category, priority, sort]);

  const requestCounts = useMemo(() => {
    return {
      total: requests.length,
      pending: requests.filter(
        (request) => request.status === "Pending"
      ).length,
      inProgress: requests.filter(
        (request) => request.status === "In Progress"
      ).length,
      resolved: requests.filter(
        (request) => request.status === "Resolved"
      ).length,
    };
  }, []);

  const resetFilters = () => {
    setSearch("");
    setStatus("All");
    setCategory("All");
    setPriority("All");
    setSort("newest");
  };

  return (
    <div className="app">
      {/* Background */}
      <div className="bg-orb orb-one" />
      <div className="bg-orb orb-two" />

      <div className="ambient-glow glow-purple" />
      <div className="ambient-glow glow-blue" />

      <div className="grid-bg" />

      {/* Rain */}
      <div className="rain" aria-hidden="true">
        {Array.from({ length: 90 }, (_, index) => (
          <span
            key={index}
            style={{
              left: `${(index * 17) % 100}%`,
              animationDelay: `${(index % 20) * 0.18}s`,
              animationDuration: `${1.8 + (index % 8) * 0.25}s`,
            }}
          />
        ))}
      </div>

      {/* Dust */}
      <div className="dust" aria-hidden="true">
        {Array.from({ length: 35 }, (_, index) => (
          <i
            key={index}
            style={{
              left: `${(index * 29) % 100}%`,
              top: `${(index * 43) % 100}%`,
              animationDelay: `${(index % 10) * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="cinematic-vignette" />

      {/* Main content */}
      <div className="content-layer">
        <Navbar />

        <main>
          <Hero stats={stats} />

          <DashboardPreview />

          <Services services={services} />

          <Requests
            requests={filteredRequests}
            counts={requestCounts}
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
            category={category}
            setCategory={setCategory}
            priority={priority}
            setPriority={setPriority}
            sort={sort}
            setSort={setSort}
            onReset={resetFilters}
          />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;