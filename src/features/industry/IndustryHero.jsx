import React from "react";
import Button from "../../components/ui/Button";
import { useTheme } from "../../hooks/useTheme";

const IndustryHero = ({ title, subtitle }) => {
  const { isLight } = useTheme();

  // 🎨 BACKGROUND CONFIGURATION
  const backgroundStyle = {
    background: isLight 
      // Light Mode: Visible Light Purple/Blue Base + Stronger Accents
      // 1. Base is a light lavender (#f5f3ff)
      // 2. Top-Left is a strong Purple glow (30% opacity)
      // 3. Top-Right is a strong Blue glow (30% opacity)
      ? "radial-gradient(circle at 15% 15%, rgba(139, 92, 246, 0.35) 0%, transparent 45%), radial-gradient(circle at 85% 15%, rgba(59, 130, 246, 0.35) 0%, transparent 45%), linear-gradient(to bottom, #f3f0ff, #f0f9ff)"
      
      // Dark Mode: Deep Purple Glow (Unchanged)
      : "radial-gradient(50% 50% at 50% 50%, rgba(76, 29, 149, 0.35) 0%, rgba(10, 10, 10, 1) 100%), #0a0a0a",
  };

  return (
    <section 
      className="w-full relative flex items-center justify-center min-h-screen pt-[80px] overflow-hidden"
      style={backgroundStyle}
    >
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          // Made the grid darker in light mode (rgba(0,0,0,0.1)) so it pops against the color
          backgroundImage: isLight 
            ? `linear-gradient(rgba(0,0,0,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.07) 1px, transparent 1px)`
            : `linear-gradient(#888 1px, transparent 1px), linear-gradient(90deg, #888 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: isLight ? 1 : 0.03 // Increased opacity for light mode
        }}
      />

      <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-8 text-center relative z-10">
        <div className="flex flex-col items-center justify-center gap-6">

          {/* 1. Pill Label */}
          <div className={`
            px-4 py-1.5 rounded-full border text-sm font-medium
            ${isLight 
              ? "bg-white/60 border-purple-300 text-purple-800 backdrop-blur-sm" 
              : "bg-white/5 border-white/10 text-purple-300"
            }
          `}>
            Industry Expertise
          </div>

          {/* 2. Main Heading */}
          <h1 className={`
            font-space font-bold text-4xl sm:text-5xl md:text-7xl leading-tight max-w-[900px]
            ${isLight ? "text-gray-900" : "text-white"}
          `}>
            {title}
          </h1>

          {/* 3. Subtitle */}
          <p className={`
            text-lg sm:text-xl max-w-[700px] mx-auto leading-relaxed
            ${isLight ? "text-gray-700" : "text-[#bababa]"}
          `}>
            {subtitle}
          </p>

          {/* 4. Single Button */}
          <div className="mt-8 flex justify-center w-full">
            <Button
              text="Get Started"
              text_font_size="18"
              text_font_weight="500"
              text_color="#ffffff"
              fill_background="linear-gradient(90deg, #8b5cf6 0%, #513590 100%)"
              padding="14px 48px"
              border_border_radius="8px"
              className="shadow-lg shadow-purple-500/20 hover:scale-105 transition-transform duration-200"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustryHero;