import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { RightSidebar } from '@/components/RightSidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = React.memo(({ children }: MainLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        {/* Left Sidebar - Hidden on mobile */}
        <div className="hidden lg:block w-64 fixed left-0 top-0 h-full">
          <AppSidebar />
        </div>
        
        {/* Center content with responsive margins */}
        <div className="flex-1 lg:ml-64 lg:mr-80 mx-0">
          {children}
        </div>
        
        {/* Right Sidebar - Hidden on mobile */}
        <div className="hidden lg:block w-80 fixed right-0 top-0 h-full">
          <RightSidebar />
        </div>
      </div>
    </SidebarProvider>
  );
});

MainLayout.displayName = 'MainLayout';