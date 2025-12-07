import React, { useState } from "react";
import { createTalent, updateTalent } from "../../../../services/api";

// ... (Keep the 'countries' array exactly as before) ...
const countries = [
  { code: "US", label: "🇺🇸 +1", dial_code: "+1" },
  { code: "GB", label: "🇬🇧 +44", dial_code: "+44" },
  { code: "IN", label: "🇮🇳 +91", dial_code: "+91" },
  { code: "CA", label: "🇨🇦 +1", dial_code: "+1" },
  { code: "AU", label: "🇦🇺 +61", dial_code: "+61" },
  { code: "DE", label: "🇩🇪 +49", dial_code: "+49" },
  { code: "JP", label: "🇯🇵 +81", dial_code: "+81" },
  { code: "FR", label: "🇫🇷 +33", dial_code: "+33" },
  { code: "BR", label: "🇧🇷 +55", dial_code: "+55" },
  { code: "CN", label: "🇨🇳 +86", dial_code: "+86" },
  { code: "RU", label: "🇷🇺 +7", dial_code: "+7" },
  { code: "ZA", label: "🇿🇦 +27", dial_code: "+27" },
  { code: "MX", label: "🇲🇽 +52", dial_code: "+52" },
  { code: "AE", label: "🇦🇪 +971", dial_code: "+971" },
  { code: "SG", label: "🇸🇬 +65", dial_code: "+65" },
];

