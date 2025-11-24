import React from "react";
import { useTheme } from "../../hooks/useTheme";

const features = [
  {
    title: "Bank-Grade Security",
    description: "Engineers vetted for OWASP Top 10, data encryption, and zero-trust architecture expertise.",
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" // Shield
  },
  {
    title: "Regulatory Compliance",
    description: "Experience with GDPR, PCI-DSS, SOC2, and KYC/AML workflows tailored for fintech.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" // Check Circle
  },
  {
    title: "High-Frequency Trading",
    description: "Low-latency C++ and Rust experts capable of optimizing sub-millisecond execution engines.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z" // Lightning
  },
  {
    title: "Fraud Detection AI",
    description: "Data scientists skilled in anomaly detection, real-time risk scoring, and predictive modeling.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" // Brain/AI
  },
  {
    title: "Blockchain Integration",
    description: "Smart contract developers (Solidity, Rust) for DeFi protocols and secure digital wallets.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" // Code/Chain
  },
  {
    title: "Legacy Modernization",
    description: "Experts in migrating COBOL/Mainframe systems to scalable microservices architectures.",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" // Refresh/Sync
  }
];

const IndustryWhyChoose = ({ industryName }) => {
  const { isLight } = useTheme();

  return (
    // Updated padding: pt-8 to reduce top gap, pb-20 for bottom spacing
    // Removed style={{ background... }} to allow parent background to show through
    <section className="w-full pt-8 pb-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className={`
            font-space font-bold text-3xl sm:text-4xl md:text-5xl mb-6
            ${isLight ? "text-gray-900" : "text-white"}
          `}>
            Why {industryName} companies choose GenSquad
          </h2>
          <p className={`
            text-lg max-w-[800px] leading-relaxed
            ${isLight ? "text-gray-600" : "text-[#bababa]"}
          `}>
            Security, speed, and compliance are non-negotiable. We deliver engineers who understand the stakes.
          </p>
        </div>

        {/* CARDS GRID (Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, i) => (
            <div 
              key={i}
              className={`
                group relative p-8 rounded-[24px] border transition-all duration-300
                hover:-translate-y-2 hover:shadow-xl
                ${isLight 
                  ? "bg-white border-purple-100 hover:border-purple-300 shadow-sm hover:shadow-purple-500/20" 
                  : "bg-[#161616] border-[#333] hover:border-purple-500/50 hover:shadow-purple-900/20"
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

export default IndustryWhyChoose;