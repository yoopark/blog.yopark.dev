import Link from 'next/link';

import { badgeVariants } from '@/components/badge';
import type { TagBadgeType } from '@/types/tag-badge-type';

type TagBadgeListItemProps = {
  tagBadge: TagBadgeType;
};

const TagBadgeListItem = ({
  tagBadge: { name, count, href, isSelected },
}: TagBadgeListItemProps) => {
  return (
    <Link
      href={href}
      className={badgeVariants({ size: 'lg', isClickable: true, isSelected })}
    >
      {name} ({count})
    </Link>
  );
};

export default TagBadgeListItem;
