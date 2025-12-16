import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTheme } from '../hooks/useTheme';
import Button from '../components/ui/Button';

// Import Features Components
import ExpertProfiles from '../features/landing/ExpertProfiles';
import Testimonials from '../features/landing/Testimonials'; // ✅ IMPORTED TESTIMONIAL
import HeroSection from '../features/hiring/HeroSection';
import FeatureGrid from '../features/hiring/FeatureGrid';
import FinalCTA from '../features/hiring/FinalCTA';
import FAQSection from '../features/hiring/FAQSection';

// Import Data
import { hiringNeedContent } from '../data/hiringNeedContent';

const HiringNeedTemplate = () => {
    const { slug } = useParams();
    const { isLight } = useTheme();

    // 1. Get Data
    const content = hiringNeedContent[slug];

    // 2. Handle Not Found
    if (!content) {
        return (
            <div className={`min-h-screen flex items-center justify-center ${isLight ? "bg-white text-black" : "bg-black text-white"}`}>
                <h1 className="text-3xl font-bold">Page Not Found</h1>
            </div>
        );
    }

    // 🎨 GLOBAL PAGE BACKGROUND
    const pageBackground = {
        background: isLight
            ? `
        radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.20) 0%, transparent 50%), 
        radial-gradient(circle at 100% 20%, rgba(59, 130, 246, 0.20) 0%, transparent 50%), 
        linear-gradient(to bottom, #f5f3ff, #f0f9ff, #fdf4ff)
      `
            : "radial-gradient(50% 50% at 50% 50%, rgba(76, 29, 149, 0.35) 0%, rgba(10, 10, 10, 1) 100%), #0a0a0a",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        minHeight: "100vh"
    };

    return (
        <div style={pageBackground} className="min-h-screen w-full relative selection:bg-purple-500/30">
            <Helmet>
                <title>{content.hero.title} | GenSquad</title>
                <meta name="description" content={content.hero.subtitle} />
            </Helmet>

            {/* Global Grid Overlay */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: isLight
                            ? `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`
                            : `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            {/* CONTENT WRAPPER */}
            <div className="relative z-10">

                {/* 1. HERO SECTION */}
                <HeroSection content={content.hero} isLight={isLight} slug={slug} />

                {/* 2. SECTION 2: AUGMENTATION TYPES (Soft Grid) */}
                {content.augmentationTypes && (
                    <FeatureGrid
                        title={content.augmentationTypes.title}
                        subtitle={content.augmentationTypes.subtitle}
                        cards={content.augmentationTypes.cards}
                        isLight={isLight}
                        variant="soft"
                    />
                )}

                {/* 3. EXPERT PROFILES */}
                <ExpertProfiles
                    variant="industry"
                    title={content.expertProfiles?.title || "Meet Your Future Squad"}
                    subtitle={content.expertProfiles?.subtitle || "Browse available senior engineers ready to join your team within 48 hours."}
                    subSection="hiring-need"
                    page={slug}
                />

                {/* 4. SECTION 4: CUSTOM SQUADS (Bold Grid) */}
                {content.customSquads && (
                    <FeatureGrid
                        title={content.customSquads.title}
                        subtitle={content.customSquads.subtitle}
                        cards={content.customSquads.cards}
                        isLight={isLight}
                        variant="bold"
                    />
                )}

                {/* =========================================
                    SECTION 5: VOICE OF TRUST (TESTIMONIAL)
                   ========================================= */}
                <Testimonials
                    variant="industry"
                />

                {/* 6. FINAL CTA */}
                {content.finalCTA && (
                    <FinalCTA content={content.finalCTA} isLight={isLight} />
                )}

                {/* 7. FAQ */}
                {content.faq && (
                    <FAQSection faq={content.faq} isLight={isLight} />
                )}

                {/* 🎬 Global Animation Styles */}
                <style>{`
          @keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
          .animate-gradient-x { background-size: 200% auto; animation: gradient-x 5s ease infinite; }
          @keyframes beam-load { 0% { width: 0%; opacity: 0; } 50% { width: 50%; opacity: 1; } 100% { width: 100%; opacity: 0; } }
          .animate-beam-load { animation: beam-load 2s infinite linear; }
          @keyframes slideInRight { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }
          .animate-slide-in-right { animation: slideInRight 0.6s ease-out forwards; }
          .animate-slide-in-right-delayed { animation: slideInRight 0.6s ease-out 0.2s forwards; opacity: 0; }
          @keyframes streak { 0% { transform: translateX(-150%); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateX(350%); opacity: 0; } }
          .animate-streak-fast { animation: streak 3s linear infinite; }
          .animate-streak-medium { animation: streak 5s linear infinite; }
          .animate-streak-slow { animation: streak 7s linear infinite; }
          @keyframes spin-ultra-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          .animate-spin-ultra-slow { animation: spin-ultra-slow 20s linear infinite; }
          @keyframes spin-reverse-ultra-slow { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
          .animate-spin-reverse-ultra-slow { animation: spin-reverse-ultra-slow 20s linear infinite; }
        `}</style>

            </div>
        </div>
    );
};

export default HiringNeedTemplate;