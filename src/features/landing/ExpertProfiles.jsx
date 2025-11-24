import React, { useState } from "react";
import { useTheme } from "../../hooks/useTheme";

const ExpertProfiles = ({ variant = "home" }) => {
  const { isLight } = useTheme();

  // UPDATED: Added 2 more dummy profiles to make it 4 total
  const experts = [
    {
      id: 1,
      name: "Akash Sharma",
      role: "UI/UX Designer | Exp. 10 years",
      image: "/images/img_ellipse_1.png",
      skills: ["Fintech", "Figma", "Sql", "Java", "Node", "React"],
      description:
        "Results-driven IT professional with over 6 years of experience, specializing in Python development and Machine Learning. Skilled in designing user-centric solutions.",
      badges: [
        { icon: "/images/fintech.svg", text: "Fintech", bg: "#f4b840e5" },
        { icon: "/images/iit.svg", text: "IIT", bg: "#13a210" },
      ],
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Senior AI Engineer | Exp. 8 years",
      image: "/images/img_ellipse_1.png",
      skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision"],
      description:
        "Specialized in building scalable AI models for enterprise applications. Expert in Natural Language Processing and predictive analytics pipelines.",
      badges: [
        { icon: "/images/fintech.svg", text: "HealthTech", bg: "#3b82f6" },
        { icon: "/images/iit.svg", text: "BITS", bg: "#ef4444" },
      ],
    },
    {
      id: 3,
      name: "David Chen",
      role: "ML Ops Specialist | Exp. 7 years",
      image: "/images/img_ellipse_1.png",
      skills: ["AWS SageMaker", "Docker", "Kubernetes", "MLflow", "CI/CD"],
      description:
        "Focused on operationalizing machine learning models. Streamlining the path from prototype to production with robust MLOps practices.",
      badges: [
        { icon: "/images/fintech.svg", text: "SaaS", bg: "#8b5cf6" },
        { icon: "/images/iit.svg", text: "Stanford", bg: "#10b981" },
      ],
    },
    {
      id: 4,
      name: "Sarah Jenkins",
      role: "Blockchain Dev | Exp. 5 years",
      image: "/images/img_ellipse_1.png",
      skills: ["Solidity", "Rust", "Smart Contracts", "Web3.js", "Ethereum"],
      description:
        "Passionate about decentralized finance (DeFi) and secure smart contract development. Audited over 50+ contracts for security vulnerabilities.",
      badges: [
        { icon: "/images/fintech.svg", text: "DeFi", bg: "#f59e0b" },
        { icon: "/images/iit.svg", text: "MIT", bg: "#6366f1" },
      ],
    },
  ];

  const [expandedDesc, setExpandedDesc] = useState({});
  const [expandedSkills, setExpandedSkills] = useState({});

  const toggleDescription = (id) =>
    setExpandedDesc((prev) => ({ ...prev, [id]: !prev[id] }));

  const toggleSkills = (id) =>
    setExpandedSkills((prev) => ({ ...prev, [id]: !prev[id] }));

  // Background Logic
  const sectionClass = variant === "industry"
    ? "bg-transparent"
    : isLight ? "bg-white" : "bg-[#0a0a0a]";

  return (
    <section className={`w-full px-4 sm:px-6 lg:px-[30px] ${sectionClass}`}>
      <div className="w-full max-w-[1166px] mx-auto pt-[40px] pb-[40px]">
        
        {/* HEADER */}
        <div className="flex flex-col justify-start items-center w-full px-[20px] sm:px-[80px]">
          <h2
            className={`text-[28px] sm:text-[38px] md:text-[50px] font-space font-medium 
              text-center ${isLight ? "text-black" : "text-[#f1f1f1]"
              }`}
          >
            Meet Some of Our Vetted AI Experts
          </h2>

          <p
            className={`text-[12px] sm:text-[15px] md:text-[20px] text-center mt-2 ${isLight ? "text-[#6b6b6b]" : "text-[#bababa]"
              }`}
          >
            Every engineer here has passed multi-stage screening, hands-on AI project
            tests, and communication evaluations so you only meet the best.
          </p>
        </div>

        {/* GRID (Mobile: 1 col, Desktop: 2 cols - displaying 4 cards total) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 w-full mt-10">
          {experts.map((expert) => {
            const isDescExpanded = expandedDesc[expert.id];
            const isSkillsExpanded = expandedSkills[expert.id];

            const visibleSkills = isSkillsExpanded
              ? expert.skills
              : expert.skills.slice(0, 6);

            return (
              <div
                key={expert.id}
                className={`flex flex-col gap-4 rounded-[14px] p-[20px] shadow-md transition-all ${isLight
                    ? "bg-white border border-[#e6e6e6]"
                    : "bg-[#1b1b1b] shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
                  }`}
              >
                {/* HEADER: Image + Name */}
                <div className="flex flex-col sm:flex-row gap-[12px] items-start sm:items-center">
                  <img
                    src={expert.image}
                    className="w-[64px] h-[64px] rounded-full"
                    alt={expert.name}
                  />

                  <div>
                    <h3
                      className={`text-[20px] sm:text-[22px] font-dm font-semibold ${isLight ? "text-black" : "text-white"
                        }`}
                    >
                      {expert.name}
                    </h3>

                    <p
                      className={`text-[12px] sm:text-[14px] ${isLight ? "text-[#777]" : "text-[#bababa]"
                        }`}
                    >
                      {expert.role}
                    </p>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {expert.badges.map((badge, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 px-3 py-1 rounded-[6px]"
                          style={{ background: badge.bg }}
                        >
                          <img
                            src={badge.icon}
                            className="w-[18px] h-[18px]"
                            alt={badge.text}
                          />
                          <span className="text-white text-[12px] font-medium">
                            {badge.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {visibleSkills.map((skill, i) => (
                    <span
                      key={i}
                      className={`text-[13px] px-3 py-[6px] rounded-md ${isLight
                          ? "bg-[#f4f4f4] text-[#444]"
                          : "bg-[#2f2f2f] text-[#dcdcdc]"
                        }`}
                    >
                      {skill}
                    </span>
                  ))}

                  {!isSkillsExpanded && expert.skills.length > 6 && (
                    <button
                      onClick={() => toggleSkills(expert.id)}
                      className={`text-[13px] underline ${isLight ? "text-[#666]" : "text-[#bbbbbb]"
                        }`}
                    >
                      +{expert.skills.length - 6} more
                    </button>
                  )}

                  {isSkillsExpanded && (
                    <button
                      onClick={() => toggleSkills(expert.id)}
                      className={`text-[13px] underline ${isLight ? "text-[#666]" : "text-[#bbbbbb]"
                        }`}
                    >
                      Show less
                    </button>
                  )}
                </div>

                {/* DESCRIPTION */}
                <p
                  className={`leading-[22px] 
                    text-[14px] ${isLight ? "text-[#444]" : "text-[#bababa]"
                    }`}
                >
                  {isDescExpanded
                    ? expert.description
                    : expert.description.slice(0, 110) + "... "}
                  <button
                    onClick={() => toggleDescription(expert.id)}
                    className={`underline font-medium ${isLight ? "text-[#6b46c1]" : "text-white"
                      }`}
                  >
                    {isDescExpanded ? "Read Less" : "Read More"}
                  </button>
                </p>

                {/* BUTTON */}
                <div className="mt-auto pt-4">
                  <div className="p-[2px] rounded-[10px] bg-gradient-to-r from-[#8b5cf6] to-[#513590] inline-block w-full sm:w-auto">
                    <button
                      className={`w-full sm:w-auto px-8 py-3 rounded-[8px] text-[16px] flex items-center justify-center gap-2
                        ${isLight
                          ? "bg-white text-black"
                          : "bg-[#1b1b1b] text-white"
                        }`}
                    >
                      View Profile
                      <img
                        src="/images/img_callmade.svg"
                        className="w-[14px] h-[14px]"
                        alt="arrow"
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* VIEW MORE CTA */}
        <div className="flex justify-center mt-[40px]">
          <div className="p-[2px] rounded-[8px] bg-gradient-to-r from-[#8b5cf6] to-[#513590] inline-block">
            <button
              className={`px-10 py-3 rounded-[8px] text-[16px] font-semibold ${isLight ? "bg-white text-black" : "bg-[#161616] text-white"
                }`}
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertProfiles;