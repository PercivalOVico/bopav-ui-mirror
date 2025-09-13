
import React from "react";
import { motion } from "framer-motion";
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
    <Sidebar className="border-r border-sidebar-border bg-sidebar/90 backdrop-blur-md fixed h-screen w-64 left-0 top-0 z-40">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <SidebarProfile 
          name={PROFILE_DATA.name}
          username={PROFILE_DATA.username}
          avatar={PROFILE_DATA.avatar}
        />
      </motion.div>
      
      <SidebarContent className="px-4 overflow-hidden bg-sidebar/90">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {MENU_ITEMS.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  >
                    <SidebarMenuItem
                      item={item}
                      isActive={isActive}
                      onClick={() => handleNavigation(item.path)}
                    />
                  </motion.div>
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
