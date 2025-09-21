import CopyButton from "@/components/copy-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { TableCell, TableRow } from "@/components/ui/table";
import HumanizeTime from "@/shared/humanize-time";
import { Calendar } from "lucide-react";
import type { Order } from "../utils/get-orders";
import OrderBadge from "./order-badge";
import OrderMenu from "./order-menu";

type OrderItemProps = {
  order: Order;
};

export default function OrderItem({ order }: OrderItemProps) {
  return (
    <TableRow key={order.id} className="has-data-[state=checked]:bg-muted/50">
      <TableCell>
        <Checkbox id={`table-checkbox-${order.id}`} />
      </TableCell>
      <TableCell className="uppercase">#{order.id}</TableCell>
      <TableCell>
        <div className="flex gap-2 items-center">
          <Avatar className="w-6 h-6">
            <AvatarImage src={order.customer.avatar} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {order.customer.fullName}
        </div>
      </TableCell>
      <TableCell>{order.projectName}</TableCell>
      <TableCell>
        <div className="flex items-center gap-2 group">
          {order.deliveryAddress}
          <CopyButton
            content={order.deliveryAddress}
            className="transition-opacity duration-100 opacity-0 group-hover:opacity-100"
          />
        </div>
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <Calendar size={16} />
          <HumanizeTime dateString={order.createdAt} />
        </div>
      </TableCell>
      <TableCell>
        <OrderBadge status={order.status} />
      </TableCell>
      <TableCell>
        <OrderMenu orderId={order.id} />
      </TableCell>
    </TableRow>
  );
}
