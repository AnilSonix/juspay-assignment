import SearchInput from "@/components/search-input";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Plus } from "lucide-react";
import { useOrdersPageContext } from "../contexts/order-page-context";
import OrderFilter from "./order-filters";

export default function OrderHeader() {
  const { text, setText, query } = useOrdersPageContext();
  return (
    <div className="bg-neutral-100 dark:bg-neutral-900 rounded-sm p-2 flex justify-between">
      <div className="flex">
        <Button variant={"ghost"} size={"icon"}>
          <Plus />
        </Button>
        <OrderFilter />
        <Button variant={"ghost"} size={"icon"}>
          <ArrowUpDown />
        </Button>
      </div>
      <SearchInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        isLoading={query.isFetching}
      />
    </div>
  );
}
