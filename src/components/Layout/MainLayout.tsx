
import { ReactNode } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { RightSidebar } from "@/components/RightSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex w-full">
        <AppSidebar />
        
        <main className="flex-1 ml-64 mr-80 p-6 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
        
        <RightSidebar />
      </div>
    </SidebarProvider>
  );
}
