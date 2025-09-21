import HumanizeTime from "@/shared/humanize-time";
import { Bug, Radio, User } from "lucide-react";
import { useMemo } from "react";
import { match } from "ts-pattern";
import type { Notification } from "../utils/get-notfications";

type Props = {
  notification: Notification;
} & React.ComponentProps<"div">;

export default function NotificationItem({ notification, ...props }: Props) {
  const Icon = useMemo(
    () =>
      match(notification.type)
        .with("bug", () => Bug)
        .with("user", () => User)
        .with("subscription", () => Radio)
        .exhaustive(),
    [notification.type]
  );

  return (
    <div className="flex gap-2" {...props}>
      <Icon
        size={24}
        className="bg-blue-100 dark:text-gray-700 rounded-sm p-1"
      />
      <div>
        <p className="text-[14px]">{notification.title}</p>
        <p className="text-[12px] text-gray-400">
          <HumanizeTime dateString={notification.createdAt} />
        </p>
      </div>
    </div>
  );
}
