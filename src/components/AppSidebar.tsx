
import React from "react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu } from "@/components/ui/sidebar";
import { useNavigate, useLocation } from "react-router-dom";
import { SidebarMenuItem } from "@/components/sidebar/SidebarMenuItem";
import { SidebarProfile } from "@/components/sidebar/SidebarProfile";
import { MENU_ITEMS, PROFILE_DATA } from "@/data/constants";

export const AppSidebar = React.memo(() => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    if (path !== "#") {
      navigate(path);
    }
  };

  return (
    <Sidebar className="border-r border-gray-700/50 bg-gray-900/90 backdrop-blur-md fixed h-screen w-64 left-0 top-0 z-40">
      <SidebarProfile 
        name={PROFILE_DATA.name}
        username={PROFILE_DATA.username}
        avatar={PROFILE_DATA.avatar}
      />
      
      <SidebarContent className="px-4 overflow-hidden bg-gray-900/90">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {MENU_ITEMS.map(item => {
                const isActive = location.pathname === item.path;
                return (
                  <SidebarMenuItem
                    key={item.title}
                    item={item}
                    isActive={isActive}
                    onClick={() => handleNavigation(item.path)}
                  />
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
});

AppSidebar.displayName = 'AppSidebar';
