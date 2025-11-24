import React from 'react';
import { useTheme } from "../../hooks/useTheme";

const CompanyLogos = ({ variant = "default" }) => {
  const { isLight } = useTheme();

  // Define background styles
  const getBackgroundClass = () => {
    if (variant === "industry") {
      // EXACT MATCH with IndustryHero Background
      return {
        background: isLight 
          ? "radial-gradient(circle at 15% 15%, rgba(139, 92, 246, 0.35) 0%, transparent 45%), radial-gradient(circle at 85% 15%, rgba(59, 130, 246, 0.35) 0%, transparent 45%), linear-gradient(to bottom, #f3f0ff, #f0f9ff)"
          : "radial-gradient(50% 50% at 50% 50%, rgba(76, 29, 149, 0.35) 0%, rgba(10, 10, 10, 1) 100%), #0a0a0a"
      };
    }
    
    // Default Home Page Style
    return {
      background: isLight ? "#ffffff" : "#181818",
      borderBottom: isLight ? "1px solid #f3f4f6" : "none"
    };
  };

  const containerStyle = getBackgroundClass();

  return (
    <section 
      className="w-full transition-colors duration-300"
      style={containerStyle}
    >
      <div className="w-full px-[62px] sm:px-[124px] py-[10px] sm:py-[20px]">
        
        {/* Logo Logic:
            - Light Mode: Invert to black (opacity 0.8 for style)
            - Dark Mode: Keep white (opacity 0.7 for specific industry look, or keep normal)
        */}
        <div 
          className="flex flex-wrap justify-between items-center gap-4 sm:gap-8 transition-all duration-300"
          style={{ 
            filter: isLight ? "invert(1) opacity(0.8)" : "opacity(0.9)" 
          }}
        >
          <img 
            src="/images/img_logo.svg" 
            alt="Company Logo" 
            className="w-[34px] h-[17px] sm:w-[68px] sm:h-[34px]"
          />
          
          <div className="w-[0.5px] sm:w-[1px] h-[27px] sm:h-[54px] bg-[#f1f1f3] opacity-30"></div>
          
          <img 
            src="/images/img_logo_white_a700.svg" 
            alt="Company Logo" 
            className="w-[49px] h-[17px] sm:w-[98px] sm:h-[34px]"
          />
          
          <div className="w-[0.5px] sm:w-[1px] h-[27px] sm:h-[54px] bg-[#f1f1f3] opacity-30"></div>
          
          <img 
            src="/images/img_logo_white_a700_34x68.svg" 
            alt="Company Logo" 
            className="w-[34px] h-[17px] sm:w-[68px] sm:h-[34px]"
          />
          
          <div className="w-[0.5px] sm:w-[1px] h-[27px] sm:h-[54px] bg-[#f1f1f3] opacity-30"></div>
          
          <img 
            src="/images/img_logo_black_900.svg" 
            alt="Company Logo" 
            className="w-[38px] h-[17px] sm:w-[76px] sm:h-[34px]"
          />
          
          <div className="w-[0.5px] sm:w-[1px] h-[27px] sm:h-[54px] bg-[#f1f1f3] opacity-30"></div>
          
          <img 
            src="/images/img_logo_white_a700_34x78.svg" 
            alt="Company Logo" 
            className="w-[39px] h-[17px] sm:w-[78px] sm:h-[34px]"
          />
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;