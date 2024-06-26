import TagBadgeListItem from '@/app/_components/tag-badge-list-item';
import type { TagBadgeType } from '@/types/tag-badge-type';

type TagBadgeListProps = {
  tagBadges: TagBadgeType[];
};

const TagBadgeList = ({ tagBadges }: TagBadgeListProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tagBadges.map((tagBadge) => (
        <TagBadgeListItem key={tagBadge.name} tagBadge={tagBadge} />
      ))}
    </div>
  );
};

export default TagBadgeList;
