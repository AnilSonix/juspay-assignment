import AppShell from "@/shared/app-shell";
import { Outlet } from "react-router";
import AppHeader from "../app-header/components/app-header";
import { AppLeftSidebar } from "../app-sidebar/components/app-left-sidebar";
import { AppRightSidebar } from "../app-sidebar/components/app-right-sidebar";

export default function DashboardPage() {
  return (
    <AppShell
      LeftSideBar={<AppLeftSidebar />}
      TopHeader={<AppHeader />}
      RightSidebar={<AppRightSidebar />}
    >
      <Outlet />
    </AppShell>
  );
}
