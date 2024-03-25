import { format } from 'date-fns';
import Link from 'next/link';

import { Label } from '@/components/label';
import { ROUTES } from '@/constants/routes';
import { Post } from '@contentlayer/generated';

type PostHeaderProps = Pick<Post, 'title' | 'description' | 'date' | 'tags'>;

export const PostHeader = ({
  title,
  description,
  date,
  tags,
}: PostHeaderProps) => {
  return (
    <div className="py-4 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        {tags !== undefined && (
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Link key={tag} href={ROUTES.TAG_OF(tag)}>
                <Label text={tag} />
              </Link>
            ))}
          </div>
        )}
        <h1 className="font-bold text-4xl">{title}</h1>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
      <p className="text-gray-600 text-sm">{format(date, 'yyyy년 M월 d일')}</p>
    </div>
  );
};
