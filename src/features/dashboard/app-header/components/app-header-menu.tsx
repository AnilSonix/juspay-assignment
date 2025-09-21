import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
type Props = {
  onThemeSelect: VoidFunction;
  onContactSelect: VoidFunction;
  onActivitiesSelect: VoidFunction;
};

export default function AppHeaderMenu({
  onThemeSelect,
  onContactSelect,
  onActivitiesSelect,
}: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} className="block md:hidden">
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mr-3">
        <DropdownMenuLabel>JUSPAY</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={onThemeSelect}>Theme</DropdownMenuItem>
        <DropdownMenuItem onClick={onContactSelect}>Contacts</DropdownMenuItem>
        <DropdownMenuItem onClick={onActivitiesSelect}>
          Activities
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
