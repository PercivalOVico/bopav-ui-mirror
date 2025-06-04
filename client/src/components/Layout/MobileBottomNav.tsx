
import { Search, ShoppingCart, Home, Plus, Wallet } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

export const MobileBottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      icon: Search,
      label: "Search",
      path: "/search",
      onClick: () => navigate("/posts"), // Using posts as search for now
    },
    {
      icon: ShoppingCart,
      label: "Cart",
      path: "/cart",
      onClick: () => navigate("/cart"),
      badge: 2,
    },
    {
      icon: Home,
      label: "Home",
      path: "/",
      onClick: () => navigate("/"),
    },
    {
      icon: Plus,
      label: "Add Post",
      path: "/add-post",
      onClick: () => navigate("/posts"),
      isSpecial: true,
    },
    {
      icon: Wallet,
      label: "Wallet",
      path: "/wallet",
      onClick: () => navigate("/wallet"),
    },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-t border-gray-700/30">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <button
              key={item.label}
              onClick={item.onClick}
              className={`flex flex-col items-center justify-center min-w-0 flex-1 py-2 px-1 relative ${
                item.isSpecial
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-3 mx-2 shadow-lg"
                  : active
                  ? "text-purple-400"
                  : "text-gray-400 hover:text-white"
              } transition-colors`}
            >
              <div className="relative">
                <Icon 
                  className={`${
                    item.isSpecial ? "h-6 w-6 text-white" : "h-6 w-6"
                  }`} 
                />
                {item.badge && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-[16px] h-[16px] flex items-center justify-center p-0">
                    {item.badge}
                  </Badge>
                )}
              </div>
              {!item.isSpecial && (
                <span className="text-xs mt-1 truncate max-w-full">
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
