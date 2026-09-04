import { Code2, Monitor, Database, Briefcase, Settings, Wrench, Sparkles } from 'lucide-react';

export const services = [
  {
    id: "web-development",
    title: "Web Development",
    icon: Monitor,
    description: "Modern websites and web applications built around your business.",
    fullDescription: "I build responsive, high-performance websites and web applications tailored to your business goals. From landing pages to complex web portals, I ensure a seamless user experience.",
    deliverables: ["Custom UI/UX", "Responsive Design", "SEO Optimization", "CMS Integration"],
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"]
  },
  {
    id: "software-development",
    title: "Software Development",
    icon: Code2,
    description: "Custom software and internal tools designed around specific workflows.",
    fullDescription: "Stop relying on off-the-shelf software that doesn't quite fit. I develop custom software and internal tools that map exactly to your business processes.",
    deliverables: ["Custom Business Logic", "Database Design", "API Development", "User Roles & Permissions"],
    technologies: ["Python", "Node.js", "PostgreSQL", "React"]
  },
  {
    id: "saas-development",
    title: "SaaS Development",
    icon: Database,
    description: "MVPs, dashboards and complete SaaS products.",
    fullDescription: "Bring your software product idea to life. I can help you build scalable and secure SaaS platforms, complete with user management, payments, and administrative dashboards.",
    deliverables: ["MVP Development", "Multi-tenant Architecture", "Payment Gateway Integration", "Admin Dashboard"],
    technologies: ["Next.js", "Stripe", "Supabase", "AWS"]
  },
  {
    id: "business-automation",
    title: "Business Automation",
    icon: Settings,
    description: "Replace repetitive manual work with automated workflows and integrations.",
    fullDescription: "Save time and reduce errors by automating repetitive tasks. I integrate your existing tools and build custom workflows that let you focus on what matters.",
    deliverables: ["Workflow Automation", "API Integrations", "Data Syncing", "Custom Scripts"],
    technologies: ["Zapier", "Make", "Python", "Custom Webhooks"]
  },
  {
    id: "portfolio-websites",
    title: "Portfolio Websites",
    icon: Briefcase,
    description: "Professional personal and business portfolios that communicate credibility.",
    fullDescription: "Make a strong first impression with a premium portfolio website. I design clean, modern, and professional sites that showcase your work and attract high-value clients.",
    deliverables: ["Premium Design", "Case Study Layouts", "Fast Loading Times", "Contact Forms"],
    technologies: ["React", "Framer Motion", "Tailwind CSS"]
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    icon: Wrench,
    description: "Bug fixing, updates, improvements, optimization and ongoing support.",
    fullDescription: "Keep your digital products running smoothly. I offer ongoing maintenance, performance optimization, security updates, and feature enhancements.",
    deliverables: ["Performance Audits", "Security Updates", "Bug Fixes", "Feature Additions"],
    technologies: ["Monitoring Tools", "GitHub Actions", "Vercel"]
  },
  {
    id: "ai-data-solutions",
    title: "AI & Data Solutions",
    icon: Sparkles,
    description: "AI-powered applications, data workflows and intelligent automation.",
    fullDescription: "Leverage the power of AI to gain insights and automate complex decisions. I integrate AI models and build data pipelines to solve unique business challenges.",
    deliverables: ["LLM Integration", "Data Pipelines", "Predictive Analytics", "Custom Chatbots"],
    technologies: ["OpenAI API", "Python", "Pinecone", "LangChain"]
  }
];
