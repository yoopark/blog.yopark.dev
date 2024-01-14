'use client';

import { allPosts } from '@/.contentlayer/generated';
import { PostSummaryList } from '@/app/components/PostSummary/PostSummaryList';
import forest from '@/assets/images/forest.jpeg';
import { LabelWithCount } from '@/components/Label/LabelWithCount';
import { ROUTES } from '@/constants/routes';
import { getPostsByNewestByTag } from '@/utils/contentlayer/getPostsByNewestByTag';
import { getTagCounterEntriesByHighestCount } from '@/utils/contentlayer/getTagCounterEntriesByHighestCount';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tagParam = searchParams.get('tag');
  const posts = getPostsByNewestByTag(tagParam);
  const tagCounterEntries = getTagCounterEntriesByHighestCount();

  return (
    <div className="flex flex-col gap-10">
      <Image
        src={forest}
        alt="forest"
        className="object-cover w-full h-80"
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
              <LabelWithCount
                text="All"
                count={allPosts.length}
                isSelected={tagParam === null}
                onClick={() => router.push(ROUTES.ROOT)}
              />
              {tagCounterEntries.map(([tag, count]) => (
                <LabelWithCount
                  key={tag}
                  text={tag}
                  count={count}
                  isSelected={tag === tagParam}
                  onClick={() => router.push(ROUTES.TAG_OF(tag))}
                />
              ))}
            </div>
          )}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-2xl">
              {tagParam === null ? 'All Posts' : tagParam} ({posts.length})
            </h2>
            <PostSummaryList posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
