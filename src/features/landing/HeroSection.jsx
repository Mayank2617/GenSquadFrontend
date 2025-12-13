import React, { useEffect } from "react";
import { Link } from "react-router-dom"; // 1. Import Link
import Button from "../../components/ui/Button";
import { useTheme } from "../../hooks/useTheme";

const HeroSection = () => {
  const { isLight } = useTheme();

  useEffect(() => {
    // 1. Load the Script
    if (!document.querySelector('script[src*="unicornStudio.umd.js"]')) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.35/dist/unicornStudio.umd.js";
      script.async = true;
      script.onload = () => {
        if (window.UnicornStudio) {
          window.UnicornStudio.init();
        }
      };
      document.body.appendChild(script);
    } else {
      if (window.UnicornStudio && window.UnicornStudio.init) {
        window.UnicornStudio.init();
      }
    }

    // 2. BADGE HUNTER (Hides the 'Made with Unicorn Studio' badge)
    const badgeHunter = setInterval(() => {
      const badges = document.querySelectorAll('a[href*="unicorn.studio"]');
      badges.forEach((badge) => {
        badge.style.display = 'none';
        badge.style.opacity = '0';
        badge.style.visibility = 'hidden';
        badge.style.pointerEvents = 'none';
      });
    }, 100);

    const stopHunter = setTimeout(() => {
      clearInterval(badgeHunter);
    }, 5000);

    return () => {
      clearInterval(badgeHunter);
      clearTimeout(stopHunter);
    };
  }, []);

  return (
    <section className="w-full relative min-h-screen flex flex-col overflow-hidden">

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none bg-black">
        <div
          data-us-project="IeQjo313ngSwpb4lfQQu"
          style={{ width: '100%', height: '100%' }}
        ></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full flex-grow flex flex-col justify-center items-center pt-[100px] pb-20">
        <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-8 text-center">
          <div className="flex flex-col items-center justify-center gap-6">

            {/* Icon + Heading */}
            <div className="inline-flex items-center justify-center gap-4 mb-2">
              <div className="rounded-md bg-purple-600 w-12 h-12 flex items-center justify-center shadow-lg shadow-purple-500/30">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="#fff" />
                </svg>
              </div>
              <h1 className={`font-space font-bold text-4xl sm:text-5xl md:text-7xl leading-tight ${isLight ? "text-gray-900" : "text-white"}`}>
                Hire Top-Tier AI Engineers
              </h1>
            </div>

            {/* Subtitle */}
            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-medium ${isLight ? "text-gray-800" : "text-white"}`}>
              in Just 48 Hours
            </h2>

            {/* Description */}
            <p className={`mt-4 max-w-[800px] mx-auto text-lg sm:text-xl leading-relaxed ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
              Access a pre-vetted network of <strong>top 1% AI & software engineers.</strong> Reliable, specialized, and ready to deploy immediately.
            </p>

            {/* Get Started Button (Linked to Talent Page) */}
            <div className="mt-8">
              <Link to="/talent">
                <Button
                  text="Start Hiring"
                  text_font_size="18"
                  text_font_family="Be Vietnam Pro"
                  text_font_weight="500"
                  text_line_height="23px"
                  text_text_align="center"
                  text_color="#ffffff"
                  border_border="1px solid transparent"
                  border_border_image="linear-gradient(90deg,#8b5cf6 0%, #513590 100%)"
                  border_border_radius="8px"
                  fill_background_color={isLight ? "#6b46c1" : "#8b5cf6"}
                  layout_gap="8px"
                  padding="14px 40px"
                  className="inline-flex items-center gap-2 shadow-xl shadow-purple-500/20 hover:scale-105 transition-transform"
                />
              </Link>
            </div>

            {/* Chips */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className={`px-5 py-2.5 rounded-full border cursor-pointer backdrop-blur-md transition-colors ${isLight ? "bg-white/60 text-black border-gray-300 hover:bg-white" : "bg-white/10 text-white/90 border-white/20 hover:bg-white/20"}`}>
                Vetted by Experts
              </button>
              <button className={`px-5 py-2.5 rounded-full border cursor-pointer backdrop-blur-md transition-colors ${isLight ? "bg-white/60 text-black border-gray-300 hover:bg-white" : "bg-white/10 text-white/90 border-white/20 hover:bg-white/20"}`}>
                Real Project Validation
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Backup CSS Rule to hide Unicorn Studio Badge */}
      <style>{`
        a[href*="unicorn.studio"] {
          display: none !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;