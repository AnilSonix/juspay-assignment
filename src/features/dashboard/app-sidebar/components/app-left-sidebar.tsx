"use client";

import {
  BookOpen,
  BookText,
  ChartPie,
  Contact,
  Folder,
  IdCard,
  List,
  MessageCircle,
  ShoppingBag,
  Users,
} from "lucide-react";
import * as React from "react";

import { NavMain, type Item } from "@/components/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import ListLink from "@/components/list-link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// This is sample data.
const dashboards: Item[] = [
  {
    title: "Default",
    url: "/dashboard/default",
    icon: ChartPie,
    isActive: true,
  },
  {
    title: "Orders",
    url: "/dashboard/orders",
    icon: List,
    isActive: true,
  },
  {
    title: "eCommerce",
    url: "#",
    icon: ShoppingBag,
    isActive: false,
    items: [
      {
        title: "Some menu",
        url: "#",
      },
      {
        title: "Another menu",
        url: "#",
      },
    ],
  },
  {
    title: "Projects",
    url: "#",
    icon: Folder,
    isActive: false,
    items: [
      {
        title: "Some menu",
        url: "#",
      },
      {
        title: "Another menu",
        url: "#",
      },
    ],
  },
  {
    title: "Online Courses",
    url: "#",
    icon: BookOpen,
    isActive: false,
    items: [
      {
        title: "Some menu",
        url: "#",
      },
      {
        title: "Another menu",
        url: "#",
      },
    ],
  },
];

const pages: Item[] = [
  {
    title: "User Profile",
    url: "#",
    icon: Contact,
    isActive: false,
    items: [
      {
        title: "Overview",
        url: "#",
      },
      {
        title: "Projects",
        url: "#",
      },
      {
        title: "Campaigns",
        url: "#",
      },
      {
        title: "Documents",
        url: "#",
      },
      {
        title: "Followers",
        url: "#",
      },
    ],
  },
  {
    title: "Account",
    url: "#",
    icon: IdCard,
    isActive: false,
    items: [
      {
        title: "Some menu",
        url: "#",
      },
      {
        title: "Another menu",
        url: "#",
      },
    ],
  },
  {
    title: "Corporate",
    url: "#",
    icon: Users,
    isActive: false,
    items: [
      {
        title: "Some menu",
        url: "#",
      },
      {
        title: "Another menu",
        url: "#",
      },
    ],
  },
  {
    title: "Blog",
    url: "#",
    icon: BookText,
    isActive: false,
    items: [
      {
        title: "Some menu",
        url: "#",
      },
      {
        title: "Another menu",
        url: "#",
      },
    ],
  },
  {
    title: "Social",
    url: "#",
    icon: MessageCircle,
    isActive: false,
    items: [
      {
        title: "Some menu",
        url: "#",
      },
      {
        title: "Another menu",
        url: "#",
      },
    ],
  },
];

export function AppLeftSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader className="text-[14px] pt-5 px-4">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/logo.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-[14]px">ByeWind</p>
        </div>
      </SidebarHeader>
      <SidebarContent className="text-[14px] px-4">
        <Tabs
          defaultValue="account"
          className="w-full group-data-[collapsible=icon]:hidden"
        >
          <TabsList className="">
            <TabsTrigger value="account">Featured</TabsTrigger>
            <TabsTrigger value="password">Recently</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <ListLink>Overview</ListLink>
            <ListLink>Projects</ListLink>
          </TabsContent>
          <TabsContent value="password">
            <ListLink>Apps</ListLink>
            <ListLink>Settings</ListLink>
          </TabsContent>
        </Tabs>
        <NavMain items={dashboards} title="Dashboards" />
        <NavMain items={pages} title="Pages" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