const TalentIdentity = ({ isLight, initialData, onSuccess }) => {
  // ... (Keep all state hooks exactly as before: isAddressModalOpen, loading, profileImage, resume, address) ...
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [resume, setResume] = useState(null);
  const [address, setAddress] = useState(initialData?.address || {
    street: "", building: "", city: "", state: "", zip: "", country: ""
  });

  // ... (Keep handleSubmit exactly as before) ...
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData();

    formData.append("fullName", form.fullName.value);
    formData.append("title", form.title.value);
    formData.append("status", form.status.value);
    formData.append("nextAvailableDate", form.nextAvailableDate.value);
    formData.append("company", form.company.value);
    formData.append("phone", `${form.phoneCode.value} ${form.phone.value}`);
    formData.append("email", form.email.value);
    formData.append("address", JSON.stringify(address));

    if (profileImage) formData.append("profileImage", profileImage);
    if (resume) formData.append("resume", resume);

    try {
      if (initialData?._id) {
        await updateTalent(initialData._id, formData);
        alert("Profile Updated!");
      } else {
        await createTalent(formData);
        alert("Profile Created!");
      }
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error(err);
      alert("Error saving profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="animate-fade-in-up">
      <div className="mb-8">
        <h2 className={`text-2xl font-space font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
          TALENT IDENTITY
        </h2>
        <p className={`text-sm mt-1 ${isLight ? "text-gray-500" : "text-[#888]"}`}>
          Basic information visible to potential employers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        <InputField name="fullName" label="Full Name" placeholder="e.g. Sarah Jenkins" isLight={isLight} defaultValue={initialData?.fullName} />
        <InputField name="title" label="Title/Position" placeholder="e.g. Senior AI Engineer" isLight={isLight} defaultValue={initialData?.title} />
        
        {/* Address Trigger */}
        <div className="relative">
          <label className={`block text-xs font-bold uppercase mb-2 ${isLight ? "text-gray-500" : "text-[#888]"}`}>
            Business Address <span className="text-red-500">*</span>
          </label>
          <div 
            onClick={() => setIsAddressModalOpen(true)}
            className={`w-full px-4 py-3 rounded-xl border cursor-pointer flex items-center justify-between transition-colors ${isLight ? "bg-gray-50 border-gray-200 text-gray-500 hover:bg-white hover:border-purple-400" : "bg-[#1a1a1a] border-[#333] text-[#888] hover:bg-[#222] hover:border-purple-500/50"}`}
          >
            <span>
              {address.city 
                ? `${address.city}, ${address.state}${address.country ? `, ${address.country}` : ""}` 
                : "Select Address..."}
            </span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          </div>
        </div>

        {/* Status */}
        <div className="relative">
          <label className={`block text-xs font-bold uppercase mb-2 ${isLight ? "text-gray-500" : "text-[#888]"}`}>Status <span className="text-red-500">*</span></label>
          <div className="relative">
            <select name="status" defaultValue={initialData?.status} className={`w-full px-4 py-3 rounded-xl border outline-none appearance-none cursor-pointer ${isLight ? "bg-gray-50 border-gray-200 text-gray-900 focus:bg-white" : "bg-[#1a1a1a] border-[#333] text-white focus:bg-[#222]"}`}>
              <option>Active</option><option>On Project</option><option>Unavailable</option>
            </select>
            <div className={`absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none ${isLight ? "text-gray-500" : "text-[#666]"}`}>▼</div>
          </div>
        </div>

        <div>
          <label className={`block text-xs font-bold uppercase mb-2 ${isLight ? "text-gray-500" : "text-[#888]"}`}>
            Next Available Date <span className="text-red-500">*</span>
          </label>
          <input 
            name="nextAvailableDate" 
            type="date" 
            defaultValue={initialData?.nextAvailableDate} 
            style={{ colorScheme: isLight ? "light" : "dark" }}
            className={`w-full px-4 py-3 rounded-xl border outline-none ${isLight ? "bg-gray-50 border-gray-200 text-gray-900" : "bg-[#1a1a1a] border-[#333] text-white"}`} 
            required 
          />
        </div>

        <InputField name="company" label="Company Name / Brand" placeholder="GenSquad Inc." isLight={isLight} defaultValue={initialData?.company} />

        {/* ✅ FIXED PHONE NUMBER SECTION */}
        <div>
          <label className={`block text-xs font-bold uppercase mb-2 ${isLight ? "text-gray-500" : "text-[#888]"}`}>Phone No. <span className="text-red-500">*</span></label>
          <div className="flex gap-3">
            {/* Added Explicit Background/Color classes to the select and options */}
            <select 
              name="phoneCode" 
              className={`
                w-[110px] px-2 py-3 rounded-xl border outline-none cursor-pointer
                ${isLight 
                  ? "bg-gray-50 border-gray-200 text-gray-900" 
                  : "bg-[#1a1a1a] border-[#333] text-white" // Explicit dark bg for dark mode
                }
              `}
            >
              {countries.map((c) => (
                <option 
                  key={c.code} 
                  value={c.dial_code} 
                  // Ensure options have dark background in dark mode
                  className={isLight ? "bg-white text-black" : "bg-[#222] text-white"}
                >
                  {c.label}
                </option>
              ))}
            </select>
            <input name="phone" type="tel" defaultValue={initialData?.phone} placeholder="123 456 7890" className={`flex-1 px-4 py-3 rounded-xl border outline-none transition-all ${isLight ? "bg-gray-50 border-gray-200 text-gray-900 focus:bg-white focus:border-purple-500" : "bg-[#1a1a1a] border-[#333] text-white focus:bg-[#222] focus:border-purple-500"}`} />
          </div>
        </div>

        <InputField name="email" label="Business Email" type="email" placeholder="name@company.com" isLight={isLight} defaultValue={initialData?.email} />

        <UploadField 
          label="Profile Image" 
          accept="image/png, image/jpeg" 
          isLight={isLight} 
          icon="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          onChange={(e) => setProfileImage(e.target.files[0])}
          fileName={profileImage?.name}
        />

        <UploadField 
          label="Resume / CV" 
          accept=".pdf,.doc" 
          isLight={isLight} 
          icon="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          onChange={(e) => setResume(e.target.files[0])}
          fileName={resume?.name}
        />
      </div>

      <div className="mt-12 flex justify-end gap-4">
        <button type="button" className={`px-8 py-3 rounded-xl text-sm font-bold transition-colors ${isLight ? "bg-gray-200 text-gray-800 hover:bg-gray-300" : "bg-[#333] text-white hover:bg-[#444]"}`}>
          Cancel
        </button>
        
        <button 
          type="submit" 
          disabled={loading}
          className={`px-8 py-3 rounded-xl text-sm font-bold text-white transition-colors bg-[#8b5cf6] hover:bg-[#7c4dff] ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </div>

      {/* ADDRESS MODAL (Updated with all fields) */}
      {isAddressModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsAddressModalOpen(false)}></div>
          <div className={`relative w-full max-w-lg rounded-2xl shadow-2xl p-6 animate-fade-in-up max-h-[90vh] overflow-y-auto ${isLight ? "bg-white" : "bg-[#1a1a1a] border border-[#333]"}`}>
            <h3 className={`text-xl font-bold mb-1 ${isLight ? "text-gray-900" : "text-white"}`}>Address</h3>
            <div className="grid grid-cols-2 gap-4 mb-4 mt-6">
               <input onChange={(e)=>setAddress({...address, street:e.target.value})} placeholder="Street" className={`col-span-2 w-full p-3 rounded-md border outline-none ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`} />
               <input onChange={(e)=>setAddress({...address, building:e.target.value})} placeholder="Building Name" className={`col-span-2 w-full p-3 rounded-md border outline-none ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`} />
               <input onChange={(e)=>setAddress({...address, city:e.target.value})} placeholder="City" className={`w-full p-3 rounded-md border outline-none ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`} />
               <input onChange={(e)=>setAddress({...address, state:e.target.value})} placeholder="State" className={`w-full p-3 rounded-md border outline-none ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`} />
               <input onChange={(e)=>setAddress({...address, country:e.target.value})} placeholder="Country" className={`w-full p-3 rounded-md border outline-none ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`} />
               <input onChange={(e)=>setAddress({...address, zip:e.target.value})} placeholder="ZIP Code" className={`w-full p-3 rounded-md border outline-none ${isLight ? "bg-white border-gray-300" : "bg-[#2E2E2E] border-[#444] text-white"}`} />
            </div>
            <div className="flex justify-end gap-3 pt-2">
               <button type="button" onClick={() => setIsAddressModalOpen(false)} className="px-4 py-2 rounded bg-gray-200 text-black">Cancel</button>
               <button type="button" onClick={() => setIsAddressModalOpen(false)} className="px-4 py-2 rounded bg-purple-600 text-white">Save</button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

// ... (InputField and UploadField helper components remain exactly the same as previous) ...
const InputField = ({ name, label, type = "text", placeholder, isLight, defaultValue }) => (
  <div>
    <label className={`block text-xs font-bold uppercase mb-2 ${isLight ? "text-gray-500" : "text-[#888]"}`}>{label} *</label>
    <input name={name} type={type} defaultValue={defaultValue} placeholder={placeholder} className={`w-full px-4 py-3 rounded-xl border outline-none ${isLight ? "bg-gray-50 border-gray-200 text-gray-900" : "bg-[#1a1a1a] border-[#333] text-white"}`} required />
  </div>
);

const UploadField = ({ label, accept, icon, isLight, onChange, fileName }) => (
  <div className="col-span-2">
    <label className={`block text-xs font-bold uppercase mb-2 ${isLight ? "text-gray-500" : "text-[#888]"}`}>{label} *</label>
    <div className={`w-full border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center relative ${isLight ? "border-gray-200 bg-gray-50" : "border-[#333] bg-[#1a1a1a]"}`}>
      <div className={`mb-3 p-3 rounded-full ${isLight ? "bg-white" : "bg-[#252525]"}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={isLight ? "text-purple-600" : "text-purple-400"}><path d={icon} /></svg>
      </div>
      <p className={`text-sm font-bold ${isLight ? "text-gray-700" : "text-[#ccc]"}`}>
        {fileName ? `Selected: ${fileName}` : "Click to upload or drag and drop"}
      </p>
      <input type="file" accept={accept} onChange={onChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
    </div>
  </div>
);

export default TalentIdentity;