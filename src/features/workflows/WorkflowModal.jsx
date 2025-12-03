import React, { useEffect } from "react";
import { useTheme } from "../../hooks/useTheme";
import Button from "../../components/ui/Button";

const WorkflowModal = ({ isOpen, onClose, workflow }) => {
  const { isLight } = useTheme();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !workflow) return null;

  return (
    // BACKDROP
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* MODAL CONTAINER */}
      <div 
        className={`
          relative w-full max-w-2xl rounded-2xl shadow-2xl transform transition-all scale-100 animate-fade-in-up
          ${isLight ? "bg-white" : "bg-[#1a1a1a] border border-[#333]"}
        `}
        style={{ maxHeight: "90vh", overflowY: "auto" }}
      >
        
        {/* 1. HEADER (Title + Close) */}
        <div className={`flex items-start justify-between p-6 border-b ${isLight ? "border-gray-100" : "border-[#333]"}`}>
          <div>
            <h3 className={`text-xl font-space font-bold leading-tight ${isLight ? "text-gray-900" : "text-white"}`}>
              {workflow.title}
            </h3>
            <span className={`text-xs font-medium mt-1 block ${isLight ? "text-gray-500" : "text-[#888]"}`}>
              ID: #{workflow.id} • Updated 2 days ago
            </span>
          </div>
          <button 
            onClick={onClose}
            className={`p-2 rounded-full transition-colors ${isLight ? "hover:bg-gray-100 text-gray-500" : "hover:bg-[#333] text-[#888]"}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="p-6">
          
          {/* 2. DESCRIPTION */}
          <div className="mb-8">
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${isLight ? "text-gray-400" : "text-[#666]"}`}>
              Description
            </h4>
            <p className={`text-sm leading-relaxed ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
              {workflow.description}
            </p>
          </div>

          {/* 3. DETAILS GRID (2 Cols, 3 Rows) */}
          <div className="mb-8">
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${isLight ? "text-gray-400" : "text-[#666]"}`}>
              Details
            </h4>
            <div className={`grid grid-cols-2 gap-4 p-4 rounded-xl ${isLight ? "bg-gray-50" : "bg-[#222]"}`}>
              
              {/* Row 1 */}
              <div>
                <span className={`block text-xs mb-1 ${isLight ? "text-gray-400" : "text-[#666]"}`}>Category</span>
                <span className={`font-medium text-sm ${isLight ? "text-gray-800" : "text-white"}`}>Marketing</span>
              </div>
              <div>
                <span className={`block text-xs mb-1 ${isLight ? "text-gray-400" : "text-[#666]"}`}>Complexity</span>
                <span className={`font-medium text-sm ${isLight ? "text-gray-800" : "text-white"}`}>Intermediate</span>
              </div>

              {/* Row 2 */}
              <div>
                <span className={`block text-xs mb-1 ${isLight ? "text-gray-400" : "text-[#666]"}`}>Status</span>
                <span className="inline-flex items-center gap-1.5 font-medium text-sm text-green-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  Active
                </span>
              </div>
              <div>
                <span className={`block text-xs mb-1 ${isLight ? "text-gray-400" : "text-[#666]"}`}>Trigger</span>
                <span className={`font-medium text-sm ${isLight ? "text-gray-800" : "text-white"}`}>Webhook</span>
              </div>

              {/* Row 3 */}
              <div>
                <span className={`block text-xs mb-1 ${isLight ? "text-gray-400" : "text-[#666]"}`}>Nodes</span>
                <span className={`font-medium text-sm ${isLight ? "text-gray-800" : "text-white"}`}>12 Nodes</span>
              </div>
              <div>
                <span className={`block text-xs mb-1 ${isLight ? "text-gray-400" : "text-[#666]"}`}>File Size</span>
                <span className={`font-medium text-sm ${isLight ? "text-gray-800" : "text-white"}`}>45 KB</span>
              </div>

            </div>
          </div>

          {/* 4. INTEGRATIONS (Tags) */}
          <div className="mb-8">
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-3 ${isLight ? "text-gray-400" : "text-[#666]"}`}>
              Integrations
            </h4>
            <div className="flex flex-wrap gap-2">
              {workflow.tags.map((tag, i) => (
                <span 
                  key={i}
                  className={`
                    px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wide border
                    ${isLight 
                      ? "bg-white border-gray-200 text-gray-600" 
                      : "bg-[#252525] border-[#333] text-[#ccc]"
                    }
                  `}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* 5. FOOTER ACTIONS */}
        <div className={`p-6 border-t flex flex-col sm:flex-row gap-3 ${isLight ? "border-gray-100 bg-gray-50/50" : "border-[#333] bg-[#222]/30"}`}>
          
          <button 
            className={`
              flex-1 py-3 rounded-xl text-sm font-bold border flex items-center justify-center gap-2 transition-colors
              ${isLight 
                ? "bg-white border-gray-200 text-gray-700 hover:bg-gray-50" 
                : "bg-[#252525] border-[#333] text-[#ccc] hover:bg-[#333]"
              }
            `}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download JSON
          </button>

          <button 
            className={`
              flex-1 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 text-white
              bg-gradient-to-r from-[#ff6d5a] to-[#ff4f81] shadow-lg shadow-orange-500/20
            `}
          >
            <span>Use Workflow</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>

        </div>

      </div>
      
      {/* Animation Style */}
      <style>{`
        @keyframes fadeInUpModal {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUpModal 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default WorkflowModal;