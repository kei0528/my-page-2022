import Image from 'next/image';
import Link from 'next/link';
import img from '../../../public/assets/images/test.jpeg';

export const CardLandscape = () => {
  return (
    <Link href=''>
      <article className='relative flex gap-6 rounded-lg border-3 border-lightest-grey px-5 py-1 duration-200 hover:-translate-y-1 hover:shadow-md sm:px-1'>
        <div className='relative hidden w-[25%] min-w-[110px] max-w-[150px] overflow-hidden rounded-md  sm:block'>
          <Image className=' block h-full w-full bg-lightest-grey object-cover' src={img} placeholder='blur' fill alt='' />
        </div>
        <div className='h-fit py-3'>
          <h2 className='relative truncate text-base font-bold md:text-xl'>TITLE</h2>
          <div className='mt-5 flex flex-wrap items-center gap-x-10 gap-y-2 '>
            <div className='flex items-center gap-2'>
              <Image src='/assets/icons/Icon_Tag.svg' alt='Category' width={14} height={14} />
              <ul className='flex flex-wrap'>
                <li className='rounded bg-lightest-grey py-1 px-2 text-center text-xs'>category</li>
              </ul>
            </div>
            <time className='flex gap-2 text-xs'>
              <Image src='/assets/icons/Icon_Clock.svg' width={16} height={16} alt='Posted on' />
              2022/11/03
            </time>
          </div>
        </div>
      </article>
    </Link>
  );
};
