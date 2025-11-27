import React from "react";
import { useTheme } from "../../hooks/useTheme";

// 📋 DATA: Verify this text matches your Figma screenshot!
const benefits = [
  {
    title: "Top 1% AI Talent",
    description: "We screen thousands of engineers to bring you the top 1%. Our experts are vetted for advanced math, algorithms, and real-world AI problem solving.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" // Check/Badge
  },
  {
    title: "48-Hour Matching",
    description: "Stop waiting months to hire. Our AI-powered matching engine pairs you with the perfect developer for your stack in less than 2 days.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" // Clock/Speed
  },
  {
    title: "Risk-Free Trial",
    description: "Work with your matched expert for 2 weeks risk-free. If it's not a perfect fit, you don't pay. We prioritize your confidence and satisfaction.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" // Shield
  },
  {
    title: "Strict IP Protection",
    description: "Your data and intellectual property are safe. We sign strict NDAs and ensure all code and models developed belong 100% to you.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" // Lock
  },
  {
    title: "Time Zone Aligned",
    description: "Our engineers work in your time zone. Seamless collaboration with 4+ hours of overlap ensures your sprints keep moving forward.",
    icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" // Globe
  },
  {
    title: "Dedicated Support",
    description: "You get a dedicated account manager to handle onboarding, billing, and performance reviews, so you can focus on building product.",
    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" // Support/Lifebuoy
  }
];

const SolutionWhyChoose = () => {
  const { isLight } = useTheme();

  return (
    // Transparent Section
    <section className="w-full px-4 sm:px-6 lg:px-[40px] py-20">
      <div className="w-full max-w-[1440px] mx-auto">
        
        {/* 1. CENTERED HEADER */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20 animate-fade-in-up">
          <h2 className={`
            font-space font-bold text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight
            ${isLight ? "text-gray-900" : "text-white"}
          `}>
            Why businesses choose GenSquad for AI & ML
          </h2>
          <p className={`
            text-lg sm:text-xl max-w-[800px] leading-relaxed
            ${isLight ? "text-gray-600" : "text-[#bababa]"}
          `}>
            We bridge the gap between ambition and execution. Here is why 500+ companies trust us with their critical AI initiatives.
          </p>
        </div>

        {/* 2. 3x3 GRID (Actually 3x2 for 6 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {benefits.map((item, i) => (
            <div 
              key={i}
              className="group flex flex-col items-start p-2 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon with Hover Glow */}
              <div className={`
                w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300
                ${isLight 
                  ? "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-purple-500/30" 
                  : "bg-purple-900/20 text-purple-400 group-hover:bg-purple-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-purple-900/40"
                }
              `}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

export default SolutionWhyChoose;