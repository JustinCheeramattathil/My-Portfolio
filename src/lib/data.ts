/**
 * Single source of truth for all portfolio content.
 * Edit values here (contact details, links, metrics) to personalize the site.
 */

export const profile = {
  name: "Justin Thomas",
  role: "Mobile Application Engineer",
  tagline:
    "Flutter Developer specializing in high-performance mobile applications, payment systems, enterprise solutions, and cross-platform engineering.",
  headline: ["Building Scalable", "Mobile Experiences", "for Millions"],
  location: "Kannur, Kerala · Available remotely",
  email: "thomasjustin2203@gmail.com",
  phone: "+91 70129 31824",
  resumeUrl: "/Justin_Thomas_Resume_2026.pdf",
  socials: {
    github: "https://github.com/JustinCheeramattathil",
    githubHandle: "JustinCheeramattathil",
    linkedin: "https://www.linkedin.com/in/justin-thomas-a69949242",
    linkedinHandle: "justin-thomas-a69949242",
  },
} as const;

export const heroStats = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 12, suffix: "+", label: "Apps Delivered" },
  { value: 5, suffix: "", label: "Payment Integrations" },
  { value: 4, suffix: "", label: "Enterprise Projects" },
] as const;

export const heroPills = [
  "Flutter",
  "Dart",
  "Firebase",
  "REST APIs",
  "Stripe",
  "Google Pay",
  "Razorpay",
] as const;

export const aboutParagraphs = [
  "Enthusiastic Mobile Application Developer building scalable Flutter applications across enterprise mobility, tolling systems, payment platforms, healthcare, and school management.",
  "I care about the parts users never see: clean architecture, predictable state, and the millisecond budget that decides whether an app feels premium or sluggish.",
] as const;

export const passions = [
  "Mobile Engineering",
  "System Design",
  "Performance Optimization",
  "Cross-Platform Development",
  "Continuous Learning",
] as const;

export type Experience = {
  role: string;
  company: string;
  period: string;
  start: string;
  highlights: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    role: "Consultant Developer",
    company: "Neology Inc",
    period: "Mar 2025 – Nov 2025",
    start: "2025",
    highlights: [
      "Engineered large-scale tolling systems for transport networks",
      "Built and shipped payment gateway integrations end-to-end",
      "Met strict regulatory and compliance requirements",
      "Drove performance optimization across critical user flows",
    ],
    stack: ["Flutter", "Dart", "Payment Gateways", "REST APIs"],
  },
  {
    role: "Software Engineer",
    company: "Seeroo IT Solutions",
    period: "Sept 2024 – Present",
    start: "2024",
    highlights: [
      "Developed cross-platform features in Flutter and native Swift",
      "Designed scalable architectures for growing product surfaces",
      "Integrated REST APIs and third-party SDKs reliably",
      "Delivered measurable performance improvements",
    ],
    stack: ["Flutter", "Swift", "REST APIs", "SDKs"],
  },
  {
    role: "Junior Flutter Developer",
    company: "CAVZ Pvt Ltd",
    period: "Mar 2024 – Aug 2024",
    start: "2024",
    highlights: [
      "Collaborated across teams to ship product features",
      "Wired up backend integration for new app modules",
      "Optimized app responsiveness and load times",
    ],
    stack: ["Flutter", "Dart", "Firebase"],
  },
];

export type SkillCategory = {
  title: string;
  caption: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    caption: "Pixel-precise cross-platform UI",
    skills: ["Flutter", "Dart"],
  },
  {
    title: "Architecture",
    caption: "Structure that scales",
    skills: ["MVC", "MVVM", "Clean Architecture", "TDD"],
  },
  {
    title: "State Management",
    caption: "Predictable, testable state",
    skills: ["BLoC", "Cubit", "Provider", "Riverpod", "GetX", "MobX"],
  },
  {
    title: "Backend",
    caption: "Realtime & RESTful services",
    skills: ["Firebase", "REST APIs"],
  },
  {
    title: "Payments",
    caption: "Secure, compliant transactions",
    skills: ["Stripe", "Google Pay", "Razorpay", "PayPal", "Card Connect"],
  },
  {
    title: "Tools",
    caption: "Ship, track, and debug",
    skills: ["Git", "GitHub", "Bitbucket", "Postman", "Bugsnag", "Jira", "MantisBT"],
  },
  {
    title: "Cloud",
    caption: "Managed infrastructure",
    skills: ["Firebase", "Google Cloud"],
  },
];

export type Project = {
  name: string;
  category: string;
  blurb: string;
  features: string[];
  stack: string[];
  metrics: { value: string; label: string }[];
  links: { label: string; href: string }[];
  accent: "indigo" | "cyan" | "teal" | "violet";
  // Mockup config
  mock: {
    appName: string;
    primary: string;
    statLabel: string;
    statValue: string;
    rows: { label: string; value: string }[];
  };
};

