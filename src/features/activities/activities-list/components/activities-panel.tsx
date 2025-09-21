import ErrorScreen from "@/shared/error-screen";
import LoadingSkeletonList from "@/shared/loading-skeleton-list";
import useActivities from "../hooks/use-activities";
import ActivitiesList from "./activities-list";

export default function ActivitiesPanel() {
  const query = useActivities();

  console.log(query.status);

  if (query.isLoading) {
    return <LoadingSkeletonList />;
  }
  if (query.isError) {
    return (
      <ErrorScreen
        title="Unable to get activities"
        subtitle="Try again later"
      />
    );
  }

  return (
    <div className="space-y-4 space-x-2">
      <p className="text-[14px] font-semibold">Activities</p>
      <ActivitiesList activities={query.data} />
    </div>
  );
}
