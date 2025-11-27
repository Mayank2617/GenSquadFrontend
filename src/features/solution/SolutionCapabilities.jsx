import React from "react";
import { useTheme } from "../../hooks/useTheme";

// 📋 DATA: Update this text to match your Figma screenshot exactly!
const capabilities = [
  {
    title: "Natural Language Processing",
    description: "Build intelligent chatbots, sentiment analysis tools, and automated document processing systems using state-of-the-art LLMs.",
    icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" // Chat
  },
  {
    title: "Computer Vision",
    description: "Implement object detection, facial recognition, and visual inspection systems for manufacturing, security, and healthcare.",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" // Eye
  },
  {
    title: "Predictive Analytics",
    description: "Turn raw data into actionable insights. We build forecasting models for demand planning, risk assessment, and churn prediction.",
    icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" // Graph
  },
  {
    title: "Generative AI",
    description: "Leverage models like GPT-4 and Stable Diffusion to create custom content generation tools, design assistants, and code pilots.",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" // Magic/Lab
  },
  {
    title: "Recommendation Engines",
    description: "Boost engagement and sales with personalized recommendation algorithms similar to those used by Netflix and Amazon.",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" // Star
  },
  {
    title: "Data Engineering",
    description: "Design robust ETL pipelines and data warehouses that ensure your AI models are fed with clean, reliable, and real-time data.",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" // Database
  }
];

const SolutionCapabilities = () => {
  const { isLight } = useTheme();

  return (
    <section className="w-full px-4 sm:px-6 lg:px-[40px] py-20">
      <div className="w-full max-w-[1440px] mx-auto">
        
        {/* 1. CENTERED HEADER */}
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in-up">
          <h2 className={`
            font-space font-bold text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight
            ${isLight ? "text-gray-900" : "text-white"}
          `}>
            Comprehensive AI Capabilities
          </h2>
          <p className={`
            text-lg sm:text-xl max-w-[800px] leading-relaxed
            ${isLight ? "text-gray-600" : "text-[#bababa]"}
          `}>
            From proof-of-concept to production-grade systems, our experts cover the full spectrum of artificial intelligence technologies.
          </p>
        </div>

        {/* 2. 6-CARD GRID (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((item, i) => (
            <div 
              key={i}
              className={`
                group relative p-8 rounded-[24px] border transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
                ${isLight 
                  ? "bg-white border-purple-100 shadow-sm hover:shadow-purple-500/10" 
                  : "bg-[#161616] border-white/5 hover:border-purple-500/30 hover:shadow-purple-900/20"
                }
              `}
            >
              {/* Icon Container */}
              <div className={`
                w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300
                ${isLight 
                  ? "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white" 
                  : "bg-purple-900/20 text-purple-400 group-hover:bg-purple-600 group-hover:text-white"
                }
              `}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.icon} />
                </svg>
              </div>

              {/* Title */}
              <h3 className={`
                text-xl font-space font-bold mb-3
                ${isLight ? "text-gray-900" : "text-white"}
              `}>
                {item.title}
              </h3>

              {/* Description */}
              <p className={`
                text-base leading-relaxed
                ${isLight ? "text-gray-600" : "text-[#bababa]"}
              `}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionCapabilities;