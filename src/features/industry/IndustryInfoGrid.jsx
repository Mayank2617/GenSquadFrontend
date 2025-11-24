import React from "react";
import { useTheme } from "../../hooks/useTheme";

// 📋 DATA: 6 Cards (Update text here if your image has different content)
const cardData = [
  {
    title: "Profile Screening",
    description: "We rigorously review portfolios, GitHub repositories, and past project impact to ensure only top-tier candidates make the cut.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" // File Text
  },
  {
    title: "Language Proficiency",
    description: "Candidates undergo AI-driven and human-verified communication tests to ensure seamless collaboration with global teams.",
    icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" // Chat Bubble
  },
  {
    title: "Technical Assessment",
    description: "Timed algorithmic challenges and system design problems specific to their domain (e.g., Python, React, AWS).",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" // Code
  },
  {
    title: "Live Coding Interview",
    description: "Real-time problem solving with senior engineers to evaluate coding habits, optimization skills, and debugging logic.",
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" // Video
  },
  {
    title: "Behavioral Evaluation",
    description: "Assessing culture fit, reliability, ownership, and ability to work in fast-paced, remote environments.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" // Users
  },
  {
    title: "Final Reference Check",
    description: "Verifying past performance and reliability through direct contact with previous tech leads and managers.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" // Check Circle
  }
];

const IndustryInfoGrid = () => {
  const { isLight } = useTheme();

  return (
    // Transparent wrapper (bg controlled by parent template)
    <section className="w-full py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className={`
            font-space font-bold text-3xl sm:text-4xl md:text-5xl mb-6
            ${isLight ? "text-gray-900" : "text-white"}
          `}>
            Rigorous Vetting Process
          </h2>
          <p className={`
            text-lg max-w-[800px] leading-relaxed
            ${isLight ? "text-gray-600" : "text-[#bababa]"}
          `}>
            We go beyond the resume. Our 6-step verification ensures you only interview candidates who are ready to deliver from day one.
          </p>
        </div>

        {/* 6-CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cardData.map((item, i) => (
            <div 
              key={i}
              className={`
                group relative p-8 rounded-[24px] border transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
                ${isLight 
                  ? "bg-white border-purple-100 shadow-sm hover:shadow-purple-500/10" 
                  : "bg-[#161616] border-[#333] hover:border-purple-500/30 hover:shadow-purple-900/20"
                }
              `}
            >
              {/* Icon Container */}
              <div className={`
                w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300
                ${isLight 
                  ? "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white" 
                  : "bg-purple-900/20 text-purple-400 group-hover:bg-purple-600 group-hover:text-white"
                }
              `}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.icon} />
                </svg>
              </div>

              {/* Title */}
              <h3 className={`
                text-xl font-space font-bold mb-3
                ${isLight ? "text-gray-900" : "text-white"}
              `}>
                {item.title}
              </h3>

              {/* Description */}
              <p className={`
                text-base leading-relaxed
                ${isLight ? "text-gray-600" : "text-[#bababa]"}
              `}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustryInfoGrid;