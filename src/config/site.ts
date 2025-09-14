import type { SiteConfig } from '../types/blog';

export const siteConfig: SiteConfig = {
  title: '我的博客',
  description: '一个基于 Astro 和 TailwindCSS 的现代博客',
  author: {
    name: '博主',
    avatar: '/avatar.jpg',
    bio: '热爱技术和生活的开发者',
    social: {
      github: 'https://github.com/yourusername',
      twitter: 'https://twitter.com/yourusername',
      email: 'your@email.com'
    }
  },
  url: 'https://your-blog.com',
  image: '/og-image.jpg',
  social: {
    github: 'https://github.com/yourusername',
    twitter: 'https://twitter.com/yourusername',
    email: 'your@email.com'
  }
};