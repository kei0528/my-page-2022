import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextApiRequest, NextApiResponse } from 'next';

const blogHandler = (req: NextApiRequest, res: NextApiResponse) => {
  const { slug } = req.query;
  const markdownWithMeta = fs.readFileSync(path.join(process.cwd() + '/public/posts', slug + '.md'), 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return res.status(200).json({
    frontmatter,
    content,
    slug,
  });
};

export default blogHandler;
