import BlogPost from '../../../../components/pages/BlogPost';
import { getBlogPosts } from '../../../../utils/blogServices';
export default BlogPost;

export const generateStaticParams = async () => {
  const posts = await getBlogPosts();
  const slugs = posts.map((post) => ({ slug: post.slug }));
  return slugs;
};
