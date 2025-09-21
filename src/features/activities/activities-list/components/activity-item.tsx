import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import HumanizeTime from "@/shared/humanize-time";
import type { Activity } from "../utils/get-activities";

type Props = {
  activity: Activity;
  isLast?: boolean;
} & React.ComponentProps<"div">;

export default function ActivityItem({ activity, isLast, ...props }: Props) {
  return (
    <div className="relative" {...props}>
      <div className="flex gap-2">
        <Avatar className="w-6 h-6">
          <AvatarImage src={activity.avatar} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-[14px]">{activity.title}</p>
          <p className="text-[12px] text-gray-400">
            <HumanizeTime dateString={activity.createdAt} />
          </p>
        </div>
      </div>
      {!isLast && (
        <Separator
          orientation="vertical"
          className="ml-3 -mt-2 absolute  data-[orientation=vertical]:h-4"
        />
      )}
    </div>
  );
}
