import React from 'react';

const CompanyLogos = () => {
  return (
    <section className="w-full bg-[#181818]">
      <div className="w-full px-[62px] sm:px-[124px] py-[10px] sm:py-[20px]">
        <div className="flex flex-wrap justify-between items-center gap-4 sm:gap-8">
          <img 
            src="/images/img_logo.svg" 
            alt="Company Logo" 
            className="w-[34px] h-[17px] sm:w-[68px] sm:h-[34px]"
          />
          <div className="w-[0.5px] sm:w-[1px] h-[27px] sm:h-[54px] bg-[#f1f1f3]"></div>
          <img 
            src="/images/img_logo_white_a700.svg" 
            alt="Company Logo" 
            className="w-[49px] h-[17px] sm:w-[98px] sm:h-[34px]"
          />
          <div className="w-[0.5px] sm:w-[1px] h-[27px] sm:h-[54px] bg-[#f1f1f3]"></div>
          <img 
            src="/images/img_logo_white_a700_34x68.svg" 
            alt="Company Logo" 
            className="w-[34px] h-[17px] sm:w-[68px] sm:h-[34px]"
          />
          <div className="w-[0.5px] sm:w-[1px] h-[27px] sm:h-[54px] bg-[#f1f1f3]"></div>
          <img 
            src="/images/img_logo_black_900.svg" 
            alt="Company Logo" 
            className="w-[38px] h-[17px] sm:w-[76px] sm:h-[34px]"
          />
          <div className="w-[0.5px] sm:w-[1px] h-[27px] sm:h-[54px] bg-[#f1f1f3]"></div>
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