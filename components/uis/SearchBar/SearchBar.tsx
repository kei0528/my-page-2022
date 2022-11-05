import s from './SearchBar.module.scss';
import Image from 'next/image';
import { ChangeEventHandler } from 'react';

export const SearchBar = ({ onChange, className, placeholder }: { onChange?: ChangeEventHandler; className?: string; placeholder?: string }) => {
  return (
    <div className={`relative ${className ?? ''}`}>
      <input placeholder={placeholder ?? ''} className={`${s.input} relative w-full rounded-full border-3 border-lightest-grey py-2 pl-14 pr-4 text-black !outline-none duration-200 focus-visible:-translate-y-1 focus-visible:shadow-md md:text-lg`} onChange={onChange}></input>
      <Image className='absolute top-0 bottom-0 left-3 z-10 my-auto' src='/assets/icons/Icon_Search.svg' width={32} height={32} alt='Search' />
    </div>
  );
};
