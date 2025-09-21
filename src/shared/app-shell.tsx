import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { type PropsWithChildren, type ReactNode } from "react";

type Props = {
  TopHeader: ReactNode;
  LeftSideBar: ReactNode;
  RightSidebar: ReactNode;
};

export default function AppShell({
  TopHeader,
  LeftSideBar,
  RightSidebar,
  children,
}: PropsWithChildren<Props>) {
  return (
    <>
      <SidebarProvider>
        {LeftSideBar}
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b">
            <div className="flex items-center gap-2 px-4  w-full">
              <SidebarTrigger className="-ml-1" />
              {TopHeader}
            </div>
          </header>
          <main className="p-7 overflow-y-auto max-h-full">
            <div>{children}</div>
          </main>
        </SidebarInset>
        {RightSidebar}
      </SidebarProvider>
    </>
  );
}
