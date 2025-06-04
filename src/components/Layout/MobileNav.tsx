
import { MessageCircle, Bell } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export const MobileNav = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleMessagesClick = () => {
    navigate("/messages");
  };

  const handleNotificationsClick = () => {
    toast({
      title: "Notifications",
      description: "No new notifications",
    });
  };

  const handleSignOut = () => {
    toast({
      title: "Signed out successfully",
      description: "You have been logged out of your account.",
    });
    navigate("/");
  };

  return (
    <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-gray-700/30">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            BBROKER
          </span>
        </div>

        {/* Right side icons and profile */}
        <div className="flex items-center space-x-3">
          {/* Messages */}
          <button
            onClick={handleMessagesClick}
            className="relative p-2 text-gray-300 hover:text-white transition-colors"
          >
            <MessageCircle className="h-6 w-6" />
            <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs min-w-[18px] h-[18px] flex items-center justify-center p-0">
              6
            </Badge>
          </button>

          {/* Notifications */}
          <button
            onClick={handleNotificationsClick}
            className="relative p-2 text-gray-300 hover:text-white transition-colors"
          >
            <Bell className="h-6 w-6" />
            <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs min-w-[18px] h-[18px] flex items-center justify-center p-0">
              3
            </Badge>
          </button>

          {/* User Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center space-x-2 hover:bg-gray-800/50 rounded-lg p-1 transition-colors">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
                    alt="Profile" 
                    className="w-8 h-8 rounded-full object-cover border-2 border-purple-500/30" 
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border border-gray-900"></div>
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="w-64 bg-gray-800 border-gray-700 shadow-xl"
              sideOffset={8}
            >
              <div className="p-2">
                <DropdownMenuItem 
                  onClick={handleProfileClick}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" 
                    alt="Profile" 
                    className="w-8 h-8 rounded-full object-cover" 
                  />
                  <div>
                    <div className="text-white font-semibold text-sm">Bogdan Nikitin</div>
                    <div className="text-gray-400 text-xs">@nikitinteam</div>
                  </div>
                </DropdownMenuItem>
              </div>

              <DropdownMenuSeparator className="bg-gray-700" />

              <div className="p-2">
                <DropdownMenuItem 
                  onClick={() => navigate("/settings")}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer text-sm"
                >
                  <span className="text-white">Settings</span>
                </DropdownMenuItem>
                
                <DropdownMenuItem 
                  onClick={handleSignOut}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer text-sm"
                >
                  <span className="text-white">Sign Out</span>
                </DropdownMenuItem>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};
