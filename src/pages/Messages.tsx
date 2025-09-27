
import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { PageLoader } from '@/components/common/PageLoader';

const Messages = React.memo(() => {
  return (
    <MainLayout>
      <PageLoader message="Messages feature coming soon..." />
    </MainLayout>
  );
});

Messages.displayName = 'Messages';


export default Messages;
