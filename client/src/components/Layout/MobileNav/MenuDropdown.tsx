
import { MoreVertical, Settings, HelpCircle } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useLocation } from "wouter";

export const MenuDropdown = () => {
  const [, navigate] = useLocation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2 text-gray-300 hover:text-white transition-colors">
          <MoreVertical className="h-5 w-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start" 
        className="w-56 bg-gray-800 border-gray-700 shadow-xl z-50"
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
  );
};
