import EmptyScreen from "@/shared/empty-screen";
import { Bell } from "lucide-react";
import type { Notification } from "../utils/get-notfications";
import NotificationItem from "./notification-item";

type Props = {
  notifications?: Notification[];
};

export default function NotificationList({ notifications }: Props) {
  if (notifications?.length == 0) {
    return (
      <EmptyScreen
        title="No new notifications"
        subtitle="Check later"
        Icon={Bell}
      />
    );
  }

  return (
    <div className="space-y-4 space-x-2">
      {notifications?.map((n) => (
        <NotificationItem key={n.id} notification={n} />
      ))}
    </div>
  );
}
