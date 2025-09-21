import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Drawer as DrawerPrimitive } from "vaul";
import ActivitiesPanel from "./activities-panel";

type Props = {} & React.ComponentProps<typeof DrawerPrimitive.Root>;

export default function ActivitiesSheet({ ...props }: Props) {
  return (
    <Drawer {...props}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Recent Activities</DrawerTitle>
        </DrawerHeader>
        <div className="px-4">
          <ActivitiesPanel />
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
