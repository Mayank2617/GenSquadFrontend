import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { ThemeProvider } from './hooks/useTheme';

// Lazy load pages
const Landing = lazy(() => import('./pages/Landing'));
const IndustryTemplate = lazy(() => import('./pages/IndustryTemplate')); // Import the new template

const AppRoutes = () => {
  return (
    <Router>
      <ThemeProvider>
        <Suspense fallback={<div className="flex h-screen items-center justify-center bg-black text-white">Loading...</div>}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Landing />} />
              
              {/* ✅ DYNAMIC INDUSTRY ROUTE */}
              <Route path="/use-cases/industry/:slug" element={<IndustryTemplate />} />
              
            </Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
    </Router>
  );
};

export default AppRoutes;