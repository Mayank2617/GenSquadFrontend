import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTheme } from '../hooks/useTheme';

import IndustryHero from '../features/industry/IndustryHero';
import CompanyLogos from '../features/landing/CompanyLogos';
import IndustrySolutionsTabs from '../features/industry/IndustrySolutionsTabs';
import IndustryWhyChoose from '../features/industry/IndustryWhyChoose';
import ExpertProfiles from '../features/landing/ExpertProfiles';
import IndustryInfoGrid from '../features/industry/IndustryInfoGrid';
import VettingProcess from '../features/landing/VettingProcess';
import Testimonials from '../features/landing/Testimonials';

const formatTitle = (slug) => {
  if (!slug) return "Industry";
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const IndustryTemplate = () => {
  const { slug } = useParams();
  const industryName = formatTitle(slug);
  const { isLight } = useTheme();

  // 🎨 GLOBAL MESH BACKGROUND
  const sharedBackgroundStyle = {
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
    backgroundSize: "cover"
  };

  return (
    <>
      <Helmet>
        <title>Hire {industryName} Developers | GenSquad</title>
        <meta name="description" content={`Hire top 1% ${industryName} developers in 48 hours.`} />
      </Helmet>

      <IndustryHero 
        title={`Hire ${industryName} Developers`}
        subtitle={`Build secure, scalable ${industryName} solutions with top-tier experts vetted for technical excellence.`}
      />

      {/* ✅ MOVED INSIDE THE WRAPPER 
         By placing CompanyLogos inside this div, its 'transparent' background 
         will correctly show the mesh gradient defined in sharedBackgroundStyle.
      */}
      <div className="w-full relative" style={sharedBackgroundStyle}>
        
        <CompanyLogos variant="industry" />

        <IndustrySolutionsTabs industryName={industryName} />
        <IndustryWhyChoose industryName={industryName} />
        <ExpertProfiles variant="industry" />
        <IndustryInfoGrid />
        <VettingProcess variant="industry" />
        <Testimonials variant="industry" />
        
        <div className="pb-32"></div>
      </div>
    </>
  );
};

export default IndustryTemplate;