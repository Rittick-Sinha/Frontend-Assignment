import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

import {
  LayoutDashboard,
  Activity,
  GitFork,
  Database,
  GitBranch,
  Eye,
  Shield,
  Users,
  Settings,
  HelpCircle,
  AlertTriangle,
  ChevronDown,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Link, useLocation } from "react-router-dom";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    title: "Observability",
    icon: Activity,
    hasSubmenu: true,
    submenuItems: [],
  },
  {
    title: "Traffic Management",
    icon: GitFork,
    hasSubmenu: true,
    submenuItems: [],
  },
  {
    title: "Visibility",
    icon: Eye,
    hasSubmenu: true,
    submenuItems: [
      { title: "Traffic Overview", href: "/visibility", icon: LayoutDashboard },
      { title: "Errors", href: "/errors", icon: AlertTriangle },
    ],
  },
  {
    title: "Security",
    icon: Shield,
    href: "/security",
  },
  {
    title: "Clusters",
    icon: Database,
    href: "/clusters",
  },
  {
    title: "Git Integration",
    icon: GitBranch,
    href: "/git",
  },
  {
    title: "User Management",
    icon: Users,
    href: "/users",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
  {
    title: "Help",
    icon: HelpCircle,
    href: "/help",
  },
];

export function DashboardSidebar() {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const isActive = (href?: string, submenuItems?: any[]) => {
    if (href) return location.pathname === href;
    if (submenuItems)
      return submenuItems.some((item) => location.pathname === item.href);
    return false;
  };

  const toggleMenu = (title: string) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <Sidebar className="border-r border-gray-200">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.hasSubmenu ? (
                    <Collapsible
                      open={
                        openMenus[item.title] !== undefined
                          ? openMenus[item.title]
                          : isActive(undefined, item.submenuItems)
                      }
                      onOpenChange={(isOpen) =>
                        setOpenMenus((prev) => ({
                          ...prev,
                          [item.title]: isOpen,
                        }))
                      }
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleMenu(item.title);
                          }}
                          className={`w-full justify-between rounded group transition-colors duration-150 ${
                            isActive(item.href, item.submenuItems)
                              ? "bg-blue-50 text-blue-700"
                              : "text-gray-500"
                          } hover:bg-blue-100 hover:text-blue-700`}
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="w-4 h-4" />
                            <span className="font-semibold">{item.title}</span>
                          </div>
                          <ChevronDown className="w-4 h-4" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>

                      <CollapsibleContent className="ml-6 mt-1">
                        {item.submenuItems?.map((subItem) => (
                          <div
                            key={subItem.title}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Link to={subItem.href}>
                              <div
                                className={`flex items-center gap-2 text-sm py-1 px-2 rounded transition-colors duration-150 ${
                                  location.pathname === subItem.href
                                    ? "bg-blue-50 text-blue-700"
                                    : "text-gray-500"
                                } hover:bg-blue-100 hover:text-blue-700`}
                              >
                                {subItem.icon && (
                                  <subItem.icon className="w-4 h-4" />
                                )}
                                <span className="font-semibold">
                                  {subItem.title}
                                </span>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton
                      className={`rounded group transition-colors duration-150 ${
                        isActive(item.href)
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-500"
                      } hover:bg-blue-100 hover:text-blue-700`}
                      asChild
                    >
                      <Link to={item.href || "#"}>
                        <div className="flex items-center gap-3">
                          <item.icon className="w-4 h-4" />
                          <span className="font-semibold">{item.title}</span>
                        </div>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}

              <SidebarFooter className="p-4 border-t border-gray-200 mt-4">
                <div className="text-xs text-gray-500">
                  © 2024 Istio Manager
                  <br />
                  Version 1.0.0
                </div>
              </SidebarFooter>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
