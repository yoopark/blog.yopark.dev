import { posts } from '#velite';

import Hero from '@/app/_components/hero';
import PostSummaryList from '@/app/_components/post-summary-list';
import TagBadgeList from '@/app/_components/tag-badge-list';
import { ROUTES } from '@/constants/routes';
import type { TagBadgeType } from '@/types/tag-badge-type';
import { getTagCounterEntriesByHighestCount } from '@/utils/velite';

const RootPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <div className="mx-auto w-full max-w-screen-lg px-4">
        <div className="flex flex-col gap-10">
          <TagBadgeList tagBadges={tagBadgeList} />
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">All Posts ({posts.length})</h2>
            <PostSummaryList posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
};

const tagCounterEntries = getTagCounterEntriesByHighestCount();

const tagBadgeList: TagBadgeType[] = [
  {
    name: 'All',
    count: posts.length,
    href: ROUTES.ROOT,
    isSelected: true,
  },
  ...tagCounterEntries.map(([tag, count]) => ({
    name: tag,
    count,
    href: ROUTES.TAG_OF(tag),
    isSelected: false,
  })),
];

export default RootPage;
