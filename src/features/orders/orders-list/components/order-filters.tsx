import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ListFilter } from "lucide-react";
import { useOrdersPageContext } from "../contexts/order-page-context";

const allFields = [
  {
    value: "deliveryAddress",
    label: "Address",
  },
  {
    value: "createdAt",
    label: "Date",
  },
];

export default function OrderFilter() {
  const { fields, toggleField } = useOrdersPageContext();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <ListFilter />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          {allFields.map((f) => (
            <div className="flex items-center gap-3" key={f.value}>
              <Checkbox
                id={f.value}
                checked={fields.includes(f.value)}
                onCheckedChange={() => toggleField(f.value)}
              />
              <Label htmlFor={f.value}>{f.label}</Label>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
