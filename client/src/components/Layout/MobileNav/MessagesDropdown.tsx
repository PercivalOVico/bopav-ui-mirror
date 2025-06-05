
import { MessageCircle } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";

export const MessagesDropdown = () => {
  const [, navigate] = useLocation();

  const handleMessagesClick = () => {
    navigate("/messages");
  };

  const mockMessages = [
    { id: 1, user: "John Doe", message: "Hey, how are you?", time: "2m ago", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" },
    { id: 2, user: "Sarah Smith", message: "Thanks for the help!", time: "10m ago", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1e0?w=32&h=32&fit=crop&crop=face" },
    { id: 3, user: "Mike Johnson", message: "See you tomorrow", time: "1h ago", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" },
  ];

  return (
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
        className="w-80 bg-gray-800 border-gray-700 shadow-xl max-h-96 overflow-y-auto z-50"
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
  );
};
