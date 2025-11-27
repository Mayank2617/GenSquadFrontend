import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTheme } from '../hooks/useTheme';

const TalentProfile = () => {
  const { id } = useParams(); // We will use this ID to fetch data later
  const { isLight } = useTheme();

  // 🎨 SHARED BACKGROUND STYLE (Matches Industry & Solution Pages)
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
        <title>Talent Profile | GenSquad</title>
        <meta name="description" content="View detailed profile, skills, and portfolio." />
      </Helmet>

      {/* CONTENT PLACEHOLDER 
        (I will replace this with your Hero Section in the next step)
      */}
      <div className="pt-[100px] pb-20 px-6">
        <div className="max-w-[1200px] mx-auto text-center opacity-50">
          <p>Profile Details for ID: {id}</p>
          <p>Waiting for Hero Section Design...</p>
        </div>
      </div>

    </div>
  );
};

export default TalentProfile;