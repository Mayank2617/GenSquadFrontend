// Helper for icons (using simple SVG strings for portability)
const icons = {
  hiring: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  industry: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  solutions: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  tech: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  stack: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  role: "M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  default: "M13 10V3L4 14h7v7l9-11h-7z" // Lightning bolt
};

export const navigationData = [
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
        title: "Fractal CTO/CPO",
        iconPath: icons.solutions,
        items: [
          { name: "Gen AI", href: "/our-services/fractal-cto-cpo/gen-ai" },
          { name: "Backend Development", href: "/our-services/fractal-cto-cpo/backend-development" },
          { name: "Cloud Solution", href: "/our-services/fractal-cto-cpo/cloud-solution" },
          { name: "System Integration", href: "/our-services/fractal-cto-cpo/system-integration" },
          { name: "Managed Services", href: "/our-services/fractal-cto-cpo/managed-services" },
          { name: "Mobile Apps", href: "/our-services/fractal-cto-cpo/mobile-apps" },
          { name: "MVPs", href: "/our-services/fractal-cto-cpo/mvps" },
          { name: "Web Apps", href: "/our-services/fractal-cto-cpo/web-apps" }
        ]
      }
    ]
  }
];