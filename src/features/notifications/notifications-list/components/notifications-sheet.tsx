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
import NotificationsPanel from "./notifications-panel";

type Props = {} & React.ComponentProps<typeof DrawerPrimitive.Root>;

export default function NotificationsShet({ ...props }: Props) {
  return (
    <Drawer {...props}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Recent notifications</DrawerTitle>
        </DrawerHeader>
        <div className="px-4">
          <NotificationsPanel />
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
