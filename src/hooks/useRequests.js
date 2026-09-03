import { useState, useMemo } from 'react';
import { initialRequests, priorityOrder } from '../data/mockData';

export function useRequests() {
  const [requests, setRequests] = useState(initialRequests);
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

      const matchesStatus = status === "All" || request.status === status;
      const matchesCategory = category === "All" || request.category === category;
      const matchesPriority = priority === "All" || request.priority === priority;

      return matchesSearch && matchesStatus && matchesCategory && matchesPriority;
    });

    return [...result].sort((a, b) => {
      if (sort === "priority") {
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      return b.id - a.id;
    });
  }, [search, status, category, priority, sort, requests]);

  const requestCounts = useMemo(() => ({
    total: requests.length,
    pending: requests.filter((r) => r.status === "Pending").length,
    inProgress: requests.filter((r) => r.status === "In Progress").length,
    resolved: requests.filter((r) => r.status === "Resolved").length,
  }), [requests]);

  const resetFilters = () => {
    setSearch("");
    setStatus("All");
    setCategory("All");
    setPriority("All");
    setSort("newest");
  };

  const addRequest = (newRequest) => {
    const request = {
      ...newRequest,
      id: requests.length + 1,
      time: "Just now",
      status: "Pending",
    };
    setRequests([request, ...requests]);
  };

  return {
    requests,
    filteredRequests,
    requestCounts,
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
    resetFilters,
    addRequest,
  };
}