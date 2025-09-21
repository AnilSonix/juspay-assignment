import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getOrders, type GetOrdersInputSchemaType } from "../utils/get-orders";

export default function useOrders(props: GetOrdersInputSchemaType) {
  return useQuery({
    queryKey: ["orders", props],
    retry: 1,
    queryFn: () => getOrders(props),
    placeholderData: keepPreviousData,
  });
}
