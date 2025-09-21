import ErrorScreen from "@/shared/error-screen";
import LoadingSkeletonList from "@/shared/loading-skeleton-list";
import useNotifications from "../hooks/use-notifications";
import NotificationList from "./notifications-list";

export default function NotificationsPanel() {
  const query = useNotifications();

  console.log(query.status);

  if (query.isLoading) {
    return <LoadingSkeletonList />;
  }
  if (query.isError) {
    return (
      <ErrorScreen
        title="Unable to get notifications"
        subtitle="Try again later"
      />
    );
  }

  return (
    <div className="space-y-4 space-x-2">
      <p className="text-[14px] font-semibold">Notifications</p>
      <NotificationList notifications={query.data} />
    </div>
  );
}
