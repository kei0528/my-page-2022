export type BlogPostType = {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    categories: string[];
    thumbnail: string;
  };
  content: string;
};
