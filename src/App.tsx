import '@/assets/css/global.css';
import { PrivateRoute } from '@/components/common/PrivateRoute';
import { Toaster } from '@/components/common/Toaster';

import { DashboardPage } from '@/pages/DashboardPage';
import { SignInPage } from '@/pages/SignInPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Router */}
      <BrowserRouter>
        <Routes>
          {/* Public routes. Authentication is not required */}
          <Route
            path="/"
            element={<SignInPage />}
          />

          {/* Private routes. Authentication is required */}
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<DashboardPage />} />}
          />
        </Routes>
      </BrowserRouter>

      {/* Addons */}
      <Toaster />
    </QueryClientProvider>
  );
};
