import React from 'react';
import { SidebarHeader } from '@/components/ui/sidebar';

interface SidebarProfileProps {
  name: string;
  username: string;
  avatar: string;
  isOnline?: boolean;
}

export const SidebarProfile = React.memo(({ name, username, avatar, isOnline = true }: SidebarProfileProps) => {
  return (
    <SidebarHeader className="p-6 border-b border-gray-700/30 bg-slate-800">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <img 
            src={avatar} 
            alt="Profile" 
            className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30" 
          />
          {isOnline && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
          )}
        </div>
        <div>
          <h3 className="text-white font-semibold">{name}</h3>
          <p className="text-gray-400 text-sm">@{username}</p>
        </div>
      </div>
    </SidebarHeader>
  );
});

SidebarProfile.displayName = 'SidebarProfile';