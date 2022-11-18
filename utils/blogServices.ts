import 'server-only';
import { urls } from '../statics/urls';
import { BlogPostType } from '../types/api/blog';

export async function getBlogPosts() {
  const res = await fetch(urls.baseUrl + 'api/blog');
  const data = await res.json();
  return data as BlogPostType[];
}
