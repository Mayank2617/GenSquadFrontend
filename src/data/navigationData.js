// Icons Helper
const icons = {
  hiring: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  industry: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  solutions: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  tech: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  stack: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  role: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  company: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  resources: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  default: "M13 10V3L4 14h7v7l9-11h-7z"
};

export const navigationData = [
  // 1. USE CASES (Unchanged - Needs Left/Right split)
  {
    title: "Use Cases",
    path: "/use-cases",
    subsections: [
      {
        title: "Hiring Need",
        iconPath: icons.hiring,
        items: [
          { name: "Team Augmentation", href: "/use-cases/hiring-need/team-augmentation" },
          { name: "Fully - Managed Teams", href: "/use-cases/hiring-need/fully-managed-teams" },
          { name: "Build a Team", href: "/use-cases/hiring-need/build-a-team" },
          { name: "Fractal CTO/CPO", href: "/use-cases/hiring-need/fractal-cto-cpo" }
        ]
      },
      {
        title: "Industry",
        iconPath: icons.industry,
        items: [
          { name: "AdTech/MarTech", href: "/use-cases/industry/adtech-martech" },
          { name: "E-commerce", href: "/use-cases/industry/e-commerce" },
          { name: "Ed - Tech", href: "/use-cases/industry/ed-tech" },
          { name: "Entertainment", href: "/use-cases/industry/entertainment" },
          { name: "Fintech", href: "/use-cases/industry/fintech" },
          { name: "Gaming", href: "/use-cases/industry/gaming" },
          { name: "Health Tech", href: "/use-cases/industry/health-tech" },
          { name: "Marketplace", href: "/use-cases/industry/marketplace" },
          { name: "Proptech", href: "/use-cases/industry/proptech" },
          { name: "Retail Tech", href: "/use-cases/industry/retail-tech" },
          { name: "SaaS", href: "/use-cases/industry/saas" },
          { name: "Transportation", href: "/use-cases/industry/transportation" }
        ]
      },
      {
        title: "Solutions",
        iconPath: icons.solutions,
        items: [
          { name: "Gen AI", href: "/use-cases/solutions/gen-ai" },
          { name: "AI & ML Solutions", href: "/use-cases/solutions/ai-&-ml-solutions" },
          { name: "Backend Development", href: "/use-cases/solutions/backend-development" },
          { name: "Cloud Solution", href: "/use-cases/solutions/cloud-solution" },
          { name: "System Integration", href: "/use-cases/solutions/system-integration" },
          { name: "Managed Services", href: "/use-cases/solutions/managed-services" },
          { name: "Mobile Apps", href: "/use-cases/solutions/mobile-apps" },
          { name: "MVPs", href: "/use-cases/solutions/mvps" },
          { name: "Proof of Concepts", href: "/use-cases/solutions/proof-of-concepts" },
          { name: "Web Apps", href: "/use-cases/solutions/web-apps" },
          { name: "Salesforce", href: "/use-cases/solutions/salesforce" },
          { name: "Cyber Security", href: "/use-cases/solutions/cyber-security" }
        ]
      },
      {
        title: "Technology",
        iconPath: icons.tech,
        items: [
          { name: "AI & ML", href: "/use-cases/technology/ai-&-ml" },
          { name: "Android", href: "/use-cases/technology/android" },
          { name: "Cloud Computing", href: "/use-cases/technology/cloud-computing" },
          { name: "iOS", href: "/use-cases/technology/ios" },
          { name: "IoT", href: "/use-cases/technology/iot" },
          { name: "Natural Language Processing", href: "/use-cases/technology/natural-language-processing" },
          { name: "Predictive Analytics", href: "/use-cases/technology/predictive-analytics" },
          { name: "Robotics", href: "/use-cases/technology/robotics" },
          { name: "Web3 / Blockchain", href: "/use-cases/technology/web3-blockchain" }
        ]
      },
      {
        title: "Techstack",
        iconPath: icons.stack,
        items: [
          { name: ".Net", href: "/use-cases/techstack/.net" },
          { name: "Angular", href: "/use-cases/techstack/angular" },
          { name: "AWS", href: "/use-cases/techstack/aws" },
          { name: "Flutter", href: "/use-cases/techstack/flutter" },
          { name: "Golang", href: "/use-cases/techstack/golang" },
          { name: "Javascript", href: "/use-cases/techstack/javascript" },
          { name: "Kotlin", href: "/use-cases/techstack/kotlin" },
          { name: "NodeJS", href: "/use-cases/techstack/nodejs" },
          { name: "PHP", href: "/use-cases/techstack/php" },
          { name: "Python", href: "/use-cases/techstack/python" },
          { name: "React Native", href: "/use-cases/techstack/react-native" },
          { name: "React JS", href: "/use-cases/techstack/react-js" },
          { name: "Rubi", href: "/use-cases/techstack/rubi" },
          { name: "Swift", href: "/use-cases/techstack/swift" }
        ]
      }
    ]
  },

  // 2. OUR SERVICES (Updated: Flattened List)
  // We use a single subsection with an EMPTY title ("") so it renders as one big list.
  {
    title: "Our Services",
    path: "/our-services",
    subsections: [
      {
        title: "", // Empty title = Single Container View
        iconPath: icons.stack,
        items: [
          // Hire by Skill (30 Items)
          { name: "Hire AI Engineers", href: "/our-services/hire-ai-engineers" },
          { name: "Hire Machine Learning Engineers", href: "/our-services/hire-machine-learning-engineers" },
          { name: "Hire Deep Learning Engineers", href: "/our-services/hire-deep-learning-engineers" },
          { name: "Hire NLP Engineers", href: "/our-services/hire-nlp-engineers" },
          { name: "Hire LLM Engineers", href: "/our-services/hire-llm-engineers" },
          { name: "Hire Computer Vision Engineers", href: "/our-services/hire-computer-vision-engineers" },
          { name: "Hire Data Scientists", href: "/our-services/hire-data-scientists" },
          { name: "Hire Data Engineers", href: "/our-services/hire-data-engineers" },
          { name: "Hire Data Analysts", href: "/our-services/hire-data-analysts" },
          { name: "Hire MLOps Engineers", href: "/our-services/hire-mlops-engineers" },
          { name: "Hire Cloud Engineers", href: "/our-services/hire-cloud-engineers" },
          { name: "Hire Backend Developers", href: "/our-services/hire-backend-developers" },
          { name: "Hire Full-Stack Developers", href: "/our-services/hire-full-stack-developers" },
          { name: "Hire Python Developers", href: "/our-services/hire-python-developers" },
          { name: "Hire DevOps Engineers", href: "/our-services/hire-devops-engineers" },
          { name: "Hire LangChain Developers", href: "/our-services/hire-langchain-developers" },
          { name: "Hire LlamaIndex Developers", href: "/our-services/hire-llamaindex-developers" },
          { name: "Hire RAG Experts", href: "/our-services/hire-rag-experts" },
          { name: "Hire Vector DB Engineers", href: "/our-services/hire-vector-db-engineers" },
          { name: "Hire Prompt Engineers", href: "/our-services/hire-prompt-engineers" },
          { name: "Hire ChatGPT Automation Experts", href: "/our-services/hire-chatgpt-automation-experts" },
          { name: "Hire n8n Experts", href: "/our-services/hire-n8n-experts" },
          { name: "Hire Zapier Experts", href: "/our-services/hire-zapier-experts" },
          { name: "Hire Make.com Experts", href: "/our-services/hire-make-com-experts" },
          { name: "Hire Airflow Engineers", href: "/our-services/hire-airflow-engineers" },
          { name: "Hire Kubeflow Engineers", href: "/our-services/hire-kubeflow-engineers" },
          { name: "Hire Voice AI Engineers", href: "/our-services/hire-voice-ai-engineers" },
          { name: "Hire Chatbot Developers", href: "/our-services/hire-chatbot-developers" },
          { name: "Hire LLM Fine-Tuning Specialists", href: "/our-services/hire-llm-fine-tuning-specialists" },
          { name: "Hire API Integration Engineers", href: "/our-services/hire-api-integration-engineers" },
          
          // Hire by Role (5 Items - Appended to same list)
          { name: "Hire AI Solution Architects", href: "/our-services/hire-ai-solution-architects" },
          { name: "Hire AI QA & Testing Specialists", href: "/our-services/hire-ai-qa-testing-specialists" },
          { name: "Hire AI Product Managers", href: "/our-services/hire-ai-product-managers" },
          { name: "Hire Data Labeling Workforce", href: "/our-services/hire-data-labeling-workforce" },
          { name: "Hire AI Project Managers", href: "/our-services/hire-ai-project-managers" }
        ]
      }
    ]
  },

  // 3. ABOUT US (Single Container)
 {
    title: "About Us",
    path: "/about-us",
    // We add a 'type: "card"' flag to tell MegaMenu to render differently
    layout: "card", 
    subsections: [
      {
        title: "Meet GenSquad", // This becomes the Section Heading
        description: "GenSquad is an AI-native talent marketplace that connects ambitious teams with world-class AI engineers and product leaders. Build faster with curated squads, lower hiring risk, and engagements tailored to your roadmap.",
        iconPath: icons.company,
        items: [
          { 
            name: "About us", 
            href: "/about-us",
            description: "GenSquad brings together battle‑tested AI engineers, data experts, and product leaders who have shipped real-world models and products. Matching the right people to the right problems is at the heart of what we do.",
            icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" // Info Icon
          },
          { 
            name: "Why us?", 
            href: "/why-us",
            description: "Our network spans multiple time zones and industries, with deep experience across LLMs, ML, data platforms, and cloud. A matching engine plus human curation ensures every squad fits your stack, stage, and culture.",
            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" // Check Badge
          },
          { 
            name: "Fractional CTO | CPO", 
            href: "/fractal-cto-cpo",
            description: "Tap into fractional AI Heads, solution architects, and product leaders who can design your AI strategy, de‑risk implementation, and guide your teams from prototype to production, without the overhead of a full-time hire.",
            icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" // Users
          }
        ]
      }
    ]
  },

  // 4. FOR COMPANIES (Updated with Descriptions)
  {
    title: "For Companies",
    path: "/for-companies",
    layout: "card",
    subsections: [
      {
        title: "Resources for Hiring",
        description: "Tools, insights, and stories to help you scale your engineering team with confidence.",
        iconPath: icons.resources,
        items: [
          { 
            name: "Rate Calculator", 
            href: "/for-companies/rate-calculator",
            description: "Get instant salary estimates for AI/ML roles across different regions and seniority levels to plan your budget.",
            icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          },
          { 
            name: "How we vet", 
            href: "/how-we-vet-developers",
            description: "Understand our 4-step vetting process including code challenges, communication checks, and technical deep dives.",
            icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          },
          { 
            name: "FAQ for Companies", 
            href: "/faq-for-companies",
            description: "Answers to common questions about contracts, IP rights, billing, and time-zone alignment.",
            icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          },
          { 
            name: "Case Studies", 
            href: "/case-studies",
            description: "Real-world examples of how companies reduced burn rate and shipped AI products faster with GenSquad.",
            icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          },
          { 
            name: "Testimonials", 
            href: "/testimonials",
            description: "See what CTOs and Founders are saying about their experience working with our matched talent.",
            icon: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          }
        ]
      }
    ]
  }
];