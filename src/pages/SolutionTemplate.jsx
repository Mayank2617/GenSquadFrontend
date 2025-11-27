import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTheme } from '../hooks/useTheme';

// Features
import SolutionHero from '../features/solution/SolutionHero';
import CompanyLogos from '../features/landing/CompanyLogos';
import SolutionProcess from '../features/solution/SolutionProcess';
import SolutionWhyChoose from '../features/solution/SolutionWhyChoose';
import ExpertProfiles from '../features/landing/ExpertProfiles';
import SolutionCapabilities from '../features/solution/SolutionCapabilities';
// 1. Import CTA
import SolutionCTA from '../features/solution/SolutionCTA';

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

  // 🎨 GLOBAL PAGE BACKGROUND
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

      {/* 1. HERO */}
      <div className="pt-[100px] pb-10"> 
        <SolutionHero 
          tag={solutionName}
          title={`Scale your ${solutionName} capabilities`}
        />
      </div>

      {/* 2. LOGOS */}
      <CompanyLogos variant="industry" />

      {/* 3. PROCESS */}
      <SolutionProcess />

      {/* 4. WHY CHOOSE */}
      <SolutionWhyChoose />

      {/* 5. EXPERTS */}
      <ExpertProfiles variant="industry" />

      {/* 6. CAPABILITIES */}
      <SolutionCapabilities />

      {/* 7. CTA (Final Section) */}
      <SolutionCTA />

      {/* Spacing for footer */}
      <div className="pb-20"></div>

    </div>
  );
};

export default SolutionTemplate;