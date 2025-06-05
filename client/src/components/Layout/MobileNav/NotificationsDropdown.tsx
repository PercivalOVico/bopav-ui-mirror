
import { Bell } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export const NotificationsDropdown = () => {
  const { toast } = useToast();

  const mockNotifications = [
    { id: 1, title: "New message from John", time: "2m ago" },
    { id: 2, title: "Your post got 10 likes", time: "5m ago" },
    { id: 3, title: "Weekly summary ready", time: "1h ago" },
  ];

  return (
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
        className="w-80 bg-gray-800 border-gray-700 shadow-xl max-h-96 overflow-y-auto z-50"
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
  );
};
