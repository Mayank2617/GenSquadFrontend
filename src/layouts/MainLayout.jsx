import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer'; // 1. Import Footer

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background-primary transition-colors duration-300">
      <NavBar />
      
      <main className="flex-grow pt-[72px]">
        <Outlet /> 
      </main>
      
      {/* 2. Add Footer Here */}
      <Footer />
    </div>
  );
};

export default MainLayout;