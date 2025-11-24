import React from "react";
import { useTheme } from "../../hooks/useTheme";

const VettingProcess = ({ variant = "home" }) => {
  const { isLight } = useTheme();
  const isIndustry = variant === "industry";

  const steps = [
    { title: "Pre – qualification", value: 68, width: "100%" },
    { title: "Skill Assessment", value: 68, width: "82%" },
    { title: "Technical Interview", value: 68, width: "72%" },
    { title: "Live Coding", value: 68, width: "58%" },
    { title: "Final Reference Check", value: 68, width: "45%" },
  ];

  // 🎨 DYNAMIC STYLES
  // Section Background
  const sectionBg = isIndustry 
    ? "bg-transparent" 
    : isLight ? "bg-white" : "bg-[#0a0a0a]";

  // Card Background (Glass for Industry, Solid for Home)
  const cardBg = isIndustry
    ? isLight 
      ? "bg-white/70 backdrop-blur-xl border-white/50 shadow-2xl shadow-purple-500/10"
      : "bg-[#121212]/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50"
    : isLight 
      ? "border-[#8b5cf6] bg-white" 
      : "border-[#ffffff20] bg-[#111111]";

  return (
    <section className={`w-full px-4 sm:px-6 lg:px-[30px] pt-[40px] pb-[40px] ${sectionBg}`}>
      <div className="w-full max-w-[1166px] mx-auto flex flex-col items-center">

        {/* Header */}
        <h2 className={`
          text-[28px] sm:text-[40px] md:text-[50px] font-space font-medium text-center leading-tight
          ${isLight ? "text-gray-900" : "text-white"}
        `}>
          Find top-performing agencies effortlessly.
        </h2>

        <p className={`
          text-[14px] sm:text-[16px] md:text-[20px] text-center mt-4 leading-relaxed max-w-[800px]
          ${isLight ? "text-gray-600" : "text-[#bababa]"}
        `}>
          Our vetting process analyzes 500+ data points from performance and skills
          to team culture and reliability.
        </p>

        {/* CARD CONTAINER */}
        <div className={`
          w-full rounded-[32px] mt-[40px] p-6 sm:p-12 border transition-all duration-300
          ${cardBg}
        `}>
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 last:mb-0 gap-3 sm:gap-0">

              {/* Left Title */}
              <span className={`
                text-[16px] sm:text-[20px] font-dm w-full sm:w-[35%]
                ${isLight ? "text-gray-800" : "text-white"}
              `}>
                {step.title}
              </span>

              {/* Progress Bar Container */}
              <div className="w-full sm:w-[65%] flex items-center">
                <div className={`
                  w-full h-[26px] rounded-[8px] overflow-hidden
                  ${isLight ? "bg-purple-50" : "bg-[#2a2a2a]"}
                `}>
                  <div
                    className="h-full bg-[#8b5cf6] flex items-center justify-center text-white text-[12px] sm:text-[14px] font-medium transition-all duration-1000 ease-out"
                    style={{ width: step.width }}
                  >
                    {step.value}%
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VettingProcess;