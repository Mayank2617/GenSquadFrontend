import React from 'react';
import { Helmet } from 'react-helmet';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import CompanyLogos from './CompanyLogos';
import TalentMatching from './TalentMatching';
import ChipCategories from './ChipCategories';
import ExpertProfiles from './ExpertProfiles';
import DevPartners from './DevPartners';
import HowItWorks from './HowItWorks';
import VettingProcess from './VettingProcess';
import Testimonials from './Testimonials';
import CallToAction from './CallToAction';

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Hire World-Class AI Engineers in 48 Hours | AI Talent Platform</title>
        <meta name="description" content="Connect with vetted AI engineers and developers in 48 hours. Browse expert profiles, trusted by leading companies. Streamlined 3-step hiring process with guaranteed quality." />
        <meta property="og:title" content="Hire World-Class AI Engineers in 48 Hours | AI Talent Platform" />
        <meta property="og:description" content="Connect with vetted AI engineers and developers in 48 hours. Browse expert profiles, trusted by leading companies. Streamlined 3-step hiring process with guaranteed quality." />
      </Helmet>

      <main className="bg-[#000000] min-h-screen">
        <NavBar/>
        <HeroSection />
        <CompanyLogos />
        <TalentMatching />
        <ChipCategories />
        <ExpertProfiles />
        <DevPartners />
        <HowItWorks />
        <VettingProcess />
        <Testimonials  />
        {/* <CallToAction /> */}
      </main>
    </>
  );
};

export default LandingPage;