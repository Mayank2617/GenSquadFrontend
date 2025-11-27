import React from "react";
import { Link } from 'react-router-dom';
import Button from "../../components/ui/Button";
import { useTheme } from "../../hooks/useTheme";

const SolutionCTA = ({
  title = "Accelerate your AI Talent Search",
  description = "Join 500+ forward-thinking companies building the future with GenSquad's top 1% AI talent."
}) => {
  const { isLight } = useTheme();

  return (
    <section className="w-full px-4 sm:px-6 lg:px-[40px] py-24 relative overflow-hidden">
      <div className="w-full max-w-[1000px] mx-auto relative z-10">

        {/* CENTERED CONTENT */}
        <div className="flex flex-col items-center text-center animate-fade-in-up">

          {/* Heading */}
          <h2 className={`
            font-space font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6
            ${isLight ? "text-gray-900" : "text-white"}
          `}>
            {title}
          </h2>

          {/* Description */}
          <p className={`
            text-lg sm:text-xl max-w-[700px] leading-relaxed mb-10
            ${isLight ? "text-gray-600" : "text-[#bababa]"}
          `}>
            {description}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto relative">

            {/* Glow Effect behind buttons */}
            <div className={`
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] blur-[40px] -z-10 rounded-full opacity-40
              ${isLight ? "bg-purple-300" : "bg-purple-900"}
            `}></div>

            <Button
              text="Get Started"
              text_font_size="18"
              text_font_weight="600"
              text_color="#ffffff"
              fill_background="linear-gradient(90deg, #8b5cf6 0%, #513590 100%)"
              padding="16px 48px"
              border_border_radius="12px"
              className="shadow-xl shadow-purple-500/30 hover:scale-105 transition-transform duration-200 w-full sm:w-auto"
            />

            <Link to="/talent">
              <Button
                text="Explore Talent"
                text_font_size="18"
                text_font_weight="600"
                text_color={isLight ? "#111" : "#fff"}
                fill_background="transparent"
                border_border={isLight ? "1px solid #e5e5e5" : "1px solid rgba(255,255,255,0.15)"}
                padding="16px 48px"
                border_border_radius="12px"
                className="hover:bg-white/5 backdrop-blur-sm transition-colors w-full sm:w-auto"
              />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionCTA;