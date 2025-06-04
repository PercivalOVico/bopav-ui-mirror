
import { MessageCircle, Bell, MoreVertical, Settings, HelpCircle, LogOut } from "lucide-react";
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

  const mockNotifications = [
    { id: 1, title: "New message from John", time: "2m ago" },
    { id: 2, title: "Your post got 10 likes", time: "5m ago" },
    { id: 3, title: "Weekly summary ready", time: "1h ago" },
  ];

  const mockMessages = [
    { id: 1, user: "John Doe", message: "Hey, how are you?", time: "2m ago", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" },
    { id: 2, user: "Sarah Smith", message: "Thanks for the help!", time: "10m ago", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1e0?w=32&h=32&fit=crop&crop=face" },
    { id: 3, user: "Mike Johnson", message: "See you tomorrow", time: "1h ago", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" },
  ];

  return (
    <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-gray-700/30">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo and Menu */}
        <div className="flex items-center space-x-3">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            BBROKER
          </span>
          
          {/* Three Dots Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 text-gray-300 hover:text-white transition-colors">
                <MoreVertical className="h-5 w-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="start" 
              className="w-56 bg-gray-800 border-gray-700 shadow-xl"
              sideOffset={8}
            >
              <DropdownMenuItem 
                onClick={() => navigate("/posts")}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer text-sm text-white"
              >
                Posts
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => navigate("/wallet")}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer text-sm text-white"
              >
                Wallet
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => navigate("/settings")}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer text-sm text-white"
              >
                <Settings className="h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-700" />
              <DropdownMenuItem 
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer text-sm text-white"
              >
                <HelpCircle className="h-4 w-4" />
                Help & Support
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Right side icons and profile */}
        <div className="flex items-center space-x-3">
          {/* Messages Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="relative p-2 text-gray-300 hover:text-white transition-colors">
                <MessageCircle className="h-6 w-6" />
                <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs min-w-[18px] h-[18px] flex items-center justify-center p-0">
                  6
                </Badge>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="w-80 bg-gray-800 border-gray-700 shadow-xl max-h-96 overflow-y-auto"
              sideOffset={8}
            >
              <div className="p-3 border-b border-gray-700">
                <h3 className="text-white font-semibold">Messages</h3>
              </div>
              {mockMessages.map((message) => (
                <DropdownMenuItem 
                  key={message.id}
                  onClick={handleMessagesClick}
                  className="flex items-start gap-3 p-3 hover:bg-gray-700 cursor-pointer"
                >
                  <img 
                    src={message.avatar} 
                    alt={message.user} 
                    className="w-8 h-8 rounded-full object-cover flex-shrink-0" 
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-medium text-sm truncate">{message.user}</div>
                    <div className="text-gray-400 text-xs truncate">{message.message}</div>
                    <div className="text-gray-500 text-xs">{message.time}</div>
                  </div>
                </DropdownMenuItem>
              ))}
              <div className="p-3 border-t border-gray-700">
                <button 
                  onClick={handleMessagesClick}
                  className="w-full text-center text-purple-400 text-sm hover:text-purple-300"
                >
                  View all messages
                </button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Notifications Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="relative p-2 text-gray-300 hover:text-white transition-colors">
                <Bell className="h-6 w-6" />
                <Badge className="absolute -top-1 -right-1 bg-red-500 text-white text-xs min-w-[18px] h-[18px] flex items-center justify-center p-0">
                  3
                </Badge>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="w-80 bg-gray-800 border-gray-700 shadow-xl max-h-96 overflow-y-auto"
              sideOffset={8}
            >
              <div className="p-3 border-b border-gray-700">
                <h3 className="text-white font-semibold">Notifications</h3>
              </div>
              {mockNotifications.map((notification) => (
                <DropdownMenuItem 
                  key={notification.id}
                  className="flex items-start gap-3 p-3 hover:bg-gray-700 cursor-pointer"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <div className="text-white text-sm">{notification.title}</div>
                    <div className="text-gray-500 text-xs">{notification.time}</div>
                  </div>
                </DropdownMenuItem>
              ))}
              <div className="p-3 border-t border-gray-700">
                <button 
                  onClick={() => toast({ title: "All notifications", description: "Showing all notifications" })}
                  className="w-full text-center text-purple-400 text-sm hover:text-purple-300"
                >
                  View all notifications
                </button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

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
