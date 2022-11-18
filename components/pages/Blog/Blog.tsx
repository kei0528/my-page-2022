import { getBlogPosts } from '../../../utils/blogServices';
import { BaseMainLayout } from '../../uis/BaseMainLayout';
import { CardLandscape } from '../../uis/CardLandscape';
import { Header } from '../../uis/Header';

const Blog = async () => {
  const posts = await getBlogPosts();

  return (
    <>
      <Header intro="Check my" headline="Blog" />
      <BaseMainLayout>
        <div className="-mt-20 flex flex-col gap-3 pb-14">
          {posts.map((post, index) => (
            <CardLandscape
              key={post.slug}
              isEyeCatcher={index === 0}
              content={post.content}
              slug={post.slug}
              {...post.frontmatter}
            />
          ))}
        </div>
      </BaseMainLayout>
    </>
  );
};

export default Blog;
