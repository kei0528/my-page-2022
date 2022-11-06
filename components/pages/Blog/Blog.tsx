import { BaseMainLayout } from '../../uis/BaseMainLayout';
import { CardLandscape } from '../../uis/CardLandscape';
import { Header } from '../../uis/Header';
import { SearchBar } from '../../uis/SearchBar';

async function getBlogs() {
  const res = await fetch('http://localhost:3001/api/blogs');
  return res.json();
}

const Blog = async () => {
  const data = await getBlogs();
  console.log('data', data);
  return (
    <>
      <Header intro='Check my' headline='Blog' />
      <BaseMainLayout>
        <SearchBar className='max-w-480px mx-auto mt-[-64px] w-2/3 min-w-[260px]' placeholder='Search' />
        <div className='my-14 flex flex-col gap-3'>
          <CardLandscape />
          <CardLandscape />
          <CardLandscape />
        </div>
      </BaseMainLayout>
    </>
  );
};

export default Blog;
