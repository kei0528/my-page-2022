import s from './BlogPost.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { marked } from 'marked';
import { Header } from '../../uis/Header';
import { BaseMainLayout } from '../../uis/BaseMainLayout';
import { urls } from '../../../statics/urls';

const Arrow = () => {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
      <path
        className="fill-black dark:fill-white"
        d="M10.2915 5.95832H3.86734L5.83359 3.59665C5.92553 3.48604 5.96976 3.34343 5.95656 3.20019C5.94335 3.05696 5.87379 2.92484 5.76317 2.8329C5.65255 2.74096 5.50994 2.69673 5.36671 2.70993C5.22348 2.72314 5.09136 2.7927 4.99942 2.90332L2.29109 6.15332C2.27287 6.17917 2.25657 6.20633 2.24234 6.23457C2.24234 6.26165 2.24234 6.2779 2.20442 6.30499C2.17987 6.36709 2.16701 6.43321 2.1665 6.49999C2.16701 6.56677 2.17987 6.63288 2.20442 6.69499C2.20442 6.72207 2.20442 6.73832 2.24234 6.7654C2.25657 6.79365 2.27287 6.8208 2.29109 6.84665L4.99942 10.0967C5.05035 10.1578 5.11413 10.207 5.18621 10.2407C5.2583 10.2744 5.33693 10.2918 5.4165 10.2917C5.54307 10.2919 5.66572 10.2478 5.76317 10.1671C5.81802 10.1216 5.86336 10.0658 5.89659 10.0027C5.92982 9.93971 5.9503 9.87075 5.95684 9.79981C5.96338 9.72886 5.95586 9.65732 5.93471 9.58928C5.91356 9.52125 5.8792 9.45805 5.83359 9.40332L3.86734 7.04165H10.2915C10.4352 7.04165 10.5729 6.98458 10.6745 6.883C10.7761 6.78142 10.8332 6.64365 10.8332 6.49999C10.8332 6.35633 10.7761 6.21855 10.6745 6.11697C10.5729 6.01539 10.4352 5.95832 10.2915 5.95832Z"
      />
    </svg>
  );
};

async function getPost({ slug }: { slug: string }) {
  console.log('does it work?', urls.baseUrl + 'api/blog/' + slug);
  const data = await fetch(urls.baseUrl + 'api/blog/' + slug);
  const res = await data.json();
  return res;
}

const BlogPost = async ({ params }: { params?: any }) => {
  const { content, frontmatter } = await getPost(params);
  return (
    <>
      <Header bgImg={frontmatter.thumbnail} />
      <BaseMainLayout>
        <article className="relative z-10 -mt-36 mb-16 min-h-[320px] rounded-2xl bg-white px-5 pt-8 pb-10 shadow-lg duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-darker-grey dark:shadow-light sm:mx-auto sm:w-11/12 sm:px-8 sm:pt-12 sm:pb-16 md:w-10/12">
          <Link
            className="mb-9 flex w-fit gap-2 text-sm text-black duration-200 hover:-translate-y-1 dark:text-white md:text-base"
            href="/v1/blog"
          >
            <Arrow />
            {/* <Image src="/assets/icons/Icon_Arrow-left.svg" width={16} height={24} alt="" /> */}
            Back
          </Link>
          <time className="font-game text-3xl leading-game-md text-dark-purple dark:text-lighter-gb-purple md:text-game-md">
            {frontmatter.date}
          </time>
          <h1 className="mt-2 mb-5 text-3xl font-bold tracking-wide text-gb-purple dark:text-light-text-purple md:mt-2 md:mb-9 md:text-5xl">
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
