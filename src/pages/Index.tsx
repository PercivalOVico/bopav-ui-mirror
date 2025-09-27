
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import { PageContainer } from '@/components/layout/PageContainer';

const Index = React.memo(() => {
  return (
    <PageContainer withErrorBoundary={false} padding={false}>
      <Navigation />
      <Hero />
      <Features />
      <Footer />
    </PageContainer>
  );
});

Index.displayName = 'Index';

export default Index;
