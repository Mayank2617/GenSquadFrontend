import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";

// 📋 DATA FOR THE TABS
const tabData = [
  {
    id: 0,
    title: "AI & Machine Learning",
    image: "/images/industry_tab_1.png", 
  },
  {
    id: 1,
    title: "Cloud Infrastructure",
    image: "/images/industry_tab_2.png",
  },
  {
    id: 2,
    title: "Blockchain & Security",
    image: "/images/industry_tab_3.png",
  },
];

const IndustrySolutionsTabs = ({ industryName }) => {
  const { isLight } = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  // 1. REFS TO TRACK BUTTON POSITIONS (For Sliding Animation)
  const tabsRef = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  // 2. EFFECT: MOVE THE INDICATOR WHENEVER ACTIVE TAB CHANGES
  useEffect(() => {
    const currentTab = tabsRef.current[activeTab];
    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    // Updated padding: pt-20 (top spacing) pb-8 (reduced bottom gap to next section)
    // Removed style={{ background... }} to allow parent background to show through seamlessy
    <section className="w-full pt-20 pb-8 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* 🔥 GLASS WRAPPER CARD 🔥 */}
        <div className={`
          relative rounded-[32px] p-8 sm:p-12 overflow-hidden
          border transition-all duration-300
          ${isLight 
            ? "bg-white/70 backdrop-blur-xl border-white/50 shadow-2xl shadow-purple-500/10" 
            : "bg-[#121212]/80 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50"
          }
        `}>
          
          {/* HEADER CONTENT - CENTERED */}
          <div className="max-w-[800px] mx-auto mb-10 text-center">
            <h2 className={`
              font-space font-bold text-3xl sm:text-4xl mb-4
              ${isLight ? "text-gray-900" : "text-white"}
            `}>
              Tailored Tech Specs for {industryName}
            </h2>
            <p className={`
              text-lg leading-relaxed
              ${isLight ? "text-gray-600" : "text-[#bababa]"}
            `}>
              Explore the specialized technologies and frameworks our vetted engineers use to build world-class solutions in your sector.
            </p>
          </div>

          {/* TAB BUTTONS CONTAINER - CENTERED */}
          <div className="flex justify-center w-full mb-12">
            <div className={`
              relative flex flex-wrap gap-0 p-1 rounded-xl border inline-flex
              ${isLight ? 'bg-gray-100 border-gray-200' : 'bg-black/40 border-white/5'}
            `}>
              
              {/* ✨ THE SLIDING ANIMATED PILL BACKGROUND ✨ */}
              <div 
                className="absolute top-1 bottom-1 rounded-lg bg-purple-600 shadow-lg shadow-purple-500/30 transition-all duration-300 ease-out"
                style={{ 
                  left: indicatorStyle.left, 
                  width: indicatorStyle.width 
                }} 
              />

              {tabData.map((tab, index) => (
                 <button
                   key={tab.id}
                   ref={(el) => (tabsRef.current[index] = el)}
                   onClick={() => setActiveTab(tab.id)}
                   className={`
                     relative z-10 px-6 py-3 rounded-lg font-space font-medium text-sm sm:text-base transition-colors duration-200
                     ${activeTab === tab.id
                       ? "text-white" // Active Text (Always white on purple bg)
                       : isLight ? "text-gray-600 hover:text-gray-900" : "text-[#bababa] hover:text-white"
                     }
                   `}
                 >
                   {tab.title}
                 </button>
              ))}
            </div>
          </div>

          {/* IMAGE DISPLAY AREA - CENTERED & FULL WIDTH */}
          <div className="w-full flex justify-center">
            <div className="relative w-full max-w-[900px] rounded-[24px] overflow-hidden border border-white/10 shadow-2xl animate-fade-in-up">
               {/* Stylized Background Glow behind image */}
               <div className={`
                 absolute top-0 left-0 w-full h-full -z-10 opacity-50
                 ${isLight ? "bg-purple-100" : "bg-purple-900/20"}
               `}></div>

               <img 
                 key={tabData[activeTab].image} // Key change triggers animation
                 src={tabData[activeTab].image} 
                 alt={tabData[activeTab].title}
                 className="w-full h-auto object-cover aspect-video"
               />
               
               {/* Overlay gradient for aesthetics */}
               <div className={`absolute inset-0 pointer-events-none ${isLight ? "bg-gradient-to-t from-white/10" : "bg-gradient-to-t from-black/20"} to-transparent`}></div>
            </div>
          </div>

        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUpSimple {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-up {
          animation: fadeInUpSimple 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
      `}</style>
    </section>
  );
};

export default IndustrySolutionsTabs;