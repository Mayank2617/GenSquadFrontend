import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { ThemeProvider } from './hooks/useTheme';

// Lazy load pages
const WorkflowLibrary = lazy(() => import('./pages/WorkflowLibrary'));
const Landing = lazy(() => import('./pages/Landing'));
const IndustryTemplate = lazy(() => import('./pages/IndustryTemplate'));
const SolutionTemplate = lazy(() => import('./pages/SolutionTemplate'));
const TalentListing = lazy(() => import('./pages/TalentListing'));
const TalentProfile = lazy(() => import('./pages/TalentProfile')); // 1. Import Profile Page


const AppRoutes = () => {
  return (
    <Router>
      <ThemeProvider>
        <Suspense fallback={<div className="flex h-screen items-center justify-center bg-black text-white">Loading...</div>}>
          <Routes>
            
            {/* Main Layout provides NavBar & Footer to all children */}
            <Route element={<MainLayout />}>
              
              <Route path="/" element={<Landing />} />
              <Route path="/use-cases/industry/:slug" element={<IndustryTemplate />} />
              <Route path="/use-cases/solutions/:slug" element={<SolutionTemplate />} />
              <Route path="/talent" element={<TalentListing />} />
              
              {/* 2. Add Dynamic Profile Route */}
              {/* The ':id' allows us to load different data for different people */}
              <Route path="/talent/:id" element={<TalentProfile />} />
              <Route path="/n8n-workflows" element={<WorkflowLibrary />} />
              
            </Route>

          </Routes>
        </Suspense>
      </ThemeProvider>
    </Router>
  );
};

export default AppRoutes;