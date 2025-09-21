import { humanizeTime } from "@/lib/date";
import { useMemo } from "react";

type Props = {
  dateString: string;
};

export default function HumanizeTime({ dateString }: Props) {
  return useMemo(() => humanizeTime(dateString), [dateString]);
}
