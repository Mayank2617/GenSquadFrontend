import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTheme } from '../hooks/useTheme';

import ProfileBanner from '../features/profile/ProfileBanner';
import ProfileSidebar from '../features/profile/ProfileSidebar';
import ProfileDetails from '../features/profile/ProfileDetails';
// 1. Import Similar Talent
import SimilarTalent from '../features/profile/SimilarTalent'; 

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

  // MOCK DATA (Profile)
  const mockProfileData = {
    id: id || "1", 
    name: "Sarah Jenkins",
    title: "Senior AI Engineer",
    image: "/images/img_ellipse_1.png",
    experience: "8 Years",
    availability: "Immediate",
    location: "San Francisco, USA",
    bannerUrl: null,
    
    topSkills: ["Python", "TensorFlow", "PyTorch", "NLP", "React"],
    about: "I am a passionate AI engineer with over 8 years of experience building scalable machine learning systems. My expertise lies in Natural Language Processing (NLP) and Computer Vision.",
    
    pieData: [
      { name: "Python", usage: 35, years: 8, color: "#8b5cf6" },
      { name: "Machine Learning", usage: 25, years: 6, color: "#3b82f6" },
      { name: "Data Engineering", usage: 20, years: 5, color: "#10b981" },
      { name: "Cloud Ops", usage: 20, years: 4, color: "#f59e0b" },
    ],
    
    allSkills: ["Python", "Java", "C++", "TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Pandas", "NumPy", "AWS", "Docker", "Kubernetes", "Git", "Jira", "Agile"],
    tools: ["VS Code", "Jupyter", "GitHub", "Slack", "Figma", "Notion"],
    
    experienceLine: [
      {
        role: "Senior AI Engineer",
        company: "Google",
        duration: "2020 - Present",
        description: "Led the development of a new recommendation engine for YouTube Shorts, improving engagement by 15%. Managed a team of 5 junior engineers."
      },
      {
        role: "Machine Learning Engineer",
        company: "Spotify",
        duration: "2017 - 2020",
        description: "Optimized the 'Discover Weekly' algorithm using collaborative filtering techniques. Reduced inference latency by 40%."
      }
    ],
    
    education: [
      { school: "Stanford University", degree: "M.S. in Computer Science (AI Specialization)", year: "2015 - 2017" },
      { school: "MIT", degree: "B.S. in Computer Science", year: "2011 - 2015" }
    ],

    certifications: [
      { name: "TensorFlow Developer Certificate", issuer: "Google", year: "2022" },
      { name: "AWS Certified Machine Learning - Specialty", issuer: "Amazon Web Services", year: "2021" },
      { name: "Deep Learning Specialization", issuer: "Coursera / DeepLearning.AI", year: "2020" }
    ]
  };

  // 🟢 MOCK SIMILAR PROFILES
  // In a real app, you would fetch these based on matching skills/role
  const similarProfiles = [
    {
      id: 2,
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

  return (
    <div style={pageBackground} className="min-h-screen w-full relative">
      <Helmet>
        <title>{mockProfileData.name} | GenSquad Profile</title>
      </Helmet>

      {/* 1. Banner */}
      <ProfileBanner bannerUrl={mockProfileData.bannerUrl} />

      {/* 2. Main Content Grid */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row gap-8">
        <ProfileSidebar profile={mockProfileData} />
        <ProfileDetails profile={mockProfileData} />
      </div>

      {/* 3. Similar Talent Section */}
      <SimilarTalent profiles={similarProfiles} />

      {/* 4. Extra Padding before Footer */}
      <div className="pb-10"></div>
    </div>
  );
};

export default TalentProfile;