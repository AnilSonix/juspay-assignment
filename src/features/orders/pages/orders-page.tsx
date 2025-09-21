import OrdersPanel from "../orders-list/components/orders-panel";
import { OrdersPageProvider } from "../orders-list/contexts/order-page-context";

export default function OrdersPage() {
  return (
    <OrdersPageProvider>
      <OrdersPanel />
    </OrdersPageProvider>
  );
}
