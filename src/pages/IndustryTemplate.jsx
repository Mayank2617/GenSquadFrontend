import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTheme } from '../hooks/useTheme';

// Import Features
import IndustryHero from '../features/industry/IndustryHero';
import CompanyLogos from '../features/landing/CompanyLogos';
import IndustrySolutionsTabs from '../features/industry/IndustrySolutionsTabs';
import IndustryWhyChoose from '../features/industry/IndustryWhyChoose';
import ExpertProfiles from '../features/landing/ExpertProfiles';
import IndustryInfoGrid from '../features/industry/IndustryInfoGrid';
import VettingProcess from '../features/landing/VettingProcess';
import Testimonials from '../features/landing/Testimonials';
import IndustryFAQ from '../features/industry/IndustryFAQ';

// Import Data
import { industryContent } from '../data/industryContent';

const IndustryTemplate = () => {
  const { slug } = useParams();
  const { isLight } = useTheme();

  // 1. Get Data for current slug
  const content = industryContent[slug];

  // 2. Handle Not Found
  if (!content) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isLight ? "bg-white text-black" : "bg-black text-white"}`}>
        <h1 className="text-3xl font-bold">Industry Not Found</h1>
      </div>
    );
  }

  // 🎨 BACKGROUND
  const sharedBackgroundStyle = {
    background: isLight 
      ? `radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.20) 0%, transparent 50%), 
         radial-gradient(circle at 100% 20%, rgba(59, 130, 246, 0.20) 0%, transparent 50%), 
         linear-gradient(to bottom, #f5f3ff, #f0f9ff, #fdf4ff)` 
      : "radial-gradient(50% 50% at 50% 50%, rgba(76, 29, 149, 0.35) 0%, rgba(10, 10, 10, 1) 100%), #0a0a0a",
    backgroundAttachment: "fixed",
    backgroundSize: "cover"
  };

  return (
    <>
      <Helmet>
        <title>{content.hero.title} | GenSquad</title>
        <meta name="description" content={content.hero.subtitle} />
      </Helmet>

      {/* 1. HERO */}
      <IndustryHero 
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        ctaText={content.hero.ctaText}
      />

      <div className="w-full relative" style={sharedBackgroundStyle}>
        
        {/* 2. LOGOS */}
        <CompanyLogos variant="industry" />

        {/* 4. TECH SPECS */}
        <IndustrySolutionsTabs 
          data={content.techSpecs} 
        />

        {/* 3. SERVICES */}
        <IndustryInfoGrid 
          title={content.services.title}
          subtitle={content.services.subtitle}
          items={content.services.cards}
        />

         {/* 6. EXPERTS */}
        <ExpertProfiles 
          variant="industry" 
          title={content.talent.title}
          subtitle={content.talent.subtitle}
          profiles={content.talent.profiles}
          subSection="industry"
          page={slug}
        />

        {/* 5. SOLUTIONS */}
        <IndustryWhyChoose 
          title={content.solutions.title}
          subtitle={content.solutions.subtitle}
          items={content.solutions.cards}
        />

       
 
        {/* 7. VETTING */}
        <VettingProcess 
          variant="industry" 
          title={content.vetting.title}
          subtitle={content.vetting.subtitle}
          steps={content.vetting.steps}
        />

        {/* 8. TESTIMONIALS */}
        <Testimonials 
          variant="industry" 
          title={content.testimonials.title}
          subtitle={content.testimonials.subtitle}
          items={content.testimonials.items}
        />

        {/* 9. FAQ (NEW) */}
        <IndustryFAQ 
          data={content.faq} 
        />
        
        <div className="pb-32"></div>
      </div>
    </>
  );
};

export default IndustryTemplate;