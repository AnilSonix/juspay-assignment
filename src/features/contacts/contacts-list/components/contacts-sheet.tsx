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
import ContactsPanel from "./contacts-panel";

type Props = {} & React.ComponentProps<typeof DrawerPrimitive.Root>;

export default function ContactsShet({ ...props }: Props) {
  return (
    <Drawer {...props}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Contacts</DrawerTitle>
        </DrawerHeader>
        <div className="px-4">
          <ContactsPanel />
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
