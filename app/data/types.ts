export interface SocialLink {
  label: string;
  href: string;
}

export interface Author {
  name: string;
  href?: string;
  isMe?: boolean;
}

export interface Publication {
  id: string;
  title: string;
  authors: Author[];
  venue: string;
  year: number;
  projectPage?: string;
  arxiv?: string;
  pdf?: string;
  video?: string;
  code?: string;
  description: string;
  image: string;
  hoverImage?: string;
  hoverVideo?: string;
  highlight?: boolean;
  award?: string;
}

export interface ProfileData {
  name: string;
  photo: string;
  bio: string;
  email: string;
  socialLinks: SocialLink[];
}
