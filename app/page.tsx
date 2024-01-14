import { PostSummaryList } from '@/app/components/PostSummary/PostSummaryList';
import forest from '@/assets/images/forest.jpeg';
import { getAllPostsByNewest } from '@/utils/contentlayer/getAllPostsByNewest';
import Image from 'next/image';

const HomePage = () => {
  const allPosts = getAllPostsByNewest();

  return (
    <div className="flex flex-col gap-10">
      <Image src={forest} alt="forest" className="object-cover w-full h-80" />
      <div className="max-w-screen-lg px-4 m-auto w-full">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-1">
            <p>안녕하세요, 박용준입니다.</p>
            <p>개발과 관련된 내용이라면 최대한 이곳에 연결시킵니다.</p>
            <p className="line-through">위키 겸 블로그 겸 메모장</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-2xl">
              All Posts ({allPosts.length})
            </h2>
            <PostSummaryList posts={allPosts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
