import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTheme } from '../hooks/useTheme';

// Features
import TechStackHero from '../features/techstack/TechStackHero';
import TechStackProfileGrid from '../features/techstack/TechStackProfileGrid';
import TechStackFeatures from '../features/techstack/TechStackFeatures';
import TechStackVetting from '../features/techstack/TechStackVetting';
import CompanyLogos from '../features/landing/CompanyLogos';
import Testimonials from '../features/landing/Testimonials';
import FAQSection from '../features/hiring/FAQSection';
import FinalCTA from '../features/hiring/FinalCTA';

// Data
import { techStackContent } from '../data/techStackContent';

const TechStackTemplate = () => {
  const { slug } = useParams();
  const { isLight } = useTheme();

  const content = techStackContent[slug];

  if (!content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Tech Stack Page Not Found</h1>
      </div>
    );
  }

  // Consistent Global Gradient
  const pageBackground = {
    background: isLight 
      ? `radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), 
         radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), 
         linear-gradient(to bottom, #f8fafc, #f1f5f9)` 
      : "#050505",
    minHeight: "100vh"
  };

  return (
    <div style={pageBackground} className="min-h-screen w-full relative flex flex-col font-sans">
      <Helmet>
        <title>{content.hero.title} | GenSquad</title>
      </Helmet>

      {/* ❌ No Navbar here (Handled by MainLayout) */}

      <main className="flex-grow z-10">
        {/* 1. Hero */}
        <TechStackHero content={content.hero} isLight={isLight} />

        {/* 2. Logos */}
        <section className={``}>
             <CompanyLogos variant='industry'/> 
        </section>

        {/* 3. Profiles */}
        <TechStackProfileGrid slug={slug} isLight={isLight} />

        {/* 4. CTA */}
        <FinalCTA content={content.cta} isLight={isLight} />

        {/* 5. Features */}
        <TechStackFeatures features={content.features} isLight={isLight} />

        {/* 6. Vetting */}
        <TechStackVetting content={content.vetting} isLight={isLight} />

        {/* 7. Testimonialss */}
        <Testimonials variant='industry'/>

        {/* 8. FAQ */}
        <FAQSection faq={content.faq} isLight={isLight} />
      </main>

      {/* ❌ No Footer here (Handled by MainLayout) */}
    </div>
  );
};

export default TechStackTemplate;