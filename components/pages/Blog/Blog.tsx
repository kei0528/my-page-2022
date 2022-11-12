import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BaseMainLayout } from '../../uis/BaseMainLayout';
import { CardLandscape } from '../../uis/CardLandscape';
import { Header } from '../../uis/Header';
import { SearchBar } from '../../uis/SearchBar';

type BlogPostType = {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    categories: string[];
    thumbnail: string;
  };
}[];

async function getBlogPosts() {
  const files = fs.readdirSync(path.join('posts'));

  const proceccedPosts = files.map((filename) => {
    const slug = filename.replace('.md', '');
    const markdownWithMeta = fs.readFileSync(path.join('blogs', filename), 'utf-8');
    const { data: frontmatter } = matter(markdownWithMeta);
    return { slug, frontmatter };
  }) as unknown;
  const posts = proceccedPosts as BlogPostType;
  return posts;
}

const Blog = async () => {
  const posts = await getBlogPosts();
  return (
    <>
      <Header intro="Check my" headline="Blog" />
      <BaseMainLayout>
        <SearchBar className="max-w-480px mx-auto mt-[-64px] w-2/3 min-w-[260px]" placeholder="Search" />
        <div className="my-14 flex flex-col gap-3">
          {posts.map((post) => (
            <CardLandscape key={post.slug} {...post.frontmatter} slug={post.slug} />
          ))}
        </div>
      </BaseMainLayout>
    </>
  );
};

export default Blog;
