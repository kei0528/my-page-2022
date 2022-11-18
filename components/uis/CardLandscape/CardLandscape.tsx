import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuid } from 'uuid';

const ClockIcon = () => {
  return (
    <svg className="h-4 w-4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className="fill-black dark:fill-white"
        d="M8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM8.6 3.5V8.1875H11.7875V9.3125H7.475V3.5H8.6Z"
      />
    </svg>
  );
};

const TagIcon = () => {
  return (
    <svg className="h-4 w-4" width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className="fill-black dark:fill-white"
        d="M77.5692 40.818L38.2987 1.54733C37.8093 1.05526 37.2272 0.66514 36.586 0.399546C35.9449 0.133952 35.2574 -0.00183841 34.5634 3.43694e-05L7.92386 3.43694e-05C5.82306 0.00243741 3.80899 0.838042 2.3235 2.32353C0.838008 3.80903 0.00240304 5.8231 0 7.9239L0 34.5147C0.00115571 35.236 0.149489 35.9495 0.435921 36.6115C0.722353 37.2735 1.14086 37.8701 1.66583 38.3647L43.4413 77.6085C44.1732 78.3006 45.1429 78.6852 46.1502 78.6832C46.1994 78.6832 46.2489 78.6822 46.2988 78.6804C46.8226 78.6629 47.3375 78.541 47.8135 78.3217C48.2895 78.1025 48.7168 77.7903 49.0705 77.4036L77.6837 46.3016C78.378 45.5504 78.7539 44.5594 78.7325 43.5367C78.7112 42.5141 78.2942 41.5395 77.5692 40.818ZM46.0857 72.8449L5.28258 34.5147L5.28258 7.9239C5.28341 7.22364 5.56195 6.5523 6.05711 6.05714C6.55226 5.56198 7.2236 5.28344 7.92386 5.28261L34.5634 5.28261L72.9382 43.6576L46.0857 72.8449Z"
      />
      <path
        className="fill-black dark:fill-white"
        d="M21.7907 13.2065C20.0929 13.2065 18.4333 13.7099 17.0216 14.6532C15.61 15.5964 14.5097 16.9371 13.86 18.5056C13.2103 20.0742 13.0403 21.8002 13.3715 23.4654C13.7027 25.1305 14.5203 26.6601 15.7208 27.8606C16.9213 29.0611 18.4509 29.8787 20.116 30.2099C21.7812 30.5411 23.5072 30.3711 25.0758 29.7214C26.6443 29.0717 27.985 27.9714 28.9282 26.5598C29.8715 25.1481 30.3749 23.4885 30.3749 21.7907C30.3723 19.5148 29.4671 17.3329 27.8578 15.7236C26.2485 14.1143 24.0666 13.2091 21.7907 13.2065ZM21.7907 25.0923C21.1377 25.0923 20.4994 24.8986 19.9565 24.5358C19.4135 24.1731 18.9903 23.6574 18.7404 23.0541C18.4906 22.4508 18.4252 21.787 18.5526 21.1465C18.68 20.5061 18.9944 19.9178 19.4561 19.4561C19.9179 18.9943 20.5062 18.6799 21.1466 18.5525C21.7871 18.4251 22.4509 18.4905 23.0542 18.7404C23.6575 18.9903 24.1731 19.4134 24.5359 19.9564C24.8987 20.4993 25.0923 21.1377 25.0923 21.7907C25.0913 22.666 24.7432 23.5052 24.1242 24.1241C23.5053 24.7431 22.6661 25.0913 21.7907 25.0923V25.0923Z"
      />
    </svg>
  );
};

export const CardLandscape = ({
  content,
  title,
  categories,
  date,
  thumbnail,
  slug,
  isEyeCatcher = false,
}: {
  content: string;
  title: string;
  categories: string[];
  date: Date | string;
  thumbnail: string;
  slug: string;
  isEyeCatcher?: boolean;
}) => {
  return (
    <Link href={`/v1/blog/${slug}`}>
      <article
        className={`relative flex gap-6 rounded-lg border-3 border-lightest-grey bg-white  px-5 py-1 duration-200 hover:-translate-y-1 hover:shadow-md dark:border-2 dark:bg-black sm:pl-1 ${
          isEyeCatcher
            ? 'flex-col gap-0 px-0 dark:border-light-text-purple sm:flex-row sm:gap-6 sm:px-5'
            : 'border-darker-grey'
        }`}
      >
        <div
          className={`relative hidden overflow-hidden rounded-md  sm:block ${
            isEyeCatcher
              ? '!block min-h-[30vw] w-[35%]  min-w-[100%] max-w-[280px] sm:min-h-[auto] sm:min-w-[240px]'
              : 'w-[25%]  min-w-[110px]  max-w-[150px]'
          }`}
        >
          <Image className="block h-full w-full bg-lightest-grey object-cover" src={thumbnail} fill alt="" />
        </div>
        <div className={`h-fit py-3 ${isEyeCatcher ? 'px-5 sm:px-0' : ''}`}>
          <h2
            className={`relative whitespace-pre-line font-bold ${
              isEyeCatcher ? 'text-xl md:text-3xl' : 'text-base md:text-xl'
            }`}
          >
            {title}
          </h2>
          {isEyeCatcher && (
            <p className="truncate-line-3 mt-2 text-xs text-lighter-gb-purple dark:text-lighter-gb-purple md:text-sm">
              {content}
            </p>
          )}
          <div className="mt-5 flex flex-wrap items-center gap-x-10 gap-y-2 ">
            <div className="flex items-center gap-2">
              <TagIcon />
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
              <ClockIcon />
              {date.toLocaleString()}
            </time>
          </div>
        </div>
      </article>
    </Link>
  );
};
