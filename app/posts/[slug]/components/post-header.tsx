import { format } from 'date-fns';
import Link from 'next/link';

import { badgeVariants } from '@/components/badge';
import { ROUTES } from '@/constants/routes';
import { Post } from '@contentlayer/generated';

type PostHeaderProps = Pick<Post, 'title' | 'description' | 'date' | 'tags'>;

const PostHeader = ({ title, description, date, tags }: PostHeaderProps) => {
  return (
    <div className="py-4 flex flex-col gap-6">
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
        <h1 className="font-bold text-4xl">{title}</h1>
        <p className="text-gray-600">{description}</p>
      </div>
      <p className="text-gray-600 text-sm">{format(date, 'yyyy년 M월 d일')}</p>
    </div>
  );
};

export default PostHeader;
