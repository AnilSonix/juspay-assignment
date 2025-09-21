import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAppStore } from "../../stores/use-app-store";
import AppAsideBarContent from "./app-asidebar-content";

export default function AppAsideBar() {
  const isAsideBarOpen = useAppStore((s) => s.isAsideBarOpen);
  const setIsAsideBarOpen = useAppStore((s) => s.setIsAsideBarOpen);

  const isMobile = useIsMobile();
  const showAsideBar = isAsideBarOpen && isMobile;

  if (!showAsideBar) {
    return null;
  }

  return (
    <Sheet open={isAsideBarOpen} onOpenChange={setIsAsideBarOpen}>
      <SheetContent className="w-[280px] overflow-y-auto">
        <AppAsideBarContent />
      </SheetContent>
    </Sheet>
  );
}
