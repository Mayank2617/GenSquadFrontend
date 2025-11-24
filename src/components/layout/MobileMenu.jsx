import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import { navigationData } from "../../data/navigationData";

const MobileMenu = ({ isOpen, closeMenu }) => {
  const { isLight } = useTheme();
  
  // Track which top-level section is expanded
  const [expandedSection, setExpandedSection] = useState(null);
  
  // Track which subsection is expanded (e.g., Use Cases -> Industry)
  const [expandedSubsection, setExpandedSubsection] = useState(null);

  if (!isOpen) return null;

  const toggleSection = (title) => {
    setExpandedSection(expandedSection === title ? null : title);
    setExpandedSubsection(null); // Reset inner accordion when switching main tabs
  };

  const toggleSubsection = (title) => {
    setExpandedSubsection(expandedSubsection === title ? null : title);
  };

  return (
    <div className={`
      fixed inset-0 z-40 flex flex-col pt-[80px] pb-10 px-6 overflow-y-auto transition-all duration-300
      ${isLight ? "bg-white text-gray-900" : "bg-black text-white"}
    `}>
      
      <div className="flex flex-col gap-6">
        {navigationData.map((section, idx) => (
          <div key={idx} className="border-b border-gray-100 dark:border-[#222] pb-4">
            {/* LEVEL 1: Main Section (e.g., Use Cases) */}
            <button 
              onClick={() => toggleSection(section.title)}
              className="flex items-center justify-between w-full text-xl font-space font-bold"
            >
              {section.title}
              <svg 
                width="14" height="8" viewBox="0 0 14 8" fill="none" 
                className={`transition-transform duration-300 ${expandedSection === section.title ? "rotate-180" : ""}`}
              >
                <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* LEVEL 2: Subsections (e.g., Industry, Hiring Need) */}
            {expandedSection === section.title && (
              <div className="mt-4 flex flex-col gap-4 pl-4 animate-fade-in-up">
                {section.subsections.map((sub, subIdx) => (
                  <div key={subIdx}>
                    <button 
                      onClick={() => toggleSubsection(sub.title)}
                      className={`
                        flex items-center justify-between w-full text-lg font-medium transition-colors
                        ${expandedSubsection === sub.title ? "text-purple-500" : isLight ? "text-gray-600" : "text-[#bababa]"}
                      `}
                    >
                      <div className="flex items-center gap-3">
                        {/* Icon */}
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                           <path d={sub.iconPath || "M13 10V3L4 14h7v7l9-11h-7z"} strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {sub.title}
                      </div>
                      <span className="text-sm opacity-50">{expandedSubsection === sub.title ? "-" : "+"}</span>
                    </button>

                    {/* LEVEL 3: Pages (e.g., Fintech, SaaS) */}
                    {expandedSubsection === sub.title && (
                      <div className="flex flex-col gap-3 mt-3 pl-9 border-l border-purple-500/30 ml-2">
                        {sub.items.map((item, i) => (
                          <Link
                            key={i}
                            to={item.href}
                            onClick={closeMenu}
                            className={`
                              text-base font-dm transition-colors block py-1
                              ${isLight ? "text-gray-500 hover:text-purple-600" : "text-[#888] hover:text-white"}
                            `}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        
        {/* Mobile CTA */}
        <div className="mt-4">
          <button className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold text-lg">
            Hire Talent
          </button>
        </div>
      </div>
      
      {/* Animation Style */}
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default MobileMenu;