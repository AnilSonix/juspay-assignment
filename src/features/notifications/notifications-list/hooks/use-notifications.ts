import { useQuery } from "@tanstack/react-query";
import { getNotifications } from "../utils/get-notfications";

export default function useNotifications() {
  return useQuery({
    queryKey: ["notifications"],
    retry: 1,
    queryFn: () => getNotifications({}),
  });
}
