import { Calendar, Home, MessageCircle, Users, Image, Settings, Bell, Wallet, LogOut, ShoppingCart, ChevronDown, User, HelpCircle, Moon, MessageSquare } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter } from "@/components/ui/sidebar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";

const menuItems = [{
  title: "News Feed",
  icon: Home,
  path: "/posts"
}, {
  title: "Messages",
  icon: MessageCircle,
  badge: "6",
  path: "/messages"
}, {
  title: "Cart",
  icon: ShoppingCart,
  badge: "2",
  path: "/cart"
}, {
  title: "Wallet",
  icon: Wallet,
  path: "/wallet"
}, {
  title: "Forums",
  icon: Calendar,
  path: "#"
}, {
  title: "Friends",
  icon: Users,
  badge: "3",
  path: "#"
}, {
  title: "Media",
  icon: Image,
  path: "#"
}, {
  title: "Settings",
  icon: Settings,
  path: "/settings"
}];

export function AppSidebar() {
  const [location, navigate] = useLocation();
  const { toast } = useToast();

  const handleNavigation = (path: string) => {
    if (path !== "#") {
      navigate(path);
    }
  };

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleSignOut = () => {
    toast({
      title: "Signed out successfully",
      description: "You have been logged out of your account.",
    });
    navigate("/");
  };

  const handleSettingsClick = () => {
    navigate("/settings");
  };

  const handleHelpClick = () => {
    toast({
      title: "Help & Support",
      description: "Help documentation coming soon.",
    });
  };

  const handleDisplayClick = () => {
    toast({
      title: "Display & Accessibility",
      description: "Display settings coming soon.",
    });
  };

  const handleFeedbackClick = () => {
    toast({
      title: "Give Feedback",
      description: "Thank you for your interest in providing feedback!",
    });
  };

  return (
    <Sidebar className="border-r border-gray-700/50 bg-gray-900/90 backdrop-blur-md fixed h-screen w-64 left-0 top-0 z-40">
      <SidebarHeader className="p-6 border-b border-gray-700/30 bg-slate-800">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-800/50 rounded-lg p-2 transition-colors">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face" alt="Profile" className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold">Bogdan Nikitin</h3>
                <p className="text-gray-400 text-sm">@nikitinteam</p>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            align="start" 
            className="w-80 bg-gray-800 border-gray-700 shadow-xl"
            sideOffset={8}
          >
            {/* User Profiles Section */}
            <div className="p-2">
              <DropdownMenuItem 
                onClick={handleProfileClick}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer"
              >
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" alt="Profile" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-white font-semibold">Percival O Vico</div>
                </div>
              </DropdownMenuItem>
              
              <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" alt="Minnie" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-white font-semibold">Minnie's</div>
                </div>
              </DropdownMenuItem>
              
              <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" alt="School" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-white font-semibold">Lira Integrated Primary School</div>
                </div>
              </DropdownMenuItem>
              
              <DropdownMenuItem className="flex items-center justify-center gap-2 p-3 rounded-lg hover:bg-gray-700 cursor-pointer mt-2 bg-gray-700/50">
                <Users className="h-4 w-4 text-gray-300" />
                <span className="text-gray-300">See all profiles</span>
              </DropdownMenuItem>
            </div>

            <DropdownMenuSeparator className="bg-gray-700" />

            {/* Menu Options */}
            <div className="p-2">
              <DropdownMenuItem 
                onClick={handleSettingsClick}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer"
              >
                <Settings className="h-5 w-5 text-gray-300" />
                <span className="text-white">Settings & privacy</span>
                <div className="ml-auto">
                  <ChevronDown className="h-4 w-4 text-gray-400 rotate-[-90deg]" />
                </div>
              </DropdownMenuItem>
              
              <DropdownMenuItem 
                onClick={handleHelpClick}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer"
              >
                <HelpCircle className="h-5 w-5 text-gray-300" />
                <span className="text-white">Help & support</span>
                <div className="ml-auto">
                  <ChevronDown className="h-4 w-4 text-gray-400 rotate-[-90deg]" />
                </div>
              </DropdownMenuItem>
              
              <DropdownMenuItem 
                onClick={handleDisplayClick}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer"
              >
                <Moon className="h-5 w-5 text-gray-300" />
                <span className="text-white">Display & accessibility</span>
                <div className="ml-auto">
                  <ChevronDown className="h-4 w-4 text-gray-400 rotate-[-90deg]" />
                </div>
              </DropdownMenuItem>
              
              <DropdownMenuItem 
                onClick={handleFeedbackClick}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer"
              >
                <MessageSquare className="h-5 w-5 text-gray-300" />
                <div>
                  <div className="text-white">Give feedback</div>
                  <div className="text-xs text-gray-400">CTRL B</div>
                </div>
              </DropdownMenuItem>
              
              <DropdownMenuItem 
                onClick={handleSignOut}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer"
              >
                <LogOut className="h-5 w-5 text-gray-300" />
                <span className="text-white">Log Out</span>
              </DropdownMenuItem>
            </div>

            <DropdownMenuSeparator className="bg-gray-700" />

            {/* Footer Links */}
            <div className="p-2 text-xs text-gray-400">
              <div className="flex flex-wrap gap-1">
                <span>Privacy</span> · <span>Terms</span> · <span>Advertising</span> · <span>Ad Choices</span> · <span>Cookies</span> · <span>More</span> · <span>Meta © 2025</span>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarHeader>
      
      <SidebarContent className="px-4 overflow-hidden bg-gray-900/90">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map(item => {
                const isActive = location === item.path;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      onClick={() => handleNavigation(item.path)}
                      className={`${isActive ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30' : 'text-gray-300 hover:text-white hover:bg-gray-800/50'} transition-all duration-200 rounded-xl mb-2 relative cursor-pointer`}
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
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-gray-700/30">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton 
              onClick={handleSignOut}
              className="text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-200 rounded-xl cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <LogOut className="h-5 w-5" />
                <span className="font-medium">Sign Out</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
