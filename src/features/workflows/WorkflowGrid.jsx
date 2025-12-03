import React, { useState } from "react";
import Button from "../../components/ui/Button";
import { useTheme } from "../../hooks/useTheme";
// 1. Import the Modal
import WorkflowModal from "./WorkflowModal";

// ... (generateMockWorkflows & getTagColor functions remain unchanged) ...
// 🛠️ MOCK DATA GENERATOR
const generateMockWorkflows = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    title: `Automated Lead Scoring & CRM Sync ${i + 1}`,
    description: "Automatically enrich leads from Typeform using Clearbit, score them based on company size, and sync high-value prospects directly to HubSpot and Slack for the sales team.",
    tags: [
      "Marketing", "Sales", "HubSpot", "Slack", "Typeform", "Clearbit", "OpenAI", "Automation", "CRM", "Lead Gen"
    ].sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 6) + 3),
    downloads: Math.floor(Math.random() * 5000),
  }));
};

const allWorkflows = generateMockWorkflows(42); 

const getTagColor = (tag, isLight) => {
  const colors = [
    isLight ? "bg-blue-100 text-blue-700" : "bg-blue-900/30 text-blue-300",
    isLight ? "bg-purple-100 text-purple-700" : "bg-purple-900/30 text-purple-300",
    isLight ? "bg-orange-100 text-orange-700" : "bg-orange-900/30 text-orange-300",
    isLight ? "bg-green-100 text-green-700" : "bg-green-900/30 text-green-300",
  ];
  const index = tag.length % colors.length;
  return colors[index];
};

const WorkflowGrid = () => {
  const { isLight } = useTheme();
  const [visibleCount, setVisibleCount] = useState(15);
  // 2. State for Modal
  const [selectedWorkflow, setSelectedWorkflow] = useState(null);
  
  const visibleWorkflows = allWorkflows.slice(0, visibleCount);
  const hasMore = visibleCount < allWorkflows.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 15);
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-[40px] pb-20">
      <div className="max-w-[1440px] mx-auto">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-end sm:items-center mb-10 border-b pb-4 border-gray-200 dark:border-white/10">
          <h2 className={`font-space font-bold text-2xl sm:text-3xl ${isLight ? "text-gray-900" : "text-white"}`}>
            Search Results
          </h2>
          <span className={`text-sm font-medium px-3 py-1 rounded-full border mt-2 sm:mt-0 ${isLight ? "bg-purple-50 text-purple-700 border-purple-100" : "bg-white/5 text-purple-300 border-white/10"}`}>
            {allWorkflows.length} Workflows Found
          </span>
        </div>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleWorkflows.map((workflow) => (
            <WorkflowCard 
              key={workflow.id} 
              data={workflow} 
              isLight={isLight} 
              onOpen={() => setSelectedWorkflow(workflow)} // Pass handler
            />
          ))}
        </div>

        {/* LOAD MORE */}
        {hasMore && (
          <div className="mt-16 flex justify-center">
            <button onClick={handleLoadMore} className={`px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 border ${isLight ? "bg-white border-gray-200 text-gray-700 hover:border-purple-500 hover:text-purple-600 shadow-sm" : "bg-[#121212] border-[#333] text-[#bababa] hover:border-purple-500 hover:text-white"}`}>
              Load More Workflows
            </button>
          </div>
        )}

      </div>

      {/* 3. Render Modal */}
      <WorkflowModal 
        isOpen={!!selectedWorkflow} 
        onClose={() => setSelectedWorkflow(null)} 
        workflow={selectedWorkflow} 
      />
    </section>
  );
};

// 🃏 INDIVIDUAL CARD (Updated to accept onOpen)
const WorkflowCard = ({ data, isLight, onOpen }) => {
  const maxTags = 5;
  const showTags = data.tags.slice(0, maxTags);
  const remainingTags = data.tags.length - maxTags;

  return (
    <div 
      onClick={onOpen} // Make whole card clickable
      className={`
        group relative flex flex-col justify-between h-full p-6 rounded-[24px] border transition-all duration-300 cursor-pointer
        hover:-translate-y-1 hover:shadow-xl
        ${isLight 
          ? "bg-white/80 border-gray-100 shadow-sm hover:border-purple-200" 
          : "bg-[#161616]/80 border-[#333] shadow-lg hover:border-purple-500/30"
        }
      `}
    >
      
      {/* CARD BODY */}
      <div>
        <div className="mb-4">
           <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isLight ? "bg-orange-100 text-orange-600" : "bg-orange-900/20 text-orange-500"}`}>
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
           </div>
        </div>

        <h3 className={`font-space font-bold text-lg leading-tight mb-3 line-clamp-2 ${isLight ? "text-gray-900 group-hover:text-purple-600 transition-colors" : "text-white group-hover:text-purple-400 transition-colors"}`}>
          {data.title}
        </h3>

        <p className={`text-sm leading-relaxed mb-6 line-clamp-3 ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
          {data.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6 h-[86px] content-start overflow-hidden relative">
          {showTags.map((tag, i) => (
            <span key={i} className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wide ${getTagColor(tag, isLight)}`}>
              {tag}
            </span>
          ))}
          {remainingTags > 0 && (
            <span className={`px-2 py-1 rounded-md text-[11px] font-bold border ${isLight ? "bg-gray-50 text-gray-500 border-gray-200" : "bg-[#222] text-gray-400 border-[#444]"}`}>
              +{remainingTags}
            </span>
          )}
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div className={`pt-5 mt-auto border-t flex items-center gap-3 ${isLight ? "border-gray-100" : "border-[#2a2a2a]"}`}>
        
        {/* JSON Button - Stop propagation so card click doesn't fire too */}
        <button 
          onClick={(e) => { e.stopPropagation(); alert("Downloading JSON..."); }}
          className={`flex-1 py-2.5 rounded-lg text-sm font-bold border flex items-center justify-center gap-2 transition-colors ${isLight ? "border-gray-200 text-gray-700 hover:bg-gray-50" : "border-[#333] text-[#ccc] hover:bg-[#222]"}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          JSON
        </button>

        {/* Use Button - Triggers Modal via prop or specialized action */}
        <button 
          onClick={(e) => { e.stopPropagation(); onOpen(); }}
          className={`flex-1 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 bg-[#ff6d5a] text-white hover:bg-[#ff5a45]`}
        >
          <span>Use Workflow</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>

      </div>

    </div>
  );
};

export default WorkflowGrid;