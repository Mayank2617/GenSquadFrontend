import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

const TalentCard = ({ profile }) => {
    const { isLight } = useTheme();

    return (
        <div
            className={`
        w-full rounded-[24px] p-6 border transition-all duration-300 group
        hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between
        ${isLight
                    ? "bg-white border-gray-100 shadow-sm shadow-purple-500/5"
                    : "bg-[#161616] border-[#333] shadow-lg shadow-black/50"
                }
      `}
        >
            {/* --- TOP SECTION: AVATAR & HEADLINE --- */}
            <div className="flex items-start gap-4 mb-4">
                <div className="relative">
                    <img
                        src={profile.image}
                        alt={profile.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/20"
                    />
                    {/* Verified Badge (Optional Polish) */}
                    <div className="absolute -bottom-1 -right-1 bg-purple-600 text-white p-1 rounded-full border-2 border-white dark:border-[#161616]">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                        </svg>
                    </div>
                </div>

                <div>
                    <h3 className={`text-xl font-space font-bold ${isLight ? "text-gray-900" : "text-white"}`}>
                        {profile.name}
                    </h3>
                    <p className={`text-sm font-medium ${isLight ? "text-purple-600" : "text-purple-400"}`}>
                        {profile.role}
                    </p>
                    <p className={`text-xs mt-1 ${isLight ? "text-gray-500" : "text-[#888]"}`}>
                        {profile.experience} • {profile.location}
                    </p>
                </div>
            </div>

            {/* --- MIDDLE SECTION: DESCRIPTION & SKILLS --- */}
            <div className="mb-6">
                {/* Detailed Description */}
                <p className={`
          text-sm leading-relaxed mb-4 line-clamp-3
          ${isLight ? "text-gray-600" : "text-[#bababa]"}
        `}>
                    {profile.description}
                </p>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2">
                    {profile.skills.slice(0, 4).map((skill, i) => (
                        <span
                            key={i}
                            className={`
                px-2.5 py-1 rounded-md text-xs font-medium
                ${isLight
                                    ? "bg-gray-100 text-gray-700"
                                    : "bg-[#252525] text-[#d4d4d4]"
                                }
              `}
                        >
                            {skill}
                        </span>
                    ))}
                    {profile.skills.length > 4 && (
                        <span className={`text-xs px-1 py-1 ${isLight ? "text-gray-400" : "text-[#666]"}`}>+{profile.skills.length - 4}</span>
                    )}
                </div>
            </div>

            {/* --- BOTTOM FOOTER: AVAILABILITY & CTA --- */}
            <div className={`pt-4 mt-auto border-t flex items-center justify-between ${isLight ? "border-gray-100" : "border-[#2a2a2a]"}`}>

                {/* Left: Availability */}
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className={`text-xs font-medium ${isLight ? "text-gray-600" : "text-[#bababa]"}`}>
                        Available Now
                    </span>
                </div>

                {/* Right: View Profile Button */}
                <Link to={`/talent/${profile.id}`}>
                    <button className={`
          text-sm font-bold flex items-center gap-1 transition-all group-hover:translate-x-1
          ${isLight ? "text-purple-600" : "text-purple-400"}
        `}>
                        View Profile
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </Link> 

            </div>
        </div>
    );
};

export default TalentCard;