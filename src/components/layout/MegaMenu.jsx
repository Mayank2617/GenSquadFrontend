import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

const MegaMenu = ({ activeSection, closeMenu }) => {
  const { isLight } = useTheme();
  // State to track which subsection is hovered on the left
  const [activeSubsection, setActiveSubsection] = useState(null);

  if (!activeSection) return null;

  return (
    <div
      className={`
        absolute left-0 top-full w-full 
        border-t shadow-2xl z-40
        transition-all duration-300 ease-in-out
        ${isLight 
          ? "bg-white border-gray-100 text-gray-800" 
          : "bg-[#0a0a0a] border-[#ffffff10] text-gray-200"
        }
      `}
      onMouseLeave={() => {
        setActiveSubsection(null); // Reset internal state on exit
        closeMenu();
      }}
      style={{ minHeight: "450px" }} // Enforce height for consistent layout
    >
      <div className="max-w-[1440px] mx-auto flex h-full min-h-[450px]">
        
        {/* ================= LEFT PANEL (SUBSECTIONS) ================= */}
        <div 
          className={`
            w-[25%] flex flex-col py-6 px-2 border-r
            ${isLight ? "bg-gray-50 border-gray-100" : "bg-[#111] border-[#222]"}
          `}
        >
          {activeSection.subsections.map((sub, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveSubsection(sub)}
              className={`
                group flex items-center gap-3 px-4 py-3 mb-1 rounded-lg cursor-pointer transition-all duration-200
                ${
                  activeSubsection?.title === sub.title
                    ? isLight 
                      ? "bg-purple-50 text-purple-700"
                      : "bg-[#1f1f1f] text-white"
                    : isLight
                      ? "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                      : "text-[#888] hover:bg-[#161616] hover:text-white"
                }
              `}
            >
              {/* Category Icon */}
              <div 
                className={`
                  p-2 rounded-md transition-colors
                  ${
                    activeSubsection?.title === sub.title
                      ? "bg-purple-600 text-white"
                      : isLight ? "bg-gray-200 text-gray-500" : "bg-[#2a2a2a] text-[#666]"
                  }
                `}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                   {/* Render path from data, fallback if missing */}
                   <path d={sub.iconPath || "M13 10V3L4 14h7v7l9-11h-7z"} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              
              {/* Category Title */}
              <span className="font-space font-medium text-[15px] flex-grow">
                {sub.title}
              </span>

              {/* Arrow Icon (Visible only on Active/Hover) */}
              <svg 
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                className={`
                  transition-transform duration-300 opacity-0 -translate-x-2
                  ${activeSubsection?.title === sub.title ? "opacity-100 translate-x-0" : ""}
                `}
              >
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          ))}
        </div>

        {/* ================= RIGHT PANEL (CONTENT) ================= */}
        <div className="w-[75%] p-8 relative overflow-hidden">
          
          {/* STATE 1: NOTHING SELECTED (DEFAULT) */}
          <div 
            className={`
              absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300
              ${activeSubsection ? "opacity-0 pointer-events-none" : "opacity-100"}
            `}
          >
             <div className="p-4 rounded-full bg-purple-100 dark:bg-purple-900/20 mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2">
                  <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
             </div>
             <p className={`font-dm text-lg ${isLight ? "text-gray-400" : "text-[#555]"}`}>
               Select a category from the left to explore
             </p>
          </div>

          {/* STATE 2: SUBSECTION SELECTED */}
          {activeSubsection && (
            <div className="animate-fade-in-up w-full h-full">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-[#222]">
                 <h3 className={`text-2xl font-space font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
                    {activeSubsection.title}
                 </h3>
                 <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                    {activeSubsection.items.length} options
                 </span>
              </div>

              <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                {activeSubsection.items.map((item, i) => (
                  <Link
                    key={i}
                    to={item.href}
                    onClick={closeMenu}
                    className={`
                      group flex items-start gap-3 p-2 rounded-lg transition-all duration-200
                      ${isLight ? "hover:bg-gray-50" : "hover:bg-[#1a1a1a]"}
                    `}
                  >
                    {/* Item Icon (Generic Bolt for now, can be specific if added to data) */}
                    <div className="mt-1 text-purple-400 group-hover:text-purple-600 transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                         <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    
                    <div>
                      <span 
                        className={`
                          block text-sm font-medium mb-0.5 transition-colors
                          ${isLight ? "text-gray-700 group-hover:text-purple-700" : "text-[#ccc] group-hover:text-white"}
                        `}
                      >
                        {item.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tailwind Animation Utilities for this file */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default MegaMenu;