import React from "react";

const TalentSocial = ({ isLight, initialData }) => {
  return (
    <div className="animate-fade-in-up">
      <div className="mb-8">
        <h2 className={`text-2xl font-space font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
          SOCIAL & EXTERNAL LINKS
        </h2>
        <p className={`text-sm mt-1 ${isLight ? "text-gray-500" : "text-[#888]"}`}>
          Connect your professional presence to your profile.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        <InputField label="LinkedIn URL" defaultValue={initialData?.linkedin} placeholder="https://linkedin.com/in/username" isLight={isLight} />
        <InputField label="GitHub URL" defaultValue={initialData?.github} placeholder="https://github.com/username" isLight={isLight} />
        <InputField label="Portfolio" defaultValue={initialData?.portfolio} placeholder="https://yourportfolio.com" isLight={isLight} />
        <InputField label="Hugging Face URL" defaultValue={initialData?.huggingface} placeholder="https://huggingface.co/username" isLight={isLight} />
        <InputField label="StackOverflow URL" defaultValue={initialData?.stackoverflow} placeholder="https://stackoverflow.com/users/..." isLight={isLight} />
        <InputField label="Twitter / X" defaultValue={initialData?.twitter} placeholder="https://x.com/username" isLight={isLight} />
      </div>

      <div className="mt-12 flex justify-end gap-4">
        <button className={`px-8 py-3 rounded-xl text-sm font-bold transition-colors ${isLight ? "bg-gray-200 text-gray-800 hover:bg-gray-300" : "bg-[#333] text-white hover:bg-[#444]"}`}>
          Cancel
        </button>
        <button className="px-8 py-3 rounded-xl text-sm font-bold text-white transition-colors bg-[#8b5cf6] hover:bg-[#7c4dff]">
          Save Changes
        </button>
      </div>
    </div>
  );
};

const InputField = ({ label, placeholder, isLight, defaultValue }) => (
  <div>
    <label className={`block text-xs font-bold uppercase mb-2 ${isLight ? "text-gray-500" : "text-[#888]"}`}>{label}</label>
    <input type="text" defaultValue={defaultValue} placeholder={placeholder} className={`w-full px-4 py-3 rounded-xl border outline-none ${isLight ? "bg-gray-50 border-gray-200 text-gray-900" : "bg-[#1a1a1a] border-[#333] text-white"}`} />
  </div>
);

export default TalentSocial;