import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTheme } from '../hooks/useTheme';

import ProfileBanner from '../features/profile/ProfileBanner';
import ProfileSidebar from '../features/profile/ProfileSidebar';
import ProfileDetails from '../features/profile/ProfileDetails';
import SimilarTalent from '../features/profile/SimilarTalent';
import { getTalentById } from '../services/api';

const TalentProfile = () => {
  const { id } = useParams();
  const { isLight } = useTheme();

  // 🎨 SHARED BACKGROUND STYLE
  const pageBackground = {
    background: isLight
      ? `
        radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.20) 0%, transparent 50%), 
        radial-gradient(circle at 100% 20%, rgba(59, 130, 246, 0.20) 0%, transparent 50%), 
        radial-gradient(circle at 0% 60%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), 
        radial-gradient(circle at 100% 90%, rgba(139, 92, 246, 0.20) 0%, transparent 50%), 
        linear-gradient(to bottom, #f5f3ff, #f0f9ff, #fdf4ff)
      `
      : "radial-gradient(50% 50% at 50% 50%, rgba(76, 29, 149, 0.35) 0%, rgba(10, 10, 10, 1) 100%), #0a0a0a",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    minHeight: "100vh"
  };

  // 1. Fetch Data
  const [profile, setProfile] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchProfile = async () => {
      if (!id) return;

      try {
        setLoading(true);
        setError(null);
        
        const data = await getTalentById(id);

        // ✅ UPDATED: High Contrast & Bright Color Palette
        const COLORS = [
          "#8b5cf6", // Bright Purple (Primary)
          "#06b6d4", // Neon Cyan
          "#f43f5e", // Bright Rose
          "#eab308", // Vivid Yellow
          "#10b981", // Emerald Green
          "#3b82f6", // Royal Blue
          "#f97316"  // Bright Orange
        ];

        // MAP BACKEND DATA TO FRONTEND STRUCTURE
        const formattedProfile = {
          id: data._id,
          name: data.fullName,
          title: data.title,
          image: data.profileImage || "/images/img_ellipse_1.png",
          resume: data.resume || null,

          // Experience
          experience: data.experiences?.[0]?.expYears ? `${data.experiences[0].expYears} Years` : "Experienced",

          availability: data.status || "Available",
          location: data.address ? `${data.address.city}, ${data.address.country}` : "Remote",
          bannerUrl: null, 

          topSkills: data.topSkills?.map(s => s.name) || [],
          about: data.about || "",

          // ✅ PIE CHART DATA CONSTRUCTION
          pieData: data.topSkills?.map((s, index) => ({
            name: s.name,
            // Ensure numbers are parsed correctly
            usage: parseInt(s.usage, 10) || 0,
            years: parseInt(s.exp, 10) || 0,
            // Assign cycling color
            color: COLORS[index % COLORS.length]
          })) || [],

          allSkills: data.topSkills?.map(s => s.name) || [],
          tools: data.tools || [],

          experienceLine: data.experiences?.map(exp => ({
            role: exp.role,
            company: exp.company,
            duration: `${exp.joinYear} - ${exp.endYear || 'Present'}`,
            description: exp.description
          })) || [],

          education: data.education?.map(edu => ({
            school: edu.institute,
            degree: edu.degree,
            year: `${edu.startYear} - ${edu.endYear}`
          })) || [],

          certifications: data.certifications?.map(cert => ({
            name: cert.displayTitle || cert.institution,
            issuer: cert.company || cert.institution,
            year: cert.joinYear
          })) || []
        };

        setProfile(formattedProfile);
      } catch (err) {
        console.error("Error fetching talent:", err);
        setError("Failed to load profile data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  // Mock Similar Profiles
  const similarProfiles = [
    {
      id: "mock1",
      name: "David Chen",
      role: "Full Stack AI Dev",
      location: "Toronto, Canada",
      experience: "6 Years",
      image: "/images/img_ellipse_1.png",
      skills: ["React", "Node.js", "LangChain", "OpenAI API"],
      description: "Bridging the gap between web apps and AI. I create intuitive front-end interfaces that leverage complex backend AI agents.",
      availability: "Immediate"
    },
    {
      id: "mock2",
      name: "Elena Rodriguez",
      role: "Data Scientist",
      location: "Madrid, Spain",
      experience: "5 Years",
      image: "/images/img_ellipse_1.png",
      skills: ["SQL", "Pandas", "Scikit-learn", "Tableau"],
      description: "Turning messy data into actionable business insights. Expert in predictive modeling for fintech and fraud detection.",
      availability: "2 Weeks Notice"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center" style={pageBackground}>
        <div className={`text-xl ${isLight ? "text-black" : "text-white"}`}>Loading Profile...</div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center" style={pageBackground}>
        <div className="text-red-400 text-xl">{error || "Profile not found"}</div>
      </div>
    );
  }

  return (
    <div style={pageBackground} className="min-h-screen w-full relative">
      <Helmet>
        <title>{profile.name} | GenSquad Profile</title>
      </Helmet>

      {/* 1. Banner */}
      <ProfileBanner bannerUrl={profile.bannerUrl} />

      {/* 2. Main Content Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
        <ProfileSidebar profile={profile} />
        <ProfileDetails profile={profile} />
      </div>

      {/* 3. Similar Talent Section */}
      <SimilarTalent profiles={similarProfiles} />

      {/* 4. Extra Padding before Footer */}
      <div className="pb-10"></div>
    </div>
  );
};

export default TalentProfile;