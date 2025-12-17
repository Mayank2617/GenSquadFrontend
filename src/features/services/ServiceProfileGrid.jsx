import React, { useState } from 'react';
import { mockProfiles } from '../../data/mockProfiles';
import Button from '../../components/ui/Button';
import TalentCard from './TalentCard';

const ServiceProfileGrid = ({ slug, isLight }) => {
  // ✅ STATE: Track how many profiles to show (Start with 4)
  const [visibleCount, setVisibleCount] = useState(4);

  // ✅ FIXED FILTER LOGIC: Safely check if serviceSlugs exists before checking includes
  const profiles = mockProfiles.filter(profile => 
    profile.serviceSlugs && profile.serviceSlugs.includes(slug)
  );

  // 2. Handler to show more
  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <section className="w-full py-20 px-6 lg:px-[60px]">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-space font-bold mb-4 ${isLight ? "text-gray-900" : "text-white"}`}>
            Available Experts
          </h2>
          <p className={`text-lg ${isLight ? "text-gray-600" : "text-gray-400"}`}>
            Senior talent ready to join your team.
          </p>
        </div>

        {/* ✅ GRID: Shows 'visibleCount' number of profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {profiles.slice(0, visibleCount).map((profile) => (
             <TalentCard key={profile.id} profile={profile} />
          ))}
        </div>

        {/* ✅ VIEW MORE BUTTON: Only show if there are more profiles to load */}
        {visibleCount < profiles.length && (
          <div className="flex justify-center">
              <Button 
                  text="View More Profiles" 
                  onClick={handleViewMore}
                  text_font_size="16" 
                  text_font_weight="600" 
                  text_color={isLight ? "#333" : "#fff"} 
                  fill_background="transparent" 
                  border_border={isLight ? "1px solid #ddd" : "1px solid #333"} 
                  padding="14px 32px" 
                  border_border_radius="10px" 
                  className="hover:scale-105 transition-transform"
              />
          </div>
        )}

        {/* Empty State Message */}
        {profiles.length === 0 && (
           <div className={`text-center py-10 ${isLight ? "text-gray-500" : "text-gray-400"}`}>
              No profiles found for this category yet.
           </div>
        )}

      </div>
    </section>
  );
};

export default ServiceProfileGrid;