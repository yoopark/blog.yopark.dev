import Image from 'next/image';
import Link from 'next/link';

import { allPosts } from '@/.contentlayer/generated';
import forest from '@/assets/images/forest.jpeg';
import { labelVariants } from '@/components/label';
import { ROUTES } from '@/constants/routes';
import { getTagCounterEntriesByHighestCount } from '@/utils/contentlayer';

import PostSummaryList from '@/app/components/post-summary/post-summary-list';

const HomePage = () => {
  const tagCounterEntries = getTagCounterEntriesByHighestCount();

  return (
    <div className="flex flex-col gap-10">
      <Image
        src={forest}
        alt="forest"
        className="object-cover w-full h-80 select-none"
        placeholder="blur"
      />
      <div className="max-w-screen-lg px-4 m-auto w-full">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-1">
            <p>안녕하세요, 박용준입니다.</p>
            <p>개발과 관련된 내용이라면 최대한 이곳에 연결시킵니다.</p>
            <p className="line-through">위키 겸 블로그 겸 메모장</p>
          </div>
          {tagCounterEntries.length > 0 && (
            <div className="flex flex-wrap gap-2">
              <Link
                href={ROUTES.ROOT}
                className={labelVariants({
                  size: 'lg',
                  isClickable: true,
                  isSelected: true,
                })}
              >
                All ({String(allPosts.length)})
              </Link>
              {tagCounterEntries.map(([tag, count]) => (
                <Link
                  href={ROUTES.TAG_OF(tag)}
                  key={tag}
                  className={labelVariants({ size: 'lg', isClickable: true })}
                >
                  {tag} ({String(count)})
                </Link>
              ))}
            </div>
          )}
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
