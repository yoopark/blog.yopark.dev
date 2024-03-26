import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { allPosts } from '@/.contentlayer/generated';
import forest from '@/assets/images/forest.jpeg';
import LabelWithCount from '@/components/label/label-with-count';
import { ROUTES } from '@/constants/routes';
import {
  findTagByFlattenedTag,
  getPostsByNewestByTag,
  getTagCounterEntriesByHighestCount,
} from '@/utils/contentlayer';
import { flatten } from '@/utils/string';

import PostSummaryList from '@/app/components/post-summary/post-summary-list';

type TagPageProps = {
  params: {
    flattenedTag: string;
  };
};

/* FIXME: TagPage와 HomePage의 디자인이 동일합니다. */
const TagPage = ({ params: { flattenedTag } }: TagPageProps) => {
  const originalTag = findTagByFlattenedTag(decodeURI(flattenedTag));

  if (originalTag === null) {
    return redirect(ROUTES.ROOT);
  }

  const posts = getPostsByNewestByTag(originalTag);
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
              <Link href={ROUTES.ROOT}>
                <LabelWithCount
                  text="All"
                  count={allPosts.length}
                  isSelected={false}
                />
              </Link>
              {tagCounterEntries.map(([tag, count]) => (
                <Link href={ROUTES.TAG_OF(flatten(tag))} key={tag}>
                  <LabelWithCount
                    text={tag}
                    count={count}
                    isSelected={tag === originalTag}
                  />
                </Link>
              ))}
            </div>
          )}
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-2xl">
              {originalTag} ({posts.length})
            </h2>
            <PostSummaryList posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagPage;
