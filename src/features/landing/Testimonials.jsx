import React from "react";
import { useTheme } from "../../hooks/useTheme";
import "../../styles/testimonials.css";

// Dummy Data
const testimonials = [
  {
    id: 1,
    company: "/images/img_rectangle_28.png",
    quote: "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.",
    avatar: "/images/img_rectangle_25.png",
    name: "Akash",
    role: "UI-UX Designer",
  },
  {
    id: 2,
    company: "/images/img_rectangle_28.png",
    quote: "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.",
    avatar: "/images/img_rectangle_25.png",
    name: "Akash",
    role: "UI-UX Designer",
  },
  {
    id: 3,
    company: "/images/img_rectangle_28.png",
    quote: "Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros pharetra. Nam sed imperdiet turpis. In hac habitasse platea dictumst.",
    avatar: "/images/img_rectangle_25.png",
    name: "Akash",
    role: "UI-UX Designer",
  },
];

const Testimonials = ({ variant = "home" }) => {
  const { isLight } = useTheme();
  const isIndustry = variant === "industry";

  // Section Background Logic
  const wrapperStyle = {
    backgroundColor: isIndustry 
      ? "transparent" 
      : isLight ? "#ffffff" : "#0a0a0a",
    transition: "background-color 240ms ease",
  };

  return (
    <section className="w-full overflow-hidden transition-all duration-300">
      <div className="w-full mx-auto px-[20px] py-[40px]" style={wrapperStyle}>
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-[40px]">
          <h2 className={`
            text-[28px] sm:text-[38px] md:text-[50px] font-space font-medium
            ${isLight ? "text-[#111]" : "text-white"}
          `}>
            Voices of Trust
          </h2>

          <p className={`
            text-[14px] sm:text-[16px] md:text-[20px] max-w-[650px] leading-relaxed mt-4
            ${isLight ? "text-[#4A4A4A]" : "text-[#bababa]"}
          `}>
            Hear from founders, CTOs, and teams who trusted us to power their AI
            success stories.
          </p>
        </div>

        {/* MARQUEE */}
        <div className="marquee-container">
          {/* ROW 1 */}
          <div className="marquee-row marquee-left">
            <div className="marquee-track">
              {[...testimonials, ...testimonials].map((item, i) => (
                <TestimonialCard key={`r1-${i}`} item={item} isLight={isLight} />
              ))}
            </div>
          </div>

          {/* ROW 2 */}
          <div className="marquee-row marquee-right mt-[20px]">
            <div className="marquee-track">
              {[...testimonials, ...testimonials].map((item, i) => (
                <TestimonialCard key={`r2-${i}`} item={item} isLight={isLight} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// RESPONSIVE CARD COMPONENT
const TestimonialCard = ({ item, isLight }) => {
  return (
    <div
      className={`
        testimonial-card 
        w-[300px] sm:w-[420px] min-w-[300px] sm:min-w-[420px] 
        min-h-[260px] 
        px-[26px] py-[24px] mr-[20px] 
        rounded-[20px] flex flex-col justify-between
        ${isLight 
          ? "bg-white border border-gray-200 shadow-sm" 
          : "bg-[#111111] border border-[#2b2b2b] shadow-xl"
        }
      `}
    >
      <div className="flex justify-between items-start">
        <img src={item.company} className="w-[100px] sm:w-[120px] h-[40px] sm:h-[48px] rounded-[10px] object-cover" alt="company" />
        <img src="/images/img_vector.svg" className="w-[24px] sm:w-[32px] opacity-70" alt="quote" />
      </div>

      <p className={`mt-[18px] text-[14px] sm:text-[16px] leading-[22px] ${isLight ? "text-gray-600" : "text-[#d0d0d0]"}`}>
        {item.quote}
      </p>

      <div className="flex gap-3 items-center mt-[22px]">
        <img src={item.avatar} className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] rounded-full object-cover" alt={item.name} />
        <div>
          <h4 className={`text-[16px] sm:text-[18px] font-semibold ${isLight ? "text-gray-900" : "text-white"}`}>
            {item.name}
          </h4>
          <p className={`text-[12px] sm:text-[14px] ${isLight ? "text-gray-500" : "text-[#bababa]"}`}>
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;