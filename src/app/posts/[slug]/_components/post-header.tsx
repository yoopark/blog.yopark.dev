import Link from 'next/link';

import { type Post } from '#velite';
import { format } from 'date-fns';

import { badgeVariants } from '@/components/badge';
import { ROUTES } from '@/constants/routes';

type PostHeaderProps = Pick<Post, 'title' | 'description' | 'date' | 'tags'>;

const PostHeader = ({ title, description, date, tags }: PostHeaderProps) => {
  return (
    <div className="flex flex-col gap-6 py-4">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          {tags !== undefined && (
            <div className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={ROUTES.TAG_OF(tag)}
                  className={badgeVariants({ isClickable: true })}
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>
      <p className="text-sm text-gray-600">{format(date, 'yyyy년 M월 d일')}</p>
    </div>
  );
};

export default PostHeader;
