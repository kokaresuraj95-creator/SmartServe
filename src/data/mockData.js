export const services = [
  {
    id: 1,
    title: "Fast Service",
    description: "Create, track and manage service requests with a faster and smoother workflow.",
    icon: "⚡",
    color: "#a78bfa"
  },
  {
    id: 2,
    title: "Smart Management",
    description: "Keep your requests, teams, priorities and progress organized in one place.",
    icon: "🧠",
    color: "#60a5fa"
  },
  {
    id: 3,
    title: "Secure Platform",
    description: "A secure and reliable environment designed for modern service operations.",
    icon: "🔒",
    color: "#34d399"
  },
];

export const stats = [
  { value: "10K+", label: "Requests Managed", change: "+12.8%" },
  { value: "99.9%", label: "Platform Uptime", change: "+0.1%" },
  { value: "24/7", label: "Service Support", change: "Always" },
];

export const initialRequests = [
  {
    id: 1,
    title: "Website Performance Issue",
    description: "Website loading time has increased significantly and needs investigation.",
    category: "Technical",
    priority: "High",
    status: "In Progress",
    time: "10 min ago",
    icon: "⚙️",
    user: "John Doe",
    department: "Engineering"
  },
  {
    id: 2,
    title: "Office Equipment Request",
    description: "Need a new monitor and keyboard for the development workspace.",
    category: "Equipment",
    priority: "Medium",
    status: "Pending",
    time: "25 min ago",
    icon: "🖥️",
    user: "Jane Smith",
    department: "Operations"
  },
  {
    id: 3,
    title: "Account Access Update",
    description: "Request to update permissions and access for the project workspace.",
    category: "Account",
    priority: "Low",
    status: "Resolved",
    time: "1 hour ago",
    icon: "🔑",
    user: "Mike Johnson",
    department: "IT"
  },
  {
    id: 4,
    title: "Network Connectivity",
    description: "Intermittent network connection is affecting the development team.",
    category: "Technical",
    priority: "High",
    status: "In Progress",
    time: "2 hours ago",
    icon: "🌐",
    user: "Sarah Wilson",
    department: "Engineering"
  },
  {
    id: 5,
    title: "Software Installation",
    description: "Request to install required development software on a workstation.",
    category: "Software",
    priority: "Medium",
    status: "Pending",
    time: "3 hours ago",
    icon: "💻",
    user: "Alex Chen",
    department: "IT"
  },
  {
    id: 6,
    title: "Maintenance Request",
    description: "Workspace equipment requires routine maintenance and inspection.",
    category: "Maintenance",
    priority: "Low",
    status: "Resolved",
    time: "5 hours ago",
    icon: "🛠️",
    user: "Emily Brown",
    department: "Facilities"
  },
];

export const priorityOrder = { High: 1, Medium: 2, Low: 3 };