import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextApiRequest, NextApiResponse } from 'next';

type BlogPostType = {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    categories: string[];
    thumbnail: string;
  };
}[];

const blogHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const files = fs.readdirSync(path.join(process.cwd() + '/public/posts'));

  const proceccedPosts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(path.join(process.cwd() + '/public/posts', filename), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);
    return { slug, frontmatter };
  }) as unknown;
  const posts = proceccedPosts as BlogPostType;
  res.status(200).json(posts);
};

export default blogHandler;
