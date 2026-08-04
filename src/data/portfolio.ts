// ---------------------------------------------------------------------------
// EDIT ME: all personal information for the portfolio lives in this one file.
// Replace the "#" placeholder links once real URLs are available.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Swathi E S",
  role: "Cloud & DevOps Intern",
  company: "Akumen Technologies",
  headline: "Cloud & DevOps Intern | Linux Enthusiast | Automation & Cloud Learner",
  heroDescription:
    "Passionate about cloud infrastructure, Linux systems, automation and DevOps technologies. Currently building hands-on industry experience and developing practical skills in cloud and infrastructure management.",
  intro:
    "I am a Software Development student gaining practical industry experience as a Cloud & DevOps Intern at Akumen Technologies, with a strong interest in cloud infrastructure, Linux administration, automation, CI/CD and DevOps practices.",
  location: "Thrissur, Kerala, India",
  resumeUrl: "/resume.pdf",
  // Placeholders — replace with real links.
  github: "#",
  linkedin: "#",
  email: "#",
  githubUsername: "your-github-username",
};

export type SkillLevel = "Learning" | "Hands-on" | "Familiar";

export const skillGroups: {
  title: string;
  icon: string;
  skills: { name: string; level: SkillLevel }[];
}[] = [
  {
    title: "Cloud",
    icon: "Cloud",
    skills: [
      { name: "AWS", level: "Learning" },
      { name: "Azure", level: "Learning" },
      { name: "Cloud Computing", level: "Hands-on" },
      { name: "Virtual Machines", level: "Hands-on" },
      { name: "Cloud Infrastructure", level: "Learning" },
    ],
  },
  {
    title: "DevOps",
    icon: "GitBranch",
    skills: [
      { name: "Git", level: "Hands-on" },
      { name: "GitHub", level: "Hands-on" },
      { name: "CI/CD", level: "Learning" },
      { name: "Jenkins", level: "Learning" },
      { name: "Docker", level: "Learning" },
      { name: "Kubernetes", level: "Learning" },
      { name: "Infrastructure Automation", level: "Learning" },
    ],
  },
  {
    title: "Linux & System Administration",
    icon: "Terminal",
    skills: [
      { name: "Linux", level: "Hands-on" },
      { name: "Ubuntu", level: "Hands-on" },
      { name: "Bash / Shell Scripting", level: "Hands-on" },
      { name: "User Management", level: "Hands-on" },
      { name: "File Permissions", level: "Hands-on" },
      { name: "Process Management", level: "Hands-on" },
      { name: "Networking", level: "Familiar" },
      { name: "Cron Jobs", level: "Hands-on" },
      { name: "Log Management", level: "Hands-on" },
      { name: "System Monitoring", level: "Hands-on" },
    ],
  },
  {
    title: "Monitoring",
    icon: "Activity",
    skills: [
      { name: "Grafana", level: "Hands-on" },
      { name: "Prometheus", level: "Learning" },
      { name: "Netdata", level: "Hands-on" },
      { name: "System Metrics", level: "Hands-on" },
      { name: "Log Analysis", level: "Hands-on" },
    ],
  },
  {
    title: "Programming & Database",
    icon: "Code2",
    skills: [
      { name: "Python", level: "Hands-on" },
      { name: "C", level: "Familiar" },
      { name: "PHP", level: "Familiar" },
      { name: "SQL", level: "Hands-on" },
      { name: "HTML", level: "Hands-on" },
      { name: "CSS", level: "Hands-on" },
      { name: "JavaScript", level: "Familiar" },
    ],
  },
];

export const journey = [
  { title: "Software Development", detail: "BVoc foundation in programming, databases and web development." },
  { title: "Linux", detail: "Daily driving Linux — users, permissions, processes and the shell." },
  { title: "Networking", detail: "Understanding hosts, ports, services and connectivity basics." },
  { title: "Cloud", detail: "Exploring cloud computing models, virtual machines and infrastructure." },
  { title: "DevOps", detail: "Learning the culture and tooling that connects dev and operations." },
  { title: "Automation", detail: "Shell scripting and repeatable configuration over manual work." },
  { title: "CI/CD", detail: "Studying pipelines, builds and automated deployment workflows." },
  { title: "Monitoring", detail: "Metrics, dashboards and logs to keep systems observable." },
];

