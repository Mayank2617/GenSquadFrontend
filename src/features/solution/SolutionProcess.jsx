import React from "react";
import Button from "../../components/ui/Button";
import { useTheme } from "../../hooks/useTheme";

// 📋 DATA: Exact text from your screenshots
const steps = [
  {
    id: "01",
    title: "Define Your AI Needs",
    description: "Tell us about your project goals, technical requirements, and the specific AI/ML challenges you want to solve. Whether it's building a recommendation engine or automating workflows, we'll help you scope the role.",
    image: "/images/img_rectangle_143.png" // Placeholder from TalentMatching
  },
  {
    id: "02",
    title: "Get Matched with Experts",
    description: "Our AI-driven platform instantly matches you with pre-vetted developers who have proven experience in your specific domain. Review profiles, past projects, and technical assessments to find the perfect fit.",
    image: "/images/img_rectangle_143.png"
  },
  {
    id: "03",
    title: "Start Building & Scaling",
    description: "Onboard your new team members seamlessly. We handle the contracts and compliance while you focus on building. Scale your team up or down as your project evolves with flexible engagement models.",
    image: "/images/img_rectangle_143.png"
  }
];

const SolutionProcess = () => {
  const { isLight } = useTheme();

  return (
    // Outer Wrapper: Provides the same padding/margins as the Hero Section
    <section className="w-full px-4 sm:px-6 lg:px-[40px] py-20">
      
      {/* 🃏 THE MAIN CARD CONTAINER */}
      <div 
        className={`
          w-full max-w-[1440px] mx-auto 
          rounded-[40px] px-6 py-16 sm:px-12 sm:py-20
          border shadow-2xl transition-all duration-300
          ${isLight 
            ? "bg-white border-white/50 shadow-purple-500/5" 
            : "bg-[#121212] border-white/10 shadow-black/50"
          }
        `}
      >
        
        {/* 1. CENTERED HEADER */}
        <div className="max-w-[900px] mx-auto text-center mb-20 sm:mb-24">
          <h2 className={`
            font-space font-bold text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight
            ${isLight ? "text-gray-900" : "text-white"}
          `}>
            How GenSquad AI & ML Solutions Work
          </h2>
          <p className={`
            text-lg sm:text-xl leading-relaxed
            ${isLight ? "text-gray-600" : "text-[#bababa]"}
          `}>
            We simplify the path from concept to deployment. Our process ensures you get the right experts, the right strategy, and the right results—fast.
          </p>
        </div>

        {/* 2. STEPS LOOP */}
        <div className="flex flex-col gap-20 sm:gap-32">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 group"
            >
              
              {/* IMAGE COLUMN (Left) */}
              <div className="w-full lg:w-1/2">
                <div className={`
                  relative rounded-[24px] overflow-hidden aspect-[4/3] shadow-lg
                  border transition-all duration-500 group-hover:scale-[1.02]
                  ${isLight ? "border-gray-100" : "border-white/10"}
                `}>
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay Gradient for depth */}
                  <div className={`absolute inset-0 ${isLight ? "bg-gradient-to-t from-black/10" : "bg-gradient-to-t from-black/40"} to-transparent`}></div>
                </div>
              </div>

              {/* TEXT CONTENT COLUMN (Right) */}
              <div className="w-full lg:w-1/2 flex flex-col items-start">
                
                {/* Step Number */}
                <span className={`
                  text-6xl sm:text-8xl font-space font-bold opacity-20 mb-4 select-none
                  ${isLight ? "text-purple-900" : "text-white"}
                `}>
                  {step.id}
                </span>

                {/* Title */}
                <h3 className={`
                  text-2xl sm:text-3xl font-space font-bold mb-4
                  ${isLight ? "text-gray-900" : "text-white"}
                `}>
                  {step.title}
                </h3>

                {/* Description */}
                <p className={`
                  text-lg leading-relaxed mb-8
                  ${isLight ? "text-gray-600" : "text-[#bababa]"}
                `}>
                  {step.description}
                </p>

                {/* Button */}
                <Button
                  text="Get Started"
                  text_font_size="16"
                  text_font_weight="600"
                  text_color="#ffffff"
                  fill_background="linear-gradient(90deg, #8b5cf6 0%, #513590 100%)"
                  padding="12px 32px"
                  border_border_radius="8px"
                  className="shadow-md shadow-purple-500/20"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionProcess;