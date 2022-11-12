// 'use client';
// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
import { BaseMainLayout } from '../../uis/BaseMainLayout';
import { CardLandscape } from '../../uis/CardLandscape';
import { Header } from '../../uis/Header';
import { SearchBar } from '../../uis/SearchBar';
import { urls } from '../../../statics/urls';
import useSWR from 'swr';

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
  const res = await fetch(urls.baseUrl + 'api/blog');
  const data = await res.json();
  return data as BlogPostType;
}

const Blog = async () => {
  // const fetcher = async (url: string) => {
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   return data as BlogPostType;
  // };

  // const { data } = useSWR('/api/blog', fetcher);
  // // const posts = await getBlogPosts();
  // const posts = data;
  // console.log('posts', posts);
  const posts = await getBlogPosts();

  return (
    <>
      <Header intro="Check my" headline="Blog" />
      <BaseMainLayout>
        <SearchBar className="max-w-480px mx-auto mt-[-64px] w-2/3 min-w-[260px]" placeholder="Search" />
        <div className="my-14 flex flex-col gap-3">
          {posts && posts.map((post) => <CardLandscape key={post.slug} {...post.frontmatter} slug={post.slug} />)}
        </div>
      </BaseMainLayout>
    </>
  );
};

export default Blog;
