import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTheme } from '../hooks/useTheme';

// Layout
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Features
import TechnologyHero from '../features/technology/TechnologyHero';
import TechnologyProfileGrid from '../features/technology/TechnologyProfileGrid';
import TechnologyFeatures from '../features/technology/TechnologyFeatures';
import TechnologyVetting from '../features/technology/TechnologyVetting';
import CompanyLogos from '../features/landing/CompanyLogos';
import Testimonials from '../features/landing/Testimonials';
import FAQSection from '../features/hiring/FAQSection';
import FinalCTA from '../features/hiring/FinalCTA'; // Reusing this generic CTA component

// Data
import { technologyContent } from '../data/technologyContent';

const TechnologyTemplate = () => {
    const { slug } = useParams();
    const { isLight } = useTheme();

    const content = technologyContent[slug];

    if (!content) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-2xl">Technology Page Not Found</h1>
            </div>
        );
    }

    // Same global gradient as Services/Solutions
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

            <Navbar />

            <main className="flex-grow z-10">
                {/* 1. Hero */}
                <TechnologyHero content={content.hero} isLight={isLight} />

                {/* 2. Logos */}
                <section className={``}>
                    <CompanyLogos variant="industry" />
                </section>

                {/* 3. Profiles */}
                <TechnologyProfileGrid slug={slug} content={content.talent} isLight={isLight} />

                {/* 4. CTA Strip (Optional placement, or after features) */}
                <FinalCTA content={content.cta} isLight={isLight} />

                {/* 5. Features (6 Cards) */}
                <TechnologyFeatures features={content.features} isLight={isLight} />

                {/* 6. Vetting */}
                <TechnologyVetting content={content.vetting} isLight={isLight} />

                {/* 7. Testimonialss */}
                <Testimonials variant="industry"/>

                {/* 8. FAQ */}
                <FAQSection faq={content.faq} isLight={isLight} />
            </main>

            <Footer />
        </div>
    );
};

export default TechnologyTemplate;