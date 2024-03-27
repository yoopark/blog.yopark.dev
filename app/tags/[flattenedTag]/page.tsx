import Link from 'next/link';
import { redirect } from 'next/navigation';

import { allPosts } from '@/.contentlayer/generated';
import { badgeVariants } from '@/components/badge';
import { ROUTES } from '@/constants/routes';
import {
  findTagByFlattenedTag,
  getPostsByNewestByTag,
  getTagCounterEntriesByHighestCount,
} from '@/utils/contentlayer';

import PostSummaryList from '@/app/_components/post-summary/post-summary-list';

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
      <div className="max-w-screen-lg px-4 mx-auto w-full">
        <div className="flex flex-col gap-10">
          {tagCounterEntries.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              <Link
                href={ROUTES.ROOT}
                className={badgeVariants({ size: 'lg', isClickable: true })}
              >
                All ({String(allPosts.length)})
              </Link>
              {tagCounterEntries.map(([tag, count]) => (
                <Link
                  href={ROUTES.TAG_OF(tag)}
                  key={tag}
                  className={badgeVariants({
                    size: 'lg',
                    isClickable: true,
                    isSelected: tag === originalTag,
                  })}
                >
                  {tag} ({String(count)})
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
