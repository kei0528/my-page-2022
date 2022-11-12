import s from './BlogPost.module.scss';
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import matter from 'gray-matter';
import { marked } from 'marked';
import { Header } from '../../uis/Header';
import { BaseMainLayout } from '../../uis/BaseMainLayout';
import Link from 'next/link';

async function getPost({ slug }: { slug: string }) {
  const markdownWithMeta = fs.readFileSync(path.join('blogs', slug + '.md'), 'utf-8');
  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    frontmatter,
    content,
    slug,
  };
}

const BlogPost = async ({ params }: { params?: any }) => {
  const { content, frontmatter } = await getPost(params);

  return (
    <>
      <Header bgImg={frontmatter.thumbnail} />
      <BaseMainLayout>
        <article className="relative z-10 -mt-36 mb-16 min-h-[320px] rounded-2xl bg-white px-5 pt-8 pb-10 shadow-lg duration-300 hover:-translate-y-1 hover:shadow-xl sm:mx-auto sm:w-11/12 sm:px-8 sm:pt-12 sm:pb-16 md:w-10/12">
          <Link
            className="mb-9 flex w-fit gap-2 text-sm text-black duration-200 hover:-translate-y-1 md:text-base"
            href="/v1/blog"
          >
            <Image src="/assets/icons/Icon_Arrow-left.svg" width={16} height={24} alt="" />
            Back
          </Link>
          <time className="font-game text-3xl leading-game-md text-black md:text-game-md">{frontmatter.date}</time>
          <h1 className="mt-2 mb-5 text-3xl font-bold tracking-wide text-gb-purple md:mt-2 md:mb-9 md:text-5xl">
            {frontmatter.title}
          </h1>
          <div
            className={`text-lg leading-6 md:text-xl md:leading-7 ${s.template_html}`}
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          ></div>
        </article>
      </BaseMainLayout>
    </>
  );
};

export default BlogPost;
