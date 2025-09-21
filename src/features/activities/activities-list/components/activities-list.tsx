import EmptyScreen from "@/shared/empty-screen";
import { Newspaper } from "lucide-react";
import type { Activity } from "../utils/get-activities";
import ActivityItem from "./activity-item";

type Props = {
  activities?: Activity[];
};

export default function ActivitiesList({ activities }: Props) {
  if (activities?.length == 0) {
    return (
      <EmptyScreen
        title="No new activities"
        subtitle="Check later"
        Icon={Newspaper}
      />
    );
  }
  return (
    <div className="space-y-4 space-x-2">
      {activities?.map((a) => (
        <ActivityItem key={a.id} activity={a} />
      ))}
    </div>
  );
}
