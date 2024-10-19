import TagBadgeListItem from '@/app/_components/tag-badge-list-item';
import type { TagBadgeType } from '@/types/tag-badge-type';

type TagBadgeListProps = {
  tagBadges: TagBadgeType[];
};

const TagBadgeList = ({ tagBadges }: TagBadgeListProps) => {
  return (
    <aside className="sticky left-0 top-20 flex flex-col gap-2 self-start">
      {tagBadges.map((tagBadge) => (
        <TagBadgeListItem key={tagBadge.name} tagBadge={tagBadge} />
      ))}
    </aside>
  );
};

export default TagBadgeList;
