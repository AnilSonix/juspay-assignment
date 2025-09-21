import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router";

export type Item = {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: SubItem[];
};

export type SubItem = {
  title: string;
  url: string;
};

type NavMainProps = {
  title: string;
  items: Item[];
};

export function NavMain({ title, items }: NavMainProps) {
  const { setOpenMobile } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) =>
          Number(item.items?.length) > 0 ? (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    <ChevronRight
                      className={cn([
                        "transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90",
                        item.items && item.items.length > 0 ? "" : "invisible",
                      ])}
                    />
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <NavLink
                        to={subItem.url}
                        end
                        onClick={() => setOpenMobile(false)}
                      >
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <span>{subItem.title}</span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      </NavLink>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ) : (
            <NavLink
              to={item.url}
              key={item.title}
              end
              onClick={() => setOpenMobile(false)}
            >
              {({ isActive }) => (
                <SidebarMenuButton
                  tooltip={item.title}
                  className="pl-8 flex items-center"
                  isActive={isActive}
                >
                  {isActive && (
                    <div className="w-1 h-4 bg-black dark:bg-[#C6C7F8] rounded-md absolute left-1.5"></div>
                  )}
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              )}
            </NavLink>
          )
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
}
