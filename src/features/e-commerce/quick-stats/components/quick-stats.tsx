import AppCard from "@/components/app-card";
import ErrorScreen from "@/shared/error-screen";
import LoadingScreen from "@/shared/loading-screen";
import useQuickStats from "../hooks/use-quick-stats";
import StatsCard from "./stats-card";

export default function QuickStats() {
  const query = useQuickStats();

  if (query.isLoading) {
    return (
      <AppCard className="w-full h-full">
        <LoadingScreen
          title="Getting quick stats"
          subtitle="Just a sec"
          className="h-full self-stretch"
        />
      </AppCard>
    );
  }
  if (query.isError) {
    return (
      <ErrorScreen title="Unable to get stats" subtitle="Try again later" />
    );
  }

  if (!query.isSuccess) {
    return null;
  }

  return (
    <div className="flex gap-6 flex-wrap w-full h-full">
      {query.data.map((s) => (
        <StatsCard stat={s} key={s.title} />
      ))}
    </div>
  );
}
