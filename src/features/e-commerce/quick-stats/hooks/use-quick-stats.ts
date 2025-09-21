import { useQuery } from "@tanstack/react-query";
import { getQuickStats } from "../utils/get-quick-stats";

export default function useQuickStats() {
  return useQuery({
    queryKey: ["quick-stats"],
    retry: 1,
    queryFn: () => getQuickStats({}),
    refetchOnWindowFocus: true,
  });
}
