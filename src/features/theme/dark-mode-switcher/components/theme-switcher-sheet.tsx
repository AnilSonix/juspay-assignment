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
import { useTheme } from "../../contexts/theme-provider";

type Props = {} & React.ComponentProps<typeof DrawerPrimitive.Root>;

export default function ThemeSwitcherSheet({ ...props }: Props) {
  const { setTheme } = useTheme();

  return (
    <Drawer {...props}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Change theme</DrawerTitle>
        </DrawerHeader>
        <DrawerClose asChild>
          <div className="flex flex-col gap-2">
            <Button onClick={() => setTheme("light")} variant={"ghost"}>
              Light
            </Button>
            <Button onClick={() => setTheme("dark")} variant={"ghost"}>
              Dark
            </Button>
            <Button onClick={() => setTheme("system")} variant={"ghost"}>
              System
            </Button>
          </div>
        </DrawerClose>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
