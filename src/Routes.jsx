import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { ThemeProvider } from './hooks/useTheme';

// Lazy load pages
const Landing = lazy(() => import('./pages/Landing'));
const IndustryTemplate = lazy(() => import('./pages/IndustryTemplate'));
const SolutionTemplate = lazy(() => import('./pages/SolutionTemplate')); // Import the new page

const AppRoutes = () => {
  return (
    <Router>
      <ThemeProvider>
        <Suspense fallback={<div className="flex h-screen items-center justify-center bg-black text-white">Loading...</div>}>
          <Routes>
            
            {/* 🟢 MAIN LAYOUT WRAPPER (Provides NavBar + Footer) */}
            <Route element={<MainLayout />}>
              
              {/* Home Page */}
              <Route path="/" element={<Landing />} />
              
              {/* Industry Pages */}
              <Route path="/use-cases/industry/:slug" element={<IndustryTemplate />} />
              
              {/* ✅ SOLUTION PAGES (Now includes Navbar/Footer automatically) */}
              <Route path="/use-cases/solutions/:slug" element={<SolutionTemplate />} />
              
            </Route>

          </Routes>
        </Suspense>
      </ThemeProvider>
    </Router>
  );
};

export default AppRoutes;