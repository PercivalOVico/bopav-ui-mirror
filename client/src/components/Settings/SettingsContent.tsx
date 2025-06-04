
import { SettingsSection } from '@/pages/Settings';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface SettingsContentProps {
  activeSection: SettingsSection;
}

export const SettingsContent = ({ activeSection }: SettingsContentProps) => {
  const renderContent = () => {
    switch (activeSection) {
      case 'activity-log':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Activity log</h2>
              <p className="text-gray-400">Review and manage your activity on the platform.</p>
            </div>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Recent Activity</CardTitle>
                <CardDescription>Your recent posts, comments, and interactions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Posts you've made</span>
                  <Button variant="outline" size="sm">View</Button>
                </div>
                <Separator className="bg-gray-700" />
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Comments and reactions</span>
                  <Button variant="outline" size="sm">View</Button>
                </div>
                <Separator className="bg-gray-700" />
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Search history</span>
                  <Button variant="outline" size="sm">Clear</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'profile-visibility':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Profile visibility</h2>
              <p className="text-gray-400">Control who can see your profile and information.</p>
            </div>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Who can see your profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-300">Profile picture</span>
                    <p className="text-sm text-gray-500">Who can see your profile picture</p>
                  </div>
                  <Badge variant="secondary">Public</Badge>
                </div>
                <Separator className="bg-gray-700" />
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-300">Cover photo</span>
                    <p className="text-sm text-gray-500">Who can see your cover photo</p>
                  </div>
                  <Badge variant="secondary">Friends</Badge>
                </div>
                <Separator className="bg-gray-700" />
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-300">Bio</span>
                    <p className="text-sm text-gray-500">Who can see your bio</p>
                  </div>
                  <Badge variant="secondary">Friends</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Notifications</h2>
              <p className="text-gray-400">Choose what you want to be notified about.</p>
            </div>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Push Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-300">Comments on your posts</span>
                    <p className="text-sm text-gray-500">Get notified when someone comments</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator className="bg-gray-700" />
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-300">New messages</span>
                    <p className="text-sm text-gray-500">Get notified about new messages</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator className="bg-gray-700" />
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-300">Friend requests</span>
                    <p className="text-sm text-gray-500">Get notified about friend requests</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'dark-mode':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Dark mode</h2>
              <p className="text-gray-400">Choose your preferred theme.</p>
            </div>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Appearance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-300">Dark mode</span>
                    <p className="text-sm text-gray-500">Use dark theme across the app</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator className="bg-gray-700" />
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-300">Auto dark mode</span>
                    <p className="text-sm text-gray-500">Follow system setting</p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'privacy-policy':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Privacy Policy</h2>
              <p className="text-gray-400">Learn about how we collect, use, and protect your data.</p>
            </div>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-300 mb-4">
                    This Privacy Policy describes how we collect, use, and handle your information when you use our services.
                  </p>
                  <h3 className="text-white text-lg font-semibold mb-2">Information We Collect</h3>
                  <p className="text-gray-300 mb-4">
                    We collect information you provide directly to us, such as when you create an account, post content, or contact us.
                  </p>
                  <h3 className="text-white text-lg font-semibold mb-2">How We Use Your Information</h3>
                  <p className="text-gray-300 mb-4">
                    We use the information we collect to provide, maintain, and improve our services.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {activeSection.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </h2>
              <p className="text-gray-400">This section is currently under development.</p>
            </div>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardContent className="p-6">
                <p className="text-gray-300">
                  Settings and options for this section will be available soon.
                </p>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="p-6">
      {renderContent()}
    </div>
  );
};
