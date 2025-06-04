
import { ReactNode } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/Layout/AppSidebar';
import { RightSidebar } from '@/components/Layout/RightSidebar';
import { MobileNav } from '@/components/Layout/MobileNav';

interface MainLayoutProps {
  children: ReactNode;
  showRightSidebar?: boolean;
}

export const MainLayout = ({ children, showRightSidebar = true }: MainLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
        {/* Mobile Navigation */}
        <MobileNav />
        
        {/* Left Sidebar - Hidden on mobile */}
        <div className="hidden lg:block w-64 fixed left-0 top-0 h-full">
          <AppSidebar />
        </div>
        
        {/* Center content with responsive margins */}
        <div className={`flex-1 lg:ml-64 ${showRightSidebar ? 'lg:mr-80' : ''} mx-0 pt-16 lg:pt-0`}>
          {children}
        </div>
        
        {/* Right Sidebar - Hidden on mobile, conditionally rendered */}
        {showRightSidebar && (
          <div className="hidden lg:block w-80 fixed right-0 top-0 h-full">
            <RightSidebar />
          </div>
        )}
      </div>
    </SidebarProvider>
  );
};
