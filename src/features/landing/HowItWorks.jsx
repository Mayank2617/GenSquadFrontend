import React from "react";
import Button from "../../components/ui/Button";
import { useTheme } from "../../hooks/useTheme";

const HowItWorks = () => {
  const { isLight } = useTheme();
  
  return (
    <section
      className={`w-full px-4 sm:px-6 lg:px-[30px] pt-[20px] pb-[20px] ${isLight ? "bg-white" : "bg-[#0a0a0a]"
        }`}
    >
      <div className="w-full max-w-[1166px] mx-auto">

        {/* Header */}
        <div className="flex flex-col justify-center items-center w-full max-w-[700px] mx-auto text-center mb-[40px]">
          <h2
            className={`text-[28px] sm:text-[40px] md:text-[50px] font-space font-medium ${isLight ? "text-black" : "text-white"
              }`}
          >
            Here’s how it works
          </h2>

          <p
            className={`text-[12px] sm:text-[18px] md:text-[20px] font-dm mt-2 leading-[22px] ${isLight ? "text-[#6b6b6b]" : "text-[#bababa]"
              }`}
          >
            Tell our private network what you’re looking for and start receiving
            curated pitches within 48 hours.
          </p>
        </div>

        {/* Step Labels */}
        <div className="flex justify-between text-center mb-[10px]">
          <span
            className={`font-dm text-[15px] sm:text-[18px] font-medium ${isLight ? "text-black" : "text-white"
              }`}
          >
            Share Your Requirements
          </span>

          <span
            className={`font-dm text-[15px] sm:text-[18px] ${isLight ? "text-[#6b6b6b]" : "text-[#bababa]"
              }`}
          >
            Get Curated Matches
          </span>

          <span
            className={`font-dm text-[15px] sm:text-[18px] ${isLight ? "text-[#6b6b6b]" : "text-[#bababa]"
              }`}
          >
            Review & Connect
          </span>

          <span
            className={`font-dm text-[15px] sm:text-[18px] ${isLight ? "text-[#6b6b6b]" : "text-[#bababa]"
              }`}
          >
            Hire in 48 Hours
          </span>
        </div>

        {/* Line */}
        <div
          className={`w-full h-[1px] mb-[50px] ${isLight ? "bg-black/20" : "bg-white/20"
            }`}
        />

        {/* Background + Foreground */}
        <div className="relative w-full flex justify-center mb-[60px]">
          {/* Gradient background */}
          <div
            className="
              absolute
              w-[92%] sm:w-[88%]
              h-[260px] sm:h-[420px]
              bg-gradient-to-r from-[#8b5cf6] to-[#513590]
              rounded-[20px] sm:rounded-[28px]
              top-[50px]
              z-0
            "
          />

          {/* Image */}
          <img
            src="/images/img_image_1.png"
            alt="How it works"
            className="
              relative
              z-10
              w-[92%] sm:w-[88%]
              rounded-[20px] sm:rounded-[28px]
              object-cover
              shadow-xl
            "
            style={{ maxHeight: "460px" }}
          />
        </div>

        {/* CTA */}
        <div className="w-full max-w-[600px] mx-auto text-center">
          <h3
            className={`text-[28px] sm:text-[38px] md:text-[50px] font-space font-medium leading-[40px] ${isLight ? "text-black" : "text-white"
              }`}
          >
            Tell us what you need
          </h3>

          <p
            className={`text-[12px] sm:text-[16px] md:text-[20px] font-dm mt-2 leading-[25px] ${isLight ? "text-[#6b6b6b]" : "text-[#bababa]"
              }`}
          >
            Describe your project, team size, or skill requirements in a quick
            form — it takes under 2 minutes.
          </p>

          <div className="flex justify-center mt-[40px]">
            <div className="p-[2px] rounded-[8px] bg-gradient-to-r from-[#8b5cf6] to-[#513590] inline-block">
              <button
                className={`px-10 py-3 rounded-[8px] text-[16px] font-semibold ${isLight ? "bg-white text-black" : "bg-[#161616] text-white"
                  }`}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;