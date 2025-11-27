import React from "react";
import { useTheme } from "../../hooks/useTheme";
import TalentFilters from "./TalentFilters";
import TalentCard from "./TalentCard";

// 🟢 BACKEND PREP: This data will eventually come from your API
const mockProfiles = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Senior AI Engineer",
    location: "San Francisco, USA",
    experience: "8 Years",
    image: "/images/img_ellipse_1.png",
    skills: ["Python", "TensorFlow", "PyTorch", "Computer Vision"],
    description: "Ex-Google AI researcher specializing in generative models. I build scalable inference engines and have optimized large language models for 3 Fortune 500 companies."
  },
  {
    id: 2,
    name: "David Chen",
    role: "Full Stack AI Dev",
    location: "Toronto, Canada",
    experience: "6 Years",
    image: "/images/img_ellipse_1.png",
    skills: ["React", "Node.js", "LangChain", "OpenAI API"],
    description: "Bridging the gap between web apps and AI. I create intuitive front-end interfaces that leverage complex backend AI agents for automated workflows."
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Data Scientist",
    location: "Madrid, Spain",
    experience: "5 Years",
    image: "/images/img_ellipse_1.png",
    skills: ["SQL", "Pandas", "Scikit-learn", "Tableau"],
    description: "Turning messy data into actionable business insights. Expert in predictive modeling for fintech and fraud detection systems with 99% accuracy rates."
  },
  {
    id: "4",
    name: "Michael Chang",
    role: "ML Ops Engineer",
    location: "Singapore",
    experience: "7 Years",
    image: "/images/img_ellipse_1.png",
    skills: ["AWS SageMaker", "Docker", "Kubernetes", "CI/CD"],
    description: "I ensure your models don't just live in notebooks. I deploy robust, scalable, and monitored ML pipelines that handle millions of requests daily."
  }
];

const TalentGridSection = () => {
  const { isLight } = useTheme();

  return (
    <section className="w-full px-6 lg:px-[80px] py-20">
      <div className="w-full max-w-[1440px] mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* --- LEFT COLUMN: FILTERS (3 Columns width) --- */}
          <div className="w-full lg:w-[300px] flex-shrink-0">
            <TalentFilters />
          </div>

          {/* --- RIGHT COLUMN: GRID (Remaining width) --- */}
          <div className="flex-1">
            
            {/* Header / Count */}
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-xl font-space font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
                Showing <span className="text-purple-500">4</span> top matches
              </h2>
              
              {/* Simple Sort Dropdown */}
              <div className="flex items-center gap-2">
                <span className={`text-sm ${isLight ? "text-gray-500" : "text-[#666]"}`}>Sort by:</span>
                <select className={`bg-transparent border-none text-sm font-bold outline-none cursor-pointer ${isLight ? "text-gray-900" : "text-white"}`}>
                  <option>Recommended</option>
                  <option>Experience (High-Low)</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            {/* THE GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mockProfiles.map((profile) => (
                <TalentCard key={profile.id} profile={profile} />
              ))}
            </div>

            {/* Pagination / Load More (Optional) */}
            <div className="mt-12 flex justify-center">
              <button className={`
                px-6 py-3 rounded-full text-sm font-bold border transition-all
                ${isLight 
                  ? "border-gray-200 text-gray-600 hover:border-purple-500 hover:text-purple-600" 
                  : "border-[#333] text-[#bababa] hover:border-purple-500 hover:text-white"
                }
              `}>
                Load More Profiles
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TalentGridSection;