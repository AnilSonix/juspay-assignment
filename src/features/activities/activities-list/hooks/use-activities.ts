import { useQuery } from "@tanstack/react-query";
import { getActivities } from "../utils/get-activities";

export default function useActivities() {
  return useQuery({
    queryKey: ["activities"],
    retry: 1,
    queryFn: () => getActivities({}),
  });
}
