import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import { BlogPostType } from '../../../types/api/blog';

const blogHandler = (req: NextApiRequest, res: NextApiResponse) => {
  dayjs().format();
  dayjs.extend(customParseFormat);

  const files = fs.readdirSync(path.join(process.cwd() + '/public/posts'));
  const processedPosts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(path.join(process.cwd() + '/public/posts', filename), 'utf-8');
    const { data: frontmatter, content } = matter(markdownWithMeta);
    return { slug, frontmatter, content };
  }) as unknown;
  const posts = processedPosts as BlogPostType[];

  const postsSortedByLatest = posts.sort((a, b) => {
    const dateUnix_a = dayjs(a.frontmatter.date, 'DD.MM.YYYY').unix();
    const dateUnix_b = dayjs(b.frontmatter.date, 'DD.MM.YYYY').unix();

    return dateUnix_b - dateUnix_a;
  });

  res.status(200).json(posts);
};

export default blogHandler;
