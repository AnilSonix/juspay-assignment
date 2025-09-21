import AppCard from "@/components/app-card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatCurrency } from "@/lib/currency-formatter";
import EmptyScreen from "@/shared/empty-screen";
import ErrorScreen from "@/shared/error-screen";
import LoadingScreen from "@/shared/loading-screen";
import { List } from "lucide-react";
import useTopSellingProducts from "../hooks/use-top-selling-products";

export default function TopSellingProductsViz() {
  const query = useTopSellingProducts();

  console.log(query.error);

  if (query.isLoading) {
    return (
      <AppCard className="w-full h-full">
        <LoadingScreen
          title="Getting quick stats"
          subtitle="Just a sec"
          className="h-full self-stretch"
        />
      </AppCard>
    );
  }
  if (query.isError) {
    return (
      <ErrorScreen title="Unable to get contacts" subtitle="Try again later" />
    );
  }

  console.log(query.error);

  return (
    <AppCard className="w-full h-full text-[14px]">
      <p className="text-[14px] font-semibold">Top Selling Products</p>
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {query.isSuccess && query.data.length === 0 && (
            <EmptyScreen
              title="No data found"
              subtitle="Check later"
              Icon={List}
            />
          )}
          {query.data?.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.productName}</TableCell>
              <TableCell>{formatCurrency(item.price)}</TableCell>
              <TableCell>{item.quantity}</TableCell>
              <TableCell>{formatCurrency(item.amount)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </AppCard>
  );
}
