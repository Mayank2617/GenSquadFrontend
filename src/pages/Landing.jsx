import React from 'react';
import { Helmet } from 'react-helmet';

// Import features from the new location
import HeroSection from '../features/landing/HeroSection';
import CompanyLogos from '../features/landing/CompanyLogos';
import TalentMatching from '../features/landing/TalentMatching';
import ChipCategories from '../features/landing/ChipCategories';
import ExpertProfiles from '../features/landing/ExpertProfiles';
import DevPartners from '../features/landing/DevPartners';
import HowItWorks from '../features/landing/HowItWorks';
import VettingProcess from '../features/landing/VettingProcess';
import Testimonials from '../features/landing/Testimonials';
import CallToAction from '../features/landing/CallToAction';

const Landing = () => {
  return (
    <>
      <Helmet>
        <title>Hire World-Class AI Engineers in 48 Hours</title>
      </Helmet>
      
      {/* Note: NavBar is gone because MainLayout handles it now! */}
      <HeroSection />
      <CompanyLogos />
      <TalentMatching />
      <ChipCategories />
      <ExpertProfiles />
      <DevPartners />
      <HowItWorks />
      <VettingProcess />
      <Testimonials />
      {/* <CallToAction /> */}
    </>
  );
};

export default Landing;