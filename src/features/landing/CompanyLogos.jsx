import React from 'react';
import { useTheme } from "../../hooks/useTheme";

const CompanyLogos = ({ variant = "home" }) => {
  const { isLight } = useTheme();
  const isIndustry = variant === "industry";

  return (
    <section 
      className="w-full transition-colors duration-300"
      style={{
        // 1. FORCE TRANSPARENCY if industry variant
        backgroundColor: isIndustry 
          ? "transparent" 
          : isLight ? "#ffffff" : "#181818",
        
        // 2. REMOVE BORDER if industry variant
        borderBottom: isIndustry 
          ? "none" 
          : isLight ? "1px solid #f3f4f6" : "none",
          
        // 3. Safety: Ensure no top border either
        borderTop: "none"
      }}
    >
      <div className="w-full px-[62px] sm:px-[124px] py-[10px] sm:py-[20px]">
        
        {/* Logo Filter Logic */}
        <div 
          className="flex flex-wrap justify-between items-center gap-4 sm:gap-8 transition-all duration-300"
          style={{ 
            filter: isLight ? "invert(1) opacity(0.8)" : "opacity(0.9)" 
          }}
        >
          <img src="/images/img_logo.svg" alt="Logo" className="w-[34px] h-[17px] sm:w-[68px] sm:h-[34px]" />
          <div className="w-[0.5px] sm:w-[1px] h-[27px] sm:h-[54px] bg-[#f1f1f3] opacity-30"></div>
          <img src="/images/img_logo_white_a700.svg" alt="Logo" className="w-[49px] h-[17px] sm:w-[98px] sm:h-[34px]" />
          <div className="w-[0.5px] sm:w-[1px] h-[27px] sm:h-[54px] bg-[#f1f1f3] opacity-30"></div>
          <img src="/images/img_logo_white_a700_34x68.svg" alt="Logo" className="w-[34px] h-[17px] sm:w-[68px] sm:h-[34px]" />
          <div className="w-[0.5px] sm:w-[1px] h-[27px] sm:h-[54px] bg-[#f1f1f3] opacity-30"></div>
          <img src="/images/img_logo_black_900.svg" alt="Logo" className="w-[38px] h-[17px] sm:w-[76px] sm:h-[34px]" />
          <div className="w-[0.5px] sm:w-[1px] h-[27px] sm:h-[54px] bg-[#f1f1f3] opacity-30"></div>
          <img src="/images/img_logo_white_a700_34x78.svg" alt="Logo" className="w-[39px] h-[17px] sm:w-[78px] sm:h-[34px]" />
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;