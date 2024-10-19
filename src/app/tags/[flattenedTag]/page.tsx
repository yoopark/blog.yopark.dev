import { redirect } from 'next/navigation';

import { posts as allPosts } from '#velite';

import PostSummaryList from '@/app/_components/post-summary-list';
import TagBadgeList from '@/app/_components/tag-badge-list';
import { ROUTES } from '@/constants/routes';
import type { TagBadgeType } from '@/types/tag-badge-type';
import {
  findTagByFlattenedTag,
  getPostsByNewestByTag,
  getTagCounterEntriesByHighestCount,
} from '@/utils/velite';

type TagPageProps = {
  params: {
    flattenedTag: string;
  };
};

const TagPage = ({ params: { flattenedTag } }: TagPageProps) => {
  const originalTag = findTagByFlattenedTag(decodeURI(flattenedTag));

  if (originalTag === null) {
    return redirect(ROUTES.ROOT);
  }

  const tagBadgeList: TagBadgeType[] = [
    {
      name: '전체',
      count: allPosts.length,
      href: ROUTES.ROOT,
      isSelected: false,
    },
    ...tagCounterEntries.map(([tag, count]) => ({
      name: tag,
      count,
      href: ROUTES.TAG_OF(tag),
      isSelected: tag === originalTag,
    })),
  ];

  const posts = getPostsByNewestByTag(originalTag);

  return (
    <div className="flex flex-col gap-10">
      <div className="mx-auto w-full max-w-screen-lg px-4">
        <div className="flex gap-10">
          <TagBadgeList tagBadges={tagBadgeList} />
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">
              {originalTag} ({posts.length})
            </h2>
            <PostSummaryList posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
};

const tagCounterEntries = getTagCounterEntriesByHighestCount();

export default TagPage;
