import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextApiRequest, NextApiResponse } from 'next';
import { BlogPostType } from '../../../../types/api/blog';

const blogHandler = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const files = fs.readdirSync(path.join(process.cwd() + '/public/posts'));

    const processedPosts = files.map((filename) => {
      const slug = filename.replace('.md', '');
      const markdownWithMeta = fs.readFileSync(path.join(process.cwd() + '/public/posts', filename), 'utf-8');
      const { data: frontmatter } = matter(markdownWithMeta);
      return { slug, frontmatter };
    }) as unknown;

    const { keywordSearch } = req.query;
    if (typeof keywordSearch !== 'string') throw Error('Keyword must be string.');

    const allPosts = processedPosts as BlogPostType[];
    const keywordToLowercase = keywordSearch.toLowerCase();

    const targetPosts =
      allPosts.filter((post) => {
        const titleToLowercase = post.frontmatter.title.toLowerCase();
        return titleToLowercase.includes(keywordToLowercase);
      }) || [];

    return res.status(200).json(targetPosts);
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default blogHandler;
