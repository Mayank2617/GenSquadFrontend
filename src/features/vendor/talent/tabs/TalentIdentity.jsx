import React, { useState } from "react";

const TalentIdentity = ({ isLight, initialData }) => {
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  return (
    <div className="animate-fade-in-up">
      <div className="mb-8">
        <h2 className={`text-2xl font-space font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
          TALENT IDENTITY
        </h2>
        <p className={`text-sm mt-1 ${isLight ? "text-gray-500" : "text-[#888]"}`}>
          Basic information visible to potential employers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        <InputField label="Full Name" placeholder="e.g. Sarah Jenkins" isLight={isLight} defaultValue={initialData?.fullName} />
        <InputField label="Title/Position" placeholder="e.g. Senior AI Engineer" isLight={isLight} defaultValue={initialData?.title} />
        
        {/* Address */}
        <div className="relative">
          <label className={`block text-xs font-bold uppercase mb-2 ${isLight ? "text-gray-500" : "text-[#888]"}`}>
            Business Address <span className="text-red-500">*</span>
          </label>
          <div 
            onClick={() => setIsAddressModalOpen(true)}
            className={`
              w-full px-4 py-3 rounded-xl border cursor-pointer flex items-center justify-between transition-colors
              ${isLight 
                ? "bg-gray-50 border-gray-200 text-gray-500 hover:bg-white hover:border-purple-400" 
                : "bg-[#1a1a1a] border-[#333] text-[#888] hover:bg-[#222] hover:border-purple-500/50"
              }
            `}
          >
            <span className={initialData?.location ? (isLight ? "text-gray-900" : "text-white") : ""}>
              {initialData?.location || "Select Address..."}
            </span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
        </div>

        {/* Status Dropdown */}
        <div className="relative">
          <label className={`block text-xs font-bold uppercase mb-2 ${isLight ? "text-gray-500" : "text-[#888]"}`}>
            Status <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <select 
              defaultValue={initialData?.status}
              className={`
                w-full px-4 py-3 rounded-xl border outline-none appearance-none cursor-pointer
                ${isLight ? "bg-gray-50 border-gray-200 text-gray-900 focus:bg-white" : "bg-[#1a1a1a] border-[#333] text-white focus:bg-[#222]"}
              `}
            >
              <option>Active</option>
              <option>On Project</option>
              <option>Unavailable</option>
            </select>
            <div className={`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none ${isLight ? "text-gray-500" : "text-[#666]"}`}>▼</div>
          </div>
        </div>

        <InputField label="Next Available Date" type="date" isLight={isLight} />
        <InputField label="Company Name / Brand" placeholder="GenSquad Inc." isLight={isLight} defaultValue={initialData?.company} />

        {/* Phone */}
        <div>
          <label className={`block text-xs font-bold uppercase mb-2 ${isLight ? "text-gray-500" : "text-[#888]"}`}>
            Phone No. <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-3">
            <select className={`w-[80px] px-2 py-3 rounded-xl border outline-none bg-transparent text-center cursor-pointer ${isLight ? "bg-gray-50 border-gray-200 text-gray-900" : "bg-[#1a1a1a] border-[#333] text-white"}`}>
              <option>+1</option><option>+91</option><option>+44</option>
            </select>
            <input 
              type="tel" 
              defaultValue={initialData?.phone}
              placeholder="123 456 7890" 
              className={`flex-1 px-4 py-3 rounded-xl border outline-none transition-all ${isLight ? "bg-gray-50 border-gray-200 text-gray-900 focus:bg-white focus:border-purple-500" : "bg-[#1a1a1a] border-[#333] text-white focus:bg-[#222] focus:border-purple-500"}`} 
            />
          </div>
        </div>

        <InputField label="Business Email" type="email" placeholder="name@company.com" isLight={isLight} defaultValue={initialData?.email} />

        <UploadField 
          label="Profile Image" 
          accept="image/png, image/jpeg" 
          isLight={isLight} 
          icon="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />

        <UploadField 
          label="Resume / CV" 
          accept=".pdf,.doc,.docx" 
          isLight={isLight} 
          icon="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </div>

      <div className="mt-12 flex justify-end gap-4">
        <button className={`px-8 py-3 rounded-xl text-sm font-bold transition-colors ${isLight ? "bg-gray-200 text-gray-800 hover:bg-gray-300" : "bg-[#333] text-white hover:bg-[#444]"}`}>
          Cancel
        </button>
        <button className="px-8 py-3 rounded-xl text-sm font-bold text-white transition-colors bg-[#8b5cf6] hover:bg-[#7c4dff]">
          Save Changes
        </button>
      </div>

      {/* ADDRESS MODAL */}
      {isAddressModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsAddressModalOpen(false)}></div>
          <div className={`relative w-full max-w-lg rounded-2xl shadow-2xl p-6 animate-fade-in-up max-h-[90vh] overflow-y-auto ${isLight ? "bg-white" : "bg-[#1a1a1a] border border-[#333]"}`}>
            <h3 className={`text-xl font-bold mb-1 ${isLight ? "text-gray-900" : "text-white"}`}>Address</h3>
            <p className={`text-xs mb-6 ${isLight ? "text-gray-500" : "text-[#888]"}`}>Provide location it will appear publicly</p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <InputField label="Street" isLight={isLight} fullWidth />
              <InputField label="Building Name" isLight={isLight} fullWidth />
              <InputField label="City" isLight={isLight} />
              <InputField label="State" isLight={isLight} />
              <InputField label="ZIP Code" isLight={isLight} />
            </div>
            <div className={`w-full h-32 rounded-xl mb-6 flex items-center justify-center border ${isLight ? "bg-gray-50 border-gray-100 text-gray-400" : "bg-[#121212] border-[#222] text-[#666]"}`}>
              <span className="flex items-center gap-2 font-medium text-sm">Select on Map</span>
            </div>
            <div className="flex justify-end gap-3 pt-2 border-t border-gray-100 dark:border-[#222]">
              <button onClick={() => setIsAddressModalOpen(false)} className={`px-6 py-2.5 text-sm font-bold rounded-xl ${isLight ? "bg-gray-200 text-gray-800" : "bg-[#333] text-white"}`}>Cancel</button>
              <button className="px-6 py-2.5 text-sm font-bold rounded-xl bg-[#8b5cf6] text-white hover:bg-[#7c4dff]">Save</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

const InputField = ({ label, type = "text", placeholder, isLight, fullWidth, defaultValue }) => (
  <div className={fullWidth ? "col-span-2" : ""}>
    <label className={`block text-xs font-bold uppercase mb-2 ${isLight ? "text-gray-500" : "text-[#888]"}`}>{label}</label>
    <input type={type} defaultValue={defaultValue} placeholder={placeholder} className={`w-full px-4 py-3 rounded-xl border outline-none ${isLight ? "bg-white border-gray-200 text-gray-900 focus:bg-white" : "bg-[#1a1a1a] border-[#333] text-white focus:bg-[#222]"}`} />
  </div>
);

const UploadField = ({ label, accept, icon, isLight }) => (
  <div className="col-span-2">
    <label className={`block text-xs font-bold uppercase mb-2 ${isLight ? "text-gray-500" : "text-[#888]"}`}>{label}</label>
    <div className={`w-full border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center ${isLight ? "border-gray-200 bg-gray-50" : "border-[#333] bg-[#1a1a1a]"}`}>
      <div className={`mb-3 p-3 rounded-full ${isLight ? "bg-white" : "bg-[#252525]"}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={isLight ? "text-purple-600" : "text-purple-400"}><path d={icon} /></svg>
      </div>
      <p className={`text-sm font-bold ${isLight ? "text-gray-700" : "text-[#ccc]"}`}>Click to upload</p>
    </div>
  </div>
);

export default TalentIdentity;