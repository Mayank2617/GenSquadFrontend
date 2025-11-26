import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTheme } from '../hooks/useTheme';

// Features
import SolutionHero from '../features/solution/SolutionHero';
import CompanyLogos from '../features/landing/CompanyLogos'; // Will use in next steps

// Helper for title slug
const formatTitle = (slug) => {
  if (!slug) return "AI & ML";
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const SolutionTemplate = () => {
  const { slug } = useParams();
  const solutionName = formatTitle(slug);
  const { isLight } = useTheme();

  // 🎨 GLOBAL PAGE BACKGROUND (Matches Industry Page)
  // This sits BEHIND the Hero Card
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
    <div style={pageBackground}>
      <Helmet>
        <title>{solutionName} Solutions | GenSquad</title>
        <meta name="description" content={`Hire top ${solutionName} experts.`} />
      </Helmet>

      {/* NOTE: NavBar and Footer are provided by the MainLayout 
         wrapping this route in Routes.jsx 
      */}

      {/* 1. HERO SECTION (Floating Card) */}
      <div className="pt-[40px]"> {/* Push down below fixed navbar */}
        <SolutionHero 
          tag={solutionName}
          title={`Scale your ${solutionName} capabilities`}
        />
      </div>

      {/* Placeholder for next sections */}
      <div className="py-32 text-center opacity-50">
        <p>More {solutionName} content coming soon...</p>
      </div>

    </div>
  );
};

export default SolutionTemplate;