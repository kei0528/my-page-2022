import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';

export const CardLandscape = ({
  title,
  categories,
  date,
  thumbnail,
  slug,
}: {
  title: string;
  categories: string[];
  date: Date | string;
  thumbnail: string;
  slug: string;
}) => {
  return (
    <Link href={`/v1/blog/${slug}`}>
      <article className="relative flex gap-6 rounded-lg border-3 border-lightest-grey px-5 py-1 duration-200 hover:-translate-y-1 hover:shadow-md sm:px-1">
        <div className="relative hidden w-[25%] min-w-[110px] max-w-[150px] overflow-hidden rounded-md  sm:block">
          <Image className=" block h-full w-full bg-lightest-grey object-cover" src={thumbnail} fill alt="" />
        </div>
        <div className="h-fit py-3">
          <h2 className="relative truncate text-base font-bold md:text-xl">{title}</h2>
          <div className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-2 ">
            <div className="flex items-center gap-2">
              <Image src="/assets/icons/Icon_Tag.svg" alt="Category" width={14} height={14} />
              <ul className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <li
                    key={uuid()}
                    className="rounded bg-lightest-grey py-1 px-2 text-center text-xs dark:bg-dark-purple dark:text-lighter-grey"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            <time className="flex gap-2 text-xs dark:text-lighter-grey">
              <Image src="/assets/icons/Icon_Clock.svg" width={16} height={16} alt="Posted on" />
              {date.toLocaleString()}
            </time>
          </div>
        </div>
      </article>
    </Link>
  );
};
