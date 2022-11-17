import { useEffect, useState } from 'react';
import { urls } from '../../../statics/urls';
import { BlogPostType } from '../../../types/api/blog';

export const useCompState = () => {
  const [searchedBlog, setSearchedBlog] = useState<{ keyword: string; results: BlogPostType[] }>({
    keyword: '',
    results: [],
  });

  const onSearchChange = async (keyword: string) => {
    if (keyword.length < 2) return;
    // const res = await fetch(urls.baseUrl + 'api/blog/search/' + keyword, { cache: 'no-cache' });
    // const blogs = (await res.json()) as BlogPostType[];

    setSearchedBlog({ keyword, results: [] });
  };

  useEffect(() => {
    console.log('searchedBlog', searchedBlog);
  });
  return { searchedBlog, onSearchChange };
};
