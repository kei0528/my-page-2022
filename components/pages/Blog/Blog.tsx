import { BaseMainLayout } from '../../uis/BaseMainLayout';
import { CardLandscape } from '../../uis/CardLandscape';
import { Header } from '../../uis/Header';
import { SearchBar } from '../../uis/SearchBar';

export const Blog = () => {
  return (
    <>
      <Header intro='Check my' headline='Blog' />
      <BaseMainLayout>
        <SearchBar className='max-w-480px mx-auto mt-[-64px] w-2/3 min-w-[260px]' />
        <div className='my-14 flex flex-col gap-3'>
          <CardLandscape />
          <CardLandscape />
          <CardLandscape />
        </div>
      </BaseMainLayout>
    </>
  );
};
