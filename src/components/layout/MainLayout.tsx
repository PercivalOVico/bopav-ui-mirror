import React from 'react';
import { motion } from 'framer-motion';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { RightSidebar } from '@/components/RightSidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = React.memo(({ children }: MainLayoutProps) => {
  return (
    <SidebarProvider>
      <motion.div 
        className="min-h-screen flex w-full bg-gradient-to-br from-background via-accent/5 to-primary/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Sidebar - Hidden on mobile */}
        <motion.div 
          className="hidden lg:block w-64 fixed left-0 top-0 h-full z-40"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <AppSidebar />
        </motion.div>
        
        {/* Center content with responsive margins */}
        <motion.div 
          className="flex-1 lg:ml-64 lg:mr-80 mx-0"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {children}
        </motion.div>
        
        {/* Right Sidebar - Hidden on mobile */}
        <motion.div 
          className="hidden lg:block w-80 fixed right-0 top-0 h-full z-40"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <RightSidebar />
        </motion.div>
      </motion.div>
    </SidebarProvider>
  );
});

MainLayout.displayName = 'MainLayout';