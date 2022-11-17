'use client';
import { urls } from '../../../statics/urls';
import { cache, use, useEffect, useState } from 'react';
import { BlogPostType } from '../../../types/api/blog';
import { BaseMainLayout } from '../../uis/BaseMainLayout';
import { CardLandscape } from '../../uis/CardLandscape';
import { Header } from '../../uis/Header';
import { SearchBar } from '../../uis/SearchBar';
import { useCompState } from './Blog.state';

const getBlogPosts = cache(async () => {
  const res = await fetch(urls.baseUrl + 'api/blog');
  const data = await res.json();
  return data as BlogPostType[];
});

const Blog = () => {
  const posts = use(getBlogPosts());
  // const { searchedBlog, onSearchChange } = useCompState();
  // const [test, setTest] = useState('');

  return (
    <>
      <Header intro="Check my" headline="Blog" />
      <BaseMainLayout>
        <SearchBar
          className="mx-auto mt-[-64px] w-2/3 min-w-[260px] max-w-[480px]"
          placeholder="Search"
          // onChange={(e) => setTest(e.target.value)}
        />
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
