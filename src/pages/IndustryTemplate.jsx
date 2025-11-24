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
// 1. Import Vetting & Testimonials
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

  // MESH GRADIENT BACKGROUND
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

      <CompanyLogos variant="industry" />

      {/* SHARED BACKGROUND WRAPPER */}
      <div className="w-full relative" style={sharedBackgroundStyle}>
        
        {/* Background Texture Overlay */}
        <div 
           className="absolute inset-0 pointer-events-none opacity-[0.4]"
           style={{
             backgroundImage: `linear-gradient(#ccc 1px, transparent 1px), linear-gradient(90deg, #ccc 1px, transparent 1px)`,
             backgroundSize: '60px 60px',
             mixBlendMode: 'multiply'
           }}
        />

        <IndustrySolutionsTabs industryName={industryName} />
        <IndustryWhyChoose industryName={industryName} />
        <ExpertProfiles variant="industry" />
        <IndustryInfoGrid />
        
        {/* 2. Added Vetting Process (Glassmorphic) */}
        <VettingProcess variant="industry" />
        
        {/* 3. Added Testimonials (Transparent) */}
        <Testimonials variant="industry" />
        
        {/* Extra padding at bottom for flow */}
        <div className="pb-32"></div>
      </div>
    </>
  );
};

export default IndustryTemplate;