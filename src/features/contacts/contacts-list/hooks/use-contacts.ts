import { useQuery } from "@tanstack/react-query";
import { getContacts } from "../utils/get-contacts";

export default function useContacts() {
  return useQuery({
    queryKey: ["contacts"],
    retry: 1,
    queryFn: () => getContacts({}),
  });
}
