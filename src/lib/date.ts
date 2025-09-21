import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(duration);
dayjs.extend(relativeTime);

export function humanizeTime(dateString: string) {
  const diff = dayjs.duration(dayjs(dateString).diff(dayjs()));
  return diff.humanize(true);
}
