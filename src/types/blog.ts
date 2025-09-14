export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  publishDate: Date;
  author: string;
  tags: string[];
  image?: string;
  readingTime: string;
  category: string;
  featured?: boolean;
}

export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
  color: string;
}

export interface Author {
  name: string;
  avatar?: string;
  bio?: string;
  social?: {
    github?: string;
    twitter?: string;
    email?: string;
  };
}

export interface SiteConfig {
  title: string;
  description: string;
  author: Author;
  url: string;
  image: string;
  social: {
    github?: string;
    twitter?: string;
    email?: string;
  };
}