import { useState } from 'react';

import { MainLayout } from '@/components/Layout/MainLayout';
import { SettingsNav } from '@/components/Settings/SettingsNav';
import { SettingsContent } from '@/components/Settings/SettingsContent';

export type SettingsSection = 
  | 'activity-log'
  | 'apps-websites'
  | 'business-integrations'
  | 'manage-info'
  | 'reactivate-page'
  | 'terms-service'
  | 'privacy-policy'
  | 'cookies-policy'
  | 'community-standards'
  | 'profile-visibility'
  | 'profile-details'
  | 'contact-you'
  | 'posts'
  | 'stories'
  | 'reels'
  | 'followers-content'
  | 'profile-tagging'
  | 'blocking'
  | 'ads-payments'
  | 'privacy-checkup'
  | 'family-center'
  | 'audience-settings'
  | 'reaction-preferences'
  | 'notifications'
  | 'accessibility'
  | 'language-region'
  | 'media'
  | 'dark-mode';

const Settings = () => {
  const [activeSection, setActiveSection] = useState<SettingsSection>('activity-log');

  return (
    <MainLayout showRightSidebar={false}>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-md rounded-lg border border-gray-700/50 overflow-hidden">
            <div className="flex h-[calc(100vh-8rem)]">
              {/* Left Sidebar Navigation */}
              <div className="w-80 border-r border-gray-700/50 bg-gray-900/50">
                <SettingsNav 
                  activeSection={activeSection} 
                  onSectionChange={setActiveSection}
                />
              </div>
              
              {/* Main Content Area */}
              <div className="flex-1 overflow-y-auto">
                <SettingsContent activeSection={activeSection} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Settings;
