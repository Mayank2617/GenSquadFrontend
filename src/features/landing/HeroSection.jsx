import React from "react";
import Button from "../../components/ui/Button";
import { useTheme } from "../../hooks/useTheme";

const HeroSection = () => {
  const { theme } = useTheme(); // Hook handles the logic now

  const darkBg = "/images/hero_dark.png";
  const lightBg = "/images/hero_light.png";
  const backgroundImage = theme === "light" ? lightBg : darkBg;

  const overlayStyle =
    theme === "light"
      ? "linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85))"
      : "linear-gradient(rgba(4,4,6,0.6), rgba(4,4,6,0.6))";

  const headingColor = theme === "light" ? "text-black" : "text-white";
  const subtextColor = theme === "light" ? "text-gray-700" : "text-[#bababa]";

  return (
    <section className="w-full">
      <div
        className="w-full bg-center bg-cover bg-no-repeat relative flex items-center justify-center min-h-screen pt-[80px]"
        style={{
          backgroundImage: `${overlayStyle}, url(${backgroundImage})`,
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-8 text-center">

          <div className="flex flex-col items-center justify-center gap-4">

            {/* Icon + Heading */}
            <div className="inline-flex items-center justify-center gap-4 mb-4">
              <div className="rounded-md bg-purple-600 w-12 h-12 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="#fff" />
                </svg>
              </div>

              <h1 className={`font-space font-bold text-3xl sm:text-5xl md:text-6xl leading-tight ${headingColor}`}>
                Hire World-Class AI Engineers
              </h1>
            </div>

            {/* Subtitle */}
            <h2 className={`text-xl sm:text-2xl md:text-3xl font-medium ${headingColor}`}>
              in 48 Hrs with unmatched quality.
            </h2>

            {/* Description */}
            <p className={`mt-2 max-w-[900px] mx-auto ${subtextColor}`}>
              Access a curated network of <strong>AI & software experts</strong> vetted, reliable,
              and always ready to deliver.
            </p>

            {/* Get Started Button */}
            <div className="mt-6">
              <Button
                text="Get Started"
                text_font_size="18"
                text_font_family="Be Vietnam Pro"
                text_font_weight="500"
                text_line_height="23px"
                text_text_align="center"
                text_color="#ffffff"
                border_border="1px solid transparent"
                border_border_image="linear-gradient(90deg,#8b5cf6 0%, #513590 100%)"
                border_border_radius="8px"
                fill_background_color={theme === "light" ? "#6b46c1" : "#8b5cf6"}
                layout_gap="8px"
                padding="12px 34px"
                className="inline-flex items-center gap-2"
              />
            </div>

            {/* Chips */}
            <div className="mt-6 flex justify-center gap-4">
              <button
                className={`px-4 py-2 rounded-md border cursor-pointer ${
                  theme === "light"
                    ? "bg-white/80 text-black border-gray-300"
                    : "bg-white/10 text-white/90 border-white/20"
                }`}
              >
                Vetted by Experts
              </button>

              <button
                className={`px-4 py-2 rounded-md border cursor-pointer ${
                  theme === "light"
                    ? "bg-white/80 text-black border-gray-300"
                    : "bg-white/10 text-white/90 border-white/20"
                }`}
              >
                Real Project Validation
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;