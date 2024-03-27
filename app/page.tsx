import { allPosts } from '@/.contentlayer/generated';
import forest from '@/assets/images/forest.jpeg';
import { ROUTES } from '@/constants/routes';
import { getTagCounterEntriesByHighestCount } from '@/utils/contentlayer';
import type { TagBadgeType } from '@/types/tag-badge-type';

import BannerImage from '@/app/_components/banner-image';
import IntroductionParagraph from '@/app/_components/introduction-paragrpah';
import PostSummaryList from '@/app/_components/post-summary-list';
import TagBadgeList from '@/app/_components/tag-badge-list';

const RootPage = () => {
  return (
    <div className="flex flex-col gap-10">
      <BannerImage src={forest} alt="forest" />
      <div className="max-w-screen-lg px-4 mx-auto w-full">
        <div className="flex flex-col gap-10">
          <IntroductionParagraph />
          <TagBadgeList tagBadges={tagBadgeList} />
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

const tagCounterEntries = getTagCounterEntriesByHighestCount();

const tagBadgeList: TagBadgeType[] = [
  {
    name: 'All',
    count: allPosts.length,
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
