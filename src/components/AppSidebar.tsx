
import {
  Calendar,
  Home,
  MessageCircle,
  Users,
  Image,
  Settings,
  Bell
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar"

const menuItems = [
  {
    title: "News Feed",
    icon: Home,
    isActive: true,
  },
  {
    title: "Messages",
    icon: MessageCircle,
    badge: "6",
  },
  {
    title: "Forums",
    icon: Calendar,
  },
  {
    title: "Friends",
    icon: Users,
    badge: "3",
  },
  {
    title: "Media",
    icon: Image,
  },
  {
    title: "Settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-gray-700/50 bg-gray-900/90 backdrop-blur-md fixed h-screen w-64 left-0 top-0 z-40">
      <SidebarHeader className="p-6 border-b border-gray-700/30">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
          </div>
          <div>
            <h3 className="text-white font-semibold">Bogdan Nikitin</h3>
            <p className="text-gray-400 text-sm">@nikitinteam</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-4 overflow-hidden bg-gray-900/90">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className={`${
                      item.isActive 
                        ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30' 
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    } transition-all duration-200 rounded-xl mb-2 relative`}
                  >
                    <a href="#" className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-3">
                        <item.icon className="h-5 w-5" />
                        <span className="font-medium">{item.title}</span>
                      </div>
                      {item.badge && (
                        <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
