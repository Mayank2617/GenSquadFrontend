import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTheme } from '../hooks/useTheme';

// Import Data
import { solutionContent } from '../data/solutionContent';

// Features
import SolutionHero from '../features/solution/SolutionHero';
import CompanyLogos from '../features/landing/CompanyLogos';
import SolutionProcess from '../features/solution/SolutionProcess';
import SolutionCapabilities from '../features/solution/SolutionCapabilities';
import ExpertProfiles from '../features/landing/ExpertProfiles';
import SolutionWhyChoose from '../features/solution/SolutionWhyChoose';
import Testimonials from '../features/landing/Testimonials';
import IndustryFAQ from '../features/industry/IndustryFAQ';
import SolutionCTA from '../features/solution/SolutionCTA';

const SolutionTemplate = () => {
  const { slug } = useParams();
  const { isLight } = useTheme();

  // 1. Get Data for current slug
  const content = solutionContent[slug];

  // 2. Handle Not Found
  if (!content) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isLight ? "bg-white text-black" : "bg-black text-white"}`}>
        <h1 className="text-3xl font-bold">Solution Not Found</h1>
      </div>
    );
  }

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
        <title>{content.hero.title} | GenSquad</title>
        <meta name="description" content={content.hero.subtitle} />
      </Helmet>

      {/* 1. HERO SECTION */}
      <div className="pt-[100px] pb-10"> 
        <SolutionHero 
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          ctaText={content.hero.ctaText}
        />
      </div>

      {/* 2. LOGOS */}
      <CompanyLogos variant="industry" />

      {/* 3. PROCESS */}
      <SolutionProcess data={content.process} />

      {/* 4. CAPABILITIES */}
      <SolutionCapabilities data={content.services} />

      {/* 5. EXPERTS (PROFILES from Backend/Dummy) */}
      <ExpertProfiles 
        variant="industry" 
        title={content.talent.title} 
        subtitle={content.talent.subtitle}
        // Removed 'profiles' prop -> triggers fallback to backend or default dummies
        subSection="solution" 
        page={slug} 
      />

      {/* 6. USE CASES */}
      <SolutionWhyChoose data={content.useCases} />

      {/* 7. TESTIMONIALS (Global Data) */}
      <Testimonials 
        variant="industry" 
        // No items passed -> uses default global testimonials
      />

      {/* 8. FAQ */}
      <IndustryFAQ data={content.faq} />

      {/* 9. CTA */}
      <SolutionCTA data={content.finalCTA} />

      {/* Spacing for footer */}
      <div className="pb-20"></div>

    </div>
  );
};

export default SolutionTemplate;  