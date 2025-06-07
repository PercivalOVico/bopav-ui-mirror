import { MessagesDropdown } from "@/components/Layout/MobileNav/MessagesDropdown";
import { NotificationsDropdown } from "@/components/Layout/MobileNav/NotificationsDropdown";
import { MenuDropdown } from "@/components/Layout/MobileNav/MenuDropdown";
import { UserProfileDropdown } from "@/components/Layout/MobileNav/UserProfileDropdown";

export const MobileNav = () => {
  return (
    <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md border-b border-gray-700/30" style={{ position: 'fixed' }}>
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo and Menu */}
        <div className="flex items-center space-x-3">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            BBROKER
          </span>
          <MenuDropdown />
        </div>

        {/* Right side icons and profile */}
        <div className="flex items-center space-x-3">
          <MessagesDropdown />
          <NotificationsDropdown />
          <UserProfileDropdown />
        </div>
      </div>
    </nav>
  );
};
