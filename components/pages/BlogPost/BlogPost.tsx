import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

async function getPost({ slug }: { slug: string }) {
  const markdownWithMeta = fs.readFileSync(path.join('blogs', slug + '.md'), 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    frontmatter,
    content,
    slug
  };
}

const BlogPost = async ({ params }: { params?: any }) => {
  const { content } = await getPost(params);

  return <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>;
};

export default BlogPost;
