import type { BlogPost } from '../types/blog';

export function formatDate(date: Date): string {
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200; // 中文阅读速度
  const wordCount = content.length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} 分钟`;
}

export function getExcerpt(content: string, length: number = 150): string {
  if (content.length <= length) return content;
  return content.substring(0, length).trim() + '...';
}

export function sortPostsByDate(posts: BlogPost[]): BlogPost[] {
  return posts.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
}

export function getPostsByCategory(posts: BlogPost[], category: string): BlogPost[] {
  return posts.filter(post => post.category.toLowerCase() === category.toLowerCase());
}

export function getPostsByTag(posts: BlogPost[], tag: string): BlogPost[] {
  return posts.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  );
}

export function getFeaturedPosts(posts: BlogPost[]): BlogPost[] {
  return posts.filter(post => post.featured);
}

export function getAllTags(posts: BlogPost[]): string[] {
  const tags = new Set<string>();
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}

export function getAllCategories(posts: BlogPost[]): string[] {
  const categories = new Set<string>();
  posts.forEach(post => categories.add(post.category));
  return Array.from(categories).sort();
}