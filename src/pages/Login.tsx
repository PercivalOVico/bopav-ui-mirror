
import React from 'react';
import LoginForm from '@/components/LoginForm';
import { PageContainer } from '@/components/layout/PageContainer';

const Login = React.memo(() => {
  return (
    <PageContainer className="min-h-screen flex items-center justify-center" maxWidth="md">
      <LoginForm />
    </PageContainer>
  );
});

Login.displayName = 'Login';

export default Login;
