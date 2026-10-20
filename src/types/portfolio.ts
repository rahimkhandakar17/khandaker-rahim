export type SocialPlatform =
  | "facebook"
  | "instagram"
  | "linkedin"
  | "github"
  | "youtube"
  | "whatsapp";

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLinkMap = Partial<Record<SocialPlatform, string>>;

export type SkillItem = {
  name: string;
  description: string;
  icon: string;
  category?: string;
  proficiency?: string;
};

export type EducationItem = {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  description?: string;
  current?: boolean;
};

export type GalleryProject = {
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
};

export type ContactDetails = {
  email: string;
  phone: string;
  whatsapp: string;
  location?: string;
};

export type PortfolioConfig = {
  name: string;
  monogram: string;
  tagline: string;
  heroHeadline: string;
  heroIntro: string;
  heroBadge: string;
  bio: string;
  profileImage: string;
  websiteUrl: string;
  brandDescription: string;
  contact: ContactDetails;
  socialLinks: SocialLinkMap;
  navItems: NavItem[];
  skills: SkillItem[];
  education: EducationItem[];
  gallery: GalleryProject[];
  seo: {
    title: string;
    description: string;
  };
};
