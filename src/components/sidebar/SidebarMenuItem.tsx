import React from 'react';
import { SidebarMenuItem as SidebarMenuItemPrimitive, SidebarMenuButton } from '@/components/ui/sidebar';
import type { MenuItem } from '@/types';

interface SidebarMenuItemProps {
  item: MenuItem;
  isActive: boolean;
  onClick: () => void;
}

export const SidebarMenuItem = React.memo(({ item, isActive, onClick }: SidebarMenuItemProps) => {
  return (
    <SidebarMenuItemPrimitive>
      <SidebarMenuButton 
        onClick={onClick}
        className={`${
          isActive 
            ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30' 
            : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
        } transition-all duration-200 rounded-xl mb-2 relative cursor-pointer`}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <item.icon className="h-5 w-5" />
            <span className="font-medium">{item.title}</span>
          </div>
          {item.badge && (
            <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
              {item.badge}
            </span>
          )}
        </div>
      </SidebarMenuButton>
    </SidebarMenuItemPrimitive>
  );
});

SidebarMenuItem.displayName = 'SidebarMenuItem';