export const projects = [
  {
    title: "Linux System Monitoring",
    summary:
      "A Linux monitoring environment built with open-source tooling to observe system resources, running services and performance metrics in real time.",
    tech: ["Linux", "Grafana", "Netdata", "System Monitoring", "Log Analysis"],
    icon: "Activity",
  },
  {
    title: "Linux Mail Server",
    summary:
      "A local Linux mail server setup covering system users, permissions, local mail delivery and server configuration as a practical sysadmin exercise.",
    tech: ["Linux", "Mail Server", "User Management", "Local Email", "System Administration"],
    icon: "Mail",
  },
  {
    title: "Linux Game Hosting",
    summary:
      "A Linux-based game hosting environment — a hands-on exercise in configuring, networking and managing a Linux host and its services.",
    tech: ["Linux", "WSL", "Server Configuration", "Networking", "Hosting"],
    icon: "Server",
  },
  {
    title: "Indian Crime Rate Analytics",
    summary:
      "A Power BI analytics project exploring Indian crime rate data with interactive dashboards, visual storytelling and SQL-backed datasets.",
    tech: ["Power BI", "Data Analytics", "Data Visualization", "SQL"],
    icon: "BarChart3",
  },
  {
    title: "Workbyte",
    summary:
      "A web-based internship management platform for managing internships, students, mentors, companies and day-to-day internship activities.",
    tech: ["Python", "Django", "SQL", "HTML", "CSS", "JavaScript"],
    icon: "Briefcase",
  },
];

export const lab = [
  { emoji: "🐧", title: "Linux Administration", detail: "Users, permissions, services and everyday system operations." },
  { emoji: "☁️", title: "Cloud Computing", detail: "Cloud models, virtual machines and infrastructure fundamentals." },
  { emoji: "🔧", title: "Server Configuration", detail: "Setting up and tuning services on Linux hosts." },
  { emoji: "🐳", title: "Docker", detail: "Containers, images and portable application environments." },
  { emoji: "🔄", title: "CI/CD", detail: "Automated build, test and deployment pipelines." },
  { emoji: "📊", title: "Monitoring", detail: "Dashboards, metrics and alerting with Grafana and Netdata." },
  { emoji: "📜", title: "Shell Scripting", detail: "Bash scripts that remove repetitive manual steps." },
  { emoji: "🌐", title: "Networking", detail: "Ports, protocols, DNS and service connectivity." },
  { emoji: "🔐", title: "Security & Permissions", detail: "Least privilege, file modes and access control." },
  { emoji: "⚙️", title: "Automation", detail: "Repeatable, scripted infrastructure over manual work." },
];

export const experience = {
  role: "Cloud & DevOps Intern",
  company: "Akumen Technologies",
  period: "2026 – Present",
  description:
    "Currently gaining practical industry exposure in Cloud and DevOps technologies, Linux administration, infrastructure concepts, automation, monitoring and deployment practices.",
  currentlyLearning: [
    "Cloud Infrastructure",
    "Linux Administration",
    "DevOps Tools",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "Cloud Platforms",
    "Monitoring",
    "Automation",
    "Infrastructure as Code",
  ],
};

export const education = [
  {
    degree: "BVoc Software Development",
    school: "St. Mary's College, Thrissur",
    period: "2023 – 2026",
    result: "CGPA: 7.67",
  },
  {
    degree: "Higher Secondary",
    school: "GHSS Panjal",
    period: "",
    result: "96%",
  },
];

// Placeholder certifications — add certificate URLs when available.
export const certifications = [
  { title: "Cloud Computing", issuer: "Certificate placeholder", url: "" },
  { title: "DevOps", issuer: "Certificate placeholder", url: "" },
  { title: "Linux Administration", issuer: "Certificate placeholder", url: "" },
  { title: "Python", issuer: "Certificate placeholder", url: "" },
  { title: "Data Analytics", issuer: "Certificate placeholder", url: "" },
  { title: "Power BI", issuer: "Certificate placeholder", url: "" },
  { title: "Other Technical Certifications", issuer: "Certificate placeholder", url: "" },
];

// Placeholder repositories — replace url with real GitHub links when available.
export const repos = [
  {
    name: "linux-system-monitoring",
    description: "Monitoring stack for Linux hosts with dashboards for CPU, memory, disk and services.",
    tech: ["Linux", "Grafana", "Netdata"],
    url: "",
  },
  {
    name: "linux-mail-server",
    description: "Local mail server configuration notes and scripts for a Linux environment.",
    tech: ["Linux", "Shell", "Mail"],
    url: "",
  },
  {
    name: "workbyte",
    description: "Django internship management platform for students, mentors and companies.",
    tech: ["Python", "Django", "SQL"],
    url: "",
  },
  {
    name: "crime-rate-analytics",
    description: "Power BI dashboards analysing Indian crime rate datasets.",
    tech: ["Power BI", "SQL"],
    url: "",
  },
];

export const stats = [
  { label: "Projects built", value: 5, suffix: "" },
  { label: "CGPA", value: 7.67, suffix: "", decimals: 2 },
  { label: "Higher secondary", value: 96, suffix: "%" },
  { label: "Tech in the lab", value: 10, suffix: "+" },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#lab", label: "Lab" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#github", label: "Code" },
  { href: "#contact", label: "Contact" },
];