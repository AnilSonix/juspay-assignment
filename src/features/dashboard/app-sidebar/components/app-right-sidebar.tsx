"use client";

import * as React from "react";

import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAppStore } from "../../stores/use-app-store";
import AppAsideBarContent from "./app-asidebar-content";

// This is sample data.

export function AppRightSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const isAsideBarOpen = useAppStore((s) => s.isAsideBarOpen);
  const isMobile = useIsMobile();
  const showAsideBar = isAsideBarOpen && !isMobile;

  if (!showAsideBar) {
    return null;
  }

  return (
    <Sidebar
      collapsible="none"
      className="sticky top-0 hidden h-svh border-l lg:flex"
      {...props}
      style={
        {
          "--sidebar-width": "280px",
        } as React.CSSProperties
      }
    >
      <SidebarContent className=" h-screen overflow-y-auto">
        <AppAsideBarContent />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
