import type { PortfolioConfig } from "@/types/portfolio";

export const portfolio: PortfolioConfig = {
  name: "Khandaker Rahim",
  monogram: "KR",
  tagline: "Freelancer • Business-minded Creative • Digital Professional",
  heroHeadline: "Turning Ideas Into Digital Experiences.",
  heroIntro:
    "I'm Khandaker Rahim, a business-minded freelancer passionate about digital skills, creative projects, and building meaningful opportunities.",
  heroBadge: "Available for creative collaborations",
  bio:
    "I'm Khandaker Rahim, a business-minded digital professional who enjoys learning, creating, and building ideas into meaningful experiences. My work sits at the intersection of creativity, digital skills, freelancing, and entrepreneurial thinking, with a focus on practical value and polished execution.",
  profileImage: "/images/profile-placeholder.svg",
  websiteUrl: "https://your-domain.com",
  brandDescription:
    "Creative and business-minded digital professional focused on meaningful projects, smart growth, and polished online experiences.",
  contact: {
    email: "",
    phone: "",
    whatsapp: "",
    location: "",
  },
  socialLinks: {
    facebook: "",
    instagram: "",
    linkedin: "",
    github: "",
    youtube: "",
    whatsapp: "",
  },
  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ],
  skills: [
    {
      name: "SEO and Digital Marketing",
      description:
        "Strategic online positioning, search visibility, and audience growth with a thoughtful digital approach.",
      icon: "Search",
      category: "Marketing",
      proficiency: "",
    },
    {
      name: "Freelancing",
      description:
        "Flexible, client-focused execution for projects that need clarity, speed, and consistent communication.",
      icon: "BriefcaseBusiness",
      category: "Services",
    },
    {
      name: "Business and Entrepreneurship",
      description:
        "Creative thinking backed by practical business instincts, opportunity awareness, and grounded decision-making.",
      icon: "TrendingUp",
      category: "Business",
    },
    {
      name: "Web Development",
      description:
        "Modern, responsive digital experiences built with user-friendly structure and thoughtful design decisions.",
      icon: "Code2",
      category: "Development",
    },
    {
      name: "Content Creation",
      description:
        "Digital storytelling, creative output, and polished messaging designed to connect with the right audience.",
      icon: "PenTool",
      category: "Creative",
    },
    {
      name: "Creative Digital Projects",
      description:
        "Conceptual work, project ideation, and polished creative execution across digital channels and experiences.",
      icon: "Sparkles",
      category: "Design",
    },
  ],
  education: [
    {
      institution: "Add your institution",
      degree: "Add your qualification",
      field: "Add your field of study",
      startDate: "Add start date",
      endDate: "Add completion date",
      description: "Add a short description of your academic or training focus.",
      current: false,
    },
  ],
  gallery: [
    {
      title: "Sample Project Concept",
      category: "Branding",
      description:
        "Placeholder project artwork for your portfolio. Replace this item with your own work or real client projects.",
      image: "/images/project-1.svg",
      link: "",
    },
    {
      title: "Creative Showcase",
      category: "Digital Design",
      description:
        "A sample visual concept to demonstrate your gallery layout and style before adding your actual work.",
      image: "/images/project-2.svg",
      link: "",
    },
    {
      title: "Freelance Portfolio Highlight",
      category: "Freelance",
      description:
        "Use this item to preview a finished freelance project, case study, or creative campaign concept.",
      image: "/images/project-3.svg",
      link: "",
    },
  ],
  seo: {
    title: "Khandaker Rahim | Portfolio",
    description:
      "Premium portfolio website for Khandaker Rahim featuring creative work, skills, education, and contact information.",
  },
};
