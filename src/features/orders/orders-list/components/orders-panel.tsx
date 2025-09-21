import AppCard from "@/components/app-card";
import ErrorScreen from "@/shared/error-screen";
import LoadingScreen from "@/shared/loading-screen";
import { useOrdersPageContext } from "../contexts/order-page-context";
import OrderHeader from "./order-header";
import OrdersList from "./orders-list";

export default function OrdersPanel() {
  const { query } = useOrdersPageContext();
  console.log(query.error);

  if (query.isLoading) {
    return (
      <AppCard className="w-full h-full">
        <LoadingScreen
          title="Getting orders"
          subtitle="Just a sec"
          className="h-full self-stretch"
        />
      </AppCard>
    );
  }
  if (query.isError) {
    return (
      <ErrorScreen title="Unable to get stats" subtitle="Try again later" />
    );
  }

  if (!query.isSuccess) {
    return null;
  }

  return (
    <div className="space-y-4">
      <p className="text-[14px] font-semibold">Order List</p>
      <OrderHeader />
      <OrdersList orders={query.data} />
    </div>
  );
}