export const projects: Project[] = [
  {
    name: "Peak Pass",
    category: "Enterprise Toll Management",
    blurb:
      "A tolling platform that turns vehicle crossings into a calm, transparent ledger — payments, disputes, and real-time activity in one place.",
    features: [
      "Guest crossings",
      "Vehicle management",
      "Secure payments",
      "Dispute tracking",
      "Real-time transactions",
    ],
    stack: ["Flutter", "BLoC", "Card Connect", "REST APIs"],
    metrics: [
      { value: "Real-time", label: "Transaction sync" },
      { value: "PCI", label: "Compliant flow" },
    ],
    links: [],
    accent: "indigo",
    mock: {
      appName: "Peak Pass",
      primary: "#6366F1",
      statLabel: "Balance",
      statValue: "$248.50",
      rows: [
        { label: "Toll · Gateway 4", value: "-$4.25" },
        { label: "Guest crossing", value: "-$6.00" },
        { label: "Top-up", value: "+$50.00" },
      ],
    },
  },
  {
    name: "Kosko",
    category: "Sales Management Platform",
    blurb:
      "Field-sales operations distilled into a single workflow — authenticate, manage shops, and track every delivery without the spreadsheet sprawl.",
    features: [
      "Secure authentication",
      "Shop management",
      "Daily delivery tracking",
      "Sales workflow automation",
    ],
    stack: ["Flutter", "Riverpod", "Firebase", "REST APIs"],
    metrics: [
      { value: "Daily", label: "Delivery tracking" },
      { value: "Auto", label: "Sales workflows" },
    ],
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.kosko.vansale",
      },
    ],
    accent: "cyan",
    mock: {
      appName: "Kosko",
      primary: "#06B6D4",
      statLabel: "Today's sales",
      statValue: "$3,420",
      rows: [
        { label: "Riverside Mart", value: "Delivered" },
        { label: "Corner Store", value: "En route" },
        { label: "Greenline Co.", value: "Pending" },
      ],
    },
  },
  {
    name: "Arcadia",
    category: "Education Fintech",
    blurb:
      "School fees, minus the friction. Parents pay securely, schools reconcile instantly, and every transaction stays auditable.",
    features: [
      "School fee payments",
      "Secure payment gateway",
      "Parent portal",
      "Transaction management",
    ],
    stack: ["Flutter", "Stripe", "MVVM", "Firebase"],
    metrics: [
      { value: "Secure", label: "Payment gateway" },
      { value: "Portal", label: "Parent access" },
    ],
    links: [
      {
        label: "Play Store",
        href: "https://play.google.com/store/apps/details?id=com.alshirawi.arcadia",
      },
    ],
    accent: "violet",
    mock: {
      appName: "Arcadia",
      primary: "#8B5CF6",
      statLabel: "Term fees",
      statValue: "$1,200",
      rows: [
        { label: "Tuition · Term 2", value: "Paid" },
        { label: "Lab fee", value: "Due" },
        { label: "Transport", value: "Paid" },
      ],
    },
  },
  {
    name: "Careocity",
    category: "Healthcare Platform",
    blurb:
      "A two-sided care marketplace — matching customers with care ambassadors by location and schedule, in real time.",
    features: [
      "Customer app",
      "Care Ambassador app",
      "Location-based matching",
      "Schedule management",
    ],
    stack: ["Flutter", "Cubit", "Google Cloud", "REST APIs"],
    metrics: [
      { value: "2 apps", label: "Customer + Ambassador" },
      { value: "Geo", label: "Location matching" },
    ],
    links: [
      {
        label: "Customer App",
        href: "https://play.google.com/store/apps/details?id=com.careocity.client",
      },
      {
        label: "Care Ambassador",
        href: "https://play.google.com/store/apps/details?id=com.careocity.careambassador",
      },
    ],
    accent: "teal",
    mock: {
      appName: "Careocity",
      primary: "#14B8A6",
      statLabel: "Next visit",
      statValue: "2:30 PM",
      rows: [
        { label: "Sarah · 0.8 mi", value: "Matched" },
        { label: "Home visit", value: "Confirmed" },
        { label: "Follow-up", value: "Scheduled" },
      ],
    },
  },
];

export const achievements = [
  { value: 4, suffix: "", label: "Enterprise Projects Delivered" },
  { value: 5, suffix: "", label: "Payment Integrations" },
  { value: 12, suffix: "+", label: "Mobile Applications Built" },
  { value: 2, suffix: "+", label: "Years of Development Experience" },
] as const;

export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { title: "Research", description: "Understand users, constraints, and the problem worth solving." },
  { title: "Architecture", description: "Choose patterns and state strategy that scale cleanly." },
  { title: "Development", description: "Build cross-platform features with disciplined, tested code." },
  { title: "Testing", description: "Unit, widget, and integration tests guard every release." },
  { title: "Deployment", description: "Ship to the stores with CI and staged rollouts." },
  { title: "Monitoring", description: "Track crashes and performance, then iterate fast." },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
] as const;
