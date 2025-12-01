// ... icons object remains same ...
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
  // ... (Use Cases object remains exactly the same as before) ...
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
      },
      {
        title: "Role",
        iconPath: icons.role,
        items: [
          { name: "Backend Developer", href: "/use-cases/role/backend-developer" },
          { name: "Blockchain Developer", href: "/use-cases/role/blockchain-developer" },
          { name: "Data Scientists", href: "/use-cases/role/data-scientists" },
          { name: "DevOps Developer", href: "/use-cases/role/devops-developer" },
          { name: "Frontend Developers", href: "/use-cases/role/frontend-developers" },
          { name: "Full Stack Developers", href: "/use-cases/role/full-stack-developers" },
          { name: "Solution Architects", href: "/use-cases/role/solution-architects" },
          { name: "Web Developers", href: "/use-cases/role/web-developers" }
        ]
      }
    ]
  },
  {
    title: "Our Services",
    path: "/our-services",
    subsections: [
      {
        title: "Hire by Skill",
        iconPath: icons.stack,
        items: [
          { name: "Hire AI Engineers", href: "/our-services/hire-by-skill/hire-ai-engineers" },
          { name: "Hire Machine Learning Engineers", href: "/our-services/hire-by-skill/hire-machine-learning-engineers" },
          { name: "Hire Deep Learning Engineers", href: "/our-services/hire-by-skill/hire-deep-learning-engineers" },
          { name: "Hire NLP Engineers", href: "/our-services/hire-by-skill/hire-nlp-engineers" },
          { name: "Hire LLM Engineers", href: "/our-services/hire-by-skill/hire-llm-engineers" },
          { name: "Hire Computer Vision Engineers", href: "/our-services/hire-by-skill/hire-computer-vision-engineers" },
          { name: "Hire Data Scientists", href: "/our-services/hire-by-skill/hire-data-scientists" },
          { name: "Hire Data Engineers", href: "/our-services/hire-by-skill/hire-data-engineers" },
          { name: "Hire Data Analysts", href: "/our-services/hire-by-skill/hire-data-analysts" },
          { name: "Hire MLOps Engineers", href: "/our-services/hire-by-skill/hire-mlops-engineers" },
          { name: "Hire Cloud Engineers", href: "/our-services/hire-by-skill/hire-cloud-engineers" },
          { name: "Hire Backend Developers", href: "/our-services/hire-by-skill/hire-backend-developers" },
          { name: "Hire Full-Stack Developers", href: "/our-services/hire-by-skill/hire-full-stack-developers" },
          { name: "Hire Python Developers", href: "/our-services/hire-by-skill/hire-python-developers" },
          { name: "Hire DevOps Engineers", href: "/our-services/hire-by-skill/hire-devops-engineers" },
          { name: "Hire LangChain Developers", href: "/our-services/hire-by-skill/hire-langchain-developers" },
          { name: "Hire LlamaIndex Developers", href: "/our-services/hire-by-skill/hire-llamaindex-developers" },
          { name: "Hire RAG Experts", href: "/our-services/hire-by-skill/hire-rag-experts" },
          { name: "Hire Vector DB Engineers", href: "/our-services/hire-by-skill/hire-vector-db-engineers" },
          { name: "Hire Prompt Engineers", href: "/our-services/hire-by-skill/hire-prompt-engineers" },
          { name: "Hire ChatGPT Automation Experts", href: "/our-services/hire-by-skill/hire-chatgpt-automation-experts" },
          { name: "Hire n8n Experts", href: "/our-services/hire-by-skill/hire-n8n-experts" },
          { name: "Hire Zapier Experts", href: "/our-services/hire-by-skill/hire-zapier-experts" },
          { name: "Hire Make.com Experts", href: "/our-services/hire-by-skill/hire-make-com-experts" },
          { name: "Hire Airflow Engineers", href: "/our-services/hire-by-skill/hire-airflow-engineers" },
          { name: "Hire Kubeflow Engineers", href: "/our-services/hire-by-skill/hire-kubeflow-engineers" },
          { name: "Hire Voice AI Engineers", href: "/our-services/hire-by-skill/hire-voice-ai-engineers" },
          { name: "Hire Chatbot Developers", href: "/our-services/hire-by-skill/hire-chatbot-developers" },
          { name: "Hire LLM Fine-Tuning Specialists", href: "/our-services/hire-by-skill/hire-llm-fine-tuning-specialists" },
          { name: "Hire API Integration Engineers", href: "/our-services/hire-by-skill/hire-api-integration-engineers" }
        ]
      },
      {
        title: "Hire by Role",
        iconPath: icons.role,
        items: [
          { name: "Hire AI Solution Architects", href: "/our-services/hire-by-role/hire-ai-solution-architects" },
          { name: "Hire AI QA & Testing Specialists", href: "/our-services/hire-by-role/hire-ai-qa-testing-specialists" },
          { name: "Hire AI Product Managers", href: "/our-services/hire-by-role/hire-ai-product-managers" },
          { name: "Hire Data Labeling Workforce", href: "/our-services/hire-by-role/hire-data-labeling-workforce" },
          { name: "Hire AI Project Managers", href: "/our-services/hire-by-role/hire-ai-project-managers" }
        ]
      }
    ]
  },
  {
    title: "About Us",
    path: "/about-us",
    subsections: [
      {
        title: "", // Empty title to show links directly
        iconPath: icons.company,
        items: [
          { name: "About us", href: "/about-us" },
          { name: "Why us?", href: "/why-us" },
          { name: "Fractal CTO/CPO", href: "/fractal-cto-cpo" }
        ]
      }
    ]
  },
  {
    title: "For Companies",
    path: "/for-companies",
    subsections: [
      {
        title: "", // Empty title to show links directly
        iconPath: icons.resources,
        items: [
          { name: "Rate Calculator", href: "/for-companies/rate-calculator" },
          { name: "How we vet developers", href: "/how-we-vet-developers" },
          { name: "FAQ for Companies", href: "/faq-for-companies" },
          { name: "Case Studies", href: "/case-studies" },
          { name: "Testimonials", href: "/testimonials" }
        ]
      }
    ]
  }
];