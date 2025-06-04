
import { Search, List, Cube, Briefcase, HelpCircle, FileText, Shield, Cookie, Users, Eye, User, UserPlus, MessageSquare, Camera, Film, Plus, Tag, UserX, CreditCard, ShieldCheck, Home, Settings, Smile, Bell, Accessibility, Globe, Image, Moon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { SettingsSection } from '@/pages/Settings';
import { useState } from 'react';

interface SettingsNavProps {
  activeSection: SettingsSection;
  onSectionChange: (section: SettingsSection) => void;
}

export const SettingsNav = ({ activeSection, onSectionChange }: SettingsNavProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const menuSections = [
    {
      title: "Your activity",
      description: "Review your activity and content you're tagged in.",
      items: [
        { id: 'activity-log' as SettingsSection, label: 'Activity log', icon: List },
        { id: 'apps-websites' as SettingsSection, label: 'Apps and websites', icon: Cube },
        { id: 'business-integrations' as SettingsSection, label: 'Business integrations', icon: Briefcase },
        { id: 'manage-info' as SettingsSection, label: 'Learn how to manage your information', icon: HelpCircle },
        { id: 'reactivate-page' as SettingsSection, label: 'Reactivate a Page', icon: FileText },
      ]
    },
    {
      title: "Community Standards and legal policies",
      description: "",
      items: [
        { id: 'terms-service' as SettingsSection, label: 'Terms of Service', icon: FileText },
        { id: 'privacy-policy' as SettingsSection, label: 'Privacy Policy', icon: Shield },
        { id: 'cookies-policy' as SettingsSection, label: 'Cookies policy', icon: Cookie },
        { id: 'community-standards' as SettingsSection, label: 'Community Standards', icon: Users },
      ]
    },
    {
      title: "Audience and visibility",
      description: "Control who can see what you share on Facebook.",
      items: [
        { id: 'profile-visibility' as SettingsSection, label: 'Profile visibility', icon: Eye },
        { id: 'profile-details' as SettingsSection, label: 'Profile details', icon: User },
        { id: 'contact-you' as SettingsSection, label: 'How people find and contact you', icon: UserPlus },
        { id: 'posts' as SettingsSection, label: 'Posts', icon: MessageSquare },
        { id: 'stories' as SettingsSection, label: 'Stories', icon: Camera },
        { id: 'reels' as SettingsSection, label: 'Reels', icon: Film },
        { id: 'followers-content' as SettingsSection, label: 'Followers and public content', icon: Plus },
        { id: 'profile-tagging' as SettingsSection, label: 'Profile and tagging', icon: Tag },
        { id: 'blocking' as SettingsSection, label: 'Blocking', icon: UserX },
      ]
    },
    {
      title: "Payments",
      description: "Manage your payment info and activity.",
      items: [
        { id: 'ads-payments' as SettingsSection, label: 'Ads payments', icon: CreditCard },
      ]
    },
    {
      title: "Tools and resources",
      description: "Our tools help you control and manage your privacy.",
      items: [
        { id: 'privacy-checkup' as SettingsSection, label: 'Privacy Checkup', icon: ShieldCheck },
        { id: 'family-center' as SettingsSection, label: 'Family Center', icon: Home },
        { id: 'audience-settings' as SettingsSection, label: 'Default audience settings', icon: Settings },
      ]
    },
    {
      title: "Preferences",
      description: "Customize your experience on Facebook.",
      items: [
        { id: 'reaction-preferences' as SettingsSection, label: 'Reaction preferences', icon: Smile },
        { id: 'notifications' as SettingsSection, label: 'Notifications', icon: Bell },
        { id: 'accessibility' as SettingsSection, label: 'Accessibility', icon: Accessibility },
        { id: 'language-region' as SettingsSection, label: 'Language and region', icon: Globe },
        { id: 'media' as SettingsSection, label: 'Media', icon: Image },
        { id: 'dark-mode' as SettingsSection, label: 'Dark mode', icon: Moon },
      ]
    }
  ];

  const filteredSections = menuSections.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.label.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  return (
    <div className="h-full flex flex-col">
      <div className="p-6 border-b border-gray-700/50">
        <h1 className="text-2xl font-bold text-white mb-4">Settings & privacy</h1>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search settings"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {filteredSections.map((section) => (
          <div key={section.title} className="mb-6">
            <div className="mb-3">
              <h3 className="text-white font-semibold text-lg">{section.title}</h3>
              {section.description && (
                <p className="text-gray-400 text-sm mt-1">{section.description}</p>
              )}
            </div>
            <div className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onSectionChange(item.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                      activeSection === item.id
                        ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30'
                        : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                    }`}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
