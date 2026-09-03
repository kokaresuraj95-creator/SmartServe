import Hero from '../components/Hero';
import DashboardPreview from '../components/DashboardPreview';
import Services from '../components/Services';
import Requests from '../components/Requests';
import { stats, services } from '../data/mockData';
import { useRequests } from '../hooks/useRequests';

function LandingPage() {
  const {
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
  } = useRequests();

  return (
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
  );
}

export default LandingPage;