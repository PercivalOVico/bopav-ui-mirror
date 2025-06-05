
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";

export const UserProfileDropdown = () => {
  const [, navigate] = useLocation();
  const { toast } = useToast();

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

  return (
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
        className="w-64 bg-gray-800 border-gray-700 shadow-xl z-50"
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
  );
};
