import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTheme } from '../hooks/useTheme';

import ProfileBanner from '../features/profile/ProfileBanner';
import ProfileSidebar from '../features/profile/ProfileSidebar';
import ProfileDetails from '../features/profile/ProfileDetails';
// 1. Import Similar Talent
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
      // If no ID is present (e.g. just /talent), we might handle differently, 
      // but usually router handles this.
      if (!id) return;

      try {
        setLoading(true);
        setError(null);
        
        console.log("Fetching profile for ID:", id);
        const data = await getTalentById(id);
        console.log("Fetched Data:", data);

        // MAP BACKEND DATA TO FRONTEND STRUCTURE
        const formattedProfile = {
          id: data._id,
          name: data.fullName,
          title: data.title,
          // Handle profile image - if it's a relative path from uploads, we might need to prepend URL
          // But based on analysis, Cloudinary returns full URL. 
          // If it's local, we might need logic, but let's assume valid URL or fallback.
          image: data.profileImage || "/images/img_ellipse_1.png", 
          
          // Experience: Backend has experiences array. Frontend wants a string summary.
          // We can take the formatted 'expYears' from the first experience or 'Experienced'
          experience: data.experiences?.[0]?.expYears ? `${data.experiences[0].expYears} Years` : "Experienced",
          
          availability: data.status || "Available", 
          location: data.address ? `${data.address.city}, ${data.address.country}` : "Remote",
          bannerUrl: null, // Backend schema doesn't seem to have bannerUrl
          
          topSkills: data.topSkills?.map(s => s.name) || [],
          about: data.about || "",
          
          pieData: data.topSkills?.map(s => ({
            name: s.name,
            usage: parseInt(s.usage) || 0,
            years: parseInt(s.exp) || 0,
            color: s.color || "#8b5cf6"
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

  // 🟢 MOCK SIMILAR PROFILES
  // In a real app, you would fetch these based on matching skills/role
  const similarProfiles = [
    {
      id: 2,
      name: "David Chen", // Mock
      role: "Full Stack AI Dev",
      location: "Toronto, Canada",
      experience: "6 Years",
      image: "/images/img_ellipse_1.png",
      skills: ["React", "Node.js", "LangChain", "OpenAI API"],
      description: "Bridging the gap between web apps and AI. I create intuitive front-end interfaces that leverage complex backend AI agents.",
      availability: "Immediate"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Data Scientist",
      location: "Madrid, Spain",
      experience: "5 Years",
      image: "/images/img_ellipse_1.png",
      skills: ["SQL", "Pandas", "Scikit-learn", "Tableau"],
      description: "Turning messy data into actionable business insights. Expert in predictive modeling for fintech and fraud detection.",
      availability: "2 Weeks Notice"
    },
    {
      id: 4,
      name: "Michael Chang",
      role: "ML Ops Engineer",
      location: "Singapore",
      experience: "7 Years",
      image: "/images/img_ellipse_1.png",
      skills: ["AWS SageMaker", "Docker", "Kubernetes", "CI/CD"],
      description: "I ensure your models don't just live in notebooks. I deploy robust, scalable, and monitored ML pipelines.",
      availability: "Immediate"
    },
    {
      id: 5,
      name: "Priya Patel",
      role: "NLP Specialist",
      location: "Bangalore, India",
      experience: "4 Years",
      image: "/images/img_ellipse_1.png",
      skills: ["Python", "NLTK", "SpaCy", "Hugging Face"],
      description: "Specialized in building chatbots and sentiment analysis tools for large-scale customer support systems.",
      availability: "Immediate"
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center" style={pageBackground}>
        <div className="text-white text-xl">Loading Profile...</div>
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