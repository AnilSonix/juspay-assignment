import { useQuery } from "@tanstack/react-query";
import { getTopSellingProducts } from "../utils/get-top-selling-products";

export default function useTopSellingProducts() {
  return useQuery({
    queryKey: ["top-selling-products"],
    retry: 1,
    queryFn: () => getTopSellingProducts({}),
    refetchOnWindowFocus: true,
  });
}
