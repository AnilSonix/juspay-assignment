import SearchButton from "@/components/search-button";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import DarkModeToggleButton from "@/features/theme/dark-mode-switcher/components/dark-mode-toggle-button";
import { Bell, History, Sidebar, Star } from "lucide-react";
import AppAsideBar from "../../app-sidebar/components/app-asidebar";
import { useAppStore } from "../../stores/use-app-store";

import ActivitiesSheet from "@/features/activities/activities-list/components/activities-sheet";
import ContactsShet from "@/features/contacts/contacts-list/components/contacts-sheet";
import NotificationsShet from "@/features/notifications/notifications-list/components/notifications-sheet";
import ThemeSwitcherSheet from "@/features/theme/dark-mode-switcher/components/theme-switcher-sheet";
import { useState } from "react";
import AppHeaderMenu from "./app-header-menu";

export default function AppHeader() {
  const toggleAsideBar = useAppStore((s) => s.toggleAsideBar);
  const isAsideBarOpen = useAppStore((s) => s.isAsideBarOpen);
  const openAsideBar = useAppStore((s) => s.openAsideBar);

  const [themeOpened, setThemeOpened] = useState(false);
  const [notificationsOpened, setNotificationsOpened] = useState(false);
  const [activitiesOpened, setActivitiesOpened] = useState(false);
  const [contactsOpened, setContactsOpened] = useState(false);

  return (
    <div className="flex gap-0.5 items-center flex-1">
      <Button variant={"ghost"}>
        <Star />
      </Button>
      <div className="flex items-center gap-2">
        <p className="text-[14px] text-gray-400">Dashboard</p>
        <p className="text-[14px] text-gray-400">/</p>
        <p className="text-[14px]">Default</p>
      </div>
      <div className="flex gap-1 ml-auto">
        <div className="hidden md:block">
          <SearchButton />
        </div>
        <AppAsideBar />
        <DarkModeToggleButton />
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={"ghost"}
              onClick={openAsideBar}
              className="hidden md:block"
            >
              <History />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Activities</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={"ghost"}
              onClick={openAsideBar}
              className="hidden md:block"
            >
              <Bell />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Notifications</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={"ghost"}
              onClick={() => setNotificationsOpened(true)}
              className="block md:hidden"
            >
              <Bell />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Notifications</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={"ghost"}
              onClick={toggleAsideBar}
              className="hidden md:block"
            >
              <Sidebar />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{isAsideBarOpen ? "Close " : "Open "} sidebar</p>
          </TooltipContent>
        </Tooltip>
        <AppHeaderMenu
          onActivitiesSelect={() => setActivitiesOpened(true)}
          onThemeSelect={() => setThemeOpened(true)}
          onContactSelect={() => setContactsOpened(true)}
        />
        <ThemeSwitcherSheet open={themeOpened} onOpenChange={setThemeOpened} />
        <ActivitiesSheet
          open={activitiesOpened}
          onOpenChange={setActivitiesOpened}
        />
        <ContactsShet open={contactsOpened} onOpenChange={setContactsOpened} />
        <NotificationsShet
          open={notificationsOpened}
          onOpenChange={setNotificationsOpened}
        />
      </div>
    </div>
  );
}
