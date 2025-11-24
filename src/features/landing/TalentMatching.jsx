import React, { useState } from "react";
import Button from "../../components/ui/Button";
import { useTheme } from "../../hooks/useTheme";

const TalentMatching = () => {
  const { isLight } = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const steps = ["Meet the Pros", "Schedule Interview", "Hire & Onboard"];

  return (
    <section
      className={`w-full px-4 sm:px-6 lg:px-14 py-[35px] sm:py-[70px] 
      ${isLight ? "bg-white" : "bg-[#0a0a0a]"}`}
    >
      <div className="w-full max-w-[1440px] mx-auto">

        {/* HEADER */}
        <div className="flex flex-col gap-[25px] sm:gap-[50px] items-center">

          <div className="flex flex-col items-center px-0 sm:px-[120px]">

            <h2
              className={`text-[25px] sm:text-[38px] md:text-[50px] 
              font-space font-medium text-center 
              ${isLight ? "text-black" : "text-white"}`}
            >
              AI Talent Matching Made Simple
            </h2>

            <p
              className={`text-[10px] sm:text-[15px] md:text-[20px] 
              font-dm leading-[15px] sm:leading-[23px] md:leading-[30px] 
              text-center w-full 
              ${isLight ? "text-[#6b6b6b]" : "text-[#bababa]"}`}
            >
              Hire top tech experts effortlessly just 3 simple steps 
              from match to onboard, powered by AI.
            </p>

            {/* STEPS */}
            <div className="flex flex-col sm:flex-row gap-[7px] sm:gap-[14px] mt-4">
              {steps.map((step, index) => {
                const active = activeStep === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`
                      text-[18px] px-4 py-2 rounded-md transition-all 
                      font-vietnam border

                      ${isLight
                        ? active
                          ? "bg-black text-white underline underline-offset-4 border-black"
                          : "bg-white text-[#8b8b8b] border-[#e5e5e5] hover:text-black"
                        : active
                          ? "bg-[#1A1A1A] text-white underline underline-offset-4"
                          : "text-[#bababa] hover:text-white"
                      }
                    `}
                  >
                    {step}
                  </button>
                );
              })}
            </div>
          </div>

          {/* CONTENT SECTION */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 w-full">

            {/* LEFT IMAGE */}
            <div className="w-full lg:w-[56%]">
              <img
                src="/images/img_rectangle_143.png"
                alt="Meet the Pros"
                className="w-full rounded-[10px] sm:rounded-[20px]"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="w-full lg:w-[38%] flex flex-col gap-[16px] sm:gap-[32px]">

              <h3
                className={`text-[25px] sm:text-[38px] md:text-[50px] 
                font-space font-medium 
                ${isLight ? "text-black" : "text-white"}`}
              >
                Meet the Pros
              </h3>

              <p
                className={`text-[10px] sm:text-[15px] md:text-[20px] font-dm 
                ${isLight ? "text-[#6b6b6b]" : "text-[#bababa]"}`}
              >
                Where the best minds in tech meet real opportunities.
                Discover skilled professionals ready to build the future with you.
              </p>

              <Button
                text="Get Started"
                text_font_size="18"
                text_font_family="Be Vietnam Pro"
                text_font_weight="500"
                text_line_height="23px"
                text_color="#ffffff"
                border_border="1px solid transparent"
                border_border_radius="8px"
                border_border_image="linear-gradient(90deg,#8b5cf6 0%, #513590 100%)"
                fill_background_color={isLight ? "#6b46c1" : "#161616"}
                padding="10px 40px 10px 26px"
                className="inline-flex items-center gap-2"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TalentMatching;