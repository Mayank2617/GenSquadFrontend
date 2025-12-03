import React from 'react';
import { Helmet } from 'react-helmet';
import { useTheme } from '../hooks/useTheme';

import WorkflowHero from '../features/workflows/WorkflowHero';
// 1. Import the Grid
import WorkflowGrid from '../features/workflows/WorkflowGrid'; 

const WorkflowLibrary = () => {
  const { isLight } = useTheme();

  // 🎨 SHARED BACKGROUND STYLE
  const pageBackground = {
    background: isLight 
      ? `
        radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.20) 0%, transparent 50%), 
        radial-gradient(circle at 100% 20%, rgba(59, 130, 246, 0.20) 0%, transparent 50%), 
        radial-gradient(circle at 0% 60%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), 
        radial-gradient(circle at 100% 90%, rgba(139, 92, 246, 0.20) 0%, transparent 50%), 
        linear-gradient(to bottom, #f5f3ff, #f0f9ff, #fdf4ff)
      ` 
      : "radial-gradient(50% 50% at 50% 50%, rgba(76, 29, 149, 0.35) 0%, rgba(10, 10, 10, 1) 100%), #0a0a0a",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    minHeight: "100vh"
  };

  return (
    <div style={pageBackground} className="min-h-screen w-full relative">
      <Helmet>
        <title>n8n Workflow Library | GenSquad</title>
      </Helmet>

      {/* 1. HERO SECTION */}
      <div className="pt-[30px]">
        <WorkflowHero />
      </div>

      {/* 2. WORKFLOW GRID SECTION */}
      <WorkflowGrid />

    </div>
  );
};

export default WorkflowLibrary;