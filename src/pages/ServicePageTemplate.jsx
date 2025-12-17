import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTheme } from '../hooks/useTheme';

// Layout
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Features
import ServiceHero from '../features/services/ServiceHero';
import ServiceProfileGrid from '../features/services/ServiceProfileGrid';
import Testimonials from '../features/landing/Testimonials';
import FinalCTA from '../features/hiring/FinalCTA';
import FAQSection from '../features/hiring/FAQSection';
import CompanyLogos from '../features/landing/CompanyLogos';

// Data
import { servicePagesContent } from '../data/servicePagesContent';

const ServicePageTemplate = () => {
  const { slug } = useParams();
  const { isLight } = useTheme();

  // 1. Get Data
  const content = servicePagesContent[slug];

  // 2. Handle Not Found
  if (!content) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isLight ? "bg-white text-black" : "bg-black text-white"}`}>
        <h1 className="text-3xl font-bold">Service Page Not Found</h1>
      </div>
    );
  }

  // 🎨 GLOBAL PAGE BACKGROUND (Exact match from SolutionTemplate)
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
    <div style={pageBackground} className="min-h-screen w-full relative flex flex-col font-sans transition-colors duration-300">
      <Helmet>
        <title>{content.hero.title} {content.hero.titleHighlight} | GenSquad</title>
      </Helmet>


      <main className="flex-grow z-10">
        
        {/* 1. HERO */}
        <ServiceHero content={content.hero} isLight={isLight} slug={slug} />

        {/* 2. LOGOS */}
        <section className={``}>
             <CompanyLogos variant="industry"/> 
        </section>

        {/* 3. PROFILE LISTING */}
        <div id="available-experts">
            <ServiceProfileGrid slug={slug} isLight={isLight} />
        </div>

        {/* 4. TestimonialsS */}
        <Testimonials variant="industry"/>

        {/* 5. FINAL CTA */}
        {content.finalCTA && <FinalCTA content={content.finalCTA} isLight={isLight} />}

        {/* 6. FAQ */}
        {content.faq && <FAQSection faq={content.faq} isLight={isLight} />}

      </main>

    </div>
  );
};

export default ServicePageTemplate;