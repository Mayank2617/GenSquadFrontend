import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import VendorSidebar from "../features/vendor/layout/VendorSidebar";
import { useTheme } from "../hooks/useTheme";

const VendorLayout = () => {
  const { isLight } = useTheme();
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className={`flex h-screen overflow-hidden ${isLight ? "bg-[#f3f4f6]" : "bg-[#000000]"}`}>
      
      {/* 1. SIDEBAR */}
      <VendorSidebar 
        isCollapsed={isSidebarCollapsed} 
        toggleCollapse={() => setSidebarCollapsed(!isSidebarCollapsed)} 
      />

      {/* 2. MAIN CONTENT AREA */}
      {/* Changed bg-[#f8f9fc] -> bg-[#f3f4f6] for better contrast against white cards */}
      <main className={`
        flex-1 overflow-y-auto relative transition-colors duration-300
        ${isLight ? "bg-[#f3f4f6]" : "bg-[#050505]"}
      `}>
        <div className="w-full h-full p-6 lg:p-10 max-w-[1600px] mx-auto">
           <Outlet /> 
        </div>
      </main>

    </div>
  );
};

export default VendorLayout;