import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";

type Props = {
  orderId: string;
};

export default function OrderMenu({ orderId }: Props) {
  console.log("use order id for later api calls", orderId);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant={"ghost"}>
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>View</DropdownMenuItem>
        <DropdownMenuItem>Contact</DropdownMenuItem>
        <DropdownMenuItem>Logistics</DropdownMenuItem>
        <DropdownMenuItem variant="destructive">Cancel Order</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
